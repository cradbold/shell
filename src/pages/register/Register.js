import * as React from "react";
import { useNavigate } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import "./Register.scss"

export const RegisterPage = () => {
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    navigate('/login');
  }

  return (
    <Container>
      <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}><LockOutlinedIcon /></Avatar>
        <Typography component="h1" variant="h5">Register</Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>Register</Button>
        </Box>
      </Box>
    </Container>
  );
};
