import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

interface ProjectLayoutProps {
  title: string
  description: string
  imageUrl: string
  technologies: string[]
  githubUrl?: string
  figmaUrl?: string
  devpostUrl?: string
  liveUrl?: string
  challenges: string[]
  learnings: string[]
  children: React.ReactNode
}

export default function ProjectLayout({
  title,
  description,
  imageUrl,
  technologies,
  githubUrl,
  figmaUrl,
  devpostUrl,
  liveUrl,
  challenges,
  learnings,
  children
}: ProjectLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="flex-1 w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {title}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {description}
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col space-y-4">
              <Image
                src={imageUrl}
                alt={title}
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {githubUrl && (
                  <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">View on GitHub</Button>
                  </Link>
                )}
                {figmaUrl && (
                  <Link href={figmaUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">View on Figma</Button>
                  </Link>
                )}
                {devpostUrl && (
                  <Link href={devpostUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">View on Devpost</Button>
                  </Link>
                )}
                {liveUrl && (
                  <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button>View Live Project</Button>
                  </Link>
                )}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Project Details</h2>
              {children}
              <h3 className="text-xl font-bold">Challenges</h3>
              <ul className="list-disc list-inside space-y-2">
                {challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
              <h3 className="text-xl font-bold">What I Learned</h3>
              <ul className="list-disc list-inside space-y-2">
                {learnings.map((learning, index) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

