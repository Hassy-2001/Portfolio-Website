import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/siteData';

export default function Services() {
  return (
    <section id="services" className="section-space container-shell" data-section>
      <div data-animate><SectionHeading eyebrow="Services" title="How I can help." /></div>
      <div className="service-grid">
        {services.map((service, index) => (
          <a key={service.title} href="#contact" data-animate className="service-item">
            <div className="service-top"><span>0{index + 1}</span><ArrowUpRight size={19} /></div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
