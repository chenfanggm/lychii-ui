import React from 'react'
import Canvas from './Canvas'

class AppContainer extends React.Component {

  static state = {
    hello: 1
  }

  render () {
    return (
      <div ref='h1'>
        <Canvas />
        asdfas
        asdfas
      </div>
    )
  }
}

export default AppContainer
