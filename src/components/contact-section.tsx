"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const t = useTranslations();
  const containerRef = useRef<HTMLDivElement>(null);

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
      href: "https://www.linkedin.com/in/rhuanlucascas",
      handle: "linkedin.com/in/rhuanlucascas",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://www.github.com/rhuanlucasdev",
      handle: "github.com/rhuanlucasdev",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll<HTMLAnchorElement>("a");

    // Animação dos cards: fade + slide + stagger
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      }
    );

    // Hover pulse nos ícones
    cards.forEach((card) => {
      const icon = card.querySelector<SVGSVGElement>("svg");
      if (!icon) return;

      card.addEventListener("mouseenter", () => {
        gsap.to(icon, { scale: 1.2, duration: 0.2, ease: "power1.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(icon, { scale: 1, duration: 0.2, ease: "power1.out" });
      });
    });
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
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
