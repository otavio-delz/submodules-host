import { Module1Component } from "@/modules/submodules-module1/module1-component";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Module1Component />
    </div>
  );
}
