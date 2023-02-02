import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [FactsData, setFactsData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    axios
      .get(`https://63db4515b8e69785e47e7435.mockAPI.io/country`)
      .then((response) => {
        setFactsData(response.data);
      });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    const filteredData = FactsData.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setFilteredResults(filteredData);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="page-title">Random Country Facts</h1>

        <div className="form-input-group">
          <input
            className="search-input"
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
            onChange={(e) => searchItems(e.target.value)}
          />
          <label className="search-input-label" htmlFor="search">
            Search
          </label>
        </div>
        <p>{searchInput}</p>
      </header>

      <main>
        <section className="cards-wrapper">
          {filteredResults.length === 0
            ? FactsData.map((data) => (
                <article className="card" key="index">
                  <h2 className="short-fact">{data.shortFact}</h2>
                  <p className="long-fact">{data.longFact}</p>
                  <p className="country-name">{data.country}</p>
                </article>
              ))
            : filteredResults.map((data) => (
                <article className="card" key="index">
                  <h2 className="short-fact">{data.shortFact}</h2>
                  <p className="long-fact">{data.longFact}</p>
                  <p className="country-name">{data.country}</p>
                </article>
              ))}
        </section>
      </main>
    </div>
  );
}

export default App;
