import React from 'react'
import ConversationList from './ConversationList'
import ConversationView from './ConversationView'
import { Col, Container, Row } from 'reactstrap'

const styles = {
  noPadding: {
    padding: 0,
  },
}
const Conversations = props => {
  console.log('params', props.match)
  let other_person = Number(props.match.params.id) || 0
  return (
    <Row>
      <Col style={styles.noPadding} xs={4}>
        <ConversationList other_person={other_person} />
      </Col>
      <Col style={styles.noPadding}>
        <ConversationView other_person={other_person} />
      </Col>
    </Row>
  )
}

export default Conversations
