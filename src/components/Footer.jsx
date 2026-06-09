import { personalInfo } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="relative z-10 py-8" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-shell flex flex-col gap-3 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-[var(--foreground)]">{personalInfo.name}</p>
        <p>&copy; 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
