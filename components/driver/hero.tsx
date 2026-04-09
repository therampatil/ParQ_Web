"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function DriverHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 px-4 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Park smarter, not harder
            </div>

            <h1 className="bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
              Find the perfect parking spot in seconds
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground md:text-xl">
              Find and book parking in seconds — no more circling, no more
              frustration.
            </p>

            <Button
              size="lg"
              className="group h-12 px-8 text-base shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              Find Parking Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right: Phone Screenshot */}
          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 px-4">
            <div className="group relative cursor-pointer">
              {/* Glow effect behind phone - animated on hover */}
              <div className="absolute inset-0 rounded-[3rem] bg-primary/20 blur-3xl transition-all duration-500 group-hover:bg-primary/40 group-hover:scale-110" />

              {/* Phone mockup with hover effects */}
              <div className="relative overflow-hidden rounded-[3rem] border-8 border-foreground/10 shadow-2xl transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(88,112,129,0.5)] group-hover:scale-105 group-hover:-translate-y-2 group-hover:rotate-1">
                <Image
                  src="/images/header3.jpeg"
                  alt="ParQ Driver App Interface"
                  width={300}
                  height={650}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Floating badge with hover animation */}
              <div className="absolute -top-4 -right-4 rounded-full bg-primary px-4 py-2 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <p className="text-sm font-bold text-primary-foreground">
                  Book Fast
                </p>
              </div>

              {/* Additional floating element on hover */}
              <div className="absolute -bottom-4 -left-4 rounded-full bg-green-500 px-4 py-2 shadow-lg opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                <p className="text-sm font-bold text-white">Save Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
