Du bist ein Senior Frontend Engineer, UI/UX Designer und Motion Designer.



Deine Aufgabe ist es, eine hochwertige Coaching-Website für meinen Freund Rayen Kouki zu erstellen.



Arbeite selbstständig direkt im vorhandenen Projekt. Wenn bereits ein Projekt existiert, prüfe zuerst die bestehende Struktur und überschreibe oder lösche keine wichtigen Dateien ohne Grund.



REFERENZWEBSITE



Untersuche diese öffentlich zugängliche Website sehr genau:



https://mighty-meeting-758072.framer.app/#pricing



Die Referenz dient ausschließlich als visuelle und strukturelle Inspiration.



Erstelle keine direkte Kopie von:



\- geschützten Texten

\- Bildern

\- Logos

\- Markeninhalten

\- Framer-spezifischen Assets

\- fremden Testimonials

\- fremden Personen



Übernimm stattdessen die visuelle Sprache, das Layout, die Größenverhältnisse, die Animationen, die Interaktionen und die Nutzerführung. Schreibe eigenen Code und verwende eigene Inhalte für Rayen Kouki.



Die fertige Website soll sich visuell sehr stark an der Referenz orientieren, aber technisch eine eigenständige React-Website mit eigenen Assets sein.



VISUAL-FIRST-ARBEITSWEISE — VERPFLICHTEND



Die Website darf nicht nur anhand des HTML-Codes, des Website-Links oder einer textlichen Beschreibung nachgebaut werden.



Du musst die Referenz visuell untersuchen.



Wenn ein Browser-, Screenshot- oder Vision-Tool verfügbar ist, öffne die Referenzseite:



https://mighty-meeting-758072.framer.app/#pricing



Erstelle Screenshots bei diesen Größen:



\- Desktop: 1440 × 900

\- Laptop: 1280 × 800

\- Tablet: 768 × 1024

\- Smartphone: 390 × 844



Erstelle außerdem Screenshots wichtiger Interaktionszustände:



\- normale Navigation

\- Navigation beim Scrollen

\- Hero beim ersten Laden

\- Hover über Leistungsbereiche

\- Hover über Buttons

\- Pricing-Bereich

\- FAQ geschlossen

\- FAQ geöffnet

\- Vorher-Nachher-Slider in mehreren Positionen

\- mobile Navigation geschlossen

\- mobile Navigation geöffnet

\- sichtbare Scroll-Reveal-Zustände



Untersuche auf jedem Screenshot besonders:



\- genaue Position und Größe der Elemente

\- Verhältnis von Text zu Bildern

\- Abstände zwischen den Sektionen

\- maximale Breite der Inhalte

\- Schriftgrößen

\- Schriftstärken

\- Zeilenumbrüche

\- Farben und Kontraste

\- Rahmen und Transparenzen

\- Border-Radius

\- Schatten

\- Blur-Effekte

\- Bildausschnitte

\- Bildpositionen

\- Animationen

\- Bewegungsrichtungen

\- Hover-Zustände

\- Verhalten beim Scrollen

\- responsive Anpassungen

\- visuelle Hierarchie

\- Verhältnis von leerem Raum und Inhalt



Wenn Bilddateien untersucht werden, öffne sie mit dem verfügbaren Bildbetrachter oder Vision-Tool. Eine reine Analyse von Dateinamen, Dateigrößen oder HTML reicht nicht aus. Du musst die tatsächlichen visuellen Inhalte untersuchen.



DOM-Struktur und CSS dürfen ergänzend untersucht werden, sind aber nicht die primäre visuelle Quelle.



Erstelle vor der finalen Implementierung eine Datei:



VISUAL\_SPEC.md



Diese Datei muss enthalten:



\- Design-Tokens

\- verwendete Farben

\- Typografie

\- Schriftgrößen

\- Schriftstärken

\- Abstände

\- Containerbreiten

\- Breakpoints

\- Beschreibung jedes Abschnitts

\- Bildpositionen

\- Bildausschnitte

\- Animationsbeschreibung

\- Interaktionsbeschreibung

\- Desktop-/Tablet-/Mobile-Unterschiede

\- eine Liste der wichtigsten visuellen Merkmale der Referenz

\- Zuordnung der Referenzbilder zu den Website-Sektionen



