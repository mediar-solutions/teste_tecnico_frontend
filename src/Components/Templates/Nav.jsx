import "./Nav.css";
import React from "react";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';





export default function NavBar (props) {

return (
<aside className="menu-area">
    <div className="avatarProfile">
      <AccountCircleIcon className="icon-profile"  fontSize="large" color="disabled"/><br/><hr/>
      <label> Olá, </label><br/>
      <label>Pablo Fernandes</label>
    </div>
    <nav className="menu">
        <a href="#/">
            <DashboardIcon className="icon" fontSize="large" color="disabled"/>
            <label>Dashboard</label>
            </a>
        <a href="#/user">
            <AccountCircleIcon className="icon"  fontSize="large" color="disabled"/>
            <label>Profile</label>
        </a>
        <a href="#/user">
            <InfoIcon className="icon"  fontSize="large" color="disabled"/>
            <label>Glossary</label>
        </a>
        
    </nav>
</aside>
)
}
