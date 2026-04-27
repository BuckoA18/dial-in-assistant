const BASE_URL = "https://flagsapi.com";

export const getFlag = (countryCode) => {
  const flagURL = `${BASE_URL}/${countryCode.toUpperCase()}/flat/16`;
  console.log(flagURL);
  return flagURL;
};
