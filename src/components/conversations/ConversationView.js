import React from 'react'
// import PropTypes from 'prop-types'
import ConversationViewMsg from './ConversationViewMsg'
import { connect } from 'react-redux'
import { ListGroup } from 'reactstrap'
import NewConversationForm from './NewConversationForm'
import NewMsgForm from './NewMsgForm'
import ScrollToBottom from 'react-scroll-to-bottom'

const styles = {
  messagesArea: {
    maxHeight: '80vh',
    overflow: 'auto',
  },
}

const ConversationView = props => {
  let listOfMsgs = props.messages.map(msg => (
    <ConversationViewMsg key={msg.id} msg={msg} />
  ))
  if (props.other_person) {
    return (
      <>
        <ListGroup style={styles.messagesArea}>{listOfMsgs}</ListGroup>
        <NewMsgForm other_person={props.other_person} />
      </>
    )
  } else {
    return <NewConversationForm />
  }
}

ConversationView.propTypes = {}

const mapStateToProps = (state, props) => {
  return {
    messages: state.messages.all.filter(
      msg =>
        msg.sender_id === props.other_person ||
        msg.recipient_id === props.other_person
    ),
  }
}

export default connect(mapStateToProps)(ConversationView)
