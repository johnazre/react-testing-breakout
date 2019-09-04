import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ConversationListItem from './ConversationListItem'
import { ListGroup } from 'reactstrap'
import { withRouter } from 'react-router-dom'

const ConversationList = props => {
  const listOfConversationListItems = props.conversationsWithUsers.map(
    (id, i) => <ConversationListItem key={i} other_user_id={id} />
  )
  return <ListGroup>{listOfConversationListItems}</ListGroup>
}

ConversationList.propTypes = {
  conversationsWithUsers: PropTypes.arrayOf(PropTypes.number),
}

const mapStateToProps = state => ({
  // Create an array of the user ids I am having a conversation with
  conversationsWithUsers: state.messages.all.reduce((acc, msg) => {
    // if the array already doesn't already have them, add them, otherwise ignore it and move on to the next one
    if (!acc.includes(msg.recipient_id) && !acc.includes(msg.sender_id)) {
      // if the message's recipient_id is mine, push the sender's id to the array
      if (msg.recipient_id === state.users.loggedInUser.id) {
        acc.push(msg.sender_id)
      } else {
        // if the message's sender_id is mine, push the recipient's id to the array
        acc.push(msg.recipient_id)
      }
    }
    return acc
  }, []),
})

export default withRouter(connect(mapStateToProps)(ConversationList))
