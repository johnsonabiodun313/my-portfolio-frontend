import { Briefcase, GraduationCap } from 'lucide-react'

export const experiencesData = [
  {
    id: 1,
    title: 'Senior Full-Stack Engineer',
    company: 'TechPulse Solutions',
    period: '2023 - Present',
    type: 'Full-Time',
    icon: Briefcase,
    description:
      'Architecting frontend and backend microservices for enterprise SaaS products. Optimized React web application performance by 40% and designed APIs serving over 150k monthly active users.',
    achievements: [
      'Migrated codebase to Vite & React 19, reducing build times by 60%',
      'Built real-time notification engine with WebSockets and Redis',
      'Led agile engineering sprint planning and code reviews',
    ],
  },
  {
    id: 2,
    title: 'Frontend Web Developer',
    company: 'Nexus Creative Studio',
    period: '2022 - 2023',
    type: 'Full-Time',
    icon: Briefcase,
    description:
      'Designed and implemented responsive web applications for international clients using React, Tailwind CSS, and RESTful APIs.',
    achievements: [
      'Built 12+ client websites with 100/100 Lighthouse performance scores',
      'Created modular UI component library adopted across product teams',
      'Integrated Stripe payments and OAuth user authentication flows',
    ],
  },
  {
    id: 3,
    title: 'B.Sc. Computer Science (Undergraduate)',
    company: 'Adeleke University, Ede',
    period: '2024 - Present',
    type: 'Education',
    icon: GraduationCap,
    description:
      'Undergraduate program in Computer Science, focusing on Software Engineering principles, Web Technologies, System Analysis, Algorithms, and Database Systems.',
    achievements: [
      'Pursuing B.Sc. Degree in Computer Science (2024 – Present)',
      'Active participant in software engineering coursework and tech workshops',
    ],
  },
]
