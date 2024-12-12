import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bookings from "../../assets/data/bookings.json";
import "../../App.css";
const Bookings = () => {
  const [sortedBookings, setSortedBookings] = useState([]);

  useEffect(() => {
    const sorted = [...bookings].sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    setSortedBookings(sorted);
  }, [bookings]);

  const handleCancelBooking = (id) => {
    const updatedBookings = sortedBookings.filter(
      (booking) => booking.id !== id
    );
    setSortedBookings(updatedBookings);
  };

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {sortedBookings.length === 0 ? (
          <li className="booking">
            <p>No bookings yet.</p>
          </li>
        ) : (
          sortedBookings.map((booking) => (
            <li key={booking.id} className="booking" data-test-id="booking">
              <h3 data-test-id="booking-title" className="booking__title">
                {" "}
                {booking.trip.title}
              </h3>
              <span data-test-id="booking-guests" className="booking__guests">
                {booking.guests} guests
              </span>
              <span data-test-id="booking-date" className="booking__date">
                {new Date(booking.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </span>
              <span data-test-id="booking-total" className="booking__total">
                ${booking.trip.price}
              </span>
              <button
                className="booking__cancel"
                title="Cancel booking"
                data-test-id="booking-cancel"
                onClick={() => handleCancelBooking(booking.id)}
              >
                <span className="visually-hidden">Cancel booking</span>×
              </button>
            </li>
          ))
        )}
      </ul>
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </main>
  );
};

export default Bookings;
