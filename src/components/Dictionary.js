import "./Dictionary.css";

function Dictionary({ word, images, error }) {
  try {
    if (error) {
      return (
        <div>
          <p>{error.message}</p>
        </div>
      );
    }

    if (!word || !word.length) {
      return <div className="first-message">Please enter a word to search</div>;
    }

    const meaning = word[0];

    if (!meaning) {
      return (
        <div>
          <p>
            Sorry, we couldn't fine a definition for that word. Please try again
          </p>
        </div>
      );
    }

    return (
      <div className="dictionary-box">
        <h1 className="dictionary-word">
          {meaning.word} <span className="phonetics">[{meaning.phonetic}]</span>
          {/* {meaning.phonetics.length > 1 && meaning.phonetics[1].audio && (
          <audio controls>
            <source src={meaning.phonetics[1].audio} type="audio/mpeg" />
            Your browser does not support this audio element.
          </audio>
        )} */}
        </h1>
        <ul>
          {images.slice(0, 5).map((image) => {
            return (
              <li key={image.id}>
                <img
                  src={image.urls.small}
                  alt={image.alt_description}
                  onError={(event) => {
                    console.log(event.target.error);
                    event.target.error = null;
                    event.target.src = "./DictionaryLogo.jpg";
                  }}
                  className="images"
                />
              </li>
            );
          })}
        </ul>
        <ol>
          {word.map((meaning) => {
            return (
              <li key={meaning.meanings[0].definitions[0].definition}>
                <p className="definition">
                  {meaning.meanings[0].definitions[0].definition}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }
}
export default Dictionary;
