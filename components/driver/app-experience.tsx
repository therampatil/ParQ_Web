"use client";

import { Smartphone, Map, FileText, CheckCircle } from "lucide-react";
import Image from "next/image";

const screenshots = [
  {
    title: "Map with parking pins",
    icon: Map,
    description: "Live parking availability",
  },
  {
    title: "Spot detail screen",
    icon: FileText,
    description: "Price, distance & features",
  },
  {
    title: "Booking confirmation",
    icon: CheckCircle,
    description: "Instant confirmation",
  },
];

export function AppExperience() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Parking, Visualized
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Everything you need — right on your screen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Side: Features Content */}
          <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-linear-to-br from-primary/5 to-background p-6 transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1"
              >
                {/* Background effect */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-row items-center gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 shadow-inner group-hover:bg-primary/20 transition-colors">
                    <screenshot.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold">
                      {screenshot.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Mockup Image matching AuthorityHero style */}
          <div className="relative flex justify-center lg:justify-end px-4 order-1 lg:order-2">
            <div className="group relative cursor-pointer">
              {/* Glow effect behind phone - animated on hover */}
              <div className="absolute inset-0 rounded-[3rem] bg-primary/20 blur-3xl transition-all duration-500 group-hover:bg-primary/40 group-hover:scale-110" />

              {/* Phone mockup with hover effects */}
              <div className="relative overflow-hidden rounded-[3rem] border-8 border-foreground/10 shadow-2xl transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(88,112,129,0.5)] group-hover:scale-105 group-hover:-translate-y-2 group-hover:rotate-1">
                <Image
                  src="/images/ParkingVisualized.jpeg"
                  alt="ParQ Driver Parking Visualized Interface"
                  width={300}
                  height={650}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Floating badge with hover animation */}
              <div className="absolute -top-4 -right-4 rounded-full bg-primary px-4 py-2 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <p className="text-sm font-bold text-primary-foreground">
                  Live Spots
                </p>
              </div>

              {/* Additional floating element on hover */}
              <div className="absolute -bottom-4 -left-4 rounded-full bg-green-500 px-4 py-2 shadow-lg opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                <p className="text-sm font-bold text-white">Easy Map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
