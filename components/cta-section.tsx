"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const benefits = [
  "Free shipping worldwide",
  "30-day money-back guarantee",
  "Lifetime software updates",
  "24/7 customer support",
]

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-foreground text-background rounded-3xl p-8 lg:p-16 overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
                It is more than just parking
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Ready to Start Earning From Your Parking?
              </h2>
              <p className="text-lg text-background/70 mb-8">
                Join thousands of homeowners already earning passive income. Get your ParQ device today and start monetizing your unused parking space.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-background/90">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg group"
                >
                  Order Now - ₹149
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="text-sm text-background/60">
                  <p>Ships within 2-3 business days</p>
                  <p>Includes everything you need</p>
                </div>
              </div>
            </div>

            {/* Product showcase */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-primary/20 rounded-full blur-3xl" />
                
                {/* Device shadow */}
                <div className="absolute inset-x-8 bottom-0 h-8 bg-black/30 blur-xl rounded-full" />
                
                {/* Device image */}
                <div className="relative w-full h-full">
                  <Image
                    src="/images/parq-device.png"
                    alt="ParQ Device"
                    fill
                    className="object-contain drop-shadow-2xl animate-device-glow"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Best Seller
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
