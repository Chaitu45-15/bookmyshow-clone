import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import TheatreSelection from "./pages/TheatreSelection";
import SeatSelection from "./pages/SeatSelection";
import Payment from "./pages/Payment";
import BookingSuccess from "./pages/BookingSuccess";
import Ticket from "./pages/Ticket";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Movie Details */}
        <Route path="/movie/:id" element={<MovieDetails />} />

        {/* Theatre Selection */}
        <Route path="/theatres" element={<TheatreSelection />} />

        {/* Seat Selection */}
        <Route path="/seats" element={<SeatSelection />} />

        {/* Payment */}
        <Route path="/payment" element={<Payment />} />

        {/* Booking Success */}
        <Route path="/success" element={<BookingSuccess />} />
        <Route path="/ticket" element={<Ticket />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;