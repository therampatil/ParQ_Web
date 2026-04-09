"use client"

import { Coins, Clock, Building2, Zap } from "lucide-react"

const benefits = [
  {
    icon: Coins,
    title: "No effort income",
    description: "Earn passively from your existing space",
  },
  {
    icon: Clock,
    title: "Flexible timing",
    description: "You decide when space is available",
  },
  {
    icon: Building2,
    title: "Works everywhere",
    description: "Homes, offices, shops - any parking space",
  },
  {
    icon: Zap,
    title: "No complicated setup",
    description: "Get started in just a few minutes",
  },
]

export function WhyParQ() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Why Choose ParQ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-2"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative z-10 text-center">
                {/* Icon with glow */}
                <div className="relative mx-auto mb-4 inline-block">
                  <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl transition-all duration-300 group-hover:bg-primary/50 group-hover:scale-125" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-bold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
