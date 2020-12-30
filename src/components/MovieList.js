import React, { useState } from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import button from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";


const MovieList = (props) => {
  const [search, setSearch] = useState("");
  const [Rate, setRate] = useState(1);

  const filteredMovies = props.movies.filter(
    (movie) =>
      movie.Title.toLowerCase().includes(search.toLowerCase().trim()) &&
      movie.Rate >= Rate
  );

  return (
    <>
      <input
        type="text"
        placeholder="Movie Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <StarRatingComponent
          starCount={5}
          onStarClick={(nextValue) => setRate(nextValue)}
        />
      </div>
      <div className="cards">
        {filteredMovies.map((el) => (
          <div className="lol">
            <Card>
              <Card.Img variant="top" className="image" src={el.Poster} />

              <Card.Body>
                <Card.Title>{el.Title}</Card.Title>
                <Card.Text>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={el.Rate}
                  />
                </Card.Text>
              </Card.Body>
              <Link to={`/movie/${el.Id}`}>
              <button className="button1 bouncy">Details</button>
              </Link>
            </Card>
          </div>
        ))}
      </div>

      <div></div>
    </>
  );
};

export default MovieList;