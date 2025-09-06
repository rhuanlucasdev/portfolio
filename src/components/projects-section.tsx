"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const t = useTranslations();
  const professionalProjects = t.projects.professional;
  const personalProjects = t.projects.personal;

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // animação dos cards
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".project-card"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // animação dos badges
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".tag"),
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.05,
        duration: 0.4,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  // tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    gsap.to(currentTarget, {
      rotateX: y * 10,
      rotateY: x * 10,
      duration: 0.3,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0, duration: 0.5 });
  };

  const ProfessionalProjectCard = ({ project }: { project: any }) => (
    <Card
      className="project-card flex flex-col overflow-hidden border-2 border-border/80 shadow-lg transition-shadow hover:shadow-primary/20 md:flex-row"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[4/3] min-h-[300px] md:min-h-full md:w-2/5">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          data-ai-hint={project.imageHint}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
        <div>
          <CardHeader className="p-0">
            <p className="mb-2 text-sm text-muted-foreground">
              {project.period}
            </p>
            <CardTitle className="font-headline text-2xl lg:text-3xl">
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4 p-0">
            <CardDescription className="text-base text-muted-foreground">
              {project.description}
            </CardDescription>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="tag">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </div>
        <CardFooter className="mt-8 p-0">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.projects.cta}
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );

  const PersonalProjectCard = ({ project }: { project: any }) => (
    <Card
      className="project-card overflow-hidden border-2 border-border/80 shadow-lg transition-shadow hover:shadow-primary/20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <CardHeader className="p-6">
        <div className="flex items-center gap-4">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={64}
            height={64}
            className="rounded-full"
            data-ai-hint={project.imageHint}
          />
          <div>
            <CardTitle className="font-headline text-2xl">
              {project.title}
            </CardTitle>
            <CardDescription className="mt-1 text-muted-foreground">
              {project.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="tag">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 p-6">
        <Button asChild variant="outline" className="w-full">
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2" />
            {t.projects.personal.cta}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <section id="projects" className="w-full bg-card py-20 sm:py-28">
      <div ref={sectionRef} className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.projects.description}
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4">
              {professionalProjects.title}
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              {professionalProjects.description}
            </p>
            <div className="grid grid-cols-1 gap-8">
              {professionalProjects.items.map((project) => (
                <ProfessionalProjectCard
                  key={project.title}
                  project={project}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4">
              {personalProjects.title}
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              {personalProjects.description}
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {personalProjects.items.map((project) => (
                <PersonalProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
