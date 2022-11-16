import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";
import githubLogo from "../assets/img/githubLogo.png";
import linkedInLogo from "../assets/img/linkedInLogo.png";
// import navIcon3 from "../assets/img/"

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <NavbarToggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </NavbarToggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navabar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navabar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects"
                  ? "active navabar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#github">
                <img src={githubLogo} alt="github" />
              </a>
              <a href="#linkedin">
                <img src={linkedInLogo} alt="linkedin" />
              </a>
              {/* <a href="#navIcon3">
                <img src={navIcon3} alt="" />
              </a> */}
            </div>
          </span>
          <button className="vvd" onClick={() => console.log("connect")}>
            <span>Get in touch with me!</span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
