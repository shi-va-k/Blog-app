import React, { useState } from 'react'

import Postitem from './Postitem'
import { Dummy_posts } from '../data'


const Posts = () => {
    const [posts, setPosts] = useState(Dummy_posts)

  return (
   <section className='posts'>
    {posts.length > 0 ? <div className="container posts-container">
    {
        posts.map(({id, thumbnail, title, desc, userID})=> <Postitem key={id} posID={id} thumbnail={thumbnail} title={title} desc={desc} userID={userID} />)
    }
    </div> : <h2 className='center'>No Posts Found</h2>}
   </section>
   
  )
}

export default Posts
