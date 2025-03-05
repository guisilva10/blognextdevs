import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import Link from "next/link";

export default function DocsPage() {
  const categories = [
    {
      title: "Getting Started",
      description: "Learn the basics and get up and running quickly.",
      sections: [
        { title: "Introduction", slug: "introduction" },
        { title: "Installation", slug: "installation" },
        { title: "Configuration", slug: "configuration" },
      ],
    },
    {
      title: "Core Concepts",
      description: "Understand the fundamental concepts of the platform.",
      sections: [
        { title: "Content Management", slug: "content-management" },
        { title: "Routing", slug: "routing" },
        { title: "Data Fetching", slug: "data-fetching" },
      ],
    },
    {
      title: "Advanced Topics",
      description: "Dive deeper into advanced features and techniques.",
      sections: [
        { title: "Authentication", slug: "authentication" },
        { title: "API Integration", slug: "api-integration" },
        { title: "Performance Optimization", slug: "performance-optimization" },
      ],
    },
    {
      title: "Deployment",
      description: "Learn how to deploy your application to production.",
      sections: [
        { title: "Deployment Options", slug: "deployment-options" },
        { title: "CI/CD Integration", slug: "ci-cd-integration" },
        { title: "Monitoring", slug: "monitoring" },
      ],
    },
  ];

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Documentation</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <Card key={category.title}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.sections.map((section) => (
                  <li key={section.slug}>
                    <Link
                      href={`/docs/${section.slug}`}
                      className="text-primary hover:underline"
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
