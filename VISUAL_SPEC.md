# Visuelle Spezifikation — Rayen Kouki

Diese Spezifikation beruht auf der tatsächlichen visuellen Betrachtung aller fünf lokalen Referenzbilder und aller vier Rayen-Bilder. Sie beschreibt eine eigenständige Umsetzung mit eigenen deutschen Texten und lokalen Assets. Referenz-Screenshots dienen ausschließlich dem visuellen Vergleich und werden nicht als Website-Bilder verwendet.

Der Abschnitts- und Layoutstand wurde mit den implementierten Komponenten und Styles abgeglichen. Konkrete Werte unten dokumentieren die eigene Umsetzung; sie behaupten keine technisch gemessenen Werte der blockierten Live-Referenz. Der finale Browser- und Build-Status steht im separaten [Prüfbericht](QA_REPORT.md).

## Quellen und Grenzen der Beobachtung

Die Live-Referenz `https://mighty-meeting-758072.framer.app/#pricing` hat bei der Prüfung HTTP 403 zurückgegeben. Damit sind keine belastbaren Beobachtungen ihrer aktuellen Animationen, Hover-Zustände, mobilen Navigation oder mobilen Layouts möglich. Die fünf vorhandenen Referenzen zeigen Desktop-Ausschnitte mit Breiten von 1827 bis 1852 Pixeln. Mobile Anpassungen und Bewegungsparameter werden deshalb als eigene, überprüfbare Gestaltung festgelegt, nicht als beobachtete Eigenschaften der Referenz.

Die Rayen-Dateien sind Screenshots mit begrenzter Auflösung, zum Teil eingebrannten Oberflächenelementen oder Text. Sie ersetzen keine hochauflösenden Originalfotos. Ihre Verwendung verändert Rayens Person nicht künstlich. Die Grenzen müssen im Abschlussbericht und in der Dokumentation erhalten bleiben.

## Sichtbare Merkmale der Referenz

- Fast schwarzer, großflächiger Hintergrund mit kaum sichtbaren grauen Trennlinien; Karten sind geringfügig heller.
- Extrem große, schmale, fette Großbuchstaben. Im Hero liegen drei enge Zeilen zentral über einem stark abgedunkelten Sportfoto; die letzte Zeile ist vollständig Lime.
- Überschriften arbeiten mit einem Wechsel zwischen warmem Weiß und Lime innerhalb derselben Aussage. Kleine Abschnittslabels sind grau, breit gesperrt und besitzen eine quadratische Lime-Markierung.
- Die Navigation verwendet eine kleine kondensierte Wortmarke links, zurückhaltende Links rechts und einen vollständig abgerundeten Lime-CTA. Der sichtbare Header ist etwa 80–95 Pixel hoch.
- Der Ticker ist ein hoher, schmal eingefasster Streifen mit kondensierten weißen Wörtern und kleinen Lime-Trennzeichen.
- Großzügige Abstände stehen engen Zeilenabständen der Display-Schrift gegenüber. Content beginnt in den Screenshots ungefähr 165–175 Pixel vom linken Rand und endet symmetrisch rechts.
- About ist editorial aufgebaut: breite zweizeilige Aussage oben, Text links und Fakten mit horizontalen Trennlinien rechts.
- Die Bildgalerie zeigt drei versetzt angeordnete Spalten, große Sportfotos, 16–20 Pixel Bildradien und schmale Beschriftungszeilen darunter.
- Pricing hat eine zentrierte Überschrift und drei große Karten. Die hervorgehobene mittlere Karte besitzt Lime-Rahmen, einen leicht getönten Hintergrund, ein kleines überstehendes Badge und einen Lime-Button.
- Results nutzt eine breite Bildfläche links und zwei übereinander gestapelte dunkle Informationskarten rechts. Eine Lime-Trennlinie und ein runder Lime-Griff bilden die Schieberegler-Achse.

Fremde Wortmarken, fremde Personen, Kundennamen, Erfolgsgeschichten, Garantieversprechen und Framer-Oberflächen aus den Referenzen werden nicht übernommen.

## Design-Tokens

