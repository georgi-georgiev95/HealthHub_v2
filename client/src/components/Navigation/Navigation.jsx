import styles from "./Navigation.module.css";
import { firebaseAuth } from "../../config/firebase";
import { useUser } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";


import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const logoutHandler = async () => {
    await firebaseAuth.logout();
    setUser({});
    navigate("/");
  };

  return (
    <>
      <div className={styles.navWrapper}>
        <div className={styles.navContent}>
          {user.username && (
            <p className={styles.username}>Welcome, {user.username}!</p>
          )}
          <nav className={styles.siteNavigation}>
            <ul>
              <Link to="/">Home</Link>
              <Link to="catalog">Catalog</Link>
              {user.username && <Link to="create">Add</Link>}
            </ul>
            <ul>
              {user.email ? (
                <Link onClick={logoutHandler}>Logout</Link>
              ) : (
                <>
                  <Link to="users/login">Login</Link>
                  <Link to="users/register">Register</Link>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
