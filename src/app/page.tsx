import Link from "next/link";
import { getList } from "@/server/libs/microcms";
import ArticleCard from "./_components/article-card";

export const dynamic = "force-static";
export const fetchCache = "force-cache";

export default async function Home() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <section className="container mx-auto my-16">
      <h2 className="text-2xl font-bold py-4">記事一覧</h2>
      {/* TODO: レスポンシブに対応したカード配置 */}
      <div className="flex gap-x-[calc((100%-1200px)/3)] gap-y-8 flex-wrap">
        {contents.map((post) => {
          return <ArticleCard key={post.id} post={post} className="shrink-0" />;
        })}
      </div>
    </section>
  );
}
