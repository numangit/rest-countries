import { CountryDataType } from "../interfaces/interfaces";

export const getCountries = async (): Promise<CountryDataType[]> => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const countries = await res.json() as CountryDataType[];
  return countries;
};