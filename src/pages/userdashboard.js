import React from "react";
import {
  Box,
  Grid,
  Paper,
  Avatar,
  TextField,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";

const UserDashboard = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        User Dashboard
      </Typography>

      <Paper elevation={3} sx={{ maxWidth: 600, margin: "auto", p: 4 }}>
        {/* User Details Title */}
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          User Details
        </Typography>

        {/* Profile Images */}
        <Grid container spacing={2} justifyContent="center">
          {[1, 2, 3].map((_, index) => (
            <Grid item key={index}>
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  bgcolor: "#E0E0E0",
                  color: "#616161",
                }}
              >
                Profile
              </Avatar>
            </Grid>
          ))}
        </Grid>

        {/* Form Fields */}
        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Full Name"
            placeholder="Enter Full Name"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter email address"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Phone"
            placeholder="Enter phone number"
            margin="normal"
          />
          <TextField
            select
            fullWidth
            label="Segment"
            margin="normal"
          >
            <MenuItem value="segment1">Segment 1</MenuItem>
            <MenuItem value="segment2">Segment 2</MenuItem>
          </TextField>
          <TextField
            select
            fullWidth
            label="Designation"
            margin="normal"
          >
            <MenuItem value="designation1">Designation 1</MenuItem>
            <MenuItem value="designation2">Designation 2</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="Description"
            placeholder="Write something..."
            margin="normal"
            multiline
            rows={3}
          />

          {/* Submit Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              bgcolor: "#1976D2",
              "&:hover": { bgcolor: "#115293" },
            }}
          >
            Edit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default UserDashboard;
