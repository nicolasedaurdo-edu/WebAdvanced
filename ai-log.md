# AI-Log — F1 Explorer

Dit document beschrijft hoe en waar ik AI (Claude van Anthropic) heb gebruikt tijdens het maken van dit project. Ik gebruik AI ter ondersteuning: voor uitleg, debugging en het genereren van kleine stukken code. De delen waar AI me concreet geholpen heeft, zijn in de code gemarkeerd met het commentaar `// (Hulp van AI)`.

\---

## Hoe ik AI heb gebruikt

Ik heb AI vooral gebruikt om:

* de structuur van een Vite-project te begrijpen en op te zetten
* uitleg te krijgen over de werking van de Jolpica F1 API
* te debuggen wanneer mijn code fouten gaf
* kleine, moeilijkere stukken code te genereren die ik daarna zelf heb begrepen en aangepast
* de README en dit AI-log te structureren

Ik heb telkens geprobeerd om eerst zelf na te denken en daarna de AI als hulpmiddel in te zetten.

\---

## Waar AI me geholpen heeft (gemarkeerd in de code)

In de codebestanden staat op de moeilijkste plaatsen het commentaar `// (Hulp van AI)`. Hieronder een overzicht.

### src/js/render.js

* `favorieten.some((f) => f.driverId === coureur.driverId)`
Controleren of een coureur al in de favorietenlijst staat. AI legde uit hoe `.some()` werkt.
* `await getWikiFoto(coureur.url)` en `await getCoureurResultaten(...)`
Twee opeenvolgende fetches combineren in één async functie. Dit was het moeilijkste deel.
* `races.map((race) => {...}).join("")`
Een array van races omzetten naar HTML-rijen voor de tabel in de modal.

### src/js/app.js

* `alleCoureurs.filter((c) => {...})`
Coureurs filteren op naam of nationaliteit op basis van de zoekterm.
* `resultaat.sort((a, b) => {...})`
De gefilterde lijst sorteren met `localeCompare()`.
* `await getCoureurs(seizoen)`
Asynchroon data ophalen met foutafhandeling via try/catch.
* De ternary operator voor het wisselen van thema.
* De event listener die de modal sluit wanneer je naast het venster klikt.

\---

## Gebruikte AI-tool

* **Claude (Anthropic)** — gebruikt voor uitleg, debugging en het genereren van kleine codefragmenten.

\---

