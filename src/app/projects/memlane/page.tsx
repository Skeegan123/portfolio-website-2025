import ProjectLayout from '@/components/ProjectLayout'

export default function MemlaneProject() {
  return (
    <ProjectLayout
      title="Memlane"
      description="A local social media to share your precious memories of a location with those around you"
      imageUrl="https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/cd3e5d34-b092-4a42-0600-2d6b602fec00/public?height=1366&width=768"
      technologies={["TypeScript", "Expo", "React Native", "PostgreSQL", "Vercel"]}
      githubUrl="https://github.com/Skeegan123/treehacks"
      figmaUrl="https://www.figma.com/design/fvgIfeFhKtWNMEsDhGkZSM/treehacks?node-id=18-576&t=AoX8FWzJmNhTfdu3-1"
      devpostUrl="https://devpost.com/software/memlane"
      liveUrl="https://www.figma.com/proto/fvgIfeFhKtWNMEsDhGkZSM/treehacks?node-id=18-576&starting-point-node-id=18%3A576&t=WPiIZn6MyaWN153y-1"
      challenges={[
        "Implementing location-based content filtering and sharing",
        "Ensuring user privacy while allowing for local content discovery",
        "Optimizing app performance for handling large amounts of media content"
      ]}
      learnings={[
        "Gained experience with Expo and React Native for cross-platform mobile development",
        "Improved skills in geolocation services and location-based app features",
        "Learned about scalable backend architecture for social media applications"
      ]}
    >
      <p>
        Memlane is a unique social media application that allows users to share memories tied to specific locations. 
        The app creates a digital scrapbook of experiences, viewable by others in the same geographical area, fostering a sense of 
        local community and shared history.
      </p>
      <p>
        As a backend software engineer on this project, I was responsible for designing and implementing the server-side logic, 
        database schema, and API endpoints. The app was built using TypeScript and Expo for the frontend, with a PostgreSQL database 
        hosted on Vercel for the backend.
      </p>
      <p>
        Key
features of Memlane include geolocation-based content filtering, media upload and storage, user authentication, and 
        privacy controls. The app also implements a recommendation system to suggest nearby memories and locations of interest.
      </p>
      <p>
        Memlane was developed as part of the TreeHacks hackathon, where our team successfully created a fully functioning prototype 
        from design to implementation in a short timeframe. This project showcased our ability to work efficiently under pressure and 
        deliver a complex application with multiple integrated technologies.
      </p>
    </ProjectLayout>
  )
}

