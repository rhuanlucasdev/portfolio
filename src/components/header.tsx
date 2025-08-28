"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, CodeXml } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";
import { useTranslations } from "@/hooks/use-translations";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();

  const navLinks = t.header.navLinks;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageToggle = (checked: boolean) => {
    setLanguage(checked ? "pt" : "en");
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Rhuan Lucas Home"
        >
          <CodeXml className="h-7 w-7 text-primary" />
          <span className="font-headline text-xl font-bold">Rhuan Lucas</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-2">
            <Label
              htmlFor="language-toggle-desktop"
              className="text-sm font-medium text-muted-foreground"
            >
              EN
            </Label>
            <Switch
              id="language-toggle-desktop"
              checked={language === "pt"}
              onCheckedChange={handleLanguageToggle}
              aria-label="Toggle language"
            />
            <Label
              htmlFor="language-toggle-desktop"
              className="text-sm font-medium text-muted-foreground"
            >
              PT
            </Label>
          </div>
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between border-b pb-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <CodeXml className="h-7 w-7 text-primary" />
                    <span className="font-headline text-xl font-bold">
                      Rhuan Lucas
                    </span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto flex items-center justify-center space-x-2 pb-6">
                  <Label
                    htmlFor="language-toggle-mobile"
                    className="text-lg font-medium"
                  >
                    EN
                  </Label>
                  <Switch
                    id="language-toggle-mobile"
                    checked={language === "pt"}
                    onCheckedChange={handleLanguageToggle}
                    aria-label="Toggle language"
                  />
                  <Label
                    htmlFor="language-toggle-mobile"
                    className="text-lg font-medium"
                  >
                    PT
                  </Label>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
