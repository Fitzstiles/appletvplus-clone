import { useEffect, useState } from "react";
import axios from "axios";
import "./carousel.css";
const base_url = "https://image.tmdb.org/t/p/w200";
const Carousel = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="slider">
      <div className="slide__track">
        <div className="slide">
          {movies.map((movie) => (
            <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
