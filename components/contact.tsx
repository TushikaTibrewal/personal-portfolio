"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Linkedin, Github, CheckCircle, AlertCircle, Sparkles } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message,
        })
        // Reset form on success
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-6 bg-muted/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-500 group">
            <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center gap-2">
              Let's Connect
              <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
            </h3>
            <p className="text-muted-foreground mb-8 text-pretty leading-relaxed">
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

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Send className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={`glass border-border/50 focus:border-primary focus:glow-cyan transition-all duration-300 ${
                      focusedField === "name" ? "scale-[1.02] shadow-lg" : ""
                    }`}
                    required
                    disabled={isSubmitting}
                  />
                  {focusedField === "name" && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                  )}
                </div>

                <div className="relative">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`glass border-border/50 focus:border-primary focus:glow-cyan transition-all duration-300 ${
                      focusedField === "email" ? "scale-[1.02] shadow-lg" : ""
                    }`}
                    required
                    disabled={isSubmitting}
                  />
                  {focusedField === "email" && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                  )}
                </div>

                <div className="relative">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className={`glass border-border/50 focus:border-primary focus:glow-cyan transition-all duration-300 resize-none ${
                      focusedField === "message" ? "scale-[1.02] shadow-lg" : ""
                    }`}
                    required
                    disabled={isSubmitting}
                  />
                  {focusedField === "message" && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                  )}
                </div>

                {submitStatus.type && (
                  <div
                    className={`flex items-center gap-2 p-4 rounded-lg animate-in slide-in-from-top-2 duration-300 ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 text-green-400 border border-green-500/20 glow-green"
                        : "bg-red-500/10 text-red-400 border border-red-500/20 glow-red"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 animate-bounce" />
                    ) : (
                      <AlertCircle className="w-5 h-5 animate-pulse" />
                    )}
                    <span className="text-sm font-medium">{submitStatus.message}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  className={`w-full glow-cyan hover:glow-cyan transition-all duration-300 relative overflow-hidden group ${
                    isSubmitting ? "animate-pulse" : "hover:scale-[1.02]"
                  }`}
                  size="lg"
                  disabled={isSubmitting}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <Send
                      className={`w-4 h-4 ${isSubmitting ? "animate-spin" : "group-hover:translate-x-1"} transition-transform duration-300`}
                    />
                    <span className="font-medium">{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </div>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
