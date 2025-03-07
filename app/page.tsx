import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
        Welcome to the First App
      </h1>
      <p className="my-2 font-medium text-lg text-muted-foreground">
        This app aims to help us get started with web development with Next.js
        and Tailwind CSS
      </p>
      <Button asChild className="mt-3">
        <Link href={"/products"}>Explore Products Page</Link>
      </Button>
    </div>
  );
}
