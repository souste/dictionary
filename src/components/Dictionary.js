import "./Dictionary.css";

function Dictionary({ word, images }) {
  if (!word.length) {
    return <div>Please enter a word to search</div>;
  }

  const meaning = word[0];

  return (
    <div>
      <h1>{meaning.word}</h1>
      <ul>
        {images.slice(0, 9).map((image) => {
          return (
            <li key={image.id}>
              <img
                src={image.urls.small}
                alt={image.alt_description}
                className="images"
              />
            </li>
          );
        })}
      </ul>
      <p>Phonetic: {meaning.phonetic}</p>
      <audio controls>
        <source src={meaning.phonetics[1].audio} type="audio/mpeg" />
        Your browser does not support this audio element.
      </audio>
      <ul>
        {word.map((meaning) => {
          return (
            <li>
              <p>{meaning.meanings[0].definitions[0].definition}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Dictionary;
