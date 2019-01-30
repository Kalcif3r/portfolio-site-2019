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

*/

class App extends Component {
  constructor(props) {
    super(props)
    // Don't call this.setState() here!
    this.state = {
      currentPage: 0,
      nextPage: 0,
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
      let {
        country,
        year,
        position,
        bodyText,
        imageURL,
        portfolioURL
      } = cvEntry
      return (
        <Portfolio
          key={position}
          country={country}
          year={year}
          position={position}
          imageURL={imageURL}
          bodyText={bodyText}
          portfolioURL={portfolioURL}
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
          true,
          false,
          false,
          false,
          false,
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
    }
    this.setState({ lastY: currentY })
    scrollDirection *= -1
    console.log(scrollDirection, 'scrolldirection')
    if (
      !animating &&
      currentPage < this.components.length - 1 &&
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
              key={index}
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
