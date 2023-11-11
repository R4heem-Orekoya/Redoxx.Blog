import React from 'react'
import Postcard from '../components/Postcard'
import Postwidget from '../components/Postwidget'
import { Loader } from 'lucide-react'

const Home = ({posts}) => {
  return (
    <section className='w-[min(1200px,90%)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 py-20'>
        <div className='col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {posts.length == 0 && <p className='grid place-items-center col-span-8 text-gray-500'><Loader size={80} strokeWidth={1.4} className='animate-spin'/></p>}
          {posts.map(post => (
            <Postcard post={post} key={post.slug}/>
          ))}
        </div>

        <div className='col-span-1 lg:col-span-4 lg:sticky lg:top-24 aspect-square sm:aspect-auto lg:aspect-square bg-slate-50 rounded-xl p-4 border border-black/5'>
          <Postwidget posts={posts}/>
        </div>

    </section>
  )
}

export default Home
