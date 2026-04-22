import { personalInfo } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="py-8" style={{ borderTop: `1px solid var(--border)` }}>
      <div className="container-shell text-center">
        <p className="text-sm text-[var(--muted)]">
          © 2024 {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}