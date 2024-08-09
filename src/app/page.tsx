import Link from "next/link";
import { getList } from "@/server/libs/microcms";

export const dynamic = "force-static";
export const fetchCache = "force-cache";

export default async function Home() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
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
