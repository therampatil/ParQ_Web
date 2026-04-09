"use client";

import { MapPin, IndianRupee, Calendar, Wallet } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "List Your Space",
    description: "Add your location, availability, and details in minutes",
    icon: MapPin,
  },
  {
    number: "2",
    title: "Set Your Price",
    description: "You decide how much to charge",
    icon: IndianRupee,
  },
  {
    number: "3",
    title: "Get Bookings",
    description: "Drivers book your space instantly",
    icon: Calendar,
  },
  {
    number: "4",
    title: "Earn Money",
    description: "Track earnings directly inside the app",
    icon: Wallet,
  },
];

export function HowItWorksOwner() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24 lg:px-8 bg-linear-to-b from-muted/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text & Steps */}
          <div className="space-y-10 order-2 lg:order-1">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-foreground">
                Start Earning in <br className="hidden md:block" /> 4 Simple
                Steps
              </h2>
              <p className="max-w-xl text-lg md:text-xl text-muted-foreground">
                Turning your unused space into an income stream is quick,
                simple, and entirely on your terms.
              </p>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-7 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-primary/20 before:to-transparent">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6 group"
                >
                  {/* Step Number Badge */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-primary/20 bg-background text-xl font-bold text-primary shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-primary/30 group-hover:shadow-lg z-10 relative">
                    {step.number}
                  </div>

                  <div className="flex flex-col gap-2 pb-6 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                        <step.icon className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="group relative cursor-pointer pt-8 md:pt-0">
              {/* Glow effects */}
              <div className="absolute inset-0 rounded-[3rem] bg-primary/15 blur-3xl transition-all duration-500 group-hover:bg-primary/30 group-hover:scale-110" />

              {/* Phone Container */}
              <div className="relative overflow-hidden rounded-[3rem] border-[6px] md:border-8 border-foreground/10 bg-background shadow-2xl transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(var(--primary),0.3)] group-hover:-translate-y-2 group-hover:scale-[1.02]">
                <Image
                  src="/images/StartEarningin4SimpleSteps.jpeg"
                  alt="ParQ Listing Process"
                  width={100}
                  height={650}
                  className="object-cover w-62.5 md:w-75 h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute top-10 -right-4 md:-right-8 rounded-2xl bg-background/95 backdrop-blur-sm border border-border px-4 py-3 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 z-20">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <p className="text-sm font-bold text-foreground whitespace-nowrap">
                    2 Mins Setup
                  </p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute bottom-16 -left-4 md:-left-8 rounded-2xl bg-primary px-5 py-3 shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:-rotate-3 z-20">
                <p className="text-base font-bold text-primary-foreground whitespace-nowrap">
                  Start Earning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
