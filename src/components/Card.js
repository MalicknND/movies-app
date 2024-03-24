import React from "react";

const Card = ({ movie }) => {
  // Fonction pour formater la date de sortie du film
  const dateFormater = (date) => {
    let [year, month, day] = date.split("-");
    return [day, month, year].join("/");
  };

  // Fonction pour trouver les genres du film en fonction de leurs IDs
  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push("Action");
          break;
        case 12:
          genreArray.push("Aventure");
          break;
        case 16:
          genreArray.push("Animation");
          break;
        case 35:
          genreArray.push("Comédie");
          break;
        case 80:
          genreArray.push("Crime");
          break;
        case 99:
          genreArray.push("Documentaire");
          break;
        case 18:
          genreArray.push("Drame");
          break;
        case 10751:
          genreArray.push("Familial");
          break;
        case 14:
          genreArray.push("Fantastique");
          break;
        case 36:
          genreArray.push("Histoire");
          break;
        case 27:
          genreArray.push("Horreur");
          break;
        case 10402:
          genreArray.push("Musique");
          break;
        case 9648:
          genreArray.push("Mystère");
          break;
        case 10749:
          genreArray.push("Romance");
          break;
        case 878:
          genreArray.push("Science-Fiction");
          break;
        case 10770:
          genreArray.push("Téléfilm");
          break;
        case 53:
          genreArray.push("Thriller");
          break;
        case 10752:
          genreArray.push("Guerre");
          break;
        case 37:
          genreArray.push("Western");
          break;
        default:
          genreArray.push("Non défini");
      }
    }
    // Retourne une liste de genres sous forme d'éléments li
    return genreArray.map((genre, index) => <li key={index}>{genre}</li>);
  };

  // Fonction pour ajouter le film à la liste de coups de cœur dans le stockage local
  const addStorage = () => {
    // Récupère les données stockées localement, s'il y en a
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    // Vérifie si le film est déjà dans la liste
    if (!storedData.includes(movie.id.toString())) {
      // Ajoute l'ID du film à la liste
      storedData.push(movie.id);
      // Met à jour les données stockées localement
      window.localStorage.movies = storedData;
    }
  };

  // Fonction pour supprimer le film de la liste de coups de cœur dans le stockage local
  const deleteStorage = () => {
    // Récupère les données stockées localement
    let storedData = window.localStorage.movies.split(",");
    // Filtrer le film à supprimer de la liste
    let newData = storedData.filter((id) => id != movie.id);
    // Met à jour les données stockées localement avec la nouvelle liste filtrée
    window.localStorage.movies = newData;
  };

  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt={`affiche ${movie.title}`}
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? (
        <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
      ) : null}
      <h4>
        {movie.vote_average.toFixed(1)}/10 <span>⭐</span>
      </h4>

      <ul>
        {movie.genre_ids
          ? genreFinder()
          : movie.genres.map((genre) => <li key={genre}>{genre.name}</li>)}
      </ul>

      {movie.overview ? <h3>Synopsis</h3> : ""}
      <p>{movie.overview}</p>
      {movie.genre_ids ? (
        <div className="btn" onClick={() => addStorage()}>
          Ajouter aux coups de coeur
        </div>
      ) : (
        <div
          className="btn"
          onClick={() => {
            deleteStorage();
            window.location.reload();
          }}
        >
          Supprimer de la liste
        </div>
      )}
    </div>
  );
};

export default Card;
