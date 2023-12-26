import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import Header from "./Header";
import MainContainter from "./MainContainter";
import SecondaryContainer from "./SecondaryContainer";
import useHorrorMovies from "../hooks/useHorrorMovie";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useTrendingMovies();
  useHorrorMovies();
  // const movies = useSelector((store) => store.movies.popularMovies);
  // console.log(movies[0]);
  // console.log(useUpComingMovies());
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainter />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