| Token | Wert | Verwendung |
| --- | --- | --- |
| `--bg` | `#050505` | Grundfläche, Hero-Auslauf, Footer |
| `--surface` | `#111111` | Pricing, Formular, Ergebnis-Karten und Dialoge |
| `--surface-raised` | `#171717` | Bereitgestellte ergänzende Oberfläche |
| `--lime` | `#D8FF3E` | Schwerpunkt, Buttons, Linien, Markierungen |
| `--ink` | `#F4F2EA` | Überschriften und Haupttext |
| `--muted` | `#AAA9A3` | Beschreibungen und Navigation |
| `--border` | `rgba(244, 242, 234, .13)` | Kartenrahmen, Zeilentrennung |
| `--display` | `"Anton", Impact, sans-serif` | Selbst gehostete kondensierte Display-Schrift |
| `--body` | `"Inter", Arial, sans-serif` | Selbst gehostete Leseschrift |
| `--container` | `1200px`; ab 1700px Viewport `1440px` | Normale beziehungsweise sehr breite Inhaltsfläche |
| Containerbreite | `min(var(--container), calc(100% - 48px))` | Mindestens 24px Seitenrand, Rest symmetrisch; unter 600px `calc(100% - 40px)` |
| `--section-space` | `clamp(80px, 9vw, 144px)` | Vertikaler Abschnittsabstand |
| Headerhöhe | `84px`; bis einschließlich 900px `72px` | Implementierte feste Navigation |
| `--radius` | `20px` | Karten, Bilder, Slider |
| Control-Radius | `999px` | CTA und kleine Badges; Slider-Griff rund |
| Reveal-Easing | `[.22, 1, .36, 1]` | Motion-Übergänge |

Die benannten CSS-Variablen stehen in `src/styles/globals.css`. Ergänzende konkrete Stilwerte: empfohlene Pricing-Karte mit Lime-Verlauf `.045 → .01`, Formularfehler `#F4A296`, Standard-Buttons 54 Pixel, Menübutton 44 Pixel und Slider-Griff 48 Pixel. Abschnittsstyles liegen zusätzlich in `services.css`, `results.css`, `pricing.css`, `lesson.css`, `faq.css` und `closing.css`.

Die exakten Farbwerte und Schriften sind eigene Umsetzungsentscheidungen innerhalb der sichtbaren Referenzsprache. Die Referenz-Schrift wurde nicht technisch identifiziert. Anton und Inter werden lokal geladen, sodass die fertige Seite keine Font-CDN-Abhängigkeit braucht. Display-Font regulär 400, Lesetext 400–500, Controls 600–700; Anton ist bereits visuell sehr fett und wird nicht künstlich verdickt.

### Typografische Größen und Rhythmus

| Element | Desktop | Tablet | Smartphone |
| --- | --- | --- | --- |
| Hero-Headline | `clamp(72px, 10.6vw, 154px)`; bei 1440px etwa 153px | Bei 768px etwa 81px | Unter 600px `clamp(58px, 16vw, 86px)`; bei 390px etwa 62px |
| Abschnittsheadline | Generisch `clamp(44px, 5.8vw, 82px)` | Meist 44–58px, nach Abschnitt | Meist 43–56px, nach Abschnitt |
| Große Leistungszeile | `clamp(38px, 4vw, 52px)` | Bis 1024px `clamp(34px, 4vw, 46px)` | Unter 768px `clamp(31px, 5.4vw, 40px)` |
| Pricing-Titel / Preis | 14px gesperrt / `clamp(62px, 4.8vw, 82px)` | 14px / mindestens 62px | 14px / 62px; Private Lesson 34px / 43px |
| Fließtext | Basis 16px; Abschnittstext 14–18px | 14–16px | 13–16px; Formcontrols 16px |
| Eyebrow / Label | 11–12px | 11–12px | 10–11px |
| Navigation / Button | 13–14px | 13–14px | 13–14px |

Generische Display-Zeilenhöhe `1.03`, Letterspacing `-.015em`; Hero `1.07`, mobil `1.12`, maximal drei feste Zeilen. Lesetext-Zeilenhöhe `1.65–1.75`. Abschnittslabels sind 12px mit `.2em` Letterspacing; mobil einzelne Labels 10px. Wiederkehrende Abstände: 8, 12, 16, 20, 24, 28, 32, 36, 48, 54, 64, 80 und bis 144 Pixel. Section-Heading-Margin 54px, mobil 36px; Pricing 70px beziehungsweise 50px. Standard-Buttons 54px, Pricing-Buttons 50px, mobile Hero-Buttons 50px, Formcontrols mindestens 49px beziehungsweise 51px. Menübutton und Footer-Linkflächen mindestens 44px.

## Zuordnung aller Referenzbilder

Alle folgenden Pfade liegen relativ zur Repository-Wurzel unter `Rayen_kouki_project/it_should_look_like_this/`.

