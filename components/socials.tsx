import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Socials() {
  return (
    <>
      <Button variant="ghost" size="icon" asChild>
        <Link href="https://github.com/fullendmaestro">
          <Github className="w-5 h-5" />
          <span className="sr-only">GitHub</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <Link href="https://www.linkedin.com/in/fullendmaestro">
          <Linkedin className="w-5 h-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <Link href="https://x.com/fullendmaestro">
          <Twitter className="w-5 h-5" />
          <span className="sr-only">Twitter</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <Link href="https://www.instagram.com/fullendmaestro/">
          <Instagram className="w-5 h-5" />
          <span className="sr-only">Instagram</span>
        </Link>
      </Button>
    </>
  );
}
