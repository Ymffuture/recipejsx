import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import '../styles/footer.scss';


export default function Footer() {

  
    
  return (
    <div className="container-d">
      <div className="footer">
        <div className="footer-section">
         
          <div className="brand" >
            <FontAwesomeIcon icon={faUtensils} className="brand-icon" />
            <p className="title" >FoodPlus.com</p>
          </div>
          
          <p>
            FoodPlus is a place where you can feed your soul and stomach to the
            delicious taste of our finest food. And our service is absolutely free.
          </p>
          <p>&copy; 2024 | All Rights Reserved</p>
        </div>
        <div className="footer-section">
          <p className="title">Contact Us</p>
          <p>foodplus@gmail.com</p>
          <p>+27 639 4478 / +27 859 5578</p>
          <p>21 Rosebank Street, Johannesburg</p>
        </div>
        <div className="footer-section">
          <p className="title">Socials</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
