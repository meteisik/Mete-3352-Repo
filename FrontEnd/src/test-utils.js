// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux'
import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// Import your own reducer
import reducer from './redux/reducers/tableReducer'
const middleware = [thunk]
function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState, compose(applyMiddleware(...middleware))),
    ...renderOptions
  } = {}
) {
  return mount(<Provider store={store}>{ui}</Provider>)
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }