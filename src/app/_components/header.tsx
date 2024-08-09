import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-700 text-white h-16 px-4 flex items-center">
      <Link className="text-xl font-bold" href="/">
        <span>karintouのブログ</span>
      </Link>
    </header>
  );
}
