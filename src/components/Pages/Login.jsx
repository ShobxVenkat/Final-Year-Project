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
        backgroundColor: "#1e1c2f",
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
          backgroundImage: "linear-gradient(to bottom right, #282745, #282644)",
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

        {/* Right: Image with Decorative Circles */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            backgroundColor: "#1D1F37",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
            overflow: "hidden",
            "@keyframes floatUpDown": {
              "0%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-10px)" },
              "100%": { transform: "translateY(0)" },
            },
          }}
        >
          {/* Decorative Circles */}
          {[
            { top: "10%", left: "15%", size: 40, color: "orange", duration: "3s" },
            { bottom: "15%", right: "20%", size: 40, color: "#3a3e5a", duration: "4s" },
            { bottom: "25%", left: "10%", size: 12, color: "#26C281", duration: "5s" },
            { top: "30%", right: "10%", size: 8, color: "orange", duration: "3.5s" },
            { bottom: "10%", right: "30%", size: 20, color: "#26C281", duration: "4.5s" },
          ].map((circle, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: circle.top,
                bottom: circle.bottom,
                left: circle.left,
                right: circle.right,
                width: circle.size,
                height: circle.size,
                borderRadius: "50%",
                backgroundColor: circle.color,
                animation: `floatUpDown ${circle.duration} ease-in-out infinite`,
              }}
            />
          ))}

          {/* Main Illustration */}
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
