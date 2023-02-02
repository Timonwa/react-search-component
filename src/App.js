import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [FactsData, setFactsData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://63db4515b8e69785e47e7435.mockAPI.io/country`)
      .then((response) => {
        setFactsData(response.data);
      });
  }, []);

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
          />
          <label className="search-input-label" htmlFor="search">
            Search
          </label>
        </div>
      </header>

      <main>
        <section className="cards-wrapper">
          {FactsData.map((data) => (
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
