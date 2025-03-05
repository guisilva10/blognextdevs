import { Button } from "@/app/_components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const doc = {
    title: "Introduction",
    content: `
      <h1>Introduction to ${slug}</h1>
      
      <p>Welcome to DevDocs, a modern platform for blogs and documentation. This guide will help you understand the basics of using DevDocs and how to get the most out of it.</p>
      
      <h2>What is DevDocs?</h2>
      
      <p>DevDocs is a comprehensive platform designed to help developers create, manage, and share documentation and blog content. It's built with the latest technologies to ensure a smooth and efficient experience for both content creators and readers.</p>
      
      <h2>Key Features</h2>
      
      <ul>
        <li><strong>Modern UI:</strong> Clean and intuitive interface built with Next.js 15 and Tailwind CSS 4.</li>
        <li><strong>Responsive Design:</strong> Works seamlessly on all devices, from desktop to mobile.</li>
        <li><strong>Dark Mode Support:</strong> Easy on the eyes with automatic dark mode detection.</li>
        <li><strong>Search Functionality:</strong> Quickly find the content you need with powerful search capabilities.</li>
        <li><strong>Markdown Support:</strong> Write content in Markdown for easy formatting.</li>
        <li><strong>Code Highlighting:</strong> Beautiful syntax highlighting for code snippets.</li>
        <li><strong>Versioned Documentation:</strong> Maintain multiple versions of your documentation.</li>
      </ul>
      
      <h2>Getting Started</h2>
      
      <p>To get started with DevDocs, check out the following resources:</p>
      
      <ul>
        <li><a href="/docs/installation">Installation Guide</a>: Learn how to install and set up DevDocs.</li>
        <li><a href="/docs/configuration">Configuration</a>: Customize DevDocs to suit your needs.</li>
        <li><a href="/docs/content-management">Content Management</a>: Learn how to create and manage content.</li>
      </ul>
      
      <h2>Community and Support</h2>
      
      <p>Join our community to get help, share ideas, and contribute to the development of DevDocs:</p>
      
      <ul>
        <li><a href="https://github.com/devdocs/devdocs">GitHub Repository</a>: Report issues and contribute to the codebase.</li>
        <li><a href="https://discord.gg/devdocs">Discord Server</a>: Chat with other users and get real-time support.</li>
        <li><a href="https://twitter.com/devdocs">Twitter</a>: Stay updated with the latest news and announcements.</li>
      </ul>
      
      <h2>Next Steps</h2>
      
      <p>Now that you have a basic understanding of DevDocs, you can proceed to the <a href="/docs/installation">Installation Guide</a> to set up your own instance.</p>
    `,
  };

  return (
    <div className="container max-w-4xl py-8">
      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link href="/docs">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Documentation
        </Link>
      </Button>

      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: doc.content }}
      />
    </div>
  );
}