| Datei | Auflösung | Beobachtung | Verwendete Abschnittssprache |
| --- | --- | --- | --- |
| `Screenshot 2026-10-04 234434.png` | 1852 × 996 | Fullscreen-Sportfoto, dunkles Overlay, zentraler dreizeiliger Hero, letzte Zeile Lime; dezente Navigation und zwei runde CTAs | Navigation, Hero, finale CTA-Typografie |
| `Screenshot 2026-10-04 234518.png` | 1835 × 977 | Ticker mit Lime-Punkten; breite About-Aussage, Text links und große Fakten rechts | Ticker, Statistikleiste, About, Leistungszeilen und feine Trennlinien |
| `Screenshot 2026-10-04 234536.png` | 1827 × 981 | Dreispaltige versetzte Trainingsbilder mit großen Radien, dunklen Zwischenräumen und kurzen Bildunterschriften | Eigene dreispaltige Rayen-Trainingsgalerie direkt nach den Leistungszeilen, zusätzlich Bildinszenierung in About; keine Referenzfotos übernehmen |
| `Screenshot 2026-10-04 234558.png` | 1842 × 975 | Zentrierte Titelzeile, drei Pricing-Karten, kräftige Preise, hervorgehobene Mitte, kleine Badge und breite Buttons | Pricing: ähnliche visuelle Gewichtung für drei digitale Pakete, separate Private-Lesson-Zeile |
| `Screenshot 2026-10-04 234614.png` | 1842 × 985 | Links breite Vergleichsfläche mit Lime-Griff, rechts zwei dunkle Ergebnis-Karten; weiße und Lime-Typografie | Results-Slider, Testimonials-Karten und Split-Layout; fremde Ergebnisse nicht übernehmen |

Es liegen keine direkten Bildreferenzen für Garantie, Methode, Formular, FAQ oder Footer vor. Diese Abschnitte verwenden dieselben überprüften Farben, Typografie, Linien, Abstände und Kartenformen. Ihre konkreten Layouts sind eigenständig.

## Zuordnung aller Rayen-Bilder und Bildausschnitte

Alle Originaldateien liegen unter `Rayen_kouki_project/rayen_bilder/`. Arbeitskopien erhalten sprechende Dateinamen unter `public/assets/rayen/`; die Originale bleiben erhalten. Pfade, Alternativtexte und Positionen werden zentral in `src/data/site.ts` geführt.

| Originaldatei | Auflösung | Tatsächlicher visueller Inhalt | Vorgesehener Arbeitsname und Verwendung |
| --- | --- | --- | --- |
| `Screenshot 2026-10-04 235325.png` | 687 × 797 | Rayen in burgunderrotem Fußballtrikot im Spiel, laufend, mehrere Spieler und Zuschauer im Hintergrund; ein Carousel-Pfeil am rechten Bildrand | `rayen-football.png`: Hero, Football-Preview, Galerie links oben/rechts unten und Open-Graph-Ausgangspunkt; Rayen bleibt erkennbar |
| `Screenshot 2026-10-04 235518.png` | 572 × 902 | Rayen im blauen Trikot beim Laufen; eingebrannter fremder Untertitel rechts und kleines Social-Overlay unten links | `rayen-training.png`: kleinere Trainings-Preview und Private Lesson; für die große Galerie wegen eingebrannter Schrift nicht ausgewählt. Ausschnitt/Overlay ersetzen kein sauberes Originalfoto |
| `Screenshot 2026-10-04 235545.png` | 362 × 807 | Rayen im schwarzen Sportoutfit, frontal mit angehobenen Fäusten; starke vertikale Perspektive, angeschnittene weitere Person links | `rayen-portrait.png`: About, Nutrition-Preview und hohes Galerie-Mittelbild; geringe Auflösung bleibt insbesondere bei größeren Screens erkennbar |
| `Screenshot 2026-10-04 235625.png` | 877 × 565 | Gruppenaufnahme am Outdoor-Trainingsplatz, Personen im Vorder- und Hintergrund | `rayen-community.png`: Galerie links unten und rechts oben, Private-Lesson-Preview und finaler CTA; keine Namen, Kundenbewertungen oder Transformationen daraus ableiten |

Hero: das Fußballfoto rechts asymmetrisch inszenieren, Desktop-Bildfläche ab 33 % der Breite mit 67 % Bildbreite; `object-fit: cover`, zentraler Wert `rayenImages.hero.position: 50% 41%`. Eine horizontale Bildmaske verläuft von transparent zu Schwarz und rechts wieder zu transparent. Overlay: links `#050505`, bei 32 % ungefähr 80 %, bei 68 % ungefähr 46 %, rechts ungefähr 68 % Schwarz; zusätzlicher schwarzer Verlauf unten. Sättigung `.65`. Hero-Text bleibt zentral und breit, während Rayens Silhouette überwiegend rechts sichtbar ist. Der Carousel-Pfeil wird durch normalen Ausschnitt oder Overlay am rechten Rand unauffällig; keine künstliche Änderung der Person.

Bis 900px liegt die Bildfläche ab 18 % mit 82 % Breite; unter 600px füllt sie 100 % und beginnt 85px unter der Hero-Oberkante. Die finale mobile Bildmaske bleibt an den Rändern transparent und wird zwischen 18 % und 75 % voll sichtbar. Der zentrale Inline-Wert `50% 41%` gilt weiterhin. Mobile Schwarzüberlagerung etwa 45–50 %, unten vollständig schwarz. Ein 104px Abstand vor der mobilen Beschreibung schafft zwischen Headline und Text Platz für Rayens Gesicht. Gesicht und Laufpose werden anhand tatsächlicher Screenshots kontrolliert; der untere Übergang schützt die CTA-Buttons.

