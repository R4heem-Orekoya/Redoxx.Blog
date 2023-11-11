import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Twitter } from 'lucide-react'
import Tiktok from '../assets/tiktok.svg'

const Footer = () => {
  return (
    <footer className='w-full border-t border-black/10 p-8 bg-stone-100'>
        <div className='w-[min(1200px,90%)] mx-auto flex justify-between'>
            <Link to='/' className='text-2xl sm:text-4xl font-bold sm:font-semibold text-slate-800'>redoxx.blog</Link>

            <div className='flex items-center gap-4 list-none'>
                <span><a href="#"><Instagram size={30} strokeWidth={1.5} className='hover:stroke-pink-600'/></a></span>
                <span><a href="#"><Twitter size={30} strokeWidth={1.5} className='hover:stroke-blue-600'/></a></span>
                <span><a href="#"><img src={Tiktok} alt="tiktok" className='w-[30px] aspect-square object-cover'/></a></span>
            </div>
        </div>
    </footer>
  ) 
}

export default Footer
