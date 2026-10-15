import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const heroReveal = (targets) => {
  if (reducedMotion()) return;
  return gsap.fromTo(targets, { opacity: 0, y: 16 }, {
    opacity: 1, y: 0, duration: 0.65, stagger: 0.08,
    ease: 'power2.out', clearProps: 'opacity,transform',
  });
};

export const sectionEnter = (section) => {
  if (!section || reducedMotion()) return;
  const targets = section.querySelectorAll('[data-animate]');
  if (!targets.length) return;
  return gsap.fromTo(targets, { opacity: 0, y: 18 }, {
    opacity: 1, y: 0, duration: 0.55, stagger: 0.06,
    ease: 'power2.out', clearProps: 'opacity,transform',
    scrollTrigger: { trigger: section, start: 'top 90%', once: true },
  });
};
