const FAVORIETEN_KEY = "f1_favorieten";
const THEMA_KEY = "f1_thema";
const SEIZOEN_KEY = "f1_seizoen";

export const getFavorieten = () => {
  return JSON.parse(localStorage.getItem(FAVORIETEN_KEY)) || [];
};

export const addFavoriet = (coureur) => {
  const favorieten = getFavorieten();
  favorieten.push(coureur);
  localStorage.setItem(FAVORIETEN_KEY, JSON.stringify(favorieten));
};

export const removeFavoriet = (driverId) => {
  const favorieten = getFavorieten().filter((c) => c.driverId !== driverId);
  localStorage.setItem(FAVORIETEN_KEY, JSON.stringify(favorieten));
};

export const saveThema = (thema) => {
  localStorage.setItem(THEMA_KEY, thema);
};

export const getThema = () => {
  return localStorage.getItem(THEMA_KEY) || "licht";
};

export const saveSeizoen = (seizoen) => {
  localStorage.setItem(SEIZOEN_KEY, seizoen);
};

export const getSeizoen = () => {
  return localStorage.getItem(SEIZOEN_KEY) || "2024";
};