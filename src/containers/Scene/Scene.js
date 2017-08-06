import './Scene.scss'
import React from 'react'
import Header from '../Header'
import Stage from '../Stage'
import Terminal from '../Terminal'

class Scene extends React.Component {

  constructor(props) {
    super(props)
    this.processTerminalInput.bind(this)

    this.state = {
      terminalHeight: 45,
      messages: [
        { username: 'TwoOClockAm', payload: 'Hi Lychii, how are you doing today.'},
        { username: 'TwoOClockAm', payload: 'I\'m having some questions for you.'},
        { username: 'TwoOClockAm', payload: 'Do you happen to know how can I config the app?'},
        { username: 'TwoOClockAm', payload: 'Do you mean the gear icon on the top right?'}
      ]
    }
  }

  processTerminalInput(value) {
    this.setState({ payload: value });
  }

  render() {
    const { messages, terminalHeight}= this.state

    return (
      <div className='scene-container'>
        <Header />
        <Stage messages={messages} />
        <Terminal height={terminalHeight}
                  processTerminalInput={this.processTerminalInput} />
      </div>
    )
  }
}

export default Scene

