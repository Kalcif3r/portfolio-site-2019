import React, { Component } from 'react'
import './App.scss'

import { CSSTransition } from 'react-transition-group'

import Intro from './components/Intro'
import Born from './components/Born'

/*

1. Get Scroll Direction
- Toggle animating on. 
2. Transition out previous page
3. transition in next page
- Toggle animating off 


*/

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
      nextPage: 0,
      scrollDirection: +1,
      animating: true,
      componentState: [false, false, false, false, false, false]
    }
  }

  componentDidMount() {
    window.addEventListener('mousewheel', this.handleOnScroll)
    window.addEventListener('scroll', e => {
      e.preventDefault()
    })
    setTimeout(() => {
      this.setState({
        componentState: [true, false]
      })
    }, 200)
  }

  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.handleOnScroll)
  }

  toggleAnimating = () => {
    let { animating } = this.state
    this.setState(
      {
        animating: !animating
      },
      console.log('animation toggled to :', this.state.animating)
    )
  }

  // first render happens through on componentDidMount()
  // on mouse scroll, check for which direction and whether we're above or below the page count ./
  // update scrollDirection ./
  // update nextPage ./

  // trigger the currentPage fading out ./

  // currentPage fading out completing triggers next Page fading in
  // on nextPage entering, set nextPage page as currentPage

  handleOnScroll = e => {
    var { animating, currentPage } = this.state
    var scrollDirection = Math.max(
      -1,
      Math.min(1, e.wheelscrollDirection || e.wheelDelta)
    )
    // inverse the direction because:
    // I need it index to +1 on scroll down
    scrollDirection *= -1
    console.log(scrollDirection, 'scrolldirection')
    if (!animating && currentPage < 5 && scrollDirection > 0) {
      console.log('scrolled Down')
      this.toggleAnimating()
      this.updateScrollDirection(scrollDirection)
      this.updateNextPage(scrollDirection)
      this.triggerTransition(currentPage)
    } else if (!animating && currentPage >= 1 && scrollDirection < 0) {
      console.log('scrolled Up')
      this.toggleAnimating()
      this.updateScrollDirection(scrollDirection)
      this.updateNextPage(scrollDirection)
      this.triggerTransition(currentPage)
    }
  }

  updateScrollDirection = direction => {
    this.setState(
      {
        scrollDirection: direction
      },
      console.log('direction state:', direction)
    )
  }
  updateNextPage = scrollDirection => {
    let { nextPage } = this.state
    this.setState(
      {
        nextPage: nextPage + scrollDirection
      },
      console.log('nextPage state:', nextPage)
    )
  }

  triggerTransition = index => {
    let { componentState } = this.state
    componentState[index] = !componentState[index]
    this.setState(
      {
        componentState: componentState
      },
      console.log('componentState state:', componentState)
    )
  }

  triggerNextTransition = () => {
    let { nextPage, componentState } = this.state
    componentState[nextPage] = !componentState[nextPage]
    this.setState(
      {
        componentState: componentState,
        // i feel uncomfortable that its doing two things but,
        // CURRENT PAGE is updated here.
        currentPage: nextPage
      },
      console.log('componentState state:', this.state)
    )
  }

  render() {
    const showIntro = this.state.componentState[0]
    const showBorn = this.state.componentState[1]
    return (
      <div className="App">
        <CSSTransition
          mountOnEnter={true}
          appear={true}
          in={showIntro}
          timeout={300}
          classNames="intro"
          unmountOnExit
          onEntered={this.toggleAnimating}
          onExited={this.triggerNextTransition}
        >
          <Intro />
        </CSSTransition>
        <CSSTransition
          mountOnEnter={true}
          appear={true}
          in={showBorn}
          timeout={300}
          classNames="intro"
          unmountOnExit
          onEntered={this.toggleAnimating}
          onExited={this.triggerNextTransition}
        >
          <Born />
        </CSSTransition>
      </div>
    )
  }
}

export default App