Wenn kein Browser- oder Screenshot-Tool verfügbar ist, suche zuerst im Projekt nach visuellen Referenzbildern. Wenn weder die Referenzseite noch lokale Referenzbilder zugänglich sind, darfst du das visuelle Design nicht einfach erraten und die Website nicht als visuell fertig bezeichnen.



VISUELLE REFERENZBILDER AUS DEM PROJEKT



Suche vor Beginn der Implementierung automatisch nach einem Ordner namens:



it\_should\_look\_like\_this



Der Ordner kann sich beispielsweise hier befinden:



./it\_should\_look\_like\_this

./public/it\_should\_look\_like\_this

./reference/it\_should\_look\_like\_this

./assets/it\_should\_look\_like\_this

./src/assets/it\_should\_look\_like\_this



Suche rekursiv im gesamten Projekt danach.



Untersuche jedes Bild in diesem Ordner visuell. Diese Bilder sind verbindliche Designreferenzen für das gewünschte Ergebnis.



Verwende sie zur Analyse von:



\- Layout

\- Elementpositionen

\- Größenverhältnissen

\- Abständen

\- Farbverwendung

\- Typografie

\- Bildkomposition

\- Kartenaufbau

\- Hero-Bereich

\- Navigation

\- Pricing-Bereich

\- Animationen

\- Interaktionen

\- mobilen Layouts



Erstelle eine Übersicht aller gefundenen Bilder und ordne sie den jeweiligen Website-Bereichen zu.



Beispiel:



\- hero.png → Hero-Bereich

\- services.png → Leistungsbereich

\- pricing.png → Pricing

\- mobile.png → mobile Darstellung

\- faq.png → FAQ

\- footer.png → Footer



Die Bilder aus `it\_should\_look\_like\_this` sind ausschließlich visuelle Referenzen. Verwende sie nicht direkt als Website-Bilder und binde sie nicht in die fertige Website ein.



Nutze stattdessen Rayens eigene Bilder aus:



public/assets/rayen/



Wenn ein Bild aus `it\_should\_look\_like\_this` keine eindeutige Zuordnung besitzt, analysiere trotzdem seine Designmerkmale und übertrage diese in den eigenen Code.



Wenn der Ordner `it\_should\_look\_like\_this` fehlt, darfst du das Design nicht einfach erraten. Erwähne im Abschlussbericht ausdrücklich, dass die visuellen Referenzbilder fehlen. Die visuelle Implementierung darf in diesem Fall nicht als vollständig geprüft bezeichnet werden.



VERGLEICHSWORKFLOW



Implementiere die Website abschnittsweise.



Nach jedem wichtigen Abschnitt musst du:



1\. die lokale Website starten,

2\. einen Screenshot bei derselben Bildschirmgröße wie die Referenz erstellen,

3\. den Screenshot mit der Referenz vergleichen,

4\. Unterschiede bei Position, Größe, Farbe, Typografie und Abständen feststellen,

5\. die Unterschiede direkt im Code korrigieren,

6\. erst danach mit dem nächsten Abschnitt fortfahren.



Arbeite in dieser Reihenfolge:



1\. Navigation

2\. Hero

3\. Ticker und Statistikbereich

4\. About-Rayen-Bereich

5\. Leistungsbereich

6\. Garantie-Bereich

7\. Methode

8\. Ergebnisse

9\. Testimonials

10\. Pricing

11\. Private Lessons

12\. FAQ

13\. finaler CTA

14\. Footer

15\. mobile Anpassung

16\. abschließende visuelle Korrektur



Erstelle nicht sofort eine komplette Website nur anhand deiner ersten Einschätzung.



Wiederhole den visuellen Vergleich so lange, bis keine deutlichen Unterschiede mehr bei folgenden Punkten erkennbar sind:



\- Layout

\- Größenverhältnisse

\- Abstände

\- Farben

\- Typografie

\- Bildpositionen

\- visuelle Hierarchie

\- responsive Darstellung

\- Animationen

\- Interaktionen



Wenn du die Screenshots nicht direkt sehen kannst, darfst du nicht behaupten, dass die Website visuell fertig ist. Weise stattdessen ausdrücklich darauf hin, welche visuelle Prüfung noch fehlt.



ZIEL DER WEBSITE



Erstelle eine sehr hochwertige Website für:



Rayen Kouki



