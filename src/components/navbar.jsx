import { Link } from "react-router-dom";
import logo from "../images/new-logo.svg";
import "./styles/navbar.css";

function Navbar({ isLoggedIn }) {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#017E7E" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="my-2 ml-20" src={logo} alt="Cowin: Winning over Covid-19" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav nav-text">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  VACCINATION SERVICES
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <Link to="appointmentDetails" className="dropdown-item drop-ul">
                      Book an Appointment
                    </Link>
                  </li>
                  <li>
                    <Link to="appointmentDetails" className="dropdown-item drop-ul">
                      Get Appointment Details
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item drop-ul" href="#">
                      Share Vaccination Status
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item drop-ul" href="#">
                      Download Certificate
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  PLATFORMS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  RESOURCES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  SUPPORT
                </a>
              </li>
              {isLoggedIn ? (
                <></>
              ) : (
                <li className="nav-item">
                  <Link to="appointmentDetails">
                    <button className="register-button">Register / Sign In</button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
