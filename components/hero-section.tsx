"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight * 0.6)))
      setScrollProgress(progress)
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

  // Calculate 3D transforms based on scroll AND mouse for all-direction movement
  const mouseOffsetX = (mousePosition.x - 0.5) * 20
  const mouseOffsetY = (mousePosition.y - 0.5) * 15
  const scrollRotateY = scrollProgress * 35
  const scrollRotateX = scrollProgress * -15
  const scrollRotateZ = scrollProgress * 5
  // Keep the device slightly higher so it doesn't crowd the headline.
  const translateY = -110 + scrollProgress * -100
  const translateX = scrollProgress * 30
  const scale = 1 + scrollProgress * 0.2

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Sticky container */}
      <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted" />
        
        {/* Animated background orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            top: `${30 - scrollProgress * 20}%`,
            left: `${30 + scrollProgress * 10}%`,
            transform: `scale(${1 + scrollProgress * 0.5})`,
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            bottom: `${20 - scrollProgress * 10}%`,
            right: `${20 + scrollProgress * 15}%`,
            transform: `scale(${1 + scrollProgress * 0.3})`,
          }}
        />

        {/* Top floating text - left side */}
        <div 
          className="absolute left-8 md:left-16 lg:left-24 top-1/4 max-w-xs transition-all duration-300"
          style={{
            opacity: Math.max(0, 1 - scrollProgress * 2),
            transform: `translateX(${-scrollProgress * 100}px)`,
          }}
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-medium">
            Smart Parking Device
          </p>
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground mt-1">
            For Passive Income Generation
          </p>
        </div>

        {/* Top floating text - right side */}
        <div 
          className="absolute right-8 md:right-16 lg:right-24 top-1/4 max-w-xs text-right transition-all duration-300"
          style={{
            opacity: Math.max(0, 1 - scrollProgress * 2),
            transform: `translateX(${scrollProgress * 100}px)`,
          }}
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-medium">
            Install Once
          </p>
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground mt-1">
            Earn Forever
          </p>
        </div>

        {/* Main Device - 3D Scroll + Mouse Animation - All Directions */}
        <div 
          className="relative z-10 transition-transform duration-150 ease-out"
          style={{
            transform: `
              perspective(1500px) 
              rotateY(${scrollRotateY + mouseOffsetX}deg) 
              rotateX(${scrollRotateX + mouseOffsetY}deg) 
              rotateZ(${scrollRotateZ}deg)
              translateY(${translateY}px) 
              translateX(${translateX}px)
              scale(${scale})
            `,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Device glow */}
          <div 
            className="absolute -inset-8 rounded-3xl blur-2xl transition-opacity duration-300"
            style={{
              background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
              opacity: 0.2 + scrollProgress * 0.3,
            }}
          />
          
          {/* Device shadow */}
          <div 
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full blur-xl bg-foreground/20"
            style={{
              transform: `translateX(-50%) scaleX(${1 - scrollProgress * 0.3})`,
              opacity: 0.5 - scrollProgress * 0.3,
            }}
          />

          {/* Actual device image */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
            <Image
              src="/images/parq-device.png"
              alt="ParQ Smart Parking Device"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Bottom floating text - left */}
        <div 
          className="absolute left-8 md:left-16 lg:left-24 bottom-1/4 max-w-xs transition-all duration-300"
          style={{
            opacity: scrollProgress > 0.3 ? Math.min(1, (scrollProgress - 0.3) * 3) : 0,
            transform: `translateY(${20 - scrollProgress * 40}px)`,
          }}
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-medium">
            WiFi Connected
          </p>
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground mt-1">
            Real-Time Cloud Sync 24/7
          </p>
        </div>

        {/* Bottom floating text - right */}
        <div 
          className="absolute right-8 md:right-16 lg:right-24 bottom-1/4 max-w-xs text-right transition-all duration-300"
          style={{
            opacity: scrollProgress > 0.3 ? Math.min(1, (scrollProgress - 0.3) * 3) : 0,
            transform: `translateY(${20 - scrollProgress * 40}px)`,
          }}
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-medium">
            Seamless Payments
          </p>
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground mt-1">
            Instant Deposits To Your Account
          </p>
        </div>

        {/* Central title - appears on scroll */}
        <div 
          className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 text-center transition-all duration-500 w-full px-4"
          style={{
            opacity: Math.max(0.85, scrollProgress > 0.5 ? Math.min(1, (scrollProgress - 0.5) * 4) : 0),
            transform: `translateY(${Math.max(0, 30 - scrollProgress * 60)}px)`,
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Turn Your Parking Into
            <span className="text-primary block">Passive Income</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto mb-6">
            The smart device that transforms unused parking spaces into revenue.
          </p>
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-lg group"
          >
            Get Your ParQ
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Side social links */}
        <div 
          className="absolute left-4 md:left-8 bottom-8 transition-all duration-300"
          style={{
            opacity: 1 - scrollProgress * 1.5,
          }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary cursor-pointer transition-colors">
            Twitter
          </p>
        </div>
        <div 
          className="absolute right-4 md:right-8 bottom-8 transition-all duration-300"
          style={{
            opacity: 1 - scrollProgress * 1.5,
          }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary cursor-pointer transition-colors">
            Instagram
          </p>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300"
          style={{
            opacity: 1 - scrollProgress * 3,
          }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent animate-pulse" />
        </div>

        {/* Top decorative line */}
        <div className="absolute top-0 left-0 right-0 h-2 flex overflow-hidden">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={i} 
              className="h-full w-2 border-r border-primary/20"
              style={{
                opacity: Math.sin((i / 100) * Math.PI) * 0.5 + 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
