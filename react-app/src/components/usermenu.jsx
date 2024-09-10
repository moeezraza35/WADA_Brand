import { logoutUser } from "./script";
import { NavLink } from "react-router-dom";

export function LogedInUserMenu(){
    return(
        <>
            <li><a className="dropdown-item" href="#">
                <i className='bx bxs-user text-secondary'></i>
                Profile
            </a></li>
            <li><a className="dropdown-item" href="#">
                <i className='bx bxs-cog text-secondary'></i>
                Settings
            </a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" onClick={logoutUser}>
                <i className='bx bxs-log-out text-secondary'></i>
                Logout
            </a></li>
        </>
    );
}

export function LogedOutUserMenu(){
    return (
        <>
            <li><NavLink className="dropdown-item" to="/login/">
                <i className='bx bxs-log-in text-secondary'></i>
                Login
            </NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/signup/">
                <i className='bx bxs-message-square-edit text-secondary'></i>
                Signup
            </NavLink></li>
        </>
    );
}