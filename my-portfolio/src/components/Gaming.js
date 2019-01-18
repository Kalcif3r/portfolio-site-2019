import React, { Component } from 'react'
import './Gaming.scss'
import controller from '../resources/controller.png'
class Gaming extends Component {
  render() {
    return (
      <div className="page gaming-container">
        <div>
          <img alt="controller" className="controller" src={controller} />
        </div>
        <div className="text-container">
          <div className="h1">grew up</div>
          <div className="h2">Gaming</div>
        </div>
      </div>
    )
  }
}

export default Gaming
