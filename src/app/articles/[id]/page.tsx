import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail } from "@/server/libs/microcms";

export default async function StaticDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getDetail(id);
  const time = new Date().toLocaleString();

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{time}</h2>
      <div>{parse(post.content)}</div>
    </div>
  );
}
