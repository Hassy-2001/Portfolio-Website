import SectionHeading from '../components/SectionHeading';
import { techStack } from '../data/siteData';

export default function TechStack() {
  return (
    <section id="stack" className="section-space container-shell" data-section>
      <div data-animate><SectionHeading eyebrow="Toolkit" title="My stack." /></div>
      <dl className="stack-list">
        {techStack.map((group) => (
          <div data-animate key={group.group} className="stack-row">
            <dt>{group.group}</dt>
            <dd>{group.items.map((item) => <span key={item} className="tech-chip">{item}</span>)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
