import "../styles/MovieCard.css";
import { useNavigate } from "react-router-dom";

function MovieCard({
  id,
  title,
  rating,
  language,
  genre,
  poster,
}) {

  const navigate = useNavigate();

  const handleBookNow = () => {
    console.log("Movie ID:", id);
    console.log("Navigating to:", `/movie/${id}`);

    navigate(`/movie/${id}`);
  };

  return (
    <div className="movie-card">

      <img
        src={poster}
        alt={title}
        className="movie-poster"
      />

      <div className="movie-info">

        <h3>{title}</h3>

        <p>⭐ {rating}</p>

        <p>{language} • {genre}</p>

        <button
          className="book-btn"
          onClick={handleBookNow}
        >
          Book Now
        </button>

      </div>

    </div>
  );
}

export default MovieCard;