import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BlogCardProps {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  url: string;
}

export function BlogCard({
  title,
  date,
  readTime,
  excerpt,
  image,
  url,
}: BlogCardProps) {
  return (
    <Link href={url}>
      <Card className="overflow-hidden transition-colors hover:bg-muted/50">
        <CardHeader className="p-0">
          <div className="aspect-video relative">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <time dateTime={date}>{date}</time>
            <span>•</span>
            <span>{readTime}</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
