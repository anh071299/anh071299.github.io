import { useSelector } from "react-redux";
import FilmItem from "./FilmItem";

const FilmList = () => {
    const films  = useSelector(state => state) ;
    return(
        <ul>
            {
                  films.map(f => <FilmItem key ={f.id} film = {f}/>)
            }
        </ul>
    )
}
export default FilmList