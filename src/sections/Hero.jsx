import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function Hero() {
  return (
    <section id="home" className="hero-section container-shell">
      <div className="hero-layout">
        <div className="hero-copy">
          <p data-hero className="eyebrow">Hassan Ghani <span className="eyebrow-divider">/</span> Developer</p>
          <h1 data-hero>Thoughtful code.<br /><span>Useful products.</span></h1>
          <p data-hero className="hero-description">{personalInfo.shortBio}</p>
          <div data-hero className="hero-actions">
            <a href="#projects" className="btn-primary">Explore work <ArrowUpRight size={17} /></a>
            <a href={personalInfo.resumeLink} download className="text-link">Resume <Download size={16} /></a>
          </div>
        </div>
        <figure data-hero className="hero-portrait">
          <img src={personalInfo.profileImage} alt="Hassan Ghani" width="560" height="680" fetchPriority="high" />
          <figcaption><span className="status-dot" /> Available for select projects</figcaption>
        </figure>
      </div>
      <div data-hero className="hero-bottom">
        <p>Interfaces. Systems. Intelligence.</p>
        <a href="#projects" aria-label="Scroll to selected work"><ArrowDown size={18} /></a>
      </div>
    </section>
  );
}
