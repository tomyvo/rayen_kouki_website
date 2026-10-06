# Rayen Kouki — Coaching-Website

Eigenständige deutsche One-Page-Website für Fußball-Coaching, Fitness, Ernährungsgrundlagen und persönliche Private Lessons. Die Umsetzung verwendet React, Vite, TypeScript, eigenes CSS und Motion. Anton und Inter werden über lokale Fontsource-Pakete ausgeliefert; es gibt keine Font-CDN-Abhängigkeit. Die erste Version ist ein statisches Frontend ohne eigenes Backend.

Texte, Preise, Links, Bilder und Platzhalter liegen zentral in [`src/data/site.ts`](src/data/site.ts). Die visuellen Entscheidungen und Grenzen der Referenzprüfung beschreibt [`VISUAL_SPEC.md`](VISUAL_SPEC.md). Die ursprünglichen Anforderungen und neun Original-Screenshots bleiben unter [`Rayen_kouki_project/`](Rayen_kouki_project/) erhalten.

## Datei-Vorschau ohne Entwicklungsserver

`index.html` ist der Vite-Einstieg und benötigt den Entwicklungsserver oder einen ausgelieferten Produktionsbuild. Eine Dateivorschau kann `/src/main.tsx` nicht direkt ausführen und zeigt dann keinen Seiteninhalt.

Für eine direkt öffnende Demo:

```bash
npm run build:demo
```

Die erzeugte `demo.html` in der Projektwurzel enthält den gebauten React-Code, CSS, Schriftdateien und Bilder in einer Datei. Sie ist zusammen mit dem Quellcode enthalten und lässt sich herunterladen und direkt im Browser öffnen; ein Server ist dafür nicht erforderlich. Vorgerenderter Inhalt hält die Seite auch in Dateivorschauen ohne JavaScript sichtbar; Menü, FAQ, Regler und Formular benötigen JavaScript. Sie ist eine generierte Vorschau und wird nach Inhaltsänderungen erneut gebaut. Die normale Cloudflare-Ausgabe bleibt `dist`.

Die Projektdateien werden zunächst in der Cloud-Arbeitskopie geändert. Ein Commit oder Push zu GitHub ist ein separater Schritt; lokale Änderungen erscheinen dort erst nach dem Push.

## Installation und lokale Entwicklung

Die Cloud-Umgebung stellt Node.js `24.19.0` und npm `11.9.0` bereit. Die Datei [`.node-version`](.node-version) pinnt Node auf `24.19.0`; `package.json` nennt `npm@11.9.0` als `packageManager` und Node `>=22.12.0` als Mindestversion unter `engines`. Für wiederholbare Entwicklung den gepinnten Stand verwenden. Alle folgenden Befehle werden in der Repository-Wurzel ausgeführt, in der sich `package.json` befindet:

```bash
npm ci
npm run dev -- --host 0.0.0.0
```

Der Entwicklungsserver verwendet standardmäßig Port `5173`. In einer Cloud-Umgebung die Vorschau beziehungsweise Portfreigabe für diesen Port öffnen. Bei lokalem Start ist die Seite unter `http://localhost:5173` erreichbar. `npm ci` verwendet das vorhandene `package-lock.json`; es ist kein Gerüst-Generator und kein zweites Projekt erforderlich.

Falls der standardmäßige npm-Cache in einer eingeschränkten Cloud-Umgebung nicht beschreibbar ist, kann ein Cache unter dem freigegebenen Workspace verwendet werden:

```bash
npm ci --cache /workspace/.cache/npm
```

Der alternative Cache ändert weder Registry noch Paketprüfung. Den Installationsbefehl weiterhin in der Repository-Wurzel ausführen.

```bash
npm run typecheck
npm run build
```

`npm run build` prüft TypeScript und erstellt anschließend die statische Website im Ordner `dist`. Ein bereits erzeugter Build lässt sich separat ansehen:

```bash
npm run preview -- --host 0.0.0.0
```

Die Build-Vorschau verwendet standardmäßig Port `4173`. Entwicklungsserver mit `Ctrl+C` beenden. Die vorhandene Cloud-Arbeitskopie kann direkt genutzt werden; für diese Aufgaben ist kein zusätzlicher Git-Worktree nötig.

## Die wichtigsten Dateien

