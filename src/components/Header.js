import React from 'react'
import NavBar from './NavBar';
import '../styles/Header.css';


const Header = props => {
    return (
      <div>
        <header>
            <NavBar />
            <h1 className="header">HOT or COLD</h1>
        </header>
      </div>
    )
}

export default Header; 

