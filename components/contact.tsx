"use client"
import { Mail, MapPin, Phone, Linkedin, Github, Sparkles } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <h2 className="text-4xl font-bold">
              Get In{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <Sparkles className="w-6 h-6 text-secondary animate-pulse delay-500" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to collaborate? Let's create something amazing together!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-500 group max-w-2xl w-full">
            <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center justify-center gap-2">
              Let's Connect
              <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
            </h3>
            <p className="text-muted-foreground mb-8 text-pretty leading-relaxed text-center">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
              and programming. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer group/item">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover/item:scale-110 group-hover/item:glow-cyan transition-all duration-300">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium group-hover/item:text-primary transition-colors">Email</p>
                  <p className="text-muted-foreground text-sm">tushikatibrewal20111049@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/5 transition-all duration-300 cursor-pointer group/item">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover/item:scale-110 group-hover/item:glow-pink transition-all duration-300">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium group-hover/item:text-secondary transition-colors">Phone</p>
                  <p className="text-muted-foreground text-sm">+91 7439563546</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer group/item">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover/item:scale-110 group-hover/item:glow-cyan transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium group-hover/item:text-primary transition-colors">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/tushika-tibrewal-00488331b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Brg8%2BWGRjQgOt3gtGPgXYWQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    Tushika Tibrewal
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer group/item">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover/item:scale-110 group-hover/item:glow-cyan transition-all duration-300">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium group-hover/item:text-primary transition-colors">GitHub</p>
                  <a
                    href="https://github.com/TushikaTibrewal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    TushikaTibrewal
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/5 transition-all duration-300 cursor-pointer group/item">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover/item:scale-110 group-hover/item:glow-purple transition-all duration-300">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium group-hover/item:text-accent transition-colors">Location</p>
                  <p className="text-muted-foreground text-sm">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
