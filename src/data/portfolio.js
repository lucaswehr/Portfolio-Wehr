export const portfolioData = {
  name: "Lucas Wehr",
  title: "Software Engineering Student & Web Developer",
  email: "lucas.wehr@wsu.edu",
  phone: "509-601-0556",
  location: "Pullman, WA",
  bio: "Software Engineering student at Washington State University with a 3.9 GPA. I have experience building and maintaining production full-stack applications as well as proficiency in C++ and Python through my published projects. Seeking Summer 2026 Software Engineering Internship so that I can apply these skills meaningfully.",
  
  about: `I'm a software engineering student with hands-on experience in full-stack development. I've shipped features used by hundreds of users, worked in Agile team environments, and enjoy designing modular systems that scale. Currently interning as a Web Developer maintaining a production React application used by 120+ freshman students.`,
  
  skills: [
    { category: "Languages", items: ["JavaScript", "Python", "C/C++", "C#", "SQL"] },
    { category: "Frontend", items: ["React.js", "HTML/CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Flask", "Python", "REST APIs"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "SQLite"] },
    { category: "Tools & Platforms", items: ["Git", "VS Code", "Linux", "Heroku", "AWS", "Agile/Scrum"] },
    { category: "Other", items: ["API Integration", "Data Structures", "Algorithms", "Game Development (SFML, Unity)"] },
  ],
  
  projects: [
    {
      id: 1,
      title: "Interactive Event Map",
      description: "Built a React-based map interface integrating the Ticketmaster API to search and filter live events by city. Implemented MySQL database for caching event data, improving lookup performance by 40%. Added community event creation features, increasing visibility of niche local events by 45%. Currently deployed on Heroku.",
      technologies: ["React", "JavaScript", "MySQL", "Ticketmaster API", "Heroku", "Python"],
      link: "https://wehr-ticketmaster-event-map-6ab21ae33b7f.herokuapp.com/",
      github: "#",
      image: "🗺️"
    },
    {
      id: 2,
      title: "AI Resume Critique Web App",
      description: "Developed a web application that analyzes resumes for readability, clarity, and grammar using the Cohere AI API. Built backend with Python & Flask, integrated API calls, and created a user-friendly interface with live scoring and detailed AI suggestions for resume improvement.",
      technologies: ["Python", "Flask", "Cohere AI API", "HTML/CSS", "Jinja2"],
      link: "#",
      github: "https://github.com/lucaswehr/AI-Resume-Critique-Web-App",
      image: "🤖"
    },
    {
      id: 3,
      title: "The Last Paladin",
      description: "Built a modular game architecture using SFML with 1000+ lines of C++. Features 12+ animated sprites, tile-based terrain, and physics-driven movement. Implemented enemy AI behavior using decision logic for dynamic interactions. Independently developed over 5 months and published on itch.io with 100+ downloads.",
      technologies: ["C++", "SFML", "Game Design", "Object-Oriented Programming"],
      link: "https://lucaswehr.itch.io/the-last-paladin",
      github: "https://github.com/lucaswehr/The-Last-Paladin",
      image: "/Portfolio-Wehr/images/Idle.png",
      isImage: true
    },
    {
      id: 4,
      title: "Home Editor",
      description: "Created a home editor which is a Unity floor plan prototyping tool I built that lets users place walls and automatically detect rooms from the layout. The core system represents wall endpoints as a graph and walks that graph using a clockwise traversal algorithm to find closed loops, which are then reconstructed into polygonal room shapes. ",
      technologies: ["C#", "Unity", "Object-Oriented Programming"],
      link: "https://www.youtube.com/watch?v=cFstL_1BB7s",
      github: "https://github.com/lucaswehr/Home-Editor",
      image: "🏠",
      
    },
  ],
  
  experience: [
    {
      id: 1,
      position: "Web Developer Intern",
      company: "Small Development Team (Remote/Pullman, WA)",
      duration: "Jan 2026 - May 2026",
      description: "Maintain and extend a production React-based application acquired by the university. Collaborate with engineering team using Agile development cycle. Implement features and bug fixes for an AI-powered scheduling chatbot. Currently tested by 120 freshman with planned rollout to 400–500+ users in full production.",
    },
  ],
  
  education: [
    {
      id: 1,
      school: "Washington State University",
      degree: "Bachelor of Software Engineering",
      year: "In Progress",
      details: "GPA: 3.9",
    },
  ],
  
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/lucaswehr", isGithub: true },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/lucas-wehr/", isGithub: false },
  ],
};
