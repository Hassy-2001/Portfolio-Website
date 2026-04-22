import project1 from '../assets/images/1.png';
import project2 from '../assets/images/2.png';
import project3 from '../assets/images/3.png';
import profileImage from '../assets/images/profile-placeholder.png';
import aboutImage from '../assets/images/about-placeholder.avif';
import saraImage from '../assets/images/testimonials/sara.webp';
import joeImage from '../assets/images/testimonials/joe.jpg';
import lukasImage from '../assets/images/testimonials/lucas.jpg';
import aliImage from '../assets/images/testimonials/ali.avif';

export const personalInfo = {
  name: 'Hassan.Dev',
  title: 'Full-Stack Developer & AI Engineer',
  shortBio:
    'I build scalable full-stack applications enhanced with intelligent AI solutions, focusing on clean architecture, performance, and real-world impact.',
  email: 'hassanghani001@gmail.com',
  phone: '0312-2416272',
  whatsapp: '923122416272',
  github: 'https://github.com/Hassy-2001',
  linkedin: 'https://linkedin.com/in/hassan-ghani-1048a3248/',
  instagram: 'https://instagram.com/YOUR_PROFILE',
  resumeLink: '/resume.pdf',
  profileImage,
  aboutImage,
};

export const stats = [
  { label: 'Projects', value: 50, suffix: '+' },
  { label: 'Learning Years', value: 5, suffix: '+' },
  { label: 'Satisfaction', value: 100, suffix: '%' },
];

export const services = [
  {
    title: 'Web Development',
    description: 'Modern web applications built for clarity, speed, and scalability.',
  },
  {
    title: 'Backend Architecture',
    description: 'Scalable backend systems with clean architecture, secure authentication, and reliable performance.',
  },
  {
    title: 'AI Solutions',
    description: 'AI-powered tools and chatbots designed to improve automation and user experience.',
  },
];

export const techStack = [
  {
    group: 'Languages',
    items: ['Python', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    group: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    group: 'Backend',
    items: ['Django', 'Django REST Framework', 'FastAPI', 'Flask', 'Node.js', 'Express.js'],
  },
  {
    group: 'Databases',
    items: ['SQL', 'NoSQL'],
  },
];

export const projects = [
  {
    title: 'Study Buddy',
    category: 'Full Stack Development',
    description:
      'A collaborative learning platform where users can discuss, connect, and study together in a Discord-inspired environment.',
    image: project1,
    liveLink: 'https://studdy-buddy-uavq.vercel.app/',
  },
  {
    title: 'HeySupport AI',
    category: 'SaaS / AI Chatbot',
    description:
      'A 24/7 AI and live-agent chatbot platform built to help ecommerce and SaaS businesses engage visitors and increase conversions.',
    image: project2,
    liveLink: 'https://heysupport.ai/',
  },
  {
    title: 'Vibra UI',
    category: 'UI / UX Design',
    description:
      'An animated UI experience built with GSAP and Three.js for modern, immersive, and interactive web experiences.',
    image: project3,
    liveLink: 'https://vibraui.netlify.app/',
  },
];

export const testimonials = [
  {
    name: 'Sara',
    role: 'Startup Founder',
    text: 'Clean delivery, strong communication, and a polished final product.',
    image: saraImage,
  },
  {
    name: 'Joe Williams',
    role: 'Product Manager',
    text: 'Reliable execution with excellent structure and performance.',
    image: joeImage,
  },
  {
    name: 'Lukas Andersen',
    role: 'Tech Lead',
    text: 'Well-structured work with clear communication throughout.',
    image: lukasImage,
  },
  {
    name: 'Ali Khan',
    role: 'Business Owner',
    text: 'Professional, detail-oriented, and easy to work with.',
    image: aliImage,
  },
];