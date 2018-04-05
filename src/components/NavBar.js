import React from 'react'
import '../styles/NavBar.css'
import {setShowInfo, restartGame} from '../actions';

const NavBar = props => {
    console.log(props);
    return (
      <nav className="top-nav">
        <ul>
            <li className="what">
                {/* set up this link */}
                <a onClick={() => props.dispatch(setShowInfo(true))}>WHAT?</a>
            </li>
            <li className="new">
                {/* set up this link 
                // fucntion reference not call
                    <a onClick={props.dispatch(restartGame())}>+NEWGAME</a> 
            */}
                
                
            </li>
        </ul>
      </nav>
    )
}
export default NavBar;