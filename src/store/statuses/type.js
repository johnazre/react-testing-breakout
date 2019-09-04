import PropTypes from 'prop-types'

export default {
  status: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    content: PropTypes.string,
    createdAt: PropTypes.string,
  }),
}
