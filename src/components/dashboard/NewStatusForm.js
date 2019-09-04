import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { addStatus } from '../../store/statuses/actions'
import { Card, CardBody } from 'reactstrap'

class NewStatusForm extends Component {
  state = {
    newStatus: '',
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.dispatch(
      addStatus({
        content: this.state.newStatus,
      })
    )
  }

  render() {
    return (
      <Card>
        <CardBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="newStatus">Add New Status</Label>
              <Input
                type="text"
                id="newStatus"
                onChange={e => this.setState({ newStatus: e.target.value })}
              />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    )
  }
}

export default connect()(NewStatusForm)
