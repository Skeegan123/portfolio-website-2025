import ProjectLayout from '@/components/ProjectLayout'

export default function MultiStreamersProject() {
  return (
    <ProjectLayout
      title="MultiStreamers"
      description="A site that allows people to watch all of their favorite streamers at the same time, on both Twitch and Youtube"
      imageUrl="https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/c650cb84-359f-41d8-08e3-28c3a50fe900/public?height=1366&width=768"
      technologies={["React", "Node.js", "Twitch API", "YouTube API"]}
      githubUrl="https://github.com/Skeegan123/multistream"
      liveUrl="https://multistreamers.com"
      challenges={[
        "Integrating multiple streaming platform APIs",
        "Managing simultaneous video streams efficiently",
        "Creating a responsive layout for multiple video players"
      ]}
      learnings={[
        "Deepened understanding of working with third-party APIs",
        "Improved skills in front-end performance optimization",
        "Gained experience in building scalable web applications"
      ]}
    >
      <p>
        MultiStreamers is a web application that enables users to watch multiple live streams from different platforms simultaneously. 
        The site supports both Twitch and YouTube streams, allowing users to create a personalized viewing experience with their favorite content creators.
      </p>
      <p>
        As the sole developer of this project, I was responsible for all aspects of the application, from the initial concept to the final deployment. 
        The front-end was built using React for a dynamic and responsive user interface, while the back-end utilizes Node.js to handle API requests 
        and manage user sessions.
      </p>
      <p>
        One of the key achievements of this project was reaching a peak usage of 1100 users in 30 minutes, demonstrating the scalability and 
        popularity of the application. This experience provided valuable insights into managing high-traffic web applications and optimizing 
        for concurrent users.
      </p>
    </ProjectLayout>
  )
}

