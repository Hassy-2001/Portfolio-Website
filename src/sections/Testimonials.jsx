import { testimonials } from '../data/siteData';

export default function Testimonials() {
  return (
    <section className="section-space container-shell" aria-labelledby="testimonials-title" data-section>
      <h2 data-animate id="testimonials-title" className="eyebrow">Kind words</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <figure data-animate key={testimonial.name} className="testimonial">
            <blockquote>“{testimonial.text}”</blockquote>
            <figcaption>
              <img src={testimonial.image} alt="" loading="lazy" width="36" height="36" />
              <div><span>{testimonial.name}</span><p>{testimonial.role}</p></div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
