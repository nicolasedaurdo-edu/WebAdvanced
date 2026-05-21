const BASE_URL = "https://api.jolpi.ca/ergast/f1";

// Haal alle coureurs op van een seizoen
export const getCoureurs = async (seizoen) => {
  const response = await fetch(`${BASE_URL}/${seizoen}/drivers.json`);
  const data = await response.json();
  return data.MRData.DriverTable.Drivers;
};

// Haal alle seizoenen op van 2016 tot nu
export const getSeizoenен = () => {
  const huidigJaar = new Date().getFullYear();
  const seizoenen = [];
  for (let jaar = huidigJaar; jaar >= 2016; jaar--) {
    seizoenen.push(jaar);
  }
  return seizoenen;
};