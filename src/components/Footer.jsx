import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="container">
      <div className="footimg">
        <img className='blogo' src="images/image2.png" alt="no img" />
      </div>
      
      <div className="row text-center">
        <div className="col-md-2 col-6 part">
          <p className='title'>About PFP</p>
          <p><Link to="/" className='sub'>Who we are</Link></p>
          <p><Link to="/" className='sub'>Blog</Link></p>
          <p><Link to="/" className='sub'>Work with <br /> us</Link></p>
          <p><Link to="/" className='sub'>Contact us</Link></p>
        </div>
        <div className="col-md-2 col-6 part">
          <p className='title'>For <br /> Restaurants</p>
          <Link to="/" className='sub'>Partner with us</Link>
        </div>
        <div className="col-md-2 col-6 part">
          <p className='title'>For Influencers</p>
          <p><Link to="/" className='sub'>Verification Process</Link></p>
          <p><Link to="/" className='sub'>Media Uploaded</Link></p>
          <p><Link to="/" className='sub'>Reviews</Link></p>
        </div>
        <div className="col-md-2 col-6 part">
          <p className='title'>Recipes</p>
          <Link to="/" className='sub'>Upload a Recipe</Link>
        </div>
        <div className="col-md-2 col-6 part">
          <p className='title'>Learn More</p>
          <p><Link to="/" className='sub'>Privacy</Link></p>
          <p><Link to="/" className='sub'>Security</Link></p>
          <p><Link to="/" className='sub'>Terms</Link></p>
          <p><Link to="/" className='sub'>Sitemap</Link></p>
        </div>
        <div className="col-md-2 col-6 part">
          <p className='title'>Socials</p>
          <p><Link to="/" className='sub'>Linkedin</Link></p>
          <p><Link to="/" className='sub'>Instagram</Link></p>
          <p><Link to="/" className='sub'>Twitter</Link></p>
          <p><Link to="/" className='sub'>Youtube</Link></p>
          <p><Link to="/" className='sub'>Facebook</Link></p>
        </div>
      </div>
      <hr className='hline' />
    </div>
  );
}

export default Footer;