| Datei / Ordner | Aufgabe |
| --- | --- |
| [`src/data/site.ts`](src/data/site.ts) | Zentrale Texte, Navigationsziele, Bildpfade und Ausschnitte, Preise, Statistiken, Testimonials, SEO und rechtliche Platzhalter |
| [`src/config/integrations.ts`](src/config/integrations.ts) | Öffentliche Zahlungslinks, optionaler HTTPS-Anfrage-Endpunkt und `submitLesson` |
| [`src/App.tsx`](src/App.tsx) | Reihenfolge der Abschnitte und gemeinsame Motion-Konfiguration |
| [`src/main.tsx`](src/main.tsx) | React-Einstieg, lokal ausgelieferte Schriftdateien und globale Styles |
| [`src/components/HeaderHero.tsx`](src/components/HeaderHero.tsx) | Navigation, mobiles Menü und Hero |
| [`src/components/TickerStats.tsx`](src/components/TickerStats.tsx) | Lauftext und vorläufige Statistiken |
| [`src/components/About.tsx`](src/components/About.tsx) | Vorstellung, Bild und Coaching-Fakten |
| [`src/components/Services.tsx`](src/components/Services.tsx) | Leistungszeilen, Bildvorschau, Touch-/Fokuszustände und versetzte Rayen-Trainingsgalerie |
| [`src/components/Guarantee.tsx`](src/components/Guarantee.tsx) | Lime-Band mit dem Betreuungsanspruch |
| [`src/components/Method.tsx`](src/components/Method.tsx) | Assess, Build und Refine |
| [`src/components/ResultsSlider.tsx`](src/components/ResultsSlider.tsx) | Zugänglicher Vorher-/Nachher-Demoregler und Ergebnisdarstellung |
| [`src/components/Testimonials.tsx`](src/components/Testimonials.tsx) | Deutlich gekennzeichnete Beispielbewertungen |
| [`src/components/Pricing.tsx`](src/components/Pricing.tsx) | Drei digitale Pakete und individuelle Private Lesson |
| [`src/components/PrivateLesson.tsx`](src/components/PrivateLesson.tsx) | Anfrageformular, Validierung und Demo-/Integrationsstatus |
| [`src/components/FAQ.tsx`](src/components/FAQ.tsx) | Zugängliches Accordion |
| [`src/components/Closing.tsx`](src/components/Closing.tsx) | Abschluss-CTA, Footer und rechtliche Platzhalter |
| [`src/components/UI.tsx`](src/components/UI.tsx) | Gemeinsame Überschriften, Pfeile und Scroll-Reveals |
| [`src/styles/globals.css`](src/styles/globals.css) | Farben, Typografie, Layout, Navigation und Hero; ergänzend `services.css`, `results.css`, `pricing.css`, `lesson.css`, `faq.css` und `closing.css` unter `src/styles/` |
| [`public/assets/rayen/`](public/assets/rayen/) | Vier sprechend benannte Arbeitskopien der Rayen-Bilder |
| `public/assets/placeholders/` | Neutrale lokale Illustrationen für den Ergebnis-Demoregler |
| [`public/favicon.svg`](public/favicon.svg) | Eigenes RK-Favicon als austauschbarer Platzhalter |
| [`index.html`](index.html) | HTML-Grundgerüst und Basismetadaten |
| [`scripts/build-demo.mjs`](scripts/build-demo.mjs) | Export einer eigenständigen HTML-Demo mit eingebetteten Assets und statisch sichtbarem Inhalt |
| [`vite.config.ts`](vite.config.ts) | React-Build und Übernahme von `site.seo` in die HTML-Metadaten |
| [`VISUAL_SPEC.md`](VISUAL_SPEC.md) | Design-Tokens, Bildzuordnung, Abschnitte, Breakpoints, Bewegung und visueller Prüfplan |
| [`QA_REPORT.md`](QA_REPORT.md) | Finaler Build-, TypeScript-, Browser- und visueller Prüfbericht mit Ergebnissen und Grenzen |

## Texte, Links und Angebotsdaten ändern

In `src/data/site.ts` die gewünschte Eigenschaft des exportierten Objekts `site` bearbeiten. Inhalte müssen nicht über die Komponenten verteilt geändert werden:

