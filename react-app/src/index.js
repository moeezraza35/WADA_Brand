import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
// Components
import App from './App';
import Header from './components/header';
import Notification from './components/notification';
import Footer from './components/footer';
// Pages
import About from './pages/about';
import Login from './pages/login';
import Signup from './pages/signup';

import reportWebVitals from './reportWebVitals';

const main = ReactDOM.createRoot(document.querySelector("#root"));
main.render(
	<BrowserRouter>
		<GoogleOAuthProvider clientId="41943565566-h8t1drjo2les86c57sgu6536c9v88sm5.apps.googleusercontent.com">
			<Header />
			<Notification />
			<Routes>
				<Route path='/' element={<App />}/>
				<Route path='/about/' element={<About/>}/>
				<Route path='/login/' element={<Login/>}/>
				<Route path='/signup/' element={<Signup/>} />
			</Routes>
			<Footer />
		</GoogleOAuthProvider>
	</BrowserRouter>
);
reportWebVitals();