Instagram:



https://www.instagram.com/rayen\_k07/



Rayen bietet an:



\- Fußball-Coaching

\- Footwork-Training

\- Shooting-Training

\- Fitness-Coaching

\- Ernährungsberatung

\- digitale Trainingspakete

\- individuelle private Lessons



Die Website soll:



\- sportlich wirken

\- modern wirken

\- dunkel und hochwertig wirken

\- professionell wirken

\- eine starke Premium-Markenwirkung haben

\- nicht wie ein gewöhnliches Fitness-Template aussehen

\- die visuelle Atmosphäre der Referenzseite aufgreifen

\- Rayens eigene Persönlichkeit und Bilder in den Mittelpunkt stellen



TECHNOLOGIE



Verwende:



\- React

\- Vite

\- TypeScript

\- Tailwind CSS oder gut strukturiertes eigenes CSS

\- Motion beziehungsweise Framer Motion für Animationen

\- semantisches HTML

\- responsive Design

\- moderne CSS-Techniken

\- keine Framer-Abhängigkeit

\- keine direkte Abhängigkeit von der Referenzseite

\- keine Backend-Implementierung in der ersten Version



Die Website muss später problemlos auf Cloudflare Pages deploybar sein.



FARBEN UND DESIGN



Verwende ungefähr diese Designrichtung:



\- fast schwarzer Hintergrund: #050505

\- Neon-Lime als Akzentfarbe: #D8FF3E

\- warmes Off-White für große Texte: #F4F2EA

\- dezentes Grau für Sekundärtexte

\- feine weiße Rahmen mit niedriger Deckkraft

\- große, enge Display-Schrift für Überschriften

\- klare serifenlose Schrift für Fließtext

\- großzügige Abstände

\- starke Kontraste

\- leicht abgerundete Karten

\- hochwertige Editorial- und Sportmagazin-Ästhetik



Die Farbwerte sollen zentral als Design-Tokens definiert werden.



SEITENSTRUKTUR



Erstelle eine One-Page-Website mit folgenden Bereichen:



1\. NAVIGATION



\- Sticky Navigation

\- Logo oder Monogramm „RK“

\- Links:

&#x20; - Über Rayen

&#x20; - Leistungen

&#x20; - Methode

&#x20; - Ergebnisse

&#x20; - Pakete

&#x20; - FAQ

\- auffälliger Button „Private Lesson“

\- transparenter beziehungsweise leicht verschwommener Hintergrund beim Scrollen

\- mobile Navigation mit sauberem Menü

\- Navigation muss zu den jeweiligen Sektionen scrollen

\- sichtbare Hover- und Fokuszustände

\- keine unnötige Höhe auf Mobilgeräten



2\. HERO



Erstelle einen sehr starken Fullscreen-Hero:



\- große, kurze Headline

\- eigene Texte für Rayen

\- keine kopierten Kane-Texte

\- kurze Beschreibung von Rayens Coaching

\- Buttons:

&#x20; - „Pakete ansehen“

&#x20; - „Private Lesson buchen“

\- Rayens eigenes Hero-Bild aus `public/assets/rayen/`

\- asymmetrisches Layout

\- neonfarbener Akzent

\- animierte Text-Reveal-Effekte

\- leichte Parallax-Bewegung

\- Bild-Overlay und Kontrast müssen hochwertig wirken

\- auf Mobilgeräten soll der Hero vollständig funktionieren

\- Text darf auf keinem Breakpoint unleserlich werden



3\. ANIMIERTER TICKER



Erstelle einen horizontalen, animierten Lauftext mit Begriffen wie:



FOOTBALL

FITNESS

NUTRITION

DISCIPLINE

PERFORMANCE

CONSISTENCY



Die Animation muss:



\- flüssig sein

\- auf Desktop und Mobilgeräten funktionieren

\- bei `prefers-reduced-motion` pausieren oder deaktiviert werden

\- keinen horizontalen Overflow verursachen



4\. STATISTIKEN



Erstelle eine auffällige Statistik-Leiste mit vorläufigen Platzhalterwerten:



\- 100+ Athleten

\- 3 Coaching-Bereiche

\- 1 Ziel: bessere Performance



Kennzeichne diese Werte intern als Platzhalter, falls sie noch nicht bestätigt sind.



