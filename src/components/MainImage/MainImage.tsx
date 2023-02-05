import "./MainImage.css";
import Backdrop from "../../assets/MainImage.png";
import { Button, makeStyles } from "@mui/material";

function MainImage() {
  // const useStyles = makeStyles({
  //   root: {
  //     background: "rgb(235, 114, 97)",
  //     "&:hover": {
  //       background: "rgb(184, 85, 72)",
  //     },
  //   },
  // });
  return (
    <div className="main-image-container">
      <img src={Backdrop} alt="Welcome to 4Finance" className="main-image" />
      <div className="main-image-content">
        <h1 className="main-image-title1">Training your way</h1>
        <h1 className="main-image-title2">to success.</h1>
        <Button
          sx={{
            color: "white",
            backgroundColor: "rgb(235, 114, 97)",
            borderColor: "rgb(235, 114, 97)",
            fontSize: "20px",
            width: "250px",
            borderRadius: "10px",
          }}
        >
          Check Courses
        </Button>
      </div>
    </div>
  );
}

export default MainImage;
