import "./Footer.css";

//Logo
import Logo from "../../assets/logo.gif";

//Social Media Icons
import Instagram from "../../assets/SocialMediaIcons/instagram.gif";
import Facebook from "../../assets/SocialMediaIcons/facebook.gif";
import WhatsApp from "../../assets/SocialMediaIcons/whatsapp.gif";
import LinkedIn from "../../assets/SocialMediaIcons/linkedin.gif";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <div className="footer-container" id="contact-us">
      <HashLink to="/#header">
        <img
          src={Logo}
          alt="4Finance Training Center"
          className="logo-footer"
        />
      </HashLink>

      <div className="whatsapp-container">
        <img
          className="social-media-icon"
          src={WhatsApp}
          alt="WhatsApp"
          onClick={() => window.open("https://wa.me/96176969036", "_blank")}
        />
        <p
          className="contact-us-information"
          onClick={() => window.open("https://wa.me/96176969036", "_blank")}
        >
          +961 76 969 036
        </p>
      </div>

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
          src={LinkedIn}
          alt="LinkedIn"
          onClick={() => window.open("", "_blank")}
        />
      </div>
      <p
        className="contact-us-information"
        onClick={() => window.open("mailto:4financetrainingcenter@gmail.com")}
      >
        4financetrainingcenter@gmail.com
      </p>
    </div>
  );
}

export default Footer;
