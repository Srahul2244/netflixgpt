import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
  name:"movies",
  initialState:{
   nowPlayingMovies:null,
   trailerVideo:null,
   popularMovies:null,
   upComingMovies:null,
   trendingMovies:null,
   horrorMovies:null
  },
   reducers:{
    addNowPlayingMovies:(state,action) =>{
      state.nowPlayingMovies =action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo:(state,action) =>{
      state.trailerVideo =action.payload;
    },
    addUpComingMovies:(state,action)=>{
      state.upComingMovies =action.payload;
    },
     addTrendingMovies:(state,action)=>{
     state.trendingMovies =action.payload;
    },
    addHorrorMovies:(state,action)=>{
     state.horrorMovies =action.payload;
    }
   }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpComingMovies,addTrendingMovies,addHorrorMovies} =movieSlice.actions;
export default movieSlice.reducer;