Alle Werte müssen später in einer zentralen Datendatei änderbar sein.



5\. ÜBER RAYEN



Erstelle einen hochwertigen About-Bereich:



\- großes Bild von Rayen

\- kurze Vorstellung von Rayen

\- Fokus auf Erfahrung, Disziplin und persönlicher Betreuung

\- kleine Timeline oder kurze Fakten

\- Button zu Instagram

\- Instagram-Link:

&#x20; https://www.instagram.com/rayen\_k07/



Verwende bevorzugt ein passendes Bild aus:



public/assets/rayen/



6\. LEISTUNGEN



Erstelle große, visuell auffällige Leistungszeilen oder Karten für:



\- Football Footwork

\- Football Shooting

\- Fitness Coaching

\- Nutrition Coaching

\- Private Lessons



Beim Hover sollen dezente Animationen erscheinen:



\- Bildvorschau

\- Farbwechsel

\- Bewegung der Pfeile

\- sanftes Einblenden zusätzlicher Informationen

\- leichte Größen- oder Positionsveränderung



Auf Desktop darf ein Cursor-Following-Preview verwendet werden.



Auf Mobilgeräten muss diese Funktion deaktiviert oder durch eine normale Touch-Interaktion ersetzt werden.



7\. GARANTIE-BEREICH



Erstelle einen breiten, auffälligen Bereich mit Neon-Lime-Hintergrund.



Beispieltext:



„STRONGER. FASTER. MORE CONFIDENT.“



Darunter eine kurze eigene Erklärung, dass Rayen strukturiertes Coaching und persönliche Betreuung anbietet.



8\. DIE METHODE



Erstelle drei Schritte:



01 — Assess



Ausgangslage verstehen und Ziele definieren.



02 — Build



Individuelles Training, Ernährung und Technik entwickeln.



03 — Refine



Fortschritte analysieren und den Plan verbessern.



Jeder Schritt soll beim Scrollen animiert erscheinen.



9\. ERGEBNISSE



Erstelle einen Results-Bereich mit:



\- Vorher-Nachher-Slider

\- zugänglichem Input-Range-Slider

\- Rayens eigenen Bildern, sofern passende Bilder vorhanden sind

\- neutralen lokalen Platzhaltern, falls noch keine passenden Bilder vorliegen

\- kurzen Ergebnistexten

\- responsivem Verhalten



Verwende keine zufälligen Bilder aus dem Internet.



Der Slider muss:



\- mit der Maus funktionieren

\- per Tastatur bedienbar sein

\- auf Mobilgeräten funktionieren

\- einen sichtbaren Fokuszustand besitzen

\- einen sinnvollen ARIA-Namen besitzen



10\. TESTIMONIALS



Erstelle mehrere Testimonial-Karten:



\- Name

\- Ziel

\- kurzer Erfahrungsbericht

\- optional Sterne oder Ergebniskennzahl



Verwende zunächst klar gekennzeichnete Platzhalterdaten, die später ersetzt werden können.



Erfinde keine echten Kundenbewertungen oder falschen Erfolgsgeschichten.



11\. PAKETE UND PREISE



Erstelle einen hochwertigen Pricing-Bereich mit diesen vorläufigen Paketen:



PAKET 1:



Football Footwork



50 €



Videos, Übungen und Schritt-für-Schritt-Anleitungen.



PAKET 2:



Football Shooting



50 €



Technikübungen, Schussabläufe und Trainingsplan.



PAKET 3:



Nutrition Basics



40 €



Grundlagen der Ernährung, einfache Struktur und praktische Empfehlungen.



PAKET 4:



Private Lesson



Individueller Preis



Persönliches Treffen mit Rayen.



Jede Karte benötigt:



\- Titel

\- Preis

\- Beschreibung

\- Leistungsübersicht

\- CTA-Button

\- Hover-Effekt

\- klare visuelle Hervorhebung des empfohlenen Pakets

\- responsives Layout

\- Tastatur-Fokuszustand



Die Zahlungslinks sollen zunächst als Platzhalter in einer zentralen Konfigurationsdatei liegen.



Noch keine echten API-Schlüssel oder Zahlungen einbauen.



12\. PRIVATE LESSON



Erstelle einen Bereich für individuelle private Lessons:



\- Name

\- E-Mail

\- Telefonnummer

