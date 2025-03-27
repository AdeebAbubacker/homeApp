import React from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Paper,
} from "@mui/material";
import { ReactComponent as HomeLogo } from '../assets/images/homeLogo.svg';

const SignUp = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      minHeight: '100vh',
      width: '100%',
    }}>
      {/* Left/Top Section */}
      <Box sx={{
        flex: { md: 1 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: "linear-gradient(to bottom, #38BDF8, #1E3A8A)",
        color: "#fff",
        minHeight: { xs: '300px', md: '100vh' },
        py: { xs: 4, md: 0 }
      }}>
        <Box sx={{ maxWidth: 400, padding: 4, textAlign: 'center' }}>
          <HomeLogo style={{ width: '80px', marginBottom: '20px' }} />
          <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: '"Inter", sans-serif' }}>
            Apply to become a Market Home Shop Agent
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              bgcolor: "#fff",
              color: "#1E3A8A",
              "&:hover": { bgcolor: "#d9d9d9" },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>

      {/* Right/Bottom Section */}
      <Box sx={{
        flex: { md: 1 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: { xs: 'calc(100vh - 300px)', md: '100vh' },
      }}>
        <Paper elevation={6} square sx={{
          width: '100%',
          minHeight: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Box sx={{ width: '100%', maxWidth: 400, padding: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              HomeShop
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Sign Up for an Account
            </Typography>

            <TextField fullWidth label="Phone Number" margin="normal" />
            <TextField fullWidth label="Email" margin="normal" />
            <TextField fullWidth label="Username" margin="normal" />

            <FormControlLabel
              control={<Checkbox />}
              label="I accept the Terms & Conditions and Privacy Policy."
              sx={{ mt: 1, mb: 2 }}
            />

            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ 
                bgcolor: "#1976D2", 
                "&:hover": { bgcolor: "#115293" },
                py: 1.5,
                mt: 1
              }}
            >
              Sign Up
            </Button>

            <Typography sx={{ mt: 2, textAlign: 'center' }}>
              Already have an account?{" "}
              <Typography component="span" color="primary" sx={{ cursor: "pointer" }}>
                Sign in
              </Typography>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default SignUp;