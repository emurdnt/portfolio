import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  angular,
  rxjs,
  git,
  threejs,
  shair,
  viewpoint,
  lighthouselabs,
  thebrick,
  clc,
  creator,
  shairco,
  rover,
} from '../assets';
export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];
const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Hobby Starter',
    icon: creator,
  },
];
const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'RxJS',
    icon: rxjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];
const experiences = [
  {
    title: 'Mentor',
    company_name: 'Canada Learning Code',
    icon: clc,
    iconBg: '#fff',
    date: 'July 2018 - Present',
    points: [
      'Mentored and assisted attendees at different levels of technical knowledge. ',
      ' Provided feedback and made sure attendees are having a positive learning experience. ',
    ],
  },
  {
    title: 'Front End Engineer',
    company_name: 'Shair.co',
    icon: shair,
    iconBg: '#303030',
    date: 'June 2021 - April 2023',
    points: [
      'Built and shipped the core mobile app with 2 other team members.',
      'Optimized and modularized various user workflows on both the web and mobile app leveraging various frontend and AI libraries.',
      'Maintained and contributed to the company’s component/UI libraries which sped development time by 50%.  ',
      'Mentored and assisted other team members, supporting their technical growth and fostering a collaborative environment.',
    ],
  },
  {
    title: 'Front End Engineer - Intern',
    company_name: 'Viewpoint Investment Partners',
    icon: viewpoint,
    iconBg: '#E6DEDD',
    date: 'Dec 2020 - March 2020',
    points: [
      'Built and shipped the initial version of the company&apos;s notification system using Angular and RxJs. ',
      'Created a design document outlining the data flow, technical requirements, and the architectural design of the notification project.',
      'Developed data visualizations enhancing the user experience for users using D3.js.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Coding Mentor',
    company_name: 'Lighthouse Labs',
    icon: lighthouselabs,
    iconBg: '#fff',
    date: 'Oct 2020 - Dec 2020',
    points: [
      'Provided guidance, feedback, and support to students enrolled in a coding bootcamp program, specializing in JavaScript, React, PostgreSQL, and CSS.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'The Brick',
    icon: thebrick,
    iconBg: '#f8f0ee',
    date: 'May 2019 - May 2020',
    points: [
      'Worked with various appliance and furniture brand to web pages that helped boost the sales of specific products.',
      'Organized sales event materials on the e-commerce platform which was on Shopify',
      'Collaborated closely with the marketing team to design and implement engaging marketing emails and landing pages that effectively promoted products and campaigns.',
    ],
  },
];
const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];
const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'material-ui',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
      {
        name: 'axios',
        color: 'yello-text-gradient',
      },
    ],
    image: shairco,
    source_code_link: 'https://github.com/emurdnt/shair',
  },
  {
    name: 'Rover',
    description:
      'Web application that showcases a GraphQL authentication workflow.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'graphql',
        color: 'purple-text-gradient',
      },
    ],
    image: rover,
    source_code_link:
      'https://github.com/emurdnt/take-home-assignment-react',
  },
];
export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
