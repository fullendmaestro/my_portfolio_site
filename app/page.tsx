import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Socials } from "@/components/socials";

export default function Home() {
  return (
    <div className="container relative p-4">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <div className="text-center space-y-6 sm:space-y-8 flex-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            Afolabi Abdulsamad
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
            SOFTWARE ENGINEER | DEVELOPER
          </p>

          <div className="flex justify-center gap-4">
            <Socials />
          </div>

          <div className="bg-muted/50 rounded-lg p-4 sm:p-6 max-w-md mx-auto">
            <div className="space-y-4 text-sm sm:text-base text-left">
              <div className="grid grid-cols-2 gap-2">
                <span className="font-medium">💼 Status:</span>
                <span>Building scalable web applications</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="font-medium">🚀 Engaged in:</span>
                <span>Hackathons and Bounties</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="font-medium">🌟 Contributions:</span>
                <span>Consistently contributing to personal projects</span>
              </div>
            </div>
          </div>

          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link href="/about">About Me</Link>
          </Button>
        </div>
        <div className="w-full mt-12 md:mt-0 flex-1">
          <div className="rounded-lg overflow-hidden w-full h-[400px] sm:h-[500px] flex items-center justify-center">
            <Image
              src="/images/avatar.jpg"
              alt="Laptop"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
