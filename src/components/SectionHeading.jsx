export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 sm:mb-12">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-300">{eyebrow}</p>
      <h2 className="section-title mt-3">{title}</h2>
      <p className="section-subtitle">{description}</p>
    </div>
  );
}