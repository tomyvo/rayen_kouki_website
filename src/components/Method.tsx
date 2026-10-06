import { site } from '../data/site';
import { Reveal, SectionHeading } from './UI';

export function Method() {
  return <section className="section container method" id="method">
    <SectionHeading eyebrow={site.method.eyebrow} title={site.method.title} description={site.method.description} />
    <div className="method-grid">{site.method.steps.map((step, index) => <Reveal className="method-step" delay={index * .1} key={step.number}><span className="method-number display">{step.number}</span><h3 className="display">{step.title}</h3><p>{step.description}</p></Reveal>)}</div>
  </section>;
}
