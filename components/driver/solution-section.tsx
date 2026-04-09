"use client";

import { Zap, Search, DollarSign, MapPin } from "lucide-react";

const features = [
  {
    icon: Search,
    text: "Instantly find nearby parking spaces",
  },
  {
    icon: DollarSign,
    text: "Compare prices and availability",
  },
  {
    icon: MapPin,
    text: "Book before you arrive",
  },
];

export function SolutionSection() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="mb-4 flex justify-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Zap className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            ParQ Makes It Effortless
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            With ParQ, you can:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8 text-center transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-2"
            >
              {/* Background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="text-base font-medium">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
