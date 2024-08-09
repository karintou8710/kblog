import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "@/server/libs/microcms";
import Image from "next/image";

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
    <div className="w-[800px] mx-auto my-16">
      <div>
        <Image
          src={post.eyecatch!.url}
          alt="eyecatch"
          width={600}
          height={300}
          className="mx-auto"
        />
        <h1 className="text-3xl font-bold mt-16">{post.title}</h1>
        <p className="mt-6">{post.publishedAt}</p>
      </div>

      <div className="my-6 border" />

      <div className="mt-8">{parse(post.content ?? "")}</div>
    </div>
  );
}
