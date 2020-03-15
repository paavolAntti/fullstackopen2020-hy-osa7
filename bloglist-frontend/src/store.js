import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import loginReducer from './reducers/loginReducer'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
	notification: notificationReducer,
	blogs: blogReducer,
	user: loginReducer,
	userlist: userReducer
})

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
)

export default store