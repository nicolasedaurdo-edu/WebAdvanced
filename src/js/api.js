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