import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">Geometrik.ai</span>
        </h1>
        <p className="mt-3 text-2xl">
          Explore our courses and expand your knowledge
        </p>
        <div className="flex mt-6">
          <Button asChild className="mr-4">
            <Link href="/courses">View Courses</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog">Read Blog</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}