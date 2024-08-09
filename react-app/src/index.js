import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Notification from './components/notification';
import Aside from './components/aside';
import Post from './components/posts';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';

const header = ReactDOM.createRoot(document.getElementById("header"));
const notification = ReactDOM.createRoot(document.getElementById("notification"));
const aside = ReactDOM.createRoot(document.querySelector("aside"));
const content = ReactDOM.createRoot(document.getElementById("content"));
const footer = ReactDOM.createRoot(document.querySelector("footer"))
header.render(
  <React.StrictMode>
    <Header active="home"/>
  </React.StrictMode>
);
notification.render(
  <React.StrictMode>
    <Notification />
  </React.StrictMode>
);
aside.render(
  <React.StrictMode>
    <Aside />
  </React.StrictMode>
)
const data = [
  {image: "./static/images/temp/blue-men-shirt.jpg", title: "Men's Shirts", brand:"Bonanza Satrangi", rating:"4.3 (100)", locate:"Gawadar, Pakistan", delivery:"20 - 30 days", price:" 2500 PKR"},
  {image: "./static/images/temp/Floral-Spring_Fall.jpg", title: "Floral Spring", brand:" Sana Safinaz", rating:"4.9 (100)", locate:"Bahawalpur, Pakistan", delivery:"12 - 15 days", price:" 3000 PKR"},
  {image: "./static/images/temp/Men-Linen-Shirt-Shirt.jpg", title: "Men's Linen Shirts", brand:" Zellbury", rating:"3 (100)", locate:"Faisalabad, Pakistan", delivery:"3 - 5 days", price:" 1050 PKR"},
  {image: "./static/images/temp/Men-Polo-Shirt-Golf-Shirt.jpg", title: "Men's Polo Shirts", brand:" Endore", rating:"4.5 (100)", locate:"Islamabad, Pakistan", delivery:"2 - 5 days", price:" 1100 PKR"},
  {image: "./static/images/temp/Women-Long-Sleeve.jpg", title: "Women's long Sleeve", brand:" J.", rating:"3.5 (100)", locate:"Karachi, Pakistan", delivery:"1 -2 weeks", price:" 1500 PKR"},
  {image: "./static/images/temp/Women-Yellow-V-Neck.jpg", title: "Women's V-Neck Shirts", brand:" Saphire", rating:"4 (100)", locate:"Lahore, Pakistan", delivery:"10 - 25 days", price:" 2000 PKR"},
];
content.render(
  <>
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
  </>
);
footer.render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
