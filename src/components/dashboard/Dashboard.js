import React from 'react'
import NewStatusForm from './NewStatusForm'
import StatusList from '../reusable/statuses/StatusList'

const Dashboard = () => {
  return (
    <div>
      <NewStatusForm />
      <StatusList onDashboard />
    </div>
  )
}

export default Dashboard
