import "./MainImage.css";
import Backdrop from "../../assets/MainImage.png";
import { useNavigate } from "react-router";

function MainImage() {
  const navigate = useNavigate();
  return (
    <div className="main-image-container">
      <img src={Backdrop} alt="Welcome to 4Finance" className="main-image" />
      <div className="main-image-content">
        <h1 className="main-image-title1">Training your way</h1>
        <h1 className="main-image-title2">to success.</h1>
        <div className="button" onClick={() => navigate("/courses")}>
          Check Courses
        </div>
      </div>
    </div>
  );
}

export default MainImage;
