import MoreVertIcon from '@mui/icons-material/MoreVert';
import {LazyLoadImage} from "react-lazy-load-image-component";

const ProfileBody = () => {
  return (
    <div className="movie-info">
      <div className="container">
        <div className="col-3 p-15 stats">
          <div className="movies__card">
            <div className="movies__card__img">
              <LazyLoadImage src={"/profile.jpg"}/>
            </div>
          </div>
          <div className="stats-position-main-buttons">
            <button className="button-5">Edit Profile</button>
            <button className="button-6"><MoreVertIcon/></button>
          </div>
        </div>
        <div className="header__contents__text__child__movie-page stats stats-position-name">{"Ivan Ivanov"}</div>
      </div>
    </div>
  );
};

export default ProfileBody;
