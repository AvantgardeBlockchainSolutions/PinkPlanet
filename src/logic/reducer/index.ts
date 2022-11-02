import { combineReducers } from 'redux'
import { planetReducer } from './planet.reducer'
import { userReducer } from './user.reducer'
import { lendingReducer } from './lending.reducer'
import { ethReducer } from './eth.reducer'
import { notificationReducer } from './notification.reducer'

const rootReducer = combineReducers({
  planet: planetReducer,
  user: userReducer,
  lending: lendingReducer,
  ethData: ethReducer,
  notification: notificationReducer
})
export default rootReducer
