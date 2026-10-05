import { useLocation, useNavigate } from "react-router-dom";

function Payment() {

  const location = useLocation();
  const navigate = useNavigate();

  const {
    movie,
    theatre,
    showTime,
    selectedSeats,
    totalAmount,
  } = location.state || {};

  // Debug
  console.log("Payment Page Data:", location.state);

  return (
    <div
      style={{
        width: "500px",
        margin: "50px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        background: "white",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#f84464" }}>
        Payment
      </h1>

      <hr />

      <h3>🎬 Movie</h3>
      <p>{movie}</p>

      <h3>🎭 Theatre</h3>
      <p>{theatre}</p>

      <h3>🕒 Show Time</h3>
      <p>{showTime}</p>

      <h3>💺 Selected Seats</h3>
      <p>{selectedSeats?.map((seat) => seat.seat).join(", ")}</p>

      <h2>Total Amount : ₹{totalAmount}</h2>

      <hr />

      <h3>Select Payment Method</h3>

      <div style={{ marginBottom: "20px", lineHeight: "35px" }}>
        <label>
          <input type="radio" name="payment" /> UPI
        </label>
        <br />

        <label>
          <input type="radio" name="payment" /> Credit Card
        </label>
        <br />

        <label>
          <input type="radio" name="payment" /> Debit Card
        </label>
        <br />

        <label>
          <input type="radio" name="payment" /> Net Banking
        </label>
      </div>

      <button
        onClick={() =>
          navigate("/ticket", {
            state: {
              movie,
              theatre,
              showTime,
              selectedSeats,
              totalAmount,
            },
          })
        }
        style={{
          width: "100%",
          padding: "15px",
          background: "#f84464",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Pay ₹{totalAmount}
      </button>
    </div>
  );
}

export default Payment;