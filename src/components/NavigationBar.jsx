import React from "react";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function NavigationBar() {
  //   const hello = "hello";
  const dispatch = useDispatch();
  const handleEvent = (e) => {
    e.preventDefault();
    const inputBar = document.querySelector("#inputBar").value;

    dispatch({
      type: "Search_Query",
      payload: { inputBar },
    });
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
        <Form>
          <input
            id="inputBar"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onSubmit={(e) => handleEvent(e)}
          />
        </Form>
        <Button onClick={(e) => handleEvent(e)} variant="outline-success">
          <Link id="linkNav" to={`/search`}>
            Search
          </Link>
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
