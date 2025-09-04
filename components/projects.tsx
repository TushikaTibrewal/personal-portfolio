import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
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

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl group hover:glow-cyan transition-all duration-300">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 glass rounded-full text-xs text-secondary border border-secondary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="glass border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="bg-secondary hover:bg-secondary/80">
                  <ExternalLink className="w-4 h-4 mr-2" />
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
