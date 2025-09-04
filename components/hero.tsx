"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Code, Coffee } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 glass-card rounded-full animate-float opacity-30" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 glass-card rounded-full animate-float-delayed opacity-20" />

      {/* Laptop and Spectacles Illustration */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
        <div className="relative">
          {/* Laptop */}
          <div className="w-64 h-40 glass-card rounded-lg transform rotate-12">
            <div className="w-full h-2/3 bg-gradient-to-b from-muted/30 to-muted/10 rounded-t-lg" />
            <div className="w-full h-1/3 bg-muted/20 rounded-b-lg flex items-center justify-center">
              <Code className="w-8 h-8 text-primary/50" />
            </div>
          </div>
          {/* Spectacles */}
          <div className="absolute -top-8 -left-8 w-16 h-8 border-2 border-primary/30 rounded-full" />
          <div className="absolute -top-8 left-4 w-16 h-8 border-2 border-primary/30 rounded-full" />
          <Coffee className="absolute -bottom-12 left-8 w-6 h-6 text-secondary/50" />
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`text-center z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tushika Tibrewal
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
            Passionate Coder & DSA Learning Enthusiast
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Computer Science student specializing in full-stack development with expertise in HTML, CSS, Python, Java,
            and C. I love solving complex problems and building innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-cyan hover:glow-cyan transition-all duration-300" onClick={scrollToAbout}>
              Explore My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 bg-transparent"
            >
              Download Resume
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  )
}
