import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Calendar, User } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle className="line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="flex items-center gap-2 text-xs">
          <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5">
            {post.category}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="text-muted-foreground flex justify-between text-xs">
        <div className="flex items-center">
          <Calendar className="mr-1 h-3 w-3" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center">
          <User className="mr-1 h-3 w-3" />
          <span>{post.author}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
