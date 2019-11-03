// import { LOGIN, LOGOUT, LOGIN_ERROR, SET_CURRENT_ID } from '../actions/types'

import { createBrowserHistory } from 'history';
const history = createBrowserHistory()

const initialState = {
	history: createBrowserHistory(),
	routes: {
	  home: "/",
	  projects: "/projects",
	  projectsSAB: "/projects/sab",
	  projectsAB: "/projects/ab",
	  projectsSamAndMax: "/projects/samandmax",
	  projectsSPG: "/projects/sohamplaygroup",
	},
}

export default function(state = initialState, action) {
	// console.log("action.payload", action.payload)
	switch(action.type) {
		// case SET_CURRENT_ID:
		// 	return {
		// 		...state,
		// 		currentID: action.payload,
		// 	}
		// 	/* falls through */
		// case LOGIN:
		// 	return {
		// 		...state,
		// 		loginError: false,
		// 		authKey: action.payload,
		// 	}
		// 	 falls through 
		// case LOGOUT:
		// 	return {
		// 		...state,
		// 		loginError: false,
		// 		authKey: null,
		// 	}
		// 	/* falls through */
		// case LOGIN_ERROR:
		// 	return {
		// 		...state,
		// 		loginError: action.payload,
		// 	}
		// 	/* falls through */
		default:
			return state

	}
}