import { TextField } from "@mui/material";
import "./ContactUs.css";

//Images
import Location from "../../assets/Location.png";

// import { makeStyles } from "@material-ui/core/styles";
// const useStyles: any = makeStyles({
//   root: {
//     "& .MuiOutlinedInput-root": {
//       "&.Mui-focused fieldset": {
//         borderColor: "rgb(235, 114, 97)",
//       },
//     },
//     "& .MuiOutlinedInput-notchedOutline": {
//       "&.Mui-focused": {
//         borderColor: "rgb(235, 114, 97)",
//       },
//     },
//   },
// });

function ContactUs() {
  //   const classes = useStyles();
  return (
    <div className="contact-us-visit-us-container">
      <div className="contact-us-container">
        <h1 className="section-title">Contact Us</h1>
        <TextField
          label="Full Name"
          variant="outlined"
          className="text-field-contact-us"
        />
        <TextField
          label="Email"
          variant="outlined"
          className="text-field-contact-us"
        />
        <TextField
          label="Type your message here"
          variant="outlined"
          className="text-field-contact-us"
        />
        <span className="submit-button">Submit</span>
      </div>

      <div className="visit-us-container">
        <h1 className="section-title">Visit Us</h1>
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
