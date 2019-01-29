import React, { Component } from 'react'
import './Portfolio.scss'
import { TimelineLite, TweenLite } from 'gsap/all'
import portfolio from '../resources/portfolio-1.jpg'

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.timeline = new TimelineLite({ paused: true })
    this.myElements = []
    this.images = []
    this.state = {
      isImgLoaded: false
    }
    this.title = 'Freelance Web Developer'
  }

  componentDidMount() {
    this.loadImages()
    // this.timeline.add([
    //   TweenLite.from(this.myElements[0], 0.4, { x: 20, opacity: 0 }),
    //   TweenLite.from(this.myElements[1], 0.5, { x: 20, opacity: 0 }),
    //   TweenLite.from(this.myElements[2], 0.6, { x: 20, opacity: 0 }),
    //   TweenLite.from(this.myElements[3], 0.7, { x: 20, opacity: 0 }),
    //   TweenLite.from(this.myElements[4], 0.7, {
    //     x: 10,
    //     opacity: 0,
    //     delay: 0.1
    //   }),
    //   TweenLite.from(this.myElements[5], 0.7, {
    //     x: 10,
    //     opacity: 0,
    //     delay: 0.2
    //   })
    // ])

    // .seek(5)
  }

  loadImages() {
    let image = new Image()
    image.onload = () => {
      this.setState({
        isImgLoaded: true
      })
      this.timeline.play()
    }
    image.src = portfolio
  }

  render() {
    return (
      <div className="portfolio-container">
        <div className="text-section">
          <div className="h1 year">{this.props.year}</div>
          <div className="h2 country">{this.props.country}</div>
          <p className="job-title">As a {this.props.position}</p>
          <p className="main-text">{this.props.bodyText}</p>
        </div>
        <div className="image-section">
          <img src={portfolio} alt="" />
        </div>
      </div>
    )
  }
}

export default Portfolio
