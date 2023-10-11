import Layout from './components/layout'
import {useState} from 'react'
import BlogPost from './components/BlogPost'
import ReactPaginate from 'react-paginate'
import {BLOG_URL} from "@/pages/types";

let receivedBlogs = [];
let currentBlogs = [];

export default function Blog() {
  const [statusFetch, setReceived] = useState(false);
  const [offset, setOffset] = useState(0);
  let pageCount = 0;
  const receivedBlogsPerPage = 8
  const endOffset = offset + receivedBlogsPerPage;
  pageCount = Math.ceil(receivedBlogs.length / receivedBlogsPerPage);

  fetch(BLOG_URL, {
    headers: {
      token: "pj11daaQRz7zUIH56B9Z"
    }
  })
    .then(res => res.json())
    .then(({data}) => {
      receivedBlogs = data;
      currentBlogs = receivedBlogs.slice(offset, endOffset);
      currentBlogs.length > 0 && setReceived(true);
    });

  const handlePageClick = (event) => {
    setReceived(false);
    const newOffset = (event.selected * receivedBlogsPerPage) % receivedBlogs.length;
    setOffset(newOffset);
  };

  return (
    <Layout button="Blog" title="Blog">
      <main className="w-9/12 m-auto max-w-6xl">
        <section className="grid grid-cols-12 gap-6">
          { statusFetch && currentBlogs.map((blog, key) => <BlogPost blogPost={blog} key={key} blogListPage={true} />) }
        </section>

        <ReactPaginate
          className="flex justify-center items-center text-xs mt-6"
          pageClassName="mr-3 text-gray-600"
          activeClassName="rounded-2xl text-sm font-bold bg-gray-300 px-2"
          nextClassName="text-social-orange ml-3"
          breakLabel="...&nbsp;&nbsp;"
          nextLabel="Volgende pagina &rarr;"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel={false}
          renderOnZeroPageCount={null}
        />
      </main>
    </Layout>
  )
}
