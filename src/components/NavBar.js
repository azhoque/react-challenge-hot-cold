import React from 'react'
import '../styles/NavBar.css'

const NavBar = (props) => {
    return (
      <nav className="top-nav">
        <ul>
            <li className="what">
                {/* set up this link */}
                <a onClick={() => props.showInfoToggle(true)}>WHAT?</a>
            </li>
            <li className="new">
                {/* set up this link 
                // fucntion reference not call*/}
                <a onClick={props.restartGame}>+NEWGAME</a> 
                
            </li>
        </ul>
      </nav>
    )
}
export default NavBar;