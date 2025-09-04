"use client"

import { Code, Database, Globe, Cpu, Users, Lightbulb } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>({})
  const sectionRef = useRef<HTMLElement>(null)

  const technicalSkills = [
    { name: "HTML", icon: Globe, level: 90, logo: "/html5-orange-logo.png" },
    { name: "CSS", icon: Globe, level: 85, logo: "/css3-blue-logo.png" },
    { name: "Python", icon: Code, level: 88, logo: "/python-snake-logo-blue-yellow.jpg" },
    { name: "Java", icon: Code, level: 82, logo: "/java-coffee-cup-logo-red.jpg" },
    { name: "C", icon: Cpu, level: 80, logo: "/c-programming-language-logo-blue.jpg" },
    { name: "DSA", icon: Database, level: 43, logo: "/data-structures-algorithms-tree-graph-icon.jpg" },
  ]

  const softSkills = [
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Critical Thinking", icon: Cpu },
    { name: "Team Work", icon: Users },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Animate progress bars with staggered delays
            technicalSkills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedLevels((prev) => ({ ...prev, [skill.name]: skill.level }))
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6 bg-muted/5 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary/10 rounded-lg animate-drift opacity-30" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-full animate-float" />

      <div className="container mx-auto max-w-6xl">
        <h2
          className={`text-4xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          My{" "}
          <span className="text-primary animate-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div
            className={`glass-card p-8 rounded-2xl hover:glow-cyan transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center gap-3">
              <Code className="w-6 h-6 animate-pulse" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={skill.logo || "/placeholder.svg"}
                        alt={`${skill.name} logo`}
                        className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{animatedLevels[skill.name] || 0}%</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 group-hover:glow-cyan animate-gradient"
                      style={{
                        width: `${animatedLevels[skill.name] || 0}%`,
                        transitionDelay: `${index * 200}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div
            className={`glass-card p-8 rounded-2xl hover:glow-pink transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-secondary flex items-center gap-3">
              <Users className="w-6 h-6 animate-pulse" />
              Soft Skills
            </h3>
            <div className="grid gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`glass p-6 rounded-xl hover:glow-pink transition-all duration-500 group hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-300 group-hover:animate-pulse-glow">
                      <skill.icon className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
