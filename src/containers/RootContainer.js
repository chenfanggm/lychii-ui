import React from 'react'
import Scene from './Scene'

class RootContainer extends React.Component {
  render () {
    return (
      <div style={{width: '100%', height: '100%'}} >
        <Scene />
      </div>
    )
  }
}

export default RootContainer
