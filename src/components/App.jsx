import { lazy } from "react";
// import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
// import { Home } from "../pages/Home/Home";
// import { Movies } from "../pages/Movies/Movies";
// import { MovieDetails } from "pages/MovieDetails/MovieDetails";
// import { Cast } from "pages/Movies/Cast";
// import { Reviews } from "pages/Movies/Reviews";
// import { Header } from "./Header/Header";

const Header = lazy(() => import('./Header/Header'))
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('pages/Movies/Cast'));
const Reviews = lazy(() => import('pages/Movies/Reviews'));

export const App = () => {
  return (
    <>
      <Header />
      {/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
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
