import "./Header.css";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/logo.gif";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <img
        src={Logo}
        alt="4Finance Logo"
        className="logo-image"
        onClick={() => navigate("/")}
      />
      <ul className="nav-bar-list">
        <li className="nav-bar-item" onClick={() => navigate("/instructors")}>
          Our Instructors
        </li>
        <li className="nav-bar-item" onClick={() => navigate("/courses")}>
          Our Courses
        </li>
        <HashLink className="nav-bar-item-hashlink" to="/#about-us">
          <li className="nav-bar-item">About Us</li>
        </HashLink>
        <HashLink className="nav-bar-item-hashlink" to="/#contact-us">
          <li className="nav-bar-item">Contact Us</li>
        </HashLink>
      </ul>
    </div>
  );
}

export default Header;
