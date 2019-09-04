import React from 'react'
import { connect } from 'react-redux'
import Status from './Status'
import { ListGroup } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import StatusType from '../../../store/statuses/type'

const StatusList = props => {
  let listOfStatuses = props.statuses.map(status => (
    <Status key={status.id} status={status} />
  ))
  return <ListGroup>{listOfStatuses}</ListGroup>
}

const mapStateToProps = (state, props) => {
  return {
    statuses: props.onDashboard
      ? state.statuses.all
      : state.statuses.all.filter(
          status => status.userId === Number(props.match.params.user_id)
        ),
  }
}

StatusList.propTypes = {
  ...StatusType,
}

export default withRouter(connect(mapStateToProps)(StatusList))
