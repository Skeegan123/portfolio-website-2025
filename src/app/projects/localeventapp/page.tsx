import ProjectLayout from '@/components/ProjectLayout'

export default function SortVisualizeProject() {
  return (
    <ProjectLayout
      title="Local Event App"
      description="An app to find events in your area."
      imageUrl="https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/eb68eb6e-6975-4c61-c25d-4dcc81dadf00/public?height=1366&width=768"
      technologies={["Figma"]}
      figmaUrl="https://www.figma.com/design/BgC2pj9TMcaBZ8FVkBVrSG/UI%2FUX-Project?node-id=0-1&t=HsyFOp67rqXDTs0X-1"
      liveUrl="https://www.figma.com/proto/BgC2pj9TMcaBZ8FVkBVrSG/UI%2FUX-Project?node-id=0-1&t=HsyFOp67rqXDTs0X-1"
      challenges={[
        "Creating a user-friendly interface",
        "Designing an intuitive navigation system",
        "Creating a prototype that is both functional and visually appealing"
      ]}
      learnings={[
        "Deepened understanding of user-centered design principles",
        "Enhanced skills in creating interactive prototypes",
        "Gained experience in conducting usability testing and iterating based on feedback"
      ]}
    >
      <p>
      The Local Event App is a mobile application designed to make finding and hosting events easier. It&apos;s an effort towards solving the pain points users face in their search for things to do, by providing seamless, user-friendly experiences that consolidate event discovery into one platform.
      </p>
      <p>
        As the sole creator of this idea, I immediately pictured an application that caters specifically to the needs of young adults by marketing an &quot;all-in-one&quot; solution. This app will have an intuitive interface for event exploration-anything from very large concerts down to the small, niche gatherings such as group meetups or pickup games. This allows users to search, follow, and get updates on events they are interested in and stay up-to-date in real-time.
      </p>
      <p>
        The idea leverages from the very concept of highlighting smaller, lesser-known events that get lost on bigger, more current websites. This will fill a market gap and provide value to users who seek to find these hidden gems in their area without having to look through numerous websites and apps.
      </p>
    </ProjectLayout>
  )
}

