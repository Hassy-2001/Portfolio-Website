import project1 from '../assets/images/1.png';
import project2 from '../assets/images/2.png';
import project3 from '../assets/images/3.png';
import umrahAndBeyondImage from '../assets/images/umrah-and-beyond.jpg';
import synclyImage from '../assets/images/syncly.png';
import escenturyImage from '../assets/images/escentury.jpg';
import profileImage from '../assets/images/hassan-dev-portrait.jpeg';
import saraImage from '../assets/images/testimonials/sara.webp';
import joeImage from '../assets/images/testimonials/joe.jpg';

export const personalInfo = {
  name: 'Hassan.Dev',
  title: 'Full-Stack Developer & AI Engineer',
  shortBio:
    'Full-stack developer & AI engineer. I turn ideas into thoughtful digital products.',
  email: 'hassanghani001@gmail.com',
  phone: '0312-2416272',
  whatsapp: '923122416272',
  github: 'https://github.com/Hassy-2001',
  linkedin: 'https://linkedin.com/in/hassan-ghani-1048a3248/',
  instagram: 'https://instagram.com/YOUR_PROFILE',
  resumeLink: '/HassanResume.pdf',
  profileImage,
};

export const stats = [
  { label: 'Delivered projects', value: 50, suffix: '+' },
  { label: 'Years building', value: 5, suffix: '+' },
  { label: 'Core stack areas', value: 3, suffix: '' },
];

export const services = [
  {
    title: 'Frontend',
    description: 'Fast, intuitive web experiences.',
  },
  {
    title: 'Backend',
    description: 'Reliable APIs and scalable systems.',
  },
  {
    title: 'AI & automation',
    description: 'Useful assistants and smarter workflows.',
  },
];

export const techStack = [
  {
    group: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    group: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    group: 'Backend',
    items: ['Django', 'Django REST Framework', 'FastAPI', 'Flask', 'Node.js', 'Express.js', 'Supabase', 'Firebase'],
  },
  {
    group: 'Databases',
    items: ['SQL', 'NoSQL'],
  },
];

export const projects = [
  {
    title: 'Escentury',
    category: 'E-commerce',
    image: escenturyImage,
    liveLink: 'https://www.escentury.com/',
  },
  {
    title: 'Umrah & Beyond',
    category: 'Travel Platform',
    description: 'A polished travel website for Umrah packages and booking inquiries.',
    image: umrahAndBeyondImage,
    liveLink: 'https://www.umrahandbeyond.com/',
  },
  {
    title: 'Syncly',
    category: 'Communication Platform',
    description: 'A modern communication product focused on connecting teams and conversations.',
    image: synclyImage,
    liveLink: 'https://syncly-eta.vercel.app/',
  },
  {
    title: 'HeySupport AI',
    category: 'AI SaaS',
    description: 'Customer support automation with AI and live-agent flows.',
    image: project2,
    liveLink: 'https://heysupport.ai/',
  },
  {
    title: 'Study Buddy',
    category: 'Full Stack',
    description: 'A collaborative study platform for discussion and learning.',
    image: project1,
    liveLink: 'https://studdy-buddy-uavq.vercel.app/',
  },
  {
    title: 'Vibra UI',
    category: 'Interface',
    description: 'An animated interface experiment with GSAP and Three.js.',
    image: project3,
    liveLink: 'https://vibraui.netlify.app/',
  },
];

export const testimonials = [
  {
    name: 'Sara',
    role: 'Startup Founder',
    text: 'Clean delivery and strong communication.',
    image: saraImage,
  },
  {
    name: 'Joe Williams',
    role: 'Product Manager',
    text: 'Reliable execution with excellent structure.',
    image: joeImage,
  },
];
