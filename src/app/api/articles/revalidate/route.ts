import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const { id }: { id?: any } = await request.json();
    if (typeof id === "string") {
      revalidateTag(`/articles/${id}`);
      revalidateTag("/articles");
    }
    return NextResponse.json({ message: "revalidate articles" });
  } catch {
    return NextResponse.json({ message: "incorrect input" });
  }
}
