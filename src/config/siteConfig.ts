// Site Configuration - Edit this file to customize your website content
export const siteConfig = {
  // Company Information
  company: {
    name: "Team HK",
    tagline: "HoverX",
    description: "Building exceptional digital experiences with modern technologies. From concept to deployment, we bring your vision to life.",
    email: "hoverxhk007@gmail.com",
    phone: "+91 62666 02150",
    whatsapp: "916266602150",
    responseTime: "2-4 hours"
  },

  // Logo Configuration
  logo: {
    // Put your logo.png file in /public/ folder and it will automatically be used
    // If no logo file exists, it will fall back to the text logo "HK"
    path: "/logo.png",
    fallbackText: "HK",
    alt: "Team HK Logo"
  },

  // Hero Section
  hero: {
    badge: "Available for new projects",
    title: "Hi, we're Team HK",
    subtitle: "We craft exceptional digital experiences with modern web technologies. From stunning landing pages to complex web applications, we bring your vision to life.",
    stats: [
      { number: "50+", label: "Projects Delivered" },
      { number: "30+", label: "Happy Clients" },
      { number: "2+", label: "Years Experience" },
      { number: "24/7", label: "Support" }
    ]
  },

  // About Section
  about: {
    badge: "About Team HK",
    title: "Hi, we're Team HK",
    description: "A passionate team of developers and designers dedicated to creating exceptional digital experiences. We specialize in modern web technologies and deliver solutions that drive real business results.",
    stats: [
      { number: "50+", label: "Projects Completed" },
      { number: "30+", label: "Happy Clients" },
      { number: "2+", label: "Years Experience" },
      { number: "24/7", label: "Support Available" }
    ],
    skills: [
      { skill: "Frontend Development", level: 95 },
      { skill: "Backend Development", level: 90 },
      { skill: "UI/UX Design", level: 85 },
      { skill: "Database Design", level: 88 }
    ],
    highlights: [
      "Modern Web Technologies",
      "Responsive Design Focus", 
      "Performance Optimization",
      "24/7 Support & Maintenance"
    ]
  },

  // Portfolio Projects (Real Projects - Edit these with your actual projects)
  portfolio: {
    realProjects: [
      {
        id: 1,
        title: "Bold Gym",
        description: "Modern fitness center website with membership management and class booking system.",
        category: "business",
        technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
        liveUrl: "https://bold-gym.vercel.app/",
        image: "/projects/bold-gym.png", // Add your project screenshots to /public/projects/
        featured: true
      },
      {
        id: 2,
        title: "CafeLuxe", 
        description: "Elegant restaurant website with online menu, reservations, and ordering system.",
        category: "business",
        technologies: ["Next.js", "Tailwind CSS", "Supabase", "Stripe"],
        liveUrl: "https://cafeluxe.vercel.app/",
        image: "/projects/cafeluxe.png",
        featured: true
      },
      {
        id: 3,
        title: "Craft Store",
        description: "Full-featured e-commerce platform with product catalog, cart, and payment processing.",
        category: "ecommerce", 
        technologies: ["React", "Redux", "Node.js", "PostgreSQL", "Stripe"],
        liveUrl: "https://craft-store-e-commerce-website.vercel.app/",
        image: "/projects/craft-store.png",
        featured: true
      }
    ],
    // Placeholder projects for future work
    placeholderProjects: [
      {
        id: 4,
        title: "Future Project 1",
        description: "Upcoming SaaS dashboard with advanced analytics and team collaboration features.",
        category: "webapp",
        technologies: ["React", "TypeScript", "Supabase", "Chart.js"],
        liveUrl: "#",
        image: "/projects/placeholder-1.png"
      },
      {
        id: 5,
        title: "Future Project 2", 
        description: "AI-powered content management system with automated workflows.",
        category: "ai",
        technologies: ["Next.js", "OpenAI", "Prisma", "PostgreSQL"],
        liveUrl: "#",
        image: "/projects/placeholder-2.png"
      },
      {
        id: 6,
        title: "Future Project 3",
        description: "Mobile-first progressive web app for real-time collaboration.",
        category: "webapp",
        technologies: ["React", "PWA", "WebRTC", "Firebase"],
        liveUrl: "#",
        image: "/projects/placeholder-3.png"
      }
    ]
  },

  // Testimonials
  testimonials: [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO", 
      content: "HoverX delivered an exceptional website that perfectly captured our brand vision. The attention to detail and technical expertise exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Digital Solutions",
      role: "Marketing Director",
      content: "Working with HoverX was a game-changer for our business. They created a stunning e-commerce platform that increased our conversions by 40%.",
      rating: 5
    },
    {
      name: "Emily Rodriguez", 
      company: "Creative Agency",
      role: "Founder",
      content: "The team at HoverX is incredibly talented and professional. They delivered our project on time and the quality was outstanding.",
      rating: 5
    },
    {
      name: "David Thompson",
      company: "Local Restaurant", 
      role: "Owner",
      content: "Our new website has transformed our business. Online orders increased significantly, and customers love the user experience.",
      rating: 5
    }
  ],

  // Social Links
  social: {
    email: "mailto:hoverxhk007@gmail.com",
    whatsapp: "https://wa.me/916266602150",
    // Add more social links as needed
    // github: "https://github.com/teamhk",
    // linkedin: "https://linkedin.com/company/teamhk",
    // twitter: "https://twitter.com/teamhk"
  }
};

// Utility function to check if logo exists
export const getLogoSrc = (): string | null => {
  // This will be handled by the LogoImage component
  return siteConfig.logo.path;
};
