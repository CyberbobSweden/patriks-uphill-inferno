# Changelog — Patriks Uphill Inferno

Gjort av **Cyberbob & Risingbob**.

Versionsnumret syns i spelet (uppe till höger, och på startskärmen) samt i
webbläsarens konsol (F12) vid start. Höj `VERSION` i `index.html` varje gång
ni ändrar något så syns det att en ny build är uppladdad.

## v1.4.0
- **Installera som app** (PWA): manifest.json + service worker, går att
  installera på mobil/dator för helskärms-upplevelse. Knapp på startskärmen
  dyker upp där webbläsaren stödjer det (Chrome/Edge/Android). På iPhone/iPad
  (Safari) finns ingen sådan knapp i webbläsare — där gör man det manuellt via
  Dela-ikonen → "Lägg till på hemskärmen".
- Helskärm aktiveras automatiskt när man trycker STARTA
- **Bugfix:** terräng-grafiken använde av misstag en cykel-sprite som tile
  (syntes som upprepade cyklister över hela banan/bakgrunden) — bytt till en
  riktig gräs/jord-tile
- **Bugfix:** fysiken kraschade orättvist snabbt vid kullar/hopp. Vinkeln
  räknas nu utifrån de faktiska hjulkontakterna (stabilare än tidigare
  momentana derivata), hopp-ramperna är rundade istället för spetsiga, och en
  krasch kräver att felvinkeln håller i sig en liten stund (inte bara en
  enstaka bildruta)

## v1.3.0
- Ljudeffekter, syntade direkt i webbläsaren (Web Audio API) i 8-bit-stil —
  ingen extra ljudfil behövs:
  - Hopp (stigande blip) när cykeln lämnar marken med fart
  - Landning (dov thud) när hjulen tar mark igen
  - Krasch (brus + fallande ton)
  - Varningspip när orken sjunker under 20%
  - Distinkt "bonk"-ljud när orken tar helt slut
- Ny SFX-knapp (💥) nere till höger, oberoende av musik-knappen
- Ljudeffekter av/på-val på startskärmen, sparas i webbläsaren

## v1.2.0
- Startskärm innan spelet kör igång, med:
  - På/av för bakgrundsmusik
  - Volymreglage (kommer ihåg valet till nästa gång via webbläsaren)
- Bakgrundsmusik (loop) i `assets/audio/bgmusic.mp3`
- Musik-knapp nere till höger i spelet för att snabbt stänga av/på under tiden
- (Ljudet startar först efter klick på "STARTA" — det är ett krav från
  webbläsare, autoplay av ljud utan interaktion är blockerat)

## v1.1.0
- Ork-system ("stamina"): dräneras i uppförsbacke i förhållande till lutning,
  återhämtas på platt mark/nedförsbacke
- SHIFT = stå upp och trampa: mer kraft, snabbare dränering
- Bonk-effekt: kraften sjunker gradvis mot ~35% när orken tar slut
- Ork-bar i HUD

## v1.0.0
- Första spelbara versionen
- Fysikbaserad cykel: gravitation, fjädring mot mark, rotation efter
  terrängens lutning
- Prodedurell bana med kullar + hopp-ramper
- Krasch vid för brant landning / hög fart
- Grafik från Cyberbob-sprite-sheeten (bakgrund, terräng-tile, cykel, krasch)
