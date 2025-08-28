"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

export default function ContactSection() {
  const t = useTranslations();

  const contactLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/rhlucasc_",
      handle: "instagram.com/rhlucasc_",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rhuanlucasdev",
      handle: "linkedin.com/in/rhuanlucasdev",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://www.github.com/rhuanlucasdev",
      handle: "github.com/rhuanlucasdev",
    },
  ];

  return (
    <section
      id="contact"
      className="container mx-auto max-w-7xl px-4 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {t.contact.description}
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
        {contactLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                <link.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
            </div>
            <h3 className="mt-6 font-headline text-xl font-semibold">
              {link.label}
            </h3>
            <p className="mt-2 text-muted-foreground transition-colors group-hover:text-primary">
              {link.handle}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
