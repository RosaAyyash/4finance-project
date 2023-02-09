import "./Header.css";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/logo.gif";
import { useEffect, useState } from "react";
import Hamburger from "../Hamburger/Hamburger";

function Header() {
  const navigate = useNavigate();

  //hamburger useState
  const [isHamburger, setHambuger] = useState(false);
  const handleOnHamburgerClick = () => {
    setHambuger(!isHamburger);
  };

  const closeHamburger = () => {
    setHambuger(false);
  };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="header-container" id="header">
      <img
        src={Logo}
        alt="4Finance Logo"
        className="logo-image"
        onClick={() => navigate("/")}
      />
      {width <= 730 ? (
        <div className="hamburger-icon" onClick={handleOnHamburgerClick}>
          <Hamburger />
        </div>
      ) : null}
      {width <= 730 && isHamburger ? (
        <ul className="nav-bar-list">
          <HashLink className="nav-bar-item-hashlink" to="/#about-us">
            <li className="nav-bar-item">About Us</li>
          </HashLink>
          <HashLink className="nav-bar-item-hashlink" to="/#courses">
            <li className="nav-bar-item">Courses</li>
          </HashLink>
          <HashLink className="nav-bar-item-hashlink" to="/#calendar">
            <li className="nav-bar-item">Calendar</li>
          </HashLink>
          <HashLink className="nav-bar-item-hashlink" to="/#instructors">
            <li className="nav-bar-item">Instructors</li>
          </HashLink>
          <HashLink className="nav-bar-item-hashlink" to="/#feedbacks">
            <li className="nav-bar-item">Feedbacks</li>
          </HashLink>
          <HashLink className="nav-bar-item-hashlink" to="/#contact-us">
            <li className="nav-bar-item">Contact Us</li>
          </HashLink>
        </ul>
      ) : null}
      {width > 730 ? (
        <ul className="nav-bar-list">
          <HashLink className="nav-bar-item-hashlink" to="/#about-us">
            <li className="nav-bar-item">About Us</li>
          </HashLink>
          <HashLink className="nav-bar-item-hashlink" to="/#courses">
            <li className="nav-bar-item">Courses</li>
          </HashLink>
          <HashLink className="nav-bar-item-hashlink" to="/#calendar">
            <li className="nav-bar-item">Calendar</li>
          </HashLink>
          <HashLink className="nav-bar-item-hashlink" to="/#instructors">
            <li className="nav-bar-item">Instructors</li>
          </HashLink>
          <HashLink className="nav-bar-item-hashlink" to="/#feedbacks">
            <li className="nav-bar-item">Feedbacks</li>
          </HashLink>
          <HashLink className="nav-bar-item-hashlink" to="/#contact-us">
            <li className="nav-bar-item">Contact Us</li>
          </HashLink>
        </ul>
      ) : null}
    </div>
  );
}

export default Header;
