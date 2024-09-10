import { useEffect, useState } from 'react';
import {show_and_hide_aside,toggleTheme} from './script';
import { NavLink } from 'react-router-dom';
import {LogedInUserMenu,LogedOutUserMenu} from './usermenu';

export default function Header(){
    const [login, setlogin] = useState(false);
    useEffect(() =>{
        fetch("http://localhost:8000/issetsession/",{
            method : 'GET',
            credentials : 'include',
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setlogin(result["login"]);
        })
        .catch(error => {
            // Handle errors
            console.error('Error sending data to server:', error);
        });
    }, []);
    
	return (
	<header className="navbar navbar-expand-lg shadow-sm">
        <nav className="container">
            <a className="navbar-brand" href="/">
                <img src="/static/logo.png" alt="logo" className="brand-logo" />
                Brand
            </a>
            <div className="d-flex align-item-center">
                <button className="navbar-toggler mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className='bx bx-menu'></i>
                </button>
                <button className="navbar-toggler" type="button" onClick={show_and_hide_aside}>
                    <i className='bx bxs-filter-alt'></i>
                </button>
            </div>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <form className="d-flex" role="search" style={{marginBottom:'0px'}}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-warning" type="submit">
                        <i className='bx bx-search-alt-2 mt-1'></i>
                    </button>
                </form>
                <ul className="nav navbar-nav with-text">
                    <li className="nav-item" title="Home">
                        <NavLink className="nav-link" to="/">
                            <i className='bx bxs-home'></i>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item" title="About">
                        <NavLink className="nav-link" to="/about/">
                            <i className='bx bxs-help-circle'></i>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item" title="Messages">
                        <a className="nav-link" href="#">
                            <i className='bx bxs-message-dots'></i>
                            Messages
                        </a>
                    </li>
                    <li className="nav-item" title="My Shop">
                        <a className="nav-link" href="#">
                            <i className='bx bxs-store-alt'></i>
                            My shop
                        </a>
                    </li>
                </ul>
                <ul className="nav without-text">
                    <li className="nav-item" title="Theme">
                        <a className="nav-link" onClick={() => toggleTheme()}>
                            <i className='bx bxs-brightness-half'></i>
                        </a>
                    </li>
                    <li className="nav-item" title="Notification">
                        <button className="nav-link btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#notification" aria-controls="notification">
                            <i className='bx bxs-bell'></i>
                        </button>
                    </li>
                    <li className="nav-item dropdown" title="Profile">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className='bx bxs-user'></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            {login ? <LogedInUserMenu/> : <LogedOutUserMenu/>}
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
	);
}