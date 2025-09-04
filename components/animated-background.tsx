"use client"

import { useEffect, useState } from "react"
import { Code2, Terminal, Braces, Hash } from "lucide-react"

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
    }))
    setParticles(newParticles)
  }, [])

  const codeElements = [
    { icon: Code2, delay: 0 },
    { icon: Terminal, delay: 2 },
    { icon: Braces, delay: 4 },
    { icon: Hash, delay: 6 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-gradient" />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Floating code icons */}
      {codeElements.map(({ icon: Icon, delay }, index) => (
        <div
          key={index}
          className="absolute opacity-10 animate-code-rain"
          style={{
            left: `${20 + index * 20}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${8 + index * 2}s`,
          }}
        >
          <Icon className="w-8 h-8 text-primary" />
        </div>
      ))}

      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-primary/20 rounded-lg animate-drift opacity-30" />
      <div className="absolute top-3/4 right-1/6 w-24 h-24 border border-secondary/20 rounded-full animate-float opacity-20" />
      <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg animate-pulse-glow" />

      {/* Binary code rain effect */}
      <div className="absolute top-0 left-1/4 text-primary/10 font-mono text-xs animate-code-rain">
        01001000 01100101 01101100 01101100 01101111
      </div>
      <div
        className="absolute top-0 right-1/3 text-secondary/10 font-mono text-xs animate-code-rain"
        style={{ animationDelay: "3s" }}
      >
        01010111 01101111 01110010 01101100 01100100
      </div>
    </div>
  )
}
