export const profile = {
  name: 'Jacob Nordan',
  title: 'Software Developer & Marketing Technologist',
  location: 'Wilmington, NC',
  email: 'jacob.nordan113322@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jacob-nordan/',
  github: 'https://github.com/jnordan132',
}

export const stats = [
  { value: 1367, label: 'Pages rebuilt solo', suffix: '' },
  { value: 6, label: 'Websites maintained', suffix: '' },
  { value: 1312, label: 'Tutoring sessions led', suffix: '' },
  { value: 305, label: 'Students mentored', suffix: '' },
]

export const services = [
  {
    icon: 'code',
    title: 'Web Development',
    text: 'Responsive, fast sites and custom components built with React, JavaScript, and modern CSS, from landing pages to full-stack apps.',
  },
  {
    icon: 'layers',
    title: 'WordPress at Scale',
    text: 'Custom Elementor and ElementsKit widgets, reusable templates, and site architecture that holds up across 1,000+ pages.',
  },
  {
    icon: 'chart',
    title: 'Marketing & Analytics',
    text: 'GA4, call tracking, and monthly performance reporting, connecting what happens on a site to the numbers that matter.',
  },
  {
    icon: 'cloud',
    title: 'Salesforce & CRM',
    text: 'Salesforce administration, Apex, and reports on revenue, leads, and opportunities so teams can see their pipeline clearly.',
  },
  {
    icon: 'mic',
    title: 'Content & Media',
    text: 'Working with writers and media teams on content, and running marketing and development for the Justin McMillen Podcast.',
  },
  {
    icon: 'server',
    title: 'Systems & Operations',
    text: 'NAS setup for media storage, user and permission management, in-house tools, and SOPs that keep a team running smoothly.',
  },
]

export const skillGroups = [
  {
    name: 'Development',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vite', 'Node.js', 'Express', 'GraphQL', 'MySQL', 'MongoDB', 'Git', 'Bootstrap', 'Material UI', 'jQuery'],
  },
  {
    name: 'CMS & Platforms',
    items: ['WordPress', 'Elementor', 'ElementsKit', 'Squarespace', 'Shopify', 'Salesforce', 'Apex'],
  },
  {
    name: 'Marketing & Analytics',
    items: ['Google Analytics 4', 'CallTrackingMetrics', 'Performance Reporting', 'SEO', 'Content Strategy', 'YouTube', 'Podcast Marketing'],
  },
  {
    name: 'Creative & Productivity',
    items: ['Adobe Creative Tools', 'Google Workspace', 'Project Scoping & Bids', 'SOP Development'],
  },
]

export const experience = [
  {
    company: 'Oaye Creative',
    role: 'Software Developer, Marketing Team',
    period: 'Oct 2023 – Present',
    summary:
      'Developer on the marketing team, handling the websites, the data behind them, and the systems the team relies on.',
    groups: [
      {
        label: 'Web',
        points: [
          'Rebuilt a 1,367-page website as the sole developer using WordPress and Elementor',
          'Build custom WordPress widgets with ElementsKit for Elementor',
          'Maintain 6 websites, keeping them up and performing well',
          'Develop custom components with HTML, CSS, and JavaScript',
        ],
      },
      {
        label: 'Marketing & Data',
        points: [
          'Run monthly website performance reports for leadership',
          'Keep analytics integrations accurate and connected across properties',
          'Collaborate with writers and the media team on content',
          'Lead marketing and development for the Justin McMillen Podcast',
        ],
      },
      {
        label: 'Salesforce & Ops',
        points: [
          'Handle Salesforce administration and build reports on revenue, leads, and opportunities',
          'Write project bids and breakdowns for management to approve',
          'Built and maintain a NAS for marketing media storage, users, and permissions',
          'Develop in-house systems and SOPs, and support clients with troubleshooting',
        ],
      },
    ],
  },
  {
    company: '2U',
    role: 'Senior Tutor',
    period: 'Apr 2022 – Oct 2023',
    summary:
      'Weekly 1:1 tutoring for full stack web development bootcamp students.',
    groups: [
      {
        label: 'Impact',
        points: [
          'Completed 1,312 tutoring sessions across 305 students',
          'Broke down difficult concepts until students fully understood them',
          'Coached students to work through problems on their own',
        ],
      },
    ],
  },
]

export const education = {
  school: 'University of North Carolina at Chapel Hill',
  credential: 'Certificate, Full Stack Web Development Bootcamp',
  period: 'May 2021 – Nov 2021',
}
