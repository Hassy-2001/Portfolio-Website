import { useLayoutEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/siteData';
import { sectionEnter } from '../utils/animations';

export default function Projects() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    sectionEnter(sectionRef.current);
  }, []);

  return (
    <section id="projects" className="section-space section-shell">
      <div className="container-shell relative" ref={sectionRef}>
        <div data-animate>
          <SectionHeading
            eyebrow="Projects"
            title="Selected Work"
            description="A few projects that reflect real-world solutions and product thinking."
          />
        </div>

        <div className="section-divider" />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              data-animate
              className="card group flex h-full flex-col overflow-hidden p-4 transition duration-500 hover:-translate-y-1"
            >
              {/* IMAGE */}
<img
  src={project.image}
  alt={project.title}
  className="h-56 w-full object-cover object-top rounded-xl"
/>

              {/* CONTENT */}
              <div className="flex h-full flex-col pt-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-300">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-semibold leading-tight text-[var(--foreground)]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-auto pt-5">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-brand-400"
                  >
                    Visit Website
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}