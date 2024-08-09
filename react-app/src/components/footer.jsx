export default function Footer(){
	return (
		<>
			<div className="d-flex justify-content-evenly">
				<section>
					<div className="navbar-brand">
						<img src="./static/logo.png" className="brand-logo" alt="logo"/>
						Brand
					</div>
					<p>
						Wearing And Dressing Administrating Brand | Make your brand WADA brand people will say "what's a brand!"
					</p>
				</section>
				<section>
					<h5>Members</h5>
					<ul>
						<li><a className="nav-link" href="">Moeez Raza</a></li>
						<li><a className="nav-link" href="">Hafiz Ahsan Tahir</a></li>
						<li><a className="nav-link" href="">Muhammad Umar</a></li>
						<li><a className="nav-link" href="">Haroon Rajpoot</a></li>
						<li><a className="nav-link" href="">Rizwan Ali</a></li>
					</ul>
				</section>
				<section>
					<h5>Contact us</h5>
					<ul>
						<li><a className="nav-link" href="">+92 300 1234567</a></li>
						<li><a className="nav-link" href="">+92 300 1234567</a></li>
						<li><a className="nav-link" href="">+92 300 1234567</a></li>
						<li><a className="nav-link" href="">+92 300 1234567</a></li>
						<li><a className="nav-link" href="">+92 300 1234567</a></li>
					</ul>
				</section>
				<section>
					<h5>Developer Team</h5>
					<ul>
						<li><a className="nav-link" href="">Fiverr</a></li>
						<li><a className="nav-link" href="">Upwork</a></li>
						<li><a className="nav-link" href="">Mail</a></li>
						<li><a className="nav-link" href="">Join as developer</a></li>
					</ul>
				</section>
			</div>
			<hr className="m-3"/>
			<div className="d-flex justify-content-center">
				<a href=""><i className='bx bxl-facebook-circle'></i></a>
				<a href=""><i className='bx bxl-instagram-alt'></i></a>
				<a href=""><i className='bx bxl-youtube'></i></a>
				<a href=""><i className='bx bxl-linkedin-square'></i></a>
				<a href=""><i className='bx bxl-twitter'></i></a>
				<a href=""><i className='bx bxl-github'></i></a>
			</div>
		</>
	);
}