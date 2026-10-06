import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

export function Arrow() {
  return <svg className="arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg>;
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function SectionHeading({ eyebrow, title, accent, description, centered = false }: { eyebrow: string; title: string; accent?: string; description?: string; centered?: boolean }) {
  const lines = title.split('\n');
  return <Reveal className={`section-heading ${centered ? 'centered' : ''}`}>
    <p className="eyebrow"><span aria-hidden="true" />{eyebrow}</p>
    <h2>{lines.map((line, index) => <span className={index === lines.length - 1 && lines.length > 1 ? 'heading-line lime' : 'heading-line'} key={line}>{line}</span>)}{accent && <span className="heading-line lime">{accent}</span>}</h2>
    {description && <p className="section-description">{description}</p>}
  </Reveal>;
}
