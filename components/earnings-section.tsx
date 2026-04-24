"use client"

import { useState, useEffect, useRef } from "react"
import { Slider } from "@/components/ui/slider"
import { MapPin, DollarSign, Clock, TrendingUp } from "lucide-react"

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0
          const duration = 1500
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setDisplayValue(Math.floor(easeOut * value))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}

export function EarningsSection() {
  const [hoursPerDay, setHoursPerDay] = useState([8])
  const [daysPerWeek, setDaysPerWeek] = useState([5])
  const [hourlyRate, setHourlyRate] = useState([3])

  const weeklyEarnings = hoursPerDay[0] * daysPerWeek[0] * hourlyRate[0]
  const monthlyEarnings = weeklyEarnings * 4
  const yearlyEarnings = monthlyEarnings * 12

  return (
    <section id="earnings" className="py-24 lg:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Earnings Calculator</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            See How Much You Can Earn
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            Adjust the sliders below to estimate your potential passive income from your parking space.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Calculator */}
          <div className="bg-background/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-background/20">
            <div className="space-y-8">
              {/* Hours per day */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Hours Available Daily</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">{hoursPerDay[0]}h</span>
                </div>
                <Slider
                  value={hoursPerDay}
                  onValueChange={setHoursPerDay}
                  min={1}
                  max={24}
                  step={1}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.bg-primary]:bg-primary"
                />
              </div>

              {/* Days per week */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="font-medium">Days Per Week</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-400">{daysPerWeek[0]}</span>
                </div>
                <Slider
                  value={daysPerWeek}
                  onValueChange={setDaysPerWeek}
                  min={1}
                  max={7}
                  step={1}
                  className="[&_[role=slider]]:bg-blue-400 [&_[role=slider]]:border-blue-400"
                />
              </div>

              {/* Hourly rate */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="font-medium">Hourly Rate</span>
                  </div>
                  <span className="text-2xl font-bold text-amber-400">${hourlyRate[0]}</span>
                </div>
                <Slider
                  value={hourlyRate}
                  onValueChange={setHourlyRate}
                  min={1}
                  max={10}
                  step={0.5}
                  className="[&_[role=slider]]:bg-amber-400 [&_[role=slider]]:border-amber-400"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="grid gap-6">
              {/* Weekly */}
              <div className="bg-background/5 rounded-2xl p-6 border border-background/10 hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-background/60 mb-1">Weekly Earnings</p>
                    <p className="text-4xl font-bold">${weeklyEarnings.toFixed(0)}</p>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-primary" />
                  </div>
                </div>
              </div>

              {/* Monthly */}
              <div className="bg-primary rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-foreground/80 mb-1">Monthly Earnings</p>
                    <p className="text-5xl font-bold text-primary-foreground">${monthlyEarnings.toFixed(0)}</p>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                    <DollarSign className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Yearly */}
              <div className="bg-background/5 rounded-2xl p-6 border border-background/10 hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-background/60 mb-1">Yearly Earnings</p>
                    <p className="text-4xl font-bold">
                      <AnimatedNumber value={yearlyEarnings} prefix="₹" />
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-green-400" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-background/50 text-sm mt-6 text-center">
              * Estimates based on average parking demand. Actual earnings may vary based on location.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
