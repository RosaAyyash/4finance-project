import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../store/actions/messageAction";
import CopiedPopup from "./CopiedPopup/CopiedPopup";
import "./RegistrationPopup.css";

type RegistrationPopupProps = {
  courseName?: string;
  closePopup: any;
};

type User = {
  name: string;
  fatherName: string;
  age: number;
  email: string;
  phoneNumber: number;
  address: string;
  major: string;
  course?: string;
};

function RegistrationPopup(props: RegistrationPopupProps) {
  const dispatch = useDispatch<any>();

  const [user, setUser] = useState<User>({
    name: "",
    fatherName: "",
    age: 0,
    email: "",
    phoneNumber: 0,
    address: "",
    major: "",
    course: props.courseName,
  });

  const handleOnNameChange = (event: any) => {
    let value = event.target.value;
    setUser({ ...user, name: value });
  };

  const handleOnFatherNameChange = (event: any) => {
    let value = event.target.value;
    setUser({ ...user, fatherName: value });
  };

  const handleOnAgeChange = (event: any) => {
    let value = event.target.value;
    setUser({ ...user, age: value });
  };

  const handleOnEmailChange = (event: any) => {
    let value = event.target.value;
    setUser({ ...user, email: value });
  };

  const handleOnPhoneNumberChange = (event: any) => {
    let value = event.target.value;
    setUser({ ...user, phoneNumber: value });
  };

  const handleOnAddressChange = (event: any) => {
    let value = event.target.value;
    setUser({ ...user, address: value });
  };

  const handleOnMajorChange = (event: any) => {
    let value = event.target.value;
    setUser({ ...user, major: value });
  };

  const [isSaveButtonDisabled, setSaveButtonDisabled] = useState(false);

  function ValidateEmail(mail: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }

    return false;
  }

  const validator = () => {
    if (
      user.name === "" ||
      user.fatherName === "" ||
      user.age === null ||
      user.age <= 0 ||
      user.email === "" ||
      user.phoneNumber === null ||
      user.phoneNumber <= 0 ||
      user.address === "" ||
      user.major === ""
    ) {
      setSaveButtonDisabled(true);
    } else if (!ValidateEmail(user.email)) {
      setSaveButtonDisabled(true);
    } else {
      setSaveButtonDisabled(false);
    }
  };

  useEffect(() => {
    validator();
  }, [user]);

  const message =
    "Hello, my name is " +
    user.name +
    " " +
    user.fatherName +
    ". I am " +
    user.age +
    " years old. My email is: " +
    user.email +
    ", my phone number is " +
    user.phoneNumber +
    ". My address is: " +
    user.address +
    " .I am studying " +
    user.major +
    " and I would like to register for the " +
    user.course +
    " course provided at 4finance training center.";

  //   const handleClick = () => {
  //     const encodedMessage = encodeURIComponent(message);
  //     window.open(`whatsapp://send?text=${encodedMessage}`);
  //   };

  const [isCopied, setCopied] = useState(false);

  const copyTextToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // dispatch(setMessage("success", "Successfuly Copied!"));
  };

  const handleOnCopyButton = () => {
    copyTextToClipboard(message);
    setCopied(true);
  };

  const closePopup = () => {
    setCopied(false);
  };

  const scrollOnTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => {
    scrollOnTop();
  }, []);

  return (
    <>
      {isCopied ? <CopiedPopup closePopup={closePopup} /> : null}

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
            value={user.name}
            onChange={handleOnNameChange}
          ></TextField>
          <TextField
            label="Father's Full Name"
            variant="outlined"
            className="registration-text-input"
            value={user.fatherName}
            onChange={handleOnFatherNameChange}
          ></TextField>
          <TextField
            label="Email"
            variant="outlined"
            className="registration-text-input"
            value={user.email}
            onChange={handleOnEmailChange}
          ></TextField>
          <TextField
            label="Phone Number"
            variant="outlined"
            className="registration-text-input"
            value={user.phoneNumber}
            onChange={handleOnPhoneNumberChange}
          ></TextField>
          <TextField
            label="Age"
            variant="outlined"
            className="registration-text-input"
            value={user.age}
            onChange={handleOnAgeChange}
          ></TextField>
          <TextField
            label="Address"
            variant="outlined"
            className="registration-text-input"
            value={user.address}
            onChange={handleOnAddressChange}
          ></TextField>
          <TextField
            label="Major"
            variant="outlined"
            className="registration-text-input"
            value={user.major}
            onChange={handleOnMajorChange}
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
            {isSaveButtonDisabled ? (
              <div className="popup-button-disabled">Copy Message</div>
            ) : (
              <div className="popup-button" onClick={handleOnCopyButton}>
                Copy Message
              </div>
            )}

            {isSaveButtonDisabled ? (
              <div className="popup-button-disabled">Open Whatsapp</div>
            ) : (
              <div
                className="popup-button"
                onClick={() =>
                  window.open("https://wa.me/96176969036", "_blank")
                }
              >
                Open Whatsapp
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationPopup;
