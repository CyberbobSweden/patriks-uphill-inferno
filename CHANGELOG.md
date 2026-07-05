# Changelog — Patriks Uphill Inferno

Gjort av **Cyberbob & Risingbob**.

Versionsnumret syns i spelet (uppe till höger, och på startskärmen) samt i
webbläsarens konsol (F12) vid start. Höj `VERSION` i `index.html` varje gång
ni ändrar något så syns det att en ny build är uppladdad.

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
