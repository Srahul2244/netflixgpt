import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/movieSlice";


const useUpComingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const comingMovies = useSelector((store) => store.movies.upComingMovies);
  // console.log(comingMovies)
  const getComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      // https://api.themoviedb.org/3/trending/movie/day?page=1
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
    console.log(json.results)
  };

  useEffect(() => {
    !comingMovies &&  getComingMovies ();
  }, [])
}

export default useUpComingMovies