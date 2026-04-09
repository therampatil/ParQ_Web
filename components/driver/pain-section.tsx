"use client";

import { AlertCircle, Clock, Navigation } from "lucide-react";

const painPoints = [
  {
    icon: Navigation,
    title: "Endless Circling",
    text: "Driving around aimlessly just to find a suitable parking spot.",
  },
  {
    icon: Clock,
    title: "Wasted Resources",
    text: "Burning fuel and losing precious time stuck in unnecessary traffic.",
  },
  {
    icon: AlertCircle,
    title: "Constant Uncertainty",
    text: '"Will I even find parking?" - The stress before every journey.',
  },
];

export function PainSection() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-32 lg:px-8 bg-linear-to-b from-background via-destructive/5 to-muted/20 relative overflow-hidden">
      {/* Background radial gradient to set a subtle tension mood */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-destructive/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-destructive/20 bg-destructive/10 px-3 py-1 text-sm font-medium text-destructive mb-6">
            <span className="flex h-2 w-2 rounded-full bg-destructive mr-2 animate-pulse"></span>
            The Problem
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl mb-6">
            Parking Shouldn't Be This{" "}
            <span className="text-destructive relative inline-block">
              Hard
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-destructive"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 10 Q 50 20 100 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
            We all know the frustration. The anxiety of leaving early just to
            hunt for a spot that might not exist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-destructive/10 bg-background/50 p-8 transition-all duration-500 hover:border-destructive/30 hover:bg-destructive/5 hover:shadow-2xl hover:shadow-destructive/10 hover:-translate-y-2 backdrop-blur-sm"
            >
              {/* Subtle inset highlight */}
              <div className="absolute inset-0 bg-linear-to-br from-destructive/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <point.icon className="h-8 w-8" strokeWidth={2} />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-destructive transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
