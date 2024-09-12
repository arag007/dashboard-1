import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/styles';
import {  Box, IconButton, Typography, useTheme}  from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import '../../App.css';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
        component={<Link to={to} /> }
      >
        <Typography>{title}</Typography>
        {/* <Link to={to} /> */}
      </MenuItem>
    );
  };

const SidebarApp = () => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
const [isCollapsed, setIsCollapsed] = useState(false);
const [ selected, setSelected ] = useState("Dashboard");

    return (
        <Sidebar collapsed={isCollapsed} backgroundColor={colors.primary[500]} >
            <Menu iconShape="square"
                 menuItemStyles={{
                    button: ({ level, active, disabled}) => {
                      // only apply styles on first level elements of the tree
                      if (level === 0)
                        return {
                          color: disabled ? '#03426E' : 'red',
                          backgroundColor: active ? '#0b5394' : undefined,
                        };
                    },
                  }}
            >
                <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
                    style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100],
                    }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                                >
                                    <Typography variant="h3" color={colors.grey[100]}>
                                        SIA Web
                                    </Typography>
                                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon style={{color: colors.grey[100]}}/>
                                    </IconButton>
                                </Box>
                        )}
                    </MenuItem>
                    {!isCollapsed && (
                    <Box mb="25px">
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <img
                        alt="profile-user"
                        width="100px"
                        height="100px"
                        src={'../assets/user.png'}
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                        />
                    </Box>
                    <Box textAlign="center">
                        <Typography
                        variant="h2"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                        >
                        Angel
                        </Typography>
                        <Typography variant="h5" color={colors.greenAccent[500]}>
                        Aceves
                        </Typography>
                    </Box>
                    </Box>
                )}
                <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                    <Item
                    to="/"
                    title="Dashboard"
                    icon={<HomeOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />

                    <Typography
                    variant="h6"
                    fontWeight="500"
                    color={colors.greenAccent[500]}
                    sx={{ m: "5px 0 5px 15px" }}
                    >
                    Servicios
                    </Typography>
                    <Item
                    title="Nuevo"
                    to="/nuevoservicio"
                    icon={<AddBoxOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="Agenda"
                    to="/agenda-servicios"
                    icon={<CalendarMonthOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="Clientes"
                    to="/clienteservicio"
                    icon={<ContactPageOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="Reportes"
                    to="/reportes_servicios"
                    icon={<BackupTableOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />

                    <Typography
                    variant="h6"
                    fontWeight="500"
                    color={colors.greenAccent[500]}
                    sx={{ m: "15px 0 5px 15px" }}
                    >
                    Ajustes
                    </Typography>
                    <Item
                    title="Ajustes Generales"
                    to= "/ajustes_generales"
                    icon={<SettingsOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    
                </Box>
            </Menu>
        </Sidebar>
    );
}
export default SidebarApp;