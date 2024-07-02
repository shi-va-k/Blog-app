import React from 'react'
import {Link} from 'react-router-dom'
import PostUser from './PostUser'

const Postitem = ({postID, title, desc, userID, thumbnail}) => {
    const shortDescription = desc.length > 145 ? desc.substr(0, 145)+ '...' : desc
    const postTitle = title.length > 35 ? title.substr(0, 35) + '...': title
  return (
    <div>
      <article className="post">
         <div className="post-thumbnail">
            <img src={thumbnail} alt={title} />
         </div>
         <div className="post-content">
            <Link to={`/posts/${postID}`}>
                <h3>{postTitle}</h3>
            </Link>
            <p>{shortDescription}</p>
            
            <div className="post-footer">
                <PostUser />
                
            </div>
         </div>

      </article>
    </div>
  )
}

export default Postitem
