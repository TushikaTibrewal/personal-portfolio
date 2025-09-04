"use client"

import { Code, Database, Globe, Cpu, Users, Lightbulb, Languages } from "lucide-react"
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
    { name: "Git", icon: Code, level: 90, logo: "/git-logo-orange.jpg" },
    { name: "GitHub", icon: Code, level: 90, logo: "/github-logo-white.jpg" },
  ]

  const softSkills = [
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Critical Thinking", icon: Cpu },
    { name: "Team Work", icon: Users },
  ]

  const languageSkills = [
    { name: "English", level: 95, flag: "🇺🇸" },
    { name: "Hindi", level: 100, flag: "🇮🇳" },
    { name: "Japanese", level: 65, flag: "🇯🇵" },
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
            languageSkills.forEach((skill, index) => {
              setTimeout(
                () => {
                  setAnimatedLevels((prev) => ({ ...prev, [skill.name]: skill.level }))
                },
                (technicalSkills.length + index) * 200,
              )
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
    <section
      ref={sectionRef}
      id="skills"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/5 relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary/10 rounded-lg animate-drift opacity-30 hidden sm:block" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-full animate-float hidden sm:block" />

      <div className="container mx-auto max-w-6xl">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          My{" "}
          <span className="text-primary animate-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Technical Skills */}
          <div
            className={`glass-card p-6 sm:p-8 rounded-2xl hover:glow-cyan transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-primary flex items-center gap-3">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
              Technical Skills
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <img
                        src={skill.logo || "/placeholder.svg"}
                        alt={`${skill.name} logo`}
                        className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground">{animatedLevels[skill.name] || 0}%</span>
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

          {/* Languages */}
          <div
            className={`glass-card p-6 sm:p-8 rounded-2xl hover:glow-purple transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-purple-400 flex items-center gap-3">
              <Languages className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
              Languages
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {languageSkills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                        {skill.flag}
                      </span>
                      <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground">{animatedLevels[skill.name] || 0}%</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 group-hover:glow-purple animate-gradient"
                      style={{
                        width: `${animatedLevels[skill.name] || 0}%`,
                        transitionDelay: `${(technicalSkills.length + index) * 200}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div
            className={`glass-card p-6 sm:p-8 rounded-2xl hover:glow-pink transition-all duration-1000 md:col-span-2 lg:col-span-1 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-secondary flex items-center gap-3">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
              Soft Skills
            </h3>
            <div className="grid gap-4 sm:gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`glass p-4 sm:p-6 rounded-xl hover:glow-pink transition-all duration-500 group hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-300 group-hover:animate-pulse-glow">
                      <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-base sm:text-lg font-medium">{skill.name}</span>
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
