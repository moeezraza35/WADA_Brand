export default function Post({image, title, brand, rating, locate, delivery, price}){
	return (
		<div className="card shadow">
			<img src={image} className="card-img-top" alt="Image"/>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">
					<a href="" className="brand_name">
						<img src="./static/logo.png" alt=""/>
						{brand}
					</a>
					<i className='bx bxs-star' ></i>
					{rating}
					<br/>
				</p>
				<p>
					<i className='bx bxs-location-plus'></i> {locate}<br/>
					<i className='bx bxs-truck' ></i> {delivery}<br/>
				</p>
				<h5 className="price">
					<i className='bx bx-money'></i>
					{price}
				</h5>
				<a href="#" className="btn btn-outline-warning">See More</a>
			</div>
		</div>
	);
}