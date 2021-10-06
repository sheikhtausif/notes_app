import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { appReducer } from './App/reducer'
import { authReducer } from './Auth/reducer'

const rootReducer = combineReducers({ app: appReducer, auth: authReducer })

// export const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

// ! Blow code also work in phone And Above code works only pc

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// console.log('store:', store)