import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from "./Toolbar.module.scss";
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = ({drawerToggleClicked}) => {
  return (
    <header className={ classes.Toolbar }>
      <DrawerToggle clicked={drawerToggleClicked} />
      <Logo height="80%" />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar;
