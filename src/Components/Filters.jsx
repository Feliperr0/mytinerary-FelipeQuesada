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
    <div className="filters mb-4 w-11/12 mx-auto bg-gray-800 bg-opacity-50 rounded-lg p-6">
      <input
        type="text"
        placeholder="Search by country..."
        value={searchText}
        onChange={handleSearchChange}
        className="w-full p-3 mb-4 text-xl font-bold text-black text-center bg-opacity-80 rounded-lg border-2 border-red-500 focus:outline-none focus:ring-2 focus:ring-red-700"
      />
      <div className="continent-filters flex flex-wrap justify-center">
        {['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania'].map(continent => (
          <label key={continent} className="mx-2 my-2 text-white text-lg">
            <input
              type="checkbox"
              value={continent}
              checked={continentFilter.includes(continent)}
              onChange={handleContinentChange}
              className="mr-2 accent-red-600 focus:ring-2 focus:ring-red-700"
            />
            {continent}
          </label>
        ))}
      </div>
    </div>
  );
}
