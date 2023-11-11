import React from 'react'
import { Loader } from 'lucide-react'
import { Link } from 'react-router-dom';

const Postwidget = ({posts}) => {
  const recentPosts = posts.slice(0, 3)
  // console.log(recentPosts);
  return (
    <div className='w-full'>
      <h1 className='text-2xl font-semibold text-slate-800'>Recent Posts</h1>

      {recentPosts.length == 0 && <p className='grid place-items-center col-span-8 mt-6 text-slate-500'><Loader size={40} className='animate-spin'/></p>}

      <div className='mt-8 flex flex-col gap-6'>
        {recentPosts.map(recentPost => (
          <Link to={`/blog/${recentPost?.slug}`} key={recentPost?.slug}>
            <div className='flex gap-4 items-center'>
              <img src={recentPost?.image?.url} alt="image" className='w-[100px] aspect-square object-cover rounded-lg'/>
              <div className='flex flex-col justify-between items-start gap-4'>
                <span className='text-xs font-semibold'>{recentPost?.title}</span>
                <span className='py-1 px-3 bg-blue-100 text-blue-600 text-xs font-semibold rounded-[5px]'>{recentPost?.category?.name}</span>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  )
}

export default Postwidget
