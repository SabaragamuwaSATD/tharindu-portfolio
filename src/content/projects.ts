import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ceylas-gems",
    title: "Ceylas Gems",
    summary:
      "Gem and jewellery e-commerce platform for a Las Vegas-based client, with PayPal checkout, referrals, a cashback wallet and AI-powered verification.",
    category: "web",
    stack: ["React", "Node.js", "Express", "Firebase", "PayPal", "Gemini API"],
    role: "Full-stack developer",
    liveUrl: "https://www.ceylasgems.com/",
    featured: true,
    caseStudy: {
      problem: "[PLACEHOLDER] What problem did the client have?",
      solution: "[PLACEHOLDER] What did you build to solve it?",
      decisions: ["[PLACEHOLDER] A key technical decision and why"],
      result: "[PLACEHOLDER] What changed for the client?",
    },
  },
  {
    slug: "dm-interior-studio",
    title: "DM Interior Studio",
    summary:
      "Immersive website for an interior design company, with GSAP scroll-driven sequences and a 360° panorama viewer.",
    category: "web",
    stack: ["Next.js", "GSAP", "three.js", "Supabase"],
    role: "Full-stack developer",
    liveUrl: "https://dminteriors.lk/",
    featured: true,
  },
  {
    slug: "teeplanet",
    title: "TeePlanet",
    summary:
      "B2B marketplace and 3D T-shirt design platform with Stripe subscription billing.",
    category: "web",
    stack: ["React", "Node.js", "MongoDB", "Stripe", "React Three Fiber"],
    role: "Full-stack developer",
    liveUrl: "https://tee-planet-kyy9.vercel.app/",
    featured: true,
  },
  {
    slug: "emark-vehicle-manager",
    title: "EMARK Vehicle Manager",
    summary:
      "Workshop management PWA with a 7-stage job card workflow, inventory alerts, payroll and PDF invoicing.",
    category: "web",
    stack: ["React", "Node.js", "MongoDB", "Cloudinary", "PWA"],
    role: "Full-stack developer",
    featured: true,
  },
  {
    slug: "certificate-ocr",
    title: "Certificate Replacement System",
    summary:
      "OCR and machine learning pipeline that validates Sinhala and English certificates and generates replacements as PDFs with QR codes.",
    category: "ai",
    stack: ["Python", "EasyOCR", "Tesseract", "OpenCV", "scikit-learn"],
    role: "Full-stack & ML developer",
    githubUrl:
      "https://github.com/SabaragamuwaSATD/Certificate-Replacement---Research",
    featured: true,
  },
  {
    slug: "wastenet",
    title: "WasteNet",
    summary: "Cross-platform mobile app for garbage collection management.",
    category: "mobile",
    stack: ["React Native", "Firebase", "Clerk"],
    role: "Mobile developer",
    githubUrl: "https://github.com/SabaragamuwaSATD/WasteNet",
    featured: false,
  },
  {
    slug: "rag-study-assistant",
    title: "RAG Study Assistant",
    summary:
      "Retrieval-augmented assistant that answers questions grounded in uploaded study materials.",
    category: "ai",
    stack: ["Python", "LangChain", "FAISS", "Gemini API"],
    role: "AI developer",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
