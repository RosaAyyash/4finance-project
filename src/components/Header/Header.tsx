import "./Header.css";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/logo.gif";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-container" id="header">
      <img
        src={Logo}
        alt="4Finance Logo"
        className="logo-image"
        onClick={() => navigate("/")}
      />
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
    </div>
  );
}

export default Header;
