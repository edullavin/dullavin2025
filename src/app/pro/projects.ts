export type Project = {
  slug: string;
  title: string;
  role?: string;
  period?: string;
  tags?: string[];
  image?: { src: string; alt?: string };
};

export const projects: Project[] = [
  {
    slug: "b2b-onboarding",
    title: "B2B Onboarding Redesign",
    role: "Lead Product Designer",
    period: "2024",
    tags: ["Activation", "Workflow", "Analytics"],
    image: { src: "/images/placeholder-1.jpg", alt: "Onboarding analytics dashboard" },
  },
  {
    slug: "design-system",
    title: "Design System Revamp",
    role: "Systems & Accessibility",
    period: "2023",
    tags: ["Tokens", "Components", "Docs"],
    image: { src: "/images/placeholder-2.jpg", alt: "Component library grid" },
  },
  {
    slug: "mobile-checkout",
    title: "Mobile Checkout Flow",
    role: "UX & Interaction",
    period: "2022",
    tags: ["Conversion", "Payments", "Motion"],
    image: { src: "/images/placeholder-3.jpg", alt: "Checkout screens" },
  },
];
