"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Sidebar } from "@/app/_components/sidebar";

import { Button } from "@/app/_components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { CodeBlock } from "@/app/_components/code-block";
import { ChevronRight, ExternalLink, Github } from "lucide-react";
import { ThemeToggle } from "./_components/theme/toggle-theme-button";

export default function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <ChevronRight
                  className={`h-4 w-4 ${sidebarOpen ? "rotate-90" : ""}`}
                />
                <span className="sr-only">Toggle Menu</span>
              </Button>
              <span className="hidden font-bold sm:inline-block">
                BLOG NEXTDEVS
              </span>
            </motion.div>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <ThemeToggle />
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col items-start gap-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                  Documentation
                </h1>
                <p className="text-lg text-muted-foreground">
                  Welcome to the BLOG NEXTDEVS documentation.
                </p>
              </div>
              <div className="mt-8">
                <Tabs defaultValue="getting-started">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="getting-started">
                      Getting Started
                    </TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="api">API</TabsTrigger>
                  </TabsList>
                  <TabsContent value="getting-started" className="space-y-6">
                    <div className="my-6 w-full overflow-y-auto">
                      <div className="space-y-6">
                        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
                          Installation
                        </h2>
                        <p>
                          Get started with BLOG NEXTDEVS by installing the
                          dependencies and setting up your project.
                        </p>
                        <CodeBlock
                          language="bash"
                          code={`npx create-next-app@latest my-blog --typescript --tailwind --eslint
cd my-blog
npm install framer-motion @radix-ui/react-icons`}
                        />
                        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
                          Project Structure
                        </h2>
                        <p>
                          BLOG NEXTDEVS follows the Next.js App Router
                          structure:
                        </p>
                        <CodeBlock
                          language="text"
                          code={`my-blog/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   └── ...
├── lib/
├── public/
└── ...`}
                        />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="features" className="space-y-6">
                    <div className="my-6 w-full overflow-y-auto">
                      <div className="space-y-6">
                        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
                          Key Features
                        </h2>
                        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                          <li>Next.js 14 with App Router</li>
                          <li>TypeScript for type safety</li>
                          <li>Tailwind CSS for styling</li>
                          <li>Framer Motion animations</li>
                          <li>shadcn/ui components</li>
                          <li>Dark mode support</li>
                          <li>Responsive design</li>
                          <li>SEO optimized</li>
                          <li>Markdown support</li>
                        </ul>
                        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
                          Animations
                        </h2>
                        <p>
                          BLOG NEXTDEVS uses Framer Motion for smooth
                          animations:
                        </p>
                        <CodeBlock
                          language="tsx"
                          code={`import { motion } from "framer-motion"

export function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Content with animation
    </motion.div>
  )
}`}
                        />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="api" className="space-y-6">
                    <div className="my-6 w-full overflow-y-auto">
                      <div className="space-y-6">
                        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
                          API Reference
                        </h2>
                        <p>
                          BLOG NEXTDEVS provides several API endpoints for
                          managing blog content:
                        </p>
                        <div className="rounded-md border">
                          <div className="flex flex-row items-center justify-between space-x-4 p-4">
                            <div className="space-y-1">
                              <h3 className="font-medium">GET /api/posts</h3>
                              <p className="text-sm text-muted-foreground">
                                Retrieve all blog posts
                              </p>
                            </div>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Try it
                            </Button>
                          </div>
                        </div>
                        <div className="rounded-md border">
                          <div className="flex flex-row items-center justify-between space-x-4 p-4">
                            <div className="space-y-1">
                              <h3 className="font-medium">
                                GET /api/posts/[slug]
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Retrieve a specific blog post by slug
                              </p>
                            </div>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Try it
                            </Button>
                          </div>
                        </div>
                        <div className="rounded-md border">
                          <div className="flex flex-row items-center justify-between space-x-4 p-4">
                            <div className="space-y-1">
                              <h3 className="font-medium">POST /api/posts</h3>
                              <p className="text-sm text-muted-foreground">
                                Create a new blog post
                              </p>
                            </div>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Try it
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and
            shadcn/ui.
          </p>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} BLOG NEXTDEVS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
