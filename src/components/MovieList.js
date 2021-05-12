import React from 'react';
import {IMG_API} from '../key'
const MovieList = ({movies}) => {
	
const setvoteClass=(vote)=>{
	if(vote>=8)
	return 'green'
	else if(vote>=6)
	return 'orange'
	else
	return 'red'
}
	return (
		<div className="MovieList">
			{movies.map((movie) => (
				<div className='image-container' key={movie.id}  >
					<img src={`${IMG_API}${movie.poster_path}`} alt={movie.title}></img>
					<div className="movie-info">
                        <h3>{movie.title}</h3>
                        <span className={`tag ${setvoteClass(movie.vote_average)}`}>{movie.vote_average}</span>
                    </div>

                    <div className="movie-overview">
                        <h2>Overview:</h2>
                        <p>{movie.overview}</p>
                    </div>
				</div>
			))}
		</div>
	);
};

export default MovieList;