import { Link } from "react-router-dom";
import { Post } from "../pages/PostPage";
import { Button } from "flowbite-react";

type PropsType = {
  post: Post;
};

const PostCard = ({ post }: PropsType) => {
  return (
    <div className="group relative w-full border shadow-md dark:[box-shadow:13px_13px_33px_-5px_rgba(0,0,0,0.41)] border-[#63d052] hover:border-2 h-[360px] sm:w-[360px] overflow-hidden transition-all rounded-[0.275rem]">
      <Link to={`/post/${post._id}`}>
        <img
          src={post.img}
          alt="post cover"
          className="h-[220px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="flex flex-col gap-2 p-3">
        <p className="text-base font-semibold line-clamp-2">{post.title}</p>
        <span className="text-sm italic">
          <Link to={`/search?category=${post.type}`}>
            <Button color="light" size={"xs"} pill>
              {post.type}
            </Button>
          </Link>
        </span>

        <Link
          to={`${post.url}`}
          target="_blank"
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-[#63d052] text-[#63d052] hover:bg-[#63d052] hover:text-white transition-all duration-300 text-center py-2 rounded-md  m-2"
        >
          Read article
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
