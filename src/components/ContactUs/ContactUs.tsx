import "./ContactUs.css";

//Social Media Icons
import Instagram from "../../assets/SocialMediaIcons/instagram.png";
import Facebook from "../../assets/SocialMediaIcons/facebook.png";
import WhatsApp from "../../assets/SocialMediaIcons/whatsapp.png";
import LinkedIn from "../../assets/SocialMediaIcons/linkedin.png";
import Location from "../../assets/SocialMediaIcons/periscope.png";

//From Libraries
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";

function ContactUs() {
  const navigate = useNavigate();

  return (
    <div className="contact-us-container" id="contact-us">
      <div className="contact-us-information">
        <h2>4Finance Training Center</h2>
        <h4>Since 2013 | All Rights Reserved</h4>
      </div>

      <ul className="pages-shortcut">
        <HashLink to="/#about-us" className="page-shortcut-hash-link">
          <li className="page-shortcut">About Us</li>
        </HashLink>
        <li className="page-shortcut" onClick={() => navigate("/courses")}>
          Our Courses
        </li>
        <li className="page-shortcut" onClick={() => navigate("/instructors")}>
          Our Instructors
        </li>
        <HashLink to="#calendar" className="page-shortcut-hash-link">
          <li className="page-shortcut">Academic Calendar</li>
        </HashLink>
      </ul>

      <div className="social-media-container">
        <img
          src={Instagram}
          alt="Instragram"
          onClick={() =>
            window.open(
              "https://instagram.com/4_finance_?igshid=YmMyMTA2M2Y=",
              "_blank"
            )
          }
          className="social-media-icon"
        />
        <img
          className="social-media-icon"
          src={Facebook}
          alt="Facebook"
          onClick={() =>
            window.open(
              "https://www.facebook.com/HB4Finance?mibextid=ZbWKwL",
              "_blank"
            )
          }
        />
        <img
          className="social-media-icon"
          src={WhatsApp}
          alt="WhatsApp"
          onClick={() => window.open("https://wa.me/96176969036", "_blank")}
        />
        <img
          className="social-media-icon"
          src={LinkedIn}
          alt="LinkedIn"
          onClick={() => window.open("", "_blank")}
        />
        <img
          className="social-media-icon"
          src={Location}
          alt="Location"
          onClick={() => window.open("", "_blank")}
        />
      </div>
    </div>
  );
}

export default ContactUs;
