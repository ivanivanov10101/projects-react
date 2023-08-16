import {Fragment} from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <Fragment>
            <section>
                <header className={`${classes.header} ${classes['site-header']}`}>
                    <h1 className={classes['site-logo']}>
                        <a href="/" className={`${classes.logo} ${classes.replace}`}>Letterboxd — Your life in film</a>
                    </h1>
                    <div>
                        <nav className={classes['main-nav']}>
                            <ul className={classes['navitems']}>
                                <li>
                                    <a href="#" className={classes.a}>
                                        <span></span>
                                        <span>
                                       <img src="https://a.ltrbxd.com/resized/avatar/upload/5/8/9/0/4/shard/avtr-0-48-0-48-crop.jpg?v=665908139a" alt="Avatar" width="24" height="24"/>
                                   </span>
                                        "SoulEater"
                                    </a>
                                    <ul className={classes.subNav}>TBF</ul>
                                </li>
                                <li>
                                    <a>
                                        <span className={classes.icon}></span>
                                        <span>Activity</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span className={classes.icon}></span>
                                        <span>Films</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span></span>
                                        <span>Lists</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span></span>
                                        <span>Members</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span></span>
                                        <span>Journal</span>
                                    </a>
                                </li>
                                <li>
                                    <a></a>
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
