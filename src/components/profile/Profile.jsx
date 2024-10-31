import React, { useState} from 'react'

import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import './Profile.css';

function Profile() {

    const [isOpen, setIsOpen] = useState(false);

    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

const handleToggle = () => {
  const navbar = document.getElementById('navbarNav');
  if (isOpen) {
    navbar.classList.remove('show');
  } else {
    navbar.classList.add('show');
  }
  setIsOpen(!isOpen);
};


  return (
    <>
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid navTop">
          <img className='toplogo' src="images/image2.png" alt="Logo" />
          <button
        className="navbar-toggler toggleBtn"
        type="button"
        onClick={handleToggle} // manually handle toggle
        aria-controls="navbarNav"
        aria-expanded={isOpen ? "true" : "false"}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav items ">
          <li className="nav-item item">
            <Link className="nav-link cat" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item item">
            <Link className="nav-link cat" to="/features">Search</Link>
          </li>
          <li className="nav-item item">
            <Link className="nav-link cat" to="/restaurants">Restaurants</Link>
          </li>
          <li className="nav-item item">
            <Link className="nav-link cat" to="/recipes">Recipes</Link>
          </li>
          <li className="nav-item item">
            <Link className="nav-link cat" to="/what-to-eat">What to Eat</Link>
          </li>
          <li className="nav-item item">
            <Link className="nav-link cat" to="/discounts">Discounts</Link>
          </li>
          <li className="nav-item item">
            <Link className="nav-link active cat" to="/profile">Profile</Link>
          </li>

          <button className='notifications'>
          <img className='bell' src="images/bell.png" alt="" />
           Notifications</button>
        
        </ul>
      </div>

          </div>
  
      </nav>
    </div>
    <div className="container">
    <p className='linktop'>
      <Link className='linktop me-2' to="/">Home</Link> &gt; <Link className='linktop' to="/profile">Profile</Link>
    </p>
    </div>

    <div className="container">
    <div className="banner">
    <div className="image-uploader">
            
            <div className="profileimage"></div>
           
        </div>
    </div>
    
    <div className="row topedit">
        <div className="col-8">
            <p className='name'>Ubaid Ullah Ahmed</p>
            <p className='desprofile'>As the CEO and founder of Add Hype, I lead a new-age startup that provides 
            end-to-end marketing solutions to leading businesses</p>

            <div className="btnedit">
                <button className='edit1'>Edit Profile</button>
                <button className='edit1'>Edit Badges</button>
            </div>
        </div>
    </div>



    </div>

    <hr className='hrline'/>

    {/* below */}

    <div class="container text-center">
  <div class="row">
    <div class="col-3 leftside">
    <Link
                className={`nav-link linkleft ${activeLink === '/profile/favourite' ? 'active' : ''}`}
                to="/profile/favourite"
                onClick={() => handleLinkClick('/profile/favourite')}
            >
                <img className='icon' src="../images/heart1.png" alt="" />
                Your Favourites
            </Link>
            <hr className='space'/>

            <Link
                className={`nav-link linkleft ${activeLink === '/profile/reviews' ? 'active' : ''}`}
                to="/profile/reviews"
                onClick={() => handleLinkClick('/profile/reviews')}
            >
                <img className='icon' src="../images/review.png" alt="" />
                Your Reviews
            </Link>
            <hr className='space'/>

            <Link
                className={`nav-link linkleft ${activeLink === '/profile/recipe-book' ? 'active' : ''}`}
                to="/profile/recipe-book"
                onClick={() => handleLinkClick('/profile/recipe-book')}
            >
                <img className='icon' src="../images/recipebook.png" alt="" />
                Your Recipe Book
            </Link>
            <hr className='space'/> 
    <Link className={`nav-link linkleft ${activeLink === '/profile/wallet' ? 'active' : ''}`} to="/profile/wallet" onClick={() => handleLinkClick('/profile/wallet')}>
    <img className='icon' src="../images/wallet.png" alt="" />
    Wallet</Link> <hr className='space' />
    <Link className={`nav-link linkleft ${activeLink === '/profile/friends' ? 'active' : ''}`} to="/profile/friends" onClick={() => handleLinkClick('/profile/friends')}>
    <img className='icon' src="../images/person.png" alt="" />Friends
    </Link> <hr className='space' />
    <Link className={`nav-link linkleft ${activeLink === '/profile/notifications' ? 'active' : ''}`} to="/profile/notifications" onClick={() => handleLinkClick('/profile/notifications')}>
    <img className='icon' src="../images/notification.png" alt="" />
    Notifications</Link> <hr className='space' />
    <Link className={`nav-link linkleft ${activeLink === '/profile/favourite' ? 'active' : ''}`} to="/profile/favourite" onClick={() => handleLinkClick('/profile/favourite')}>
    <img className='icon' src="../images/mode.png" alt="" />
    Dark Mode</Link> <hr className='space' />
    <Link className={`nav-link linkleft ${activeLink === '/profile/favourite' ? 'active' : ''}`} to="/profile/favourite">Sign Out</Link>
    </div>
    <div class="col-9">
      <Outlet/>
    </div>
    
  </div>
</div>
   
    </>
  )
}

export default Profile
