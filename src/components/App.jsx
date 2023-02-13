import { MovieDetails } from "pages/MovieDetails/MovieDetails";
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
        <Route path="/movies/:id" element={<MovieDetails/>}/>
      </Routes>
    </>
  );
};
