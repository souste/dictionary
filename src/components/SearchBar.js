import "./SearchBar.css";
import { useState } from "react";

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
      <h1>Dictionary</h1>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
export default SearchBar;
