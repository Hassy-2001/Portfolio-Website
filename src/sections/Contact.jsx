import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function Contact() {
  const emailLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent('Project Inquiry')}`;
  return (
    <section id="contact" className="section-space container-shell contact-section" data-section>
      <div data-animate className="contact-layout">
        <div>
          <p className="eyebrow"><span className="status-dot" /> Open to collaborations</p>
          <h2>Have something<br /><span>in mind?</span></h2>
        </div>
        <a href={emailLink} className="contact-cta" aria-label="Email Hassan about a project"><ArrowUpRight /></a>
      </div>
      <div data-animate className="contact-bottom">
        <a href={emailLink} className="contact-email">{personalInfo.email}</a>
        <div className="social-links">
          <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14} /></a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </section>
  );
}
