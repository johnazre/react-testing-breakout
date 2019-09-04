import React from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import { addMessage } from '../../store/messages/actions'
import { connect } from 'react-redux'

class NewMsgForm extends React.Component {
  state = {
    body: '',
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.addMessage({
      sender_id: this.props.loggedInUser.id,
      recipient_id: this.props.other_person,
      body: this.state.body,
    })

    this.setState({ body: '' })
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup style={{ width: '100%' }}>
          <Input
            autoFocus
            style={{ width: '100%' }}
            type="text"
            name="body"
            placeholder="Write your new message here..."
            onChange={e => this.setState({ body: e.target.value })}
            value={this.state.body}
          />
        </FormGroup>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.users.loggedInUser,
})

export default connect(
  mapStateToProps,
  { addMessage }
)(NewMsgForm)
