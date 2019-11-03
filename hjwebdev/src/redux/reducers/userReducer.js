import { GET_USER_LIST, CREATE_USER, EDIT_USER, MASS_DELETE_USER, REMOVE_MESSAGE, ADD_QUEUE_MESSAGE, ADD_USER_SERVER_ERROR_MESSAGE, ADD_USER_MESSAGE, DELETE_USER, SET_SHOW_CREATE_USER_MODAL, SET_CREATE_USER_ERRORS } from '../actions/types'

const initialState = {
    userMessages: [],
	userList: [],
	createUserErrors: {},
	showCreateUserModal: false,
}

function getMessageID(){
	let id = parseInt(window.localStorage.getItem('message-id') || "0")
	window.localStorage.setItem('message-id', id+1)
	return id
}

export default function(state = initialState, action) {
	console.log("action.payload", action.payload)
	let userList = []
	let userMessages = []
	switch(action.type) {
		case SET_SHOW_CREATE_USER_MODAL:
			return {
				...state,
				showCreateUserModal: action.payload,
			}
			/* falls through */
		case SET_CREATE_USER_ERRORS:
			return {
				...state,
				createUserErrors: action.payload,
			}
			/* falls through */
		case GET_USER_LIST:
			return {
				...state,
				userList: action.payload,
			}
			/* falls through */
		case CREATE_USER:
			// userList = Object.assign({}, state['userList'])
			// Object.keys(userList).forEach((page) => {
			// 	userList[page].results.unshift(action.payload.item)
			// })
			action.payload.id = getMessageID()
			return {
				...state,
				// userList: userList,
				userMessages: state['userMessages'].concat([action.payload]).slice(-3),
			}
			/* falls through */
		case EDIT_USER:
			// Update existing userList
			userList = state['userList']
			userList.forEach((item, i) => {
				if (item.id === action.payload.item.id)	userList[i] = action.payload.item
			})
			// Update messages
			userMessages = state['userMessages']
			userMessages.forEach((message) => {
				if (message.item && message.item.id && message.item.id === action.payload.item.id){
					message.item = action.payload.item
				}
			})
			action.payload.id = getMessageID()
			return {
				...state,
				userList: userList,
				userMessages: userMessages.concat([action.payload]).slice(-3),
			}
			/* falls through */
		case MASS_DELETE_USER:
			userList = state['userList']
			userMessages = state['userMessages']
			action.payload.id_array.forEach(removeID => {
				userMessages = userMessages.filter(message =>!message.item || message.item.id !== removeID)
				userList.forEach((item, i) => {
					if (removeID === item.id) userList.splice(i, 1)
				})
			})
			action.payload.id = getMessageID()
			return {
				...state,
				userList: userList,
				userMessages: state['userMessages'].concat([action.payload]).slice(-3),
			}
			/* falls through */
		case ADD_USER_MESSAGE:
			action.payload.id = getMessageID()
			return {
				...state,
				userMessages: state['userMessages'].concat([action.payload]).slice(-3),
			}
			/* falls through */
		case REMOVE_MESSAGE:
			userMessages = state['userMessages'].filter(message => message.id !== action.payload)
			return {
				...state,
				userMessages,
			}
			/* falls through */
		case ADD_QUEUE_MESSAGE:
			action.payload.id = getMessageID()
			return {
				...state,
				userMessages: state['userMessages'].concat([action.payload]).slice(-3),
			}
			/* falls through */
		case ADD_USER_SERVER_ERROR_MESSAGE:
			action.payload.id = getMessageID()
			return {
				...state,
				userMessages: state['userMessages'].concat([action.payload]).slice(-3),
			}
			/* falls through */
		case DELETE_USER:
			userList = state['userList']
			userMessages = state['userMessages'].filter(message =>!message.item || message.item.id !== action.payload.item.id)
			userList.forEach((item, i) => {
				if (item.id === action.payload.item.id)	userList.splice(i, 1)
			})
			action.payload.id = getMessageID()
			return {
				...state,
				userList: userList,
				userMessages: userMessages.concat([action.payload]).slice(-3),
			}
			/* falls through */
		default:
			return state
	}
}