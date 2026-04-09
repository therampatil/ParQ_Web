"use client";

import { MapPin } from "lucide-react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export function FinalCTA() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-32 lg:px-8 bg-linear-to-b from-muted/20 via-primary/5 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border-2 border-primary bg-linear-to-br from-primary via-primary/90 to-primary/80 p-12 md:p-16 text-center shadow-2xl">
          {/* Animated background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl animate-pulse" />
          <div className="absolute bottom-10 left-10 h-32 w-32 rounded-full bg-white/10 blur-2xl animate-pulse delay-75" />

          <div className="relative z-10">
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white">
                  Smart Parking
                </span>
              </div>
            </div>

            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Never Waste Time Searching Again
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90 md:text-xl">
              Join ParQ and experience smarter parking.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-3 rounded-2xl bg-black/20 border border-white/20 px-6 py-4 backdrop-blur-md shadow-xl transition-all duration-300 hover:bg-black/30 hover:scale-105">
                <FaGooglePlay className="h-8 w-8 text-white" />
                <div className="text-left">
                  <p className="text-xs text-white/80 font-medium tracking-wide uppercase">
                    Coming Soon on
                  </p>
                  <p className="text-lg font-bold text-white leading-tight">
                    Google Play
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 rounded-2xl bg-black/20 border border-white/20 px-6 py-4 backdrop-blur-md shadow-xl transition-all duration-300 hover:bg-black/30 hover:scale-105">
                <FaApple className="h-9 w-9 text-white mb-1" />
                <div className="text-left">
                  <p className="text-xs text-white/80 font-medium tracking-wide uppercase">
                    Coming Soon on
                  </p>
                  <p className="text-lg font-bold text-white leading-tight">
                    App Store
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-white/80 font-medium tracking-wide">
              Free to download • No subscription required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
