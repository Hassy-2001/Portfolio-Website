import { useLayoutEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/siteData';
import { sectionEnter } from '../utils/animations';

export default function Contact() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    sectionEnter(sectionRef.current);
  }, []);

  const emailLink = `mailto:${personalInfo.email}?subject=Project Inquiry&body=Hi Hassan, I would like to discuss a project with you.`;
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
            title="Let’s connect"
            description="Open to freelance work, collaborations, and building impactful digital products."
          />
        </div>

        <div className="section-divider" />

        <div className="grid gap-6 lg:grid-cols-2">
          <div data-animate className="card p-6 md:p-8">
            <span
              className="inline-flex rounded-full px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-300"
              style={{
                border: '1px solid color-mix(in srgb, var(--color-brand-400) 20%, transparent)',
                background: 'color-mix(in srgb, var(--color-brand-500) 10%, transparent)',
              }}
            >
              Available for projects
            </span>

            <h3 className="mt-5 text-2xl font-semibold text-[var(--foreground)]">
              Reach out directly
            </h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">
              The fastest way to contact me is by email or WhatsApp. You can also connect with me on social platforms.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
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

          <div data-animate className="card p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">
              Contact details
            </h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">
              Click any option below and it will open directly for you.
            </p>

            <div className="mt-6 space-y-4">
              <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=Project Inquiry&body=Hi Hassan, I would like to discuss a project.`}
              target="_blank"
              rel="noreferrer"
              className="contact-action-card"
              >
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

            <div className="mt-6 rounded-2xl border p-4" style={{ borderColor: 'var(--border)', background: 'var(--surface-2)' }}>
              <p className="text-sm font-medium text-[var(--foreground)]">Response Time</p>
              <p className="mt-2 text-sm text-[var(--muted)]">Usually within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}