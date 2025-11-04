import React, { useState } from "react";
import ResultDetails from "./ResultDetails";

const ResultList = ({ summary, title, document }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <div className="w-full p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xl font-semibold tracking-tight text-gray-600">Search Results</span>{" "}
        <span className="text-white rounded-full px-3 text-sm font-light bg-amber-500 py-1 shadow-sm">
          1 Report Found
        </span>
      </div>

      <div className="w-full grid grid-cols-5 gap-6">
        <div className="col-span-2">
          <h2
            onClick={toggleActive}
            className={`cursor-pointer leading-relaxed w-full p-4 rounded-xl border border-yellow-400 text-gray-800 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 whitespace-pre-line ${
            active ? "bg-yellow-50" : "bg-white"
          }`}
          >
            {summary}
          </h2>
        </div>

        {active && (
            <div className="col-span-3 w-full animate-fadeIn">
                <ResultDetails title={title} document={document} />
            </div>
        )}
      </div>
    </div>
  );
};

export default ResultList;
