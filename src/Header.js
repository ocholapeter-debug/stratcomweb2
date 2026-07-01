import React from 'react'
import './Header.css'

function Header() {
  return (
      <header className='header'>
        <div className='container header-container'>
           <div className='logo'>
             <a className='logo-link' href='/'>
               <span className='header-logotext'>Stratcom</span>
             </a>
           </div>
           <nav className='navmenu'>
         <ul className='navlist'>
             <li className='navitem'><a className='navlink' href='/'>Home</a> </li>
             <li className='navitem'><a className='navlink' href='/Aboutus'>Aboutus</a> </li>
             <li className='navitem'><a className='navlink' href='/Services'>Services</a> </li>
             <li className='navitem'><a className='navlink' href='/Login'>Login</a> </li>
             <li className='navitem'><a className='navlink' href='/Signup'>SignUp</a> </li>
         </ul>
      </nav>
        </div>
      
      </header>
  )
}

export default Header