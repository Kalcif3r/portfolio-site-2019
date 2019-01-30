import React, { Component } from 'react'
import './Gaming.scss'
import { TimelineLite, TweenLite } from 'gsap'
import controller from '../resources/controller.png'

class Gaming extends Component {
  constructor(props) {
    super(props)

    this.timeline = new TimelineLite({ paused: true })
    this.myElements = []
  }

  loadImages() {
    let image = new Image()
    image.onload = () => {
      console.log('playing timelien')
      this.timeline.play()
    }
    image.src = controller
  }

  componentDidMount() {
    this.loadImages()
    this.timeline
      .from(this.myElements[0], 0.6, { y: -10, opacity: 0 })
      .add([
        TweenLite.to(this.myElements[1], 0.4, { y: -10, opacity: 1 }),
        TweenLite.to(this.myElements[2], 0.4, {
          y: -10,
          opacity: 1,
          delay: 0.1
        })
      ])
      .to(this.myElements[3], 0.5, { y: -10, opacity: 1 })

    // .seek(5)
  }
  render() {
    return (
      <div className="page gaming-container">
        <div>
          <img
            ref={div => (this.myElements[0] = div)}
            alt="controller"
            className="controller"
            src={controller}
          />
        </div>
        <div className="text-container">
          <div className="text">
            <div ref={div => (this.myElements[1] = div)} className="h1">
              grew
            </div>

            <div ref={div => (this.myElements[2] = div)} className="h1">
              up
            </div>
          </div>
          <div ref={div => (this.myElements[3] = div)} className="h2">
            Gaming
          </div>
        </div>
      </div>
    )
  }
}

export default Gaming
