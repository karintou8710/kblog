import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-700 text-white h-14 px-6 flex items-center">
      <Link className="text-xl font-bold" href="/">
        <span>karintouのブログ</span>
      </Link>
      <div className="flex-1" />
      <nav>
        <Button variant="icon" size="icon" asChild>
          <Link href="https://github.com/karintou8710" target="_blank">
            <GitHubLogoIcon className="size-6" />
          </Link>
        </Button>
      </nav>
    </header>
  );
}
