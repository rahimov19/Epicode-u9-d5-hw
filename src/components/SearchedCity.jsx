/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Col, Row, Spinner, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import clouds from "../img/clouds_jpg_jpg-2.jpg";
import rain from "../img/rain.jpg";
import snow from "../img/snow.jpg";
import drizzle from "../img/drizzle.jpg";
import clear from "../img/clear.jpg";
import NavigationBar from "./NavigationBar";

export default function Mainpage() {
  const [weather, setWeather] = useState([]);
  const search = useSelector((state) => state.weatherBulk.content.inputBar);
  useEffect(() => {
    getWeather();
  }, [search]);
  const degree = String.fromCodePoint(0x000b0);
  const getWeather = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=32dc3bb8f58669072046ef307b7da9ee&units=metric`
      );
      if (response.ok) {
        let weatherData = await response.json();
        setWeather(weatherData);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch();
  const saveToFavs = () => {
    const buttonSave = document.querySelector("#buttonsave");
    buttonSave.classList = "btn btn-success";
    buttonSave.innerHTML = `<i class="bi bi-balloon-heart-fill"></i>`;
    dispatch({
      type: "ADD_TO_FAV",
      payload: { weather },
    });
  };
  return (
    <>
      <NavigationBar />

      {!weather.weather && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      {weather.weather && weather.weather.length > 0 && (
        <Container
          id="weatherCon"
          style={
            weather.weather[0].main === "Clouds"
              ? {
                  backgroundImage: `url(${clouds})`,
                }
              : weather.weather[0].main === "Rain"
              ? { backgroundImage: `url(${rain})`, color: "black" }
              : weather.weather[0].main === "Snow"
              ? { backgroundImage: `url(${snow})` }
              : weather.weather[0].main === "Drizzle"
              ? { backgroundImage: `url(${drizzle})`, color: "black" }
              : { backgroundImage: `url(${clear})` }
          }
        >
          <Row>
            <Col>
              <h1>
                {weather.name}{" "}
                <Button id="buttonsave" onClick={saveToFavs}>
                  <i class="bi bi-balloon-heart"></i>
                </Button>
              </h1>

              <h2>
                {Math.ceil(weather.main.temp)}
                {degree} C{" "}
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                  alt="brrr"
                />
                <p id="desc">{weather.weather[0].description}</p>
              </h2>
            </Col>
            <Col>
              <h4>
                {"Local Time: "}
                {new Date().setTime(
                  new Date().getUTCHours() + weather.timezone / 60 / 60
                )}{" "}
                : {new Date().getMinutes()} UTC: {weather.timezone / 60 / 60}
              </h4>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <p>
                Min: {Math.ceil(weather.main.temp_min)}
                {degree} C
              </p>
              <p>
                Max: {Math.ceil(weather.main.temp_max)}
                {degree} C
              </p>
              <p>
                Feels like: {Math.ceil(weather.main.feels_like)}
                {degree} C
              </p>
            </Col>
            <Col xs={4}>
              <p>Wind: {weather.wind.speed}m/s</p>
              <p>Direction: {weather.wind.deg}deg</p>
            </Col>
            <Col xs={4}>
              <p>Visibility: {weather.visibility} m</p>
              <p> Clouds: {weather.clouds.all}%</p>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
