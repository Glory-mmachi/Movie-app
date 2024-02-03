import { useState } from "react";
import Hero from "./Hero";
import Nav from "./Nav";
import { useTheme } from "../../ContextApi";

export default function Header() {
  const { setSearchKey } = useTheme();
  const [searchValue, setSearchValue] = useState("");

  const searchMovies = (e) => {
    e.preventDefault();
    setSearchKey(searchValue);
    setSearchValue("");
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Nav />
      <div className="header container">
        {/* header section */}
        <h2>MovieLog</h2>
        <form onSubmit={searchMovies}>
          <input
            type="text"
            placeholder="Search Movies"
            value={searchValue}
            onChange={handleInputChange}
            name="searchInput"
          />
          <button type="submit" className="btn btn-search">
            Search
          </button>
        </form>
      </div>
      <Hero />
    </>
  );
}
