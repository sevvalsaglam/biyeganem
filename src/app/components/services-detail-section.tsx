"use client"

import { getIcon } from "@/lib/get-icon"
import { services } from "../data/services-data"
import { ServiceDetail } from "./service-detail"

export function ServicesDetailSection() {
  return (
    <section className="py-16 bg-[#f0efe6]">
      <div className="container mx-auto px-4 space-y-16">
        {services.map((service) => (
          <ServiceDetail
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.detailedDescription}
            features={service.features}
            image={service.image}
            slug={service.slug}
            icon={getIcon(service.icon, "sm")}
            reverse={service.reverse}
          />
        ))}
      </div>
    </section>
  )
}
