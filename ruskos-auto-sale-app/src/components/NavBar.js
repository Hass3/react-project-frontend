import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar(){
    return(
    <nav className="navbar">
        <NavLink
        to='/'
        className="logo">
            Home
        </NavLink>
        <NavLink
        to='/about'
        className="logo">
            About
        </NavLink>
        <NavLink
        to='/listcar'
        className="logo">
            List A Car
        </NavLink>
    </nav>
)
}
export default NavBar