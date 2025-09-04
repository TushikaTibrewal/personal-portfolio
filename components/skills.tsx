import { Code, Database, Globe, Cpu, Users, Lightbulb } from "lucide-react"

export function Skills() {
  const technicalSkills = [
    { name: "HTML", icon: Globe, level: 90 },
    { name: "CSS", icon: Globe, level: 85 },
    { name: "Python", icon: Code, level: 88 },
    { name: "Java", icon: Code, level: 82 },
    { name: "C", icon: Cpu, level: 80 },
    { name: "DSA", icon: Database, level: 75 },
  ]

  const softSkills = [
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Critical Thinking", icon: Cpu },
    { name: "Team Work", icon: Users },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-muted/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-8 text-primary">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 group-hover:glow-cyan"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-8 text-secondary">Soft Skills</h3>
            <div className="grid gap-6">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="glass p-6 rounded-xl hover:glow-pink transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <skill.icon className="w-6 h-6 text-secondary" />
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
