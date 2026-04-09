"use client"

import { Building2, Car, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function UserSelection() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Authority Card */}
          <Link href="/authority">
            <button className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-background to-primary/5 border-2 border-primary/20 p-10 text-center transition-all duration-500 hover:scale-[1.03] hover:border-primary hover:shadow-[0_20px_60px_-15px_rgba(var(--primary),0.4)] hover:-translate-y-3 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-primary/30">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Glowing orb effect */}
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-all duration-500 group-hover:bg-primary/40 group-hover:scale-150" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl transition-all duration-500 group-hover:bg-primary/30 group-hover:scale-150" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-1000 group-hover:translate-x-full" />
              
              <div className="relative z-10 flex flex-col items-center space-y-5">
                {/* Icon container with pulse effect */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl transition-all duration-500 group-hover:bg-primary/50 group-hover:scale-125 animate-pulse" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-primary/50">
                    <Building2 className="h-10 w-10 text-primary transition-all duration-500 group-hover:text-primary-foreground group-hover:scale-110" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-3xl font-bold tracking-tight transition-all duration-300 group-hover:text-primary group-hover:scale-105">
                      Authority
                    </h3>
                    <Sparkles className="h-5 w-5 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-12" />
                  </div>
                  <p className="text-base text-muted-foreground transition-all duration-300 group-hover:text-foreground">
                    I have a parking space
                  </p>
                </div>
                
                {/* CTA with arrow */}
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:px-6 group-hover:shadow-lg">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          </Link>

          {/* Driver Card */}
          <Link href="/driver">
            <button className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-background to-primary/5 border-2 border-primary/20 p-10 text-center transition-all duration-500 hover:scale-[1.03] hover:border-primary hover:shadow-[0_20px_60px_-15px_rgba(var(--primary),0.4)] hover:-translate-y-3 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-primary/30">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Glowing orb effect */}
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-all duration-500 group-hover:bg-primary/40 group-hover:scale-150" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl transition-all duration-500 group-hover:bg-primary/30 group-hover:scale-150" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-1000 group-hover:translate-x-full" />
              
              <div className="relative z-10 flex flex-col items-center space-y-5">
                {/* Icon container with pulse effect */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl transition-all duration-500 group-hover:bg-primary/50 group-hover:scale-125 animate-pulse" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-primary/50">
                    <Car className="h-10 w-10 text-primary transition-all duration-500 group-hover:text-primary-foreground group-hover:scale-110" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-3xl font-bold tracking-tight transition-all duration-300 group-hover:text-primary group-hover:scale-105">
                      Driver
                    </h3>
                    <Sparkles className="h-5 w-5 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-12" />
                  </div>
                  <p className="text-base text-muted-foreground transition-all duration-300 group-hover:text-foreground">
                    I have a car
                  </p>
                </div>
                
                {/* CTA with arrow */}
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:px-6 group-hover:shadow-lg">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
