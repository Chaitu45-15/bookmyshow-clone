import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SeatSelection() {
  const location = useLocation();
  const navigate = useNavigate();

  const { theatre, showTime } = location.state || {};

  const [selectedSeats, setSelectedSeats] = useState([]);

  // Already booked seats
  const bookedSeats = [
    "A5",
    "A6",
    "B10",
    "C8",
    "D15",
    "E12",
    "F18",
  ];

  const seatRows = [
    {
      row: "A",
      price: 50,
      seats: Array.from({ length: 20 }, (_, i) => i + 1),
    },
    {
      row: "B",
      price: 50,
      seats: Array.from({ length: 20 }, (_, i) => i + 1),
    },
    {
      row: "C",
      price: 150,
      seats: Array.from({ length: 20 }, (_, i) => i + 1),
    },
    {
      row: "D",
      price: 150,
      seats: Array.from({ length: 20 }, (_, i) => i + 1),
    },
    {
      row: "E",
      price: 250,
      seats: Array.from({ length: 20 }, (_, i) => i + 1),
    },
    {
      row: "F",
      price: 250,
      seats: Array.from({ length: 20 }, (_, i) => i + 1),
    },
  ];

  function handleSeatClick(row, seat, price) {
    const seatNumber = row + seat;

    const exists = selectedSeats.find(
      (s) => s.seat === seatNumber
    );

    if (exists) {
      setSelectedSeats(
        selectedSeats.filter(
          (s) => s.seat !== seatNumber
        )
      );
    } else {
      setSelectedSeats([
        ...selectedSeats,
        {
          seat: seatNumber,
          price: price,
        },
      ]);
    }
  }

  const totalAmount = selectedSeats.reduce(
    (total, seat) => total + seat.price,
    0
  );

  return (
    <div
      style={{
        padding: "30px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        🎟 Seat Selection
      </h1>

      <h3>🎭 Theatre : {theatre}</h3>

      <h3>🕒 Show Time : {showTime}</h3>

      <br />

      <div
        style={{
          width: "80%",
          margin: "auto",
          background: "#ddd",
          textAlign: "center",
          padding: "12px",
          borderRadius: "40px",
          fontWeight: "bold",
          marginBottom: "30px",
          fontSize: "20px",
        }}
      >
        SCREEN
      </div>

      {seatRows.map((row) => (
        <div
          key={row.row}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "12px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "40px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {row.row}
          </div>

          {row.seats.map((seat) => {
            const seatNumber = row.row + seat;

            const isBooked =
              bookedSeats.includes(seatNumber);

            const isSelected =
              selectedSeats.find(
                (s) => s.seat === seatNumber
              );

            return (
              <button
                key={seat}
                disabled={isBooked}
                onClick={() =>
                  handleSeatClick(
                    row.row,
                    seat,
                    row.price
                  )
                }
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "4px",
                  border: "1px solid #333",
                  borderRadius: "6px",
                  cursor: isBooked
                    ? "not-allowed"
                    : "pointer",
                  backgroundColor: isBooked
                    ? "red"
                    : isSelected
                    ? "green"
                    : "white",
                  color:
                    isBooked || isSelected
                      ? "white"
                      : "black",
                  fontWeight: "bold",
                }}
              >
                {seat}
              </button>
            );
          })}
        </div>
      ))}

      <hr />

      <h2>Selected Seats</h2>

      <p>
        {selectedSeats.length === 0
          ? "No Seats Selected"
          : selectedSeats
              .map((seat) => seat.seat)
              .join(", ")}
      </p>

      <h2>Total Amount : ₹{totalAmount}</h2>

      <button
        onClick={() =>
          navigate("/payment", {
            state: {
              theatre,
              showTime,
              selectedSeats,
              totalAmount,
            },
          })
        }
        style={{
          background: "#f84464",
          color: "white",
          border: "none",
          padding: "15px 35px",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "18px",
          marginTop: "20px",
        }}
      >
        Proceed to Payment
      </button>
    </div>
  );
}

export default SeatSelection;