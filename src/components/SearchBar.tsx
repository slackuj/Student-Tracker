import React from "react";

interface SearchBarProps {
    searchTerm: string;
    handleSearchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({searchTerm, handleSearchTerm}: SearchBarProps) => {
    return (
        <div className="searchBar">
        <input type="text"
               placeholder="type to search"
               value={searchTerm}
               onChange={handleSearchTerm}
        />
        </div>
    );
};

export default SearchBar;