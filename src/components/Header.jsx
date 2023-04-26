import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Navbar
        style={{
          backgroundColor: "orange",
        }}
      >
        <Container>
          <h1>BLOG</h1>
          <Link to="/home">
            <Navbar.Brand
              className={
                location.pathname === "/home"
                  ? "btn btn-light"
                  : "btn btn-dark text-light"
              }
            >
              Home
            </Navbar.Brand>
          </Link>
          <Link to="/">
            <Navbar.Brand
              className={
                location.pathname === "/"
                  ? "btn btn-light"
                  : "btn btn-dark text-light"
              }
            >
              Add Blog
            </Navbar.Brand>
          </Link>
          <Link to="/adoutus">
            <Navbar.Brand
              className={
                location.pathname === "/adoutus"
                  ? "btn btn-light"
                  : "btn btn-dark text-light"
              }
            >
              About Us
            </Navbar.Brand>
          </Link>
          <Link to="/contact">
            <Navbar.Brand
              className={
                location.pathname === "/contact"
                  ? "btn btn-light"
                  : "btn btn-dark text-light"
              }
            >
              Contact
            </Navbar.Brand>
          </Link>
          <Link to="/izbrannoe">
            <Navbar.Brand
              className={
                location.pathname === "/izbrannoe"
                  ? "btn btn-light"
                  : "btn btn-dark text-light"
              }
            >
              Izbrannoe
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
