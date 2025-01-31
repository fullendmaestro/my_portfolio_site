import { PageTitle } from "@/components/page-title";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Aptos NFT Marketplace",
    description:
      "A decentralized application built on the Aptos blockchain for minting, buying, selling, and trading NFTs.",
    technologies: [
      "Aptos",
      "Move",
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Ant Design",
    ],
    demoLink: "https://aptos-nft-marketplace-pi.vercel.app/",
    repoLink: "https://github.com/fullendmaestro/aptos-nft-marketplace",
  },
  {
    title: "Taipy Assistant",
    description:
      "An AI-powered browser extension concept that integrates with your web browsing experience using Google's Gemini 1.5 Flash model and Taipy's GUI framework.",
    technologies: [
      "Python",
      "Google's Gemini",
      "Taipy",
      "WebSocket",
      "Web api",
    ],
    demoLink: "https://assist-ai-eta.vercel.app/",
    repoLink: "https://github.com/fullendmaestro/taipy-challenge",
  },
  {
    title: "Assist-AI",
    description:
      "Assist AI is an innovative application that seamlessly integrates text, speech, and visual inputs to create an immersive user experience.",
    technologies: [
      "Next.js",
      "Vercel",
      "NextAuth.js",
      "Web Speech API",
      "React Speech Recognition",
    ],
    demoLink: "https://assist-ai-eta.vercel.app/",
    repoLink: "https://github.com/fullendmaestro/assist-ai",
  },
  {
    title: "Llama Chatbot",
    description:
      "An interactive chatbot using the Llama-2 model for text generation, enhanced with sentiment analysis for improved user interaction.",
    technologies: [
      "Llama-2",
      "Sentiment Analysis",
      "Pinecone",
      "Hugging Face",
      "Gradio",
    ],
    demoLink: "",
    repoLink: "https://github.com/fullendmaestro/Llama-Chatbot",
  },
  {
    title: "Simple File Server",
    description:
      "A basic file server written in Rust that serves files from a specified directory over TCP. This server handles HTTP requests, serves static files, and responds with appropriate HTTP headers.",
    technologies: ["Rust", "HTTP"],
    demoLink: "",
    repoLink: "https://github.com/fullendmaestro/simple-file-server",
  },
  {
    title: "Auth-and-Author-with-expressjs",
    description:
      "A project demonstrating the concepts of authentication and authorization using Express.js, including user account deletion post-authentication.",
    technologies: ["Express.js", "Node.js"],
    demoLink: "",
    repoLink:
      "https://github.com/fullendmaestro/authentication-and-authorisation-with-expressjs",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-12 px-4">
      <PageTitle>PROJECTS</PageTitle>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
