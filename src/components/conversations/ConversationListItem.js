import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListGroupItem } from 'reactstrap'
import UserType from '../../store/users/type'
import { Link } from 'react-router-dom'

const ConversationListItem = props => {
  return (
    <ListGroupItem tag={Link} to={`/conversations/${props.otherUser.id}`}>
      {props.otherUser.name}
    </ListGroupItem>
  )
}

ConversationListItem.propTypes = {
  ...UserType,
}

const mapStateToProps = (state, props) => ({
  otherUser: state.users.all.find(user => user.id === props.other_user_id),
})

export default connect(mapStateToProps)(ConversationListItem)
