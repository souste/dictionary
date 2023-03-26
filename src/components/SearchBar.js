import "./SearchBar.css";
import { useState } from "react";
import logo from "./DictionaryLogo.jpg";

function SearchBar({ onWordSubmit, onImageSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onWordSubmit(term);
    onImageSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar-border">
      <img src={logo} alt="dictionary logo" className="logo" />
      <div className="search-bar">
        <h1 className="main-title">DICTIONARY</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            value={term}
            onChange={handleChange}
            placeholder="Search for any word"
          />
        </form>
      </div>
    </div>
  );
}
export default SearchBar;
