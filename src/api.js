import axios from "axios";

const searchWords = async (term) => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
    );

    return response.data;
  } catch (error) {
    throw new Error("Word not found");
  }
};

const searchImages = async (term) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    headers: {
      Authorization: "Client-ID GKPa_eLk1vP71_IJt8mTw3mROzDsZrrzHShh-UhCnkw",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

const searchAPIs = { searchWords, searchImages };

export default searchAPIs;
