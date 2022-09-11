import React from 'react';
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LuggageIcon from '@mui/icons-material/Luggage';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Sidebar = () => {
  return (

    <div className='sidebar'>
        <div className="top">
            <span className="logo">Patrick Admin</span>
        </div>

        <hr />
        <div className="center">
       
         <ul>
            <li>
            {<DashboardIcon/>}
                <span>Dashboard</span>
            </li>
            <li>
                <PersonOutlineIcon/>
                <span>Users</span>
            </li>
            <li>
                <Inventory2Icon/>
                <span>Products</span>
            </li>
            <li>
                <LuggageIcon/>
                <span>Orders</span>
            </li>
            <li>
                < LocalShippingIcon/>
                <span>Delivery</span>
            </li>
            <li>
                <AssessmentIcon/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsNoneIcon/>
                <span>Notifications</span>
            </li>
            <li>
                <SettingsSystemDaydreamIcon/>
                <span>System health</span>
            </li>
            <li>
                <PsychologyIcon/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsApplicationsIcon/>
                <span>Settings</span>
            </li>
            <li>
                <AccountCircleIcon/>
                <span>Profile</span>
            </li>
            <li>
                <ExitToAppIcon/>
                <span>Logout</span>
            </li>
         </ul>
        </div>
        <div className="bottom">color options</div>
        
    </div>
  )
}

export default Sidebar