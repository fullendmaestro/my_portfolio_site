import { PageTitle } from "@/components/page-title";
import { TechStack } from "@/components/tech-stack";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container py-12 px-4 sm:px-6 lg:px-8">
      <PageTitle>ABOUT ME</PageTitle>
      <div className="max-w-4xl mx-auto space-y-12 flex flex-col md:flex-row items-center md:space-x-12">
        <div className="w-full md:w-1/2 prose prose-gray dark:prose-invert mx-auto px-4 sm:px-6">
          <div>
            <p className="text-base sm:text-lg text-center md:text-left text-muted-foreground">
              Hi, My name is Afolabi Abdulsamad. I am a Software Engineer.
            </p>
            <p className="text-base sm:text-lg text-center md:text-left text-muted-foreground">
              I have a strong passion for technology and software development. I
              am a software engineer with a strong background in building web
              and blockchain applications.
            </p>
            <p className="text-base sm:text-lg text-center md:text-left text-muted-foreground">
              I am passionate about learning and building software solutions
              that solve real-world problems. I am always looking for
              opportunities to learn and grow as a software engineer.
            </p>
            <p className="text-base sm:text-lg text-center md:text-left text-muted-foreground">
              Currently, am an undergraduate student at the Federal University
              of Technology Minna, Niger State, Nigeria. I am studying
              Electrical and Electronics Engineering.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/images/me.jpg"
            alt="Laptop"
            width={300}
            height={300}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="px-4 sm:px-0">
        <TechStack />
      </div>
    </div>
  );
}
