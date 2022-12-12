import {NavLink} from "react-router-dom";


const Navbar = ()=>{
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Blog">Blog</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/ContactUs">ContactUs</NavLink>
        </nav>
    )
}


export default Navbar;
