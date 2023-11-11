import React from 'react'
import { Link } from 'react-router-dom'

const Postcard = ({post}) => {
  return (
    <Link to={`/blog/${post?.slug}`} className='flex-1'>
      <div className='rounded-2xl border border-slate-800/5 p-4 bg-stone-100/50 hover:shadow-sm transition duration-300'>
          <img src={post.image.url} alt="image1" className='w-full aspect-[16/11] object-cover rounded-lg'/>
          <h2 className='text-lg sm:text-xl mt-6 font-semibold'>
            {post?.title}
          </h2>
          <p className='text-sm my-6'>{post?.intro}</p>

          <div className='flex justify-between items-center'>
            <h3 className='text-lg font-semibold'>{post?.author?.name}</h3>

            <span className='py-2 px-3 bg-blue-100 text-blue-600 text-sm font-semibold rounded-lg'>{post?.category?.name}</span>
          </div>
      </div>
    </Link>
  )
}

export default Postcard
