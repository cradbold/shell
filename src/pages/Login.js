import * as React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const LoginPage = () => {
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  return (
    <Container>
        <Form onSubmit={handleSubmit} noValidate>
          <Form.Control type='email' placeholder='name@example.com' />
          <Form.Control type='password' />
          <Button type="submit">
            Log In
          </Button>
          <Link to="/register">
            {"Don't have an account? Sign Up"}
          </Link>
        </Form>
    </Container>
  );
};
