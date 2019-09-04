import React from 'react'
import { ListGroupItem } from 'reactstrap'
import { Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import StatusType from '../../../store/statuses/type'
import CommentList from '../comments/CommentList'

const Status = ({ status, user }) => {
  if (user) {
    return (
      <ListGroupItem>
        <Row>
          <Col xs="2">
            <img style={{ borderRadius: '50%' }} src={user.photo_url} alt="" />
          </Col>
          <Col xs="7">
            <h5>{user.name}</h5>
            <p>{status.content}</p>
          </Col>
          <Col>
            <Moment format="MM/DD/YYYY HH:mm A">{status.createdAt}</Moment>
          </Col>
        </Row>
        <Row>
          <Col>
            <CommentList status_id={status.id} />
          </Col>
        </Row>
      </ListGroupItem>
    )
  } else {
    return <div>Loading...</div>
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.users.all.filter(user => user.id === props.status.user_id)[0],
  }
}

Status.propTypes = {
  ...StatusType,
}

export default connect(mapStateToProps)(Status)
