import "./InstructorPopup.css";

//Social Media Icons
import Mail from "../../../assets/SocialMediaIcons/email.png";
import Phone from "../../../assets/SocialMediaIcons/telephone.png";

type InstructorPopupProps = {
  id: any;
  name: any;
  image: any;
  speciality: any;
  bio: any;
  closePopup: any;
  phoneNumber: any;
  email: any;
};

function InstructorPopup(props: InstructorPopupProps) {
  return (
    <div className="instructor-popup-container">
      <div
        className="instructor-popup-overlay"
        onClick={props.closePopup}
      ></div>
      <div className="instructor-popup-content">
        <img src={props.image} alt={props.name} className="instructor-image" />
        <div className="instructor-popup-right-side">
          <h1 className="instructor-name">{props.name}</h1>
          <h2 className="instructor-speciality">{props.speciality}</h2>
          <p className="instructor-bio">{props.bio}</p>

          <div className="instructor-contact-container">
            <img src={Phone} alt="Phone Number" className="contact-icon" />
            <p className="instructor-contact-info">{props.phoneNumber}</p>
          </div>

          <div className="instructor-contact-container">
            <img src={Mail} alt="e-mail" className="contact-icon" />
            <p className="instructor-contact-info">{props.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorPopup;
