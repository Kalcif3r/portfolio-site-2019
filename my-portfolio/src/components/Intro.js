import React, { Component } from 'react'
import { TimelineLite } from 'gsap/all'
import './Intro.scss'

class Intro extends Component {
  constructor(props) {
    super(props)

    this.timeline = new TimelineLite({ paused: true })
    this.myElements = []
    this.wordsArray = [
      { name: 'life' },
      { name: 'as' },
      { name: 'lived' },
      { name: 'by' }
    ]
  }

  componentDidMount() {
    this.timeline
      .to(this.myElements[0], 0.6, { y: 1, opacity: 1, delay: 0.5 })
      .to(this.myElements[1], 0.4, { y: 1, opacity: 1 })
      .to(this.myElements[2], 0.8, { y: 1, opacity: 1 })
      .to(this.myElements[3], 0.4, { y: 1, opacity: 1 })
      .to(this.myElements[4], 1, { y: 1, opacity: 1, delay: 0.15 })
      // .seek(5)
      .play()
  }

  animate = () => {}
  render() {
    return (
      <div className="page intro-container" ref={c => (this.container = c)}>
        <div className="h1">
          {this.wordsArray.map((element, index) => (
            <div
              id={element.name}
              key={element.name}
              ref={div => (this.myElements[index] = div)}
            >
              {element.name}&nbsp;
            </div>
          ))}
        </div>
        <div className="h2" id="ikhwan" ref={div => (this.myElements[4] = div)}>
          Ikhwan
        </div>
      </div>
    )
  }
}

export default Intro
