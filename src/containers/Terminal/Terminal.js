import './Terminal.scss'
import React from 'react'

class Terminal extends React.Component {

  constructor(props) {
    super(props)
    this.onEnterDown = this.onEnterDown.bind(this)
  }

  onEnterDown(event) {

  }

  render () {
    let { height } = this.props
    return (
      <div className='terminal-container'>
        <input type='text'
               className='terminal-input'
               style={{height}}
        onKeyDown={this.onEnterDown}/>
      </div>
    )
  }
}

export default Terminal
