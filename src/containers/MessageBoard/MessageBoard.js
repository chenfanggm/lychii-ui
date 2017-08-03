import React from 'react'
import Message from '../../components/Message'

class MessageBoard extends React.Component {

  testMessages = [
    { username: 'TwoOClockAm', content: 'Hi Lychii, how are you doing today.'},
    { username: 'TwoOClockAm', content: 'I\'m having some questions for you.'},
    { username: 'TwoOClockAm', content: 'Do you happen to know how can I config the app?'},
    { username: 'TwoOClockAm', content: 'Do you mean the gear icon on the top right?'}
  ]

  render() {
    const messages = this.testMessages.map((message, index) => {
      return <Message key={index}
                      username={message.username}
                      content={message.content} />
    })

    return (
      <div className='message-board-container'>
        {messages}
      </div>
    )
  }
}

export default MessageBoard
