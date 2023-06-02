// {
//     type: 'INCREASE_COUNT'
// }

// {
//     type: 'DECREASE_COUNT'
// }

//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES"; 

//action creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}

export function addFavourite(movie) {
  return {
    type: ADD_TO_FAVOURITE,
    movie: movie,
  };
}

export function removeFromFavourite(movie) {
  return {
    type: REMOVE_FROM_FAVOURITE,
    movie
  };
}

export function setShowFavourite(value) {
  return {
    type: SET_SHOW_FAVOURITES,
    value
  };
}