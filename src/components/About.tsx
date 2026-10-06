import { site } from '../data/site';
import { Arrow, Reveal, SectionHeading } from './UI';

export function About() {
  return <section className="section about container" id="about">
    <SectionHeading eyebrow={site.about.eyebrow} title={site.about.title} />
    <div className="about-grid">
      <Reveal className="about-portrait"><img src={site.about.image.src} alt={site.about.image.alt} loading="lazy" width="362" height="807" style={{ objectPosition: site.about.image.position }} /><span className="photo-caption">{site.about.imageCaption}</span></Reveal>
      <Reveal className="about-copy" delay={.1}>
        <p className="about-lead">{site.about.description}</p>
        {site.about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <div className="about-facts">{site.about.facts.map(fact => <div className="about-fact" key={fact.number}><span className="lime">{fact.number}</span><div><h3>{fact.title}</h3><p>{fact.description}</p></div></div>)}</div>
        <a className="btn btn-outline" href={site.about.cta.href} target="_blank" rel="noopener noreferrer">{site.about.cta.label}<Arrow /></a>
      </Reveal>
    </div>
  </section>;
}
