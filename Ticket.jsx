import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

function Ticket() {

  const location = useLocation();
  const navigate = useNavigate();

  const ticketRef = useRef();

  const {
    movie,
    theatre,
    showTime,
    selectedSeats,
    totalAmount,
  } = location.state || {};

  const bookingId = "BMS" + Math.floor(Math.random() * 1000000);

  const downloadTicket = () => {

    html2canvas(ticketRef.current).then((canvas) => {

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);

      pdf.save("BookMyShow_Ticket.pdf");

    });

  };

  return (

    <div>

      <div
        ref={ticketRef}
        style={{
          width: "600px",
          margin: "40px auto",
          padding: "30px",
          border: "2px dashed #f84464",
          borderRadius: "10px",
          background: "#fff",
        }}
      >

        <h1 style={{ textAlign: "center", color: "#f84464" }}>
          🎟 BOOKMYSHOW E-TICKET
        </h1>

        <hr />

        <p><strong>Movie :</strong> {movie}</p>

        <p><strong>Theatre :</strong> {theatre}</p>

        <p><strong>Show Time :</strong> {showTime}</p>

        <p>
          <strong>Seats :</strong>{" "}
          {selectedSeats?.map((seat) => seat.seat).join(", ")}
        </p>

        <p>
          <strong>Tickets :</strong>{" "}
          {selectedSeats?.length}
        </p>

        <p>
          <strong>Total Paid :</strong> ₹{totalAmount}
        </p>

        <p>
          <strong>Booking ID :</strong> {bookingId}
        </p>

        <hr />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >

          <QRCodeCanvas
            value={`Booking ID:${bookingId}
Movie:${movie}
Theatre:${theatre}
Show:${showTime}
Seats:${selectedSeats?.map((s)=>s.seat).join(",")}
Amount:${totalAmount}`}
            size={170}
          />

        </div>

        <h2
          style={{
            textAlign: "center",
            color: "green",
            marginTop: "20px",
          }}
        >
          Enjoy Your Movie 🍿
        </h2>

      </div>

      <div
        style={{
          width: "600px",
          margin: "20px auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >

        <button
          onClick={() => navigate("/")}
          style={{
            padding: "15px 30px",
            background: "#f84464",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Back To Home
        </button>

        <button
          onClick={downloadTicket}
          style={{
            padding: "15px 30px",
            background: "green",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          📥 Download Ticket
        </button>

      </div>

    </div>

  );
}

export default Ticket;
