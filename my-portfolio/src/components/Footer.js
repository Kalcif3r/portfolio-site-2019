import React, { Component } from 'react'
import './Footer.scss'
import signature from '../resources/signature.png'
class Footer extends Component {
  render() {
    return <img alt="signature" className="signature" src={signature} />
  }
}

export default Footer
