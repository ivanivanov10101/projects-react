import Layout from './components/layout'
import SubmitForm from './components/SubmitForm'
import {useCallback, useEffect, useState} from 'react'
import BlogPost from "@/pages/components/BlogPost";

let receivedBlogs = [];

export default function Home() {
  const [received, setReceived] = useState(false);
  const [blogCount, setBlogCount] = useState(4)
  const initialAmountPosts = 4;

  const getBlogPosts = useCallback((amount) => {
    fetch(`https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=${amount}&sortBy=created_at&sortDirection=desc&searchPhrase=`, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        token: "pj11daaQRz7zUIH56B9Z"
      }
    })
      .then(result => result.json())
      .then(({data}) => {
        receivedBlogs = data;
        receivedBlogs.length >= blogCount && setReceived(true)
      })
      .catch(error => console.log('error', error));
  }, [blogCount])

  getBlogPosts(initialAmountPosts);

  const addMorePosts = () => {
    setReceived(false)
    setBlogCount(blogCount + initialAmountPosts)
  }
  useEffect(() => {
    getBlogPosts(blogCount)
  }, [blogCount, getBlogPosts]);

  return (
    <Layout button="Home" >
      <main className="grid grid-cols-12 gap-x-8 max-w-6xl w-11/12 m-auto">
        <SubmitForm/>
        <section className='flex flex-col justify-between bg-white col-span-7 p-6'>
          <div className='grid grid-cols-2 gap-6'>
            {received && receivedBlogs.map((blog, key) => <BlogPost blogPost={blog} key={key}/>)}
          </div>
          <button onClick={() => addMorePosts()} className='mx-auto bg-social-orange pl-14 pr-14 py-3 rounded-3xl font-semibold text-white text-xs mt-6'>Laad meer</button>
        </section>
      </main>
    </Layout>
  )
}
