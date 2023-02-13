import { TextField } from "@mui/material";
import "./ContactUs.css";

//Images
import Location from "../../assets/Location.png";
import { useState } from "react";

function ContactUs() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (subject: string, body: any) => {
    const emailLink = `mailto:rozie.ayyash2002@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = emailLink;
  };

  return (
    <div className="contact-us-visit-us-container">
      <div className="contact-us-container">
        <h1 className="sub-section-title">Contact Us</h1>
        <TextField
          label="Full Name"
          variant="outlined"
          className="text-field-contact-us"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          className="text-field-contact-us"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Type your message here"
          variant="outlined"
          className="text-field-contact-us"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <span
          className="submit-button"
          onClick={() => sendEmail(username, message)}
        >
          Submit
        </span>
      </div>

      <div className="visit-us-container">
        <h1 className="sub-section-title">Visit Us</h1>
        <img
          className="map-image"
          src={Location}
          alt="4Finance Location"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/33%C2%B040'29.8%22N+35%C2%B035'32.4%22E/@33.6747365,35.5836558,15z/data=!4m4!3m3!8m2!3d33.6749534!4d35.5923423?hl=en",
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
}

export default ContactUs;
