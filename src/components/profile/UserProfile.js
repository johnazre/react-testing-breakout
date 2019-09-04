import React from 'react'
import { Container } from 'reactstrap'
import { Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import StatusList from '../reusable/statuses/StatusList'
import { Button } from 'reactstrap'
import BasicInfo from './BasicInfo'
import UserType from '../../store/users/type'

const styles = {
  banner: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  bannerImg: {
    width: '100%',
  },
  section: {
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    padding: '15px 0',
  },
  topSection: {},
}

const UserProfile = ({ user }) => {
  if (user) {
    return (
      <Container fluid>
        <Row>
          <Col style={styles.banner}>
            <img
              src={`https://via.placeholder.com/1366x400?text=Profile of: ${user.name}`}
              alt="banner"
              style={styles.bannerImg}
            />
          </Col>
        </Row>
        <Row style={styles.section}>
          <Col sm={{ offset: 10 }}>
            <Button>Add as a friend</Button>
          </Col>
        </Row>
        <Row style={styles.section}>
          <Col className="middle-section">
            <BasicInfo user={user} />
          </Col>
        </Row>
        <Row style={styles.section}>
          <StatusList />
        </Row>
      </Container>
    )
  } else {
    return <div>Loading...</div>
  }
}

const mapStateToProps = (state, props) => {
  console.log(props)
  return {
    user: state.users.all.filter(
      user => user.id === Number(props.match.params.user_id)
    )[0],
  }
}

UserProfile.propTypes = {
  ...UserType,
}

export default connect(mapStateToProps)(UserProfile)
