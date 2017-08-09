import './Scene.scss'
import React from 'react'
import Header from '../Header'
import Stage from '../Stage'
import Terminal from '../Terminal'
import { getAllMessage } from '../../services/MessageService'

class Scene extends React.Component {

  constructor(props) {
    super(props)
    this.processTerminalInput = this.processTerminalInput.bind(this)

    this.state = {
      terminalHeight: 45,
      messages: []
    }
  }

  componentDidMount() {
    getAllMessage()
      .then((messages) => {
        this.setState({ messages: messages })
      })
  }

  processTerminalInput(value) {
    this.setState({ messages: this.state.messages.concat([{ username: 'TwoOClockAM', payload: value }]) })
  }

  render() {
    const { messages, terminalHeight } = this.state

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

