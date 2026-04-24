export const links = [
  "hero",
  "about",
  "skills",
  "experience",
  "expertise",
  "projects",
  "testimonials",
  "contact",
] as const;

export const sectionLabels: Record<(typeof links)[number], string> = {
  hero: "Home",
  about: "About",
  skills: "Skills",
  experience: "Experience",
  expertise: "Expertise",
  projects: "Projects",
  testimonials: "Testimonials",
  contact: "Contact",
};

export const sectionIcons: Record<(typeof links)[number], string> = {
  hero: "fas fa-house",
  about: "fas fa-user",
  skills: "fas fa-code",
  experience: "fas fa-briefcase",
  expertise: "fas fa-brain",
  projects: "fas fa-folder-open",
  testimonials: "fas fa-comments",
  contact: "fas fa-envelope",
};

export const testimonialsData = [
  {
    name: "Yaswanth Varada",
    role: "Organiser-GDGVITB",
    image:
      "https://res.cloudinary.com/dlupkibvq/image/upload/Yaswanth_Varada_Organisor_hmclul.png",
    quote:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "Chinni Suryan Hota",
    role: "Founder -Hota Creatives",
    image:
      "src\\assets\\WhatsApp Image 2026-04-24 at 10.49.45 PM.jpeg",
    quote:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "K Narasimha Naidu",
    role: "Technical Lead , Ecell VITB",
    image:
      "https://res.cloudinary.com/dlupkibvq/image/upload/v1767886987/ngv6uefackvxzjz1rozc.png",
    quote:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
];
