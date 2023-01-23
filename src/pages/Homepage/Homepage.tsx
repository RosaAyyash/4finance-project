import AboutUs from "../../components/AboutUs/AboutUs";
import CalendarSection from "../../components/Calendar/CalendarSection";
import ContactUs from "../../components/ContactUs/ContactUs";
import CoursesSection from "../../components/CoursesSection/CoursesSection";
import Header from "../../components/Header/Header";
import InstructorsSection from "../../components/InstructorsSection/InstructorsSection";
import MainImage from "../../components/MainImage/MainImage";
import "./Homepage.css";

function Homepage() {
  return (
    <div>
      <Header />
      <MainImage />
      <AboutUs />
      <InstructorsSection />
      <CoursesSection />
      <CalendarSection />
      <ContactUs />
    </div>
  );
}

export default Homepage;
