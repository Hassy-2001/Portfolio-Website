import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { personalInfo } from '../data/siteData';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Stack', href: '#stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.35, ease: 'power3.out' }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.inOut',
      });
    }
  }, [isOpen]);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b bg-[var(--surface)]/80 backdrop-blur-2xl"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="container-shell flex items-center justify-between py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
          {personalInfo.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm text-[var(--muted)] transition duration-300 hover:text-[var(--foreground)]"
            >
              <span>{link.name}</span>
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex rounded-full p-2 text-[var(--foreground)]"
            style={{ border: '1px solid var(--border)', background: 'var(--surface-2)' }}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className="overflow-hidden md:hidden"
        style={{ height: 0, opacity: 0, borderTop: `1px solid var(--border)`, background: 'var(--surface)' }}
      >
        <div className="container-shell flex flex-col gap-3 py-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-xl px-3 py-2 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}