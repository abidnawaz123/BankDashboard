import { Dashboard, Logout } from "@mui/icons-material";
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../../hooks/useLogout";

export const ProfileAction = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const actions = [
        { icon: <Dashboard />, name: 'Dashboard', handleClick: () => { navigate("/") } },
        { icon: <SettingsIcon />, name: 'Settings', handleClick: () => { navigate("/settings") } },
        { icon: <Logout />, name: 'Logout', handleClick: () => { logout() } },
    ];
    return { actions }
}