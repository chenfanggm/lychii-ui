import './Message.scss'
import React from 'react'
import moment from 'moment'
import { DEFAULT_USER_ICON, DEFAULT_USER_NAME } from '../../libs/constants'

class Message extends React.Component {

  render () {
    let { userIcon, username, content, timestamp } = this.props
    userIcon = userIcon || DEFAULT_USER_ICON
    username = username || DEFAULT_USER_NAME
    content = content || ''

    const date = timestamp ? moment(timestamp) : moment().format('hh:mm a')

    return (
      <div className='message-container'>
        <div className='left-container'>
          <div className='user-icon-container'>
            <img className='user-icon'
                 src={userIcon} />
          </div>
        </div>
        <div className='right-container'>
          <div className='meta-container'>
            <span className='username'>
              {username}
            </span>
            <span className='timestamp'>
              {date}
            </span>
          </div>
          <div className='content-container'>
            <div className='content'>
              {content}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Message
