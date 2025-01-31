import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Socials } from "./socials";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center gap-4 py-2 md:py-3">
        <div className="flex gap-4">
          <Socials />
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © 2024 - All rights reserved. Made with ❤️ by Afolabi Abdulsamad
        </p>
      </div>
    </footer>
  );
}
