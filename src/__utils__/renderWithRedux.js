import React from 'react'
import { Provider } from 'react-redux'
import store, { rootReducer } from '../store/'
import { createStore, applyMiddleware } from 'redux'
import { render } from '@testing-library/react'
import thunk from 'redux-thunk'

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState or the entire store that the ui is rendered with
export default function(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}