\- gewünschter Bereich

\- bevorzugter Zeitraum

\- Nachricht

\- Button „Anfrage senden“



Implementiere zunächst nur:



\- Frontend-Validierung

\- verständliche Fehlermeldungen

\- Erfolgszustand

\- vorbereitete Funktion für einen späteren Webhook

\- keine echte Nachrichtenübermittlung ohne konfigurierte Integration



Keine sensiblen Daten fest in den Quellcode schreiben.



Lege Integrationsplatzhalter getrennt ab, zum Beispiel:



src/config/integrations.ts



13\. FAQ



Erstelle ein zugängliches Accordion mit Fragen wie:



\- Für wen sind die Pakete geeignet?

\- Bekomme ich sofort Zugriff auf die Videos?

\- Wie läuft eine private Lesson ab?

\- Kann ich mehrere Pakete kombinieren?

\- Wie funktioniert die Kontaktaufnahme?

\- Kann ich einen individuellen Trainingsplan erhalten?



Das Accordion muss:



\- per Maus funktionieren

\- per Tastatur funktionieren

\- mit Screenreadern funktionieren

\- sichtbare Fokuszustände besitzen

\- animiert auf- und zuklappen

\- auf Mobilgeräten funktionieren



14\. FINALER CTA



Erstelle am Ende einen großen CTA-Bereich:



„READY TO LEVEL UP?“



Verwende einen eigenen Text mit derselben starken Wirkung.



Mit Buttons für:



\- Pakete ansehen

\- Private Lesson anfragen

\- Instagram öffnen



15\. FOOTER



Der Footer soll enthalten:



\- Rayen Kouki

\- Instagram-Link

\- Navigation

\- Impressum-Platzhalter

\- Datenschutz-Platzhalter

\- Copyright



ANIMATIONEN



Implementiere hochwertige, aber performante Animationen:



\- Text-Reveal im Hero

\- Scroll-Reveal

\- Parallax-Effekte

\- animierter Ticker

\- Hover-Preview

\- sanfte Kartenbewegungen

\- Button-Hover

\- FAQ-Accordion

\- Blur-Navigation beim Scrollen

\- Vorher-Nachher-Slider

\- dezente Cursor-Animation auf Desktop

\- weiche Übergänge zwischen Sektionen

\- Bild- und Textanimationen passend zur Referenz



Beachte unbedingt:



\- `prefers-reduced-motion`

\- keine Animation darf den Inhalt unbenutzbar machen

\- keine Animation darf auf Mobilgeräten ruckeln

\- keine horizontale Überbreite

\- keine Layout-Shifts

\- keine übermäßige Animation

\- keine verschachtelten Animationen, die die Performance verschlechtern



DATEISTRUKTUR



Strukturiere den Code sauber, zum Beispiel:



src/

&#x20; components/

&#x20;   Navbar.tsx

&#x20;   Hero.tsx

&#x20;   Marquee.tsx

&#x20;   Stats.tsx

&#x20;   About.tsx

&#x20;   Services.tsx

&#x20;   Guarantee.tsx

&#x20;   Method.tsx

&#x20;   ResultsSlider.tsx

&#x20;   Testimonials.tsx

&#x20;   Pricing.tsx

&#x20;   PrivateLesson.tsx

&#x20;   FAQ.tsx

&#x20;   FinalCTA.tsx

&#x20;   Footer.tsx

&#x20; data/

&#x20;   site.ts

&#x20; config/

&#x20;   integrations.ts

&#x20; styles/

&#x20;   globals.css

&#x20; App.tsx

&#x20; main.tsx



Alle Texte, Preise, Links, Bilder und Statistikwerte sollen zentral änderbar sein und nicht über viele Komponenten verteilt stehen.



BILDER UND ASSETS



Erstelle oder verwende den Ordner:



public/assets/rayen/



Sobald echte Bilder von Rayen Kouki im Projekt vorhanden sind, müssen diese bevorzugt verwendet werden.



Verwende Rayens Bilder für:



\- Hero-Bereich

\- About-Rayen-Bereich

\- Leistungsbereiche

\- Results-Bereich

\- Testimonials, sofern passende Bilder vorhanden sind

\- Open-Graph-Vorschaubild

\- finalen CTA, sofern passend



Bevorzuge Bilder in dieser Reihenfolge:



