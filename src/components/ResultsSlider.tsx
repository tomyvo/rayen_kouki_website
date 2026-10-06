import { useId, useState } from 'react';
import { site } from '../data/site';
import { Reveal, SectionHeading } from './UI';
import '../styles/results.css';

export function ResultsSlider() {
  const [value, setValue] = useState(50);
  const sliderId = useId();

  return <section className="section container results" id="results" aria-label={site.results.title.replace('\n', ' ')}>
    <SectionHeading eyebrow={site.results.eyebrow} title={site.results.title} description={site.results.description} />
    <div className="results-grid">
      <Reveal className="results-comparison">
        <figure className="results-figure">
          <div className="results-frame">
            <img className="results-image" src={site.results.after.src} alt={site.results.after.alt} style={{ objectPosition: site.results.after.position }} loading="lazy" width="1500" height="1125" />
            <img className="results-image results-before" src={site.results.before.src} alt={site.results.before.alt} loading="lazy" width="1500" height="1125" style={{ clipPath: `inset(0 ${100 - value}% 0 0)`, objectPosition: site.results.before.position }} />
            <span className="results-demo-label">{site.results.placeholderLabel}</span>
            <div className="results-image-labels" aria-hidden="true"><span>{site.results.beforeLabel}</span><span>{site.results.afterLabel}</span></div>
            <div className="results-divider" style={{ left: `${value}%` }} aria-hidden="true" />
            <span className="results-handle" style={{ left: `clamp(24px, ${value}%, calc(100% - 24px))` }} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m8 7-5 5 5 5m8-10 5 5-5 5M3 12h18" /></svg>
            </span>
            <input id={sliderId} className="results-range" type="range" min="0" max="100" step="1" value={value} onChange={event => setValue(Number(event.target.value))} aria-label={site.results.sliderLabel} aria-valuetext={`${site.results.beforeLabel}: ${value}% · ${site.results.afterLabel}: ${100 - value}%`} />
          </div>
          <div className="results-slider-caption"><label htmlFor={sliderId}>{site.results.dragLabel}</label><output htmlFor={sliderId}>{value}%</output></div>
          <figcaption>{site.results.caption}</figcaption>
        </figure>
      </Reveal>
      <div className="results-notes">
        {site.results.notes.map((note, index) => <Reveal className="results-note" key={note.number} delay={index * .08}>
          <span className="results-note-number">{note.number}</span>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
