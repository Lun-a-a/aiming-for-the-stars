export const projects = [
    {
      titre: "Cloud2Gether",
      description: "Shared listening experience for SoundCloud platform users",
      longDescription: "Cloud2Gether allows multiple users to listen to and synchronize SoundCloud tracks in real time. It implements authentication with OAuth 2.1, sockets for synchronization, and a responsive UI.",
      tech: ["React", "Node.js"],
      image: "/assets/images/cloud2gether_main.png",
      // 3 media items (objects with src, caption, description)
      media: [
        {
          src: "/assets/images/cloud2gether_media1.png",
          caption: "Main page",
          description: "Main view showing the different interface elements."
        },
        {
          src: "/assets/images/cloud2gether_media2.png",
          caption: "Search within user playlists",
          description: "Allows quick and simple searching of tracks already present in the user's playlists."
        },
        {
          src: "/assets/images/cloud2gether_media3.png",
          caption: "Advanced search functionality",
          description: "Provides advanced search capabilities using the SoundCloud API."
        }
      ],
      githubUrl: "https://github.com/Vapoor/cloud2gether",
      liveUrl: "",
      professional: false
    },
    {
      titre: "Exuvie",
      description: "Immersive sound and visual VR experience",
      longDescription: "Exuvie is an immersive virtual reality experience that explores the relationship between sound and space. It uses Unreal Engine to create an interactive environment where users can manipulate their own Exuvie. This project is part of an upcoming exhibition for an artist.",
      tech: ["C++", "Unreal Engine", "Blueprints"],
      image: "/assets/images/exuvie_main.png",
      modelUrl: "/assets/exuvie.neutral.7kpoints.obj",
      textures: {
        baseColor: '/assets/textures/exuvie.basecolor.png',
        normal: '/assets/textures/exuvie.normal.png',
        roughness: '/assets/textures/exuvie.roughness.png'
      },
      media: [
        {
          src: "https://youtu.be/OCYTpZjAT6M",
          caption: "Work-in-progress demonstration showcasing Unreal Engine features, mesh optimization, and performance tuning techniques learned during development."
        }
      ],
      githubUrl: "",
      liveUrl: "",
      professional: true
    },
    {
      titre: "Voltige 2",
      description: "Software quality improvements for a research project",
      longDescription: "Focused on improving code robustness and maintainability through refactoring, unit testing, continuous integration, and performance optimization for the engine component.",
      tech: ["C++", "C", "Python"],
      image: "/assets/images/voltige2_media1.png",
      media: [
        {
          src: "/assets/images/voltige2_media1.png",
          caption: "Mathematical research visualization",
          description: "A visualizer for mathematical objects in N dimensions, with options to display various computations such as distance maps."
        },
        {
          src: "/assets/images/voltige2_media2.png",
          caption: "Unit testing integration",
          description: "Integration of unit tests to ensure the stability of critical features, enabling detection of incorrect calculations following code changes."
        }
      ],
      githubUrl: "",
      liveUrl: "",
      professional: true
    }
  ]