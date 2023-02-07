import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../store/actions/messageAction";
import "./RegistrationPopup.css";

type RegistrationPopupProps = {
  courseName?: string;
  closePopup: any;
};

function RegistrationPopup(props: RegistrationPopupProps) {
  const dispatch = useDispatch<any>();
  //entered value by the user
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [major, setMajor] = useState("");
  const course = props.courseName;

  const message =
    "Hello, my name is " +
    name +
    " " +
    fatherName +
    ". I am " +
    age +
    " years old. My email is: " +
    email +
    ", my phone number is " +
    phoneNumber +
    ". My address is: " +
    address +
    " .I am studying " +
    major +
    " and I would like to register for the " +
    course +
    " course provided at 4finance training center.";

  //   const handleClick = () => {
  //     const encodedMessage = encodeURIComponent(message);
  //     window.open(`whatsapp://send?text=${encodedMessage}`);
  //   };

  const copyTextToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const [isCopied, setCopied] = useState(false);

  return (
    <>
      {isCopied
        ? dispatch(
            setMessage("success", "You fetched all the teachers succesfully")
          )
        : null}
      <div className="registration-popup-container">
        <div
          className="registration-popup-overlay"
          onClick={props.closePopup}
        ></div>
        <div className="registration-popup-content">
          <h2>Registration Form</h2>
          <TextField
            label="First Name"
            variant="outlined"
            className="registration-text-input"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></TextField>
          <TextField
            label="Father's Full Name"
            variant="outlined"
            className="registration-text-input"
            value={fatherName}
            onChange={(event) => setFatherName(event.target.value)}
          ></TextField>
          <TextField
            label="Email"
            variant="outlined"
            className="registration-text-input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></TextField>
          <TextField
            label="Phone Number"
            variant="outlined"
            className="registration-text-input"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          ></TextField>
          <TextField
            label="Age"
            variant="outlined"
            className="registration-text-input"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          ></TextField>
          <TextField
            label="Address"
            variant="outlined"
            className="registration-text-input"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          ></TextField>
          <TextField
            label="Major"
            variant="outlined"
            className="registration-text-input"
            value={major}
            onChange={(event) => setMajor(event.target.value)}
          ></TextField>
          <TextField
            label="Course"
            variant="outlined"
            className="registration-text-input"
            value={props.courseName}
          ></TextField>
          <p className="note">
            <b>Note:</b> Copy the message and paste in our Whatsapp Chat
          </p>

          <div className="buttons-container">
            <div className="popup-button" onClick={props.closePopup}>
              Cancel
            </div>
            <div
              className="popup-button"
              onClick={() => [copyTextToClipboard(message), setCopied(true)]}
            >
              Copy Message
            </div>
            <div
              className="popup-button"
              onClick={() => window.open("https://wa.me/96176969036", "_blank")}
            >
              Open Whatsapp
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationPopup;
