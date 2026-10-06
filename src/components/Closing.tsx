import { site } from '../data/site';
import { useEffect, useRef, useState } from 'react';
import { Arrow, Reveal } from './UI';
import '../styles/closing.css';

export function FinalCTA() {
  return <section className="final-cta section" id="final-cta">
    <img src={site.cta.image.src} alt={site.cta.image.alt} style={{ objectPosition: site.cta.image.position }} loading="lazy" width="877" height="565" />
    <Reveal className="container final-cta-content"><p className="eyebrow"><span aria-hidden="true" />{site.cta.eyebrow}</p><h2>{site.cta.title.split('\n').map((line, index) => <span className={`heading-line ${index > 0 ? 'lime' : ''}`} key={line}>{line}</span>)}</h2><p className="final-cta-description">{site.cta.description}</p><div className="hero-actions"><a className="btn btn-primary" href={site.cta.primaryCta.href}>{site.cta.primaryCta.label}<Arrow /></a><a className="btn btn-outline" href={site.cta.secondaryCta.href}>{site.cta.secondaryCta.label}<Arrow /></a></div><a className="final-instagram" href={site.cta.instagramCta.href} target="_blank" rel="noopener noreferrer">{site.cta.instagramCta.label}<Arrow /></a></Reveal>
  </section>;
}

export function Footer() {
  const [legal, setLegal] = useState<'imprint' | 'privacy' | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (legal && !dialog.current?.open) dialog.current?.showModal();
    if (!legal && dialog.current?.open) dialog.current.close();
  }, [legal]);
  return <footer className="site-footer container">
    <div className="footer-grid">
      <div className="footer-brand"><a href={site.navigation.homeHref} className="display">{site.brand.name}</a><p>{site.footer.tagline}</p></div>
      <nav aria-label={site.footer.navigationLabel}><h2>{site.footer.navigationLabel}</h2>{site.nav.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
      <div><h2>{site.footer.socialLabel}</h2><a className="footer-social" href={site.links.instagram} target="_blank" rel="noopener noreferrer">{site.footer.instagramLabel}<Arrow /></a><h2 className="footer-legal-title">{site.footer.legalLabel}</h2><button onClick={() => setLegal('imprint')}>{site.footer.imprint.label}</button><button onClick={() => setLegal('privacy')}>{site.footer.privacy.label}</button></div>
    </div>
    <p className="placeholder-note">{site.footer.legalPlaceholderLabel}</p>
    <div className="footer-bottom"><span>{site.footer.copyright}</span><a href={site.navigation.homeHref}>{site.footer.backToTopLabel}<Arrow /></a></div>
    <dialog ref={dialog} className="legal-dialog" aria-labelledby="legal-title" onCancel={() => setLegal(null)} onClose={() => setLegal(null)} onClick={event => { if (event.target === event.currentTarget) setLegal(null); }}>
      {legal && <div className="legal-dialog-content"><h2 id="legal-title">{site.footer[legal].title}</h2><p>{site.footer[legal].description}</p><button className="btn btn-primary" onClick={() => setLegal(null)}>{site.footer.closeLabel}</button></div>}
    </dialog>
  </footer>;
}
