
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./layout/Layout";
import FeatureFilm from "./pages/FeatureFilm";
import Cartoon from "./pages/Cartoon";
import MovieTheater from "./pages/MovieTheater";
import TelevisionSeries from "./pages/TelevisionSeries"
import Home from "./pages/Home";
import FilmDetail from "./pages/FilmDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  index element={<Home />} />
          <Route path="feature-film" element={<FeatureFilm />} />
          <Route path="television-series" element={<TelevisionSeries />} />
          <Route path="cartoon" element={<Cartoon />} />
          <Route path="movie-theater" element={<MovieTheater />} />
          <Route path="film/:id" element= {<FilmDetail/>}/>
        </Route>
      </Routes>
     
    </BrowserRouter>
    
  );
};

export default App;
