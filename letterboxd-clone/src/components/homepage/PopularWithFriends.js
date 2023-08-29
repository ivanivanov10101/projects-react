import {NavLink} from "react-router-dom";
import classes from "../Common.module.css";

const PopularWithFriends = () => {
  return (
    <section id="popular-with-friends" className="section">
      <h2 className={classes['section-heading']}>
        <NavLink to="/films/popular/this/week/with/friends/">
          Popular with friends
        </NavLink>
      </h2>
      <NavLink to="/films/popular/this/week/with/friends/" className="all-link">
        More
      </NavLink>
      <ul className="poster-list -p150 film-list -horizontal">

        <li
          className="react-component poster film-poster film-poster-900356 linked-film-poster not-in-watchlist film-not-watched">FILM2
        </li>
        <li
          className="react-component poster film-poster film-poster-900356 linked-film-poster not-in-watchlist film-not-watched">FILM2
        </li>
        <li
          className="react-component poster film-poster film-poster-900356 linked-film-poster not-in-watchlist film-not-watched">FILM2
        </li>
        <li
          className="react-component poster film-poster film-poster-900356 linked-film-poster not-in-watchlist film-not-watched">FILM2
        </li>
        <li
          className="react-component poster film-poster film-poster-900356 linked-film-poster not-in-watchlist film-not-watched">FILM2
        </li>
        <li
          className="react-component poster film-poster film-poster-900356 linked-film-poster not-in-watchlist film-not-watched">FILM2
        </li>

      </ul>
    </section>
  );

}

export default PopularWithFriends;
