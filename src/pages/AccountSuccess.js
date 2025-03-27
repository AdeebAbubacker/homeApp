import React from "react";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";

const AccountSuccess = () => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          background: "linear-gradient(to bottom, #38BDF8, #1E3A8A)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Grid>

      {/* Right Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          background: "#B0B0B0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            textAlign: "center",
            width: "280px",
            borderRadius: "12px",
          }}
        >
          <Box
            sx={{
              width: "80px",
              height: "80px",
              background: "#D9D9D9",
              borderRadius: "50%",
              margin: "0 auto 20px",
            }}
          ></Box>

          <Typography variant="h6" fontWeight="bold">
            Your Account Has Been Created
          </Typography>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              bgcolor: "#1976D2",
              "&:hover": { bgcolor: "#115293" },
            }}
          >
            DONE
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AccountSuccess;
 