"use client"

import { Sparkles } from "lucide-react"

export function PsychologicalPush() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-background p-12 md:p-16 text-center shadow-2xl">
          {/* Background effects */}
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          
          <div className="relative z-10">
            <div className="mb-6 flex justify-center">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>

            <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Your Space is Already Valuable
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
                You don't need extra investment.
              </p>
              <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
                You don't need extra work.
              </p>
            </div>

            <div className="inline-block rounded-2xl bg-primary/20 border-2 border-primary/40 px-8 py-4">
              <p className="text-2xl md:text-3xl font-bold text-primary">
                👉 You just need to list it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
