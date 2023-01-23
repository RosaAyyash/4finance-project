import "./ProfileCard.css";

//Icons
import { useNavigate } from "react-router";

type ProfileCardProps = {
  id: number;
  name: string;
  email: string;
  image: any;
  speciality: string;
  phoneNumber: number;
};
function ProfileCard(props: ProfileCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="profile-card-container"
      onClick={() => navigate(`/instructors/${props.id}`)}
    >
      <img src={props.image} alt={props.name} className="profile-image" />
      <div className="profile-details">
        <p className="profile-name">{props.name}</p>
        <p className="profile-speciality">{props.speciality}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
