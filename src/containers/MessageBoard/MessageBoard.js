import React from 'react'
import Message from '../../components/Message'

class MessageBoard extends React.Component {


  render() {
    let { messages } = this.props
    messages = messages || []

    const messageList = messages.map((message, index) => {
      return <Message key={index}
                      username={message.username}
                      content={message.payload} />
    })

    return (
      <div className='message-board-container'>
        {messageList}
      </div>
    )
  }
}

export default MessageBoard
