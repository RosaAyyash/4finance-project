import "./CalendarSection.css";
import { useState } from "react";

function CalendarSection() {
  const [date, setDate] = useState(new Date());
  return (
    <div id="calendar">
      <h1 className="section-title">Here is Our Schedule</h1>
      <div className="calendar-container"></div>
    </div>
  );
}

export default CalendarSection;
