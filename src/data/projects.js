import project1Img from '../assets/project1.png'
import project2Img from '../assets/project2.png'
import project3Img from '../assets/project3.png'
import project4Img from '../assets/project4.png'

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack Apps' },
  { id: 'frontend', label: 'Frontend / UI' },
  { id: 'ai', label: 'AI & Tools' },
]

export const projectsList = [
  {
    id: 1,
    title: 'ApexMetrics SaaS Analytics',
    subtitle: 'Real-time financial & user behavior telemetry dashboard',
    category: 'fullstack',
    categoryLabel: 'Full-Stack SaaS',
    image: project1Img,
    tags: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Chart.js'],
    // Note: Replace with real demo URL when deployed, or leave null to show Case Study modal button
    liveUrl: null,
    githubUrl: 'https://github.com',
    metrics: '99.99% Uptime',
    fullDescription:
      'A comprehensive dark-mode SaaS analytics suite featuring live WebSocket updates, custom data visualization widgets, dynamic multi-tenant role access, and automated invoice PDF exports.',
    keyFeatures: [
      'Real-time data streaming via WebSockets',
      'Interactive customizable dashboard grid',
      'Multi-currency subscription billing pipeline',
      'Sub-100ms API response latency',
    ],
  },
  {
    id: 2,
    title: 'LuxeStore E-Commerce Platform',
    subtitle: 'High-speed headless commerce store with instant checkout',
    category: 'frontend',
    categoryLabel: 'Headless E-Commerce',
    image: project2Img,
    tags: ['React', 'Vite', 'Tailwind CSS', 'Stripe API', 'Zustand'],
    liveUrl: null,
    githubUrl: 'https://github.com',
    metrics: '100% Mobile Optimized',
    fullDescription:
      'A high-performance modern digital store crafted for luxury lifestyle products. Integrated with Stripe multi-currency checkout, dynamic search filtering, optimistic cart management, and glassmorphism UI visuals.',
    keyFeatures: [
      'Optimistic UI state updates for fast user responses',
      'Stripe payment gateway & Apple Pay integration',
      'Faceted search & filter by category, price, and tags',
      'Progressive web app (PWA) offline capabilities',
    ],
  },
  {
    id: 3,
    title: 'CogniCode AI Studio',
    subtitle: 'Intelligent IDE assistant & automated code refactoring tool',
    category: 'ai',
    categoryLabel: 'AI & Developer Tooling',
    image: project3Img,
    tags: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Tailwind'],
    liveUrl: null,
    githubUrl: 'https://github.com',
    metrics: 'Developer Productivity Tool',
    fullDescription:
      'An AI-powered developer environment designed to analyze source code repositories, suggest real-time performance fixes, generate unit tests automatically, and provide contextual pair-programming explanations.',
    keyFeatures: [
      'AI context window memory for multi-file codebases',
      'Automatic docstring & unit test generator',
      'Syntax highlighting with monaco editor integration',
      'Custom prompt template library for engineering teams',
    ],
  },
  {
    id: 4,
    title: 'FlowBoard Real-time Workspace',
    subtitle: 'Kanban collaboration tool with live updates & team tasks',
    category: 'fullstack',
    categoryLabel: 'Collaboration Platform',
    image: project4Img,
    tags: ['React', 'Express', 'Socket.io', 'MongoDB', 'Tailwind v4'],
    liveUrl: null,
    githubUrl: 'https://github.com',
    metrics: 'Real-Time Sync',
    fullDescription:
      'A kanban productivity tool for modern engineering teams. Supports drag-and-drop task movements, live cursor tracking, team chat comments, and granular activity audit logs.',
    keyFeatures: [
      'Drag and drop card management with smooth animations',
      'Live multiplayer presence and status tracking',
      'Automated webhook notifications for Slack & Discord',
      'Export workspace reports to PDF & CSV',
    ],
  },
]
