import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./header.scss";
const Header = () => (
  <header id="header">
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" className="logo logo-small" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className="active"
                aria-current="page"
              >
                Phim mới
              </Nav.Link>
              <Nav.Link as={Link} to="/feature-film">
                Phim lẻ
              </Nav.Link>
              <Nav.Link as={Link} to="/television-series">
                Phim bộ
              </Nav.Link>
              <Nav.Link as={Link} to="/cartoon">
                Phim hoạt hình
              </Nav.Link>
              <Nav.Link as={Link} to="/movie-theater">
                Phim chiếu rạp
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <Navbar.Collapse id="offcanvasNavbar" className="d-none d-lg-flex">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/new-film">
              Phim mới
            </Nav.Link>
            <Nav.Link as={Link} to="/feature-film">
              Phim lẻ
            </Nav.Link>
            <Nav.Link as={Link} to="/television-series">
              Phim bộ
            </Nav.Link>
            <Nav.Link as={Link} to="/cartoon">
              Phim hoạt hình
            </Nav.Link>
            <Nav.Link as={Link} to="/movie-theater">
              Phim chiếu rạp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;
