import { addFavoriet, removeFavoriet, getFavorieten } from "./storage.js";
import { getCoureurResultaten, getWikiFoto } from "./api.js";

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
      <button class="info-btn" data-id="${coureur.driverId}">ℹ️ Meer info</button>
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
      kaart.querySelector(".info-btn").addEventListener("click", () => {
      const seizoen = document.querySelector("#seizoen-select").value;
      toonModal(coureur, seizoen);
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

export const toonModal = async (coureur, seizoen) => {
  const modal = document.querySelector("#modal");
  const body = document.querySelector("#modal-body");

  body.innerHTML = "<p>Laden...</p>";
  modal.classList.remove("verborgen");

  try {
    const foto = await getWikiFoto(coureur.url);
    const races = await getCoureurResultaten(seizoen, coureur.driverId);

    let racesHtml = races
      .map((race) => {
        const resultaat = race.Results[0];
        return `
          <tr>
            <td>${race.raceName}</td>
            <td>P${resultaat.position}</td>
            <td>${resultaat.points} ptn</td>
            <td>${resultaat.Constructor.name}</td>
          </tr>
        `;
      })
      .join("");

    body.innerHTML = `
      <h2>${coureur.givenName} ${coureur.familyName}</h2>
      ${foto ? `<img src="${foto}" alt="${coureur.familyName}" class="coureur-foto" />` : ""}
      <p>🌍 ${coureur.nationality}</p>
      <p>🎂 ${coureur.dateOfBirth}</p>
      <h3>Resultaten ${seizoen}</h3>
      <table>
        <thead>
          <tr><th>Race</th><th>Positie</th><th>Punten</th><th>Team</th></tr>
        </thead>
        <tbody>${racesHtml}</tbody>
      </table>
    `;
  } catch (error) {
    body.innerHTML = "<p>Fout bij het laden van details.</p>";
  }
};