import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import pushpa from "../images/pushpa2.jpg";
import kalki from "../images/kalki.jpg";
import peddi from "../images/Peddi.jpg";
import coolie from "../images/coolie.jpg";

import "../styles/MovieDetails.css";

function MovieDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  useEffect(() => {

    axios
      .get(`http://localhost:8080/movies/${id}`)
      .then((response) => {

        let poster = pushpa;

        if (response.data.title === "Pushpa 2") {
          poster = pushpa;
        } else if (response.data.title === "Kalki 2898 AD") {
          poster = kalki;
        } else if (response.data.title === "Peddi") {
          poster = peddi;
        } else if (response.data.title === "Coolie") {
          poster = coolie;
        }

        setMovie({
          ...response.data,
          poster,
          release: "Coming Soon"
        });

      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);

  if (!movie) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Loading...
      </h1>
    );
  }

  return (
    <div className="movie-details-container">

      <div className="movie-poster-section">

        <img
          src={movie.poster}
          alt={movie.title}
          className="movie-details-poster"
        />

      </div>

      <div className="movie-details-info">

        <h1>{movie.title}</h1>

        <h2>⭐ {movie.rating}</h2>

        <p><strong>Language :</strong> {movie.language}</p>

        <p><strong>Genre :</strong> {movie.genre}</p>

        <p><strong>Duration :</strong> {movie.duration}</p>

        <p><strong>Release :</strong> {movie.release}</p>

        <div className="buttons">

          <button
            className="back-btn"
            onClick={() => navigate("/")}
          >
            Back
          </button>

          <button
            className="book-btn"
            onClick={() =>
              navigate("/theatres", {
                state: {
                  movie: movie.title,
                },
              })
            }
          >
            Book Tickets
          </button>

        </div>

      </div>

    </div>
  );
}

export default MovieDetails;