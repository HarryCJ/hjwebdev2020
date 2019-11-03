import { FETCH_ADDRESSES, CREATE_ADDRESS, REMOVE_MESSAGE, EDIT_ADDRESS, DELETE_ADDRESS, MASS_DELETE_ADDRESS, ADD_QUEUE_MESSAGE, ADD_ADDRESS_SERVER_ERROR_MESSAGE } from '../actions/types'

const initialState = {
    addressMessages: [],
	addresses: {},
}

function getMessageID(){
	let id = parseInt(window.localStorage.getItem('message-id') || "0")
	window.localStorage.setItem('message-id', id+1)
	return id
}

export default function(state = initialState, action) {
	console.log("action", action)
	let addresses = null
	let addressMessages = null
	switch(action.type) {
		case FETCH_ADDRESSES:
			// let newAddresses = state.addresses
			// newAddresses[action.page] = action.payload
			if (action.clearResults === true){
				return {
					...state,
					addresses: {
				        [action.params.page]: action.payload
				      },
				}
			} else {
				return {
					...state,
					addresses: Object.assign({}, state['addresses'], {
				        [action.params.page]: action.payload
				      }),
				}
			}
			/* falls through */
		case CREATE_ADDRESS:
			// addresses = Object.assign({}, state['addresses'])
			// Object.keys(addresses).forEach((page) => {
			// 	addresses[page].results.unshift(action.payload.item)
			// })
			action.payload.id = getMessageID()
			return {
				...state,
				// addresses: addresses,
				addressMessages: state['addressMessages'].concat([action.payload]).slice(-3),
			}
			/* falls through */
		case EDIT_ADDRESS:
			// Update existing addresses
			addresses = Object.assign({}, state['addresses'])
			Object.keys(addresses).forEach((page) => {
				addresses[page].results.forEach((item, i) => {
					if (item.id === action.payload.item.id)	addresses[page].results[i] = action.payload.item
				})
			})
			// Update messages
			addressMessages = state['addressMessages']
			addressMessages.forEach((message) => {
				if (message.item && message.item.id && message.item.id === action.payload.item.id){
					message.item = action.payload.item
				}
			})
			action.payload.id = getMessageID()
			return {
				...state,
				addresses: addresses,
				addressMessages: addressMessages.concat([action.payload]).slice(-3),
			}
			/* falls through */
		case DELETE_ADDRESS:
			addresses = Object.assign({}, state['addresses'])
			Object.keys(addresses).forEach((page) => {
				addresses[page].results.forEach((item, i) => {
					if (item.id === action.payload.item.id)	addresses[page].results.splice(i, 1)
				})
			})
			addressMessages = state['addressMessages'].filter(message =>!message.item || message.item.id !== action.payload.item.id)
			action.payload.id = getMessageID()
			return {
				...state,
				addresses: addresses,
				addressMessages: addressMessages.concat([action.payload]).slice(-3),
			}
			/* falls through */
		case MASS_DELETE_ADDRESS:
			addresses = Object.assign({}, state['addresses'])
			addressMessages = state['addressMessages']
			action.payload.id_array.forEach(removeID => {
				addressMessages = addressMessages.filter(message => !message.item || message.item.id !== removeID)
				Object.keys(addresses).forEach((page) => {
					addresses[page].results.forEach((item, i) => {
						if (removeID === item.id) addresses[page].results.splice(i, 1)
					})
				})
			})
			action.payload.id = getMessageID()
			return {
				...state,
				addresses: addresses,
				addressMessages: addressMessages.concat([action.payload]).slice(-3),
			}
			/* falls through */
		case REMOVE_MESSAGE:
			addressMessages = state['addressMessages'].filter(message => message.id !== action.payload)
			return {
				...state,
				addressMessages,
			}
			/* falls through */
		case ADD_QUEUE_MESSAGE:
			action.payload.id = getMessageID()
			return {
				...state,
				addressMessages: state['addressMessages'].concat([action.payload]).slice(-3),
			}
			/* falls through */
		case ADD_ADDRESS_SERVER_ERROR_MESSAGE:
			action.payload.id = getMessageID()
			return {
				...state,
				addressMessages: state['addressMessages'].concat([action.payload]).slice(-3),
			}
			/* falls through */
		default:
			return state
		// case FETCH_SITEOPTIONS:

	}
}