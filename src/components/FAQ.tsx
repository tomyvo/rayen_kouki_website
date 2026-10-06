import { useState } from 'react';
import { site } from '../data/site';
import { Reveal, SectionHeading } from './UI';
import '../styles/faq.css';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  return <section className="section container faq" id="faq">
    <SectionHeading eyebrow={site.faqIntro.eyebrow} title={site.faqIntro.title} description={site.faqIntro.description} />
    <Reveal className="faq-list">{site.faq.map((item, index) => {
      const open = openId === item.id;
      return <div className={`faq-item ${open ? 'open' : ''}`} key={item.id}>
        <h3><button id={`faq-question-${item.id}`} aria-expanded={open} aria-controls={`faq-answer-${item.id}`} onClick={() => setOpenId(open ? null : item.id)}><span className="faq-number">{String(index + 1).padStart(2, '0')}</span><span>{item.question}</span><svg width="18" height="18" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="M3 10h14M10 3v14" /></svg></button></h3>
        <div id={`faq-answer-${item.id}`} className="faq-panel" role="region" aria-labelledby={`faq-question-${item.id}`} aria-hidden={!open}><div><p>{item.answer}</p></div></div>
      </div>;
    })}</Reveal>
  </section>;
}
