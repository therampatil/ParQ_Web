"use client"

import { Smartphone, MapPinned, CheckCircle2, Navigation } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Open ParQ",
    description: "See available parking spots around you",
    icon: Smartphone,
  },
  {
    number: "2",
    title: "Choose Your Spot",
    description: "Compare distance, price, and availability",
    icon: MapPinned,
  },
  {
    number: "3",
    title: "Book Instantly",
    description: "Secure your spot in seconds",
    icon: CheckCircle2,
  },
  {
    number: "4",
    title: "Navigate & Park",
    description: "Reach your spot without stress",
    icon: Navigation,
  },
]

export function HowItWorksDriver() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Find Parking in 4 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background p-6 transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-2"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative z-10">
                {/* Step number */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-2xl font-bold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-background/50">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 hidden lg:block h-0.5 w-6 bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
