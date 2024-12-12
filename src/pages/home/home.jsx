import React, { useState, useEffect } from "react";
import tripsData from "../../assets/data/trips.json";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    setTrips(tripsData);
  }, []);

  const filterTrips = () => {
    return trips.filter((trip) => {
      const matchesSearch = trip.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesLevel = level ? trip.level === level : true;
      const matchesDuration = duration
        ? duration === "1-5"
          ? trip.duration >= 1 && trip.duration <= 5
          : duration === "6-10"
          ? trip.duration >= 6 && trip.duration <= 10
          : duration === "11+"
          ? trip.duration >= 11
          : true
        : true;
      return matchesSearch && matchesLevel && matchesDuration;
    });
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setLevel("");
    setDuration("");
  };
  const handleDiscoverTrip = (tripId) => {
    navigate(`/trip/${tripId}`);
  };
  const filteredTrips = filterTrips();

  return (
    <main className="main-page">
      <section className="trips-filter">
        <form className="trips-filter__form">
          <div className="trips-filter__search input">
            <input
              type="text"
              placeholder="Search for a trip"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              data-test-id="filter-search"
            />
          </div>
          <div className="select">
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              data-test-id="filter-level"
            >
              <option value="">level</option>
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="difficult">difficult</option>
            </select>
          </div>
          <div className="select">
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              data-test-id="filter-duration"
            >
              <option value="">All Durations</option>
              <option value="1-5">1-5 days</option>
              <option value="6-10">6-10 days</option>
              <option value="11+">11+ days</option>
            </select>
          </div>
          <button type="button " className="button " onClick={handleResetFilters}>
            Reset Filters
          </button>
        </form>
      </section>

      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        <ul className="trip-list">
          {filteredTrips.map((trip) => (
            <li key={trip.id} className="trip-card" data-test-id="trip-card">
              <img
                src={trip.image}
                alt="trip photo"
                className="trip-card__image"
                data-test-id="trip-card-image"
              />
              <div className="trip-card__content">
                <div className="trip-info">
                  <h3
                    className="trip-info__title"
                    data-test-id="trip-card-title"
                  >
                    {trip.title}
                  </h3>
                  <div className="trip-info__content">
                    <span
                      className="trip-info__duration"
                      data-test-id="trip-card-duration"
                    >
                      <strong>{trip.duration}</strong> days
                    </span>
                    <span
                      className="trip-info__level"
                      data-test-id="trip-card-level"
                    >
                      {trip.level}
                    </span>
                  </div>
                </div>
                <div className="trip-price">
                  <span>Price</span>
                  <strong
                    className="trip-price__value"
                    data-test-id="trip-card-price-value"
                  >
                    ${trip.price}
                  </strong>
                </div>
              </div>
              <a
                className="button"
                data-test-id="trip-card-link"
                onClick={() => handleDiscoverTrip(trip.id)}
              >
                Discover a trip
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
