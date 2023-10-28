import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div className="Header">
      <header className="Header-header">
        <Navbar>
          <Navbar.Brand>Absidy Holdings</Navbar.Brand>
          <Nav>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </Nav>
          <Nav>
            <NavLink href="/profile">Profile</NavLink>
          </Nav>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
