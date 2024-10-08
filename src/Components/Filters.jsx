import React from 'react';
import SearchFilter from './SearchFilter';
import ContinentFilter from './ContinentFilter';

export default function Filters({ searchText, setSearchText, continentFilter, setContinentFilter }) {
  return (
    <>
    <div className="w-full max-w-screen-lg flex flex-col md:flex-row justify-between mb-4">
      <SearchFilter searchText={searchText} setSearchText={setSearchText} />
      <ContinentFilter continentFilter={continentFilter} setContinentFilter={setContinentFilter} />
    </div>
    </>
  );
}