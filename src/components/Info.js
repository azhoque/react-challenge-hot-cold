import React from 'react'
import '../styles/Info.css'
import {setShowInfo} from '../actions';
import {connect} from 'react-redux'


 const Info = (props) => {
  return (
    <div className="info-section" onClick={() => props.dispatch(setShowInfo(false))}>
      <ul>
        <ol>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</ol> 
        <ol>Magni sit consequatur a repudiandae porro quaerat provident adipisci.</ol> 
        <ol>possimus rem ipsam facere iure voluptas dolore incidunt commodi laudantium magnam, explicabo veritatis?.</ol>
      </ul>
      
    </div>
  )
}
export default connect()(Info);
