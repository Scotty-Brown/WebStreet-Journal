import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <h1>WebStreet Journal</h1>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/bookmarks'}>Bookmarks</NavLink>
    </div>
  )
}

export default Header
