import { getCoureurs, getSeizoenen } from "./api.js";
import { renderCoureurs, renderFavorieten } from "./render.js";
import { saveThema, getThema, saveSeizoen, getSeizoen } from "./storage.js";

let alleCoureurs = [];

const seizoenSelect = document.querySelector("#seizoen-select");
const zoekInput = document.querySelector("#zoek-input");
const sorteerSelect = document.querySelector("#sorteer-select");
const themaBtn = document.querySelector("#thema-btn");

const vulSeizoenSelect = () => {
  const seizoenen = getSeizoenen();
  seizoenen.forEach((jaar) => {
    const optie = document.createElement("option");
    optie.value = jaar;
    optie.textContent = jaar;
    seizoenSelect.appendChild(optie);
  });
  seizoenSelect.value = getSeizoen();
};

const filterEnSorteer = () => {
  const zoekterm = zoekInput.value.toLowerCase();
  const sorteerOp = sorteerSelect.value;

let resultaat = alleCoureurs.filter((c) => {                              // (Hulp van AI)
    const naam = `${c.givenName} ${c.familyName}`.toLowerCase();
    const nationaliteit = (c.nationality ?? "").toLowerCase();
    return naam.includes(zoekterm) || nationaliteit.includes(zoekterm);
  });

  resultaat.sort((a, b) => {                                                // (Hulp van AI)
    if (sorteerOp === "naam") {
      return a.familyName.localeCompare(b.familyName);
    } else {
      return a.nationality.localeCompare(b.nationality);
    }
  });

  renderCoureurs(resultaat);
};

const laadCoureurs = async () => {
  const seizoen = seizoenSelect.value;
  saveSeizoen(seizoen);
  document.querySelector("#coureurs-lijst").innerHTML = "<p>Laden...</p>";

  try {
    alleCoureurs = await getCoureurs(seizoen);                                  // (Hulp van AI)
    filterEnSorteer();
  } catch (error) {
    document.querySelector("#coureurs-lijst").innerHTML = "<p>Fout bij het laden van data.</p>";
  }
};

const wisselThema = () => {
  const huidigThema = getThema();
  const nieuwThema = huidigThema === "licht" ? "donker" : "licht";             // (Hulp van AI)
  document.body.classList.toggle("donker");
  themaBtn.textContent = nieuwThema === "donker" ? "☀️ Licht thema" : "🌙 Donker thema";
  saveThema(nieuwThema);
};
const modal = document.querySelector("#modal");
const modalSluit = document.querySelector("#modal-sluit");

modalSluit.addEventListener("click", () => {
  modal.classList.add("verborgen");
});

modal.addEventListener("click", (e) => {                                        // (Hulp van AI)
  if (e.target === modal) {
    modal.classList.add("verborgen");
  }
});

const init = () => {
  vulSeizoenSelect();
  renderFavorieten();
  laadCoureurs();

  if (getThema() === "donker") {
    document.body.classList.add("donker");
    themaBtn.textContent = "☀️ Licht thema";
  }

  seizoenSelect.addEventListener("change", laadCoureurs);
  zoekInput.addEventListener("input", filterEnSorteer);
  sorteerSelect.addEventListener("change", filterEnSorteer);
  themaBtn.addEventListener("click", wisselThema);
};

init();

// =============================================================
// COMENTAAR GEMAAKT MET AI (Claude)
// -------------------------------------------------------------
// init()
//   - Startfunctie die alles opzet bij het laden van de pagina
//   - Vult seizoensselectie, laadt favorieten en coureurs
//   - Herstelt thema uit LocalStorage
//   - Koppelt alle event listeners
//
// laadCoureurs()
//   - Async functie die coureurs ophaalt via de API
//   - Toont laadindicator tijdens het ophalen
//   - Vangt fouten op met try/catch
//
// filterEnSorteer()
//   - Filtert coureurs op naam of nationaliteit
//   - Sorteert op naam of nationaliteit
//   - Gecombineerde werking: filter + sort tegelijk
//
// wisselThema()
//   - Wisselt tussen licht en donker thema
//   - Slaat voorkeur op in LocalStorage
// =============================================================