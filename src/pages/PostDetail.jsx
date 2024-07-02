import React from 'react'
import PostUser from '../component/PostUser'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/Thumbnail1.jpg'


const PostDetail = () => {
  return (
   <section className='post-detail'>
      <div className="container post-detail container">
        <div className="post-detail-header">
          <PostUser />
            <div className="post-detail-button">
              <Link to={`/posts/werwe/edit`}className='btn sm primary'>Edit</Link>
              <Link to={`/posts/werwe/delete`}className='btn sm danger'>Delete</Link>
            </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail-thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, illo voluptatum. Saepe atque odit fugiat velit animi! Impedit veritatis nihil ullam inventore porro natus, dolores accusamus velit consequuntur consectetur eveniet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat non ducimus minus quam laboriosam pariatur id aut quisquam a nam nesciunt, voluptate numquam recusandae corrupti, iusto quaerat exercitationem saepe! Sapiente exercitationem minus quae, fugiat repellendus quo possimus dolor consectetur eius quia eum nobis odit quis dolorem necessitatibus assumenda excepturi soluta!</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vel ut autem numquam earum dolor hic reiciendis, doloremque ratione minima ipsum aut. Numquam dolor nam enim! Nihil iusto, fuga dignissimos enim velit quod accusamus deserunt? Repellat non et maiores voluptas ea, hic a consequuntur tempora! Magnam ut quod eius iste necessitatibus ad quam itaque sunt alias eaque? Debitis veniam consectetur mollitia distinctio corrupti optio at, voluptate repellendus modi possimus. Illum velit explicabo accusamus quisquam corrupti voluptatum nihil ducimus assumenda minima molestiae sint autem voluptatem quaerat sed odio hic consectetur ipsam tempore, cum doloribus dolorem, sit labore perspiciatis. Similique maxime itaque libero facere animi? Voluptates nihil numquam assumenda nulla. Accusantium, consectetur?

      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam molestias accusantium illo dicta officiis consequuntur rerum, soluta delectus non?</p>
      </div>
   </section>
  )
}

export default PostDetail
