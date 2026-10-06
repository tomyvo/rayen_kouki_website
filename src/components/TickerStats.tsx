import { site } from '../data/site';
import { Reveal } from './UI';

export function TickerStats() {
  return <>
    <div className="ticker">
      <span className="sr-only">{site.ticker.join(', ')}</span>
      <div className="ticker-track" aria-hidden="true">{[0, 1].map(copy => <div className="ticker-copy" key={copy}>{site.ticker.map(word => <span key={word}>{word}<i /></span>)}</div>)}</div>
    </div>
    <section className="stats container" id="stats" aria-label={site.statsNote}>
      <div className="stats-grid">{site.stats.map((stat, index) => <Reveal className="stat" delay={index * .08} key={stat.label}><span className="display stat-value">{stat.value}</span><span className="stat-label">{stat.label}</span></Reveal>)}</div>
      <p className="placeholder-note">{site.statsNote}</p>
    </section>
  </>;
}
