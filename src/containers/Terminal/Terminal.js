import './Terminal.scss'
import React from 'react'

class Terminal extends React.Component {
  render () {
    let { height } = this.props
    return (
      <div className='terminal-container'>
        <input type='text'
               className='terminal-input'
               style={{height}}/>
      </div>
    )
  }
}

export default Terminal
