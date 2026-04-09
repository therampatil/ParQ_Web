"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    location: "San Francisco, CA",
    image: "SM",
    content: "I was skeptical at first, but ParQ has been earning me over $300 a month from my unused driveway spot. The setup was incredibly easy!",
    earnings: "$312/mo",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Property Owner",
    location: "Seattle, WA",
    image: "JC",
    content: "As someone who manages multiple properties, ParQ has been a game-changer. The analytics dashboard helps me optimize pricing across all my spots.",
    earnings: "$850/mo",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Apartment Resident",
    location: "Austin, TX",
    image: "ER",
    content: "I work from home and rarely use my assigned parking spot. Now it pays for half my car payment. Love the automatic payments!",
    earnings: "$178/mo",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Business Owner",
    location: "Denver, CO",
    image: "MT",
    content: "We installed ParQ devices in our business parking lot for after-hours use. Extra revenue stream we never thought possible.",
    earnings: "$1,200/mo",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Loved by Thousands of Earners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of parking space owners who are already earning passive income with ParQ.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-background rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.image}
                  </span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <Quote className="w-8 h-8 text-primary/20" />
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Earnings badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <span>Earning</span>
                <span className="font-bold">{testimonial.earnings}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "10,000+", label: "Active Users" },
            { value: "$2.4M+", label: "Paid Out" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "50+", label: "Cities" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100 + 600}ms` }}
            >
              <p className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