About-Portrait: `rayenImages.portrait.position: 50% 32%`, Bildfläche maximal 390px breit und Desktop 500px hoch; bis 768px 430px, unter 600px 440px. Die niedrige Ausgangsauflösung bleibt eine sichtbare Grenze. Football-Leistungsbild verwendet `50% 48%`, Trainingsfoto `38% 22%`. Das Trainingsbild erscheint in der Lesson-Bildfläche mit 125 % Breite und dunklem rechten Verlauf, um den eingebrannten Untertitel zurückzunehmen. Der Untertitel bleibt ein dokumentierter Asset-Mangel. Community-Foto `50% 50%`; im finalen CTA vollflächig und stark abgedunkelt, nicht als Kundenbeleg.

Hochauflösende Originale werden später an denselben zentralen Pfaden ersetzt. Es werden keine zufälligen Stockfotos, fremden Fitness-Personen oder Bilder der Referenz geladen. Ein sinnvoller Alt-Text beschreibt den konkreten Inhalt, beispielsweise „Rayen Kouki beim Fußballtraining im burgunderroten Trikot“. Dekorative wiederholte Hero-Bilder erhalten leere Alt-Texte, wenn dieselbe Information bereits unmittelbar zugänglich ist.

## Abschnittsplan

### 1. Navigation

84 Pixel hoher fixierter Header mit `RK`-Monogramm und Rayen-Wortmarke links. Rechts deutsche Sprunglinks zu About, Leistungen, Methode, Ergebnissen, Paketen und FAQ sowie Lime-Button „Private Lesson“. Zu Beginn transparent vor dem Hero; nach mehr als 24 Pixel Scrollen `rgba(5,5,5,.83)`, `backdrop-filter: blur(20px)` und feine Unterkante. `scroll-padding-top: 100px` hält Ankerziele frei. Mobile Navigation bis einschließlich 900px: 72-Pixel-Header, 44-Pixel-Menübutton und große Links im dunklen Panel. Panel beginnt unter dem Header und hat `max-height: calc(100svh - 72px)` mit eigenem vertikalen Scrollen. Offenes Menü sperrt das Dokument-Scrollen; Escape schließt und fokussiert den Menübutton, Auswahl schließt, ein Wechsel über 900px schließt automatisch. Tab-Zyklus zwischen Links und Menübutton wird geführt.

### 2. Hero

Fullscreen-Wirkung mit Desktop-Mindesthöhe `max(820px, 100svh)`, bis 900px `max(800px, 100svh)`, unter 600px `100svh`. Eyebrow „RAYEN KOUKI · FOOTBALL & FITNESS COACHING“ über der Headline mit kleiner Lime-Markierung. Eigener Haupttext in drei Zeilen:

> DEIN SPIEL.<br>
> DEIN FOKUS.<br>
> DEIN LEVEL.

Die dritte Zeile Lime, die ersten beiden Off-White. Headline zentral innerhalb des Containers; der asymmetrisch rechts liegende Rayen-Fußballhintergrund ersetzt die fremde Person. Kurze Beschreibung darunter, maximal 580px, und zwei CTAs „Pakete ansehen“ und „Private Lesson buchen“. Desktop-Abstand vor der Beschreibung 33px; unter 600px final 104px, damit Rayens Gesicht zwischen Headline und Beschreibung sichtbar bleibt. Unten kleine Indexzeile „01 / THE NEXT LEVEL“ und Link „Entdecke das Coaching“; Instagram wird in About, CTA und Footer angeboten. Desktop-Content-Padding 140px oben/70px unten, mobil 125px/110px. Die Bilddominanz, enge Großbuchstaben und viel dunkler Raum entsprechen der sichtbaren Referenz; die deutschen Aussagen sind eigenständig.

### 3. Ticker und Statistikleiste

Ticker zwischen feinen Linien, 20px vertikales Padding und Anton 30px, mobil 24px; Begriffe FOOTBALL, FITNESS, NUTRITION, DISCIPLINE, PERFORMANCE und CONSISTENCY, jeweils Lime-Separator. Zwei identische Läufe ermöglichen den endlosen Wechsel; visuelle Läufe `aria-hidden`, echte Textalternative als `sr-only` vorhanden. Clip nur den Ticker. Darunter drei Statistikfelder mit Anton-Zahlen 62px beziehungsweise mobil 45px und Labels. Werte `100+ Athleten`, `3 Coaching-Bereiche`, `1 Ziel: bessere Performance` sind zentral als vorläufig gekennzeichnet; sichtbarer Hinweis „Vorläufige Werte — noch nicht bestätigt.“ Keine fremden Referenz-Kennzahlen kopieren.

