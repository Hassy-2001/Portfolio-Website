import { useLayoutEffect, useRef } from 'react';
import { Code2, Database, LayoutPanelTop, ServerCog } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { techStack } from '../data/siteData';
import { sectionEnter } from '../utils/animations';

const icons = {
  Languages: Code2,
  Frontend: LayoutPanelTop,
  Backend: ServerCog,
  Databases: Database,
};

export default function TechStack() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    sectionEnter(sectionRef.current);
  }, []);

  return (
    <section id="stack" className="section-space section-shell" style={{ background: 'var(--section-alt)' }}>
      <div className="section-parallax">
        <div className="section-glow right-[-80px] top-16" />
      </div>

      <div className="container-shell relative" ref={sectionRef}>
        <div data-animate>
          <SectionHeading
            eyebrow="Tech Stack"
            title="Technologies I Work With"
            description="A focused stack for modern products and scalable systems."
          />
        </div>

        <div className="section-divider" />

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-4">
          {techStack.map((group) => {
            const Icon = icons[group.group] || Code2;

            return (
              <div
                key={group.group}
                data-animate
                className="stack-card card flex h-full flex-col p-7 transition duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">{group.group}</h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border px-4 py-2 text-sm font-medium"
                      style={{ borderColor: 'var(--border)', background: 'var(--surface-2)', color: 'var(--foreground)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}