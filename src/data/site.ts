export type SiteImage = {
  src: string;
  alt: string;
  position: string;
};

export type SiteLink = { label: string; href: string };
export type PaymentKey = 'footwork' | 'shooting' | 'nutrition' | 'privateLesson';
export type SiteStat = {
  value: string;
  label: string;
  isPlaceholder: boolean;
};
export type CoachingService = {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  image: SiteImage;
  href: string;
};
export type MethodStep = { number: string; title: string; description: string };
export type Testimonial = {
  id: string;
  name: string;
  goal: string;
  quote: string;
  label: string;
  isPlaceholder: boolean;
};
export type PricePackage = {
  id: string;
  title: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  cta: string;
  recommended: boolean;
  paymentKey: PaymentKey;
  href: string;
};
export type FAQItem = { id: string; question: string; answer: string };

export const rayenImages: Record<'hero' | 'portrait' | 'football' | 'training' | 'community', SiteImage> = {
  hero: {
    src: '/assets/rayen/rayen-football.png',
    alt: 'Rayen Kouki auf dem Fußballplatz, bereit für das Training.',
    position: '50% 41%',
  },
  portrait: {
    src: '/assets/rayen/rayen-portrait.png',
    alt: 'Porträt von Rayen Kouki im schwarzen Trainingsshirt.',
    position: '50% 32%',
  },
  football: {
    src: '/assets/rayen/rayen-football.png',
    alt: 'Rayen Kouki beim Fußballtraining auf dem Sportplatz.',
    position: '50% 48%',
  },
  training: {
    src: '/assets/rayen/rayen-training.png',
    alt: 'Rayen Kouki beim Training.',
    position: '38% 22%',
  },
  community: {
    src: '/assets/rayen/rayen-community.png',
    alt: 'Rayen Kouki mit seiner Fußball-Community.',
    position: '50% 50%',
  },
};

const links = {
  instagram: 'https://www.instagram.com/rayen_k07/',
  privateLesson: '#private-lesson',
  pricing: '#pricing',
};

