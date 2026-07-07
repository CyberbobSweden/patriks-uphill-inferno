# Changelog — Patriks Uphill Inferno

Gjort av **Cyberbob & Risingbob**.

Versionsnumret syns i spelet (uppe till höger, och på startskärmen) samt i
webbläsarens konsol (F12) vid start. Höj `VERSION` i `index.html` varje gång
ni ändrar något så syns det att en ny build är uppladdad.

## v1.8.1
- **Fixat att spriten vickade/flimrade konstant** (tack för att ni flaggade
  detta - obehagligt att titta på i längden). Två separata orsaker hittade
  och fixade:
  1. Animationen fortsatte cykla igenom pedal-ramarna även när cykeln stod
     helt still (koden tvingade fram en minimihastighet för animationen).
     Fryser nu på en bildruta i vila.
  2. De 9 animationsramarna har lite olika bredd (91-93px), vilket gav en
     omärkbar men irriterande sidledes pixel-vickning varje gång bilden
     bytte ram. Använder nu en fast center-referens för alla ramar istället.

## v1.8.0
Förenklat kontrollerna efter referensbilder från Mad Skills Motocross:

- **Tog bort den separata wheelie-mekaniken** (eget läge med maxgräns och egen
  ork-kostnad). Kändes onödigt komplicerat och opålitligt.
- **Luta fram/bak (↑/↓) fungerar nu hela tiden** - både på marken och i
  luften, precis som viktförskjutning på en riktig cykel. Lutar du bakåt med
  tillräcklig fart lyfter framhjulet naturligt genom fysiken (en svagare
  "självrätande" fjäder mot markytan istället för ett hårt lås), inte via ett
  separat påslaget specialläge. Mer realistiskt och enklare att förstå.
- **Touch-knapparna för gas/broms** har nu tydliga röda/gröna ringar (samma
  visuella språk som i referensen) men är fortfarande stora tap-zoner under
  ytan för träffsäkerhet - bästa av båda världar.
- 80-tals retro-känslan i övrigt oförändrad.

## v1.7.0
- **Kritisk fix:** kameran följde bara banan i sidled, inte på höjden. Eftersom
  v1.6.0 lade till en riktig uppförsbacke klättrade banan så pass högt att
  spelaren till slut hamnade ovanför synfältet och "försvann" ur bild (synligt
  som en enda jordfärgad yta som täckte hela skärmen). Kameran följer nu även
  vertikalt.
- Samma typ av bugg fanns i "föll av banan"-kollisionen (ett fast Y-värde
  istället för relativt till lokal marknivå) - fixad på samma sätt.
- **Nytt: manuellt hopp** (MELLANSLAG på dator, egen knapp på mobil) - ger ett
  hopp rakt upp, kostar lite ork. Bra för att aktivt ta sig över vatten/hinder
  istället för att bara förlita sig på ramperna.
- Ork-systemet förklaras nu kort direkt på startskärmen.

## v1.6.1 (hotfix)
- En lös extra klammer (`}`) hade smugit sig in i koden under förra
  uppdateringen, vilket gav ett JavaScript-syntaxfel i webbläsaren och
  gjorde att **hela spelet vägrade starta** (STARTA-knappen gjorde ingenting).
  Hittad och borttagen. Har nu även lagt in en Node.js syntax-koll som steg
  innan jag skickar en ny version, för att undvika att detta händer igen.
- Mindre fix: en webbläsar-deprecation-varning (`apple-mobile-web-app-capable`)
  tystad genom att lägga till den moderna motsvarigheten också.

## v1.6.0
Stor uppdatering efter speltest-feedback (7 separata punkter, alla adresserade):

1. **Parallax såg "sektionerad" ut** – bakgrunden är nu procedurellt ritad
   (bergskedjor + moln beräknas matematiskt utifrån position i banan) istället
   för en upprepad bild. Kan aldrig ge en synlig skarv, oavsett avstånd.
