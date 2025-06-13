"use server"

import { z } from "zod"

// Define validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  services: z.array(z.string()).optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: FormData) {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string
    const services = formData.getAll("services") as string[]

    // Validate form data
    const validatedData = contactFormSchema.parse({
      name,
      email,
      phone,
      subject,
      message,
      services,
    })

    // Here you would typically send the data to your backend, email service, etc.
    console.log("Form data:", validatedData)

    // Return success response
    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        success: false,
        message: "Please check the form for errors.",
        errors: error.errors.reduce(
          (acc, curr) => {
            const path = curr.path[0] as string
            acc[path] = curr.message
            return acc
          },
          {} as Record<string, string>,
        ),
      }
    }

    // Return generic error
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
