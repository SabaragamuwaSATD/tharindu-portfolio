import type { Testimonial } from "@/types";

const allTestimonials: Testimonial[] = [
  {
    quote: "[PLACEHOLDER] A short quote from a real client goes here.",
    name: "[PLACEHOLDER] Client Name",
    title: "Founder",
    company: "Client Company",
    isPlaceholder: true,
  },
  {
    quote: "[PLACEHOLDER] A second client quote goes here.",
    name: "[PLACEHOLDER] Client Name",
    title: "Owner",
    company: "Client Company",
    isPlaceholder: true,
  },
];

export const testimonials =
  process.env.NODE_ENV === "production"
    ? allTestimonials.filter((t) => !t.isPlaceholder)
    : allTestimonials;
