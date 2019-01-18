import React, { Component } from 'react'
import './Portfolio.scss'
import portfolio from '../resources/portfolio-1.png'
class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className="title-container">
          <div className="h1">2018</div>
          <div className="h1">worked</div>
          <div className="h2">Sri Lanka</div>
          <p>As A Social Media Manager</p>
        </div>
        <div className="details-container">
          <img alt="portfolio-1" className="portfolio-img" src={portfolio} />
          <div className="carousel-buttons">
            <span className="circle first" />
            <span className="circle" />
            <span className="circle" />
          </div>
          <p className="text-section">Text goes here</p>
        </div>
      </div>
    )
  }
}

export default Portfolio
