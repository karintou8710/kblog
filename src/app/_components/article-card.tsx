import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Blog } from "@/server/libs/microcms";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Blog;
  className?: string;
};

export default function ArticleCard({ post, className }: Props) {
  return (
    <Card className={cn("w-[400px]", className)}>
      <Link href={`/articles/${post.id}`} className="block relative h-64">
        <Image src={post.eyecatch?.url!} alt="eyecatch" layout="fill" />
      </Link>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.publishedAt}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
}