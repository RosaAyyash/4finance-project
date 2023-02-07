import AboutUs from "../../components/AboutUs/AboutUs";
import CalendarSection from "../../components/Calendar/CalendarSection";
import Footer from "../../components/Footer/Footer";
import CoursesSection from "../../components/CoursesSection/CoursesSection";
import FeedbackSection from "../../components/FeedbackSection/FeedbackSection";
import Header from "../../components/Header/Header";
import InstructorsSection from "../../components/InstructorsSection/InstructorsSection";
import MainImage from "../../components/MainImage/MainImage";
import "./Homepage.css";
import ContactUs from "../../components/ContactUs/ContactUs";

function Homepage() {
  return (
    <div>
      <MainImage />
      <AboutUs />
      <CoursesSection />
      <CalendarSection />
      <InstructorsSection />
      <FeedbackSection />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Homepage;
