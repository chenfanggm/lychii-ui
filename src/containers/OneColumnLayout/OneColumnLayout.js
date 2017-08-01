import React from 'react'
import Header from '../Header'
import Canvas from '../Canvas'

class OneColumnLayout extends React.Component {
  render () {
    return (
      <div style={{width: '100%'}}>
        <Header />
        <Canvas />
      </div>
    )
  }
}

export default OneColumnLayout

