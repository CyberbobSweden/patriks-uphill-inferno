# 🔥 Patriks Uphill Inferno

**v1.4.0** · Gjort av **Cyberbob & Risingbob** · se [CHANGELOG.md](CHANGELOG.md)
för versionshistorik.

Fysikbaserat 2D mountainbike-spel i Kick Start/Trials-stil. Ingen pedal-animation
(precis som originalet) – cykel+ryttare är en enda rörlig sprite som roterar och
studsar mot terrängen. Kärnan i spelet: hantera din ork uppför de branta
partierna innan du bonkar.

## Mappstruktur (viktigt!)
```
Patriks Uphill Inferno/
├── index.html
├── manifest.json
├── service-worker.js
├── README.md
├── CHANGELOG.md
├── .github/
│   └── workflows/
│       └── deploy.yml
└── assets/
    ├── bike_idle.png
    ├── bg_day.png
    ├── terrain_tile.png
    ├── crash1.png
    ├── icon-192.png
    ├── icon-512.png
    └── audio/
        └── bgmusic.mp3
```
`index.html` letar efter bilder i `assets/` och musik i `assets/audio/` — om
den här strukturen inte stämmer exakt blir det tomma rutor/ingen musik även
om sidan i övrigt fungerar. `manifest.json` och `service-worker.js` måste
ligga i **rotmappen** (samma nivå som `index.html`), annars fungerar inte
"installera som app".

## Kör lokalt
Öppna `index.html` i webbläsaren, eller kör `python3 -m http.server` i mappen
och gå till `localhost:8000`.

## Kontroller
- **→** Gasa
- **←** Broms / baklänges
- **↑** Luta bakåt (wheelie) – funkar i luften
- **↓** Luta framåt – funkar i luften
- **SHIFT** (håll + →) Stå upp och trampa – mer kraft, dränerar ork snabbare
- **R** Starta om

## Ork-systemet ("stamina")
- Dräneras bara när du **gasar i uppförsbacke** – ju brantare, desto snabbare.
  Platt mark/nedförsbacke kostar nästan ingenting.
- **Återhämtas** när du släpper gasen, bromsar, eller rullar nedför (nedförsbacke
  ger extra bonus-återhämtning).
- Blir orken låg sjunker din tillgängliga kraft gradvis mot ~35% av full effekt
  ("bonk") – du stannar inte helt men orkar inte längre attackera branta partier.
- **SHIFT** = ståendetrampning: 40% mer kraft men dränerar ~2.3x snabbare, kräver
  minst 12% ork kvar för att aktiveras.

Alla värden ligger som konstanter längst upp i `update()` i `index.html`.

## Installera som app 📲
Spelet är en PWA (Progressive Web App) — går att installera för en
helskärms-upplevelse utan webbläsarens adressfält/knappar.

- **Android / Chrome / Edge (dator eller mobil):** en knapp — "📲 Installera
  som app" — dyker upp på startskärmen automatiskt när webbläsaren tillåter
  det. Klicka och bekräfta.
- **iPhone/iPad (Safari):** Safari stödjer inte den automatiska knappen. Gå
  istället till Dela-ikonen (☐↑) → **"Lägg till på hemskärmen"**.
- När den är installerad öppnas spelet i eget fönster utan webbläsar-UI, och
  fungerar även offline efter första besöket (tack vare service worker som
  cachar filerna).
- Helskärm aktiveras även automatiskt bara genom att trycka **STARTA**, även
  utan att installera appen.

## Ljud
- Startskärmen låter dig slå av/på musik **och ljudeffekter** var för sig, samt
  ställa volym — **innan** spelet börjar (webbläsare kräver ett klick innan
  ljud får spela, därför finns "STARTA"-knappen).
- Under spelets gång kan du toggla musik (🔊) och ljudeffekter (💥) separat
  med knapparna nere till höger.
- Ljudeffekterna är **syntade direkt i webbläsaren** (Web Audio API, inga
  extra mp3-filer) i 8-bit/chiptune-stil: hopp, landning, krasch, samt en
  varningssignal när orken börjar ta slut. Vill du ändra hur de låter, kika på
  funktionerna `sfxJump`, `sfxLand`, `sfxCrash`, `sfxLowStamina`, `sfxBonkOut`
  i `index.html` — frekvens/längd/typ (`square`, `triangle`, `sawtooth`) styr
  klangen.
- Valen (musik på/av, SFX på/av, volym) sparas i webbläsaren till nästa gång.
- Vill du byta bakgrundsmusik: lägg en ny mp3 i `assets/audio/`, döp den till
  `bgmusic.mp3` (eller ändra `src`-attributet på `<audio id="bgMusic">`
  i `index.html`).

## Lägg upp på nätet med GitHub Actions

Ett färdigt workflow ligger i `.github/workflows/deploy.yml`. GitHub bygger
och publicerar spelet **automatiskt varje gång ni pushar** till `main`.

### Första gången
1. Skapa ett tomt repo på github.com (utan README/gitignore).
2. I terminalen, i den här mappen:
   ```bash
   git init
   git add .
   git commit -m "Patriks Uphill Inferno v1.2.0"
   git branch -M main
   git remote add origin https://github.com/DITT-ANVANDARNAMN/patriks-uphill-inferno.git
   git push -u origin main
   ```
3. På github.com → repot → **Settings → Pages** → Source: **GitHub Actions**.
4. Fliken **Actions** visar bygget köra (~30 sek) → grön bock → klart.
   Spelet är live på:
   `https://DITT-ANVANDARNAMN.github.io/patriks-uphill-inferno/`

### Nästa gång ni vill uppdatera (efter fler ändringar/prompts)
Så fort ni har nya filer (från Claude eller egna ändringar), i samma mapp:
```bash
git add .
git commit -m "Beskriv vad som ändrats, t.ex. v1.3.0 – nya animationer"
git push
```
Det är **allt**. Ni behöver aldrig röra Pages-inställningarna igen — workflow:et
triggas automatiskt på varje push till `main` och publicerar den nya versionen
inom någon minut. Kolla fliken **Actions** om ni vill se att det lyckades.

**Om ni hellre vill undvika terminalen helt:** ladda ner den nya zip-filen
Claude ger er, packa upp den, gå till repot på github.com → **Add file →
Upload files** → dra in *alla* filer och mappar (även `.github` och `assets`)
→ Commit changes. Samma resultat, bara via webbläsaren istället för git.

### Om `.github`-mappen "försvinner" vid webb-uppladdning
Vissa filhanterare/webbläsare gömmer mappar som börjar med punkt. Om Actions-
fliken är tom efter uppladdning: kontrollera att repot faktiskt innehåller
`.github/workflows/deploy.yml` (gå till filen direkt via URL:en
`https://github.com/DITT-ANVANDARNAMN/patriks-uphill-inferno/blob/main/.github/workflows/deploy.yml`
— 404 betyder att den inte kom med, och ni får lägga till den manuellt via
**Add file → Create new file** och skriva sökvägen i namnfältet.
