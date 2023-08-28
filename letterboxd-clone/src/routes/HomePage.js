import HomeGreeting from "../components/homepage/HomeGreeting";
import NewFromFriends from "../components/homepage/NewFromFriends";
import AdBanner from "../components/homepage/AdBanner";
import UserContainer from "../components/homepage/UserContainer";

const HomePage = () => {
  return (
    <>
      HOME ELEMENTS
      <div className="content-wrap">
        <HomeGreeting/>
        <NewFromFriends/>
        <AdBanner/>
        <UserContainer/>
      </div>
    </>
  );
}

export default HomePage;
