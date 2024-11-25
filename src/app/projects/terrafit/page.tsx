import ProjectLayout from '@/components/ProjectLayout'

export default function TerraFitProject() {
  return (
    <ProjectLayout
      title="TerraFit"
      description="A ChatGPT-powered workout app for personalized fitness routines"
      imageUrl="https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/a4727e3a-7ac8-4e24-9bdb-773f91677d00/public?height=1366&width=768"
      technologies={["React", "Node.js", "Express", "ChatGPT API", "PostgreSQL"]}
      githubUrl="https://github.com/Skeegan123/TerraFit"
      figmaUrl="https://www.figma.com/design/8W31cXEK81BMbkeAJuDHcf/HackHarvard'23?node-id=10-27&t=6eGzCw6jzZGVOje7-1"
      devpostUrl="https://devpost.com/software/terrafit-2rvd1m"
      liveUrl="https://www.figma.com/proto/8W31cXEK81BMbkeAJuDHcf/HackHarvard'23?page-id=0%3A1&type=design&node-id=10-27&viewport=139%2C355%2C0.17&t=EaaqVxzAGoOXQj0J-1&scaling=scale-down&starting-point-node-id=10%3A27&show-proto-sidebar=1"
      challenges={[
        "Integrating ChatGPT API for consistent and relevant workout generation",
        "Designing an intuitive user interface for workout planning and tracking",
        "Implementing a robust backend to handle user data and AI-generated content"
      ]}
      learnings={[
        "Gained experience in working with AI and natural language processing APIs",
        "Improved skills in full-stack development and database management",
        "Learned about fitness programming and workout structuring"
      ]}
    >
      <p>
        TerraFit is an innovative workout application that leverages the power of ChatGPT to create personalized fitness routines for users. 
        The app takes into account individual fitness levels, goals, and preferences to generate tailored workout plans.
      </p>
      <p>
        As the lead developer, I was responsible for both the front-end and back-end development of TerraFit. The front-end was built using React, 
        providing a responsive and interactive user interface. The back-end, powered by Node.js and Express, handles user authentication, 
        data management, and integration with the ChatGPT API.
      </p>
      <p>
        One of the main challenges was ensuring consistent and relevant workout generation from the ChatGPT API. This required careful prompt 
        engineering and result parsing to maintain the quality and safety of the generated workouts. The app also includes features for tracking 
        progress, setting goals, and adjusting workout intensity based on user feedback.
      </p>
      <p>
        TerraFit was developed as part of the HackHarvard hackathon, where it received recognition for its innovative use of AI in the fitness domain.
      </p>
    </ProjectLayout>
  )
}

