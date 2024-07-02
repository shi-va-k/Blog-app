import React from 'react'
import {Link} from 'react-router-dom'
import birdpen from '../images/birdpen.png'

const PostUser = () => {
  return (
    <div>
      <Link to={`/posts/users/sdfsdf`} className='post_user'>
        <div className="post_user-avatar">
            <img src={birdpen} alt="" />
        </div>
        <div className="post_user-details">
            <h5>By: Earnest Achiever</h5>
            <small>Just Now</small>
        </div>
      </Link>
    </div>
  )
}

export default PostUser
