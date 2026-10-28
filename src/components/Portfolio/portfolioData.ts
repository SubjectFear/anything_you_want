// Placeholder portfolio content — replace every value below with your own details.

export const profile = {
  name: "Your Name",
  eyebrow: "Army Medic \u2192 Software Developer",
  headline: "I bring battlefield discipline to building software.",
  tagline:
    "I spent years providing emergency trauma care for soldiers under pressure. Today I bring that same discipline, calm under pressure, and care for the people who rely on what I build to software development.",
  location: "United States",
  email: "you@example.com",
  resumeUrl: "/resume.pdf",
  githubUrl: "https://github.com/your-handle",
  linkedinUrl: "https://www.linkedin.com/in/your-handle",
};

export type ExperienceCategory = "military" | "tech";

export type ExperienceItem = {
  id: number;
  category: ExperienceCategory;
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: 1,
    category: "military",
    role: "Combat Medic Specialist (68W)",
    org: "U.S. Army",
    period: "2015 \u2013 2019",
    bullets: [
      "Provided emergency trauma care and triage for soldiers in training and deployed environments.",
      "Led a 4-person aid team, maintaining equipment readiness and medical supply logistics.",
      "Trained incoming soldiers on combat lifesaver skills and emergency response procedures.",
    ],
  },
  {
    id: 2,
    category: "tech",
    role: "Full-Stack Development Student",
    org: "Coding Bootcamp",
    period: "2019 \u2013 2020",
    bullets: [
      "Completed an intensive full-stack web development program after transitioning out of active duty.",
      "Built and shipped several full-stack projects using JavaScript, React, and Node.js.",
      "Applied military discipline and problem-solving habits to debugging and project planning.",
    ],
  },
  {
    id: 3,
    category: "tech",
    role: "Junior Software Developer",
    org: "Your Company",
    period: "2020 \u2013 Present",
    bullets: [
      "Develop and maintain features for web applications using React, Next.js, and TypeScript.",
      "Collaborate with cross-functional teams to ship reliable, user-focused products.",
      "Bring a calm, mission-first mindset to incident response and on-call rotations.",
    ],
  },
];

export const skills = {
  medical: [
    "Trauma & Emergency Care",
    "Triage & Rapid Assessment",
    "Leadership Under Pressure",
    "Team Coordination",
    "Medical Logistics",
    "Training & Mentorship",
  ],
  technical: [
    "JavaScript / TypeScript",
    "React & Next.js",
    "Node.js",
    "SQL & Prisma",
    "Git & GitHub",
    "REST APIs",
  ],
};

export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Project One",
    description:
      "A short description of this project \u2014 the problem it solves, the stack you used, and your role in building it.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    image: "/images/about/about.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "A short description of this project \u2014 the problem it solves, the stack you used, and your role in building it.",
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    image: "/images/about/about.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A short description of this project \u2014 the problem it solves, the stack you used, and your role in building it.",
    tags: ["Next.js", "Prisma", "Stripe"],
    image: "/images/about/about.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
];

export type EducationItem = {
  id: number;
  title: string;
  org: string;
  period: string;
  description: string;
};

export const education: EducationItem[] = [
  {
    id: 1,
    title: "Combat Medic Specialist Certification (68W)",
    org: "U.S. Army Medical Center of Excellence",
    period: "2015",
    description:
      "Certified in emergency trauma care, triage, and tactical combat casualty care.",
  },
  {
    id: 2,
    title: "Nationally Registered EMT-Basic",
    org: "National Registry of Emergency Medical Technicians",
    period: "2015",
    description: "Certification earned alongside Army medic training.",
  },
  {
    id: 3,
    title: "Full-Stack Web Development Certificate",
    org: "Coding Bootcamp",
    period: "2020",
    description:
      "Intensive program covering JavaScript, React, Node.js, databases, and deployment.",
  },
];
