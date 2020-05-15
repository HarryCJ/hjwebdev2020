import { SET_PAGE_OPACITY, SET_PAGE_CONTENT_SELECTOR } from '../actions/types'

import { createBrowserHistory } from 'history';
const history = createBrowserHistory()

const initialState = {
	history: createBrowserHistory(),
	routes: {
	  home: "#",
	  projects: "#projects",
	  projectsSAB: "#projects-sab",
	  projectsSamAndMax: "#projects-samandmax",
	  projectsAB: "#projects-ab",
	  about: "#about",
	  services: "#services",
	  contact: "#contact",
	},
	page_opacity: 1,
	page_left: 0,
	pageContentSelector: '', 
	projects: {
		projectsSAB: {
			title: "SAB Property Management App",
			imgURL: "/sabapp.png",
			imgAlt: "SAB App",
		},
		projectsSamAndMax: {
			title: "Sam and Max Website",
			imgURL: "/samandmax.png",
			imgAlt: "Sam and Max",
		},
		projectsAB: {
			title: "Advanced Boosters Online Store",
			imgURL: "/abapp.png",
			imgAlt: "Advanced Boosters",
		},     
	}
}

export default function(state = initialState, action) {
	// console.log("action.payload", action.payload)
	switch(action.type) {
		case SET_PAGE_OPACITY:
			return {
				...state,
				page_opacity: action.page_opacity,
				page_left:action.page_left,
			}
		case SET_PAGE_CONTENT_SELECTOR:
			return {
				...state,
				pageContentSelector: action.payload,
			}
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