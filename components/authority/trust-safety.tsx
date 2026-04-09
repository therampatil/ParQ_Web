"use client";

import { Shield, UserCheck, Clock, FileCheck } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Verified Users Only",
    text: "We strictly verify every driver to ensure your space is used responsibly.",
  },
  {
    icon: Clock,
    title: "Total Flexibility",
    text: "Set your own schedule. You decide when your space is available for booking.",
  },
  {
    icon: FileCheck,
    title: "100% Transparency",
    text: "Get complete details about who is booking and exactly when.",
  },
  {
    icon: Shield,
    title: "Zero Commitments",
    text: "Pause or remove your listing at any time without any penalties or fees.",
  },
];

export function TrustSafety() {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:px-6 md:py-32 bg-slate-50 dark:bg-slate-900/50">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Peace of Mind Guaranteed</span>
          </div>
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-slate-900 dark:text-white">
            Safe, Secure, and{" "}
            <span className="text-primary relative inline-block">
              In Your Control
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-primary/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                />
              </svg>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400">
            We&apos;ve built a platform that puts you first. Your property is
            protected, and you always have the final say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center gap-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white text-primary mb-2 shadow-inner">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 relative z-10">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
