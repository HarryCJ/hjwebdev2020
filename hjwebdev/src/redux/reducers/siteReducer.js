import { SET_PAGE_CONTENT_SELECTOR } from '../actions/types'
import { createBrowserHistory } from 'history';

const initialState = {
	history: createBrowserHistory(),
	routes: {
	  home: "#",
	  projects: "#projects",
	  projectsGrowthEQ: "#projects-growtheq",
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
		projectsGrowthEQ: {
			title: "Growth EQ Website",
			imgURL: "/growtheq-logo.png",
			imgAlt: "Growth EQ",
		},
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
	switch(action.type) {
		case SET_PAGE_CONTENT_SELECTOR:
			return {
				...state,
				pageContentSelector: action.payload,
			}
		default:
			return state

	}
}