import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
const Form = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=1f54bd990f1cdfb230adb312546d765d&query=code&langage=fr-FR`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, []);

  return (
    <div>
      <div className="form-component">
        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="Entrez le nom du film"
              id="search-input"
            />
            <input type="submit" value="Rechercher" />
          </form>
          <div className="btn-sort-container">
            <div className="btn-sort" id="goodToBad">
              Top<span>➜</span>
            </div>
            <div className="btn-sort" id="badToGood">
              Flop<span>➜</span>
            </div>
          </div>
        </div>
      </div>
      <div className="result">
        {movies.slice(0, 12).map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Form;
