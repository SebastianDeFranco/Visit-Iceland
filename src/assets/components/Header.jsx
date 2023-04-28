import React from 'react'


const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <span className='logo'>Iceland</span>
        </div>
        <ul>
          <li>
            <a href="#section1" className='link'>Food</a>
          </li>
          <li>
            <a href="#section2" className='link'>Landscape</a>
          </li>
          <li>
            <a href="#section3" className='link'>Culture</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header