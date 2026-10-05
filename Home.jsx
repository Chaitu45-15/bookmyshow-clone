import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";

import "../styles/Home.css";

import pushpa from "../images/pushpa2.jpg";
import kalki from "../images/kalki.jpg";
import peddi from "../images/Peddi.jpg";
import coolie from "../images/coolie.jpg";
import og from "../images/Og.jpg"

function Home() {

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:8080/movies")
      .then((response) => {

        // Check backend data
        console.log("Movies from Backend:", response.data);

        const moviesWithImages = response.data.map((movie) => {

          let poster = pushpa;

          if (movie.title === "Pushpa 2") {
            poster = pushpa;
          } else if (movie.title === "Kalki 2898 AD") {
            poster = kalki;
          } else if (movie.title === "Peddi") {
            poster = peddi;
          } else if (movie.title === "Coolie") {
            poster = coolie;
          }else if (movie.title === "OG"){
            poster = og;
          }

          return {
            ...movie,
            poster,
          };

        });

        console.log("Movies with Images:", moviesWithImages);

        setMovies(moviesWithImages);

      })
      .catch((error) => {
        console.log("Axios Error:", error);
      });

  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <Banner />

      <section className="movies-section">

        <h2 className="movies-title">
          Recommended Movies
        </h2>

        <div className="movies-container">

          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.rating}
              language={movie.language}
              genre={movie.genre}
              poster={movie.poster}
            />
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;