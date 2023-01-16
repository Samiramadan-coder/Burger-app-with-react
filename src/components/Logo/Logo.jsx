import React from 'react';
import burgerLogo from "../../assets/images/27.1 burger-logo.png.png"
import classes from "./Logo.module.scss"

const Logo = ({height}) => {
  return (
    <div className={classes.Logo} style={{height: height }}>
      <img src={burgerLogo} alt="" />
    </div>
  )
}

export default Logo;