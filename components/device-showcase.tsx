"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Wifi, Smartphone, Battery, Shield } from "lucide-react"

export function DeviceShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height
      
      const start = windowHeight
      const end = -sectionHeight
      const current = sectionTop
      const progress = 1 - (current - end) / (start - end)
      
      setScrollProgress(Math.max(0, Math.min(1, progress)))
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Multi-directional device rotation
  const mouseOffsetX = (mousePosition.x - 0.5) * 25
  const mouseOffsetY = (mousePosition.y - 0.5) * 20
  const rotateY = -15 + scrollProgress * 45 + mouseOffsetX
  const rotateX = 10 - scrollProgress * 20 + mouseOffsetY
  const rotateZ = scrollProgress * -8
  const translateX = Math.sin(scrollProgress * Math.PI) * 50
  const translateY = Math.cos(scrollProgress * Math.PI * 0.5) * -30

  const features = [
    {
      icon: Wifi,
      title: "WiFi Connected",
      description: "Seamless cloud connectivity for real-time updates and monitoring",
      position: "left",
      delay: 0,
    },
    {
      icon: Smartphone,
      title: "SIM Card Ready",
      description: "Cellular connectivity coming soon for areas without WiFi",
      position: "right",
      delay: 0.15,
      badge: "Coming Soon",
    },
    {
      icon: Shield,
      title: "Weather Resistant",
      description: "IP67 rated for reliable outdoor installation",
      position: "left",
      delay: 0.3,
    },
    {
      icon: Battery,
      title: "5-Year Battery",
      description: "Long-lasting power with easy replacement",
      position: "right",
      delay: 0.45,
    },
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-24 overflow-hidden bg-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            The Device
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4 text-balance">
            Engineered for Simplicity
          </h2>
          <p className="text-background/60 max-w-xl mx-auto">
            Premium hardware designed to blend seamlessly into any parking space while delivering exceptional performance.
          </p>
        </div>

        {/* Device with floating features */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Central device - multi-directional animation */}
          <div 
            className="relative z-10 transition-transform duration-200 ease-out"
            style={{
              transform: `
                perspective(1500px) 
                rotateY(${rotateY}deg) 
                rotateX(${rotateX}deg)
                rotateZ(${rotateZ}deg)
                translateX(${translateX}px)
                translateY(${translateY}px)
              `,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Device glow */}
            <div 
              className="absolute -inset-12 rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
                opacity: 0.3,
              }}
            />
            
            {/* Device image */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              <Image
                src="/images/parq-device.png"
                alt="ParQ Device"
                fill
                className="object-contain drop-shadow-[0_0_60px_rgba(16,185,129,0.3)]"
              />
            </div>
          </div>

          {/* Floating feature cards */}
          {features.map((feature, index) => {
            const baseProgress = Math.max(0, (scrollProgress - feature.delay) * 2)
            const opacity = Math.min(1, baseProgress)
            const translateXCard = feature.position === "left" 
              ? -50 + baseProgress * 50 
              : 50 - baseProgress * 50
            
            const Icon = feature.icon
            
            return (
              <div
                key={index}
                className={`absolute hidden md:block ${
                  feature.position === "left" ? "left-0 lg:left-8" : "right-0 lg:right-8"
                } ${index < 2 ? "top-1/4" : "bottom-1/4"}`}
                style={{
                  opacity,
                  transform: `translateX(${translateXCard}px)`,
                  transition: "opacity 0.3s, transform 0.3s",
                }}
              >
                <div 
                  className={`bg-background/10 backdrop-blur-sm border border-background/20 rounded-lg p-4 max-w-[220px] ${
                    feature.position === "left" ? "text-left" : "text-right"
                  }`}
                >
                  <div className={`flex items-center gap-2 mb-2 ${feature.position === "right" ? "flex-row-reverse" : ""}`}>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-background">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs text-background/60">
                    {feature.description}
                  </p>
                  {feature.badge && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-primary/20 text-primary text-[10px] rounded-full uppercase tracking-wider">
                      {feature.badge}
                    </span>
                  )}
                </div>
                {/* Connector line */}
                <div 
                  className={`absolute top-1/2 w-12 h-px bg-gradient-to-r ${
                    feature.position === "left" 
                      ? "right-0 translate-x-full from-background/40 to-transparent" 
                      : "left-0 -translate-x-full from-transparent to-background/40"
                  }`}
                />
              </div>
            )
          })}

          {/* Mobile features list */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-4 px-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-lg p-3"
                  style={{
                    opacity: Math.min(1, Math.max(0, (scrollProgress - 0.3) * 3)),
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-3 h-3 text-primary" />
                    <h3 className="text-xs font-semibold text-background">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[10px] text-background/60">
                    {feature.description}
                  </p>
                  {feature.badge && (
                    <span className="inline-block mt-1 px-1.5 py-0.5 bg-primary/20 text-primary text-[8px] rounded-full uppercase">
                      {feature.badge}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
