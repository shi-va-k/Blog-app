import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import avatar1 from '../images/avatar1.jpeg'
import avatar4 from '../images/avatar1.jpeg'
import avatar2 from '../images/avatar1.jpeg'
import avatar3 from '../images/avatar1.jpeg'

const usersData = [
  {id: 1, avatar: avatar1, name: 'Ernest Achiever', posts: 3},
  {id: 1, avatar: avatar2, name: 'Ernest ', posts: 4},
  {id: 1, avatar: avatar3, name: ' Achiever', posts: 2},
  {id: 1, avatar: avatar4, name: 'Eriever', posts: 1},
]

const Users = () => {
  const [users, setUsers] = useState(usersData)
  return (
    <section className="users">
      {users.length > 0 ? <div className="container users-container">
              {
                users.map(({id, avatar, name, posts})=>{
                  return <Link key={id} to={`/posts/users/${id}`}className='user'>
                    <div className="user-avatar">
                      <img src={avatar} alt={`image of ${name}`} />
                    </div>
                    <div className="user-info">
                      <h4>{name}</h4>
                      <p>{posts}</p>
                    </div>
                  </Link>
                })
              }
      </div>: <h2 className='center'>No users found.</h2>}
    </section>
  )
}

export default Users
