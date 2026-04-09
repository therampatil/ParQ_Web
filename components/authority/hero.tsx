"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function AuthorityHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background px-4 py-24 md:px-6 md:py-32 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
              Turn Your Empty Parking Space Into Income.
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
              List your parking space on ParQ and start earning effortlessly —
              no hassle, full control.
            </p>

            <Button
              size="lg"
              className="group h-12 px-8 text-base shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              Start Earning
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right: Phone Screenshot */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="group relative cursor-pointer">
              {/* Glow effect behind phone - animated on hover */}
              <div className="absolute inset-0 rounded-[3rem] bg-primary/20 blur-3xl transition-all duration-500 group-hover:bg-primary/40 group-hover:scale-110" />

              {/* Phone mockup with hover effects */}
              <div className="relative overflow-hidden rounded-[3rem] border-8 border-foreground/10 shadow-2xl transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(88,112,129,0.5)] group-hover:scale-105 group-hover:-translate-y-2 group-hover:rotate-1">
                <Image
                  src="/images/authorityHome.jpeg"
                  alt="ParQ Authority Dashboard"
                  width={250}
                  height={700}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Floating badge with hover animation */}
              <div className="absolute -top-4 -right-4 rounded-full bg-primary px-4 py-2 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <p className="text-sm font-bold text-primary-foreground">
                  Earn Daily
                </p>
              </div>

              {/* Additional floating element on hover */}
              <div className="absolute -bottom-4 -left-4 rounded-full bg-green-500 px-4 py-2 shadow-lg opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                <p className="text-sm font-bold text-white">₹22,023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
