import * as types from './constants'

const initialState = {
  all: [],
  err: {},
  // loggedInUser: {},
  loggedInUser: {
    name: 'Darcy Booker',
    company: 'Manglo',
    email: 'darcybooker@manglo.com',
    phone: '+1 (903) 561-2872',
    address: '205 Pioneer Street, Highland, New Mexico, 78918',
    photo_url: 'http://placehold.it/32x32',
    password: 'hello',
    id: 16,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_USERS_PENDING:
    case types.ADD_USER_PENDING:
    case types.REMOVE_USER_PENDING:
    case types.USER_LOGIN_PENDING:
      return state

    case types.FETCH_ALL_USERS_FAILED:
    case types.ADD_USER_FAILED:
    case types.REMOVE_USER_FAILED:
    case types.USER_LOGIN_FAILED:
      return {
        ...state,
        err: action.payload,
      }

    case types.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        all: action.payload,
      }

    case types.ADD_USER_SUCCESS:
      return {
        ...state,
        all: [...state.all, action.payload],
      }

    case types.REMOVE_USER_SUCCESS:
      return {
        ...state,
        all: state.all.filter(user => user.id === action.payload.id),
      }

    case types.USER_LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload))
      return {
        ...state,
        loggedInUser: action.payload,
      }

    default:
      return state
  }
}
