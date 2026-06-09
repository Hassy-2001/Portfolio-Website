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

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

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
    y = 24,
    duration = 0.78,
  } = {}
) => {
  const elements = getTargets(targets);
  if (!elements.length) return;

  return gsap.timeline({ defaults: { ease: 'power3.out' } }).fromTo(
    elements,
    { opacity: 0, y, filter: 'blur(10px)' },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration,
      stagger,
      clearProps: 'transform,filter',
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

  if (prefersReducedMotion()) {
    section.classList.add('is-visible');
    return;
  }

  const timeline = gsap.timeline({
    defaults: { ease: 'power3.out' },
    scrollTrigger: {
      trigger: section,
      start: 'top 84%',
      once: true,
      onEnter: () => section.classList.add('is-visible'),
    },
  });

  timeline
    .fromTo(
      section,
      {
        opacity: 0.72,
        y: 44,
        scale: 0.985,
        clipPath: 'inset(8% 0% 0% 0% round 18px)',
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        clipPath: 'inset(0% 0% 0% 0% round 0px)',
        duration: 0.75,
        clearProps: 'opacity,transform,clipPath',
      }
    )
    .fromTo(
      content,
      { opacity: 0, y: 34, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.72,
        stagger: 0.1,
        clearProps: 'transform,filter',
      },
      '-=0.4'
    );

  return timeline;
};

export const refreshAnimations = () => ScrollTrigger.refresh();

export const killAllScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
