import { Button } from "@/app/_components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";

export default function BlogPostPage() {
  const post = {
    title: "Getting Started with Next.js 15",
    date: "March 1, 2025",
    author: "Jane Doe",
    content: `
      <p>Next.js 15 introduces several exciting new features and improvements that make building web applications even more enjoyable and efficient.</p>
      
      <h2>What's New in Next.js 15</h2>
      
      <p>Next.js 15 includes the following key features:</p>
      
      <ul>
        <li><strong>Async Request APIs:</strong> An incremental step towards a simplified rendering and caching model.</li>
        <li><strong>Caching Semantics:</strong> fetch requests, GET Route Handlers, and client navigations are no longer cached by default.</li>
        <li><strong>React 19 Support:</strong> Support for React 19, React Compiler (Experimental), and hydration error improvements.</li>
        <li><strong>Turbopack Dev (Stable):</strong> Performance and stability improvements.</li>
        <li><strong>unstable_after API (Experimental):</strong> Execute code after a response finishes streaming.</li>
        <li><strong>instrumentation.js API:</strong> New API for server lifecycle observability.</li>
        <li><strong>Enhanced Forms (next/form):</strong> Enhance HTML forms with client-side navigation.</li>
        <li><strong>Self-hosting Improvements:</strong> More control over Cache-Control headers.</li>
      </ul>
      
      <h2>Getting Started</h2>
      
      <p>To create a new Next.js 15 project, run the following command:</p>
      
      <pre><code>npx create-next-app@latest</code></pre>
      
      <p>This will set up a new Next.js project with the latest version and all the recommended configurations.</p>
      
      <h2>Migrating from Previous Versions</h2>
      
      <p>If you're upgrading from a previous version of Next.js, you'll need to update your dependencies:</p>
      
      <pre><code>npm install next@latest react@latest react-dom@latest</code></pre>
      
      <p>Make sure to review the migration guide for any breaking changes that might affect your application.</p>
      
      <h2>Conclusion</h2>
      
      <p>Next.js 15 continues to improve the developer experience while providing powerful features for building modern web applications. Give it a try and let us know what you think!</p>
    `,
  };

  return (
    <div className="container max-w-4xl py-8">
      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <article>
        <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>

        <div className="text-muted-foreground mb-8 flex items-center gap-6">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>{post.author}</span>
          </div>
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
