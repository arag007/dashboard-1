import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorMode, ColorModeContext, tokens} from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);


    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ ml: 2, flex: 1}} placeholder="Buscar" />
                <IconButton type="button" sx={{p: 1}}>
                    <SearchIcon/>
                </IconButton>
            </Box>

            {/*Iconos */}

            <Box display="flex">
                {/* <Tooltip title="Modo">
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {
                            theme.palette.mode === "dark" ? (
                                <DarkModeOutlinedIcon/>
                            ) : (
                                <LightModeOutlinedIcon/>
                            )
                        }                  
                    </IconButton>
                </Tooltip> */}
                <Tooltip title="Notificaciones">
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>
                </Tooltip>
                <Tooltip  title="Ajustes">
                    <IconButton>
                        <SettingsOutlinedIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Mi Cuenta">
                    <IconButton 
                        
                    >
                        <PersonOutlinedIcon/>
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    );
}
export default Topbar;