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
      <div className="section-parallax">
        <div className="section-glow right-[10%] bottom-0" />
      </div>

      <div className="container-shell relative" ref={sectionRef}>
        <div data-animate>
          <SectionHeading
            eyebrow="Services"
            title="What I Do"
            description="Focused services built for performance, scale, and user experience."
          />
        </div>

        <div className="section-divider" />

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={service.title}
                data-animate
                className="service-card card flex h-full flex-col p-7 transition duration-500 hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-300">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}