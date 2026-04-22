import { useLayoutEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import { testimonials } from '../data/siteData';
import { sectionEnter } from '../utils/animations';

export default function Testimonials() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    sectionEnter(sectionRef.current);
  }, []);

  return (
    <section className="section-space section-shell">
      <div className="section-parallax">
        <div className="section-glow left-[-40px] bottom-10" />
      </div>

      <div className="container-shell relative" ref={sectionRef}>
        <div data-animate>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Clients Say"
            description="A few words from people I’ve worked with."
          />
        </div>

        <div className="section-divider" />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name + testimonial.role}
              data-animate
              className="testimonial-card card flex h-full flex-col p-6 transition duration-500 hover:-translate-y-1"
            >
              <p className="text-sm leading-7 text-[var(--muted)]">“{testimonial.text}”</p>

              <div className="mt-auto flex items-center gap-3 pt-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                  style={{ border: '1px solid var(--border)' }}
                />

                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">{testimonial.name}</p>
                  <p className="text-xs text-[var(--muted)]">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}