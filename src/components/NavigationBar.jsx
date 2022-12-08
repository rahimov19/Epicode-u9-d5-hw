import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEvent = (e) => {
    e.preventDefault();
    const inputBar = document.querySelector("#inputBar").value;

    dispatch({
      type: "Search_Query",
      payload: { inputBar },
    });

    navigate("/search");
  };

  const handleEvent2 = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const inputBar = document.querySelector("#inputBar").value;

      dispatch({
        type: "Search_Query",
        payload: { inputBar },
      });

      navigate("/search");
    }
  };
  return (
    <Navbar bg="success" expand="lg">
      <Navbar.Brand>Weather App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="navlink" to="/main">
            Home
          </Link>
          <Link className="navlink" to="/main">
            Current Weather
          </Link>
          <Link className="navlink" to="/favs">
            Saved Cities
          </Link>
        </Nav>

        <input
          id="inputBar"
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onKeyUp={(e) => handleEvent2(e)}
          onChange={(e) => {
            dispatch({
              type: "Search_Query",
              payload: { inputBar: e.target.value },
            });
          }}
        />

        <Button
          id="searchbutton"
          onClick={(e) => handleEvent(e)}
          variant="outline-success"
        >
          Search
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
