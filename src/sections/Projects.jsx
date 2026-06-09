import { useLayoutEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/siteData';
import { sectionEnter } from '../utils/animations';

export default function Projects() {
  const sectionRef = useRef(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);
  const hiddenProjectCount = Math.max(projects.length - visibleProjects.length, 0);

  useLayoutEffect(() => {
    sectionEnter(sectionRef.current);
  }, []);

  return (
    <section id="projects" className="section-space section-shell">
      <div className="container-shell relative" ref={sectionRef}>
        <div data-animate>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work."
            description="A few recent products and interface experiments."
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              data-animate
              className="project-card card group overflow-hidden p-2 transition duration-500 hover:-translate-y-1"
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="project-image-wrap block overflow-hidden rounded-md"
                aria-label={`Visit ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-overlay">
                  <div>
                    <p className="project-category">{project.category}</p>
                    <h3 className="mt-2 text-xl font-bold leading-tight text-[var(--foreground)]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.description}</p>
                  </div>

                  <span className="project-arrow">
                    <ExternalLink size={16} />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>

        {projects.length > 3 && (
          <div data-animate className="mt-7 flex justify-center">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setShowAllProjects((current) => !current)}
              aria-expanded={showAllProjects}
            >
              {showAllProjects ? 'Show less' : `See more (${hiddenProjectCount})`}
              {showAllProjects ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
