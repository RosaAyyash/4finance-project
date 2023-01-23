import "./InstructorsSection.css";
import data from "../../data.json";
import ProfileCard from "../ProfileCard/ProfileCard";

//Material UI
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router";

function InstructorsSection() {
  const Instructors = data["instructors"];
  const instructors_three = Instructors.slice(0, 3);
  const navigate = useNavigate();

  return (
    <div className="instructors-section-container">
      <h1 className="section-title">Thanks to Our Instructors</h1>

      <div className="instructor-cards-container">
        {instructors_three.map((instructor: any, index: number) => (
          <ProfileCard
            id={instructor.id}
            key={index}
            name={instructor.name}
            email={instructor.email}
            image={instructor.image}
            phoneNumber={instructor.phoneNumber}
            speciality={instructor.speciality}
          />
        ))}
      </div>
      <div className="see-more-button">
        <Button variant="contained" onClick={() => navigate("/instructors")}>
          See More
        </Button>
      </div>
    </div>
  );
}

export default InstructorsSection;
