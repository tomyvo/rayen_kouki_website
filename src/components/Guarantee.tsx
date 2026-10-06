import { site } from '../data/site';
import { Arrow, Reveal } from './UI';

export function Guarantee() {
  return <section className="guarantee section" id="guarantee"><Reveal className="container guarantee-inner">
    <div><p className="eyebrow"><span aria-hidden="true" />{site.guarantee.eyebrow}</p><h2>{site.guarantee.title.split('\n').map(line => <span className="heading-line" key={line}>{line}</span>)}</h2></div>
    <div className="guarantee-copy"><p>{site.guarantee.description}</p><p className="guarantee-note">{site.guarantee.note}</p><a className="btn btn-dark" href={site.guarantee.cta.href}>{site.guarantee.cta.label}<Arrow /></a></div>
  </Reveal></section>;
}
