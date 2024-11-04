import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../store/actions/CitiesActions';
import Card from '../Components/Card';
import Filters from '../Components/Filters';
import logo from '../assets/logo.png';

export default function Cities() {
  const dispatch = useDispatch();
  const citiesData = useSelector(state => state.cities.citiesData);
  const status = useSelector(state => state.cities.status);
  const error = useSelector(state => state.cities.error);
  const searchText = useSelector(state => state.filters.searchText);
  const continentFilter = useSelector(state => state.filters.continentFilter);

  useEffect(() => {
    dispatch(fetchCities({ searchText, continentFilter }));
  }, [dispatch, searchText, continentFilter]);

  return (
    <div className="container mx-auto w-full text-center">
      <h1 className="text-3xl font-bold mb-4">Cities</h1>
      <Filters />
      <div className="cards-container flex flex-wrap justify-center rounded-2xl bg-black p-4">
        {status === 'loading' ? (
          <div className="flex items-center justify-center h-full">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
          </div>
        ) : status === 'failed' ? (
          <div className="flex flex-col items-center">
            <p className="text-white text-2xl mb-4">{error}</p>
            <img src={logo} alt="Error" className="max-w-xs" />
          </div>
        ) : citiesData.length > 0 ? (
          citiesData.map(city => (
            <Card key={city._id} city={city} />
          ))
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-white text-2xl mb-4">No city data found</p>
            <img src={logo} alt="No results" className="max-w-xs" />
          </div>
        )}
      </div>
    </div>
  );
}
