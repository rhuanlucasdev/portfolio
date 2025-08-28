"use client";

import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "@/hooks/use-translations";

export default function EducationSection() {
  const t = useTranslations();
  const educationHistory = t.education.history;

  return (
    <section id="education" className="w-full bg-card py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 max-w-2xl text-center mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.education.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.education.description}
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-border"></div>
          {educationHistory.map((item, index) => (
            <div key={item.institution} className="relative mb-12">
              <div className="absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 transform rounded-full bg-primary ring-4 ring-background"></div>
              <Card
                className={`w-full md:w-[calc(50%-2rem)] ${
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
