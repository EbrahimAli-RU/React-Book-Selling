import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import authReducer from './reducers/auth'
import wishListReducer from './reducers/wishList'

const reducer = combineReducers({
    auth: authReducer,
    wishList: wishListReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
