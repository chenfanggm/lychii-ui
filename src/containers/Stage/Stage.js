import './Stage.scss'
import React from 'react'
import MessageBoard from '../MessageBoard'


class Stage extends React.Component {
  render () {
    return (
      <div className="stage-container">
        <MessageBoard />
      </div>
    )
  }
}

export default Stage
