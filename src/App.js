import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import { BrowserRouter, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import MovieCard from "./components/MovieCard";


const App = () => {
    const [movies, setMovies] = useState([
      {
            Title: 'Iron Man',
            Description:'Tony Stark, who has inherited the defense contractor Stark Industries from his father Howard Stark, is in war-torn Afghanistan with his friend and military liaison, Lieutenant Colonel James Rhodes, to demonstrate the new "Jericho" missile.',
            Poster:'https://vignette.wikia.nocookie.net/marvelstudios/images/1/1e/Iron_Man_Official_Poster.jpg/revision/latest?cb=20150825155355&path-prefix=fr',
            Rate: 5,
            Id:uuidv4(),
            Trailer:"https://www.youtube.com/embed/KAE5ymVLmZg",
        },
        {
            Title: 'Iron Man The Sequal ',
            Description:'In Russia, the media covers Tony Stark disclosure of his identity as Iron Man.',
            Poster:'https://geekytourist.files.wordpress.com/2019/03/iron-man-2-filming-locations.jpg',
            Rate: 4,
            Id:uuidv4(),
            Trailer:"https://www.youtube.com/embed/oOzuBOefL8I",
        },
        {
            Title: 'Iron Man Third Installment ',
            Description:'At a New Year Eve party in 1999, Tony Stark meets scientist Maya Hansen, the inventor of an experimental regenerative treatment named Extremis that allows recovery from crippling injuries.',
            Poster:'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg',
            Rate: 3,
            Id:uuidv4(),
            Trailer:"https://www.youtube.com/embed/oYSD2VQagc4",

        },
    ]);
    
    const addMovie = (Title, Description, Poster, Rate, Id, Trailer) => {
        setMovies([
          ...movies,
          { Title, Description, Poster, Rate, Id, Trailer },
        ]);
      };
      return (
        <div className="App">
              <BrowserRouter>
          <h3 style={{ color: "white", fontFamily: "serif" }}>Movies List</h3>
          <MovieList movies={movies} />
          <AddMovie addMovie={AddMovie} />
          <Route path="/movie/:Id" render={(props)=> <MovieCard {...props} movies={movies}/>}/>
          </BrowserRouter>
        </div>
      );
    };
    
    export default App;