| Inhalt | Änderungsstelle |
| --- | --- |
| Marke und Monogramm | `site.brand` |
| Instagram und Hauptsprungziele | `links`, `navigation`, `site.navigation` |
| Hero-Zeilen, Hervorhebung und Buttons | `site.hero.lines`, `site.hero.accentLineIndex`, `site.hero.primaryCta`, `site.hero.secondaryCta` |
| Ticker-Begriffe | `site.ticker` |
| Statistikwerte und Hinweis | `site.stats`, `site.statsNote` |
| Vorstellung und Fakten | `site.about` |
| Leistungen und Preview-Bilder | `site.servicesIntro`, `site.services` |
| Trainingsgalerie, Reihenfolge, Bilder und Captions | `site.trainingGallery.label`, `site.trainingGallery.columns` |
| Lime-Band und Methode | `site.guarantee`, `site.method` |
| Ergebnisse und Vergleichsbilder | `site.results` |
| Beispielbewertungen und Kennzeichnung | `site.testimonialsIntro`, `site.testimonials` |
| Pakettexte, Preise und Empfehlung | `site.pricingIntro`, `site.pricing` |
| Formulartexte, Auswahlbereiche und Statusmeldungen | `site.lesson` |
| FAQ-Fragen und Antworten | `site.faqIntro`, `site.faq` |
| Abschluss und Footer | `site.cta`, `site.footer` |
| SEO-Titel, Beschreibung, Sprache und Vorschaubild | `site.seo` |

Abschnittsüberschriften verwenden `\n` für einen bewussten Zeilenumbruch. Bildpositionen werden als normale CSS-Werte wie `50% 40%` gespeichert. Die sichtbaren Bildausschnitte nach Änderungen immer auf Desktop und Smartphone prüfen.

Die Trainingsgalerie folgt im Leistungsabschnitt auf die fünf Coaching-Zeilen. `site.trainingGallery.columns` enthält drei Desktopspalten mit jeweils den Einträgen `image`, `caption` und `kind`. `kind: 'tall'` nutzt 4:5, `'portrait'` 3:5 und `'wide'` 4:3; auf Smartphones wird die Galerie einspaltig und das Portrait ebenfalls 4:5. Aktuell sind es fünf Bildverwendungen aus drei Original-Assets: Fußball- und Community-Foto jeweils zweimal, das schwarze Portrait einmal. Das blaue Trainingsfoto bleibt wegen seiner großen eingebrannten Schrift auf kleinere Preview-/Lesson-Flächen mit Ausschnitt und Overlay beschränkt. Diese Auswahl verändert keine Originalfotos. Alle vier Rayen-Assets werden weiterhin auf der Website verwendet. Die eigenen Captions beschreiben Trainingsmomente und behaupten keine Kundenergebnisse.

Die vorläufigen Preise stehen in `site.pricing`: Football Footwork `50 €`, Football Shooting `50 €`, Nutrition Basics `40 €` jeweils einmalig; Private Lesson hat einen individuellen Preis nach Absprache. Pro Paket lassen sich `title`, `price`, `unit`, `description`, `features`, `cta` und `recommended` ändern. Die Verbindung zum jeweiligen Zahlungslink bleibt über `paymentKey` erhalten. Ein Preis im Frontend ändert den Betrag eines externen Checkouts nicht: Beide Stellen müssen übereinstimmen.

## Rayens Bilder austauschen

Die vier vorhandenen Dateien unter `public/assets/rayen/` sind unveränderte Kopien der Original-Screenshots. Die Originale nicht überschreiben; bessere Fotos können als neue Arbeitsdateien ergänzt werden.

| Ursprünglicher Screenshot | Arbeitsdatei | Zentrale Zuordnung |
| --- | --- | --- |
| `Rayen_kouki_project/rayen_bilder/Screenshot 2026-10-04 235325.png` | `public/assets/rayen/rayen-football.png` | `rayenImages.hero`, `rayenImages.football`; Hero, Football-Leistungen und Galerie links oben/rechts unten |
| `Rayen_kouki_project/rayen_bilder/Screenshot 2026-10-04 235518.png` | `public/assets/rayen/rayen-training.png` | `rayenImages.training`; kleinere Trainings-Preview und Private Lesson mit Ausschnitt/Overlay |
| `Rayen_kouki_project/rayen_bilder/Screenshot 2026-10-04 235545.png` | `public/assets/rayen/rayen-portrait.png` | `rayenImages.portrait`; About, ergänzende Preview und Galerie-Mittelbild |
| `Rayen_kouki_project/rayen_bilder/Screenshot 2026-10-04 235625.png` | `public/assets/rayen/rayen-community.png` | `rayenImages.community`; Galerie links unten/rechts oben, Private-Lesson-Preview und Abschluss |

