import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useAuth } from '../../hooks/useAuth';

export const NavBar = ({ pages }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Navbar>
      <Navbar.Brand>Absidy Holdings</Navbar.Brand>
      <Nav>
        {pages?.map((page) => (
          <Nav.Link key={page.label} onClick={() => { handleClick(page.path) }}>{page.label}</Nav.Link>
        ))}
        {!!user && (
          <Nav.Link onClick={logout}>{'Logout'}</Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};
