import React, { Component } from 'react'
import './Born.scss'
import { TimelineLite, TweenLite } from 'gsap/all'
import isles from '../resources/isles.png'
class Born extends Component {
  constructor(props) {
    super(props)

    this.timeline = new TimelineLite({ paused: true })
    this.myElements = []
  }
  componentDidMount() {
    this.timeline
      .to(this.myElements[0], 0.6, { x: 10, opacity: 1 })
      .add([
        TweenLite.to(this.myElements[1], 0.4, { x: -10, opacity: 1 }),
        TweenLite.to(this.myElements[2], 0.55, { x: -10, opacity: 1 })
      ])
      .to(this.myElements[3], 0.4, { x: -10, opacity: 1 })
      // .seek(5)
      .play()
  }

  render() {
    return (
      <div className="born-container">
        <div className="img-container">
          <img
            ref={div => (this.myElements[0] = div)}
            alt="isles"
            className="isles"
            src={isles}
          />
        </div>
        <div className="text-container">
          <div className="h1" ref={div => (this.myElements[1] = div)}>
            born
          </div>
          <div className="h1" ref={div => (this.myElements[2] = div)}>
            Maldivian
          </div>
          <div className="h2" ref={div => (this.myElements[3] = div)}>
            1994
          </div>
        </div>
      </div>
    )
  }
}

export default Born
