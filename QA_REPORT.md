# Abschlussprüfung — Rayen Kouki

Prüfstand: 6. Oktober 2026. Die statische Website ist implementiert und lokal geprüft. Zahlungen, Nachrichtenversand und Veröffentlichung sind nicht aktiviert.

## Build und Installation

- Node.js `24.19.0`, npm `11.9.0`; Versionen und Mindestanforderungen sind im Projekt dokumentiert.
- Die Installation mit `npm ci` und dem vorhandenen Lockfile sowie das gespeicherte Cloud-Installationsskript wurden erfolgreich ausgeführt.
- `npm run build` besteht einschließlich `tsc --noEmit`. Der erneut erzeugte finale Build besitzt dieselben geprüften Dateien: `index-CPJ5V6Rp.js` und `index-CfYXszsn.css`.
- Ausgabe: `dist`. JavaScript 400,91 kB / 126,40 kB gzip; CSS 33,36 kB / 7,35 kB gzip. Schriften und Bilder werden lokal ausgeliefert.
- Cloudflare Pages ist mit Build-Befehl `npm run build` und Ausgabeordner `dist` vorbereitet.

## Browserprüfung am finalen Produktionsbuild

Der vollständige Lauf unter `/workspace/.cloud-onboarding/screenshots/final-current/final-report.json` besteht mit **97 von 97 Prüfungen**. Alle vier Seitenaufrufe bestätigen den finalen JavaScript-Build. Der Lauf erzeugt 128 Screenshots, einschließlich weiterer Ausschnitte langer Abschnitte.

| Ansicht | Horizontales Dokument-Scrolling | Fehlende Bilder / Browserfehler | Gemessene initiale Layoutverschiebung (CLS) |
| --- | --- | --- | --- |
| 1440 × 900 | Keines | Keine | 0,000144 |
| 1280 × 800 | Keines | Keine | 0,000161 |
| 768 × 1024 | Keines | Keine | 0,000117 |
| 390 × 844 | Keines | Keine | 0 |

Zusätzliche Dokumentbreitenprüfungen bei 375, 768, 1024, 1280 und 1440 Pixel bestehen. Reduced Motion beendet die kontinuierlichen Animationen. Metadaten, deutsche Sprache, eine einzelne Hauptüberschrift, Bild-Alttexte und Formularlabels sind geprüft.

Bei 768 Pixel meldet die elementweise Diagnose das bewusst vergrößerte Trainingsfoto im Private-Lesson-Bereich. Seine rechnerische rechte Kante liegt bei 797,5 Pixel. Der zugehörige 220 Pixel breite Rahmen endet bei 744 Pixel und beschneidet das Foto mit `overflow: hidden`. Die ergänzende Browserdiagnose bestätigt diese Begrenzung: Es gibt keinen sichtbaren Überstand und kein horizontales Dokument-Scrolling.

### Geprüfte Bedienung

- Navigation: alle Abschnittsanker vorhanden; mobile Navigation öffnet per Klick und Tastatur, schließt bei Linkwahl und Escape.
- FAQ: Öffnen und Schließen per Klick, Enter und Leertaste; passende `aria-expanded`, `aria-controls`, benannte Antwortregionen und ausgeblendete geschlossene Antworten.
- Ergebnisregler: Tastatur, Maus und echter Touch-Input; Home/End und Positionen 0/20/50/80/100. Prozentwert, Trennlinie und Bildbeschnitt bleiben synchron. Fokus ist sichtbar.
- Formular: leere Pflichtfelder verhindern die Anfrage; verständliche Fehler und Feldbezüge; gültige Eingaben zeigen ausdrücklich den Demo-Status ohne Nachricht und ohne Buchung. Der Test beobachtet keine schreibenden Netzwerkanfragen. Zurücksetzen leert das Formular und fokussiert Name.
- Preise: alle vier CTAs haben Ziele und wählen den passenden Formularbereich vor. Wiederholte Auswahl stellt den Bereich auch nach einer manuellen Änderung wieder her.
- Rechtsdialoge: Öffnen per Tastatur, klarer Platzhalterstatus, Schließen mit Escape und Leertaste am Schließen-Button sowie Rückkehr des Fokus.
- Keine Fehler in Browser-Konsole, Seiten-JavaScript, Asset-Anfragen oder HTTP-Antworten im finalen Lauf.

