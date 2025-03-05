import { BlogCard } from "@/app/_components/blog-card";

export default function BlogPage() {
  // This would typically come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js 15",
      excerpt:
        "Learn how to set up a new project with Next.js 15 and explore its new features.",
      date: "March 1, 2025",
      author: "Jane Doe",
      category: "Tutorials",
      slug: "getting-started-with-nextjs-15",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS 4",
      excerpt:
        "Discover the new features in Tailwind CSS 4 and how to use them effectively in your projects.",
      date: "February 28, 2025",
      author: "John Smith",
      category: "CSS",
      slug: "mastering-tailwind-css-4",
    },
    {
      id: 3,
      title: "Building UI Components with shadcn/ui",
      excerpt:
        "Learn how to use shadcn/ui to build beautiful and accessible UI components for your web applications.",
      date: "February 25, 2025",
      author: "Alex Johnson",
      category: "UI/UX",
      slug: "building-ui-components-with-shadcn-ui",
    },
    {
      id: 4,
      title: "Server Components in Next.js",
      excerpt:
        "Understand how Server Components work in Next.js and when to use them in your applications.",
      date: "February 20, 2025",
      author: "Sarah Williams",
      category: "React",
      slug: "server-components-in-nextjs",
    },
    {
      id: 5,
      title: "Advanced Routing in Next.js App Router",
      excerpt:
        "Explore advanced routing techniques with the Next.js App Router for complex applications.",
      date: "February 15, 2025",
      author: "Michael Brown",
      category: "Tutorials",
      slug: "advanced-routing-in-nextjs-app-router",
    },
    {
      id: 6,
      title: "Optimizing Performance in Next.js Applications",
      excerpt:
        "Learn strategies to optimize the performance of your Next.js applications for better user experience.",
      date: "February 10, 2025",
      author: "Emily Davis",
      category: "Performance",
      slug: "optimizing-performance-in-nextjs-applications",
    },
  ];

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
