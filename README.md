# 🏎️ F1 Explorer

Een webapplicatie om Formula 1-data te verkennen van 2016 tot nu.

---

## Beschrijving

F1 Explorer haalt data op van de Jolpica F1 API en toont coureurs, teams en races per seizoen. Gebruikers kunnen zoeken, filteren, sorteren en favorieten opslaan.

---

## Functionaliteiten

- Overzicht van coureurs, constructeurs en races per seizoen (2016–heden)
- Zoeken op naam
- Filteren op nationaliteit of team
- Sorteren op naam of punten
- Favorieten opslaan (blijft bewaard na herladen)
- Licht/donker thema met opslag in LocalStorage

---

## Gebruikte API

- [Jolpica F1 API](https://api.jolpi.ca/ergast/f1/) — gratis, geen API-sleutel nodig

---

## Technische vereisten

| Concept | Bestand |
|---------|---------|
| DOM selectie | src/js/app.js 
| DOM manipulatie | src/js/render.js 
| Event handlers | src/js/app.js 
| const | src/js/app.js 
| Template literals | src/js/render.js 
| Array iteratie | src/js/app.js 
| Array methodes (.filter, .map, .sort) | src/js/app.js 
| Arrow functions | src/js/app.js 
| Ternary operator | src/js/render.js 
| Callback functions | src/js/app.js 
| Promises | src/js/api.js 
| Async / Await | src/js/api.js 
| IntersectionObserver | src/js/app.js 
| Fetch | src/js/api.js 
| JSON manipulatie | src/js/api.js
| LocalStorage | src/js/storage.js 
| Formuliervalidatie | src/js/app.js

---

## Installatie

```bash
git clone https://github.com/jouw-gebruikersnaam/f1-explorer.git
cd f1-explorer
npm install
npm run dev
```


## Bronnen

- [Jolpica F1 API docs](https://github.com/jolpica/jolpica-f1/blob/main/docs/README.md)
- [Vite docs](https://vitejs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- AI chatlog: zie `ai-log.md`
