import React from "react";

const ResultDetails = ({ title, document }) => {
  return (
    <div className="bg-white border-gray-300 border rounded-lg overflow-hidden">
      <div className="flex bg-gray-50 p-4 justify-between border-b border-gray-300">
        <h1 className="text-xl">Document Details</h1>
      </div>

      <div className="p-4">
        <p className="text-2xl font-semibold tracking-tight mb-4">{title}</p>
        <p className="inline-block border-b-2 px-2 border-yellow-400 mb-2 text-yellow-400 font-bold">
          Full Text
        </p>
        <p className="whitespace-pre-line lg:p-4 leading-relaxed">{document}</p>
      </div>
    </div>
  );
};

export default ResultDetails;
