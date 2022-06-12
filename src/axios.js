import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

// https://developers.themoviedb.org/3/genres/get-tv-list
