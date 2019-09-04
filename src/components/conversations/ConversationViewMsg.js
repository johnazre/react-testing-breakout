import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem } from 'reactstrap'

const ConversationViewMsg = props => {
  return (
    <ListGroupItem>
      <p>Sender: {props.msg.sender_id}</p>
      <p>{props.msg.body}</p>
    </ListGroupItem>
  )
}

ConversationViewMsg.propTypes = {}

export default ConversationViewMsg
