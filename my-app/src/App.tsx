import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
// import { SnackbarProvider } from "notistack"; // MUI-compatible notification system

import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
import Teachers from "./pages/Teachers";
import Schools from "./pages/Schools";
import TeacherRegister from "./pages/TeacherRegister";
import SchoolRegister from "./pages/SchoolRegister";

// You can customize your MUI theme here
const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {/* <SnackbarProvider maxSnack={3}> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/teachers/register" element={<TeacherRegister />} />
        <Route path="/schools/register" element={<SchoolRegister />} />
        {/* Add additional routes above this comment */}
      </Routes>
    </BrowserRouter>
    {/* </SnackbarProvider> */}
  </ThemeProvider>
);

export default App;
