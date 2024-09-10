import Post from './components/posts';
import Aside from './components/aside';

export default function Home(){
	const data = [
		{image: "/static/images/temp/blue-men-shirt.jpg", title: "Men's Shirts", brand:"Bonanza Satrangi", rating:"4.3 (100)", locate:"Gawadar, Pakistan", delivery:"20 - 30 days", price:" 2500 PKR"},
		{image: "/static/images/temp/Floral-Spring_Fall.jpg", title: "Floral Spring", brand:" Sana Safinaz", rating:"4.9 (100)", locate:"Bahawalpur, Pakistan", delivery:"12 - 15 days", price:" 3000 PKR"},
		{image: "/static/images/temp/Men-Linen-Shirt-Shirt.jpg", title: "Men's Linen Shirts", brand:" Zellbury", rating:"3 (100)", locate:"Faisalabad, Pakistan", delivery:"3 - 5 days", price:" 1050 PKR"},
		{image: "/static/images/temp/Men-Polo-Shirt-Golf-Shirt.jpg", title: "Men's Polo Shirts", brand:" Endore", rating:"4.5 (100)", locate:"Islamabad, Pakistan", delivery:"2 - 5 days", price:" 1100 PKR"},
		{image: "/static/images/temp/Women-Long-Sleeve.jpg", title: "Women's long Sleeve", brand:" J.", rating:"3.5 (100)", locate:"Karachi, Pakistan", delivery:"1 -2 weeks", price:" 1500 PKR"},
		{image: "/static/images/temp/Women-Yellow-V-Neck.jpg", title: "Women's V-Neck Shirts", brand:" Saphire", rating:"4 (100)", locate:"Lahore, Pakistan", delivery:"10 - 25 days", price:" 2000 PKR"},
	];
	return (
	<main className="container-fluid home">
		<Aside/>
		<div className='content'>
			<div className="feature">
				<img src="/static/images/cover2.jpg" alt="Cover Photo"/>
				<div className="overlayer">
					<h1 className="shadow">You WADA Brand, Other What's a Brand</h1>
				</div>
			</div>
			<h1 className="h1 my-3 text-center">Our Products</h1>
			<section className="d-flex" id="content">
				{data.map((row, index) => (<Post
					key={index}
					image={row.image}
					title={row.title}
					brand={row.brand}
					rating={row.rating}
					locate={row.locate}
					delivery={row.delivery}
					price={row.price}
				/>))}
				{data.map((row, index) => (<Post
					key={index}
					image={row.image}
					title={row.title}
					brand={row.brand}
					rating={row.rating}
					locate={row.locate}
					delivery={row.delivery}
					price={row.price}
				/>))}
				{data.map((row, index) => (<Post
					key={index}
					image={row.image}
					title={row.title}
					brand={row.brand}
					rating={row.rating}
					locate={row.locate}
					delivery={row.delivery}
					price={row.price}
				/>))}
				{data.map((row, index) => (<Post
					key={index}
					image={row.image}
					title={row.title}
					brand={row.brand}
					rating={row.rating}
					locate={row.locate}
					delivery={row.delivery}
					price={row.price}
				/>))}
				{data.map((row, index) => (<Post
					key={index}
					image={row.image}
					title={row.title}
					brand={row.brand}
					rating={row.rating}
					locate={row.locate}
					delivery={row.delivery}
					price={row.price}
				/>))}
			</section>
		</div>
	</main>
	);
}