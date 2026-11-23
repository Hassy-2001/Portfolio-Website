import { ArrowUpRight, ChevronDown, Folder, FolderOpen } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/siteData';

const folders = ['E-commerce', 'AI & Chatbots', 'Web Apps', 'UI/UX & Landing Pages'];

export default function Projects() {
  return (
    <section id="projects" className="section-space container-shell" data-section>
      <div data-animate className="section-heading-row">
        <SectionHeading eyebrow="Portfolio" title="Selected work." />
        <span className="section-note">Explore by category</span>
      </div>
      <div className="project-folders">
        {folders.map((folder) => {
          const items = projects.filter((project) => project.folder === folder);

          return (
            <details key={folder} className="project-folder" onToggle={() => ScrollTrigger.refresh()}>
              <summary className="folder-summary">
                <span className="folder-icon" aria-hidden="true">
                  <Folder className="folder-closed-icon" size={23} strokeWidth={1.5} />
                  <FolderOpen className="folder-open-icon" size={23} strokeWidth={1.5} />
                </span>
                <h3>{folder}</h3>
                <span className="folder-count">{items.length} {items.length === 1 ? 'project' : 'projects'}</span>
                <ChevronDown className="folder-chevron" size={18} aria-hidden="true" />
              </summary>
              <div className="project-grid folder-content">
                {items.length === 0 && <p className="folder-empty">No projects added yet.</p>}
                {items.map((project, index) => (
                  <article key={project.title} className="project-card">
                    <a href={project.liveLink} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
                      <div className="project-image-wrap">
                        <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="project-image" width="960" height="640" />
                        <span className="project-visit" aria-hidden="true"><ArrowUpRight size={19} /></span>
                      </div>
                      <div className="project-caption">
                        <div className="project-name"><span className="project-number">{String(index + 1).padStart(2, '0')}</span><h4>{project.title}</h4></div>
                        <p>{project.category}</p>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
