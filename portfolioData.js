/**
 * PORTFOLIO CONFIGURATION DATA
 * Replace the bracketed placeholders with your personal information!
 */

export const personalInfo = {
  name: "Himanshi Bhagnani",
  tagline: "B.Tech Student | AI & Technology Enthusiast",
  role: "B.Tech Student",
  college: "JECRC University, Jaipur",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science and Engineering",
  graduationYear: "2030",
  academicYears: "2026 – 2030",
  location: "Jaipur, Rajasthan, India",
  email: "himanshi.26bcon2086@jecrcu.edu.in",
  linkedin: "https://www.linkedin.com/in/himanshi-bhagnani",
  github: "https://github.com/HimanshiBhagnani",
  
  // Hero intro
  heroIntro:
    "Passionate B.Tech undergraduate crafting modern web experiences, exploring the frontiers of Artificial Intelligence, and designing digital systems that amplify productivity.",
  
  // About section bio
  aboutBio: [
    "I am a B.Tech student interested in technology, artificial intelligence, web development, and digital productivity. I am actively learning modern technologies and building practical, impactful projects that bridge code and creative problem-solving.",
    "Driven by curiosity, I explore the intersection of machine learning algorithms and interactive web development. When I'm not coding, you'll find me optimizing developer workflows, experimenting with prompt engineering, or collaborating on innovative ideas."
  ],

  // Key stats for quick hero display
  highlights: [
    { label: "Degree Program", value: "B.Tech Undergrad" },
    { label: "Core Skills", value: "8+ Modern Techs" },
    { label: "Projects Completed", value: "3+ Practical Apps" },
    { label: "Status", value: "Open to Internships" }
  ]
};

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  college: "JECRC University, Jaipur",
  duration: "2026 – 2030",
  location: "Jaipur, Rajasthan, India",
  status: "Undergraduate (Current)",
  description:
    "Pursuing a rigorous curriculum focusing on foundational computer science concepts, software engineering methodologies, artificial intelligence systems, and practical application development.",
  relevantAreas: [
    {
      title: "Data Structures & Algorithms",
      desc: "Problem solving, arrays, trees, dynamic programming, and complexity analysis."
    },
    {
      title: "Artificial Intelligence & ML",
      desc: "Machine learning fundamentals, neural architectures, and intelligent systems."
    },
    {
      title: "Web Engineering",
      desc: "Full-stack development, modern frontend architectures, and RESTful APIs."
    },
    {
      title: "Object-Oriented Programming",
      desc: "Software architecture principles, modular design, clean coding in Python & JS."
    },
    {
      title: "Database Management Systems",
      desc: "Relational database modeling, SQL querying, schema optimization, and ACID."
    },
    {
      title: "Digital Systems & Productivity",
      desc: "Modern version control (Git), collaborative agile development, and developer tooling."
    }
  ]
};

export const skills = [
  {
    name: "HTML",
    category: "Web Development",
    level: "Advanced",
    percentage: 92,
    description: "Semantic HTML5, Accessibility (a11y), SEO optimization, web standards.",
    icon: "Code",
    badge: "Frontend"
  },
  {
    name: "CSS",
    category: "Web Development",
    level: "Advanced",
    percentage: 90,
    description: "Tailwind CSS, Flexbox, Grid layouts, responsive UI, modern animations & transitions.",
    icon: "Palette",
    badge: "Styling"
  },
  {
    name: "JavaScript",
    category: "Languages",
    level: "Proficient",
    percentage: 86,
    description: "ES6+ syntax, asynchronous programming, DOM manipulation, promises, fetch API.",
    icon: "FileCode",
    badge: "Core"
  },
  {
    name: "Python",
    category: "Languages",
    level: "Proficient",
    percentage: 88,
    description: "Data handling, scripting, object-oriented programming, automation & backend logic.",
    icon: "Terminal",
    badge: "Core"
  },
  {
    name: "Artificial Intelligence",
    category: "AI & Data",
    level: "Enthusiast / Intermediate",
    percentage: 82,
    description: "Machine learning workflows, model evaluation, neural networks, predictive algorithms.",
    icon: "Brain",
    badge: "AI/ML"
  },
  {
    name: "Generative AI",
    category: "AI & Data",
    level: "Proficient",
    percentage: 85,
    description: "Prompt engineering, LLM integration, agentic workflows, API embedding architectures.",
    icon: "Sparkles",
    badge: "Next-Gen"
  },
  {
    name: "Web Development",
    category: "Web Development",
    level: "Proficient",
    percentage: 88,
    description: "React component architecture, Vite tooling, state management, client routing & SPA.",
    icon: "Globe",
    badge: "Full-Stack"
  },
  {
    name: "Digital Productivity",
    category: "Productivity & Tools",
    level: "Expert",
    percentage: 94,
    description: "Git & GitHub version control, Notion knowledge systems, task automation, agile workflows.",
    icon: "CheckCircle",
    badge: "Workflow"
  }
];

