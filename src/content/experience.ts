import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    company: "Fianto Solutions (Pvt) Ltd",
    role: "Co-Founder & Full-Stack Engineer",
    location: "Malabe, Sri Lanka",
    startDate: "Oct 2025",
    highlights: [
      "Built Ceylas Gems, a full-stack gem and jewellery e-commerce platform for a Las Vegas-based client, with PayPal checkout, referral programmes and a full admin panel.",
      "Integrated AI screenshot verification using Google Gemini with a Llama 3.2 Vision fallback.",
      "Developed DM Interior Studio, an immersive Next.js website with GSAP scroll sequences and a 360° panorama viewer.",
      "Optimised loading of ~1,000 animation frames through canvas optimisations, preload gating and caching.",
    ],
    stack: ["React", "Next.js", "Node.js", "Firebase", "Gemini API", "GSAP"],
  },
  {
    company: "LegionCode IT Solutions (Pvt) Ltd",
    role: "Full-Stack Developer Intern",
    location: "Galle, Sri Lanka",
    startDate: "Oct 2024",
    endDate: "Oct 2025",
    highlights: [
      "Built full-stack web and desktop apps, including a real estate management system, a point-of-sale system and a workshop task manager.",
      "Developed role-based REST APIs with JWT authentication and Twilio, Nodemailer and Cloudinary integrations.",
      "Built an OCR and ML pipeline that validates Sinhala and English certificates and generates replacements as PDFs with QR codes.",
    ],
    stack: ["Node.js", "React", "Python", "Flask", "Electron", "OCR"],
  },
];
