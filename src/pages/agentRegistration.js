import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const AgentRegistration = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    job: "",
    gender: "",
    educationLevel: "",
    contact1: "",
    contact2: "",
    country: "",
    validFor: "",
    website: "",
    address: "",
    passportNumber: "",
    nationalId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        Agent Registration
      </Typography>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Staff Registration
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Job"
              name="job"
              value={formData.job}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Education Level"
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Contact 1"
              name="contact1"
              value={formData.contact1}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Contact 2"
              name="contact2"
              value={formData.contact2}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Valid For (Years)"
              name="validFor"
              value={formData.validFor}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Website"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Passport Number"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="National ID"
              name="nationalId"
              value={formData.nationalId}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 4 }}>
          <Button variant="outlined" color="error">
            Reset
          </Button>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AgentRegistration;