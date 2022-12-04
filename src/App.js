import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import { Container } from "react-bootstrap";
import SearchedCity from "./components/SearchedCity.jsx";
import Favs from "./components/Favs";
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Container fluid id="mainContainer">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/main" element={<Mainpage />} />
          <Route path="/search" element={<SearchedCity />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
