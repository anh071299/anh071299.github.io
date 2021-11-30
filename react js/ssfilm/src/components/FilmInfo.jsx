import { useParams } from "react-router";
import { getFilmById } from "../db/film";

const FilmInfo= () => {
const params = useParams();
const film = getFilmById(params.id);
  return (
    <div className="film">
      <h1>{film.title}</h1>
      <img src={film.image} alt="image" />
    </div>
  );
};

export  default FilmInfo