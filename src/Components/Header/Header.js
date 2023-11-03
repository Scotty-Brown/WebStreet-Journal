import './Header.css'
import { NavLink } from 'react-router-dom'
import {BsFillHouseDoorFill, BsBookmarkCheckFill} from 'react-icons/bs'

const Header = () => {
  return (
    <div className="header">
      <h1>WebStreet Journal</h1>
      <NavLink className='nav-link' to={'/'}>Home {<BsFillHouseDoorFill/>}</NavLink>
      <NavLink className='nav-link' to={'/bookmarks'}>Bookmarks {<BsBookmarkCheckFill/>}</NavLink>
    </div>
  )
}

export default Header
