import { useLocation, useNavigate } from "react-router-dom";
import "../styles/TheatreSelection.css";

function TheatreSelection() {

  const navigate = useNavigate();
  const location = useLocation();

  // Get movie name from MovieDetails page
  const { movie } = location.state || {};

  const theatres = [
    {
      id: 1,
      name: "PVR Cinemas",
      location: "Hyderabad",
      timings: [
        "10:00 AM",
        "12:30 PM",
        "3:30 PM",
        "6:30 PM",
        "9:45 PM",
      ],
    },
    {
      id: 2,
      name: "INOX",
      location: "Hyderabad",
      timings: [
        "11:00 AM",
        "2:00 PM",
        "5:00 PM",
        "8:00 PM",
        "10:45 PM",
      ],
    },
    {
      id: 3,
      name: "Cinepolis",
      location: "Hyderabad",
      timings: [
        "9:30 AM",
        "12:45 PM",
        "4:00 PM",
        "7:15 PM",
        "10:30 PM",
      ],
    },
    {
      id: 4,
      name: "Asian Cinemas",
      location: "Hyderabad",
      timings: [
        "10:15 AM",
        "1:15 PM",
        "4:30 PM",
        "7:30 PM",
        "10:50 PM",
      ],
    },
  ];

  return (
    <div className="theatre-container">

      <h1>Select Theatre</h1>

      <h2 style={{ textAlign: "center", color: "#f84464" }}>
        🎬 {movie}
      </h2>

      {theatres.map((theatre) => (

        <div className="theatre-card" key={theatre.id}>

          <h2>{theatre.name}</h2>

          <p>📍 {theatre.location}</p>

          <div className="timings">

            {theatre.timings.map((time, index) => (

              <button
                key={index}
                className="time-btn"
                onClick={() =>
                  navigate("/seats", {
                    state: {
                      movie,
                      theatre: theatre.name,
                      showTime: time,
                    },
                  })
                }
              >
                {time}
              </button>

            ))}

          </div>

        </div>

      ))}

    </div>
  );
}

export default TheatreSelection;