import { createElement } from 'react';
import { Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function SocialButtons() {
  const items = [
    { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Call', href: `tel:${personalInfo.phone}` },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {items.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          className="group inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-bold transition hover:-translate-y-1"
          style={{ borderColor: 'var(--border)', background: 'var(--surface-2)', color: 'var(--foreground)' }}
        >
          <span className="transition duration-300 group-hover:scale-110">
            {createElement(Icon, { size: 16 })}
          </span>
          {label}
        </a>
      ))}
    </div>
  );
}