### 4. Über Rayen

Breite zweizeilige Headline „EIN COACH. EIN KLARER PLAN. / DEIN SPIEL IM FOKUS.“ mit Lime-Schlussteil. Darunter Portrait links und eigener Vorstellungstext rechts, Grid `.8fr 1.2fr` mit flüssigem Abstand 40–100px. Drei Fakten mit Nummern und Trennlinien: Technik mit Absicht, Disziplin im Alltag, persönlicher Kontakt. Keine erfundenen Berufsjahre, Auszeichnungen oder Kundenzahlen. Instagram-Button; unter 600px Headline, Bild, Text und Fakten in natürlicher einspaltiger Lesereihenfolge.

### 5. Leistungen

Headline „ARBEITE AN / DEINEM VORTEIL.“ Fünf große horizontale Zeilen: Football Footwork, Football Shooting, Fitness Coaching, Nutrition Coaching, Private Lessons. Desktop pro Zeile Nummer, Titel/Beschreibung, 200 × 150px Bildvorschau und runder Pfeil; Mindesthöhe 206px. Feine Linien, Hover und Tastaturfokus in Lime. Zusätzliche Details sind bei Fokus/Hover sichtbar, auf Touchgeräten und unter 768px stets sichtbar. Fine-Pointer-Preview folgt innerhalb eines kleinen Bereichs (±12px horizontal, ±10px vertikal), bei Reduced Motion deaktiviert. Unter 768px Preview unter dem Text, maximal 200 × 125px. Nutrition nutzt Rayens vorhandenes Portrait, kein fremdes Food-Stockfoto.

Direkt nach den Zeilen folgt die markante eigene Trainingsgalerie als konkrete Entsprechung der Referenz `234536`: drei Desktopspalten, 24px horizontaler Abstand, 28px vertikaler Abstand und 100px Abstand zum letzten Leistungsbereich. Die Mitte beginnt 62px tiefer, rechts 28px tiefer. Fünf Bildverwendungen aus drei eigenen Assets: links „AUF DEM PLATZ“ (Fußball, 4:5) und „GEMEINSAM TRAINIEREN“ (Community, 4:3); mittig „FOKUS & DISZIPLIN“ (Portrait, 3:5); rechts „DEIN UMFELD. DEIN ANTRIEB.“ (Community, 4:3) und „DRANBLEIBEN“ (Fußball, 4:5). Fußball und Community werden bewusst zweimal verwendet, ohne daraus unterschiedliche Kundengeschichten abzuleiten.

Der blaue Trainings-Screenshot bleibt wegen des in der großen Galerie störenden eingebrannten Untertitels auf kleinere Trainings-Previews und die Lesson-Bildfläche mit Ausschnitt/Overlay beschränkt. Die Galerie wählt sauberere vorhandene Bildinhalte, statt Schrift künstlich aus den Originalfotos zu entfernen oder Rayens Person zu verändern. Alle vier Rayen-Assets bleiben websiteweit verwendet; die begrenzte Auflösung und Screenshot-Artefakte sind weiterhin dokumentierte Grenzen.

Alle Galerie-Bilder besitzen 20px Radien, Sättigung `.7`, zentral gepflegte Bildpositionen und kleine eigene Caption-Zeilen mit Nummer, Trennlinie und 10px Schrift. Inhalte, Reihenfolge, Bildwahl, Caption und Format liegen in `site.trainingGallery.columns`; Formatwert `kind` ist `tall`, `portrait` oder `wide`. Bis 900px Abstand 18px und oberer Abstand 70px. Unter 600px einspaltig, keine versetzten Spalten, oberer Abstand 56px; hohes Portrait dann ebenfalls 4:5. Die Darstellung übernimmt Mosaik-Rhythmus und Bildgewichtung, verwendet jedoch ausschließlich vorhandene Rayen-Dateien und keine fremden Referenzbilder.

### 6. Garantie-/Betreuungsband

Breiter Lime-Abschnitt mit schwarzer Headline „MEHR FOKUS. / MEHR MÖGLICHKEITEN.“, `clamp(45px, 5vw, 72px)`. Eigener Text beschreibt strukturiertes Training und persönliche Begleitung, kleine Anspruchszeile und dunkler CTA „Deinen Einstieg finden“. Desktop-Split `1.35fr 1fr`, bis 768px einspaltig. Keine Leistungs-, Geld-zurück- oder 90-Tage-Garantie aus der Referenz behaupten.

### 7. Methode