1\. hochwertige Portraitbilder von Rayen

2\. Fußball-Actionbilder

3\. Fitness- oder Trainingsbilder

4\. Bilder mit neutralem Hintergrund

5\. sonstige passende Bilder aus dem Rayen-Ordner



Verwende niemals zufällige Stockfotos, fremde Personen oder Kane-Bilder, wenn eigene Rayen-Bilder vorhanden sind.



Prüfe jedes Bild auf:



\- passende Auflösung

\- Bildausschnitt

\- Kontrast zum Hintergrund

\- responsive Darstellung

\- korrekten `object-position`-Wert

\- sinnvollen Alt-Text

\- passende Verwendung für den jeweiligen Abschnitt



Wenn ein Bild nicht ideal für den vorgesehenen Bereich passt, passe Folgendes an:



\- `object-fit`

\- `object-position`

\- Overlay

\- Containergröße

\- Seitenverhältnis



Verändere Rayens Person auf den Bildern nicht künstlich.



Verwende sprechende Dateinamen und zentralisiere die Bildpfade in:



src/data/site.ts



Beispiel:



const rayenImages = {

&#x20; hero: "/assets/rayen/rayen-hero.jpg",

&#x20; portrait: "/assets/rayen/rayen-portrait.jpg",

&#x20; football: "/assets/rayen/rayen-football.jpg",

&#x20; training: "/assets/rayen/rayen-training.jpg",

};



Wenn noch keine Rayen-Bilder im Projekt vorhanden sind, verwende vorübergehend neutrale lokale Platzhalter. Markiere im Abschlussbericht exakt, welche Bilder später ersetzt werden müssen.



Keine zufälligen externen Bilder verwenden.



Keine fremden Logos verwenden.



Keine Kane-Bilder herunterladen oder direkt einbinden.



RESPONSIVE DESIGN



Teste mindestens diese Größen:



\- 375 px

\- 768 px

\- 1024 px

\- 1280 px

\- 1440 px



Die Website muss auf Mobilgeräten genauso hochwertig wirken wie auf Desktop.



Prüfe insbesondere:



\- kein horizontales Scrollen

\- keine abgeschnittenen Texte

\- korrekte Bildausschnitte

\- korrekte Button-Größen

\- lesbare Überschriften

\- funktionierende mobile Navigation

\- keine übergroßen Abstände

\- keine zu kleinen Touch-Ziele

\- stabile Pricing-Karten

\- funktionierende Formulare

\- funktionierende Slider

\- funktionierendes FAQ



ACCESSIBILITY



Beachte:



\- semantische HTML-Elemente

\- sichtbare Fokuszustände

\- ausreichender Farbkontrast

\- Alt-Texte

\- Tastaturbedienung

\- Labels für Formularfelder

\- zugängliches Accordion

\- zugänglicher Vorher-Nachher-Slider

\- reduced-motion-Unterstützung

\- sinnvolle ARIA-Attribute

\- korrekte Überschriften-Hierarchie

\- ausreichende Touch-Zielgrößen



SEO



Füge hinzu:



\- passenden Seitentitel

\- Meta-Description

\- Open-Graph-Platzhalter

\- strukturelle Überschriften

\- sinnvolle Alt-Texte

\- Instagram-Link

\- Favicon-Platzhalter

\- passende Spracheinstellung

\- grundlegende Social-Media-Metadaten



VISUELLE QUALITÄTSKONTROLLE



Die Implementierung gilt erst dann als fertig, wenn sie nicht nur technisch funktioniert, sondern auch visuell mit der Referenz und den Bildern aus `it\_should\_look\_like\_this` verglichen wurde.



Prüfe zwingend:



\- Hero-Höhe

\- Überschriftengröße

\- Textposition

\- Bildposition

\- Navigation

\- Abstände

\- Containerbreiten

\- Pricing-Karten

\- Neon-Lime-Akzente

\- Sektionstrennung

\- Hover-Zustände

\- Scroll-Animationen

\- FAQ-Interaktion

\- mobile Darstellung

\- horizontales Overflow

\- Ladezustand

\- Layout-Shifts

\- Rayens Bildpositionen

\- Kontrast der Rayen-Bilder

\- visuelle Hierarchie



Erstelle Vergleichsscreenshots bei:



\- 1440 × 900

