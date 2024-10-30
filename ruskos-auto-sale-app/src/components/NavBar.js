import { NavLink } from "react-router-dom";
import "../components/NavBar.css"

function NavBar() {
    return (
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
                to='/support'
                className="logo">
                Support Us
            </NavLink>
        </nav>
    )
}
export default NavBar