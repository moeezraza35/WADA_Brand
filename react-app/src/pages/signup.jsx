import Countries from "../components/countries";
import { Link } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { submitSignupForm } from "../components/script";

export default function Signup(){
	return (
		<main className="container-fluid signin">
			<div className="container">
				<form onSubmit={submitSignupForm} className="border rounded-4 mr-3">
					<div className="d-flex justify-content-between">
						<div className="mb-3">
							<label htmlFor="firstName" className="form-label">First Name</label>
							<input type="text" className="form-control input" id="firstName"/>
						</div>
						<div className="mb-3">
							<label htmlFor="lastName" className="form-label">Last Name</label>
							<input type="text"className="form-control input" id="lastName"/>
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="countryCode" className="form-label">Country Code</label>
						<select className="form-select input" id="countryCode" aria-label="Country code">
							<Countries/>
						</select>
					</div>
					<div className="mb-3">
						<label htmlFor="phoneNumber" className="form-label">Phone Number</label>
						<input type="tel" className="form-control input" id="phoneNumber" name="phoneNumber" placeholder="Phone number . . ."/>
					</div>
					<div className="mb-3">
						<input type="submit" className="form-control btn btn-warning" id="submit" value={"submit"}/>
					</div>
					<div className="d-flex justify-content-center">
						<GoogleLogin
							onSuccess={credentialResponse => {
								console.log(credentialResponse);
								fetch('http://localhost:8000/google-signin/', {
									method: 'POST',
									headers: {
										'Content-Type': 'application/json',
									},
									credentials : 'include',
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
				<div className="mesg">
					<h2 className="text-center">Register</h2>
					<p>Welcome to WADA Brand! Wearing And Dressing Administating Brand<br/>
					If you already have any account click the button below:</p>
					<p className="text-center">
						<Link to="/login/" className="btn btn-outline-dark btn-lg">Login</Link>
					</p>
				</div>
			</div>
		</main>
	);
}
