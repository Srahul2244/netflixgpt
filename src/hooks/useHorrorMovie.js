

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addHorrorMovies } from "../utils/movieSlice";


const useHorrorMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const horrorMovies = useSelector((store) => store.movies.horrorMovies);
  // console.log(comingMovies)
  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=27",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addHorrorMovies(json.results));
    console.log(json.results)
  };

  useEffect(() => {
    !horrorMovies &&   getHorrorMovies ();
  }, [])
}

export default useHorrorMovies