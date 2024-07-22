import { headers } from "next/headers";
import { setTimeout } from "timers/promises";

export async function HeavyComponent() {
  await setTimeout(3000);
  const header = headers();

  return <p>IO Heavy Component, your host = {header.get("HOST")}</p>;
}