Für ein neues Bild:

1. Eine eigene, geeignete Datei unter `public/assets/rayen/` ablegen, beispielsweise `rayen-hero-original.webp`.
2. In `src/data/site.ts` beim passenden `rayenImages`-Eintrag `src`, `alt` und `position` aktualisieren. Der öffentliche Pfad beginnt mit `/assets/rayen/`, nicht mit `/public/`.
3. Bei geändertem Bildformat vorhandene feste Größen beziehungsweise Seitenverhältnisse der betreffenden Komponente kontrollieren.
4. Bei einem neuen Social-Vorschaubild zusätzlich `site.seo.image` und `site.seo.imageAlt` ändern.
5. Gesicht, Körper, Kontrast und sichtbaren Ausschnitt auf Desktop, Tablet und Smartphone überprüfen.

Die mobilen Hero-Styles unter 600px in `src/styles/globals.css` versetzen das Hintergrundbild um 85px nach unten und schaffen 104px Abstand vor der Beschreibung, damit Rayens Gesicht zwischen Headline und Text sichtbar bleibt. Bei stark verändertem Bildformat diese Abstände gemeinsam mit `rayenImages.hero.position` prüfen. Die Galerie verwendet ebenfalls die jeweiligen zentralen Bildpositionen; der Ergebnisregler verwendet `site.results.before.position` und `site.results.after.position`.

Die vorhandenen Auflösungen sind `687 × 797`, `572 × 902`, `362 × 807` und `877 × 565` Pixel. Das blaue Trainingsbild enthält eingebrannte Schrift, andere Screenshots enthalten angeschnittene Personen oder kleine Oberflächenelemente. Für eine hochauflösende Veröffentlichung sind saubere Originalfotos sinnvoll; die Person wird nicht künstlich verändert. Die vollständige Bildanalyse und Startwerte der Ausschnitte stehen in `VISUAL_SPEC.md`.

Die fünf Bilder unter `Rayen_kouki_project/it_should_look_like_this/` sind ausschließlich Designreferenzen. Sie dürfen nicht als Hero-, Kunden- oder Trainingsbilder in die Website eingebunden werden. Fremde Referenzpersonen, Logos, Texte und Erfolgsaussagen werden nicht übernommen.

## Ergebnisse, Bewertungen und rechtliche Platzhalter

- `site.stats` enthält `isPlaceholder`; die vorläufigen Angaben bleiben mit `site.statsNote` sichtbar gekennzeichnet, bis sie bestätigt wurden.
- `site.results.before` und `site.results.after` verweisen auf neutrale lokale Illustrationen. Der Slider zeigt eine Demo, keine bestätigte Transformation. Echte zusammengehörige, freigegebene Aufnahmen erst mit passenden Beschriftungen, Alternativtexten und belegbaren Ergebnisangaben ersetzen. Zwei beliebige Rayen-Bilder sind kein Vorher-/Nachher-Beleg.
- `site.testimonials` enthält ausdrücklich gekennzeichnete Beispielkarten. Echte Namen, Zitate oder Bewertungen erst nach entsprechender Freigabe eintragen; die zugehörigen Platzhalterhinweise dann gezielt aktualisieren.
- `site.pricingIntro.note` kennzeichnet vorläufige Pakete und Preise. Verfügbarkeit, Checkout und Videozugang müssen vor echtem Verkauf tatsächlich eingerichtet sein.
- `site.footer.imprint` und `site.footer.privacy` enthalten ausdrücklich unvollständige Rechtstexte. Dort die erforderlichen Anbieterinformationen und tatsächlichen Angaben zur Datenverarbeitung ergänzen. Das Footer-Label `site.footer.legalPlaceholderLabel` erst entfernen, wenn die Inhalte vollständig ersetzt sind.
- `public/favicon.svg` kann durch ein eigenes finales Favicon ersetzt werden. Bei anderem Dateinamen oder Format die Favicon-Verknüpfung in `index.html` anpassen.

## Zahlungslinks und späterer Stripe-Anschluss

