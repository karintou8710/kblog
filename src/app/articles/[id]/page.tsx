import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "@/server/libs/microcms";

export const dynamic = "force-static";
export const fetchCache = "force-cache";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      id: post.id,
    };
  });

  return [...paths];
}

export default async function ArticlePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getDetail(id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{parse(post.content)}</div>
    </div>
  );
}
