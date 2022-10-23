// import * as React from "react";
// import { Link as RouterLink } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button";
// import MenuIcon from "@mui/icons-material/Menu";

// // Icon
// import HomeIcon from '@mui/icons-material/Home';
// import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import PendingActionsIcon from '@mui/icons-material/PendingActions';
// import EventNoteIcon from '@mui/icons-material/EventNote';
// import HealingIcon from '@mui/icons-material/Healing';
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

// const signout = () => {
//   localStorage.clear();
//   window.location.href = "/";
// };

// const menu = [
//   { name: "หน้าหลัก", icon: <HomeIcon />, path: "/Home" },
//   { name: "ระบบยืมเครื่องมือแพทย์", icon: <HomeRepairServiceIcon />, path: "/Borrow" },
//   { name: "ระบบจัดการข้อมูลแพทย์", icon: <ManageAccountsIcon />, path: "/DoctorShow" },
//   { name: "ระบบบันทึกข้อมูลล่วงเวลา", icon: <PendingActionsIcon />, path: "/Overtiome" },
//   { name: "ระบบผู้ป่วยในการดูแลของแพทย์", icon: <HealingIcon />, path: "/Patient" },
//   { name: "ระบบตารางเวลาแพทย์", icon: <CalendarMonthIcon />, path: "/Schedule" },
//   { name: "ระบบลาพักงานของแพทย์", icon: <EventNoteIcon />, path: "/Takeleave" },
// ]

// function Navbar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>

//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >

//             <MenuIcon />
//             <Divider />

//             {menu.map((item, index) => (
//               <ListItem key={index} button component={RouterLink} to={item.path}>
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                 <ListItemText>{item.name}</ListItemText>

//               </ListItem>
//             ))}

//             <Divider />


//           </IconButton>

//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             {/* จัดเก็บข้อมูลแพทย์ */}
//           </Typography>

//           <Button color="inherit" onClick={signout}>
//             Log out
//           </Button>

//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default Navbar;






import * as React from 'react';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
//สี
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
//เมนูแถบ
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//ไอคอน 
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HealingIcon from '@mui/icons-material/Healing';
import { MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import TextField from "@mui/material/TextField";

//สี
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: green[400],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#e8f5e9',
    },
  },
});

const drawerWidth = 320; //ความยาวของ แถบเมนู

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const menu = [
  { name: "ระบบยืมเครื่องมือแพทย์", icon: <HomeRepairServiceIcon  />, path: "/Borrow" },
  { name: "ระบบจัดการข้อมูลแพทย์", icon: <ManageAccountsIcon  />, path: "/DoctorShow" },
  { name: "ระบบบันทึกข้อมูลล่วงเวลา", icon: <PendingActionsIcon   />, path: "/Overtiome" },
  { name: "ระบบผู้ป่วยในการดูแลของแพทย์", icon: <HealingIcon  />, path: "/Patient" },
  { name: "ระบบตารางเวลาแพทย์", icon: <CalendarMonthIcon  />, path: "/Schedule" },
  { name: "ระบบลาพักงานของแพทย์", icon: <EventNoteIcon />, path: "/Takeleave" },
]

function Navbar() {

  const themep = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const SignOut = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
  <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
            <Typography variant="h6" color="secondary" noWrap component="div">
              ระบบข้อมูลแพทย์
            </Typography>
            <MenuItem onClick={SignOut}><LogoutIcon style={{ marginRight: ".5rem" }}/>Log out</MenuItem>
          </Box>
          
        </Toolbar>

      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {/* ปุ่มกด < */}
          <IconButton onClick={handleDrawerClose}> 
            {themep.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton> {/* ปุ่มกด < */}
        </DrawerHeader>

        <Divider />

         {menu.map((item, index) => (
                <ListItem key={index} button component={RouterLink} to={item.path} onClick={handleDrawerClose}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.name}</ListItemText>
                </ListItem>
              ))}

        <Divider />
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
      </Main>

    </Box>
  </ThemeProvider>
  );
}
export default Navbar;