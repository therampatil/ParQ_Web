"use client"

import { useEffect, useRef, useState } from "react"
import { Package, Wifi, CreditCard, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Package,
    title: "Unbox & Install",
    description: "Simple 5-minute setup. Mount the ParQ device on your parking space and connect to your home WiFi.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Wifi,
    title: "Connect & Configure",
    description: "Use our app to set availability, pricing, and preferences. Our smart algorithm optimizes for maximum earnings.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: CreditCard,
    title: "Welcome Drivers",
    description: "Drivers find and pay for your spot automatically. Access is controlled securely through the ParQ device.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: TrendingUp,
    title: "Earn Passively",
    description: "Watch your earnings grow. Weekly automatic payouts directly to your bank account. No effort required.",
    color: "bg-emerald-100 text-emerald-600",
  },
]

export function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleSteps((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 }
    )

    const stepElements = document.querySelectorAll("[data-step]")
    stepElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary font-medium mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Start Earning in Four Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From unboxing to your first payout, we&apos;ve made the entire process seamless and straightforward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              data-step
              data-index={index}
              className={`relative transition-all duration-700 ${
                visibleSteps.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-4">
                  <div
                    className={`h-full bg-primary transition-all duration-1000 ${
                      visibleSteps.includes(index + 1) ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}

              <div className="bg-background rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
