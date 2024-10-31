import React from 'react';
import './Header.css';
import Footer from './Footer'

function Header() {
  return (
    <>
    <div className="header">
    <img className='background' src="images/background.png" alt="no bg" />


<div className="navbar">
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <div className="d-flex justify-content-between w-100"> 
        <div className="registerbtn">
          <button className='register'>Register your Restaurant</button>
        </div>
        
        <div className="rightside log d-flex "> 
          <button className='login'>Log in</button>
          <button className='login'>Sign Up</button>
          <button className='insta'><img className='instaimg' src="images/insta.png" alt="" /></button>
          <button className='insta'><img className='instaimg' src="images/facebook.png" alt="" /></button>
        </div>
      </div>
    </div>
  </nav>
</div>

<div className="centerlogo">
  <img className='logo' src="images/image1.png" alt="noimage" />
  <p className='text-white line'>Discover the best food & drinks in Pakistan</p>

  <div className="search-wrapper">
    <div className="search-container">
        <input className='search' type="text" placeholder='Search for Restaurants by Name, Cuisine, Location' />
        <img className='searchicon' src="images/search.png" alt="" />
    </div>
</div>


</div>
    </div>
    

<div className="footer">
<Footer/>
</div>
      
    </>
  );
}

export default Header;
