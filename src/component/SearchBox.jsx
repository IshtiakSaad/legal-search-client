import React, { useState } from "react";

const SearchBox = ({ onSearch, loading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query.trim()) return;
    onSearch(query);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex w-full gap-2 items-center justify-center">
        <input
          type="text"
          placeholder="Enter Your Query..."
          className="shadow-sm rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button 
            type="submit"
            className={`px-5 py-2 text-white font-medium rounded-lg transition-colors duration-200 ${
                loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-950 hover:bg-blue-700"
            }`}
        >
            {loading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
