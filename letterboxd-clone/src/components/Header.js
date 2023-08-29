import {Fragment} from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <section>
        <header className={`${classes.header} ${classes['site-header']}`}>
          <h1 className={classes['site-logo']}>
            <NavLink to="/" className={`${classes.logo} ${classes.replace}`}>Letterboxd — Your life in film</NavLink>
          </h1>
          <div>
            <nav className={classes['main-nav']}>
              <ul className={classes['navitems']}>
                <li>
                  <NavLink to="/profile">
                    <span></span>
                    <span className={classes.avatar}>
                        <img className={classes.imageAvatar} src="https://a.ltrbxd.com/resized/avatar/upload/5/8/9/0/4/shard/avtr-0-48-0-48-crop.jpg?v=665908139a" alt="Avatar" width="24" height="24"/>
                    </span>
                    SoulEater
                  </NavLink>
                  <ul className={classes.subNav}></ul>
                </li>
                <li>
                  <NavLink to="/activity">
                    <span className={classes.icon}></span>
                    <span>Activity</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/films">
                    <span className={classes.icon}></span>
                    <span>Films</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/lists">
                    <span></span>
                    <span>Lists</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/members">
                    <span></span>
                    <span>Members</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/journal">
                    <span></span>
                    <span>Journal</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className={classes.replaceSearch}>Search</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>

      </section>

    </Fragment>
  )

}

export default Header;
