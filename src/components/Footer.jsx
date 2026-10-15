import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="container-shell site-footer">
      <p>© {new Date().getFullYear()} {personalInfo.name}</p>
      <a href="#home" className="text-link">Back to top <ArrowUp size={14} /></a>
    </footer>
  );
}
