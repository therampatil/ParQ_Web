"use client";

import { Smartphone, Bell, TrendingUp, MapPin } from "lucide-react";
import Image from "next/image";

const screenshots = [
  {
    title: "Add parking screen",
    icon: MapPin,
    description: "List your space in minutes",
  },
  {
    title: "Booking notifications",
    icon: Bell,
    description: "Stay updated in real-time",
  },
  {
    title: "Earnings dashboard",
    icon: TrendingUp,
    description: "Track your income",
  },
];

export function AppPreview() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24 lg:px-8 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content & Features */}
          <div className="space-y-10">
            <div className="text-left">
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl text-foreground">
                Manage Everything <br /> From Your Phone
              </h2>
              <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                List, manage, and track everything — all from one simple app
                designed for property owners.
              </p>
            </div>

            <div className="space-y-6">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="group flex flex-row items-center gap-6 rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <screenshot.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-foreground">
                      {screenshot.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* App Availability
            <div className="inline-flex flex-row items-center gap-4 rounded-xl bg-primary/5 px-6 py-4 border border-primary/10">
              <Smartphone className="h-6 w-6 text-primary" />
              <p className="text-base font-semibold text-foreground">
                Available on iOS & Android
              </p>
            </div> */}
          </div>

          {/* Right: Phone Screenshot */}
          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="group relative cursor-pointer">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 rounded-[3rem] bg-primary/20 blur-3xl transition-all duration-500 group-hover:bg-primary/40 group-hover:scale-110" />

              {/* Phone mockup */}
              <div className="relative overflow-hidden rounded-[3rem] border-[6px] md:border-8 border-foreground/10 bg-background shadow-2xl transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(var(--primary),0.3)] group-hover:scale-105">
                <Image
                  src="/images/ManageEverythingFromYourPhone.jpeg"
                  alt="ParQ Owner App Screenshot"
                  width={100}
                  height={600}
                  className="object-cover w-[250px] md:w-[300px] h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 md:-right-8 rounded-2xl bg-background/95 backdrop-blur-sm border border-border p-4 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 z-20">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-sm font-bold text-foreground whitespace-nowrap">
                    Live Status
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 md:-left-8 rounded-2xl bg-primary px-5 py-3 shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-3 z-20">
                <p className="text-base font-bold text-primary-foreground whitespace-nowrap">
                  Easy Control
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
