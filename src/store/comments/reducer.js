import * as types from './constants'

const initialState = {
  all: [],
  err: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_COMMENTS_PENDING:
    case types.ADD_COMMENT_PENDING:
    case types.REMOVE_COMMENT_PENDING:
      return state

    case types.FETCH_ALL_COMMENTS_FAILED:
    case types.ADD_COMMENT_FAILED:
    case types.REMOVE_COMMENT_FAILED:
      return {
        ...state,
        err: action.payload,
      }

    case types.FETCH_ALL_COMMENTS_SUCCESS:
      return {
        ...state,
        all: action.payload,
      }

    case types.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all],
      }

    case types.REMOVE_COMMENT_SUCCESS:
      return {
        ...state,
        all: state.all.filter(comment => comment.id === action.payload.id),
      }

    default:
      return state
  }
}
