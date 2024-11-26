import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setContinentFilter } from '../store/actions/FiltersActions';

export default function Filters() {
  const dispatch = useDispatch();
  const searchText = useSelector(state => state.filters.searchText);
  const continentFilter = useSelector(state => state.filters.continentFilter);

  const handleSearchChange = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  const handleContinentChange = (e) => {
    const { value, checked } = e.target;
    dispatch(setContinentFilter({ value, checked }));
  };

  return (
    <div className="filters mb-4 w-11/12 mx-auto bg-gradient-to-br from-gray-900 via-purple-900 to-black bg-opacity-50 rounded-lg p-6 shadow-2xl border-4 border-yellow-500">
      <input
        type="text"
        placeholder="Search by country..."
        value={searchText}
        onChange={handleSearchChange}
        className="w-full p-3 mb-4 text-xl font-extrabold text-yellow-400 placeholder-yellow-500 text-center bg-gray-800 bg-opacity-80 rounded-full border-2 border-yellow-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-transform duration-300 ease-in-out transform hover:scale-90"
      />
      <div className="continent-filters flex flex-wrap justify-center">
        {['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania'].map(continent => (
          <label key={continent} className="mx-2 my-2 text-lg text-yellow-400">
            <input
              type="checkbox"
              value={continent}
              checked={continentFilter.includes(continent)}
              onChange={handleContinentChange}
              className="mr-2 accent-yellow-500 focus:ring-2 focus:ring-yellow-400"
            />
            {continent}
          </label>
        ))}
      </div>
    </div>
  );
}
