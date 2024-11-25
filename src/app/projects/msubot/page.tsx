import ProjectLayout from '@/components/ProjectLayout'

export default function MSUBotProject() {
  return (
    <ProjectLayout
      title="MSUBot"
      description="A Discord bot for server management and music playback in VCs, enhanced for class management and student engagement"
      imageUrl="https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/337f9614-ec08-4276-aebf-43764f86bd00/public?height=1366&width=768"
      technologies={["TypeScript", "Discord.js", "Node.js", "SQLite"]}
      githubUrl="https://github.com/Skeegan123/MSUBot"
      challenges={[
        "Implementing complex Discord API features",
        "Designing a system for class management within Discord",
        "Ensuring reliability and uptime for continuous operation"
      ]}
      learnings={[
        "Gained expertise in building Discord bots and working with Discord's API",
        "Improved skills in designing user-friendly command interfaces",
        "Learned about educational technology integration in online platforms"
      ]}
    >
      <p>
        MSUBot is a custom Discord bot designed to enhance class management and student engagement for Montana State University. 
        The bot provides a range of features including server management, music playback in voice channels, and specialized tools for academic use.
      </p>
      <p>
        As the lead developer, I built MSUBot using TypeScript and Discord.js, with a focus on creating a robust and extensible architecture. 
        The bot uses SQLite for data persistence, allowing it to maintain state and user data across restarts.
      </p>
      <p>
        Key features of MSUBot include automated role assignment for classes, a system for scheduling and announcing assignments and due dates, 
        and integration with academic resources. The music playback feature was included to create a more engaging environment for study sessions 
        and social events.
      </p>
      <p>
        The project is currently in the testing phase, with positive initial results. There&apos;s potential for a research grant to expand its use 
        among faculty, showcasing its value in enhancing online learning environments.
      </p>
    </ProjectLayout>
  )
}

