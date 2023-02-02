import "./App.css";

function App() {
  console.log("date");
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
          <article className="card">
            <h2 className="short-fact">
              The flag of the USA has at least 13 versions.
            </h2>
            <p className="long-fact">
              It started as a British flag variation featuring 13 white stripes
              for the 13 colonies. Eventually, white stars joined the design
              representing each state in the union. Hawaii became the 50th state
              of the USA, making it the 50th star on the flag as well.
            </p>
            <p className="country-name">USA</p>
          </article>
          <article className="card">
            <h2 className="short-fact">
              The flag of the USA has at least 13 versions.
            </h2>
            <p className="long-fact">
              It started as a British flag variation featuring 13 white stripes
              for the 13 colonies. Eventually, white stars joined the design
              representing each state in the union. Hawaii became the 50th state
              of the USA, making it the 50th star on the flag as well.
            </p>
            <p className="country-name">USA</p>
          </article>
          <article className="card">
            <h2 className="short-fact">
              The flag of the USA has at least 13 versions.
            </h2>
            <p className="long-fact">
              It started as a British flag variation featuring 13 white stripes
              for the 13 colonies. Eventually, white stars joined the design
              representing each state in the union. Hawaii became the 50th state
              of the USA, making it the 50th star on the flag as well.
            </p>
            <p className="country-name">USA</p>
          </article>
          <article className="card">
            <h2 className="short-fact">
              The flag of the USA has at least 13 versions.
            </h2>
            <p className="long-fact">
              It started as a British flag variation featuring 13 white stripes
              for the 13 colonies. Eventually, white stars joined the design
              representing each state in the union. Hawaii became the 50th state
              of the USA, making it the 50th star on the flag as well.
            </p>
            <p className="country-name">USA</p>
          </article>
          <article className="card">
            <h2 className="short-fact">
              The flag of the USA has at least 13 versions.
            </h2>
            <p className="long-fact">
              It started as a British flag variation featuring 13 white stripes
              for the 13 colonies. Eventually, white stars joined the design
              representing each state in the union. Hawaii became the 50th state
              of the USA, making it the 50th star on the flag as well.
            </p>
            <p className="country-name">USA</p>
          </article>
          <article className="card">
            <h2 className="short-fact">
              The flag of the USA has at least 13 versions.
            </h2>
            <p className="long-fact">
              It started as a British flag variation featuring 13 white stripes
              for the 13 colonies. Eventually, white stars joined the design
              representing each state in the union. Hawaii became the 50th state
              of the USA, making it the 50th star on the flag as well.
            </p>
            <p className="country-name">USA</p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
