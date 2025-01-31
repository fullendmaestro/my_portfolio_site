import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageTitle } from "@/components/page-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Socials } from "@/components/socials";

export default function ContactPage() {
  return (
    <div className="container py-12">
      <PageTitle>CONTACT</PageTitle>
      <div className="max-w-2xl mx-auto space-y-8 px-4 sm:px-6">
        <p className="text-center text-muted-foreground text-sm sm:text-base">
          I appreciate your interest in my portfolio. For any inquiries,
          collaboration opportunities, or messages, please feel free to reach
          out. You can connect with me on social media or send an email to:
          <p className="text-center">
            <a
              href="mailto:fullendmaestro@gmail.com"
              className="font-medium text-blue-600 hover:underline"
            >
              fullendmaestro@gmail.com
            </a>
          </p>
          .
        </p>

        <div className="flex justify-center gap-4">
          <Socials />
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
