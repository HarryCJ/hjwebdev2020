import { FETCH_CHECKS, CREATE_CHECK, REMOVE_MESSAGE, EDIT_CHECK, DELETE_CHECK, MASS_DELETE_CHECK, ADD_QUEUE_MESSAGE, ADD_CHECK_SERVER_ERROR_MESSAGE } from '../actions/types'
import localForage from "localforage";

const initialState = {
    checkMessages: [],
	checks: {},
}

function getMessageID(){
	let id = parseInt(window.localStorage.getItem('message-id') || "0")
	window.localStorage.setItem('message-id', id+1)
	return id
}

function deleteAutoSave(checkID){

	localForage.getItem(`save_check_${checkID}`).then((result) => {
		if (result){
	      let getFilesToDelete = async (result) => {
	        async function forageComments(comments){
	          let filesToDelete = []
	          for (const commentItem of comments) {
	            if (commentItem.image && commentItem.image.length > 0){
	              for (const imageItem of commentItem.image) {
	                if (imageItem.url && typeof imageItem.url === 'number'){
	                  filesToDelete.push(imageItem.url)
	                }
	              }
	            }
	          }
	          return filesToDelete
	        }

	        let filesToDelete = []
	        let saveItem = JSON.parse(result)
	        let epFiles = await forageComments(saveItem.comments)
	        filesToDelete = filesToDelete.concat(epFiles)
	        for (const roomItem of saveItem.rooms) {
	          let roomFiles = await forageComments(roomItem.comments)
	          filesToDelete = filesToDelete.concat(roomFiles)
	        }
	        console.log("deleteAutoSave filesToDelete", filesToDelete)
	        for (const imageItem of filesToDelete) {
	        	localForage.removeItem(`file ${imageItem}`)
	        }
	        localForage.removeItem(`save_check_${checkID}`)
	      }
	      getFilesToDelete(result)
		}
	})
}

export default function(state = initialState, action) {
	console.log("action", action)
	let checks = null
	let checkMessages = null
	switch(action.type) {
		case FETCH_CHECKS:
			// let newAddresses = state.checks
			// newAddresses[action.page] = action.payload
			if (action.clearResults === true){
				return {
					...state,
					checks: {
				        [action.params.page]: action.payload
				      },
				}
			} else {
				return {
					...state,
					checks: Object.assign({}, state['checks'], {
				        [action.params.page]: action.payload
				      }),
				}
			}
			/* falls through */
		case CREATE_CHECK:
			action.payload.id = getMessageID()
			return {
				...state,
				checkMessages: state['checkMessages'].concat([action.payload]).slice(-3),
			}
			/* falls through */
		case EDIT_CHECK:
			// Update existing check
			checks = Object.assign({}, state['checks'])
			Object.keys(checks).forEach((page) => {
				checks[page].results.forEach((item, i) => {
					if (item.id === action.payload.item.id)	checks[page].results[i] = action.payload.item
				})
			})
			// Delete autosave
			deleteAutoSave(action.payload.item.id)
			// Update messages
			checkMessages = state['checkMessages']
			checkMessages.forEach((message) => {
				if (message.item && message.item.id && message.item.id === action.payload.item.id){
					message.item = action.payload.item
				}
			})
			action.payload.id = getMessageID()
			return {
				...state,
				checks: checks,
				checkMessages: checkMessages.concat([action.payload]).slice(-3),
			}
			/* falls through */
		case DELETE_CHECK:
			checks = Object.assign({}, state['checks'])
			checkMessages = state['checkMessages'].filter(message =>!message.item || message.item.id !== action.payload.item.id)
			Object.keys(checks).forEach((page) => {
				checks[page].results.forEach((item, i) => {
					if (item.id === action.payload.item.id)	checks[page].results.splice(i, 1)
				})
			})
			action.payload.id = getMessageID()
			return {
				...state,
				checks: checks,
				checkMessages: checkMessages.concat([action.payload]).slice(-3),
			}
			/* falls through */
		case MASS_DELETE_CHECK:
			checks = Object.assign({}, state['checks'])
			checkMessages = state['checkMessages']
			action.payload.id_array.forEach(removeID => {
				checkMessages = checkMessages.filter(message =>!message.item || message.item.id !== removeID)
				Object.keys(checks).forEach((page) => {
					checks[page].results.forEach((item, i) => {
						if (removeID === item.id) checks[page].results.splice(i, 1)
					})
				})
			})
			action.payload.id = getMessageID()
			return {
				...state,
				checks: checks,
				checkMessages: checkMessages.concat([action.payload]).slice(-3),
			}
			/* falls through */
		case REMOVE_MESSAGE:
			checkMessages = state['checkMessages'].filter(message => message.id !== action.payload)
			return {
				...state,
				checkMessages,
			}
			/* falls through */
		case ADD_QUEUE_MESSAGE:
			return {
				...state,
				checkMessages: state['checkMessages'].concat([action.payload]).slice(-3),
			}
			/* falls through */
		case ADD_CHECK_SERVER_ERROR_MESSAGE:
			action.payload.id = getMessageID()
			return {
				...state,
				checkMessages: state['checkMessages'].concat([action.payload]).slice(-3),
			}
			/* falls through */
		default:
			return state
		// case FETCH_SITEOPTIONS:

	}
}