"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS featuring glassmorphism design.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/modern-portfolio-website-dark-theme.jpg",
      github: "#",
      live: "#",
    },
    {
      title: "Number Guessing Game",
      description:
        "Interactive Python console game where players guess a randomly generated number with hints and score tracking.",
      tech: ["Python", "Random Module", "Input Validation"],
      image: "/python-number-guessing-game-console-interface.jpg",
      github: "https://github.com/TushikaTibrewal/number-guessing-game",
      live: "#",
    },
    {
      title: "Algorithm Visualizer",
      description:
        "Interactive web application to visualize sorting and searching algorithms with step-by-step animations.",
      tech: ["Python", "JavaScript", "HTML/CSS"],
      image: "/algorithm-visualization-sorting-arrays.jpg",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "Full-stack task management application with user authentication and real-time updates.",
      tech: ["Java", "Spring Boot", "MySQL"],
      image: "/task-management-dashboard.png",
      github: "#",
      live: "#",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-24 h-24 border border-secondary/10 rounded-full animate-float opacity-20" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg animate-drift opacity-30" />

      <div className="container mx-auto max-w-6xl">
        <h2
          className={`text-4xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Featured{" "}
          <span className="text-primary animate-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-2xl group hover:glow-cyan transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <div className="w-8 h-8 glass-card rounded-full flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-secondary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 glass rounded-full text-xs text-secondary border border-secondary/30 hover:glow-pink transition-all duration-300 hover:scale-105 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                    }`}
                    style={{ transitionDelay: `${index * 200 + techIndex * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="glass border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:glow-cyan transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-4 h-4 mr-2 group-hover:animate-spin" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="bg-secondary hover:bg-secondary/80 hover:glow-pink transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Live
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
