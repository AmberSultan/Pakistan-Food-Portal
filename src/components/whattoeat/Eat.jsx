import React, { useState, useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { WhatsappIcon, WhatsappShareButton , FacebookShareButton , FacebookIcon } from 'react-share';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Link } from 'react-router-dom';
import './Eat.css';

function Eat() {

  const [showSocialButtons, setShowSocialButtons] = useState(false);

  const handleShareClick = () => {
    setShowSocialButtons(!showSocialButtons); // Toggle visibility
  };


  const [fromEdit, setFromEdit] = useState(false);

  const [showAllOptions, setShowAllOptions] = useState(false);

  const url  = "http://localhost:3000/what-to-eat"

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(url)

  };
  const sliderRef = useRef(null);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  

const[currentSection, setCurrentSection] = useState(1)

// section 1

const [selectedOption, setSelectedOption] = useState([]);

  const options1 = [
    "American", "Chinese", "Japanese", "Korean", "Desi", 
    "Thai", "Lebanese", "Mediterranean", "Fast Food", 
    "Pakistani", "Healthy Food", "BBQ", "Vegetarian", 
    "Steaks", "Middle Eastern"
  ];

  // const goToSection1 = () => {
  //   setCurrentSection(1);
  //   setFromEdit(true);
  // };

  // section2

  const [selectedMeals, setSelectedMeals] = useState([]);
  const mealOptions = [
    "Breakfast", "Lunch", "Dinner", "Snack"
  ];

  // const goToSection2 = () => {
  //   setCurrentSection(2);
  //   setFromEdit(true);
  // };

  // section3

  const [selectedPrices, setSelectedPrices] = useState([]); // State to track selected price options

  const priceOptions = [
    "PKR 0 - 500",
    "PKR 500 - 1000",
    "PKR 1000 - 2000",
    "PKR 2000+"
  ];

  // const goToSection3 = () => {
  //   setCurrentSection(3);
  //   setFromEdit(true);
  // };

  // section4

  const [selectedDistances, setSelectedDistances] = useState([]);

  const distanceOptions = [
    "Within 1 km",
    "Within 5 km",
    "Within 10 km",
    "No Preference"
  ];

  // const goToSection4 = () => {
  //   setCurrentSection(4);
  //   setFromEdit(true);
  // };

const [likedCards, setLikedCards] = useState([false, false, false]);

const toggleLike = (index) => {
  setLikedCards((prevLiked) => {
    const updatedLikes = [...prevLiked];
    updatedLikes[index] = !updatedLikes[index];
    return updatedLikes;
  });
};

