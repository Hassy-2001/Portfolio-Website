import { useLayoutEffect, useRef } from 'react';
import { MonitorSmartphone, ServerCog, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/siteData';
import { sectionEnter } from '../utils/animations';

const icons = [MonitorSmartphone, ServerCog, Sparkles];

export default function Services() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    sectionEnter(sectionRef.current);
  }, []);

  return (
    <section id="services" className="section-space section-shell" style={{ background: 'var(--section-alt)' }}>
      <div className="container-shell relative" ref={sectionRef}>
        <div data-animate>
          <SectionHeading
            eyebrow="Services"
            title="Services."
            description="Simple, focused help across product development."
          />
        </div>

        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={service.title}
                data-animate
                className="service-card card"
              >
                <div className="icon-frame">
                  <Icon size={19} />
                </div>
                <p className="service-index">0{index + 1}</p>
                <h3 className="mt-5 text-xl font-bold text-[var(--foreground)]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
