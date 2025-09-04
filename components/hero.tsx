"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Code, Coffee } from "lucide-react"
import Image from "next/image"
import { AnimatedBackground } from "./animated-background"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "Passionate Coder & DSA Learning Enthusiast"

  useEffect(() => {
    setIsVisible(true)

    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      {/* Enhanced Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 glass-card rounded-full animate-float opacity-30 animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 glass-card rounded-full animate-float-delayed opacity-20 glow-pink" />

      {/* Laptop and Spectacles Illustration */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block animate-drift">
        <div className="relative">
          {/* Laptop */}
          <div className="w-64 h-40 glass-card rounded-lg transform rotate-12">
            <div className="w-full h-2/3 bg-gradient-to-b from-muted/30 to-muted/10 rounded-t-lg" />
            <div className="w-full h-1/3 bg-muted/20 rounded-b-lg flex items-center justify-center">
              <Code className="w-8 h-8 text-primary/50 animate-pulse" />
            </div>
          </div>
          {/* Spectacles */}
          <div className="absolute -top-8 -left-8 w-16 h-8 border-2 border-primary/30 rounded-full animate-pulse" />
          <div className="absolute -top-8 left-4 w-16 h-8 border-2 border-primary/30 rounded-full animate-pulse" />
          <Coffee className="absolute -bottom-12 left-8 w-6 h-6 text-secondary/50 animate-bounce" />
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`text-center z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto hover:glow-cyan transition-all duration-500">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Image
                src="/profile-photo.jpg"
                alt="Tushika Tibrewal"
                width={150}
                height={150}
                className="rounded-full border-4 border-primary/30 shadow-2xl object-cover object-top animate-pulse-glow"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 pointer-events-none animate-gradient" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
              Tushika Tibrewal
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-muted-foreground font-normal">Portfolio</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty min-h-[2rem]">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Computer Science student at SRMIST specializing in full-stack development with expertise in HTML, CSS,
            Python, Java, and C. I love solving complex problems and building innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="glow-cyan hover:glow-cyan transition-all duration-300 animate-pulse-glow"
              onClick={scrollToAbout}
            >
              Explore My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 bg-transparent hover:glow-pink"
            >
              Download Resume
            </Button>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
