import React, { Component } from 'react'
import './Coding.scss'
import { TimelineLite, TweenLite } from 'gsap'
import degree from '../resources/degree.png'

class Coding extends Component {
  constructor(props) {
    super(props)
    this.timeline = new TimelineLite({ paused: true })
    this.myElements = []
    this.codingElements = []
    this.codingLetters = ['C', 'o', 'd', 'i', 'n', 'g']
  }

  loadImages() {
    let image = new Image()
    image.onload = () => {
      console.log('playing timelien')
      this.timeline.play()
    }
    image.src = degree
  }

  componentDidMount() {
    this.loadImages()
    this.timeline
      .to(this.myElements[0], 0.6, { x: -10, opacity: 1 })
      .to(this.myElements[1], 0.4, { x: 10, opacity: 1, delay: 0.2 })
      .to(this.codingElements[6], 0.3, {
        opacity: 1,
        repeatDelay: 0.3,
        repeat: -1,
        yoyo: true
      })
      .add([
        TweenLite.to(this.codingElements[6], 0.3, {
          opacity: 1,
          repeatDelay: 0.3,
          repeat: 0,
          yoyo: false
        }),
        TweenLite.to(this.codingElements[0], 0.1, { opacity: 1, delay: 0.1 }),
        TweenLite.to(this.codingElements[6], 0.1, { x: '58', delay: 0.1 })
      ])
      .add([
        TweenLite.to(this.codingElements[1], 0.1, { opacity: 1, delay: 0.1 }),
        TweenLite.to(this.codingElements[6], 0.1, { x: 111, delay: 0.1 })
      ])
      .add([
        TweenLite.to(this.codingElements[2], 0.1, { opacity: 1 }),
        TweenLite.to(this.codingElements[6], 0.1, { x: 163 })
      ])
      .add([
        TweenLite.to(this.codingElements[3], 0.1, { opacity: 1 }),
        TweenLite.to(this.codingElements[6], 0.1, { x: 180 })
      ])
      .add([
        TweenLite.to(this.codingElements[4], 0.1, { opacity: 1 }),
        TweenLite.to(this.codingElements[6], 0.1, { x: 228 })
      ])
      .add([
        TweenLite.to(this.codingElements[5], 0.1, { opacity: 1 }),
        TweenLite.to(this.codingElements[6], 0.1, { x: 280 })
      ])
      .to(this.codingElements[6], 0.3, {
        opacity: 0,
        repeatDelay: 0.3,
        repeat: -1,
        yoyo: true
      })
      .add([
        TweenLite.to(this.codingElements[6], 0.3, {
          opacity: 0.3,
          repeatDelay: 0.3,
          repeat: 0,
          yoyo: false,
          delay: 0.5,
          x: 0,
          width: '18em'
        })
      ])
      .add([
        TweenLite.from(this.myElements[3], 0.4, {
          y: -10,
          opacity: 0,
          delay: 0.3
        }),
        TweenLite.from(this.myElements[4], 0.4, {
          y: -10,
          opacity: 0,
          delay: 0.3
        })
      ])
      .to(this.codingElements[6], 0.1, {
        width: '1em',
        x: 280,
        opacity: 1,
        delay: 0.3
      })
      .to(this.codingElements[6], 0.3, {
        opacity: 0,
        repeatDelay: 0.3,
        repeat: -1,
        yoyo: true
      })

    /*.add([
        TweenLite.to(this.codingElements[0], 0.1, { opacity: 1, delay: 0.2 }),
        TweenLite.to(this.codingElements[1], 0.1, { opacity: 1, delay: 0.4 }),
        TweenLite.to(this.codingElements[2], 0.1, { opacity: 1, delay: 0.6 }),
        TweenLite.to(this.codingElements[3], 0.1, { opacity: 1, delay: 0.7 }),
        TweenLite.to(this.codingElements[4], 0.1, { opacity: 1, delay: 0.8 }),
        TweenLite.to(this.codingElements[5], 0.1, { opacity: 1, delay: 1 })
        // TweenLite.to(this.myElements[2], 2, {
        //   text: 'Coding',
        //   ease: 'Power4.easeIn'
        // })
      ])*/
    // .to(this.myElements[3], 0.4, { x: -10, opacity: 1 })
    // .seek(5)
  }

  render() {
    return (
      <div className="coding-container">
        <div className="text-block">
          <span
            ref={div => (this.myElements[3] = div)}
            className="h2 thicc left"
          >
            {`<`}
          </span>

          <div className="text-container">
            <div ref={div => (this.myElements[1] = div)} className="h1">
              discovered
            </div>
            <div className="coding">
              <div
                className="line"
                ref={div => (this.codingElements[6] = div)}
              />
              {this.codingLetters.map((letter, index) => {
                return (
                  <div
                    ref={div => (this.codingElements[index] = div)}
                    className="h2"
                  >
                    {letter}
                  </div>
                )
              })}
            </div>
          </div>

          <span
            ref={div => (this.myElements[4] = div)}
            className="h2 thicc right"
          >
            {`/>`}
          </span>
        </div>
        <div className="img-container">
          <img
            ref={div => (this.myElements[0] = div)}
            alt="degree"
            className="degree"
            src={degree}
          />
        </div>
      </div>
    )
  }
}

export default Coding
