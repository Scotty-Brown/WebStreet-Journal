import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <div className='header'>
            <h1>WebStreet Journal</h1>
            <NavLink>Read Later</NavLink>
        </div>
    )
}

export default Header