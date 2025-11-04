import React from "react";

const ErrorUI = ({ message }) => {
  return (
    <div className="flex items-center justify-center w-full p-6">
      <div className="bg-red-50 border border-red-300 text-red-600 rounded-2xl shadow-sm p-4 max-w-md text-center">
        <p className="font-medium text-lg">⚠️ {message}</p>
        <p className="text-sm text-red-500 mt-1">
          Please try again or refine your query.
        </p>
      </div>
    </div>
  );
};

export default ErrorUI;
