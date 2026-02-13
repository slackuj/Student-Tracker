import React from "react";
import './SearchBar.css';

interface SearchBarProps {
    searchTerm: string;
    handleSearchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({searchTerm, handleSearchTerm}: SearchBarProps) => {
    return (
        <div className="searchBar">
        <input type="text"
               className="searchBar__input"
               placeholder="type to search"
               value={searchTerm}
               onChange={handleSearchTerm}
        />
        </div>
    );
};

export default SearchBar;