import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { revalidateArticle } from "@/server/libs/revalidate";

export async function POST(request: NextRequest) {
  try {
    const { id }: { id?: any } = await request.json();

    if (typeof id === "string") {
      revalidateArticle(id);
    }
    return NextResponse.json({ message: "revalidate articles" });
  } catch {
    return NextResponse.json({ message: "incorrect input" });
  }
}
