import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="bg-white py-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Keegan Gaffney</h1>
              <p className="text-gray-600 mb-8">Computer Science Student at Montana State University.</p>
              <div className="space-x-4">
                <Link href="/projects" aria-label="View my portfolio projects">
                  <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90">
                    View Projects
                  </button>
                </Link>
                <Link href="/resume" aria-label="View my professional resume">
                  <button className="text-primary border border-primary px-6 py-2 rounded-full hover:bg-primary/10">
                    Resume
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-square relative overflow-hidden rounded-3xl">
                <Image 
                  src="https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/7269a7c2-d113-4c67-334f-3505ce49d300/public?height=1366&width=768" 
                  alt="Hero Image" 
                  fill
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">I&apos;m a senior at Montana State University majoring in Computer Science, set to graduate in December 2024. Driven by a passion for technology, I&apos;ve supplemented my academic journey with exciting projects and real-world experience. From being a finalist at Dubhacks 22&apos; to interning at Amazon and Land ID, I&apos;m constantly seeking new challenges and opportunities to grow.</p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center" id="projects">My Projects</h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">Here are some of the projects I&apos;ve worked on recently.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Local Event App",
                image: "https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/eb68eb6e-6975-4c61-c25d-4dcc81dadf00/public?height=1366&width=768",
                description: "A local event app to find events in your area. My project for my UI/UX course.",
                link: "/projects/localeventapp"
              },
              {
                title: "PackPoint",
                image: "https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/3c7e07c4-d914-4798-709e-ab57fe1c1e00/public?height=1366&width=768",
                description: "A location sharing app for college students to share their favorite places around campus",
                link: "/projects/packpoint"
              },
              {
                title: "MultiStreamers",
                image: "https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/c650cb84-359f-41d8-08e3-28c3a50fe900/public?height=1366&width=768",
                description: "A site that allows people to watch all of their favorite streamers at the same time, on both Twitch and Youtube.",
                link: "/projects/multistreamers"
              },
              {
                title: "MSUBot",
                image: "https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/337f9614-ec08-4276-aebf-43764f86bd00/public?height=1366&width=768",
                description: "A Discord bot for server management and music playback in VCs, enhanced for class management and student engagement",
                link: "/projects/msubot"
              },
              {
                title: "TerraFit",
                image: "https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/a4727e3a-7ac8-4e24-9bdb-773f91677d00/public?height=1366&width=768",
                description: "A ChatGPT-powered workout app for personalized fitness routines",
                link: "/projects/terrafit"
              },
              {
                title: "Memlane",
                image: "https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/cd3e5d34-b092-4a42-0600-2d6b602fec00/public?height=1366&width=768",
                description: "A local social media to share your precious memories of a location with those around you",
                link: "/projects/memlane"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={project.image} alt={`Screenshot of ${project.title} project`} width={400} height={400} className="w-full h-4/6 object-cover" />
                <div className="p-4">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link 
                    href={project.link} 
                    className="text-blue-600 hover:underline"
                    aria-label={`Learn more about ${project.title} project`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

