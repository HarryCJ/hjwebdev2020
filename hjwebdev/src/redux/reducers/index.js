import { combineReducers } from 'redux'
import siteReducer from './siteReducer'
import authReducer from './authReducer'
import addressReducer from './addressReducer'
import offlineReducer from './offlineReducer'
import checkReducer from './checkReducer'
import userReducer from './userReducer'
import reportReducer from './reportReducer'
import settingsReducer from './settingsReducer'

export default combineReducers({
	site: siteReducer,

	auth: authReducer,
	address: addressReducer,
	offline: offlineReducer,
	check: checkReducer,
	user: userReducer,
	report: reportReducer,
	settings: settingsReducer,
})