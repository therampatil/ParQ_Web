"use client";

import { Clock, Fuel, BrainCircuit } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "No more 15–20 minutes wasted searching",
  },
  {
    icon: Fuel,
    title: "Save Fuel",
    description: "Reduce unnecessary fuel consumption",
  },
  {
    icon: BrainCircuit,
    title: "Save Stress",
    description: "Plan your trip better",
  },
];

export function ValueSection() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Save Time. Save Fuel. Save Stress.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-card p-8 text-center transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-2"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Icon with glow */}
                <div className="relative mx-auto mb-6 inline-block">
                  <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl transition-all duration-300 group-hover:bg-primary/50 group-hover:scale-125" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                    <benefit.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-bold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
