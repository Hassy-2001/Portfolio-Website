import { useLayoutEffect, useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';
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

  useLayoutEffect(() => {
    heroReveal(heroRef.current?.querySelectorAll('.hero-item'));
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pb-14 pt-14 sm:pb-20 sm:pt-18">
      <div className="absolute inset-0 opacity-30 grid-pattern" />

      <div className="container-shell relative" ref={heroRef}>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <span
              className="hero-item inline-flex rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-300"
              style={{
                borderColor: 'color-mix(in srgb, var(--color-brand-400) 20%, transparent)',
                background: 'color-mix(in srgb, var(--color-brand-500) 10%, transparent)',
              }}
            >
              Available for projects
            </span>

            <h1 className="hero-item mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              {personalInfo.title}
            </h1>

            <p className="hero-item mt-5 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {personalInfo.shortBio}
            </p>

            <div className="hero-item mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Work
                <ArrowRight size={18} />
              </a>

              <a href={personalInfo.resumeLink} download className="btn-secondary">
                Resume
                <Download size={18} />
              </a>
            </div>

            <div className="hero-item mt-8 grid auto-rows-fr gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="card flex h-full flex-col p-5">
                  <p className="text-3xl font-bold text-[var(--foreground)]">
                    <Counter value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-item">
            <div className="mx-auto max-w-md">
              <div className="card relative overflow-hidden p-3">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent" />
                <img
                  src={personalInfo.profileImage}
                  alt="Profile"
                  className="relative h-[340px] w-full rounded-[28px] object-cover sm:h-[420px] lg:h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}