2. **Cykeln red inte på gräset** – hittad exakt rotorsak: spriten ritades
   ~35px för lågt. Fixat, hjulen vilar nu på ytan. La även till en **bro över
   vatten** och **två grusparti** längs banan.
3. **Kändes inte som uppförsbacke** – terrängen gick tidigare bara upp och ner
   till samma nivå (vågform utan nettostigning). Nu finns en riktig,
   kontinuerlig stigning över hela banan.
4. **Inga träd/detaljer längs banan** – trädlagt utspritt längs hela sträckan
   (två sorters träd, med enkel djup-effekt).
5. **Wheelie syntes inte/gick inte göra** – nu en riktig mekanik: håll ↑ på
   marken med tillräcklig fart för att aktivt lyfta framhjulet, inte bara
   passiv lutning efter markens vinkel.
6. **Cykeln såg stillastående ut + löst bakhjul syntes** – två separata fixar:
   dels en riktig **9-frames pedal-animation** (fanns redan i källarket, bara
   outnyttjad), dels en lös pixel-rest (från nästa cykel i arket) som råkat
   följa med i en tidigare beskärning – borttagen.
7. **Ork kändes overksam** – kraft/ork påverkade tidigare bara *hur snabbt*
   man accelererade, inte *om* man faktiskt kunde ta sig uppför (ingen
   motkraft från lutningen fanns i fysiken). Lagt till en riktig
   gravitationskomponent längs backen, så branta partier nu kräver kraft på
   riktigt - och sänkt kraft-golvet vid tom ork så en "bonk" känns tydlig och
   bestämd istället för att bara vara lite segare.

## v1.5.0
- **Touch-kontroller för mobil**, byggda efter samma mönster som Hill Climb
  Racing och liknande fysikbaserade mobilspel använder (efter research på hur
  välfungerande spel löser det):
  - Stora, halvtransparenta tap-zoner längs botten: vänster = broms/baklänges,
    höger = gasa (hela sidan, inte små ikoner — färre "fat finger"-missar)
  - Mindre knappar i mitten: ↑/↓ (luta i luften), STÅ UPP, starta om
  - Stödjer flera fingrar samtidigt (t.ex. hålla gas + luta i luften på en gång)
  - Visas bara på touch-enheter, syns inte på dator
  - Visuell feedback (ljusare bakgrund) när en zon trycks ned
- Musik/SFX-knapparna flyttade från botten till toppen (hörnet) så de inte
  krockar med de nya touch-zonerna

## v1.4.2
- **Rotorsaken** till bakgrunds-skarven hittad: bilden hade en tunn kvarlämnad
  svart kant från originalarkets rutnät-linjer, som blev en tjock synlig
  stapel varje gång bilden upprepades. Beskuren om utan kanten + bildens
  vänster/högerkant tonas nu ut till transparent, så en skarv aldrig kan synas
  oavsett skärmstorlek/zoom.
- Jord-dekorationerna som "flöt" löst ovanpå marken (synligt i skärmdumpen)
  är ersatta med enkla, direkt ritade gräs-tuvor som smälter in i konturen
  istället för fristående sprite-rutor.
- **Mobil:** knappar och kontroll-text överlappade varandra på smala skärmar.
  Lagt till responsiv CSS (mindre text/knappar under 700px bredd, kontroll-
  texten döljs helt under 420px men visas istället på startskärmen så
  informationen inte försvinner).

## v1.4.1
- **Bakgrunden** var suddig eftersom en lågupplöst bild (200×132) sträcktes
  upp mycket större vid rendering. Nu förbehandlad offline (uppskalad +
  skärpt) och renderas med **spegelvänd varannan kopia** ("ping-pong") så
  de tidigare tydliga skarvarna mellan upprepningarna syns mycket mindre.
- **Marken** visade tidigare ett uppenbart, tätt upprepat rutmönster (samma
  liten tile om och om igen). Ersatt med en gradient-fylld jordyta + en
  grästexturerad överkant, plus glest utspridda dekorationer i oregelbunden
  skala/position istället för ett synligt rutnät.

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
