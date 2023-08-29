import classes from "../Header.module.css";
import {NavLink} from "react-router-dom";

const NewFromFriends = () => {
  return (
    <section id="recent-from-friends" className={classes.section}>
      <h2 className={classes['section-heading']}>
        <NavLink to="activity">New from friends</NavLink>
      </h2>
      <NavLink to="activity" className={classes.activityLink}>
        <span className={classes.icon}></span>
        All activity
      </NavLink>
      <ul className="poster-list -p150 -horizontal">
        <li className="poster-container">FILM1</li>
        <li className="poster-container">FILM1</li>
        <li className="poster-container">FILM1</li>
        <li className="poster-container">FILM1</li>
        <li className="poster-container">FILM1</li>
        <li className="poster-container">FILM1</li>
      </ul>
    </section>
  );
}

export default NewFromFriends;
