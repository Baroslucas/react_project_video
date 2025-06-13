const API_KEY = import.meta.env.VITE_API_KEY_PARAM;

const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchPopularShow() {
  const url = `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=fr-FR&page=1`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json.results;
  } catch (error) {
    console.error(
      "Erreur lors du fetch des séries les plus populaires: ",
      error.message
    );
  }
}
