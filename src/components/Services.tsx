import { useEffect, useState } from 'react';
import type { PointerEvent } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { site } from '../data/site';
import type { CoachingService } from '../data/site';
import { Arrow, Reveal, SectionHeading } from './UI';
import '../styles/services.css';

function ServiceRow({ service, followPointer }: { service: CoachingService; followPointer: boolean }) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 170, damping: 24 });
  const y = useSpring(pointerY, { stiffness: 170, damping: 24 });

  function movePreview(event: PointerEvent<HTMLAnchorElement>) {
    if (!followPointer || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 24);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 20);
  }

  function resetPreview() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return <li className="service-item">
    <a className="service-row" href={service.href} onPointerMove={movePreview} onPointerLeave={resetPreview} onBlur={resetPreview}>
      <span className="service-number">{service.number}</span>
      <div className="service-copy">
        <h3>{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <ul className="service-details">{service.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
      </div>
      <motion.div className="service-preview" style={{ x: followPointer ? x : 0, y: followPointer ? y : 0 }}>
        <img src={service.image.src} alt={service.image.alt} loading="lazy" width="200" height="150" style={{ objectPosition: service.image.position }} />
        <span>{site.servicesIntro.previewLabel}</span>
      </motion.div>
      <span className="service-arrow"><Arrow /></span>
    </a>
  </li>;
}

export function Services() {
  const reducedMotion = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setFinePointer(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return <section className="section services container" id="services" aria-label={site.servicesIntro.title.replace('\n', ' ')}>
    <SectionHeading eyebrow={site.servicesIntro.eyebrow} title={site.servicesIntro.title} description={site.servicesIntro.description} />
    <Reveal>
      <ol className="services-list">
        {site.services.map(service => <ServiceRow key={service.id} service={service} followPointer={finePointer && !reducedMotion} />)}
      </ol>
    </Reveal>
    <div className="training-gallery" aria-label={site.trainingGallery.label}>
      {site.trainingGallery.columns.map((column, columnIndex) => <div className="gallery-column" key={columnIndex}>{column.map((item, index) => <Reveal key={item.caption} delay={index * .08}><figure className={`gallery-figure gallery-${item.kind}`}><div className="gallery-image"><img src={item.image.src} alt={item.image.alt} style={{ objectPosition: item.image.position }} loading="lazy" /></div><figcaption><span className="gallery-index">{String(columnIndex + 1).padStart(2, '0')}</span>{item.caption}</figcaption></figure></Reveal>)}</div>)}
    </div>
  </section>;
}
