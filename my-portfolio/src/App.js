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
import cvEntries from './portfolioText.js'

/*

1. Get Scroll Direction
- Toggle animating on. 
2. Transition out previous page
3. transition in next page
- Toggle animating off 

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenLite.min.js"></script>

*/

class App extends Component {
  constructor(props) {
    super(props)
    // Don't call this.setState() here!
    this.state = {
      currentPage: 4,
      nextPage: 4,
      scrollDirection: +1,
      animating: true,
      componentState: [false, false, false, false, false, false],
      lastY: 0
    }
    let intro = <Intro />
    let born = <Born />
    let gaming = <Gaming />
    let coding = <Coding />
    let portfolio = cvEntries.map(cvEntry => {
      let { country, year, position, bodyText } = cvEntry
      return (
        <Portfolio
          country={country}
          year={year}
          position={position}
          bodyText={bodyText}
        />
      )
    })
    let contact = <Contact />
    this.components = [intro, born, gaming, coding, ...portfolio, contact]
  }

  componentDidMount() {
    window.addEventListener('touchmove', this.handleOnScroll)
    window.addEventListener('mousewheel', this.handleOnScroll)
    window.addEventListener('scroll', e => {
      e.preventDefault()
    })
    setTimeout(() => {
      this.setState({
        componentState: [
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false
        ]
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
    var currentY = e.touches && e.touches[0].clientY
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
      currentPage < this.state.componentState.length - 1 &&
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
    return (
      <div className="App">
        {this.components.map((component, index) => {
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
