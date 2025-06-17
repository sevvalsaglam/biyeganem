"use server"

import { z } from "zod"

// Form doğrulama şeması
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "İsim en az 2 karakter olmalıdır." }),
  email: z.string().email({ message: "Lütfen geçerli bir e-posta adresi giriniz." }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: "Konu en az 2 karakter olmalıdır." }),
  message: z.string().min(10, { message: "Mesaj en az 10 karakter olmalıdır." }),
  services: z.array(z.string()).optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      services: formData.getAll("services") as string[],
    }

    const validatedData = contactFormSchema.parse(data)

    // Burada genellikle bir API isteği ya da e-posta servisine yönlendirme yapılır
    console.log("Form verisi:", validatedData)

    return {
      success: true,
      message: "Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Lütfen formdaki hataları kontrol ediniz.",
        errors: error.errors.reduce((acc, curr) => {
          const path = curr.path[0] as string
          acc[path] = curr.message
          return acc
        }, {} as Record<string, string>),
      }
    }

    return {
      success: false,
      message: "Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
    }
  }
}
