import { useState, useEffect } from 'react';
import Country from "./Country";
import { getCountries } from '../../api/api';
import { CountryDataType } from '../../interfaces/interfaces';

export const Countries = () => {
  const [countries, setCountries] = useState<CountryDataType[]>([]);

  useEffect(() => {
    getCountries()
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, [])

  return (
    <div className="p-7 grid grid-cols-3 gap-6">
      {
        countries.map((country) => <Country key={country.cca2} country={country} />)
      }
    </div>
  )
}
