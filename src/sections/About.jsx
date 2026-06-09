import { createElement, useLayoutEffect, useRef } from 'react';
import { Layers3, Zap, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { sectionEnter } from '../utils/animations';

const highlights = [
  { icon: Layers3, title: 'Product structure', text: 'Clean frontend and backend foundations that are easy to grow.' },
  { icon: Zap, title: 'Fast delivery', text: 'Focused builds with responsive interfaces and sensible technical decisions.' },
  { icon: Sparkles, title: 'User clarity', text: 'Simple flows, polished details, and AI where it genuinely improves the product.' },
];

export default function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    sectionEnter(sectionRef.current);
  }, []);

  return (
    <section id="about" className="section-space section-shell">
      <div className="container-shell relative" ref={sectionRef}>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div data-animate>
            <SectionHeading
              eyebrow="About"
              title="Clean product engineering."
              description="I build web products with clear interfaces, reliable architecture, and practical AI where it helps."
            />
          </div>

          <div className="feature-grid">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                data-animate
                className="feature-card card"
              >
                <div className="icon-frame">
                  {createElement(Icon, { size: 17 })}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
