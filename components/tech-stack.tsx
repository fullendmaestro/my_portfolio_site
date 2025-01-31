import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PageTitle } from "./page-title";

interface TechItem {
  name: string;
  description: string;
  icon: string;
}

const languages: TechItem[] = [
  {
    name: "JavaScript",
    description: "Language",
    icon: "/images/javascript-original.svg",
  },
  {
    name: "Python",
    description: "Language",
    icon: "/images/python-original.svg",
  },
];

const frontend: TechItem[] = [
  {
    name: "React",
    description: "JavaScript UI Library",
    icon: "/images/react-original.svg",
  },
  {
    name: "Redux",
    description: "JavaScript UI Library",
    icon: "/images/redux.svg",
  },
  {
    name: "Next.js",
    description: "Framework (Full Stack)",
    icon: "/images/next.jslogo.svg",
  },
];

export function TechStack() {
  return (
    <div className="space-y-8">
      <PageTitle>MY STACK</PageTitle>

      <div className="space-y-12">
        {/* Languages */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-muted-foreground">
            Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {languages.map((tech) => (
              <Card key={tech.name} className="bg-muted/50">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 relative shrink-0">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-muted-foreground">
            Frontend & Frameworks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {frontend.map((tech) => (
              <Card key={tech.name} className="bg-muted/50">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 relative shrink-0">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
