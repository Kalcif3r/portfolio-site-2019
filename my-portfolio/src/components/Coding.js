import React, { Component } from 'react'
import './Coding.scss'
import degree from '../resources/degree.png'
class Coding extends Component {
  render() {
    return (
      <div className="coding-container">
        <div className="text-block">
          <span className="h2 thicc">{`<`}</span>
          <div className="text-container">
            <div className="h1">discovered</div>
            <div className="h2">Coding</div>
          </div>
          <span className="h2 thicc">{`/>`}</span>
        </div>
        <div className="img-container">
          <img alt="degree" className="degree" src={degree} />
        </div>
      </div>
    )
  }
}

export default Coding
