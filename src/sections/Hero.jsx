import { useLayoutEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Download, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { personalInfo, stats } from '../data/siteData';
import { heroReveal } from '../utils/animations';

function Counter({ value, suffix }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const obj = { n: 0 };

    gsap.to(obj, {
      n: value,
      duration: 1.2,
      ease: 'power2.out',
      onUpdate: () => {
        if (ref.current) ref.current.textContent = `${Math.round(obj.n)}${suffix}`;
      },
    });
  }, [value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Hero() {
  const heroRef = useRef(null);
  const strengths = ['React / Next.js', 'Django / FastAPI', 'AI workflows'];

  useLayoutEffect(() => {
    heroReveal(heroRef.current?.querySelectorAll('.hero-item'));
  }, []);

  return (
    <section id="home" className="hero-section relative overflow-hidden pb-16 pt-12 sm:pb-24 lg:pt-18">
      <div className="absolute inset-0 grid-pattern" />

      <div className="container-shell relative" ref={heroRef}>
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.78fr]">
          <div className="max-w-3xl">
            <p className="hero-item hero-status">
              <span />
              Available for selected projects
            </p>

            <h1 className="hero-item hero-title mt-4 max-w-3xl text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Building premium web products with code, clarity, and AI.
            </h1>

            <p className="hero-item mt-5 max-w-xl text-base leading-8 text-[var(--muted)]">
              {personalInfo.shortBio}
            </p>

            <div className="hero-item mt-6 flex flex-wrap gap-2">
              {strengths.map((strength) => (
                <span key={strength} className="skill-pill">
                  <CheckCircle2 size={15} />
                  {strength}
                </span>
              ))}
            </div>

            <div className="hero-item mt-7 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View work
                <ArrowRight size={18} />
              </a>

              <a href={personalInfo.resumeLink} download className="btn-secondary">
                Download resume
                <Download size={18} />
              </a>
            </div>

            <div className="hero-item hero-metrics mt-9">
              {stats.map((item) => (
                <div key={item.label} className="metric-card">
                  <span className="metric-value text-2xl font-bold text-[var(--foreground)]">
                    <Counter value={item.value} suffix={item.suffix} />
                  </span>
                  <span className="text-xs font-semibold uppercase text-[var(--muted)]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-item">
            <div className="hero-visual mx-auto max-w-sm lg:ml-auto">
              <div className="hero-portrait-panel">
                <img
                  src={personalInfo.profileImage}
                  alt="Profile"
                  className="relative h-[390px] w-full object-cover object-center sm:h-[520px]"
                />
              </div>

              <div className="hero-code-card" aria-hidden="true">
                <div className="flex items-center justify-between">
                  <span>product.js</span>
                  <Sparkles size={15} />
                </div>
                <pre>{`const craft = {
  ui: 'polished',
  backend: 'reliable',
  ai: 'useful',
  result: 'ship-ready'
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
