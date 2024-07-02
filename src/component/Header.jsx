import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import birdpen from '../images/birdpen.png'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  const [isNavShowing, setIsnavShowing] = useState(window.innerWidth > 800 ? true : false)
  const closeNavHandler = () =>{
    if(window.innerWidth < 800){
      setIsnavShowing(false)
    }else{
      setIsnavShowing(true)
    }
  }
  return (
   <nav>
    <div className="container nav_container">
      <Link to='/' className='nav_logo' onClick={closeNavHandler}>
        <img src={birdpen} alt="logo image" />
      </Link>

      {isNavShowing && <ul className='nav_menu'>
        <li><Link to='/profile/sdfsdf' onClick={closeNavHandler}>Ernest Achiver</Link></li>
        <li><Link to='/create' onClick={closeNavHandler}>Create Post</Link></li>
        <li><Link to='/users' onClick={closeNavHandler}>User</Link></li>
        <li><Link to='/logout' onClick={closeNavHandler}>Logout</Link></li>
      </ul>}
      <button className="nav_toggle-btn" onClick={()=> setIsnavShowing(!isNavShowing)}>
        {isNavShowing ? <AiOutlineClose />: <FaBars />}
      </button>
    </div>
   </nav>
  )
}

export default Header
