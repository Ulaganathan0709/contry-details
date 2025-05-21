import React, { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Link } from 'react-router-dom';

export const CountryList = () => {
  const [countryDatas, setCountryDatas] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountryDatas(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold m-4">Countries</h1>
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {countryDatas.map((country, index) => (
          <Link
            to={`/country/${country.name.common}`}
            key={index}
            className="p-4 border rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              className="w-full h-32 object-contain"
              src={country.flags.svg}
              alt={country.name.common}
            />
            <h2 className="mt-2 font-semibold">{country.name.common}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