Der gespeicherte lokale Prüfbefehl lautet:

```bash
node /workspace/.cloud-onboarding/rayen-qa.mjs --stage final --functional --url http://127.0.0.1:5174 --expected-script index-CPJ5V6Rp.js --output /workspace/.cloud-onboarding/screenshots/final-current
```

Der Prüfserver muss zuvor im Projektordner mit `npm run preview -- --host 127.0.0.1 --port 5174 --strictPort` gestartet sein. Der Playwright-Helfer liegt außerhalb des Anwendungscodes unter `/workspace/.cloud-onboarding/`; in einer neuen Maschine benötigt er die dortige Toolchain und Chromium. Falls die Sandbox lokale Browser-Sockets blockiert, benötigt der Browserlauf die entsprechende Ausführungsfreigabe.

## Visueller Vergleich

Alle fünf lokalen Referenzen und alle vier ursprünglichen Rayen-Bilder wurden tatsächlich im Bildbetrachter untersucht. [VISUAL_SPEC.md](VISUAL_SPEC.md) ordnet jede Originaldatei zu und dokumentiert Farben, Typografie, Abstände, Bildausschnitte, Breakpoints und die eigene Bewegungsgestaltung.

Die Website wurde abschnittsweise fotografiert und verglichen: Navigation/Hero, Ticker/Statistiken, About, Leistungen und Fotogalerie, Lime-Band, Methode, Ergebnisse, Beispielbewertungen, Pakete, Anfrageformular, FAQ, Abschluss und Footer. Vergleiche erfolgten auch bei den ursprünglichen Desktop-Referenzgrößen. Die finale responsive Reihe deckt 1440 × 900, 1280 × 800, 768 × 1024 und 390 × 844 ab.

Aus den Referenzen übernommen wurden die dunkle Fläche, die großen kondensierten Überschriften mit Lime-Zeile, runde CTAs, feine Trennlinien, großzügige Abstände, die versetzte Dreispalten-Galerie, die Pricing-Dreiergruppe mit hervorgehobener Mitte und das Results-Split-Layout. Texte, Marke, Code und Website-Assets sind eigenständig.

Die letzten visuellen Korrekturen betreffen das Foto-Mosaik, die mobile Hero-Bildposition mit sichtbarem Gesicht und die Auswahl saubererer Galerie-Fotos. Die finalen Galerieaufnahmen in allen vier Größen wurden geöffnet; die mobile Aufnahme `final-390x844-gallery-part3.png` zeigt auch das zuletzt ausgetauschte Fußballfoto. Das blaue Trainingsfoto mit eingebranntem Untertitel bleibt auf kleinere Trainings-/Formularflächen begrenzt.

Einzelne Headless-Chromium-Aufnahmen verlieren statische Textschichten, beispielsweise die mobile Slider-Aufnahme bei 100 Prozent. Die 50-Prozent-Aufnahme zeigt diese Texte vollständig; DOM- und Funktionstests bleiben erfolgreich. Die betroffenen Aufnahmen erlauben keine vollständige visuelle Bestätigung jeder Textschicht in genau diesem Capture. Eine Umgestaltung der Website zur Kompensation des Aufnahmefehlers wurde nicht vorgenommen.

### Grenzen der Referenzprüfung

- Die Live-Referenz lieferte HTTP 403; der Browserzugriff scheiterte zusätzlich an der Zertifikatsprüfung der Umgebung. TLS-Prüfungen wurden nicht umgangen.
- Sites war in dieser Sitzung nicht als aufrufbares Werkzeug verfügbar. Die Prüfung verwendet lokale Referenzen, Chromium und Playwright.
- Die vorhandenen Referenzen sind Desktop-Screenshots. Exakte mobile Layouts sowie tatsächliche Live-Hover- und Animationszustände der Referenz lassen sich daraus nicht bestätigen.
- Eine pixelgenaue Übereinstimmung mit der aktuellen Live-Seite wird nicht behauptet. Die visuellen Entscheidungen beruhen auf den zugänglichen Referenzen und sind in der Spezifikation offengelegt.

