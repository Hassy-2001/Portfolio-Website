import { stats } from '../data/siteData';

export default function About() {
  return (
    <section id="about" className="section-space container-shell" data-section>
      <div className="about-layout">
        <div data-animate>
          <p className="eyebrow">About</p>
          <h2 className="section-title">Built with care.</h2>
        </div>
        <div data-animate>
          <p className="about-copy">I build for the people on the other side of the screen. Clear interfaces, dependable systems, and AI with a purpose.</p>
          <dl className="about-stats">
            {stats.slice(0, 2).map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}{stat.suffix}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
