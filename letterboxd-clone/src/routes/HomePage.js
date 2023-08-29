import HomeGreeting from "../components/homepage/HomeGreeting";
import NewFromFriends from "../components/homepage/NewFromFriends";
import AdBanner from "../components/homepage/AdBanner";
import UserContainer from "../components/homepage/UserContainer";
import classes from "../components/Header.module.css";

const HomePage = () => {
  return (
    <>
        <div className={classes.contentWrap}>
          <HomeGreeting/>
          <NewFromFriends/>
          <AdBanner/>
          <UserContainer/>
        </div>
    </>
  );
}

export default HomePage;