In `src/config/integrations.ts` stehen die öffentlichen Checkout-Links zentral in `paymentLinks`:

```ts
export const paymentLinks = {
  footwork: '',
  shooting: '',
  nutrition: '',
  privateLesson: '',
};
```

Solange die Einträge leer sind, ist kein echter Kauf eingerichtet. Die Website leitet zu einer ehrlich gekennzeichneten Anfrage-/Demooption; sie stellt keinen Zahlungsabschluss oder sofortigen Videozugriff dar. Es werden keine Zahlungen durch die Website selbst verarbeitet.

Für einen späteren einfachen Stripe-Anschluss können im eigenen Stripe-Konto passende Payment Links mit den bestätigten Produkten und Preisen erstellt und deren öffentliche HTTPS-URLs den vier Einträgen zugeordnet werden. Private Lessons können weiterhin ausschließlich angefragt werden; dafür den entsprechenden Link leer lassen. Keine echten Links oder Konten werden durch diese Entwicklungsanleitung automatisch eingerichtet.

Stripe-Secret-Keys und sonstige Zugangsdaten gehören niemals in `src/`, `public/`, `paymentLinks`, `webhookUrl` oder Vite-Frontend-Variablen. Alles im ausgelieferten Frontend ist öffentlich lesbar. Eine automatische Videofreischaltung, Auftragsverarbeitung oder Verarbeitung signierter Stripe-Ereignisse benötigt später einen eigenen serverseitigen Dienst beziehungsweise einen geeigneten externen Anbieter. Eine Stripe-Webhook-Signatur wird auf dem Server geprüft, nicht im Browser. Diese erste Version implementiert weder Backend noch automatische Lieferung.

## Private-Lesson-Formular und späterer Webhook

`src/config/integrations.ts` enthält `webhookUrl` und die vorbereitete Funktion `submitLesson`. Der Standard ist ein leerer Endpunkt:

```ts
export const webhookUrl: string = '';
```

In diesem Zustand prüft das Formular die Angaben nur lokal. Die Demo-Meldung sagt ausdrücklich, dass keine Nachricht übermittelt und keine Buchung angelegt wurde. Der direkte Instagram-Link bleibt als Kontaktmöglichkeit verfügbar. Telefonnummer ist optional; die übrigen Pflichtfelder sind sichtbar gekennzeichnet. Texte, Feldlabels, Auswahlbereiche und Fehlermeldungen werden über `site.lesson` geändert.

Ein später eingerichteter öffentlicher HTTPS-Endpunkt erhält einen JSON-POST mit folgenden Feldern:

```json
{
  "name": "",
  "email": "",
  "phone": "",
  "area": "",
  "timeframe": "",
  "message": ""
}
```

`area` entspricht einem der Werte aus `site.lesson.areas`, beispielsweise `footwork`, `shooting`, `fitness`, `nutrition` oder `private-lesson`. Ein geeigneter eigener oder externer Empfänger muss Anfragen tatsächlich verarbeiten. Der Browser sendet ohne Cookies/Zugangsdaten und mit `Content-Type: application/json`; bei einem anderen Ursprung muss der Empfänger den CORS-Preflight und POST für die gewünschte Website-Adresse erlauben. Weiterleitungen werden nicht automatisch verfolgt. Ein erfolgreicher HTTP-Status wird als übermittelte Anfrage angezeigt, stellt jedoch keine Termin- oder Buchungsbestätigung dar.

Am Empfänger später nochmals validieren, die tatsächliche Verarbeitung und Rückmeldung implementieren und nötige Zugangsdaten dort sicher hinterlegen. In `webhookUrl` nur eine öffentliche HTTPS-URL ohne eingebetteten Benutzernamen, Passwort oder geheimen Schlüssel verwenden. Der Anfrage-Endpunkt ist von einem späteren Stripe-Zahlungswebhook getrennt. Nach Aktivierung Formularhinweise, FAQ, Datenschutzhinweise und tatsächlichen Versand gemeinsam überprüfen; die Demo-Texte liegen zentral in `site.lesson` und `site.faq`.

## SEO und Social-Vorschau

Titel, Beschreibung, Sprache, Locale und Bild werden in `site.seo` gepflegt. Das Plugin `central-site-metadata` in `vite.config.ts` übernimmt diese Angaben in das von Vite ausgelieferte HTML und in den Produktionsbuild. Dadurch ist keine zweite Textpflege für Titel und Beschreibung in `index.html` erforderlich.

