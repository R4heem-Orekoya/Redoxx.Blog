import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {name: 'All', slug: 'all'},
  {name: 'Programming', slug: 'programming'},
  {name: 'Top 10', slug: 'top10'},
  {name: 'Technology', slug: 'technology'},
]

const Navbar = ({handleCategory, currentCategory}) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
        <nav className='w-[min(1200px,90%)] h-20 mx-auto flex justify-between items-center'>
            <Link to='/' className='text-2xl font-bold sm:text-3xl sm:font-semibold text-slate-800'>redoxx.Blog</Link>

            <ul className={`flex max-sm:flex-col max-sm:fixed max-sm:top-20 ${isNavOpen ? 'max-sm:left-0' : 'max-sm:left-[-100%]'} duration-300 max-sm:p-[5%] max-sm:bg-white max-sm:w-full max-sm:border-b max-sm:border-t max-sm:border-black/10 gap-8 list-none`}>
              {categories.map((category) => (
                <li 
                  onClick={() => 
                    {
                      handleCategory(category.name)
                      setIsNavOpen(false)
                    }
                  } 
                  key={category.slug} className={`text-lg hover:text-blue-600 ${currentCategory == category.name ? 'text-blue-600 font-semibold' : 'font-medium text-slate-700'} transition duration-300 cursor-pointer`}>
                  <Link to='/'>{category.name}</Link>
                </li>
              ))}
            </ul>

            <div onClick={() => setIsNavOpen(!isNavOpen)} className='cursor-pointer block sm:hidden'>
              {!isNavOpen ? <Menu size={40} strokeWidth={1.8}/> : < X size={40} strokeWidth={1.8}/>}
            </div>
        </nav>
    </header>
  )
}

export default Navbar
