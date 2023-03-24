import SearchBar from "./components/SearchBar";
import Dictionary from "./components/Dictionary";
import searchAPIs from "./api";
import { useState } from "react";

function App() {
  const [word, setWord] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchAPIs.searchWords(term);
    setWord(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <Dictionary word={word} />
    </div>
  );
}
export default App;
