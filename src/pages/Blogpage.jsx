import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { format, parseISO } from 'date-fns';
import { CalendarDays, Dot } from 'lucide-react'

const Blogpage = ({posts}) => {
    const { id } = useParams()
    const post = posts.find(post => post.slug === id)

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <div className='w-[min(50rem,90%)] mx-auto py-16'>
      <h1 className='text-2xl sm:text-4xl font-semibold'>{post?.title}</h1>

      <div className='my-8 flex items-center'>
        <img src={post?.author?.avatar?.url} alt={post?.author?.avatar?.url} className='w-[60px] aspect-square rounded-full object-cover'/>
        <h2 className='text-2xl font-medium ml-4'>{post?.author?.name}</h2>
        <span className='text-4xl text-blue-600'><Dot /></span>
        <span className='flex gap-2 items-center text-sm font-medium'><CalendarDays size={18} strokeWidth={1.2} strokeOpacity={0.5}/>
            {post?.date}
        </span>
      </div>

      <div className='w-full aspect-[5/4] sm:aspect-[16/10]'>
        <img src={post?.image.url} alt={post?.image?.url} className='w-full h-full object-cover rounded-xl' />
      </div>

      <div className='blog text-xl leading-loose mt-16 flex flex-col gap-8' dangerouslySetInnerHTML={{__html: post?.content?.html}}>
      </div>
    </div>
  )
}

export default Blogpage
