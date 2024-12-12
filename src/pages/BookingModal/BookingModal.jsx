import React, { useState } from "react";
import "../../App.css";

const BookingModal = ({ trip, onClose }) => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {
      tripId: trip.id,
      date,
      guests,
      total: trip.price * guests,
    };
  
    onClose();
  };

  return (
    <div className="modal">
      <div className="book-trip-popup" data-test-id="book-trip-popup">
        <button
          className="book-trip-popup__close"
          data-test-id="book-trip-popup-close"
          onClick={onClose}
        >
          ×
        </button>
        <form
          className="book-trip-popup__form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="trip-info">
            <h3
              className="trip-info__title"
              data-test-id="book-trip-popup-title"
            >
              {trip.title}
            </h3>
            <div className="trip-info__content">
              <span
                className="trip-info__duration"
                data-test-id="book-trip-popup-duration"
              >
                <strong>{trip.duration}</strong> days
              </span>
              <span
                className="trip-info__level"
                data-test-id="book-trip-popup-level"
              >
                {trip.level}
              </span>
            </div>
          </div>
          <label className="input">
            <span className="input__heading">Date</span>
            <input
              type="date"
              name="date"
              required
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={handleDateChange}
              data-test-id="book-trip-popup-date"
            />
          </label>
          <label className="input">
            <span className="input__heading">Number of guests</span>
            <input
              type="number"
              name="guests"
              min="1"
              max="10"
              value={guests}
              required
              onChange={handleGuestsChange}
              data-test-id="book-trip-popup-guests"
            />
          </label>
          <span className="book-trip-popup__total">
            Total:
            <output
              className="book-trip-popup__total-value"
              data-test-id="book-trip-popup-total-value"
            >
              ${trip.price * guests}
            </output>
          </span>
          <button
            type="submit"
            className="button"
            data-test-id="book-trip-popup-submit"
          >
            Book a trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
