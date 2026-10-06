import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { site } from '../data/site';
import { Arrow } from './UI';

export function Navbar() {
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); };
  }, []);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const frame = requestAnimationFrame(() => menu.current?.querySelector<HTMLAnchorElement>('a')?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
      if (event.key === 'Tab') {
        const links = menu.current?.querySelectorAll<HTMLAnchorElement>('a');
        if (!links?.length) return;
        if (!event.shiftKey && document.activeElement === links[links.length - 1]) { event.preventDefault(); toggle.current?.focus(); }
        else if (event.shiftKey && document.activeElement === toggle.current) { event.preventDefault(); links[links.length - 1].focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => { cancelAnimationFrame(frame); document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKey); };
  }, [open]);
  return <>
    <a className="skip-link" href="#main-content">{site.navigation.skipLink}</a>
    <header className={`site-header ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href={site.navigation.homeHref} className="brand" aria-label={site.brand.logoLabel} onClick={() => setOpen(false)}>
          <span className="brand-monogram">{site.brand.monogram}</span><span className="brand-name">{site.brand.name}</span>
        </a>
        <nav className="desktop-nav" aria-label={site.navigation.ariaLabel}>
          {site.nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="btn btn-primary nav-cta" href={site.navigation.cta.href}>{site.navigation.cta.label}</a>
        <button ref={toggle} className="menu-toggle" aria-label={open ? site.navigation.closeLabel : site.navigation.openLabel} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">{open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 8h16M4 16h16" />}</svg>
        </button>
      </div>
      <AnimatePresence>{open && <motion.nav ref={menu} id="mobile-navigation" className="mobile-nav" aria-label={site.navigation.ariaLabel} initial={reduced ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -12 }} transition={{ duration: reduced ? 0 : .2 }}>
        {site.nav.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a className="btn btn-primary" href={site.navigation.cta.href} onClick={() => setOpen(false)}>{site.navigation.cta.label}<Arrow /></a>
      </motion.nav>}</AnimatePresence>
    </header>
  </>;
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setFinePointer(query.matches);
    sync(); query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 30]);
  return <section ref={ref} className="hero" id="top" aria-labelledby="hero-title">
    <motion.img className="hero-image" src={site.images.hero.src} alt={site.images.hero.alt} style={{ y: reduced || !finePointer ? 0 : y, objectPosition: site.images.hero.position }} fetchPriority="high" />
    <div className="container hero-content">
      <motion.p className="eyebrow" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reduced ? 0 : .1 }}><span aria-hidden="true" />{site.hero.eyebrow}</motion.p>
      <h1 id="hero-title">{site.hero.lines.map((line, index) => <motion.span key={line} className={`hero-line ${index === site.hero.accentLineIndex ? 'lime' : ''}`} initial={reduced ? false : { opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .75, delay: reduced ? 0 : .12 + index * .12, ease: [.22, 1, .36, 1] }}>{line}</motion.span>)}</h1>
      <motion.div initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : .6, delay: reduced ? 0 : .5 }}>
        <p className="hero-description">{site.hero.description}</p>
        <div className="hero-actions"><a className="btn btn-primary" href={site.hero.primaryCta.href}>{site.hero.primaryCta.label}<Arrow /></a><a className="btn btn-outline" href={site.hero.secondaryCta.href}>{site.hero.secondaryCta.label}<Arrow /></a></div>
      </motion.div>
    </div>
    <div className="container hero-bottom"><span>{site.hero.index}</span><a href={site.hero.scrollHref}>{site.hero.scrollLabel} ↓</a></div>
  </section>;
}