const navigation: SiteLink[] = [
  { label: 'Über Rayen', href: '#about' },
  { label: 'Leistungen', href: '#services' },
  { label: 'Methode', href: '#method' },
  { label: 'Ergebnisse', href: '#results' },
  { label: 'Pakete', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const site = {
  brand: {
    name: 'Rayen Kouki',
    monogram: 'RK',
    tagline: 'Football. Fitness. Focus.',
    logoLabel: 'Rayen Kouki — zur Startseite',
  },
  seo: {
    title: 'Rayen Kouki — Football, Fitness & persönliches Coaching',
    description: 'Entwickle dein Spiel mit Rayen Kouki. Football Footwork, Shooting, Fitness, Nutrition und individuelle Private Lessons — klarer Fokus, strukturiertes Training.',
    locale: 'de_DE',
    language: 'de',
    image: '/assets/rayen/rayen-football.png',
    imageAlt: 'Rayen Kouki auf dem Fußballplatz.',
  },
  links,
  images: rayenImages,
  nav: navigation,
  navigation: {
    homeHref: '#top',
    cta: { label: 'Private Lesson', href: links.privateLesson },
    openLabel: 'Navigation öffnen',
    closeLabel: 'Navigation schließen',
    ariaLabel: 'Hauptnavigation',
    skipLink: 'Zum Inhalt springen',
  },
  hero: {
    eyebrow: 'RAYEN KOUKI · FOOTBALL & FITNESS COACHING',
    lines: ['DEIN SPIEL.', 'DEIN FOKUS.', 'DEIN LEVEL.'],
    accentLineIndex: 2,
    description: 'Mehr Gefühl am Ball. Mehr Kraft auf dem Platz. Arbeite mit Rayen an deiner Technik, deiner Fitness und den Routinen, die dich weiterbringen.',
    primaryCta: { label: 'Pakete ansehen', href: links.pricing },
    secondaryCta: { label: 'Private Lesson buchen', href: links.privateLesson },
    image: rayenImages.hero,
    badge: 'FOCUS ON YOUR NEXT MOVE',
    imageCaption: 'RAYEN KOUKI / DEIN NÄCHSTER SCHRITT',
    scrollLabel: 'Entdecke das Coaching',
    scrollHref: '#about',
    index: '01 / THE NEXT LEVEL',
  },
  ticker: ['FOOTBALL', 'FITNESS', 'NUTRITION', 'DISCIPLINE', 'PERFORMANCE', 'CONSISTENCY'],
  stats: [
    { value: '100+', label: 'Athleten', isPlaceholder: true },
    { value: '3', label: 'Coaching-Bereiche', isPlaceholder: true },
    { value: '1', label: 'Ziel: bessere Performance', isPlaceholder: true },
  ] satisfies SiteStat[],
  statsNote: 'Vorläufige Werte — noch nicht bestätigt.',
  about: {
    eyebrow: '01 / ÜBER RAYEN',
    title: 'EIN COACH. EIN KLARER PLAN.\nDEIN SPIEL IM FOKUS.',
    description: 'Ich bin Rayen. Fußball, Fitness und eine klare Struktur gehören für mich zusammen. Im Coaching arbeiten wir an den Details, die zu deinem Spiel passen — mit einem Plan, den du im Alltag umsetzen kannst.',
    paragraphs: [
      'Ein guter erster Kontakt beginnt vor der Ballannahme. Ein konzentriertes Training beginnt mit einem klaren Ziel. Deshalb schauen wir zuerst gemeinsam auf deinen Ausgangspunkt.',
      'Von dort aus verbinden wir Technik, körperliche Grundlagen und bewusste Routinen. Persönlich, nachvollziehbar und mit Raum für deine Fragen.',
    ],
    facts: [
      { number: '01', title: 'Technik mit Absicht', description: 'Bewegungen verstehen. Gezielt wiederholen.' },
      { number: '02', title: 'Disziplin im Alltag', description: 'Eine Struktur, die zu dir passt.' },
      { number: '03', title: 'Persönlicher Kontakt', description: 'Direkte Rückmeldung zu deinem Training.' },
    ],
    image: rayenImages.portrait,
    imageCaption: 'RAYEN KOUKI / FOOTBALL & FITNESS',
    cta: { label: 'Rayen auf Instagram', href: links.instagram },
    signature: 'Rayen Kouki',
  },
  servicesIntro: {
    eyebrow: '02 / DAS COACHING',
    title: 'ARBEITE AN\nDEINEM VORTEIL.',
    description: 'Vom ersten Kontakt bis zur letzten Wiederholung. Wähle den Bereich, der zu deinem nächsten Schritt passt.',
    previewLabel: 'Leistung entdecken',
  },
  trainingGallery: {
    label: 'MOMENTE AUF DEM WEG.',
    columns: [
      [{ image: rayenImages.football, caption: 'AUF DEM PLATZ', kind: 'tall' }, { image: rayenImages.community, caption: 'GEMEINSAM TRAINIEREN', kind: 'wide' }],
      [{ image: rayenImages.portrait, caption: 'FOKUS & DISZIPLIN', kind: 'portrait' }],
      [{ image: rayenImages.community, caption: 'DEIN UMFELD. DEIN ANTRIEB.', kind: 'wide' }, { image: rayenImages.football, caption: 'DRANBLEIBEN', kind: 'tall' }],
    ],
  },
  services: [
    {
      id: 'footwork', number: '01', title: 'Football Footwork',
      description: 'Schnelle Füße. Ein ruhiger erster Kontakt. Mehr Kontrolle in engen Räumen.',
      details: ['Ballkontrolle & Koordination', 'Richtungswechsel', 'Übungen zum eigenständigen Training'],
      image: rayenImages.football, href: '#pricing',
    },
    {
      id: 'shooting', number: '02', title: 'Football Shooting',
      description: 'Arbeite an Anlauf, Körperposition und Abschluss — Schritt für Schritt.',
      details: ['Schusstechnik', 'Präzision & Timing', 'Strukturierte Trainingsabläufe'],
      image: rayenImages.football, href: '#pricing',
    },
    {
      id: 'fitness', number: '03', title: 'Fitness Coaching',
      description: 'Baue die körperliche Basis für dein Spiel auf. Mit Fokus auf Kraft und Beweglichkeit.',
      details: ['Athletische Grundlagen', 'Kraft & Mobilität', 'Alltagstaugliche Trainingsstruktur'],
      image: rayenImages.training, href: '#private-lesson',
    },
    {
      id: 'nutrition', number: '04', title: 'Nutrition Coaching',
      description: 'Eine klare Ernährungsstruktur, die dich im Training und im Alltag unterstützt.',
      details: ['Ernährungsgrundlagen', 'Einfache Routinen', 'Praktische Empfehlungen'],
      image: rayenImages.portrait, href: '#pricing',
    },
    {
      id: 'private-lessons', number: '05', title: 'Private Lessons',
      description: 'Eine persönliche Einheit mit Rayen. Dein Ziel bestimmt den Schwerpunkt.',
      details: ['Individueller Schwerpunkt', 'Direktes Feedback', 'Ort & Termin nach Absprache'],
      image: rayenImages.community, href: '#private-lesson',
    },
  ] satisfies CoachingService[],
  guarantee: {
    eyebrow: 'DER ANSPRUCH',
    title: 'MEHR FOKUS.\nMEHR MÖGLICHKEITEN.',
    description: 'Kein Training ohne Richtung. Rayens Ansatz verbindet klare Abläufe, gezielte Übungen und persönliche Betreuung. Den nächsten Schritt gehen wir gemeinsam.',
    note: 'Strukturiertes Coaching. Persönlicher Fokus. Dein Einsatz.',
    cta: { label: 'Deinen Einstieg finden', href: links.pricing },
  },
  method: {
    eyebrow: '03 / DIE METHODE',
    title: 'EIN PLAN.\nDREI SCHRITTE.',
    description: 'Verstehen, aufbauen, nachjustieren. So bekommt jede Trainingseinheit eine klare Aufgabe.',
    steps: [
      { number: '01', title: 'ASSESS', description: 'Wir verstehen deine Ausgangslage und definieren deine Ziele. Was kannst du bereits? Woran möchtest du arbeiten?' },
      { number: '02', title: 'BUILD', description: 'Wir entwickeln einen passenden Fokus für Training, Ernährung und Technik. Du bekommst konkrete Übungen und eine klare Struktur.' },
      { number: '03', title: 'REFINE', description: 'Wir schauen auf deine Entwicklung und passen den Plan an. Kleine Korrekturen sorgen dafür, dass dein Training zu dir passt.' },
    ] satisfies MethodStep[],
  },
  results: {
    eyebrow: '04 / ENTWICKLUNG',
    title: 'FORTSCHRITT\nWIRD SICHTBAR.',
    description: 'Vergleiche zwei Trainingsstände mit dem Regler. Diese neutrale Vorschau zeigt die Funktion — echte, freigegebene Aufnahmen können hier später ergänzt werden.',
    before: { src: '/assets/placeholders/before.svg', alt: 'Neutrale illustrative Platzhaltergrafik für den Ausgangspunkt.', position: '50% 50%' } satisfies SiteImage,
    after: { src: '/assets/placeholders/after.svg', alt: 'Neutrale illustrative Platzhaltergrafik für die Entwicklung.', position: '50% 50%' } satisfies SiteImage,
    beforeLabel: 'AUSGANGSPUNKT',
    afterLabel: 'ENTWICKLUNG',
    sliderLabel: 'Vorher-Nachher-Vergleich verschieben',
    dragLabel: 'ZIEHEN & VERGLEICHEN',
    placeholderLabel: 'DEMO · KEINE ECHTEN ERGEBNISSE',
    caption: 'Lokale Illustrationen. Keine Ergebnis- oder Erfolgsaussage.',
    isPlaceholder: true,
    notes: [
      { number: '01', title: 'Technik beobachten', description: 'Bewegungen bewusst vergleichen.' },
      { number: '02', title: 'Fokus überprüfen', description: 'Am eigenen Ausgangspunkt ansetzen.' },
      { number: '03', title: 'Nächsten Schritt planen', description: 'Aus Beobachtungen konkrete Aufgaben machen.' },
    ],
  },
  testimonialsIntro: {
    eyebrow: '05 / PERSPEKTIVEN',
    title: 'RAUM FÜR\nDEINE ERFAHRUNG.',
    description: 'Hier finden später freigegebene Stimmen aus dem Coaching ihren Platz.',
    notice: 'Die folgenden Karten sind ausdrücklich Beispiele und keine echten Kundenbewertungen.',
  },
  testimonials: [
    { id: 'example-1', name: 'Beispiel Athlet 01', goal: 'Ziel: Ballkontrolle', quote: 'Hier kann eine echte Erfahrung zum Footwork-Training stehen — nach Einwilligung und Freigabe.', label: 'BEISPIEL / PLATZHALTER', isPlaceholder: true },
    { id: 'example-2', name: 'Beispiel Athlet 02', goal: 'Ziel: Abschluss', quote: 'Hier ist Platz für persönliches Feedback zum Shooting-Paket. Noch liegt keine Bewertung vor.', label: 'BEISPIEL / PLATZHALTER', isPlaceholder: true },
    { id: 'example-3', name: 'Beispiel Athlet 03', goal: 'Ziel: Trainingsroutine', quote: 'An dieser Stelle kann eine freigegebene Rückmeldung zur privaten Einheit ergänzt werden.', label: 'BEISPIEL / PLATZHALTER', isPlaceholder: true },
  ] satisfies Testimonial[],
  pricingIntro: {
    eyebrow: '06 / DEIN EINSTIEG',
    title: 'KLEINER SCHRITT.\nKLARER FOKUS.',
    description: 'Ein Schwerpunkt für dein Training. Wähle dein Paket oder plane eine persönliche Einheit mit Rayen.',
    recommendedLabel: 'UNSER FOKUS-PAKET',
    note: 'Vorläufige Pakete und Preise. Zahlungslinks werden vor dem Verkaufsstart ergänzt.',
    demoMessage: 'Der Kauf ist noch nicht freigeschaltet. Frage dein gewünschtes Paket über das Formular an. Im Demo-Modus wird keine Nachricht übermittelt.',
    featuresLabel: 'Im Paket enthalten',
  },
  pricing: [
    {
      id: 'footwork', title: 'Football Footwork', price: '50 €', unit: 'einmalig',
      description: 'Mehr Kontrolle am Ball. Ein klarer Einstieg in dein Footwork-Training.',
      features: ['Trainingsvideos', 'Gezielte Footwork-Übungen', 'Schritt-für-Schritt-Anleitungen', 'Training in deinem eigenen Tempo'],
      cta: 'Footwork auswählen', recommended: false, paymentKey: 'footwork', href: '#private-lesson',
    },
    {
      id: 'shooting', title: 'Football Shooting', price: '50 €', unit: 'einmalig',
      description: 'Ein bewusster Ablauf für deinen Abschluss. Von der Vorbereitung bis zum Kontakt.',
      features: ['Technikübungen', 'Schussabläufe erklärt', 'Strukturierter Trainingsplan', 'Übungen zum Wiederholen'],
      cta: 'Shooting auswählen', recommended: true, paymentKey: 'shooting', href: '#private-lesson',
    },
    {
      id: 'nutrition', title: 'Nutrition Basics', price: '40 €', unit: 'einmalig',
      description: 'Grundlagen verstehen und eine einfache Struktur für deinen Alltag entwickeln.',
      features: ['Grundlagen der Ernährung', 'Einfache Ernährungsstruktur', 'Praktische Empfehlungen', 'Impulse für deine Routine'],
      cta: 'Nutrition auswählen', recommended: false, paymentKey: 'nutrition', href: '#private-lesson',
    },
    {
      id: 'private-lesson', title: 'Private Lesson', price: 'Individuell', unit: 'nach Absprache',
      description: 'Ein persönliches Treffen mit Rayen. Dein Schwerpunkt, direktes Feedback.',
      features: ['Persönliche Trainingseinheit', 'Individueller Schwerpunkt', 'Direkte Rückmeldung', 'Termin & Ort nach Absprache'],
      cta: 'Lesson anfragen', recommended: false, paymentKey: 'privateLesson', href: '#private-lesson',
    },
  ] satisfies PricePackage[],
  lesson: {
    eyebrow: '07 / PRIVATE LESSON',
    title: 'DEIN TRAINING.\nGANZ PERSÖNLICH.',
    description: 'Erzähl Rayen, woran du arbeiten möchtest. So lässt sich eine Einheit planen, die deinen Schwerpunkt trifft.',
    image: rayenImages.training,
    formTitle: 'LASS UNS DEINEN PLAN FINDEN.',
    formDescription: 'Das Formular ist eine Vorschau. Deine Angaben werden geprüft; es wird keine Nachricht versendet. Für eine echte Anfrage kontaktiere Rayen auf Instagram.',
    fields: {
      name: { label: 'Name', placeholder: 'Dein Name', required: true },
      email: { label: 'E-Mail', placeholder: 'du@beispiel.de', required: true },
      phone: { label: 'Telefonnummer', placeholder: '+49 …', required: false },
      area: { label: 'Gewünschter Bereich', placeholder: 'Bereich auswählen', required: true },
      timeframe: { label: 'Bevorzugter Zeitraum', placeholder: 'Zum Beispiel: nächste Woche, nachmittags', required: true },
      message: { label: 'Nachricht', placeholder: 'Dein Ziel, dein aktueller Stand, deine Fragen …', required: true },
    },
    areas: [
      { value: 'footwork', label: 'Football Footwork' },
      { value: 'shooting', label: 'Football Shooting' },
      { value: 'fitness', label: 'Fitness Coaching' },
      { value: 'nutrition', label: 'Nutrition Coaching' },
      { value: 'private-lesson', label: 'Private Lesson' },
    ],
    submitLabel: 'Anfrage senden',
    submittingLabel: 'Anfrage wird geprüft …',
    requiredLabel: 'Pflichtfeld',
    optionalLabel: 'optional',
    privacyNote: 'Im Demo-Modus bleiben deine Angaben in dieser Sitzung. Bei einer eingerichteten Integration werden sie zur Bearbeitung deiner Anfrage an den konfigurierten Empfänger übermittelt.',
    demoTitle: 'DEMO ERFOLGREICH.',
    demoMessage: 'Deine Eingaben sind gültig. Es wurde keine Nachricht übermittelt und keine Buchung angelegt. Für Kontakt öffne Rayens Instagram-Profil.',
    successTitle: 'ANFRAGE GESENDET.',
    successMessage: 'Deine Anfrage wurde an die konfigurierte Integration übermittelt. Eine Buchung ist damit noch nicht bestätigt.',
    resetLabel: 'Neue Anfrage vorbereiten',
    instagramCta: { label: 'Kontakt auf Instagram', href: links.instagram },
    errors: {
      name: 'Bitte gib deinen Namen ein.',
      email: 'Bitte gib eine gültige E-Mail-Adresse ein.',
      phone: 'Bitte prüfe deine Telefonnummer.',
      area: 'Bitte wähle einen Coaching-Bereich aus.',
      timeframe: 'Bitte nenne deinen bevorzugten Zeitraum.',
      message: 'Bitte beschreibe kurz deinen Trainingswunsch.',
      invalidWebhook: 'Die Integration ist noch nicht korrekt eingerichtet. Es wurde keine Nachricht übermittelt.',
      network: 'Die Anfrage konnte nicht übermittelt werden. Bitte versuche es später erneut oder kontaktiere Rayen auf Instagram.',
      validationSummary: 'Bitte prüfe die markierten Felder.',
    },
  },
  faqIntro: {
    eyebrow: '08 / GUT ZU WISSEN',
    title: 'KLARE FRAGEN.\nKLARE ANTWORTEN.',
    description: 'Dein Einstieg soll einfach sein. Hier findest du die wichtigsten Informationen.',
  },
  faq: [
    { id: 'suitable', question: 'Für wen sind die Pakete geeignet?', answer: 'Die Pakete richten sich an Menschen, die gezielt an Fußballtechnik oder ihrer Trainingsroutine arbeiten möchten. Wenn du unsicher bist, welcher Schwerpunkt zu dir passt, kontaktiere Rayen vorab auf Instagram.' },
    { id: 'access', question: 'Bekomme ich sofort Zugriff auf die Videos?', answer: 'Der Verkauf und die automatische Bereitstellung sind in dieser Vorschau noch nicht eingerichtet. Sobald die Pakete freigeschaltet sind, werden die konkreten Informationen zu Kauf und Zugriff hier ergänzt.' },
    { id: 'lesson', question: 'Wie läuft eine private Lesson ab?', answer: 'Zuerst besprichst du mit Rayen dein Ziel und deinen aktuellen Stand. Danach stimmt ihr Schwerpunkt, Ort, Termin und Preis ab. Eine Anfrage allein ist noch keine bestätigte Buchung.' },
    { id: 'combine', question: 'Kann ich mehrere Pakete kombinieren?', answer: 'Footwork, Shooting und Ernährungsgrundlagen können sich sinnvoll ergänzen. Sprich mit Rayen darüber, welche Kombination zu deinem Training passt. Paketkombinationen und Konditionen werden individuell geklärt.' },
    { id: 'contact', question: 'Wie funktioniert die Kontaktaufnahme?', answer: 'Du kannst Rayens Instagram-Profil öffnen und dort Kontakt aufnehmen. Das Formular ist aktuell eine Vorschau und sendet keine Nachrichten.' },
    { id: 'plan', question: 'Kann ich einen individuellen Trainingsplan erhalten?', answer: 'Ein individueller Schwerpunkt kann im persönlichen Coaching besprochen werden. Umfang, Ablauf und Preis klärst du vorab mit Rayen, damit die Betreuung zu deinem Ziel passt.' },
  ] satisfies FAQItem[],
  cta: {
    eyebrow: 'DER NÄCHSTE SCHRITT GEHÖRT DIR.',
    title: 'BEREIT FÜR\nDEIN NÄCHSTES LEVEL?',
    description: 'Mach aus deinem Ziel einen Plan. Finde deinen Einstieg und starte mit einem klaren Fokus.',
    primaryCta: { label: 'Pakete ansehen', href: links.pricing },
    secondaryCta: { label: 'Private Lesson anfragen', href: links.privateLesson },
    instagramCta: { label: 'Instagram öffnen', href: links.instagram },
    image: rayenImages.community,
  },
  footer: {
    tagline: 'DEIN SPIEL. DEIN FOKUS. DEIN LEVEL.',
    navigationLabel: 'Entdecken',
    socialLabel: 'Verbinde dich',
    instagramLabel: 'Instagram',
    legalLabel: 'Rechtliches',
    copyright: `© ${new Date().getFullYear()} Rayen Kouki.`,
    backToTopLabel: 'Zurück nach oben',
    imprint: {
      label: 'Impressum',
      title: 'Impressum — Platzhalter',
      description: 'Die erforderlichen Anbieterangaben werden vor der Veröffentlichung ergänzt. Diese Website ist eine Entwicklungsvorschau.',
    },
    privacy: {
      label: 'Datenschutz',
      title: 'Datenschutz — Platzhalter',
      description: 'Eine vollständige Datenschutzerklärung wird vor der Veröffentlichung ergänzt. Das Formular übermittelt ohne konfigurierte Integration keine Daten. Externe Instagram-Links öffnen das Angebot von Instagram.',
    },
    legalPlaceholderLabel: 'Rechtliche Angaben noch nicht vollständig.',
    closeLabel: 'Schließen',
  },
};

export type SiteContent = typeof site;
