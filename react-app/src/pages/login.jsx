import { Link } from "react-router-dom";
import Countries from "../components/countries";
import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";

export default function Login(){
	const [csrf_token, set_csrf_token] = useState('');
	useEffect(() => {
		fetch("http://localhost:8000/getcsrftoken/")
		.then(res => res.json())
		.then(data => set_csrf_token(data.csrf_token))
		.catch(() => {console.error("Error in fetching csrf_token")})
	}, []);
	return (
		<main className="container-fluid signin">
			<div className="container flex-reverse">
				<div className="mesg">
					<h2 className="text-center">Login</h2>
					<p>Welcome to WADA Brand! Wearing And Dressing Administating Brand<br/>
					If you don't have any account click the button below:</p>
					<p className="text-center">
						<Link to="/signup/" className="btn btn-outline-dark btn-lg">Register</Link>
					</p>
				</div>
				<form action="" method="post" className="border rounded-4 ml-3">
					<div className="mb-3">
						<label htmlFor="countryCode" className="form-label">Country Code</label>
						<select className="form-select" id="countryCode" aria-label="Country code">
							<Countries/>
						</select>
					</div>
					<div className="mb-3">
						<label htmlFor="phoneNumber" className="form-label">Phone Number</label>
						<input type="tel" className="form-control" id="phoneNumber" placeholder="Phone number . . ."/>
					</div>
					<div className="mb-3">
						<input type="submit" className="form-control btn btn-warning" id="exampleFormControlInput1" placeholder="name@example.com"/>
					</div>
					<div className="d-flex justify-content-center">
						<GoogleLogin
							onSuccess={credentialResponse => {
								fetch('http://localhost:8000/google-signin/', {
									method: 'POST',
									headers: {
										'Content-Type': 'application/json',
										'X-CSRFToken': csrf_token,
									},
									body: JSON.stringify({ credentialResponse }),
								})
								.then(response => response.json())
								.then(data => {
									if(data["user"]){
										window.open('/','_self');
									}
								})
								.catch(error => {
									// Handle errors
									console.error('Error sending data to server:', error);
								});
							}}
							onError={() => {
								console.log('Login Failed');
							}}
						/>
					</div>
				</form>
			</div>
		</main>
	);
}