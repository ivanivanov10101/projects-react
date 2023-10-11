import moment from 'moment';
import {IMG_URL} from "@/pages/types";


const BlogPost = ({ blogPost, blogListPage = false }) => {
  return (
    <article className={`shadow-[0_8px_24px_rgba(149,157,165,0.2)] h-56 ${blogListPage && "col-span-3"}`}>
      <div className="flex text-[9px] text-gray-200 italic relative m-auto [&>p]:absolute [&>p]:bottom-2 h-20">
        <img src={`${IMG_URL}${blogPost.img_url}`} alt="Post Image"/>
        <p className="left-4">{moment(blogPost.created_at).format('DD-MM-YYYY')}</p>
        <p className="right-4">{blogPost.category && blogPost.category.name}</p>
      </div>
      <div className="p-4">
        <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-2xl font-semibold mb-2">{blogPost.title}</h2>
        <p className="text-xs text-post-gray">
          {blogPost.content}
        </p>
      </div>
    </article>
  );
}


export default BlogPost;
