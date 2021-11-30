import { Link } from "react-router-dom"

const FilmItem = ({film}) => {
    return (
        <Link to={"/film/" + film.id}>{film.title}</Link>
    )
}
export default FilmItem