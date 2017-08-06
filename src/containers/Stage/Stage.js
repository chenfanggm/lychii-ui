import './Stage.scss'
import React from 'react'
import MessageBoard from '../MessageBoard'


class Stage extends React.Component {
  render () {
    const { messages } = this.props

    return (
      <div className="stage-container">
        <MessageBoard messages={messages} />
      </div>
    )
  }
}

export default Stage
