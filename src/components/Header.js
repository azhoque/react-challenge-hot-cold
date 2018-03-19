import React from 'react'
import NavBar from './NavBar';

const Header = (props) => {
    return (
      <div>
        <header>
            <NavBar restartGame={() => props.restartGame()}/>
            <h1 className="header">HOT or COLD</h1>
        </header>
      </div>
    )
}

export default Header; 