const cardsData = [
  { title: 'Mei Kong', text: 'Asian . 1.1km', rating: '9.5', number: '(2000+)', imgSrc: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg' },
  { title: 'Mei Kong1', text: 'Asian . 1.1km', rating: '9.5', number: '(2000+)', imgSrc: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg' },
  { title: 'Mei Kong2', text: 'Asian . 1.1km', rating: '9.5', number: '(2000+)', imgSrc: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg' },
  
];

const [isOpen, setIsOpen] = useState(false);

const handleToggle = () => {
  const navbar = document.getElementById('navbarNav');
  if (isOpen) {
    navbar.classList.remove('show');
  } else {
    navbar.classList.add('show');
  }
  setIsOpen(!isOpen); // toggle the state
};

const handleOptionSelect = (option) => {
  if (selectedOption.includes(option)) {
    setSelectedOption(selectedOption.filter(item => item !== option)); //remove from array
  } else {
    setSelectedOption([...selectedOption, option]);//add in array
  }
};

const handleNextSection = () => {

  if (currentSection === 1 && selectedOption.length < 3) {
    return;
  } else if (currentSection === 2 && selectedMeals.length === 0) {
    return;
  } else if (currentSection === 3 && selectedPrices.length === 0) {
    return;
  } else if (currentSection === 4 && selectedDistances.length === 0) {
    return;
  }

  // coming from edit btn
  if (fromEdit) {
    setCurrentSection(5);
    setFromEdit(false);
  } else if (currentSection < 5) {
    setCurrentSection(currentSection + 1);
  }
};

const handleSaveChanges = () => {
  console.log('Save changes function triggered');
  if (selectedOption.length < 3) {
    console.log('Button clicked');
    toast.error('Please select at least 3 cuisines.')
    return;
  }
  // Proceed with saving changes
  console.log('Selected cuisines:', selectedOption);
  console.log('Selected meals:', selectedMeals);
  console.log('Selected prices:', selectedPrices);
  console.log('Selected distances:', selectedDistances);
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
            <Link className="nav-link active cat" to="/what-to-eat">What to Eat</Link>
          </li>
          <li className="nav-item item">
            <Link className="nav-link cat" to="/discounts">Discounts</Link>
          </li>
          <button className='signup item'>Log in</button>
          <button className='signup item'>Sign Up</button>
          <button className='facebook item'>
            <img className='instaimg' src="images/iconwfacebook.png" alt="Facebook" />
          </button>
          <button className='facebook item'>
            <img className='instaimg' src="images/iconwinsta.png" alt="Instagram" />
          </button>
        </ul>
      </div>

          </div>
  
      </nav>
    </div>
         
    {/*---------- Section 1--------- */}
{currentSection === 1 && (
    <div className="container box">
    <p className='linktop'>
      <Link className='linktop me-2' to="/">Home</Link> &gt; <Link className='linktop' to="/what-to-eat">What to eat</Link>
    </p>

  
  <div class="row reverse">
    <div class="col-md-6 lefttext ">
      <p className='text1'>What type of cuisine are you in the <br /> mood for? (Select at least 3)</p>
      <div className="options">
        {options1.map((option, index) => (
          <button
            key={index}
            className={`optionbtn ${selectedOption.includes(option) ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option)} 
          >
            {option}
          </button>
        ))}
      </div>
     
    </div>
    <div class="col-md-3 rightimage">
      <img className='imgtop' src="images/image (7).png" alt="" />
    </div>
  </div>

  <div className="bottombtn">
        <button className='optionbottom' onClick={handleNextSection}>Confirm Selection</button>
      </div>


    </div>
  )}

    {/* -------------Section 2--------- */}
{currentSection === 2 &&(
    <div className="container box">
    <p className='linktop'>
      <Link className='linktop me-2' to="/">Home</Link> &gt; <Link className='linktop' to="/what-to-eat">What to eat</Link>
    </p>

  
  <div class="row reverse">
    <div class="col-md-6 lefttext">
      <p className='section2text'>What type of meal are you looking for?</p>
      <div className="options">
      {mealOptions.map((meal, index) => (
        <button
          key={index}
          className={`optionbtn ${selectedMeals.includes(meal) ? 'selected' : ''}`} // Conditionally apply the selected class
          onClick={() => setSelectedMeals(meal)} // Update the selected meals on click
        >
          {meal}
        </button>
      ))}
      </div>
     
    </div>
    <div class="col-md-3 rightimage imageSze">
      <img className='imgtop' src="images/section2img.png" alt="" />
    </div>
  </div>

  <div className="bottombtn">
        <button className='optionbottom' onClick={handleNextSection}>Confirm Selection</button>
      </div>


    </div>
  )}


  {/* -------------Section 3----------- */}

  {currentSection === 3 &&(
    <div className="container box">
    <p className='linktop'>
      <Link className='linktop me-2' to="/">Home</Link> &gt; <Link className='linktop' to="/what-to-eat">What to eat</Link>
    </p>

  
  <div class="row reverse">
    <div class="col-md-6 lefttext">
      <p className='section3text'>What is your preferred price range per head?</p>
      <div className="options">
      {priceOptions.map((price, index) => (
        <button
          key={index}
          className={`optionbtn ${selectedPrices.includes(price) ? 'selected' : ''}`}
          onClick={() => setSelectedPrices(price)} 
        >
          {price}
        </button>
      ))}
      </div>
     
    </div>
    <div class="col-md-3 rightimage">
      <img className='imgtop section3img' src="images/section3img.png" alt="" />
    </div>
  </div>

  <div className="bottombtn section3btn">
        <button className='optionbottom' onClick={handleNextSection}>Confirm Selection</button>
      </div>


    </div>
  )}



  {/* -----------Section 4-------------- */}

  {currentSection === 4 &&(
    <div className="container box">
    <p className='linktop'>
      <Link className='linktop me-2' to="/">Home</Link> &gt; <Link className='linktop' to="/what-to-eat">What to eat</Link>
    </p>

  
  <div class="row reverse">
    <div class="col-md-6 lefttext">
      <p className='section4text'>How far are you willing to travel?</p>
      <div className="options">
      {distanceOptions.map((distance, index) => (
        <button
          key={index}
          className={`optionbtn ${selectedDistances.includes(distance) ? 'selected' : ''}`} 
          onClick={() => setSelectedDistances(distance)} 
        >
          {distance}
        </button>
      ))}
      </div>
     
    </div>
    <div class="col-md-3 rightimage">
      <img className='imgtop section4img' src="images/section4img.png" alt="" />
    </div>
  </div>

  <div className="bottombtn section4btn">
        <button className='optionbottom' onClick={handleNextSection}>Confirm Selection</button>
      </div>


    </div>
  )}


  {/* -------------------Section 5-------------- */}

  {currentSection === 5 && (
    <div className="container box box5">
      <div className="row">
        <div className="col-md-3">
          <p className='linktop'>
            <Link className='linktop section5link me-2' to="/">Home</Link> &gt; <Link className='linktop' to="/what-to-eat">What to eat</Link>
          </p>
<div>
<button className='change'  data-toggle="modal" data-target="#editModal">Change Preferences</button>
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
<div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h6 className="modal-title" id="editModalLabel">What type of cuisine are you in the mood for?</h6>
        </div>
        
        <div className="modal-body">
      <div className="options">
        {options1.slice(0, showAllOptions ? options1.length : 8).map((option, index) => (
          <button
            key={index}
            className={`optionbtn modalOptions ${selectedOption.includes(option) ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* show more btn */}
      {options1.length > 8 && (
        <button className="read-more-btn" onClick={() => setShowAllOptions(!showAllOptions)}>
          {showAllOptions ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>

        <div className="modal-header">
          <h6 className="modal-title" id="editMealModalLabel">What type of meal are you looking for?</h6>
        </div>
        
        <div className="modal-body">
          <div className="options">
            {mealOptions.map((meal, index) => (
              <button
                key={index}
                className={`optionbtn modalOptions ${selectedMeals.includes(meal) ? 'selected' : ''}`}
                onClick={() => setSelectedMeals(meal)}
              >
                {meal}
              </button>
            ))}
          </div>
        </div>

        <div className="modal-header">
          <h6 className="modal-title" id="editPriceModalLabel">What is your preferred price range per head?</h6>
        </div>
        
        <div className="modal-body">
        <div className="options">
      {priceOptions.map((price, index) => (
        <button
          key={index}
          className={`optionbtn modalOptions ${selectedPrices.includes(price) ? 'selected' : ''}`}
          onClick={() => setSelectedPrices(price)} 
        >
          {price}
        </button>
      ))}
      </div>
        </div>

        <div className="modal-header">
          <h6 className="modal-title" id="editPriceModalLabel">How far are you willing to travel?</h6>
        </div>
        
        <div className="modal-body">
        <div className="options">
      {distanceOptions.map((distance, index) => (
        <button
          key={index}
          className={`optionbtn modalOptions modalOptions ${selectedDistances.includes(distance) ? 'selected' : ''}`} 
          onClick={() => setSelectedDistances(distance)} 
        >
          {distance}
        </button>
      ))}
      </div>
        </div>
        
        <div className="modal-footer">
  <button type="button" className="btn modalbtn" 
    data-dismiss={selectedOption.length >= 3 ? "modal" : ""} aria-label="Close"
    onClick={handleSaveChanges} 
    // disabled={selectedOption.length < 3} 
  >
    Save changes
  </button>
  <ToastContainer />
</div>

      </div>
    </div>
  </div>
  </div>
</div>
          


          <p className='prefrences'>Your Preferences</p>

          <p className='cuisineSelection'>Cuisines Selected</p>
          
{selectedOption.length > 0 &&
  selectedOption.reduce((rows, key, index) => {
    if (index % 3 === 0) rows.push([]);
    rows[rows.length - 1].push(key);
    return rows;
  }, []).map((row, rowIndex) => (
    <div className='mt-2'>
    <div key={rowIndex} className="row option">
      <div className="col-9 firstCusinie ">
        {row.map((cuisine, index) => (
          <button key={index} className='optionbtn edititems'>{cuisine}</button>
        ))}
      </div>
    </div>
    </div>
  ))
}


   


          {/* Display Meal Type */}
          <p className='cuisineSelection'>Meal Type</p>
        
              <button className='optionbtn edititems'>{selectedMeals}</button>
         




          {/* Display Price Range */}
          <p className='cuisineSelection'>Price Range</p>
      
              <button className='optionbtn edititems priceRange'>{selectedPrices}</button>
          

          {/* Display Distance */}
          <p className='cuisineSelection'>Distance</p>
     
              <button className='optionbtn edititems priceRange'>{selectedDistances}</button>
            </div>
         

    {/* rightside of section 5 */}
        <div className="col-md-9 rightcol">
          <p className='rightText'>Here are some restaurant options based on your preferences</p>
        
          <div className="d-flex prenextBtn justify-content-between align-items-center">
            <button className="backBtn" onClick={() => sliderRef.current.slickPrev()}>
              &#60;
            </button>

            <div className="container cardContainer">
              <Slider {...settings} ref={sliderRef}>
                {cardsData.map((card, index) => (
                  <div className="card dishCard" key={index}>
                    <div className="image-container">
                      <img src={card.imgSrc} className="card-img-top cardImg" alt="..." />
                      <div className="heartBtn">
                        <button className="heart" onClick={() => toggleLike(index)}>
                          <i className={`fa${likedCards[index] ? "s" : "r"} fa-heart`} 
                             style={{ color: likedCards[index] ? "red" : "black", fontSize: "12px" }}>
                          </i>
                        </button>
                      </div>
                    </div>
                    <div className="card-body cardBody">
                      <div className="row">
                        <div className="col-md-6">
                          <h5 className="card-title cardDish">{card.title}</h5>
                          <p className="card-text cardText">{card.text}</p>
                        </div>
                        <div className="col-md-6 cardDes d-flex">
                          <p className="rating">{card.rating}</p>
                          <p className="number">{card.number}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            <button className="backBtn nextBtn" onClick={() => sliderRef.current.slickNext()}>
              &#62;
            </button>
          </div>

          <div className="bottomRight d-flex justify-content-between">
            <Link className='returnHome' to="/">Return Home</Link>
            <button className='tryAgain'>Try Again</button>
   
          </div>
          <div className="share-container">
      <button className="share" onClick={handleShareClick}>
        <img className="shareimg" src="images/share.png" alt="Share Icon" />
      </button>

      {showSocialButtons && (
        <div className="social-buttons-box">
        <button className='link' onClick={handleCopyToClipboard}><img className='linkimg' src="images/link.png" alt="link" /></button>
          <WhatsappShareButton url={url} title="Check this out!">
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <FacebookShareButton url={url} quote="Check this out!">
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </div>
      )}
    </div>
        
        </div>
      </div>
    </div>
  )}




    </>
  );
}

export default Eat;
