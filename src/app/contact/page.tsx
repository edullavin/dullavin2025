"use client";
import { useState } from "react";
import PageTransition from "@/components/global/PageTransition";
import { Mail, Github, Linkedin } from "lucide-react";

const CONTACT_EMAIL = "yourname@example.com"; // Replace with your real email

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
    }, 800);
  }

  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="space-y-6 text-center mb-10">
          <h1 className="font-heading text-4xl md:text-5xl tracking-tight">Get In Touch</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            I’d love to hear about opportunities, collaborations, or just chat. Reach out directly at
            {" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-1 font-medium text-primary-600 hover:text-primary-700 transition-colors">
              <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
            </a>
            {" "}or use the form below.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-border bg-card/70 backdrop-blur-sm p-6 shadow-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input id="name" name="name" required placeholder="Your name" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea id="message" name="message" required rows={5} placeholder="Tell me a bit about your project..." className="w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="inline-flex items-center justify-center rounded-md bg-primary-600 hover:bg-primary-700 disabled:opacity-60 px-4 py-2 text-sm font-medium text-white transition-colors"
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Sent ✔"}
            </button>
            {status === "sent" && (
              <p className="text-xs text-green-600">Demo submission successful. Replace with real backend or service.</p>
            )}
          </form>

          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card/70 backdrop-blur-sm p-6 shadow-sm">
              <h2 className="font-heading text-xl mb-4 tracking-tight">Connect</h2>
              <ul className="space-y-3">
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="group flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-600/10 group-hover:bg-primary-600/20"><Mail className="h-4 w-4 text-primary-600" /></span>
                    <span>{CONTACT_EMAIL}</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-600/10 group-hover:bg-primary-600/20"><Github className="h-4 w-4 text-primary-600" /></span>
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-600/10 group-hover:bg-primary-600/20"><Linkedin className="h-4 w-4 text-primary-600" /></span>
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card/70 backdrop-blur-sm p-6 shadow-sm">
              <h2 className="font-heading text-xl mb-4 tracking-tight">Availability</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">Currently open to freelance engagements, full-time roles, and interesting collaborations. I aim to respond within 24–48 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}