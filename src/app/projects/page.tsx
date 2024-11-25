import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Local Event App",
    description: "A local event app to find events in your area. My project for my UI/UX course.",
    image: "https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/eb68eb6e-6975-4c61-c25d-4dcc81dadf00/public?height=1366&width=768",
    link: "/projects/localeventapp"
  },
  {
    title: "PackPoint",
    description: "A location sharing app for college students",
    image: "https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/3c7e07c4-d914-4798-709e-ab57fe1c1e00/public?height=1366&width=768",
    link: "/projects/packpoint"
  },
  {
    title: "MultiStreamers",
    description: "Watch multiple streamers across platforms",
    image: "https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/c650cb84-359f-41d8-08e3-28c3a50fe900/public?height=1366&width=768",
    link: "/projects/multistreamers"
  },
  {
    title: "MSUBot",
    description: "Discord bot for class management",
    image: "https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/337f9614-ec08-4276-aebf-43764f86bd00/public?height=1366&width=768",
    link: "/projects/msubot"
  },
  {
    title: "TerraFit",
    description: "AI-powered workout app",
    image: "https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/a4727e3a-7ac8-4e24-9bdb-773f91677d00/public?height=1366&width=768",
    link: "/projects/terrafit"
  },
  {
    title: "Memlane",
    description: "Local social media for sharing memories",
    image: "https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/cd3e5d34-b092-4a42-0600-2d6b602fec00/public?height=1366&width=768",
    link: "/projects/memlane"
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="flex-1 py-12 md:py-24 lg:py-32 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              My Projects
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Explore a collection of my recent projects, showcasing my skills in software development and problem-solving.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full h-64"
                  />
                  <CardTitle className="mt-4">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={project.link} className="w-full">
                    <Button className="w-full">View Project</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

