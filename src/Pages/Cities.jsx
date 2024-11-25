import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Components/Card';
import Filters from '../Components/Filters';
import logo from '../assets/logo.png';
import { fetchCities } from '../store/actions/CitiesActions';

export default function Cities() {
  const dispatch = useDispatch();
  const citiesData = useSelector(state => state.cities.citiesData);
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
        {citiesData.length > 0 ? (
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