export const projects = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    badge: "Featured",
    shortDescription:
      "A high-performance personal portfolio website built with React, Vite, and Tailwind CSS. Features glassmorphism, responsive navigation, and smooth theme switching.",
    fullDescription:
      "Designed and developed a personal developer portfolio from scratch to showcase engineering projects, educational milestones, and technical capabilities. Built with modern web standards, mobile-first design, dark/light mode toggle, and optimized for ultra-fast loading on Vercel CDN.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "Responsive Design", "Vercel"],
    metrics: "100/100 Lighthouse Performance • Fast 0.5s Load Time",
    demoUrl: "#",
    githubUrl: "https://github.com/HimanshiBhagnani/personal-portfolio",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    features: [
      "Mobile-friendly navigation drawer with smooth transitions",
      "Interactive dark & light theme modes with local storage persistence",
      "Modular component architecture for effortless content updates",
      "Interactive contact form with one-click email copying"
    ]
  },
  {
    id: "ai-website",
    title: "AI Website Project",
    badge: "AI Powered",
    shortDescription:
      "An intelligent web platform integrating modern Generative AI capabilities for automated content summarization, smart insights, and conversational assistance.",
    fullDescription:
      "Developed an AI-enhanced web application connecting modern Large Language Model APIs with a reactive frontend interface. Allows students and creators to summarize dense technical documents, extract key action items, and brainstorm project outlines interactively.",
    technologies: ["Artificial Intelligence", "Generative AI", "Python", "JavaScript", "REST APIs", "Tailwind CSS"],
    metrics: "Sub-second AI streaming • Clean responsive card interface",
    demoUrl: "#",
    githubUrl: "https://github.com/HimanshiBhagnani/ai-website-project",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    features: [
      "Streamed real-time AI responses with markdown formatting support",
      "Custom prompt engineering templates for academic research & coding assistance",
      "Local history cache with instant search and export capabilities",
      "Adaptive dark-mode UI with sleek glassmorphism styling"
    ]
  },
  {
    id: "student-productivity",
    title: "Student Productivity Project",
    badge: "Utility",
    shortDescription:
      "A focused digital workspace designed for college students to track assignments, manage deadlines, run Pomodoro sessions, and organize study notes.",
    fullDescription:
      "Built a unified productivity web app addressing common student hurdles: fragmented task lists and study procrastination. Integrates an interactive assignment matrix, customizable study timers, and quick markdown note taking with instant browser storage persistence.",
    technologies: ["Web Development", "Digital Productivity", "React", "JavaScript", "Tailwind CSS", "Local Storage"],
    metrics: "Over 300+ study hours tracked • Zero external backend dependency",
    demoUrl: "#",
    githubUrl: "https://github.com/HimanshiBhagnani/student-productivity-project",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    features: [
      "Visual assignment tracker with priority flags and countdown indicators",
      "Integrated Pomodoro focus timer with auditory cue options",
      "Instant offline persistence using browser localStorage",
      "Keyboard shortcuts for rapid task creation and status changes"
    ]
  }
];

export const achievements = [
  {
    id: 1,
    title: "Hackathon Participant & Innovator",
    category: "Hackathons",
    organization: "National Student Tech Summit",
    year: "2024",
    badge: "Hackathons",
    description:
      "Collaborated in a 36-hour hackathon to build a web-based student assistant prototype incorporating real-time collaboration and modern UI design.",
    icon: "Trophy"
  },
  {
    id: 2,
    title: "Generative AI & Prompt Engineering",
    category: "Certifications",
    organization: "Online Learning Platform",
    year: "2024",
    badge: "Certifications",
    description:
      "Completed comprehensive training on Large Language Models, prompt strategies, API integration, and ethical AI development.",
    icon: "Award"
  },
  {
    id: 3,
    title: "Modern Web Development Bootcamp",
    category: "Courses",
    organization: "Full-Stack Academy",
    year: "2023",
    badge: "Courses",
    description:
      "Mastered responsive UI design, ES6+ JavaScript, component-based architectures, and deployment workflows with modern tooling.",
    icon: "BookOpen"
  },
  {
    id: 4,
    title: "Academic Excellence Recognition",
    category: "Awards",
    organization: "College Department of Engineering",
    year: "2023 - 2024",
    badge: "Awards",
    description:
      "Recognized for outstanding academic performance and active participation in university technical symposiums.",
    icon: "Star"
  },
  {
    id: 5,
    title: "Digital Productivity & Systems Optimization",
    category: "Other achievements",
    organization: "Self-Directed Mastery & Community",
    year: "2024",
    badge: "Other achievements",
    description:
      "Engineered automated personal knowledge management systems and shared workflow templates benefiting 200+ fellow students.",
    icon: "Zap"
  }
];
