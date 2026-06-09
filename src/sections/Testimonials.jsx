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
      <div className="container-shell relative" ref={sectionRef}>
        <div data-animate>
          <SectionHeading
            eyebrow="Testimonials"
            title="Client notes."
            description="Short feedback from recent work."
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name + testimonial.role}
              data-animate
              className="testimonial-card card flex h-full flex-col p-5"
            >
              <p className="text-sm leading-7 text-[var(--muted)]">&ldquo;{testimonial.text}&rdquo;</p>

              <div className="mt-auto flex items-center gap-3 pt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-9 w-9 rounded-md object-cover"
                  style={{ border: '1px solid var(--border)' }}
                />

                <div>
                  <p className="text-sm font-bold text-[var(--foreground)]">{testimonial.name}</p>
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
