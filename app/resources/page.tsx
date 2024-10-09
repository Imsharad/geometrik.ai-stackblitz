import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function ResourcesPage() {
  const resources = [
    { title: "AI Cheat Sheet", description: "Quick reference guide for AI concepts", link: "#" },
    { title: "Geometry Formulas", description: "Comprehensive list of geometric formulas", link: "#" },
    { title: "Machine Learning Glossary", description: "Key terms and definitions in ML", link: "#" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Additional Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href={resource.link}>Download</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}