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
      "As an organiser at GDG VITB, I’ve had the opportunity to closely work with Gurunada as he progressed from Web Dev Co-Lead to Lead. Throughout this journey, he consistently demonstrated strong ownership, taking initiatives from ideation all the way to execution with clarity and confidence",
  },
  {
    name: "Chinni Suryan Hota",
    role: "Founder -Hota Creatives",
    image:
      "https://res.cloudinary.com/duvr3z2z0/image/upload/v1777115955/Gemini_Generated_Image_mn36wwmn36wwmn36_tsvdzj.png",
    quote:
      "Working with him as my Technical Lead has been a game-changer for our agency. He consistently delivers high-quality, scalable websites while perfectly understanding client needs. I highly recommend him to anyone looking for a reliable and skilled web development expert.",
  },
  {
    name: "K Narasimha Naidu",
    role: "Technical Lead , Ecell VITB",
    image:
      "https://res.cloudinary.com/dlupkibvq/image/upload/v1767886987/ngv6uefackvxzjz1rozc.png",
    quote:
      "As Technical Lead at E-Cell and GDG, I mentored Gurunada on several projects using Flutter, Next.js, Firebase, and Neo4j. He demonstrated strong ownership from ideation to implementation, effectively translating user needs into functional solutions. Proactive and open to feedback, Gurunada is a dedicated developer who excels in real-world environments.",
  },
];