Headline „EIN PLAN. / DREI SCHRITTE.“ Drei gleich große Spalten mit `01`, `02`, `03`, Anton-Titeln ASSESS, BUILD, REFINE und deutschen Erklärungen. Dunkler Grund, dezente Trennlinien, Lime-Nummern 70px, Schritttitel 42px. Drei Spalten bleiben bis 600px bestehen, darunter gestapelt mit Nummer neben dem Text (48px/34px). Einmalige kurze Scroll-Einblendungen; bei Reduced Motion sofort sichtbarer Inhalt.

### 8. Ergebnisse

Headline „FORTSCHRITT / WIRD SICHTBAR.“ links und erklärender Text rechts. Vergleichsfläche und drei Notizkarten im Desktop-Grid `1.5fr 1fr`, 24px Abstand. Bildrahmen 4:3, mobil unter 768px 5:4 und alles einspaltig. Lime-Trennlinie, runder 48px-Griff, native transparente Range-Eingabe über der Fläche mit sichtbarem Rahmenfokus, zugänglichem Namen und Prozentanzeige. Regler 0–100, initial 50, bedienbar mit Maus, Touch und Tastatur. Drei Notizen: Technik beobachten, Fokus überprüfen, nächsten Schritt planen; keine erfundenen Leistungswerte.

Beide Vergleichsbilder lesen ihren Ausschnitt aus `site.results.before.position` beziehungsweise `site.results.after.position`; ein späterer Austausch ist damit ebenso zentral konfigurierbar wie Hero und Galerie.

Es liegen keine echten zusammengehörigen Vorher-/Nachher-Bilder vor. Deshalb den Vergleich ausdrücklich als Vorschau beziehungsweise Demonstration kennzeichnen und neutrale lokale Illustrationen oder klar als Beispiel markierte Trainingsansichten verwenden. Keine zwei verschiedenen Rayen-Fotos als belegte Transformation darstellen. Keine erfundenen Kilogramm-, Zeit- oder Kundenergebnisse. Ergebnis-Karten beschreiben messbare Trainingsziele oder sichtbar gekennzeichnete Platzhalter, bis echte Daten bereitstehen.

### 9. Testimonials

Headline „RAUM FÜR / DEINE ERFAHRUNG.“ Drei dunkle Karten, 28px Padding, schmaler Rahmen, kleine Labelzeile „BEISPIEL / PLATZHALTER“, Lime-Anführungszeichen und nummerierter Kreis statt erfundener Kundenfotos. Namen „Beispiel Athlet 01/02/03“ und Texte benennen ausdrücklich den Platzhalterstatus; zusätzlich ein gemeinsamer Hinweis. Bis 768px einspaltig. Keine Sternebewertung, echte Kundenidentität oder bestätigte Erfolgsgeschichte. Das Gruppenfoto bleibt ein separater Trainingsmoment.

### 10. Pakete

Zentrierte zweifarbige Headline „KLEINER SCHRITT. KLARER FOKUS.“, Desktop `clamp(46px, 5.2vw, 76px)`, Zeilen als gemeinsame Titelzeile; mobil unter 640px zweizeilig. Drei digitale Angebote in der Referenz-Dreiergruppe: Football Footwork 50 €, Football Shooting 50 €, Nutrition Basics 40 €, jeweils einmalig und vorläufig. Shooting hervorgehoben mit Lime-Rahmen, leicht getöntem Verlauf und Badge „UNSER FOKUS-PAKET“. Digitale Karten mindestens 480px Inhaltsfläche, Tablet 490px, mobile Höhe automatisch. Padding Desktop 36px/30px, Features mit Lime-Häkchen und separaten Linien, CTA am unteren Rand.

Eigene Featurelisten: Footwork — Trainingsvideos, gezielte Footwork-Übungen, Schritt-für-Schritt-Anleitungen, eigenes Tempo; Shooting — Technikübungen, erklärte Schussabläufe, strukturierter Trainingsplan, Wiederholungsübungen; Nutrition — Ernährungsgrundlagen, einfache Struktur, praktische Empfehlungen, Routinen. Private Lesson als breite vierte Karte direkt darunter: persönlicher Termin, individueller Schwerpunkt, direktes Feedback, Termin/Ort nach Absprache; Preis „Individuell“ und Einheit „nach Absprache“. Der Empfohlen-Status ist zentral änderbar.

Nicht konfigurierte oder ungültige Zahlungslinks führen zum Anfrageformular, wählen dort den passenden Bereich vor und zeigen ehrlichen Demo-Hinweis. Nur konfigurierte öffentliche HTTPS-Checkout-URLs ohne eingebettete Zugangsdaten werden geöffnet. Kein sofortiger Videozugriff oder erfolgreicher Checkout wird vorgetäuscht. Bis 900px zwei digitale Spalten, bis 640px eine; Private Lesson wird von drei Teilspalten auf zwei und dann eine gestapelt. Features und lange Texte bleiben vollständig lesbar.

### 11. Private Lesson

