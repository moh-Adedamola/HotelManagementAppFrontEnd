import React from 'react';
// import './App.css';
import { NavLink,useNavigate } from 'react-router-dom';




function Navbar() {
    
    
    const navigate = useNavigate();

   

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/home">Seven Star Hotel</NavLink>
            </div>
            <ul className= "navbar-ul">
                <li><NavLink to="/home" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/rooms" activeclassname="active">Rooms</NavLink></li> 
                <li><NavLink to="/find-booking" activeclassname="active">Find My Reservation</NavLink></li>

                {/* {isUser && <li><NavLink to="/profile" activeclassname="active">Profile</NavLink></li>}
                {isAdmin && <li><NavLink to="/admin" activeclassname="active">Admin</NavLink></li>} */}

                <li><NavLink to="/register" activeclassname="active">Register</NavLink></li>
                <li><NavLink to="/login" activeclassname="active">Login</NavLink></li>
                <li><NavLink to="/logout" activeclassname="active">Logout</NavLink></li>
                
                {/* <li onClick={handleLogout}>Logout</li> */}
            </ul>
        </nav>
    );
}

export default Navbar;