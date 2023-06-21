import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Navbar } from "./components/"

const App = () => (
  <BrowserRouter>
    <Box>
      <Navbar />
      <Routes>
        <Route />
        <Route />
        <Route />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