Headline „DEIN TRAINING. / GANZ PERSÖNLICH.“ Desktop-Split `.9fr 1.1fr`: links Ansatz und vorhandenes Trainingsfoto, rechts dunkles Formularpanel mit 36px Padding. Bis 900px Formular darunter, bis 600px einspaltige Felder und 27px/22px Panel-Padding. Formulartitel „LASS UNS DEINEN PLAN FINDEN.“ Sichtbare Labels für Name, E-Mail, Telefon, Bereich, Zeitraum und Nachricht. Telefon optional, übrige Pflichtfelder markiert. Lokale Validierung bei Blur/Submit, Fehler mit Feldbezug und Zusammenfassung, Fokus auf erstem ungültigem Feld. Status als Live-Region mit Fokus, Instagram-Kontakt und Reset. Demo ohne Endpunkt übermittelt nichts; eine konfigurierte Integration bestätigt nur Übermittlung, keine Buchung. Keine Eingaben in Konsole oder dauerhafter Browserablage.

### 12. FAQ

Headline „KLARE FRAGEN. / KLARE ANTWORTEN.“ links, Accordion rechts, Grid `1fr 1.25fr`, bis 900px untereinander. Sechs Fragen mit kleiner Nummer und Lime-Plus, das geöffnet um 45 Grad rotiert. Nur eine Antwort gleichzeitig offen, erneutes Aktivieren schließt. Echte Buttons mit `aria-expanded`, `aria-controls` und per `aria-labelledby` benannten Antwortregionen; geschlossene Antworten `aria-hidden` und visuell ausgeblendet. Natürliche CSS-Grid-Aufklappbewegung, kein überlagernder Text. Antworten nennen tatsächlichen Demo-/Verkaufsstatus.

### 13. Finaler CTA

Großzügiger dunkler Bereich mit monumentaler Headline „BEREIT FÜR / DEIN NÄCHSTES LEVEL?“, Desktop `clamp(43px, 6.8vw, 100px)`, mobil `clamp(40px, 10.8vw, 56px)`. Zweite Zeile Lime, eigene Einladung, Buttons zu Paketen und Private Lesson sowie zusätzlicher Instagram-Link. Vorhandenes Community-Foto vollflächig mit Sättigung `.45` und etwa 83–95 % schwarzem Overlay. Keine neue externe Bildquelle. Unter 600px Buttons gestapelt.

### 14. Footer

Rayen-Wortmarke 54px, Claim, interne Navigation und Instagram in drei Desktopspalten (`2fr 1fr 1fr`), bis 768px Wortmarke über zwei Linkspalten. Copyright mit aktuellem Jahr und Link nach oben unter feiner Trennlinie. Impressum und Datenschutz öffnen native modale `<dialog>`-Elemente mit ausdrücklich unvollständigen Platzhaltern, maximal 560px Breite und 85svh Höhe. Abdunklung und Blur im Backdrop; Fokusführung des nativen Dialogs, Schließen-Button, Escape und Klick auf Backdrop. Keine erfundene Anschrift. Linkflächen mindestens 44px und sichtbarer Fokus.

## Responsive Entscheidungen

Tatsächliche Breakpoints: 600px für mobile Basis-/Formular-/Hero-Styles, 640px für Pricing, 767/768px für Services/Results/About/Testimonial-/Footer-Grids, 900px für Navigation/Pricing/FAQ/Lesson, 1024px für Services/Results-Feinabstimmung und 1100px für kompaktere Desktop-Abstände. Ab 1700px wächst die maximale Containerbreite von 1200 auf 1440px. Grundrand mindestens 24px, unter 600px 20px; bei begrenztem Container ergibt sich der zusätzliche Rand symmetrisch. 1440px Viewport hat bei 1200px Inhalt 120px Rand, 1280px Viewport 40px; diese Werte sind Teil der tatsächlichen Umsetzung.

- Bei 1440 × 900: große Hero-Typografie, Rayen asymmetrisch rechts, drei Pricing-Spalten, Results als 60/40-Split.
- Bei 1280 × 800: etwas kleinere Headline und vertikale Abstände; Hero-Buttons dürfen nicht aus dem sichtbaren Hero gedrängt werden.
- Bei 768 × 1024: mobile Navigation, Hero etwa 81px Display, About/Results noch zweispaltig, Testimonials einspaltig und Pricing zweispaltig; Lesson-Formular unter dem Ansatz. Unter 768px werden Services/Results gestapelt, About folgt unter 600px.
- Bei 390 × 844 und zusätzlich 375 Pixel Breite: drei lesbare Hero-Zeilen, 85px versetztes Hero-Bild und 104px Abstand vor der Beschreibung zugunsten des sichtbaren Gesichts, CTA-Buttons mit ausreichender Fläche, einspaltige Galerie und Inhalte, vollständige Formularlabels, keine überbreiten Leistungswörter. Bildfokus und Headerhöhe ausdrücklich prüfen.