Das Open-Graph-Bild verwendet zunächst Rayens lokales Fußballbild. Für eine veröffentlichte Domain eine passende absolute öffentliche HTTPS-Bildadresse in `site.seo.image` eintragen und die Social-Vorschau beim jeweiligen Dienst prüfen. Die vorhandenen Fotos und das Favicon sind austauschbare Ausgangsassets. Die grundlegenden Sprach-, Open-Graph- und Twitter-Metadaten stehen im HTML; Struktur, Überschriften und Alternativtexte bleiben Teil der jeweiligen Komponenten und zentralen Daten.

## Cloudflare Pages

Die Website kann als statisches Projekt auf Cloudflare Pages betrieben werden. Die erforderlichen Build-Einstellungen sind:

| Einstellung | Wert |
| --- | --- |
| Projekt-/Root-Verzeichnis | Repository-Wurzel mit `package.json`; nicht `Rayen_kouki_project/` |
| Build-Befehl | `npm run build` |
| Ausgabeordner | `dist` |
| Node.js | `NODE_VERSION=24.19.0`, passend zur `.node-version` und vorhandenen Entwicklungsumgebung |
| Backend / Functions | Für diese erste Version nicht erforderlich |

Die internen Links verwenden One-Page-Anker. Bilder, Schriften und Styles werden als statische Dateien mit ausgeliefert. Ein separat konfigurierter Formular-Endpunkt oder ein gehosteter Checkout bleibt ein externer Dienst. Das Vite-Vorschauprogramm ist kein Produktionsserver.

Diese Anleitung veröffentlicht nichts und verbindet keine Cloudflare-, Stripe- oder sonstigen Konten. Vor einem echten öffentlichen Start die tatsächlichen Inhalte, rechtlichen Angaben, Bilder, Verkaufslinks und gegebenenfalls Formularverarbeitung vervollständigen.

## Validierung und bekannte Grenzen

Der finale Status von Build, TypeScript und Browserprüfungen steht in [`QA_REPORT.md`](QA_REPORT.md). Diese Anleitung erklärt die Prüfungen; sie behauptet keine noch ausstehende erfolgreiche Prüfung.

```bash
npm run typecheck
npm run build
```

Zur visuellen und funktionalen Kontrolle gehören Screenshots bei `1440 × 900`, `1280 × 800`, `768 × 1024` und `390 × 844`; zusätzlich Layoutkontrollen bei 375 und 1024 Pixel Breite. Navigation vor/nach Scrollen, mobiles Menü offen/geschlossen, Leistungs-Hover und Tastaturfokus, Pricing-Buttons, FAQ-Zustände, Sliderpositionen und Tastaturbedienung, Formularvalidierung und Demo-Status prüfen. Ebenso Browser-Konsole, fehlende Dateien, Bildausschnitte, horizontales Overflow, Layout-Shifts, sichtbaren Fokus und `prefers-reduced-motion` kontrollieren.

Die visuelle Referenz `https://mighty-meeting-758072.framer.app/#pricing` war bei der Untersuchung mit HTTP 403 blockiert. Die fünf vorhandenen Desktop-Screenshots wurden visuell untersucht und sämtlich in `VISUAL_SPEC.md` zugeordnet; die versetzte Dreispalten-Galerie ist die eigene Entsprechung des Foto-Mosaiks in Referenz `234536`. Es fehlen Referenzaufnahmen für Smartphone/Tablet sowie tatsächliche Hover- und Animationszustände. Eine genaue Übereinstimmung mit der aktuellen Live-Seite oder unbekannten mobilen Zuständen kann deshalb nicht bestätigt werden. Die eigene Website wird anhand der zugänglichen Desktop-Referenzen und ihrer dokumentierten Gestaltungsentscheidungen geprüft.

Offene Inhalte sind hochwertige Rayen-Originalfotos, bestätigte Statistiken, echte freigegebene Ergebnisse und Kundenstimmen, finale Angebotsdaten, Zahlungslinks sowie vollständige Anbieter- und Datenschutzhinweise. Die erste Version bleibt bis zur Einrichtung tatsächlicher Integrationen im gekennzeichneten Demo-Modus.
