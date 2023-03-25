import SearchBar from "./components/SearchBar";
import Dictionary from "./components/Dictionary";
import searchAPIs from "./api";
import { useState } from "react";

function App() {
  const [word, setWord] = useState([]);
  const [images, setImages] = useState([]);
  const handleWordSubmit = async (term) => {
    const result = await searchAPIs.searchWords(term);
    setWord(result);
  };

  const handleImageSubmit = async (term) => {
    const result = await searchAPIs.searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar
        onWordSubmit={handleWordSubmit}
        onImageSubmit={handleImageSubmit}
      />
      <Dictionary word={word} images={images} />
    </div>
  );
}
export default App;
