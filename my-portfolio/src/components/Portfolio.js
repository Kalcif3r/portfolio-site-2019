import React, { Component } from 'react'
import './Portfolio.scss'
import { TimelineLite, TweenLite } from 'gsap'

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.timeline = new TimelineLite({ paused: true })
    this.myElements = []
    this.state = {
      isImgLoaded: false
    }
  }

  componentDidMount() {
    this.loadImages()
    this.timeline.add([
      TweenLite.from(this.myElements[0], 0.4, { x: 20, opacity: 0 }),
      TweenLite.from(this.myElements[1], 0.5, { x: 20, opacity: 0 }),
      TweenLite.from(this.myElements[2], 0.6, { x: 20, opacity: 0 }),
      TweenLite.from(this.myElements[3], 0.7, { x: 20, opacity: 0 }),
      TweenLite.from(this.myElements[4], 0.7, { x: 20, opacity: 0, delay: 0.1 })
    ])
    //

    // .seek(5)

    // show first image
    // show next image
    // show
  }

  // so we have an array of urls
  // we want the first one to start loading,
  // on the first one completing loading, we want to trigger the rest
  // once loaded, the transitions begin.

  // pause animation on hoverOn
  // resume animation on hoverOff

  loadImages() {
    let image = new Image()
    image.onload = () => {
      this.setState({
        isImgLoaded: true
      })
      this.timeline.play()
    }
    image.src = this.props.imageURL
  }

  render() {
    return (
      <div className="portfolio-container">
        <div className="text-section">
          <div ref={div => (this.myElements[0] = div)} className="h1 year">
            {this.props.year}
          </div>
          <div ref={div => (this.myElements[1] = div)} className="h2 country">
            {this.props.country}
          </div>
          <p ref={div => (this.myElements[2] = div)} className="job-title">
            As a {this.props.position}
          </p>
          <p ref={div => (this.myElements[3] = div)} className="main-text">
            {this.props.bodyText}
          </p>
        </div>
        <div className="image-section">
          <a
            rel="noopener norefferer"
            target="_blank"
            href={this.props.portfolioURL}
          >
            <img
              ref={div => (this.myElements[4] = div)}
              src={this.props.imageURL}
              alt=""
            />
          </a>
        </div>
      </div>
    )
  }
}

export default Portfolio
