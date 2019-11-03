import { PUSH_OFFLINE_QUEUE, REMOVE_OFFLINE_QUEUE_ITEM, SET_QUEUE_ITEM_PENDING, UNSET_QUEUE_ITEM_PENDING, HANDLE_ONLINE, REFRESH_OFFLINE_QUEUE, PUSH_ADDRESS_TO_OFFLINE_QUEUE, PUSH_CHECK_TO_OFFLINE_QUEUE, SAVE_CHECK } from '../actions/types'
import localForage from "localforage";

function setOfflineQueue(offlineQueue){

	localForage.setItem('offlineQueue', JSON.stringify(offlineQueue))

	console.log("registering sync")
	navigator.serviceWorker.ready.then(function(swRegistration) {
		console.log("registering sync ok")
		if (swRegistration.sync){
	 		return swRegistration.sync.register('onlineSync');
		}
	});
}

const initialState = {
	offlineQueue: [],
	onlineCount: 0,
	offlineFileCount: 0,
	savedFilesToDelete: [],
}

function stringifyCheck(validatedData, offlineFileCount){

	// delete payload.validatedData.history
	let filesToDelete = []

	Object.keys(validatedData).forEach(key => {
		if (validatedData[key]){
			if (key === "rooms"){
				validatedData[key].forEach(roomItem => {
					delete roomItem.history
					roomItem.comments.forEach(commentItem => {
						delete commentItem.history
						if (commentItem.image && commentItem.image.length > 0){
							let newImages = []
							commentItem.image.forEach(image => {
								console.log("room image", image)
								if (image.url && typeof image.url === 'object'){
									localForage.setItem(`file ${offlineFileCount+1}`, image.url)
									image.url = offlineFileCount+1
									filesToDelete.push(offlineFileCount+1)
									offlineFileCount++
								}
								newImages.push(image)
							})
							commentItem.image = newImages
							// localForage.setItem(`file ${offlineFileCount+1}`, commentItem.image)
							// commentItem.image = offlineFileCount+1
							// offlineFileCount++
						}
					})
				})
			} else if (key === 'comments'){
				validatedData[key].forEach(commentItem => {
					delete commentItem.history
					if (commentItem.image && commentItem.image.length > 0 && typeof commentItem.image[0] === 'object'){
						let newImages = []
						commentItem.image.forEach(image => {
							console.log("comment image", image)
							if (image.url && typeof image.url === 'object'){
								console.log("saving image", image)
								localForage.setItem(`file ${offlineFileCount+1}`, image.url)
								image.url = offlineFileCount+1
								filesToDelete.push(offlineFileCount+1)
								offlineFileCount++
							}
							newImages.push(image)
						})
						commentItem.image = newImages
						// localForage.setItem(`file ${offlineFileCount+1}`, commentItem.image)
						// commentItem.image = offlineFileCount+1
						// offlineFileCount++
					}
				})
			} else if (key === 'signature_image') {
				if (validatedData[key] && typeof validatedData[key] === 'object'){
					localForage.setItem(`file ${offlineFileCount+1}`, validatedData[key])
					validatedData[key] = offlineFileCount+1
					offlineFileCount++
				}
			}
		}
	})

	console.log("new offline validatedData", validatedData)

	localForage.setItem('offlineFileCount', offlineFileCount)
	return {item: validatedData, offlineFileCount: offlineFileCount, filesToDelete: filesToDelete}
}

// function stringifyAddress(item, offlineFileCount){
// 	localForage.setItem(`file ${offlineFileCount+1}`, item.raw.image)
// 	item.raw.image = offlineFileCount+1
// 	offlineFileCount+=1
// 	localForage.setItem('offlineFileCount', offlineFileCount)
// 	return {item: item, offlineFileCount: offlineFileCount}
// }