## Assets und offene Inhalte

### Ergänzung: Dateivorschau unter „Ausgaben“

Die ursprüngliche `index.html` lädt `/src/main.tsx` und ist der Vite-Entwicklungseinstieg. Eine reine Dateivorschau führt TypeScript/TSX nicht aus; sie kann deshalb eine leere Seite zeigen. `npm run build:demo` exportiert jetzt die separate `demo.html` mit gebündeltem JavaScript, CSS, Schriften und Bildern. Vorgerenderter Seiteninhalt bleibt auch sichtbar, wenn eine Dateivorschau JavaScript deaktiviert. Die reguläre Vite- und Cloudflare-Ausgabe wird weiterhin wie zuvor gebaut.

Die Offline-Prüfung rendert den vollständigen HTML-Inhalt ohne Webserver und blockiert HTTP-Anfragen. Sie prüft auf Desktop und Smartphone die sichtbare Headline, eingebettete Bilder/Schriften, Dokumentbreite, FAQ, Slider, Formular-Demo und mobiles Menü. Eine weitere Ansicht mit deaktiviertem JavaScript prüft sichtbaren Inhalt und das eingebettete Hero-Foto. Die Aufnahmen wurden im Bildbetrachter geöffnet.

Der Cloud-Browser blockiert `file://`-Navigation durch eine verwaltete Richtlinie. Deshalb lädt die Browserprüfung die HTML-Datei mit `page.setContent`; sie umgeht keine Netzwerk- oder Zertifikatsprüfung. Das Ergebnis liegt unter `/workspace/.cloud-onboarding/screenshots/demo/demo-report.json`.

Die vier Arbeitsbilder `rayen-football.png`, `rayen-training.png`, `rayen-portrait.png` und `rayen-community.png` sind per SHA-256 bestätigte, byte-identische Kopien der Originale. Originalanleitung und Originalbilder bleiben erhalten. Kein Referenz-Screenshot und kein zufälliges externes Personenbild wird als Website-Asset eingebunden.

Folgende Inhalte bleiben ausdrücklich vorläufig:

- Statistikwerte und Paketdaten bis zur Bestätigung durch Rayen.
- Drei sichtbar gekennzeichnete Beispielbewertungen und neutrale lokale Ergebnisillustrationen; keine behaupteten Kundenerfolge.
- Impressum, Datenschutzhinweise und gegebenenfalls endgültiges Favicon/Social-Vorschaubild.
- Saubere hochauflösende Rayen-Fotos. Die vorhandenen Screenshots enthalten teilweise Untertitel, Oberflächenelemente oder angeschnittene weitere Personen.
- Öffentliche Zahlungslinks und optionaler Formular-Endpunkt. `paymentLinks` und `webhookUrl` in `src/config/integrations.ts` sind leer; dadurch erfolgen keine Zahlungen und kein Nachrichtenversand.

[README.md](README.md) beschreibt alle Änderungsstellen, die späteren Stripe-Payment-Links und den getrennten Anfrage-Webhook. Geheimschlüssel gehören in einen späteren serverseitigen Dienst, nicht in dieses Frontend.

## Cloud-Umgebung

Installationsskript und Startanleitung sind als Cloud-Konfigurationsentwurf gespeichert und zurückgelesen. Ergänzte benutzerdefinierte Domains: `mighty-meeting-758072.framer.app` und `framerusercontent.com`; bestehende Netzwerk-Presets bleiben erhalten. Es sind keine neuen Zugangsdaten erforderlich.

Das Speichern des Entwurfs aktiviert oder veröffentlicht die Konfiguration nicht. Die Änderungen müssen in den Umgebungseinstellungen geprüft und gespeichert werden; danach die Cloud-Umgebung veröffentlichen. Eine Website-Veröffentlichung auf Cloudflare oder über Sites wurde nicht durchgeführt.
