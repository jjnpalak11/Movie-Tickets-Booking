import React from 'react'
import MovieItem from './MovieItem'
// import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const Movies=({movies})=>{
    // if(loading){
    //   return <Spinner/>
    // }else{
      return (
        <div style={movieStyle}>
          {movies.map(movie=>(
          <MovieItem key={movie.score} movie={movie}/>))}
        </div>
      );
    }
//   }

const movieStyle={
  display:'grid',
  gridTemplateColumns:'repeat(3,1fr)',
  gridGap:'1rem'
};

Movies.propTypes={
  movies: PropTypes.array.isRequired,
//   loading:PropTypes.bool.isRequired
}

export default Movies