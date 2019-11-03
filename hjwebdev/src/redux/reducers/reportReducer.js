import { FETCH_REPORTS, ADD_REPORT_SERVER_ERROR_MESSAGE } from '../actions/types'

const initialState = {
    reportMessages: [],
	reports: {},
}

export default function(state = initialState, action) {
	console.log("action", action)
	switch(action.type) {
		case FETCH_REPORTS:
			if (action.clearResults === true){
				return {
					...state,
					reports: {
				        [action.params.page]: action.payload
				      },
				}
			} else {
				return {
					...state,
					reports: Object.assign({}, state['reports'], {
				        [action.params.page]: action.payload
				      }),
				}
			}
			/* falls through */
		// case CREATE_ADDRESS:
		// 	return {
		// 		...state,
		// 		addressMessages: state['addressMessages'].concat([action.payload]),
		// 	}
		// 	/* falls through */
		// case EDIT_ADDRESS:
		// 	addresses = Object.assign({}, state['addresses'])
		// 	Object.keys(addresses).forEach((page) => {
		// 		addresses[page].results.forEach((item, i) => {
		// 			if (item.id === action.payload.item.id)	addresses[page].results[i] = action.payload.item
		// 		})
		// 	})
		// 	return {
		// 		...state,
		// 		addresses: addresses,
		// 		addressMessages: state['addressMessages'].concat([action.payload]),
		// 	}
		// 	/* falls through */
		// case DELETE_ADDRESS:
		// 	addresses = Object.assign({}, state['addresses'])
		// 	Object.keys(addresses).forEach((page) => {
		// 		addresses[page].results.forEach((item, i) => {
		// 			if (item.id === action.payload.item.id)	addresses[page].results.splice(i, 1)
		// 		})
		// 	})
		// 	return {
		// 		...state,
		// 		addresses: addresses,
		// 		addressMessages: state['addressMessages'].concat([action.payload]),
		// 	}
		// 	/* falls through */
		// case MASS_DELETE_ADDRESS:
		// 	addresses = Object.assign({}, state['addresses'])
		// 	action.payload.id_array.forEach(removeID => {
		// 		Object.keys(addresses).forEach((page) => {
		// 			addresses[page].results.forEach((item, i) => {
		// 				if (removeID === item.id) addresses[page].results.splice(i, 1)
		// 			})
		// 		})
		// 	})
		// 	return {
		// 		...state,
		// 		addresses: addresses,
		// 		addressMessages: state['addressMessages'].concat([action.payload]),
		// 	}
		// 	/* falls through */
		// case REMOVE_MESSAGE:
		// 	const addressMessages = state['addressMessages'].filter(message => message.type !== action.payload.type && message.item.id !== action.payload.item.id)
		// 	return {
		// 		...state,
		// 		addressMessages,
		// 	}
		// 	/* falls through */
		// case ADD_QUEUE_MESSAGE:
		// 	return {
		// 		...state,
		// 		addressMessages: state['addressMessages'].concat([action.payload]),
		// 	}
		// 	/* falls through */
		case ADD_REPORT_SERVER_ERROR_MESSAGE:
			let id = window.localStorage.getItem('server-error-id') || 0
			action.payload.item = {id: id}
			window.localStorage.setItem('server-error-id', id+1)
			return {
				...state,
				addressMessages: state['addressMessages'].concat([action.payload]),
			}
			/* falls through */
		default:
			return state
	}
}