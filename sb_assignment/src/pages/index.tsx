import Layout from './components/layout/layout'
import SubmitForm from './components/SubmitForm'
import { useState } from 'react'
import BlogPost from "@/pages/components/BlogPost";
import Link from "next/link";

let blogs: any[] = [];

export default function Home() {
  const [status, setStatus] = useState(false);

  fetch("https://frontend-case-api.sbdev.nl/api/posts", {
    headers: {
      token: "pj11daaQRz7zUIH56B9Z"
    }
  })
    .then(res => res.json())
    .then(({data}) => {
      blogs = data.slice(0,4);
      blogs.length === 4 && setStatus(true)
     });

  return (
    <Layout activeNav="home" >
      <main className="w-11/12 m-auto grid grid-cols-12 gap-x-8 max-w-6xl">
        <SubmitForm />
          <section className='flex flex-col justify-between bg-white col-span-7 p-6'>
              <div className='grid grid-cols-2 grid-rows-[auto_1fr] gap-6'>
                  {status && blogs.map((blog: any, key: any) => <BlogPost blogPost={blog} key={key}/>)}
              </div>
              <Link href="/blog"
                    className='block w-fit mx-auto bg-primary-orange px-12 py-3 rounded-3xl font-semibold text-white text-xs'>Laad
                  meer
              </Link>
          </section>
      </main>
    </Layout>
  )
}
