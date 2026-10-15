import { useLayoutEffect, useState } from 'react';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/siteData';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, [showAll]);

  return (
    <section id="projects" className="section-space container-shell" data-section>
      <div data-animate className="section-heading-row">
        <SectionHeading eyebrow="Portfolio" title="Selected work." />
        <span className="section-note">A few things I’ve built</span>
      </div>
      <div id="project-grid" className="project-grid">
        {visibleProjects.map((project, index) => (
          <article key={project.title} className="project-card">
            <a href={project.liveLink} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
              <div className="project-image-wrap">
                <img src={project.image} alt={`${project.title} website preview`} loading="lazy" className="project-image" width="960" height="640" />
                <span className="project-visit" aria-hidden="true"><ArrowUpRight size={19} /></span>
              </div>
              <div className="project-caption">
                <div className="project-name"><span className="project-number">{String(index + 1).padStart(2, '0')}</span><h3>{project.title}</h3></div>
                <p>{project.category}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
      {projects.length > 4 && (
        <div className="projects-more">
          <button type="button" className="text-link" aria-controls="project-grid" aria-expanded={showAll} onClick={() => setShowAll((value) => !value)}>
            {showAll ? 'Show less' : `More work (${projects.length - 4})`}
            {showAll ? <Minus size={16} /> : <Plus size={16} />}
          </button>
        </div>
      )}
    </section>
  );
}
