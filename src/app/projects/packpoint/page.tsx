import ProjectLayout from '@/components/ProjectLayout'

export default function PackPointProject() {
  return (
    <ProjectLayout
      title="PackPoint"
      description="A location sharing app for college students to share their favorite places around campus"
      imageUrl="https://imagedelivery.net/yJ7bepQTW_ib5TtPRM2R9A/3c7e07c4-d914-4798-709e-ab57fe1c1e00/public?height=1366&width=768"
      technologies={["SwiftUI", "Firebase", "Mapbox", "PostGIS"]}
      githubUrl="https://github.com/Skeegan123/PackPoint"
      figmaUrl="https://www.figma.com/design/M5QEByrsZQMoFJVwc5Q2S9/PACKPOINT?node-id=1213-493&t=5jl9pFktTZUadnbO-1"
      devpostUrl="https://devpost.com/software/packpoint"
      liveUrl="https://www.figma.com/proto/M5QEByrsZQMoFJVwc5Q2S9/PACKPOINT?node-id=1213-493&t=5jl9pFktTZUadnbO-1"
      challenges={[
        "Implementing real-time location sharing",
        "Location based queries",
        "Optimizing app performance for large numbers of users"
      ]}
      learnings={[
        "Gained experience with mobile app development using SwiftUI",
        "Learned to work with location-based services and real-time databases",
        "Improved skills in user experience design for social applications"
      ]}
    >
      <p>
        PackPoint is a mobile application designed to help college students discover and share their favorite spots on and around campus. 
        The app allows users to pin locations, add descriptions, and share them with their friends or the wider college community.
      </p>
      <p>
        As the lead developer on this project, I was responsible for designing the app&apos;s architecture, implementing the core features, 
        and ensuring smooth integration with backend services. The app was built using SwiftUI for a native iOS experience, 
        Firebase for real-time data synchronization and user authentication, and Mapbox for location services.
      </p>
      <p> 
        PackPoint was a finalist at Dubhacks 22, where it received positive feedback for its innovative approach to campus community building 
        and its potential to enhance the college experience for students.
      </p>
    </ProjectLayout>
  )
}

