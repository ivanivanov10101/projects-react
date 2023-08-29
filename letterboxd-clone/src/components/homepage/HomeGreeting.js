import classes from "../Header.module.css";
import {NavLink} from "react-router-dom";
const HomeGreeting = () => {
  return (
    <h1 className={classes['title-hero']}>
      Welcome back,&nbsp;
      <NavLink to="profile" className={classes.navlinkIcon}>Ivan</NavLink>
      .&nbsp;
      <span class="mob-hide">Here's what your friends have been watching...</span>
    </h1>
  );
}

export default HomeGreeting;
