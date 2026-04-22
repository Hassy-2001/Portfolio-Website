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
          className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2.5 text-sm text-slate-700 transition hover:-translate-y-1 hover:border-brand-400/50 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
        >
          <span className="transition duration-300 group-hover:scale-110">
            <Icon size={16} />
          </span>
          {label}
        </a>
      ))}
    </div>
  );
}