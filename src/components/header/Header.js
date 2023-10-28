import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand>Absidy Holdings</Navbar.Brand>
      <Nav>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
