import { notFound } from 'next/navigation'

const courses = [
  { id: 1, title: "Introduction to AI", slug: "intro-to-ai", description: "Learn the basics of Artificial Intelligence", content: "This course covers the fundamentals of AI..." },
  { id: 2, title: "Advanced Geometry", slug: "advanced-geometry", description: "Explore complex geometric concepts", content: "Dive deep into advanced geometric theories..." },
  { id: 3, title: "Machine Learning Fundamentals", slug: "ml-fundamentals", description: "Get started with Machine Learning", content: "Understand the core concepts of machine learning..." },
];

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses.find(c => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-xl mb-8">{course.description}</p>
      <div className="prose max-w-none">
        <p>{course.content}</p>
      </div>
    </div>
  );
}