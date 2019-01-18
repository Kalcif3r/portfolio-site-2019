import React, { Component } from 'react'
import './Born.scss'
import isles from '../resources/isles.png'
class Born extends Component {
  render() {
    return (
      <div className="born-container">
        <div className="img-container">
          <img alt="isles" className="isles" src={isles} />
        </div>
        <div className="text-container">
          <div className="h1">born</div>
          <div className="h1">Maldivian</div>
          <div className="h2">1994</div>
        </div>
      </div>
    )
  }
}

export default Born
