import { addFavoriet, removeFavoriet, getFavorieten } from "./storage.js";

export const renderCoureurs = (coureurs) => {
  const lijst = document.querySelector("#coureurs-lijst");
  lijst.innerHTML = "";

  if (coureurs.length === 0) {
    lijst.innerHTML = "<p>Geen coureurs gevonden.</p>";
    return;
  }

  coureurs.forEach((coureur) => {
    const favorieten = getFavorieten();
    const isFavoriet = favorieten.some((f) => f.driverId === coureur.driverId);

    const kaart = document.createElement("div");
    kaart.classList.add("kaart");
    kaart.innerHTML = `
      <h3>${coureur.givenName} ${coureur.familyName}</h3>
      <p>🌍 ${coureur.nationality}</p>
      <p>🎂 ${coureur.dateOfBirth}</p>
      <p>🔢 Nummer: ${coureur.permanentNumber ?? "?"}</p>
      <p>🏎️ Code: ${coureur.code ?? "?"}</p>
      <button class="fav-btn ${isFavoriet ? "actief" : ""}" data-id="${coureur.driverId}">
        ${isFavoriet ? "❤️ Verwijderen" : "🤍 Favoriet"}
      </button>
    `;

    kaart.querySelector(".fav-btn").addEventListener("click", () => {
      if (isFavoriet) {
        removeFavoriet(coureur.driverId);
      } else {
        addFavoriet(coureur);
      }
      renderCoureurs(coureurs);
      renderFavorieten();
    });

    lijst.appendChild(kaart);
  });
};

export const renderFavorieten = () => {
  const lijst = document.querySelector("#favorieten-lijst");
  const favorieten = getFavorieten();
  lijst.innerHTML = "";

  if (favorieten.length === 0) {
    lijst.innerHTML = "<p>Nog geen favorieten.</p>";
    return;
  }

  favorieten.forEach((coureur) => {
    const item = document.createElement("div");
    item.classList.add("favoriet-item");
    item.innerHTML = `
      <span>${coureur.givenName} ${coureur.familyName}</span>
      <button class="verwijder-btn" data-id="${coureur.driverId}">❌</button>
    `;

    item.querySelector(".verwijder-btn").addEventListener("click", () => {
      removeFavoriet(coureur.driverId);
      renderFavorieten();
    });

    lijst.appendChild(item);
  });
};

// =============================================================
// GEMAAKT MET AI 
// -------------------------------------------------------------
// renderCoureurs(coureurs)
//   - Ontvangt een array van coureurs van de API
//   - Maakt voor elke coureur een kaart aan in de DOM
//   - Toont: naam, nationaliteit, geboortedatum, nummer, code
//   - Voegt een favoriet-knop toe per coureur
//   - Gebruikt: DOM manipulatie, forEach, template literals,
//               ternary operator, addEventListener
//
// renderFavorieten()
//   - Haalt favorieten op uit LocalStorage via getFavorieten()
//   - Toont elke favoriet met een verwijderknop
//   - Gebruikt: DOM manipulatie, forEach, template literals,
//               addEventListener
// =============================================================