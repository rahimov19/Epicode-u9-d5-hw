import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import gif2 from "../img/Cold-Cold-Cold-Cold-Cold-Cold-Frozen.gif";

export default function Welcome() {
  const changeWeather = () => {
    let cold = document.querySelector("#cold");
    let link = document.querySelector("#linkwelcome");
    let button = document.querySelector("#buttonwelcome");
    let gif = document.querySelector("#gif");
    button.innerHTML = `<a href="/main" id="linkwelcome">
   Find Actual Weather
  </a>`;
    cold.classList = "";
    link.classList = "";
    gif.classList = "";
    button.classList = "btn btn-success";
  };
  return (
    <Container fluid id="welcome-container">
      <Button id="buttonwelcome" onClick={changeWeather}>
        <Link to="/main" className="disabled" id="linkwelcome">
          {" "}
          What's the Weather?
        </Link>
      </Button>
      <h2 id="cold" className="d-none">
        It's Cold
      </h2>
      <img className="d-none" id="gif" src={gif2} alt="cold" />
    </Container>
  );
}
