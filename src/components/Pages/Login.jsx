import React from "react";
import loginIllustration from "../../assets/laptopbag.png";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Link as MuiLink,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#1A1B2F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          maxWidth: 1000,
          borderRadius: 4,
          overflow: "hidden",
            backgroundImage: "linear-gradient(to bottom right, #1f0036, #2a003f, #ff005e)"



        }}
      >
        {/* Left: Form */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, p: 4 }}>
          <Typography variant="h4" fontWeight={700} color="white">
            BidFlare
          </Typography>
          <Typography
            variant="h5"
            fontWeight={600}
            color="white"
            sx={{ mt: 4 }}
          >
            Welcome Back
          </Typography>
          <Typography variant="body2" color="gray" sx={{ mb: 4 }}>
            Access your account
          </Typography>

          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              margin="normal"
              placeholder="you@example.com"
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: "#3A3E5A" },
                  '&:hover fieldset': { borderColor: "orange" },
                  '&.Mui-focused fieldset': { borderColor: "orange" },
                  backgroundColor: "#2A2D45",
                },
              }}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              margin="normal"
              placeholder="••••••••"
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: "#3A3E5A" },
                  '&:hover fieldset': { borderColor: "orange" },
                  '&.Mui-focused fieldset': { borderColor: "orange" },
                  backgroundColor: "#2A2D45",
                },
              }}
            />

            <Box textAlign="right" mt={1}>
              <MuiLink
                component={Link}
                to="/forgot-password"
                underline="hover"
                color="warning.main"
                variant="body2"
              >
                Forgot password?
              </MuiLink>
            </Box>

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: 1.5,
                backgroundColor: "orange",
                '&:hover': { backgroundColor: "darkorange" },
              }}
              type="submit"
            >
              Sign In
            </Button>

            <Typography variant="body2" color="gray" mt={4} textAlign="center">
              Don't have an account?{' '}
              <MuiLink component={Link} to="/register" underline="hover" color="white">
                Register
              </MuiLink>
            </Typography>
          </Box>
        </Box>

        {/* Right: Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            backgroundColor: "#1D1F37",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
          }}
        >
          <img
            src={loginIllustration}
            alt="Login Illustration"
            style={{ width: "100%", maxWidth: "350px" }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
