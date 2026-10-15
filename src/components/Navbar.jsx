import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/siteData';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Stack', href: '#stack' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="container-shell nav-shell">
        <a href="#home" className="brand-mark" onClick={() => setIsOpen(false)}>{personalInfo.name}<span /></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => <a key={link.name} href={link.href} className="nav-link">{link.name}</a>)}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button ref={menuButtonRef} type="button" className="menu-button" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="mobile-navigation">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-nav container-shell" aria-label="Mobile navigation" hidden={!isOpen}>
        {navLinks.map((link) => <a key={link.name} href={link.href} className="nav-link" onClick={() => setIsOpen(false)}>{link.name}</a>)}
      </nav>
    </header>
  );
}
