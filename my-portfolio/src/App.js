import React, { Component } from 'react'
import './App.scss'

import { CSSTransition } from 'react-transition-group'

import Intro from './components/Intro'
import Born from './components/Born'
import Gaming from './components/Gaming'
import Coding from './components/Coding'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

/*

1. Get Scroll Direction
- Toggle animating on. 
2. Transition out previous page
3. transition in next page
- Toggle animating off 


*/

class App extends Component {
  state = {
    currentPage: 0,
    nextPage: 0,
    scrollDirection: +1,
    animating: true,
    componentState: [false, false, false, false, false, false],
    lastY: 0
  }

  componentDidMount() {
    window.addEventListener('touchmove', this.handleOnScroll)
    window.addEventListener('mousewheel', this.handleOnScroll)
    window.addEventListener('scroll', e => {
      e.preventDefault()
    })
    setTimeout(() => {
      this.setState({
        componentState: [true, false, false, false, false, false]
      })
    }, 200)
  }

  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.handleOnScroll)
  }

  toggleAnimating = () => {
    this.setState(prevState => {
      return { animating: !prevState.animating }
    }, console.log('animation toggled to :', this.state.animating))
  }

  // first render happens through on componentDidMount()
  // on mouse scroll, check for which direction and whether we're above or below the page count ./
  // update scrollDirection ./
  // update nextPage ./

  // trigger the currentPage fading out ./

  // currentPage fading out completing triggers next Page fading in
  // on nextPage entering, set nextPage page as currentPage

  handleOnScroll = e => {
    let { lastY } = this.state
    var { animating, currentPage } = this.state
    var scrollDirection = Math.max(
      -1,
      Math.min(1, e.wheelscrollDirection || e.wheelDelta)
    )
    var currentY = e.touches[0].clientY
    if (currentY > lastY) {
      scrollDirection = -1
      console.log('scrolldow')
    } else if (currentY < lastY) {
      scrollDirection = 1
      console.log('scrolldup')
      // moved up
    }
    this.setState({ lastY: currentY })
    // inverse the direction because:
    // I need it index to +1 on scroll down
    scrollDirection *= -1
    console.log(scrollDirection, 'scrolldirection')
    if (
      !animating &&
      currentPage < 5 &&
      (scrollDirection > 0 || currentY > lastY)
    ) {
      console.log('scrolled Down')
      this.toggleAnimating()
      this.updateScrollDirection(scrollDirection)
      this.updateNextPage(scrollDirection)
      this.triggerTransition(currentPage)
    } else if (
      !animating &&
      currentPage >= 1 &&
      (scrollDirection < 0 || currentY < lastY)
    ) {
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
    let intro = <Intro />
    let born = <Born />
    let gaming = <Gaming />
    let coding = <Coding />
    let portfolio = <Portfolio />
    let contact = <Contact />
    const components = [intro, born, gaming, coding, portfolio, contact]

    return (
      <div className="App">
        {components.map((component, index) => {
          return (
            <CSSTransition
              mountOnEnter={true}
              appear={true}
              in={this.state.componentState[index]}
              timeout={300}
              classNames="intro"
              unmountOnExit
              onEntered={this.toggleAnimating}
              onExited={this.triggerNextTransition}
            >
              {component}
            </CSSTransition>
          )
        })}

        <Footer />
      </div>
    )
  }
}

export default App
