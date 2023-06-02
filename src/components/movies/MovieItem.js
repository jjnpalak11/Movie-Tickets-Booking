import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MovieItem=({movie:{show}}) =>{
        return (
            <div className='card text-center'>
            <img 
            src={show.image} 
            alt=''
            className='round-img'
            style= {{width:'60px'}}
            />
            <h2>{show.name}</h2>
            <h3>{show.genres}</h3>
            <Link to={`/movie/${show.name}`} className='btn btn-dark btn-sm my-1'>About</Link> 
          </div>
        )
      }    

    MovieItem.propTypes={
        movie:PropTypes.object.isRequired
      }

 
export default MovieItem