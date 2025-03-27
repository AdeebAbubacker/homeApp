import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Search, Edit, Delete } from "@mui/icons-material";

const admins = [
  { id: 1, name: "John Doe", email: "john@example.com", department: "HR", description: "Manager" },
  { id: 2, name: "Alice Smith", email: "alice@example.com", department: "IT", description: "Lead Engineer" },
  { id: 3, name: "Michael Brown", email: "michael@example.com", department: "Design", description: "UI/UX Designer" },
  { id: 4, name: "Emily Davis", email: "emily@example.com", department: "Finance", description: "Accountant" },
];

const AdminsList = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        Admins List
      </Typography>

      <Paper elevation={3} sx={{ padding: 3 }}>
        {/* Search and Add Button */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            InputProps={{ startAdornment: <Search sx={{ mr: 1 }} /> }}
          />
          <Button variant="contained" color="primary">
            + Add New Admin
          </Button>
        </Box>

        {/* Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>#</strong></TableCell>
                <TableCell><strong>Profile</strong></TableCell>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Department</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admins.map((admin, index) => (
                <TableRow key={admin.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Avatar sx={{ bgcolor: "#1976D2" }}>
                      {admin.name.charAt(0)}
                    </Avatar>
                  </TableCell>
                  <TableCell>{admin.name}</TableCell>
                  <TableCell>{admin.email}</TableCell>
                  <TableCell>{admin.department}</TableCell>
                  <TableCell>{admin.description}</TableCell>
                  <TableCell>
                    <IconButton color="primary">
                      <Edit />
                    </IconButton>
                    <IconButton color="error">
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default AdminsList;
