import { site } from '../data/site';
import { Reveal, SectionHeading } from './UI';

export function Testimonials() {
  return <section className="section container testimonials" id="testimonials">
    <SectionHeading eyebrow={site.testimonialsIntro.eyebrow} title={site.testimonialsIntro.title} description={site.testimonialsIntro.description} />
    <p className="testimonial-notice">{site.testimonialsIntro.notice}</p>
    <div className="testimonial-grid">{site.testimonials.map((item, index) => <Reveal className="testimonial-card" delay={index * .1} key={item.id}>
      <p className="testimonial-label">{item.label}</p><span className="quote-mark" aria-hidden="true">“</span><blockquote>{item.quote}</blockquote><div className="testimonial-person"><span className="testimonial-avatar display" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div><h3>{item.name}</h3><p>{item.goal}</p></div></div>
    </Reveal>)}</div>
  </section>;
}
