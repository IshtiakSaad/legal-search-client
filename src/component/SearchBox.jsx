import React, { useState } from "react";

const SearchBox = ({ onSearch, loading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query.trim()) return;
    onSearch(query);
  };
  return (
    <div className="p-8 pt-6 lg:min-h-screen bg-base-200 border-r border-gray-300 h-full">
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Legal Document Search
        </h1>
        <p className="text-gray-500 text-sm">Find relevant document and summaries</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
        <input
          type="text"
          placeholder="Enter Your Query..."
          className="w-full shadow-sm rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <h2 className="text-gray-700 font-bold my-4">Filters</h2>

        <div className="mb-4">
          <p className="block font-medium text-sm text-gray-700 mb-2">
            Date Range:
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="date"
              className="shadow-sm border border-gray-300 focus:outline-none focus:ring-1 rounded-sm px-2 py-1"
            />
            <input
              type="date"
              className="shadow-sm border border-gray-300 focus:outline-none focus:ring-1 rounded-sm px-2 py-1"
            />
          </div>
        </div>

        <div className="mb-4">
          <p className="block font-medium text-sm text-gray-700 mb-2">
            Document Type:
          </p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 text-yellow-500 border-gray-500"
              />
              <span className="ml-2">Contracts</span>
            </label>

            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 text-yellow-500 border-gray-500"
              />
              <span className="ml-2">Pleadings</span>
            </label>

            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 text-yellow-500 border-gray-500"
              />
              <span className="ml-2">Statutes</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <p className="block font-medium text-sm text-gray-700 mb-2">
            Juristictions:
          </p>
          <div className="relative">
            <select className="shadow-sm w-full pl-3 pr-10 py-2 text-sm text-gray-700 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500">
              <option>All Jurisdictions</option>
              <option>California</option>
              <option>New York</option>
              <option>Federal</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className={`w-full px-5 py-2 text-white font-medium rounded-lg transition-colors duration-200 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-blue-700"
          }`}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
