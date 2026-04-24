export type Stat = {
  value: string;
  label: string;
};

export type Domain = {
  id: string;
  title: string;
  summary: string;
  details: string[];
  tags: string[];
  iconClass: string;
};

export type ApproachStep = {
  number: string;
  title: string;
  description: string;
};

export type TimelineMetric = {
  value: string;
  label: string;
};

export type TimelineItem = {
  date: string;
  title: string;
  organization: string;
  points: string[];
  metrics: TimelineMetric[];
  tags: string[];
  iconClass: string;
};

export type AcademicBlock = {
  date: string;
  title: string;
  institution: string;
  score: string;
  scoreLabel: string;
};

export type Project = {
  title: string;
  tech: string;
  description: string;
  iconClass: string;
  status?: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
    disabled?: boolean;
  }[];
};

export type ExpertiseCard = {
  title: string;
  iconClass: string;
  points: string[];
};

export type ContactItem = {
  iconClass: string;
  value: string;
};

export type SocialLink = {
  iconClass: string;
  href: string;
};

export type PortfolioContent = {
  heroTag: string;
  name: string;
  subtitle: string;
  summary: string;
  aboutParagraphs: string[];
  stats: Stat[];
  domains: Domain[];
  approach: ApproachStep[];
  timeline: TimelineItem[];
  academics: AcademicBlock[];
  projects: Project[];
  expertise: ExpertiseCard[];
  skillCategories: Record<string, string[]>;
  quote: string;
  quoteAuthor: string;
  contactTitle: string;
  contactText: string;
  contactItems: ContactItem[];
  socialLinks: SocialLink[];
};
