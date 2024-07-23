import Link from "next/link";
import { getList } from "@/server/libs/microcms";

export const dynamic = "force-dynamic";
export const fetchCache = "force-cache";

export default async function StaticPage() {
  const { contents } = await getList();
  const time = new Date().toLocaleString();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <h1>{time}</h1>
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/articles/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
