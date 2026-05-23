export const getCoureurs = async (seizoen) => {
  const response = await fetch(`https://api.jolpi.ca/ergast/f1/${seizoen}/drivers.json`);
  const data = await response.json();
  return data.MRData.DriverTable.Drivers;
};

export const getSeizoenen = () => {
  const huidigJaar = new Date().getFullYear();
  const seizoenen = [];
  for (let jaar = huidigJaar; jaar >= 2016; jaar--) {
    seizoenen.push(jaar);
  }
  return seizoenen;
};

export const getCoureurResultaten = async (seizoen, driverId) => {
  const response = await fetch(`https://api.jolpi.ca/ergast/f1/${seizoen}/drivers/${driverId}/results.json`);
  const data = await response.json();
  return data.MRData.RaceTable.Races;
};

export const getWikiFoto = async (wikiUrl) => {
  const titel = wikiUrl.split("/wiki/")[1];
  const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${titel}`);
  const data = await response.json();
  return data.thumbnail ? data.thumbnail.source : null;
};