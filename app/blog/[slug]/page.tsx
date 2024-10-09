import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

const posts = [
  { id: 1, title: "The Future of AI", slug: "future-of-ai", content: "# The Future of AI\n\nArtificial Intelligence is rapidly evolving..." },
  { id: 2, title: "Geometric Algorithms in Computer Graphics", slug: "geometric-algorithms", content: "# Geometric Algorithms in Computer Graphics\n\nGeometry plays a crucial role in computer graphics..." },
  { id: 3, title: "Machine Learning: A Beginner's Guide", slug: "ml-beginners-guide", content: "# Machine Learning: A Beginner's Guide\n\nMachine Learning is a subset of AI that focuses on..." },
];

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="prose lg:prose-xl">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}