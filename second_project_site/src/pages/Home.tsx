import { Link } from "react-router-dom";
import { useAppSelector } from "../store/storeHooks";
import Posts from "../components/Posts";
const image = "../../public/background_hero_compressed.jpg";

const Home = () => {
  const { currentUser } = useAppSelector((state) => state.user);

  return (
    <div>
      <div
        className="flex flex-col gap-6 px-3 py-10 mx-auto md:py-28 object-cover m-10 ml-4 mr-4 rounded-md bg-cover [box-shadow:-0px_2px_6px_0px_rgba(0,0,0,0.75)]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="ml-8 text-gray-50 py-4 [filter:drop-shadow(0px_3px_1px_#000000)]">
          <h1 className="text-3xl font-bold lg:text-6xl">
            Welcome {currentUser ? currentUser?.fullName : "to Filmio!"}
          </h1>
          <h2 className="text-lg font-semibold">
            Filmio: Lorem Ipsum Dolor Sit Amet
          </h2>
          <p className="text-xs sm:text-sm">
            "Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
            Dolor Sit Amet Lorem Ipsum Dolor Sit Amet "
          </p>
          <Link
            to="/search"
            className="max-w-[100px] text-xs font-bold text-[#63d052] sm:text-sm hover:no-underline hover:text-[#98e87b]"
          >
            View all posts
          </Link>
        </div>
      </div>
      <Posts category="all" title="All Sources" />
      <Posts category="movies" title="Movies" />
      <Posts category="tvseries" title="TV Series" />
      {/*<Posts category="science" title="Science" />*/}
      {/*<Posts category="science-fiction" title="Science & Fiction" />*/}
      {/*<Posts category="mystery" title="Mystery" />*/}
      {/*<Posts category="facts" title="Facts" />*/}
    </div>
  );
};

export default Home;
