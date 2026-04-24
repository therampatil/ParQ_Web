"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAuthority = pathname === "/authority";
  const isDriver = pathname === "/driver";
  const isService = pathname === "/service";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - ParQ styled logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-9 h-9">
              <Image
                src="/images/parq-device.png"
                alt="ParQ"
                fill
                className="object-contain"
              />
            </div>
            {/* ParQ Logo Text - styled like the device */}
            <div className="flex items-baseline">
              <span className="text-xl font-bold text-foreground tracking-tight">
                Par
              </span>
              <span className="text-xl font-bold text-foreground tracking-tight not-italic">
                Q
              </span>
            </div>
          </Link>

          {/* Center - Brand Title with Tagline */}
          <div className="hidden lg:flex flex-col items-center">
            <div className="flex items-baseline gap-0.5">
              <span className="text-lg font-bold tracking-tight text-foreground">
                Par
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Q
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary">
              {isAuthority
                ? "For Property Owners"
                : isDriver
                  ? "For Drivers"
                  : isService
                    ? "Our Services"
                    : "It is more than just parking"}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/service"
              className={`text-sm font-medium transition-colors hover:text-primary ${isService ? "text-primary" : "text-muted-foreground"}`}
            >
              Services
            </Link>
            <Link
              href="/authority"
              className={`text-sm font-medium transition-colors hover:text-primary ${isAuthority ? "text-primary" : "text-muted-foreground"}`}
            >
              Host
            </Link>
            <Link
              href="/driver"
              className={`text-sm font-medium transition-colors hover:text-primary ${isDriver ? "text-primary" : "text-muted-foreground"}`}
            >
              Driver
            </Link>
            <div className="flex items-center gap-4 ml-2">
              <Button variant="ghost" className="text-sm font-medium">
                Log In
              </Button>
              <Button className="text-sm font-medium rounded-full">
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link
              href="/service"
              className={`block px-3 py-2 text-base font-medium rounded-md ${isService ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-muted"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/authority"
              className={`block px-3 py-2 text-base font-medium rounded-md ${isAuthority ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-muted"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Host a space
            </Link>
            <Link
              href="/driver"
              className={`block px-3 py-2 text-base font-medium rounded-md ${isDriver ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-muted"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find parking
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="outline" className="w-full justify-center">
                Log In
              </Button>
              <Button className="w-full justify-center">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
