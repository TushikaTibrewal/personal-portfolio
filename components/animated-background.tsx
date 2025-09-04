"use client"

import { useEffect, useState } from "react"
import { Code2, Terminal, Braces, Hash, GitBranch, Database } from "lucide-react"

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])
  const [codeSnippets, setCodeSnippets] = useState<
    Array<{ id: number; x: number; y: number; delay: number; code: string }>
  >([])

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
    }))
    setParticles(newParticles)

    const codeExamples = [
      "def hello():",
      "import numpy",
      "class Data:",
      "for i in range:",
      "if __name__:",
      "return result",
      "git commit -m",
      "SELECT * FROM",
      "const data =",
      "function solve()",
      "print('Hello')",
      "while True:",
    ]

    const newCodeSnippets = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 90,
      y: Math.random() * 90,
      delay: Math.random() * 10,
      code: codeExamples[i % codeExamples.length],
    }))
    setCodeSnippets(newCodeSnippets)
  }, [])

  const codeElements = [
    { icon: Code2, delay: 0 },
    { icon: Terminal, delay: 2 },
    { icon: Braces, delay: 4 },
    { icon: Hash, delay: 6 },
    { icon: GitBranch, delay: 8 }, // Added Git icon
    { icon: Database, delay: 10 }, // Added Database icon
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

      {codeSnippets.map((snippet) => (
        <div
          key={snippet.id}
          className="absolute opacity-20 animate-bounce-slow font-mono text-sm text-primary/60 bg-black/10 backdrop-blur-sm rounded px-2 py-1 border border-primary/20"
          style={{
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
            animationDelay: `${snippet.delay}s`,
            animationDuration: `${15 + (snippet.id % 5) * 2}s`,
          }}
        >
          <span className="text-blue-400">{snippet.code}</span>
        </div>
      ))}

      {/* Floating code icons */}
      {codeElements.map(({ icon: Icon, delay }, index) => (
        <div
          key={index}
          className="absolute opacity-10 animate-bounce-gentle"
          style={{
            left: `${15 + index * 15}%`,
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

      <div className="absolute top-0 left-1/4 text-primary/10 font-mono text-xs animate-code-rain">
        01001000 01100101 01101100 01101100 01101111
      </div>
      <div
        className="absolute top-0 right-1/3 text-secondary/10 font-mono text-xs animate-code-rain"
        style={{ animationDelay: "3s" }}
      >
        01010111 01101111 01110010 01101100 01100100
      </div>
      <div
        className="absolute top-0 left-1/2 text-cyan-400/10 font-mono text-xs animate-code-rain"
        style={{ animationDelay: "6s" }}
      >
        01000100 01100001 01110100 01100001
      </div>
      <div
        className="absolute top-0 right-1/4 text-pink-400/10 font-mono text-xs animate-code-rain"
        style={{ animationDelay: "9s" }}
      >
        01010000 01111001 01110100 01101000 01101111 01101110
      </div>

      <div className="absolute top-1/3 right-1/5 opacity-5 animate-bounce-code">
        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
          <div className="font-mono text-xs text-primary/40">
            <div className="text-blue-400">def</div>
            <div className="text-yellow-400 ml-2">analyze_data():</div>
            <div className="text-green-400 ml-4">return results</div>
          </div>
        </div>
      </div>
    </div>
  )
}
