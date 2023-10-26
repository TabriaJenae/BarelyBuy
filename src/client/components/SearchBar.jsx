// SearchBar.jsx
import React, { useState } from 'react';
import Card from './Card';

export default function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const text = e.target.value;
      setSearchText(text);
      onSearch(text);
    }
  };



  return (
    <>
    <div className='outline searchBarDiv'>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Search inventory..."
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
    </>
  );
}
