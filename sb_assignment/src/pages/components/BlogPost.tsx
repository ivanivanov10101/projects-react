import moment from 'moment';

interface BlogPostProps {
    blogPost: {
        category_id: number;
        content: string;
        created_at: string;
        img_url: string;
        title: string;
    }
    grid?: boolean
}

let img_url = 'https://frontend-case-api.sbdev.nl/storage/';

const BlogPost = ({ blogPost, grid = false }: BlogPostProps) => {
    return (
        <article className={`shadow-[0_3px_15px_rgba(0,0,0,0.2)] h-fit ${grid && "col-span-3"}`}>
            <div className="flex justify-between relative w-full h-1/4 m-auto italic text-[8px] text-gray-200 [&>p]:absolute [&>p]:bottom-2">
                <img src={`${img_url}${blogPost.img_url}`} alt="Post Image" height={500} width={500}/>
                <p className="left-4">{moment(blogPost.created_at).format('MM-DD-YYYY')}</p>
                <p className="right-4">{blogPost.category_id}</p>
            </div>

            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{blogPost.title}</h2>
                <p className="text-xs text-gray-400">
                    {blogPost.content}
                </p>
            </div>
        </article>
    );
}


export default BlogPost;
