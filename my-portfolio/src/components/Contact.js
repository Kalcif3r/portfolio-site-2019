import React, { Component } from 'react'
import './Contact.scss'
import { TimelineLite, TweenLite } from 'gsap'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.timeline = new TimelineLite({ paused: true })
    this.myElements = []
    this.state = {
      isImgLoaded: false
    }
  }

  componentDidMount() {
    // this.timeline.add([
    //   TweenLite.from(this.myElements[0], 0.4, { x: 20, opacity: 0 }),
    //   TweenLite.from(this.myElements[1], 0.5, { x: 20, opacity: 0 }),
    //   TweenLite.from(this.myElements[2], 0.6, { x: 20, opacity: 0 }),
    //   TweenLite.from(this.myElements[3], 0.7, { x: 20, opacity: 0 }),
    //   TweenLite.from(this.myElements[4], 0.7, { x: 20, opacity: 0, delay: 0.1 })
    // ]).play()
  }

  render() {
    return (
      <div className="contact-container">
        <div className="text-section">
          <div className="h1 ">Say Hello!</div>
          <div className="h2 ">Below</div>
          <p className="detail"> </p>
          <p>at ikhwan.speaking@gmail.com</p>
          <p>
            on{' '}
            <a
              className="link"
              href="https://www.instagram.com/ikhwan.speaking/"
            >
              instagram
            </a>
          </p>
          <p>
            on{' '}
            <a className="link" href="https://twitter.com/IkhwanSpeaking">
              twitter
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Contact
