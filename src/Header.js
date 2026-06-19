import React from 'react'
import './Header.css' 

function Header() {
  return (
    <div>
    <h1>hello</h1>
       <header className='header'>
        <div className='header-container'>
<div className='logo'>
  <span className='logotext'>Stratcom</span>
</div>
        </div>

        <nav className='navmenu'>
          <ul className='navlist'>
            <li className='navitem'><a  className='navlink' href='/'>Home</a></li>
            <li className='navitem'><a  className='navlink' href='/'>AboutUs</a></li>
            <li className='navitem'><a  className='navlink' href='/'>Service</a></li>
            <li className='navitem'><a  className='navlink' href='/'>Login</a></li>
            


          </ul>
        </nav>
       </header>
    </div>


  )
}

export default Header
