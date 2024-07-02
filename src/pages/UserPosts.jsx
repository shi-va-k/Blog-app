import React, { useState } from 'react'
import { Dummy_posts } from '../data'
import Postitem from '../component/Postitem'
const UserPosts = () => {
  const [posts, setPosts] = useState(Dummy_posts)
  return (
    <section className='user-posts'>
    {posts.length > 0 ? <div className="container user-posts-container">
    {
        posts.map(({id, thumbnail, title, desc, userID})=> <Postitem key={id} posID={id} thumbnail={thumbnail} title={title} desc={desc} userID={userID} />)
    }
    </div> : <h2 className='center'>No Posts Found</h2>}
   </section>
  )
}

export default UserPosts
