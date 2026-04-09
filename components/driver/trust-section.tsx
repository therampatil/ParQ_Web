"use client";

import { ShieldCheck, DollarSign, Clock } from "lucide-react";
import Image from "next/image";

const trustPoints = [
  {
    icon: ShieldCheck,
    text: "Verified parking spaces",
  },
  {
    icon: DollarSign,
    text: "Clear pricing (no surprises)",
  },
  {
    icon: Clock,
    text: "Real-time availability",
  },
];

export function TrustSection() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24 lg:px-8 bg-linear-to-b from-muted/20 to-background overflow-hidden relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Side: Mockup Image matching AuthorityHero style */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 px-4">
            <div className="group relative cursor-pointer">
              {/* Glow effect behind phone - animated on hover */}
              <div className="absolute inset-0 rounded-[3rem] bg-primary/20 blur-3xl transition-all duration-500 group-hover:bg-primary/40 group-hover:scale-110" />

              {/* Phone mockup with hover effects */}
              <div className="relative overflow-hidden rounded-[3rem] border-8 border-foreground/10 shadow-2xl transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(88,112,129,0.5)] group-hover:scale-105 group-hover:-translate-y-2 group-hover:-rotate-1">
                <Image
                  src="/images/Reliable&Transparent.jpeg"
                  alt="ParQ Reliable & Transparent Interface"
                  width={300}
                  height={650}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Floating badge with hover animation */}
              <div className="absolute -top-4 -left-4 rounded-full bg-primary px-4 py-2 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <p className="text-sm font-bold text-primary-foreground">
                  Verified
                </p>
              </div>

              {/* Additional floating element on hover */}
              <div className="absolute -bottom-4 -right-4 rounded-full bg-green-500 px-4 py-2 shadow-lg opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                <p className="text-sm font-bold text-white">Trust</p>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="order-1 lg:order-2">
            <div className="text-center lg:text-left mb-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Reliable & Transparent
              </h2>
              <p className="text-lg text-muted-foreground">
                What you see is what you get.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-10">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                    <point.icon className="h-7 w-7 text-primary" />
                  </div>
                  <p className="text-lg font-medium">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
