import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { fetchSongs } from '../../../services/api'; // Ensure this is the correct path to your API service
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (results: any[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = event.currentTarget.search.value.toLowerCase();
    const songs = await fetchSongs();
    const filteredSongs = songs.filter((song: any) =>
      song.title.toLowerCase().includes(query)
    );
    setSearchResults(filteredSongs);
    onSearch(filteredSongs); // Pass results to parent
    console.log(searchResults[0]);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch} className="search-form">
        <button type="submit" className="searchBtn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          type="search"
          className="search-box"
          placeholder="Search"
          name="search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
