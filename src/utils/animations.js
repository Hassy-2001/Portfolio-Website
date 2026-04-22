import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const getTargets = (targets) => {
  if (!targets) return [];
  if (targets instanceof Element) return [targets];
  return Array.from(targets).filter(Boolean);
};

const baseScrollTrigger = (trigger, start = 'top 88%') => ({
  trigger,
  start,
  once: true,
  toggleActions: 'play none none none',
});

export const fadeUp = (
  targets,
  trigger,
  {
    stagger = 0.1,
    y = 24,
    duration = 0.65,
    start = 'top 88%',
  } = {}
) => {
  const elements = getTargets(targets);
  if (!elements.length) return;

  return gsap.fromTo(
    elements,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power2.out',
      clearProps: 'transform',
      scrollTrigger: baseScrollTrigger(trigger, start),
    }
  );
};

export const fadeLeft = (
  targets,
  trigger,
  {
    stagger = 0.1,
    x = -28,
    duration = 0.7,
    start = 'top 88%',
  } = {}
) => {
  const elements = getTargets(targets);
  if (!elements.length) return;

  return gsap.fromTo(
    elements,
    { opacity: 0, x },
    {
      opacity: 1,
      x: 0,
      duration,
      stagger,
      ease: 'power2.out',
      clearProps: 'transform',
      scrollTrigger: baseScrollTrigger(trigger, start),
    }
  );
};

export const fadeRight = (
  targets,
  trigger,
  {
    stagger = 0.1,
    x = 28,
    duration = 0.7,
    start = 'top 88%',
  } = {}
) => {
  const elements = getTargets(targets);
  if (!elements.length) return;

  return gsap.fromTo(
    elements,
    { opacity: 0, x },
    {
      opacity: 1,
      x: 0,
      duration,
      stagger,
      ease: 'power2.out',
      clearProps: 'transform',
      scrollTrigger: baseScrollTrigger(trigger, start),
    }
  );
};

export const heroReveal = (
  targets,
  {
    stagger = 0.08,
    y = 20,
    duration = 0.65,
  } = {}
) => {
  const elements = getTargets(targets);
  if (!elements.length) return;

  return gsap.fromTo(
    elements,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power2.out',
      clearProps: 'transform',
    }
  );
};

export const animateCounter = (
  element,
  endValue,
  suffix = '',
  {
    duration = 1.2,
    start = 'top 95%',
    decimals = 0,
  } = {}
) => {
  if (!element || typeof endValue !== 'number') return;

  const obj = { value: 0 };

  return gsap.to(obj, {
    value: endValue,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      const value =
        decimals > 0 ? obj.value.toFixed(decimals) : Math.round(obj.value);
      element.textContent = `${value}${suffix}`;
    },
    scrollTrigger: {
      trigger: element,
      start,
      once: true,
    },
  });
};

export const revealUp = (targets, trigger, stagger = 0.1) => {
  return fadeUp(targets, trigger, { stagger });
};

export const staggerCards = (targets, trigger, stagger = 0.1) => {
  return fadeUp(targets, trigger, {
    stagger,
    y: 20,
    duration: 0.6,
  });
};

export const sectionEnter = (section) => {
  if (!section) return;

  const content = section.querySelectorAll('[data-animate]');
  if (!content.length) return;

  gsap.fromTo(
    content,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 88%',
        once: true,
      },
    }
  );
};

export const refreshAnimations = () => ScrollTrigger.refresh();

export const killAllScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};