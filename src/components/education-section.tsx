"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "@/hooks/use-translations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EducationSection() {
  const t = useTranslations();
  const educationHistory = t.education.history;
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll<HTMLElement>(".edu-card");
    const circles =
      sectionRef.current.querySelectorAll<HTMLElement>(".edu-circle");

    // animação de cada card individual
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: i % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // anima quando o topo do card chega a 85% da tela
          },
        }
      );
    });

    // animação de cada círculo individual
    circles.forEach((circle) => {
      gsap.fromTo(
        circle,
        { scale: 0 },
        {
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: circle,
            start: "top 85%",
          },
        }
      );
    });

    // animação da linha central
    const line =
      sectionRef.current.querySelector<HTMLElement>(".timeline-line");
    if (line) {
      gsap.fromTo(
        line,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="education" className="w-full bg-card py-20 sm:py-28">
      <div ref={sectionRef} className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 max-w-2xl text-center mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.education.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.education.description}
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Linha central animada */}
          <div className="timeline-line absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-border"></div>

          {educationHistory.map((item, index) => (
            <div key={item.institution} className="relative mb-12">
              {/* Círculo animado */}
              <div className="edu-circle absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 transform rounded-full bg-primary ring-4 ring-background"></div>

              <Card
                className={`edu-card w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0
                    ? "md:ml-auto md:pl-12"
                    : "md:mr-auto md:text-right md:pr-12"
                }`}
              >
                <CardHeader className="p-6">
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  <CardTitle className="font-headline text-xl">
                    {item.degree}
                  </CardTitle>
                  <p className="font-medium text-foreground">
                    {item.institution}
                  </p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
