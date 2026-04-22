import { useLayoutEffect, useRef } from 'react';
import { Layers3, Zap, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { sectionEnter } from '../utils/animations';

const highlights = [
  { icon: Layers3, title: 'Clean Structure', text: 'Scalable and maintainable systems.' },
  { icon: Zap, title: 'Performance First', text: 'Fast, responsive, and smooth.' },
  { icon: Sparkles, title: 'Modern Experience', text: 'Minimal, polished, and user-focused.' },
];

export default function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    sectionEnter(sectionRef.current);
  }, []);

  return (
    <section id="about" className="section-space section-shell">
      <div className="section-parallax">
        <div className="section-glow left-[-60px] top-10" />
      </div>

      <div className="container-shell relative" ref={sectionRef}>
        <div data-animate>
          <SectionHeading
            eyebrow="About"
            title="Minimal. Modern. Reliable."
            description="I build digital products with clean structure, strong performance, and refined user experience."
          />
        </div>

        <div className="section-divider" />

        <div className="card p-7 md:p-8" data-animate>
          <div className="max-w-3xl">
            <span
              className="inline-flex rounded-full px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-300"
              style={{
                border: '1px solid color-mix(in srgb, var(--color-brand-400) 20%, transparent)',
                background: 'color-mix(in srgb, var(--color-brand-500) 10%, transparent)',
              }}
            >
              About my work
            </span>

            <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
              I create modern digital products with thoughtful design, scalable architecture,
              and a strong focus on usability, speed, and long-term value.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                data-animate
                className="rounded-2xl border p-4 transition duration-300 hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border)', background: 'var(--surface-2)' }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                    <Icon size={17} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[var(--foreground)] sm:text-base">{title}</h3>
                    <p className="mt-1 text-xs leading-6 text-[var(--muted)] sm:text-sm">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}