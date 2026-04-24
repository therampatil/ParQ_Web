"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Shield, Smartphone, Zap, Clock, Lock, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Secure Access Control",
    description: "Advanced encryption and authentication ensure only authorized drivers can access your parking space.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Control",
    description: "Manage everything from your phone. Set schedules, view earnings, and control access in real-time.",
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Get alerts when someone parks, leaves, or makes a payment. Stay informed without any effort.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Set custom availability. Rent out your spot only when you're not using it. Full control always.",
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description: "Your personal data stays private. Drivers see only what they need to find and use your spot.",
  },
  {
    icon: BarChart3,
    title: "Earnings Analytics",
    description: "Detailed insights into your parking performance. Optimize pricing with AI-powered suggestions.",
  },
]

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" ref={sectionRef} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Feature Image/Animation */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Main feature showcase with device */}
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl overflow-hidden shadow-2xl relative">
                {/* Device centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 sm:w-56 lg:w-72">
                    <Image
                      src="/images/parq-device.png"
                      alt="ParQ Device"
                      width={300}
                      height={300}
                      className="object-contain drop-shadow-2xl animate-device-glow"
                    />
                  </div>
                </div>
                
                {/* App mockup overlay - positioned at bottom right */}
                <div className="absolute bottom-4 right-4 w-36 sm:w-44 lg:w-52 bg-card rounded-2xl shadow-2xl overflow-hidden border-2 border-foreground/10">
                  {/* Phone notch */}
                  <div className="h-4 bg-foreground/5 flex items-center justify-center">
                    <div className="w-10 h-0.5 bg-foreground/10 rounded-full" />
                  </div>
                  
                  {/* App content */}
                  <div className="p-3">
                    {/* Stats card */}
                    <div className="bg-primary rounded-lg p-3 mb-2">
                      <p className="text-[10px] text-primary-foreground/80">This Month</p>
                      <p className="text-lg font-bold text-primary-foreground">₹247.50</p>
                    </div>
                    
                    {/* Quick stats */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-muted rounded-md p-2">
                        <p className="text-[10px] text-muted-foreground">Bookings</p>
                        <p className="text-sm font-semibold text-foreground">24</p>
                      </div>
                      <div className="bg-muted rounded-md p-2">
                        <p className="text-[10px] text-muted-foreground">Hours</p>
                        <p className="text-sm font-semibold text-foreground">156</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-xl border border-border p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Payment Received</p>
                    <p className="text-xs text-muted-foreground">+₹8.50 from parking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div>
            <p className="text-primary font-medium mb-4">Features</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Everything You Need to Start Earning
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              ParQ combines smart hardware with powerful software to make parking monetization effortless.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
