import { lazy } from "react";
// import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

// import SharedLayout from "./SharedLayout/SharedLayout";
// import Home from "../pages/Home/Home";
// import Movies from "../pages/Movies/Movies";
// import MovieDetails from "pages/MovieDetails/MovieDetails";
// import Cast from "pages/Cast/Cast";
// import Reviews from "pages/Reviews/Reviews";

const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout"))
const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("pages/Cast/Cast"));
const Reviews = lazy(() => import("pages/Reviews/Reviews"));

export const App = () => {
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/movies/:id" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
