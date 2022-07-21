const API_KEY = "f74bb10f5e3ed3f341c97bbbe81645ef";
const requests = {
  fetchGenre: `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`,
  trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`,
  popularSeries: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`,
  trendingSeries: `https://api.themoviedb.org/3/tv/latest?api_key=${API_KEY}&language=en-US`,
};

export default requests;
