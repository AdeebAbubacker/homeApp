import React from "react";
import { InputAdornment } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import profileLogo from '../assets/images/profileIcon.svg';
import emailLogo from '../assets/images/email.svg';
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
        background: "linear-gradient(to bottom, #af72ad, #b27bb4)",
        color: "#fff",
        minHeight: { xs: '300px', md: '100vh' },
        py: { xs: 4, md: 0 }
      }}>
        <Box sx={{ maxWidth: 400, padding: 4, textAlign: 'center' }}>
          <HomeLogo style={{ width: '80px', marginBottom: '20px' }} />
          <Typography
  variant="h6"
  sx={{
    fontFamily: "Inter, sans-serif",
    fontSize: { xs: '20px', sm: '24px', md: '28px' }, // Dynamic font sizes
    fontWeight: 400,
    lineHeight: { xs: '26px', sm: '32px', md: '40px' }, // Adjust line height accordingly
    textAlign: 'center',
  }}
>
  Apply to become a Market Home Shop Agent
</Typography>

<Box sx={{ height: '10px' }} />

<Button
  variant="contained"
  sx={{
    mt: 3,
    width: '350px', // Adjust the width as needed
    bgcolor: "#fff",
    color: "#b27bb4",
    fontWeight: 600, // Set font weight to 600
    "&:hover": { bgcolor: "#d9d9d9" },
  }}
>
  Register
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
              
            </Typography>
            <Typography
  variant="h6"
  sx={{
    fontFamily: '"Inter", sans-serif',
    fontSize: '31px',
    fontWeight: 600,
    lineHeight: '45px', // Increased to improve readability
    textAlign: 'left',
  }}
>
  HomeShop
</Typography>

<Typography
  variant="h6"
  sx={{
    fontFamily: '"Inter", sans-serif',
    fontSize: { xs: '22px', sm: '26px', md: '32px' }, // Adjust for different screens
    fontWeight: 600,
    lineHeight: { xs: '30px', sm: '38px', md: '45px' }, // Keep good spacing
    textAlign: 'left',
  }}
>
  Sign Up for an Account
</Typography>


     



<TextField
  fullWidth
  placeholder="Phone Number" // Placeholder inside the field
  margin="normal"
  variant="outlined"
  sx={{
    bgcolor: "#F8FAFC", // Light background color
    borderRadius: "12px", // Rounded corners
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px", // Rounded input field
      "& fieldset": {
        borderColor: "#E2E8F0", // Light border color
      },
      "&:hover fieldset": {
        borderColor: "#CBD5E1", // Slightly darker border on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1E3A8A", // Blue border on focus
      },
    },
  }}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <img
          src={profileLogo}
          alt="Profile Icon"
          width="20"
          height="20"
          style={{ marginRight: "8px" }} // Add spacing between icon and text
        />
      </InputAdornment>
    ),
  }}
/>
<TextField
  fullWidth
  placeholder="Email" // Placeholder inside the field
  margin="normal"
  variant="outlined"
  sx={{
    bgcolor: "#F8FAFC", // Light background color
    borderRadius: "12px", // Rounded corners
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px", // Rounded input field
      "& fieldset": {
        borderColor: "#E2E8F0", // Light border color
      },
      "&:hover fieldset": {
        borderColor: "#CBD5E1", // Slightly darker border on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1E3A8A", // Blue border on focus
      },
    },
  }}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <img
          src={emailLogo}
          alt="Profile Icon"
          width="20"
          height="20"
          style={{ marginRight: "8px" }} // Add spacing between icon and text
        />
      </InputAdornment>
    ),
  }}
/><TextField
  fullWidth
  placeholder="Unique No" // Placeholder inside the field
  margin="normal"
  variant="outlined"
  sx={{
    bgcolor: "#F8FAFC", // Light background color
    borderRadius: "12px", // Rounded corners
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px", // Rounded input field
      "& fieldset": {
        borderColor: "#E2E8F0", // Light border color
      },
      "&:hover fieldset": {
        borderColor: "#CBD5E1", // Slightly darker border on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1E3A8A", // Blue border on focus
      },
    },
  }}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <img
          src={emailLogo}
          alt="Profile Icon"
          width="20"
          height="20"
          style={{ marginRight: "8px" }} // Add spacing between icon and text
        />
      </InputAdornment>
    ),
  }}
/>

<FormControlLabel 
  control={
    <Checkbox 
      sx={{ 
        padding: 0,
        marginRight: "10px",
        '& .MuiSvgIcon-root': {  // Target the checkbox icon
          borderRadius: "20px",  // Curved edges
          width: "24px",        // Ensure consistent size
          height: "24px",
        }
      }} 
    />
  } 
  label="By creating an account means you agree to the Terms & Conditions and our Privacy Policy"
  sx={{ 
    mt: 1, 
    mb: 2, 
    pl: "10px", 
    fontFamily: "Inter, sans-serif",
    fontWeight: 200,  // Added regular font weight
    alignItems: "flex-start",  // Better alignment for custom checkbox
    '& .MuiButtonBase-root': {  // Adjust the checkbox container
      alignSelf: "flex-start",  // Align to top of label
      marginTop: "2px"         // Fine-tune vertical alignment
    }
  }}
/>


            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ 
                bgcolor: "#b27bb4", 
                "&:hover": { bgcolor: "#b27bb4" },
                py: 1.5,
                mt: 1
              }}
            >
              Sign Up
            </Button>
            <Box display="flex" alignItems="center" my={2}>
  <Box flex={1} height="1px" bgcolor="lightgray" />
  <Typography variant="body2" sx={{ mx: 2, color: "gray" }}>
    Sign In
  </Typography>
  <Box flex={1} height="1px" bgcolor="lightgray" />
</Box>

            <Typography sx={{ mt: 2, textAlign: 'center' }}>
            Already have an account? {" "}
              <Typography component="span" color="primary" sx={{ cursor: "pointer" }}>
                Sign In
              </Typography>
            </Typography>
           
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default SignUp;