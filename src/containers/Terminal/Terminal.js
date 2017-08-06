import './Terminal.scss'
import React from 'react'
import { KEY_CODE } from '../../libs/constants'

class Terminal extends React.Component {

  constructor(props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  onKeyDown(event) {
    const { processTerminalInput } = this.props

    if (event.keyCode === KEY_CODE.ENTER) {
      processTerminalInput(event.target.value)
      event.target.value = ''
    }
  }

  render() {
    let { height } = this.props
    return (
      <div className='terminal-container'>
        <input type='text'
               className='terminal-input'
               style={{height}}
               onKeyDown={this.onKeyDown}/>
      </div>
    )
  }
}

export default Terminal
