import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'

const MovieCard = ({match, movies}) => {
  let wantedMovie = movies.find(el => match.params.id === el.id)

  return (
    <>
      <div className="MovieCard">
        <p>{wantedMovie.Description}</p>
        <iframe width="420" height="315" src={wantedMovie.Trailer}></iframe>
<Link to="/" >
        <Button variant="dark">
          Go Back
        </Button>
        
        </Link>
      </div>
    </>
  );
};

 export default MovieCard;
