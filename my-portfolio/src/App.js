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
      animating: false,
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
    this.setState((prev, props) => {
      return {
        animating: true
      }
    }, console.log('animation toggled to :', this.state.animating))
  }

  updateCurrentPage = scrollDirection => {
    let { currentPage } = this.state
    this.setState((prev, props) => {
      return {
        currentPage: currentPage + scrollDirection
      }
    })
  }

  handleOnScroll = e => {
    var { animating, currentPage } = this.state
    var scrollDirection = Math.max(
      -1,
      Math.min(1, e.wheelscrollDirection || e.wheelDelta)
    )
    // var scrollDirection = e
    console.log(scrollDirection, 'scrolldirection')
    if (!animating && currentPage < 5 && scrollDirection > 0) {
      console.log('firinghandleonscroll')
      // if scrolling down
      // toggle Animating to true.
      this.triggerTransition(currentPage, currentPage + scrollDirection)
      // fade out current page
      // fade in next page
      // toggle animating to false.
      this.updateCurrentPage(scrollDirection)
    } else if (!animating && currentPage >= 1 && scrollDirection < 0) {
      // if scrolling up
      this.triggerTransition(currentPage, currentPage + scrollDirection)
      this.updateCurrentPage(scrollDirection)
    }
  }

  triggerTransition = (current, next) => {
    // get components array
    console.log(current, next)
    let { componentState } = this.state
    console.log(this.state.componentState)
    // transition out
    componentState[current] = false
    // transition in
    componentState[next] = true
    // update state
    this.setState(
      {
        componentState: componentState
      },
      console.log(this.state.componentState)
    )
  }

  buttonPush = () => {
    this.setState({
      componentState: [false, true]
    })
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
        >
          <Born />
        </CSSTransition>
      </div>
    )
  }
}

export default App
