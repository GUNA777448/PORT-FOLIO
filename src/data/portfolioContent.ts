import { PortfolioContent } from "../types/portfolio";

export const portfolioContent: PortfolioContent = {
  heroTag: "Technical Lead @ HotaCreatives",
  name: "Gurunada Rao Reddy",
  subtitle: "Overall Product Builder | AI & Full-Stack Specialist",
  summary:
    "Scaling ideas into real-world products with AI and modern full-stack architectures.",
  stats: [
    { value: "1000+", label: "Users Impacted" },
    { value: "200+", label: "LeetCode Problems" },
    { value: "99%", label: "Uptime Record" },
    { value: "5+", label: "Shipped Projects" },
  ],
  domains: [
    {
      id: "fullstack",
      title: "Full Stack Web Dev",
      summary: "End-to-end web apps from frontend to backend APIs.",
      details: [
        "SPAs and Server-Side Rendering",
        "RESTful and GraphQL APIs",
        "Database modeling",
        "Auth with JWT and OAuth",
      ],
      tags: ["React", "Next.js", "Node.js", "MongoDB"],
      iconClass: "fas fa-layer-group",
    },
    {
      id: "appdev",
      title: "App Development",
      summary: "Cross-platform mobile apps with native feel.",
      details: [
        "Flutter cross-platform builds",
        "State management",
        "Push notifications and deep links",
        "App Store deployment",
      ],
      tags: ["Flutter", "Dart", "Firebase", "REST APIs"],
      iconClass: "fas fa-mobile-screen-button",
    },
    {
      id: "aiautomation",
      title: "AI Automations",
      summary: "Intelligent workflows that automate and connect systems.",
      details: [
        "Workflow automation in n8n",
        "LLM-powered chatbots",
        "API orchestration and webhooks",
        "Multi-step agentic workflows",
      ],
      tags: ["n8n", "LangChain", "OpenAI API", "Webhooks"],
      iconClass: "fas fa-robot",
    },
    {
      id: "genai",
      title: "GenAI",
      summary:
        "Generative AI systems from orchestration to retrieval pipelines.",
      details: [
        "LangChain pipelines",
        "LangGraph agent flows",
        "RAG systems",
        "GraphRAG workflows",
      ],
      tags: ["LangChain", "LangGraph", "RAG", "GraphRAG"],
      iconClass: "fas fa-brain",
    },
  ],
  timeline: [
    {
      date: "2026 — Present",
      title: "Technical Lead",
      organization: "HotaCreatives",
      points: [
        "Owned product delivery end-to-end.",
        "Standardized architecture and code quality.",
        "Mentored engineers for faster execution.",
      ],
      metrics: [
        { value: "12+", label: "Sprints Delivered" },
        { value: "6+", label: "Projects Shipped" },
        { value: "4", label: "Developers Mentored" },
      ],
      tags: ["HOTACREATIVES", "Architecture", "Mentorship", "Delivery"],
      iconClass: "fas fa-briefcase",
    },
    {
      date: "Sep 2025 — 2026",
      title: "Web Dev Lead",
      organization: "GDG VITB",
      points: [
        "Led community platform development.",
        "Shipped mobile-first event workflows.",
        "Coordinated contributors and release timelines.",
      ],
      metrics: [
        { value: "1000+", label: "Members Served" },
        { value: "95%", label: "Mobile Compatibility" },
        { value: "10+", label: "Feature Releases" },
      ],
      tags: ["GDGVITB", "Next.js", "NeonDB", "Leadership"],
      iconClass: "fas fa-code",
    },
  ],
  academics: [
    {
      date: "2024 — 2028",
      title: "B.Tech, Computer Science",
      institution: "Vishnu Institute of Technology, Bhimavaram",
      score: "8.87",
      scoreLabel: "CGPA",
    },
    {
      date: "2022 — 2024",
      title: "Intermediate (MPC)",
      institution: "Bhashyam Junior College, Guntur",
      score: "96%",
      scoreLabel: "Score",
    },
  ],
  projects: [
    {
      title: "SUVIDHA",
      tech: "Microservices | Node.js | React | Docker | Redis",
      description:
        "A next-gen kiosk platform built on microservices architecture and designed for on-ground service delivery.",
      iconClass: "fas fa-store",
      status: "Under Development",
      links: [
        { label: "Code", href: "#" },
        { label: "Coming Soon", href: "#", disabled: true },
      ],
    },
    {
      title: "Delicial",
      tech: "Restaurant Web App | React | Responsive UI | Modern Ordering Flow",
      description:
        "A restaurant web application for exploring the menu, showcasing signature dishes, and creating a polished online dining experience.",
      iconClass: "fas fa-utensils",
      status: "Featured",
      links: [{ label: "View Details", href: "#" }],
    },
    {
      title: "GDGVITB",
      tech: "Next.js | NeonDB | Responsive UI | Community Platform",
      description:
        "Official GDG On-Campus VIT Bhimavaram platform for events and community operations.",
      iconClass: "fas fa-globe",
      links: [
        { label: "Visit", href: "https://gdgvitb.in/", external: true },
        { label: "Demo", href: "https://gdgvitb.in/", external: true },
      ],
    },
    {
      title: "HOTACREATIVES",
      tech: "React | Node.js | Modern UI | Product Delivery",
      description:
        "Production-focused web initiatives delivered under technical leadership.",
      iconClass: "fas fa-briefcase",
      links: [
        { label: "Code", href: "https://hotacreatives.in/", external: true },
        { label: "Demo", href: "https://hotacreatives.in/", external: true },
      ],
    },
  ],
  expertise: [
    {
      title: "Engineering",
      iconClass: "fas fa-code",
      points: [
        "Full-stack architecture",
        "Reusable UI systems",
        "API-first integration",
      ],
    },
    {
      title: "Applied AI",
      iconClass: "fas fa-brain",
      points: ["LangChain", "LangGraph", "RAG and GraphRAG"],
    },
    {
      title: "Cloud and Data",
      iconClass: "fas fa-cloud",
      points: ["NeonDB", "MongoDB", "Supabase"],
    },
    {
      title: "Leadership",
      iconClass: "fas fa-users-gear",
      points: ["Planning", "Mentoring", "Cross-team collaboration"],
    },
  ],
  skillCategories: {
    Languages: ["Python", "Java", "Dart", "C", "JavaScript", "SQL"],
    Frameworks: [
      "React.js",
      "Node.js",
      "Express.js",
      "Flask",
      "Next.js",
      "Flutter",
    ],
    Tools: ["Git", "GitHub", "VSCode", "Postman", "n8n", "Android Studio"],
    Databases: ["Firebase", "Supabase", "MongoDB", "Pinecone", "MySQL"],
  },
  quote: "The best way to predict the future is to build it.",
  quoteAuthor: "Alan Kay",
  contactTitle: "Let's work together.",
  contactText:
    "Got a project in mind or just want to chat about tech? I am always open to interesting collaborations.",
  contactItems: [
    { iconClass: "fas fa-envelope", value: "gurunadarao.reddy@gmail.com" },
    { iconClass: "fas fa-phone", value: "+91-6300614592" },
    { iconClass: "fas fa-location-dot", value: "Andhra Pradesh, India" },
  ],
  socialLinks: [
    { iconClass: "fab fa-github", href: "https://github.com/GUNA777448" },
    { iconClass: "fab fa-linkedin", href: "https://www.linkedin.com/in/gurunada-rao-reddy-27889931a" },
   
  ],
};
