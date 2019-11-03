import { FETCH_SETTINGS, SUBMIT_SETTINGS, SET_SETTINGS_LOADING, ADD_SETTINGS_SERVER_ERROR_MESSAGE, REMOVE_MESSAGE, ADD_QUEUE_MESSAGE } from '../actions/types'

const initialState = {
    settingsMessages: [],
    hiddenElement: null,
	settings: {
      midterm_declaration: "",
      disclaimer: "",
      room_names: [],
      default_rooms: [],
	},
	isLoading: false,
}

function getMessageID(){
	let id = parseInt(window.localStorage.getItem('message-id') || "0")
	window.localStorage.setItem('message-id', id+1)
	return id
}

export default function(state = initialState, action) {
	console.log("action", action)
	let settingsMessages = null
	switch(action.type) {
		case FETCH_SETTINGS:
			return {
				...state,
				isLoading: false,
				settings: Object.assign({}, state['settings'], {
			        midterm_declaration: action.midterm_declaration,
			        disclaimer: action.disclaimer,
			        room_names: action.room_names,
			        default_rooms: action.default_rooms,
			      }),
				hiddenElement: action.hiddenElement,
			}
			/* falls through */
		case SUBMIT_SETTINGS:
			action.payload.id = getMessageID()
			return {
				...state,
				isLoading: false,
				settingsMessages: state['settingsMessages'].concat([action.payload]).slice(-3),
				settings: Object.assign({}, state['settings'], {
			        midterm_declaration: action.midterm_declaration,
			        disclaimer: action.disclaimer,
			        room_names: action.room_names,
			        default_rooms: action.default_rooms,
			      }),
			}
			/* falls through */
		case SET_SETTINGS_LOADING:
			return {
				...state,
				isLoading: action.payload,
			}
			/* falls through */
		case ADD_SETTINGS_SERVER_ERROR_MESSAGE:
			action.payload.id = getMessageID()
			return {
				...state,
				settingsMessages: state['settingsMessages'].concat([action.payload]).slice(-3),
			}
			/* falls through */
		case REMOVE_MESSAGE:
			settingsMessages = state['settingsMessages'].filter(message => message.id !== action.payload)
			return {
				...state,
				settingsMessages,
			}
			/* falls through */
		case ADD_QUEUE_MESSAGE:
			action.payload.id = getMessageID()
			return {
				...state,
				settingsMessages: state['settingsMessages'].concat([action.payload]).slice(-3),
			}
			/* falls through */
		default:
			return state
	}
}