import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function CoursesPage() {
  const courses = [
    { id: 1, title: "Introduction to AI", slug: "intro-to-ai", description: "Learn the basics of Artificial Intelligence" },
    { id: 2, title: "Advanced Geometry", slug: "advanced-geometry", description: "Explore complex geometric concepts" },
    { id: 3, title: "Machine Learning Fundamentals", slug: "ml-fundamentals", description: "Get started with Machine Learning" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href={`/courses/${course.slug}`}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}