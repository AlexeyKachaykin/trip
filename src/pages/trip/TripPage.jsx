import React, { useState } from "react";
import { useParams } from "react-router-dom";
import tripsData from "../../assets/data/trips.json";
import BookingModal from "../BookingModal/BookingModal";
import "../../App.css";

const TripPage = () => {
  const { tripId } = useParams();
  console.log(tripId, "tripId");
  const trip = tripsData.find((trip) => trip.id === tripId);

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!trip) {
    return <p>Trip not found</p>;
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="trip-page">
      <div className="trip">
        <img
          src={trip.image}
          alt={trip.title}
          className="trip__img"
          data-test-id="trip-details-image"
        />
        <div className="trip__content">
          <div className="trip-info">
            <h3 className="trip-info__title" data-test-id="trip-details-title">
              {trip.title}
            </h3>
            <div className="trip-info__content">
              <span
                className="trip-info__duration"
                data-test-id="trip-details-duration"
              >
                <strong>{trip.duration}</strong> days
              </span>
              <span
                className="trip-info__level"
                data-test-id="trip-details-level"
              >
                {trip.level}
              </span>
            </div>
          </div>
          <div
            className="trip__description"
            data-test-id="trip-details-description"
          >
            {trip.description}
          </div>
          <div className="trip-price">
            <span>Price</span>
            <strong
              className="trip-price__value"
              data-test-id="trip-details-price-value"
            >
              ${trip.price}
            </strong>
          </div>

          <button
            className="trip__button button"
            data-test-id="trip-details-button"
            onClick={handleOpenModal}
          >
            Book a trip
          </button>
        </div>
      </div>
      {isModalOpen && <BookingModal trip={trip} onClose={handleCloseModal} />}
    </main>
  );
};

export default TripPage;
