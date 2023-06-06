import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import { addMovies, setShowFavourite } from '../actions'

class App extends React.Component {

  componentDidMount() {

    const { store } = this.props;

    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));

    console.log('State: ', store.getState())
  }

  isMovieFavourite = (movie) => {
    const {movies} = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);

    if(index !== -1) {
      return true;
    }

    return false;
  }

  changeTab = (value) => {
    this.props.store.dispatch(setShowFavourite(value))
  }

  render() {
    const {movies} = this.props.store.getState();
    const {list, favourites, showFavourites} = movies;
    console.log('render', this.props.store.getState());

    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar />

        <div className="main">
          <div className="tabs ">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.changeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.changeTab(true)}
            >
              Favourites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movie-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          { displayMovies.length === 0 ? <div className='no-movies'>No Movies to show</div> : null }
        </div>
      </div>
    );
  }
  
}

export default App;
