import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:space-x-8">
          <Image 
            src="https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/f5bb4a40-e6cb-4cb4-5db7-15a61085d300/public?height=1366&width=768" 
            alt="Picture of Keegan Gaffney" 
            width={400} 
            height={400} 
            className="rounded-lg mb-4 md:mb-0"
          />
          <div>
            <h1 className="text-3xl font-bold mb-4">Hey, I&apos;m Keegan.</h1>
            <p className="mb-4">
              I&apos;m a senior at Montana State University, majoring in Computer Science, set to graduate in December 2024. As an aspiring software engineer, I&apos;m driven by a passion for innovation and technology. My programming journey began with Python, and I&apos;ve since expanded my skills to include Java, TypeScript, Swift, HTML, CSS, C++, and Assembly.
            </p>
            <p className="mb-4">
              My professional experience includes a current software engineering internship at Land id, where I&apos;ve worked on both web development with React and Ruby, and iOS development with SwiftUI. I&apos;ve also completed an internship with Amazon on their Amazon Pay team, where I developed a new API now used by millions across Europe.
            </p>
            <p className="mb-4">
              I&apos;ve worked on several exciting projects, including PackPoint, a location-sharing app for college students that was a finalist at Dubhacks 22&apos;, and MultiStreamers, a website for watching multiple streamers across platforms that achieved a peak usage of 1100 users.
            </p>
            <p>
              Whether I&apos;m creating a custom Discord bot, developing AI-powered workout apps, or tackling the next big challenge, I&apos;m always eager to learn and grow. I see obstacles as opportunities to excel and I&apos;m constantly seeking new ways to innovate in the field of technology.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">My Skills</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {['Swift', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Git', 'Python', 'Java', 'C++', 'HTML', 'CSS', 'Assembly'].map((skill) => (
            <div key={skill} className="bg-gray-100 rounded-lg p-3 text-center">
              <p>{skill}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Experience Highlights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Software Engineering Intern at Land id (Sept 2023 - Current)</li>
          <li>Software Engineering Intern at Amazon Pay (May 2023 - Aug 2023)</li>
          <li>DUBHACKS 2022 Finalist (PackPoint)</li>
          <li>HackHarvard Participant (TerraFit)</li>
          <li>TreeHacks Participant (Memlane)</li>
        </ul>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          <Image src="https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/f7c0dedd-1171-44b2-2432-1c022fcb8100/public?height=1366&width=768" alt="Keegan Gaffney" width={300} height={300} className="rounded-lg" />
          <Image src="https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/7269a7c2-d113-4c67-334f-3505ce49d300/public?height=1366&width=768" alt="Keegan Gaffney" width={300} height={300} className="rounded-lg" />
          <Image src="https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/93a430b6-809e-4eb4-1285-e995398d2e00/public?height=1366&width=768" alt="Keegan Gaffney" width={300} height={300} className="rounded-lg" />
        </div>
      </main>
    </div>
  )
}