\- 1280 × 800

\- 768 × 1024

\- 390 × 844



Vergleiche die Screenshots abschnittsweise mit:



\- der Referenzwebsite

\- den Bildern aus `it\_should\_look\_like\_this`

\- den Designwerten in `VISUAL\_SPEC.md`



Nutze, sofern verfügbar:



\- Playwright

\- Puppeteer

\- Browser-Tools

\- Screenshot-Tools

\- Bildvergleich

\- Pixel-Diff

\- verfügbares Vision-Tool



Korrigiere sichtbare Abweichungen direkt im Code.



Die Website darf erst als fertig bezeichnet werden, wenn:



\- der Build erfolgreich ist

\- keine TypeScript-Fehler vorhanden sind

\- keine Fehler in der Browser-Konsole vorhanden sind

\- alle Interaktionen funktionieren

\- die Seite auf Desktop und Mobilgeräten funktioniert

\- ein visueller Vergleich durchgeführt wurde

\- Rayens Bilder korrekt verwendet werden, sofern sie vorhanden sind

\- keine großen sichtbaren Unterschiede zur Referenz bestehen

\- keine großen sichtbaren Unterschiede zu den Bildern aus `it\_should\_look\_like\_this` bestehen



Wichtige Unterscheidung:



Wenn die visuellen Referenzbilder oder die Referenzwebsite fehlen, darf die finale visuelle Qualität nicht bestätigt werden.



Wenn nur Rayens finale Bilder oder finale Texte fehlen, darfst du mit sauberen Platzhaltern weiterarbeiten. Weise im Abschlussbericht genau darauf hin, welche Inhalte später ersetzt werden müssen.



CLOUDFLARE-PAGES-DEPLOYMENT



Die Website soll für folgendes Deployment vorbereitet sein:



Build command:



npm run build



Output directory:



dist



Keine serverseitigen Funktionen voraussetzen.



Keine Secrets oder API-Schlüssel in den Frontend-Code schreiben.



QUALITÄTSSICHERUNG



Führe am Ende aus:



npm install

npm run build



Prüfe zusätzlich:



\- TypeScript

\- Browser-Konsole

\- Navigation

\- Formvalidierung

\- Pricing-Buttons

\- FAQ

\- Slider

\- mobile Darstellung

\- fehlende Assets

\- fehlerhafte Bildpfade

\- horizontales Overflow



Erstelle eine README.md mit:



\- Installation

\- Entwicklungsserver

\- Build

\- Deployment auf Cloudflare Pages

\- Austausch der Bilder

\- Änderung der Preise

\- Änderung der Texte

\- Einrichtung der Zahlungslinks

\- späteres Einrichten von Stripe

\- späteres Einrichten des Webhooks

\- Struktur der wichtigsten Dateien



ABSCHLUSSBERICHT



Wenn die Implementierung fertig ist, gib mir:



\- eine kurze Zusammenfassung

\- die wichtigsten erstellten Dateien

\- Startbefehl

\- Build-Ergebnis

\- Ergebnis der visuellen Prüfung

\- verwendete Referenzbilder

\- verwendete Rayen-Bilder

\- mögliche offene Platzhalter

\- genaue Stellen, an denen ich Rayens Bilder eintragen oder ersetzen kann

\- genaue Stellen, an denen ich Texte ändern kann

\- genaue Stellen, an denen ich Preise ändern kann

\- genaue Stellen, an denen ich Zahlungslinks eintragen kann

\- Hinweise für den späteren Stripe-Anschluss

\- Hinweise für den späteren Webhook-Anschluss

\- bekannte Einschränkungen oder noch fehlende Informationen



WICHTIG



Arbeite selbstständig und stelle nur dann Rückfragen, wenn du ohne die Information wirklich nicht weiterarbeiten kannst.



Wenn Bilder oder finale Texte fehlen, verwende saubere Platzhalter und fahre fort.



Wenn visuelle Referenzbilder fehlen, darfst du das Design nicht einfach erraten und musst diesen fehlenden visuellen Input im Abschlussbericht nennen.



Das Ergebnis soll wie eine eigene Premium-Fitness- und Football-Marke wirken, mit sehr starker visueller Nähe zur Referenzseite, aber mit eigenem Code, eigenen Texten, Rayens eigenen Bildern und eigenen Assets.

