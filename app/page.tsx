import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black flex-col gap-4">
      Home
      <Link className="text-blue-500 underline" href="/module1">
        Module 1
      </Link>
    </div>
  );
}
