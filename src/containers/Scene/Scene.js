import './Scene.scss'
import React from 'react'
import Header from '../Header'
import Stage from '../Stage'
import Terminal from '../Terminal'

class OneColLayout extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      terminalHeight: 100
    }
  }

  render () {
    return (
      <div className='scene-container'>
        <Header />
        <Stage />
        <Terminal height={this.state.terminalHeight} />
      </div>
    )
  }
}

export default OneColLayout

