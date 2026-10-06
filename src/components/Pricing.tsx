import { useState } from 'react';
import type { PricePackage } from '../data/site';
import { site } from '../data/site';
import { paymentLinks } from '../config/integrations';
import { Arrow, Reveal, SectionHeading } from './UI';
import '../styles/pricing.css';

function getPaymentUrl(value: string): string | undefined {
  if (!value.trim()) return undefined;
  try {
    const url = new URL(value);
    if (url.protocol === 'https:' && !url.username && !url.password) return url.href;
  } catch {
    return undefined;
  }
  return undefined;
}

function Features({ features }: { features: string[] }) {
  return <ul className="pricing-features" aria-label={site.pricingIntro.featuresLabel}>{features.map(feature => <li key={feature}>
    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="m4 10 4 4 8-9" /></svg><span>{feature}</span>
  </li>)}</ul>;
}

export function Pricing({ onSelect }: { onSelect?: (area: string) => void }) {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const digitalPackages = site.pricing.filter(pkg => pkg.paymentKey !== 'privateLesson');
  const privateLesson = site.pricing.find(pkg => pkg.paymentKey === 'privateLesson');

  function selectPackage(pkg: PricePackage) {
    setSelectedPackage(pkg.id);
    onSelect?.(pkg.paymentKey === 'privateLesson' ? 'private-lesson' : pkg.paymentKey);
  }

  function packageCta(pkg: PricePackage) {
    const paymentUrl = getPaymentUrl(paymentLinks[pkg.paymentKey]);
    return <a className={`btn pricing-cta ${pkg.recommended ? 'btn-primary' : 'btn-outline'}`} href={paymentUrl || pkg.href} target={paymentUrl ? '_blank' : undefined} rel={paymentUrl ? 'noopener noreferrer' : undefined} onClick={paymentUrl ? undefined : () => selectPackage(pkg)}>
      {pkg.cta}<Arrow />
    </a>;
  }

  return <section className="section container pricing" id="pricing" aria-label={site.pricingIntro.title.replace('\n', ' ')}>
    <SectionHeading eyebrow={site.pricingIntro.eyebrow} title={site.pricingIntro.title} description={site.pricingIntro.description} centered />
    <div className="pricing-grid">
      {digitalPackages.map((pkg, index) => <Reveal className={`pricing-card ${pkg.recommended ? 'pricing-recommended' : ''}`} key={pkg.id} delay={index * .08}>
        {pkg.recommended && <span className="pricing-badge">{site.pricingIntro.recommendedLabel}</span>}
        <article className="pricing-card-content">
          <h3>{pkg.title}</h3>
          <div className="pricing-price"><span className="display">{pkg.price}</span><span className="pricing-unit">{pkg.unit}</span></div>
          <p className="pricing-description">{pkg.description}</p>
          <Features features={pkg.features} />
          {packageCta(pkg)}
        </article>
      </Reveal>)}
    </div>
    {privateLesson && <Reveal className="pricing-private pricing-card" delay={.1}>
      <article>
        <div className="pricing-private-intro"><h3>{privateLesson.title}</h3><p className="pricing-description">{privateLesson.description}</p></div>
        <Features features={privateLesson.features} />
        <div className="pricing-private-purchase"><div className="pricing-price"><span className="display">{privateLesson.price}</span><span className="pricing-unit">{privateLesson.unit}</span></div>{packageCta(privateLesson)}</div>
      </article>
    </Reveal>}
    <p className="pricing-note">{site.pricingIntro.note}</p>
    <div className="pricing-feedback" role="status" aria-live="polite">{selectedPackage && <p key={selectedPackage}>{site.pricingIntro.demoMessage}</p>}</div>
  </section>;
}
