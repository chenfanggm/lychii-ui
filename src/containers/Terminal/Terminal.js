import './Terminal.scss'
import React from 'react'

class Terminal extends React.Component {
  render () {
    let { height } = this.props
    return (
      <div className='terminal-container'
           style={{height: height}} >
        <input type='text' />
      </div>
    )
  }
}

export default Terminal
