export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-7 max-w-2xl sm:mb-8">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-3">{title}</h2>
      <p className="section-subtitle">{description}</p>
    </div>
  );
}
