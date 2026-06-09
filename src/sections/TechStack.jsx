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
      <div className="container-shell relative" ref={sectionRef}>
        <div data-animate>
          <SectionHeading
            eyebrow="Tech Stack"
            title="Focused tools."
            description="A compact stack for full-stack product development."
          />
        </div>

        <div className="stack-grid">
          {techStack.map((group) => {
            const Icon = icons[group.group] || Code2;

            return (
              <div
                key={group.group}
                data-animate
                className="stack-card card"
              >
                <div className="icon-frame">
                  <Icon size={19} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--foreground)]">{group.group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="tech-chip">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
