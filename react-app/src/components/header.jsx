import {show_and_hide_aside,toggleTheme} from './script';
export default function Header(props){
	return (
	<>
        <nav className="container">
            <a className="navbar-brand" href="/">
                <img src="/static/logo.png" alt="logo" className="brand-logo" />
                Brand
            </a>
            <div className="d-flex align-item-center">
                <button className="navbar-toggler mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class='bx bx-menu'></i>
                </button>
                <button className="navbar-toggler" type="button" onClick={() => show_and_hide_aside()}>
                    <i className='bx bxs-filter-alt'></i>
                </button>
            </div>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-warning" type="submit">
                        <i className='bx bx-search-alt-2 mt-2'></i>
                    </button>
                </form>
                <ul className="nav navbar-nav with-text">
                    <li className="nav-item" title="Home">
                        <a className={props.active === "home"?("nav-link active"):("nav-link")} href="#">
                            <i className='bx bxs-home'></i>
                            Home
                        </a>
                    </li>
                    <li className="nav-item" title="About">
                        <a className={props.active ==="about"?("nav-link active"):("nav-link")} href="#">
                            <i className='bx bxs-help-circle'></i>
                            About
                        </a>
                    </li>
                    <li className="nav-item" title="Messages">
                        <a className={props.active ==="messages"?("nav-link active"):("nav-link")} href="#">
                            <i className='bx bxs-message-dots'></i>
                            Messages
                        </a>
                    </li>
                    <li className="nav-item" title="My Shop">
                        <a className={props.active ==="shop"?("nav-link active"):("nav-link")} href="#">
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
                        <a className="nav-link dropdown-toggle" href="#" role="button" dataBsToggle="dropdown" aria-expanded="false">
                            <i className='bx bxs-user'></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#">
                                <i className='bx bxs-user text-secondary'></i>
                                Profile
                            </a></li>
                            <li><a className="dropdown-item" href="#">
                                <i className='bx bxs-cog text-secondary'></i>
                                Settings
                            </a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">
                                <i className='bx bxs-log-out text-secondary'></i>
                                Logout
                            </a></li>
                            <li><hr className="dropdown-divider" style={{borderColor: 'red'}}/></li>
                            <li><a className="dropdown-item" href="#">
                                <i className='bx bxs-log-in text-secondary'></i>
                                Login
                            </a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">
                                <i className='bx bxs-message-square-edit text-secondary'></i>
                                Signup
                            </a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </>
	);
}