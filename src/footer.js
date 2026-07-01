import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        
        {/* Left Block */}
        <div className='block1'>
          <h4>Contact Us</h4>
           <img  className='icons' alt='' src='./images/icons8-whatsapp-logo-48.png'/><p> <strong>Tell</strong> +256705310166  </p>
          
         
          <p></p>

        </div>

        {/* Center Block */}
        <div className='block2'>
          <div className='logo'>
            <span className='footer-logotext'>Stratcom</span>
          </div>
          <h4>Location</h4>
          <p>Makerere K along kampala road</p>
        </div>

        {/* Right Block */}
        <div className='block3'>
          <h4>Developer</h4>
          <img  alt='' src='./images/icons8-developer-48.png'/>
          <p>OCHOLA PETER</p>
        </div>
      </div>
      <div> <p>&copy; 2026 Stratcom Computering Solution . All rights reserved.</p></div>
    </footer>
  );
}

export default Footer;
