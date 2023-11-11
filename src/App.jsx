import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogpage from './pages/Blogpage'
import Footer from './components/Footer'
import Home from './pages/Homepage'
import Navbar from './components/Navbar'

import { gql, request } from 'graphql-request'

const App = () => {
  const [posts, setPosts] = useState([])
  const [currentCategory, setCurrentCategory] = useState('All')
  let categorisedPosts

  if(currentCategory === 'All'){
    categorisedPosts = posts
  }else{
    categorisedPosts = posts.filter(categorisedPost => categorisedPost.category.name === currentCategory)
  }

  const handleCategory = (category) => {
    setCurrentCategory(category)
  }


  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await request('https://api-eu-west-2.hygraph.com/v2/clod2eid6r1ur01uh9mh9fcar/master', gql`
        query Assets {
          posts {
            slug
            title
            createdAt
            image {
              url
            }
            intro
            date
            content {
              html
              markdown
              raw
              text
            }
            author {
              avatar {
                url
              }
              name
            }
            category {
              name
              slug
            }
          }
        }
      `)

      setPosts(posts.reverse())
    }

    fetchPosts()
  }, [])


  return (
    <>
      <Navbar handleCategory={handleCategory} currentCategory={currentCategory}/>

      <Routes>
        <Route path='/' element={<Home posts={categorisedPosts.reverse()}/>}/>
        <Route path='/blog/:id' element={<Blogpage posts={posts}/>}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
