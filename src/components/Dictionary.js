import "./Dictionary.css";

// Add images from unsplash!!

function Dictionary({ word }) {
  if (!word.length) {
    return <div>Please enter a word to search</div>;
  }

  const meaning = word[0];

  return (
    <div>
      <h1>{meaning.word}</h1>
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
