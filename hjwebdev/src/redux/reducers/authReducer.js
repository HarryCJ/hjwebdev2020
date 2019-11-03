import { LOGIN, LOGOUT, LOGIN_ERROR, SET_CURRENT_ID } from '../actions/types'

const initialState = {
	authKey: window.localStorage.getItem('authKey'),
	loginError: false,
	currentID: parseInt(window.localStorage.getItem('currentID')),
}

export default function(state = initialState, action) {
	console.log("action.payload", action.payload)
	switch(action.type) {
		case SET_CURRENT_ID:
			return {
				...state,
				currentID: action.payload,
			}
			/* falls through */
		case LOGIN:
			return {
				...state,
				loginError: false,
				authKey: action.payload,
			}
			/* falls through */
		case LOGOUT:
			return {
				...state,
				loginError: false,
				authKey: null,
			}
			/* falls through */
		case LOGIN_ERROR:
			return {
				...state,
				loginError: action.payload,
			}
			/* falls through */
		default:
			return state

	}
}