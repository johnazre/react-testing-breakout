import React, { Component } from 'react'
import './App.css'
import TopNav from './components/layout/TopNav'
import { Container, Row, Col } from 'reactstrap'
import SideNav from './components/layout/SideNav'
import Dashboard from './components/dashboard/Dashboard'
import { connect } from 'react-redux'
import { fetchAllStatuses } from './store/statuses/actions'
import { fetchAllUsers } from './store/users/actions'
import { fetchAllComments } from './store/comments/actions'
import { fetchAllMessagesByUserId } from './store/messages/actions'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/auth/Login'
import UserProfile from './components/profile/UserProfile'
import Conversations from './components/conversations/Conversations'

const styles = {
  noPadding: {
    padding: 0,
  },
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllStatuses())
    this.props.dispatch(fetchAllUsers())
    this.props.dispatch(fetchAllComments())
    this.props.dispatch(fetchAllMessagesByUserId(this.props.loggedInUser.id))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Container fluid>
            <Row>
              <Col xs="2" style={styles.noPadding}>
                <SideNav />
              </Col>
              <Col>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/profile/:user_id" component={UserProfile} />
                  <Route
                    exact
                    path="/conversations"
                    component={Conversations}
                  />
                  <Route path="/conversations/:id" component={Conversations} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.users.loggedInUser,
})

export default connect(mapStateToProps)(App)
