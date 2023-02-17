import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { Cast } from "pages/Movies/Cast";
import { Reviews } from "pages/Movies/Reviews";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Movies } from "../pages/Movies/Movies";
import { Header } from "./Header/Header";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
