import { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/siteData';
import { sectionEnter } from '../utils/animations';

export default function Contact() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    sectionEnter(sectionRef.current);
  }, []);

  const emailSubject = encodeURIComponent('Project Inquiry');
  const emailBody = encodeURIComponent('Hi Hassan, I would like to discuss a project with you.');
  const emailLink = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;
  const whatsappLink = `https://wa.me/${personalInfo.whatsapp}`;

  return (
    <section
      id="contact"
      className="section-space section-shell"
      style={{ background: 'var(--section-alt)' }}
    >
      <div className="container-shell relative" ref={sectionRef}>
        <div data-animate>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk."
            description="Available for focused freelance work and product collaborations."
          />
        </div>

        <div data-animate className="contact-panel card">
          <div>
            <p className="contact-kicker">Start a project</p>
            <h3 className="mt-3 text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              Need a clean website, dashboard, backend, or AI workflow?
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Send the idea, timeline, and any reference you like. I will help shape it into a focused build plan.
            </p>
          </div>

          <div className="contact-actions">
            <div className="grid gap-4 md:grid-cols-2">
              <a href={emailLink} className="contact-action-card">
                <div className="contact-action-icon">
                  <i className="fa-solid fa-envelope" />
                </div>

                <div>
                  <p className="contact-action-label">Email</p>
                  <p className="contact-action-value">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="contact-action-card"
              >
                <div className="contact-action-icon">
                  <i className="fa-brands fa-whatsapp" />
                </div>

                <div>
                  <p className="contact-action-label">WhatsApp</p>
                  <p className="contact-action-value">{personalInfo.phone}</p>
                </div>
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a href={emailLink} className="btn-primary">
                Send inquiry
                <ArrowRight size={18} />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>

              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
