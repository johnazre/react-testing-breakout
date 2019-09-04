import React from 'react'
import ListGroup from 'reactstrap/es/ListGroup'
import ListGroupItem from 'reactstrap/es/ListGroupItem'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <ListGroup>
      <ListGroupItem tag={Link} to="/dashboard">
        Home
      </ListGroupItem>
      <ListGroupItem tag={Link} to="/conversations">
        Conversations
      </ListGroupItem>
      <ListGroupItem tag={Link} to="/manage-friends">
        Manage Friends
      </ListGroupItem>
      <ListGroupItem tag={Link} to="/settings">
        User Settings
      </ListGroupItem>
    </ListGroup>
  )
}

export default SideNav
