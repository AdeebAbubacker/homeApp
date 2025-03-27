import React from "react";
import { Box, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Pagination, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon, FilterList as FilterIcon, Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

const staffData = [
  { id: 1, name: "Kathryn Murphy", email: "orgzola@gmail.com", department: "HR", designation: "Manager" },
  { id: 2, name: "Annette Black", email: "roxolan@gmail.com", department: "Design", designation: "UI/UX Designer" },
  { id: 3, name: "Ronald Richards", email: "seanmad@gmail.ru", department: "Design", designation: "UI/UX Designer" },
  { id: 4, name: "Eleanor Pena", email: "myloebank@gmail.ru", department: "Design", designation: "UI/UX Designer" },
  { id: 5, name: "Leslie Alexander", email: "locald@gmail.ru", department: "Design", designation: "UI/UX Designer" },
  { id: 6, name: "Albert Flores", email: "warn@gmail.ru", department: "Design", designation: "UI/UX Designer" },
  { id: 7, name: "Jacob Jones", email: "ztika@gmail.ru", department: "Development", designation: "Frontend Developer" },
  { id: 8, name: "Jerome Bell", email: "lgamil@gmail.com", department: "Development", designation: "Frontend Developer" },
  { id: 9, name: "Marvin McKinney", email: "madking@gmail.ru", department: "Development", designation: "Frontend Developer" },
  { id: 10, name: "Cameron Williamson", email: "clark@gmail.ru", department: "Development", designation: "Frontend Developer" }
];

const StaffListing = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
        <List>
          <ListItem>
            <ListItemText primary="Staffs" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Country" />
          </ListItem>
          <ListItem>
            <ListItemText primary="State" />
          </ListItem>
          <ListItem>
            <ListItemText primary="District" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Legislators" />
          </ListItem>
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h6">Staff Listing - District</Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <TextField label="Show" size="small" />
          <TextField label="Filters" size="small" />
        </Box>
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sl.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staffData.map((staff, index) => (
                <TableRow key={staff.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{staff.name}</TableCell>
                  <TableCell>{staff.email}</TableCell>
                  <TableCell>{staff.department}</TableCell>
                  <TableCell>{staff.designation}</TableCell>
                  <TableCell>
                    <IconButton color="primary"><EditIcon /></IconButton>
                    <IconButton color="error"><DeleteIcon /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Pagination count={5} color="primary" />
        </Box>
      </Box>
    </Box>
  );
};

export default StaffListing;