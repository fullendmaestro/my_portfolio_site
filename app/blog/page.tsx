import { PageTitle } from "@/components/page-title";
import { BlogCard } from "@/components/blog-card";

export default function BlogPage() {
  const posts = [
    {
      title: "Programming Problem Solving: C++ Case Study",
      date: "Dec 21, 2024",
      readTime: "8 min read",
      excerpt:
        "We use computers in many aspects of our life endeavors, using various software. However, this was all made possible thanks to the power of programming, without which a computer is just a crank piece of metal. In this article, I will explore the full breadth of programming problem-solving using C++...",
      image: "/images/cpp-problem-solving-banner.jpeg",
      url: "https://dev.to/afolabi_abdulsamad_52f6de/programming-problem-solving-c-case-study-5hla",
    },
  ];

  return (
    <div className="container py-12 px-4">
      <PageTitle>BLOG</PageTitle>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:gap-6 max-w-4xl mx-auto">
        {posts.map((post) => (
          <BlogCard key={post.url} {...post} />
        ))}
      </div>
    </div>
  );
}
