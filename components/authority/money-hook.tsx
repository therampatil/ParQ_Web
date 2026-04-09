"use client"

import { IndianRupee, TrendingUp } from "lucide-react"

export function MoneyHook() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Earn From Space You're Not Using
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Your parking space is valuable — even when it's empty.<br />
            With ParQ, you can turn it into a steady source of income.
          </p>
        </div>

        {/* Earnings Card */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-8 md:p-12 shadow-xl">
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Earning Example</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between rounded-lg bg-background/50 p-4 backdrop-blur-sm">
                <span className="text-base md:text-lg text-muted-foreground">2 hours/day</span>
                <div className="flex items-center gap-2 text-xl md:text-2xl font-bold text-primary">
                  <IndianRupee className="h-5 w-5" />
                  <span>40–100</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-background/50 p-4 backdrop-blur-sm">
                <span className="text-base md:text-lg text-muted-foreground">10 days/month</span>
                <div className="flex items-center gap-2 text-xl md:text-2xl font-bold text-primary">
                  <IndianRupee className="h-5 w-5" />
                  <span>1000+</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 p-4 backdrop-blur-sm border border-primary/30">
                <span className="text-base md:text-lg font-semibold">Multiple users</span>
                <div className="flex items-center gap-2 text-xl md:text-2xl font-bold text-primary">
                  <span>Even more earnings</span>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-primary/10 p-6 text-center border border-primary/20">
              <p className="text-lg md:text-xl font-semibold text-primary">
                👉 Your unused space can pay your bills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
