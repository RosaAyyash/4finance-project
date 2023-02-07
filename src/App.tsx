import { createTheme, ThemeProvider } from "@mui/material";

import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

//Pages
import CoursePage from "./pages/CoursePage/CoursePage";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import Homepage from "./pages/Homepage/Homepage";
import InstructorPage from "./pages/InstructorsPage/InstructorPage";

const THEME = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/instructors" element={<InstructorPage />} />
          <Route
            path="instructors/:instructorId"
            element={<InstructorPage />}
          />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
