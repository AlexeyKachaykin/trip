import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "../../App.css";
import briefcaseIcon from "../../assets/images/briefcase.svg";
import userIcon from "../../assets/images/user.svg";
const Header = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const isAuthPage =
    location.pathname === "/sign-up" || location.pathname === "/sign-in";

  const handleSignOut = () => {
    navigate("/sign-in");
  };
  return (
    <header className="header">
      <div className="header__inner" data-test-id="header-inner">
        <Link to="/" className="header__logo-link">
          Travel App
        </Link>

        {!isAuthPage && (
          <nav className="header__nav" data-test-id="header-nav">
            <ul className="nav-header__list">
              <li className="nav-header__item">
                <Link
                  to="/bookings"
                  className="nav-header__inner"
                  data-test-id="header-bookings-link"
                >
                  <span className="visually-hidden">Bookings</span>
                  <img src={briefcaseIcon} alt="bookings" />
                </Link>
              </li>
              <li
                className="nav-header__item profile-nav"
                onMouseEnter={() => setShowProfileMenu(true)}
                onMouseLeave={() => setShowProfileMenu(false)}
              >
                <div
                  className="nav-header__inner profile-nav"
                  data-test-id="header-profile-nav"
                >
                  <span className="visually-hidden">Profile</span>
                  <img src={userIcon} alt="profile" />
                  {showProfileMenu && (
                    <ul
                      className="profile-nav__list"
                      data-test-id="header-profile-nav-list"
                    >
                      <li
                        className="profile-nav__item"
                        data-test-id="header-profile-nav-username"
                      >
                        {user ? user.fullName : "Guest"}
                      </li>
                      <li className="profile-nav__item">
                        <button
                          onClick={handleSignOut}
                          className="profile-nav__sign-out button"
                          data-test-id="header-profile-nav-sign-out"
                        >
                          {" "}
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
