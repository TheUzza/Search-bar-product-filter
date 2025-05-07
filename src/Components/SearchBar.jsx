import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const getFilteredItems = (input, items) => {
  if (!input) return items;

  const searchTerms = input
    .split(",")
    .map((term) => term.trim().toLowerCase())
    .filter(Boolean);

  const filtered = items.filter((item) =>
    searchTerms.some((term) => item.title.toLowerCase().includes(term))
  );

  return filtered.sort((a, b) => a.title.localeCompare(b.title));
};

export const SearchBar = ({ items, setResults }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    const filteredItems = getFilteredItems(value, items);
    setResults(filteredItems);
  };

  return (
    <div className="grid-flow-col grid-cols-1 md:grid-cols-2 p-6 w-full max-w-[400px] mx-auto rounded-2xl fixed top-6">
      <div className="flex items-center border-gray-100 bg-slate-200 rounded-2xl gap-3 p-2">
        <FaSearch className="text-sky-400" />
        <input
          id="search"
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search products..."
          className="flex-1 border-none outline-none bg-transparent"
        />
      </div>
    </div>
  );
};