Auf keinem Breakpoint entsteht horizontales Dokument-Scrolling. Lange deutsche Wörter können passende Umbrüche erhalten, dürfen jedoch keine unlesbar kleinen Display-Größen erzwingen. Kein globales Verstecken von Overflow zur Verschleierung fehlerhafter Layoutbreiten. Bilder erhalten feste Seitenverhältnisse und Größenangaben, lokal gehostete Fonts mit `font-display: swap`; notwendiger Inhalt bleibt auch vor abgeschlossenen Animationen sichtbar.

## Animation und Interaktion

Die folgenden Parameter sind eigene Umsetzungswerte, weil die statischen Referenzen Bewegung nicht belegen:

- Hero-Text: 36px vertikal und Opazität 0 → 1, 750ms, Zeilenabstand 120ms; Eyebrow und Beschreibung mit kurzen eigenen Fade-Verzögerungen.
- Mobiles Menü: 200ms Opazität und 12px vertikale Bewegung; bei Reduced Motion `initial: false`, Dauer 0 und keine Exit-Bewegung.
- Scroll-Reveal: einmalig, 28px vertikal, 600ms, Sichtbarkeitsschwelle `.12`; Reduced Motion startet mit `initial: false` und ohne Delay.
- Hero-Parallax: `hover: hover` und `pointer: fine`, Scroll-Fortschritt 0–1 entspricht 0–30px. Auf Touchgeräten und bei Reduced Motion deaktiviert.
- Ticker: kontinuierlicher linearer Lauf über 38 Sekunden; bei Reduced Motion statisch, mit echter Textalternative für Screenreader.
- Button/Link: 220–250ms Farb-/Rahmenwechsel, Button maximal 2px Anheben, Pfeil 3px nach rechts/oben; keine layoutändernde Skalierung.
- Pricing-Karte: 4px Anheben, 220ms; Lime-Rahmen am empfohlenen Paket bleibt erkennbar.
- FAQ: CSS-Grid-Höhenwechsel 350ms, Opazität 300ms, natürliche Dokumenthöhe; bei Reduced Motion ohne Übergang.
- Results: direkte Slider-Bewegung ohne verzögernde Spring-Animation; Griff und Trennlinie folgen unmittelbar dem nativen Range-Wert.
- Cursor-Follow-Preview: ausschließlich bei `hover: hover` und `pointer: fine`, höchstens ±12px/±10px, Spring-Stiffness 170/Damping 24; weder Fokus noch Lesetext verdecken. Der Systemcursor und Tastaturbedienung bleiben nutzbar.

Bei `prefers-reduced-motion: reduce` entfallen Parallax, Tickerbewegung, Cursor-Follow und Positions-Reveals. Inhalte erscheinen unmittelbar; notwendige Zustandswechsel funktionieren weiterhin. Anker-Scrolling erfolgt ohne erzwungene weiche Bewegung. Keine Animation darf einen Kontrollzustand, Text oder Fokus unsichtbar halten.

## Prüfung vor Abschluss

Die lokale Website wird bei 1440 × 900, 1280 × 800, 768 × 1024 und 390 × 844 fotografiert; zusätzlich werden 375 Pixel und 1024 Pixel Breite auf Overflow und Bedienbarkeit geprüft. Abschnittsweise Vergleichsreihenfolge: Navigation/Hero, Ticker/About, Bildinszenierung/Leistungen, Pricing, Results, restliche Abschnitte und mobile Anpassung. Verglichen werden konkrete Zeilenumbrüche, Typografiegewicht, dunkle Bildüberlagerung, Hero-Höhe, Randabstände, Card-Radien, Lime-Verteilung und Inhaltsbreite.

Interaktionsprüfungen umfassen Navigation vor/nach Scrollen, mobile Navigation geöffnet/geschlossen, Leistungs-Hover und -Fokus, FAQ geöffnet/geschlossen, Slider bei 0/50/100 und per Tastatur, Formularfehler und ehrlichen Integrationsstatus, Pricing-CTA, Reduced Motion und sichtbare Fokusmarkierungen. Build und TypeScript müssen erfolgreich sein; Browser-Konsole, fehlende Assets, Bildpfade und Layout-Shifts werden geprüft.

Ein visueller Vergleich mit den fünf vorhandenen Desktop-Screenshots ist möglich. Eine genaue Übereinstimmung mit der aktuellen Live-Referenz, deren Animationen oder deren mobilen Zuständen wird wegen des HTTP-403-Zugriffs und fehlender mobiler Referenzbilder nicht behauptet. Hochauflösende Rayen-Originale, bestätigte Statistiken, echte Ergebnisse/Testimonials, Zahlungslinks und rechtliche Texte bleiben klar benannte spätere Inhalte.
