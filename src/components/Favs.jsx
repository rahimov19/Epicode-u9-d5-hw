import React from "react";
import NavigationBar from "./NavigationBar";
import clouds from "../img/clouds_jpg_jpg-2.jpg";
import rain from "../img/rain.jpg";
import snow from "../img/snow.jpg";
import drizzle from "../img/drizzle.jpg";
import clear from "../img/clear.jpg";
import {
  Container,
  Row,
  Card,
  ListGroup,
  ListGroupItem,
  CardGroup,
  Button,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Favs() {
  const favsArr = useSelector((state) => state.favs.content);
  const degree = String.fromCodePoint(0x000b0);
  const dispatch = useDispatch();
  return (
    <>
      <NavigationBar />
      <Container id="favCon">
        {favsArr && favsArr.length > 0 && (
          <Row>
            <CardGroup>
              {favsArr.map((city, i) => (
                <Card
                  className="weathercard"
                  style={
                    city.weather.weather[0].main === "Clouds"
                      ? {
                          backgroundImage: `url(${clouds})`,
                        }
                      : city.weather.weather[0].main === "Rain"
                      ? { backgroundImage: `url(${rain})`, color: "black" }
                      : city.weather.weather[0].main === "Snow"
                      ? { backgroundImage: `url(${snow})` }
                      : city.weather.weather[0].main === "Drizzle"
                      ? { backgroundImage: `url(${drizzle})`, color: "black" }
                      : { backgroundImage: `url(${clear})` }
                  }
                >
                  <Card.Img
                    variant="top"
                    src="http://placekitten.com/1200/800"
                  />
                  <Card.Body>
                    <Card.Title className="mb-0">
                      {city.weather.name}
                    </Card.Title>
                    <Card.Text className="cardtext">
                      {city.weather.weather[0].description}{" "}
                      <img
                        src={`http://openweathermap.org/img/wn/${city.weather.weather[0].icon}.png`}
                        alt="brrr"
                      />
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem className="listItem">
                      <span>
                        t: {Math.ceil(city.weather.main.temp)}
                        {degree}C{" "}
                      </span>
                      <span>
                        Min: {Math.ceil(city.weather.main.temp_min)}
                        {degree}C{" "}
                      </span>
                      <span>
                        Max: {Math.ceil(city.weather.main.temp_max)}
                        {degree}C
                      </span>
                    </ListGroupItem>
                    <ListGroupItem className="listItem">
                      <span> Wind: {city.weather.wind.speed}m/s, </span>
                      <span> {city.weather.wind.deg} deg</span>
                    </ListGroupItem>
                    <ListGroupItem className="listItem">
                      <span>
                        Feels like: {Math.ceil(city.weather.main.feels_like)}
                        {degree}C
                      </span>
                      <span> Humidity: {city.weather.main.humidity}</span>
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body className="cardBody">
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch({ type: "REMOVE_FROM_FAVS", payload: i });
                      }}
                    >
                      <i class="bi bi-trash3"></i>
                    </Button>
                    <Link className="linkFavBack" to="/main">
                      Back to Main
                    </Link>
                  </Card.Body>
                </Card>
              ))}
            </CardGroup>
          </Row>
        )}
      </Container>

      <Footer />
    </>
  );
}
