import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

// Icon
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HealingIcon from '@mui/icons-material/Healing';
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const signout = () => {
  localStorage.clear();
  window.location.href = "/";
};

const menu = [
  { name: "หน้าหลัก", icon: <HomeIcon />, path: "/Home" },
  { name: "ระบบยืมเครื่องมือแพทย์", icon: <HomeRepairServiceIcon />, path: "/Borrow" },
  { name: "ระบบจัดการข้อมูลแพทย์", icon: <ManageAccountsIcon />, path: "/DoctorShow" },
  { name: "ระบบบันทึกข้อมูลล่วงเวลา", icon: <PendingActionsIcon />, path: "/Overtiome" },
  { name: "ระบบผู้ป่วยในการดูแลของแพทย์", icon: <HealingIcon />, path: "/Patient" },
  { name: "ระบบตารางเวลาแพทย์", icon: <CalendarMonthIcon />, path: "/Schedule" },
  { name: "ระบบลาพักงานของแพทย์", icon: <EventNoteIcon />, path: "/Takeleave" },
]

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

            <MenuIcon />
            <Divider />

            {menu.map((item, index) => (
              <ListItem key={index} button component={RouterLink} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>

              </ListItem>
            ))}

            <Divider />


          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* จัดเก็บข้อมูลแพทย์ */}
          </Typography>

          <Button color="inherit" onClick={signout}>
            Log out
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;