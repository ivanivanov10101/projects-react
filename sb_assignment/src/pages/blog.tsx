import Layout from './components/layout/layout'
import { useState } from 'react'
import BlogPost from './components/BlogPost'
import ReactPaginate from 'react-paginate'

let blogs: any[] = [];
let currentBlogs: any[] = [];
let pageCount: number;

export default function Blog() {
  const [statusFetch, setStatusFetch] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  fetch("https://frontend-case-api.sbdev.nl/api/posts", {
    headers: {
      token: "pj11daaQRz7zUIH56B9Z"
    }
  })
    .then(res => res.json())
    .then(({data}) => {
      blogs = data;
      const endOffset = itemOffset + 8;
      currentBlogs = blogs.slice(itemOffset, endOffset);
      pageCount = Math.ceil(blogs.length / 8);
      currentBlogs.length > 0 && setStatusFetch(true);
    });

  const handlePageClick = (event: any) => {
    setStatusFetch(false);
    const newOffset = (event.selected * 8) % blogs.length;
    setItemOffset(newOffset);
  };
    console.log(currentBlogs)
  return (
    <Layout activeNav="blog" title="Blog">
      <main className="w-9/12 m-auto max-w-6xl">
        <section className="grid grid-cols-12 gap-6">
          { statusFetch && currentBlogs.map((blog: any, key: any) => <BlogPost blogPost={blog} key={key} grid />) }
        </section>

        <ReactPaginate
          className="flex justify-center items-center text-xs mt-6"
          pageClassName="mr-3 text-gray-600"
          activeClassName="text-sm font-semibold bg-gray-300 px-3 rounded-xl"
          nextClassName="text-primary-orange ml-3"
          breakLabel="..."
          nextLabel="Volgende pagina &rarr;"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={false}
          renderOnZeroPageCount={null}
        />
      </main>
    </Layout>
  )
}
