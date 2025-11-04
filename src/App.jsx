import React, { useState } from "react";
import SearchBox from "./component/SearchBox";
import Loader from "./component/Loader";
import ResultList from "./component/ResultList";
import Navbar from "./component/navbar";
import ErrorUI from "./component/ErrorUI";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = async (query) => {
    setError("");
    setLoading(true);
    setResult(null);


    try {
      const res = await fetch(`${API_URL}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) throw new Error("failed to fetch document.");

      const data = await res.json();

      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>

      <div className="flex flex-col lg:flex-row bg-base-100">

        <SearchBox onSearch={handleSearch} loading={loading} />

        {loading && <Loader />}

        {error && <ErrorUI message={error}/>}

        {result && <ResultList className="col-span-2" summary={result.summary} title={result.heading} document={result.document} />}
     
      </div>
    </>
  );
};

export default App;
