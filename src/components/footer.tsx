import Link from "next/link";
import { Github, Linkedin, CodeXml } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">Rhuan Lucas</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Rhuan Lucas. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
