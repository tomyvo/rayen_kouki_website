import { MotionConfig } from 'motion/react';
import { useState } from 'react';
import { Navbar, Hero } from './components/HeaderHero';
import { TickerStats } from './components/TickerStats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Guarantee } from './components/Guarantee';
import { Method } from './components/Method';
import { ResultsSlider } from './components/ResultsSlider';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { PrivateLesson } from './components/PrivateLesson';
import { FAQ } from './components/FAQ';
import { FinalCTA, Footer } from './components/Closing';

export default function App() {
  const [selection, setSelection] = useState({ area: '', version: 0 });
  return <MotionConfig reducedMotion="user">
    <Navbar />
    <main id="main-content">
      <Hero />
      <TickerStats />
      <About />
      <Services />
      <Guarantee />
      <Method />
      <ResultsSlider />
      <Testimonials />
      <Pricing onSelect={area => setSelection(current => ({ area, version: current.version + 1 }))} />
      <PrivateLesson selectedArea={selection.area} selectionVersion={selection.version} />
      <FAQ />
      <FinalCTA />
    </main>
    <Footer />
  </MotionConfig>;
}
