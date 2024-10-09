import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function BlogPage() {
  const posts = [
    { id: 1, title: "The Future of AI", slug: "future-of-ai", description: "Exploring the potential impact of AI on various industries" },
    { id: 2, title: "Geometric Algorithms in Computer Graphics", slug: "geometric-algorithms", description: "Understanding the role of geometry in modern graphics" },
    { id: 3, title: "Machine Learning: A Beginner's Guide", slug: "ml-beginners-guide", description: "Getting started with machine learning concepts" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href={`/blog/${post.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}