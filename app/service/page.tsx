import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import Image from "next/image";
import {
  ArrowRight,
  Car,
  Monitor,
  Smartphone,
  LayoutDashboard,
  Cpu,
  Wrench,
  Activity,
  Building,
  ArrowUpRight,
  TestTube,
  GraduationCap,
  Briefcase,
  Home,
  ShoppingBag,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  tag: string;
};

export default function ServicePage() {
  const services: Service[] = [
    {
      title: "Smart Parking System Installation",
      description: "We provide complete smart parking solutions with real-time slot detection and monitoring. Our system helps users instantly identify available and occupied parking spaces, improving efficiency and reducing congestion.",
      icon: Car,
      image: "/images/ParkingVisualized.jpeg",
      tag: "Core Setup",
    },
    {
      title: "Live Parking Display Systems",
      description: "We install high-visibility display systems at entry/exit points to show real-time parking availability. This helps drivers make quick decisions and reduces unnecessary traffic inside the premises.",
      icon: Monitor,
      image: "/images/header3.jpeg",
      tag: "Real-time Visibility",
    },
    {
      title: "Parking Booking System",
      description: "Our platform allows users (faculty, staff, or residents) to reserve parking slots in advance through a simple web-based interface, ensuring convenience and better space management.",
      icon: Smartphone,
      image: "/images/ManageEverythingFromYourPhone.jpeg",
      tag: "Digital Booking",
    },
    {
      title: "IoT-Based Monitoring Dashboard",
      description: "We provide a centralized dashboard for administrators to monitor parking usage, track slot status, and access valuable data insights for better decision-making.",
      icon: LayoutDashboard,
      image: "/images/authorityHome.jpeg",
      tag: "Admin Control",
    },
    {
      title: "Custom Hardware Solutions",
      description: "We design and deploy customized sensor-based parking devices based on site requirements, including weather-resistant and outdoor-ready systems.",
      icon: Cpu,
      image: "/images/parq-device.png",
      tag: "Sensor Engineering",
    },
    {
      title: "Installation & Setup Services",
      description: "Our team handles complete on-site installation, including wiring, mounting, calibration, and testing, ensuring a smooth and hassle-free setup.",
      icon: Wrench,
      image: "/images/StartEarningin4SimpleSteps.jpeg",
      tag: "On-site Execution",
    },
    {
      title: "Maintenance & Support (AMC)",
      description: "We offer ongoing maintenance services, including system health checks, sensor replacement, software updates, and remote troubleshooting support.",
      icon: Activity,
      image: "/images/Reliable&Transparent.jpeg",
      tag: "Long-term Support",
    },
    {
      title: "Parking Infrastructure Development",
      description: "We assist in improving parking infrastructure with services like slot marking, layout planning, flooring solutions, and covered parking structures.",
      icon: Building,
      image: "/images/header3.jpeg",
      tag: "Infrastructure",
    },
    {
      title: "Smart Upgrades & Expansion",
      description: "We help scale your parking system by adding new slots, upgrading sensors, and expanding coverage as per your growing needs.",
      icon: ArrowUpRight,
      image: "/images/ParkingVisualized.jpeg",
      tag: "Scalability",
    },
    {
      title: "Pilot & Demo Deployments",
      description: "We offer small-scale pilot installations for testing and validation, allowing clients to experience the system before full deployment.",
      icon: TestTube,
      image: "/images/authorityHome.jpeg",
      tag: "Risk-free Trial",
    },
  ];

  const industries = [
    { name: "Colleges & Universities", icon: GraduationCap },
    { name: "Corporate Offices", icon: Briefcase },
    { name: "Residential Societies", icon: Home },
    { name: "Commercial Complexes & Malls", icon: ShoppingBag },
  ];

  return (
    <main className="min-h-screen pt-24 bg-background overflow-hidden">
      <Navbar />

      <section className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-20 relative">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 -z-10 size-[900px] rounded-full bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-3xl" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-7 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              <Sparkles className="w-4 h-4" /> Smart Parking Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance">
              Design, Deploy, and Scale
              <span className="text-primary"> Intelligent Parking</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We provide end-to-end smart parking services from hardware to software, so your facility becomes faster, safer, and easier to manage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Fast Setup", icon: Clock3 },
                { label: "Reliable Ops", icon: ShieldCheck },
                { label: "Future Ready", icon: ArrowUpRight },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-card/70 backdrop-blur p-4">
                  <item.icon className="w-5 h-5 text-primary mb-2" />
                  <p className="font-semibold text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 fill-mode-both">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-border shadow-2xl shadow-primary/10">
              <Image
                src="/images/header3.jpeg"
                alt="Smart parking infrastructure"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 backdrop-blur px-4 py-3 text-sm font-medium text-foreground shadow-md">
                Real-time slot intelligence with smooth user experience
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block w-52 aspect-square rounded-3xl overflow-hidden border border-border shadow-xl">
              <Image
                src="/images/parq-device.png"
                alt="ParQ hardware device"
                fill
                className="object-contain p-3 bg-card"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <p className="text-primary text-sm font-semibold tracking-wide uppercase">What We Offer</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">Complete Services Stack</h2>
          </div>
          <p className="text-muted-foreground max-w-xl text-base md:text-lg">
            Each solution is designed to work independently or as part of one integrated parking ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const highlight = index % 4 === 0;
            return (
              <article
                key={index}
                className={`group rounded-[1.75rem] overflow-hidden border transition-all duration-500 hover:-translate-y-1.5 ${
                  highlight
                    ? "bg-foreground text-background border-foreground shadow-2xl shadow-primary/10"
                    : "bg-card border-border hover:border-primary/40"
                }`}
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 ${highlight ? "bg-gradient-to-t from-black/65 to-black/25" : "bg-gradient-to-t from-black/50 to-black/10"}`} />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/90 text-foreground">
                    {service.tag}
                  </span>
                </div>

                <div className="p-6 md:p-7">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    highlight ? "bg-white/15 text-white" : "bg-primary/10 text-primary"
                  }`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-2xl font-bold leading-tight mb-3 ${
                    highlight ? "text-white" : "text-foreground"
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    highlight ? "text-white/80" : "text-muted-foreground"
                  }`}>
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Delivering customized smart parking systems across multiple sectors to meet distinct operational needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="flex flex-col items-center p-8 rounded-3xl bg-background border border-border group hover:border-primary transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 text-primary">
                  <ind.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-center text-foreground">{ind.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden border border-primary/20">
          <Image
            src="/images/authorityHome.jpeg"
            alt="ParQ implementation process"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/65 z-10" />
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent z-20 mix-blend-overlay size-[1000px] animate-pulse" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />

          <div className="relative z-30 p-10 md:p-16 lg:p-20 grid md:grid-cols-[1.25fr_1fr] gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 text-white border border-white/20 text-sm font-bold tracking-widest uppercase">
                Our Approach
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Built for the real world.
              </h2>
              <p className="text-white/90 text-xl leading-relaxed">
                We don’t just install devices — we deliver complete smart parking solutions that are reliable, scalable, and tailored for real-world conditions.
              </p>
              <ul className="space-y-4 pt-4">
                {["End-to-End Reliability", "Highly Scalable Systems", "Customized to Site Requirements"].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="text-white/80 w-6 h-6" />
                    <span className="text-lg font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4">
              {[
                { step: "01", label: "Site Audit & Planning" },
                { step: "02", label: "Installation & Integration" },
                { step: "03", label: "Go-Live + AMC Support" },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md px-5 py-4 text-white">
                  <p className="text-xs tracking-wider text-white/75 mb-1">STEP {item.step}</p>
                  <p className="font-semibold text-lg">{item.label}</p>
                </div>
              ))}
              <button className="mt-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
                Partner With Us <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