export default function(state = initialState, action) {
	console.log("action.payload", action.payload)
	let offlineQueue = []
	let offline = null
	switch(action.type) {
		case SAVE_CHECK:
			delete action.payload.history
			if (action.filesToDelete && action.filesToDelete.length > 0){
            	for (const imageItem of action.filesToDelete) {
      				if (typeof imageItem === 'number') localForage.removeItem(`file ${imageItem}`)
            	}
			}
			offline = stringifyCheck(action.payload, state.offlineFileCount)
			localForage.setItem(`save_check_${offline.item.id}`, JSON.stringify(offline.item))
			return {
				...state,
				offlineFileCount: offline.offlineFileCount,
				savedFilesToDelete: offline.filesToDelete,
			}
			/* falls through */
		case PUSH_CHECK_TO_OFFLINE_QUEUE:
			console.log("offline, storing in queue")
			offlineQueue = Array.from(state.offlineQueue)
			console.log("offlineQueue", offlineQueue)
			action.payload.id = offlineQueue.length > 0 ? offlineQueue[offlineQueue.length-1].id+1 : 1
			delete action.payload.validatedData.history
			offline = stringifyCheck(action.payload.validatedData, state.offlineFileCount)
			console.log("offline", offline)
			action.payload.item = offline.item
			// offline.item.type = 'editCheck'
			offlineQueue.push(action.payload)
			console.log("offlineQueue", offlineQueue)
			setOfflineQueue(offlineQueue)
			return {
				...state,
				offlineQueue,
				offlineFileCount: offline.offlineFileCount
			}
			/* falls through */
		case PUSH_ADDRESS_TO_OFFLINE_QUEUE:
			offlineQueue = Array.from(state.offlineQueue)
			action.payload.id = offlineQueue.length > 0 ? offlineQueue[offlineQueue.length-1].id+1 : 1
			// offline = stringifyAddress(action.payload, state.offlineFileCount)
			offlineQueue.push(action.payload)
			setOfflineQueue(offlineQueue)
			return {
				...state,
				offlineQueue,
			}
			/* falls through */
		case PUSH_OFFLINE_QUEUE:
			console.log("offline, storing in queue")
			offlineQueue = Array.from(state.offlineQueue)
			action.payload.id = offlineQueue.length > 0 ? offlineQueue[offlineQueue.length-1].id+1 : 1
			offlineQueue.push(action.payload)
			console.log("offlineQueue", offlineQueue)
			setOfflineQueue(offlineQueue)
			return {
				...state,
				offlineQueue,
			}
			/* falls through */
		case REMOVE_OFFLINE_QUEUE_ITEM:
			offlineQueue = Array.from(state.offlineQueue).filter(item => item.id !== action.payload.id)
			console.log("offlineQueue", offlineQueue)
			localForage.setItem('offlineQueue', JSON.stringify(offlineQueue))
			return {
				...state,
				offlineQueue,
			}
			/* falls through */
		case SET_QUEUE_ITEM_PENDING:
			offlineQueue = Array.from(state.offlineQueue)
			offlineQueue.forEach(item => {
				if (item.id === action.payload.id) item.status = 'pending'
			})
			console.log("offlineQueue", offlineQueue)
			localForage.setItem('offlineQueue', JSON.stringify(offlineQueue))
			return {
				...state,
				offlineQueue,
			}
			/* falls through */
		case UNSET_QUEUE_ITEM_PENDING:
			offlineQueue = Array.from(state.offlineQueue)
			offlineQueue.forEach(item => {
				if (item.id === action.payload.id) item.status = null
			})
			console.log("offlineQueue", offlineQueue)
			setOfflineQueue(offlineQueue)
			return {
				...state,
				offlineQueue,
			}
			/* falls through */
		case HANDLE_ONLINE:
			return {
				...state,
				onlineCount: state.onlineCount+1,
			}
			/* falls through */
		case REFRESH_OFFLINE_QUEUE:
			if (action.offlineQueue){
				return {
					...state,
					offlineQueue: action.offlineQueue,
				}
			} else if (action.offlineFileCount){
				return {
					...state,
					offlineFileCount: action.offlineFileCount,
				}
			}
			/* falls through */
		default:
			return state
		// case FETCH_SITEOPTIONS:

	}
}