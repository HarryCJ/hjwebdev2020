import { REMOVE_OFFLINE_QUEUE_ITEM, SET_QUEUE_ITEM_PENDING, UNSET_QUEUE_ITEM_PENDING, HANDLE_ONLINE, REFRESH_OFFLINE_QUEUE, SAVE_CHECK } from './types'
import localForage from "localforage";

export const saveCheck = (item, filesToDelete) => dispatch => {
	console.log("offlineActions saveCheck", item, filesToDelete)
	dispatch({
		type: SAVE_CHECK,
		payload: item,
		filesToDelete: filesToDelete,
	})
}

export const removeOfflineQueueItem = (item) => dispatch => {
	console.log("offlineActions removeOfflineQueueItem", item)

	dispatch({
		type: REMOVE_OFFLINE_QUEUE_ITEM,
		payload: item,
	})
}

export const setQueueItemPending = (item) => dispatch => {
	console.log("offlineActions setQueueItemPending", item)

	dispatch({
		type: SET_QUEUE_ITEM_PENDING,
		payload: item,
	})
}

export const unsetQueueItemPending = (item) => dispatch => {
	console.log("offlineActions unsetQueueItemPending", item)

	dispatch({
		type: UNSET_QUEUE_ITEM_PENDING,
		payload: item,
	})
}

export const handleOnline = (item) => dispatch => {
	console.log("offlineActions handleOnline", item)

	dispatch({
		type: HANDLE_ONLINE,
	})
}

export const refreshOfflineQueue = (item) => dispatch => {
	console.log("offlineActions refreshOfflineQueue", item)
	localForage.getItem('offlineQueue').then((result) => {
		// console.log("result", result)
		let offlineQueue = result ? JSON.parse(result) : []
		// console.log("offlineQueue", offlineQueue)
		dispatch({
			type: REFRESH_OFFLINE_QUEUE,
			offlineQueue,
		})
	})
	localForage.getItem('offlineFileCount').then((result) => {
		console.log("offlineFileCount result", result)
		let offlineFileCount = result ? result : 0
		console.log("offlineFileCount", offlineFileCount)
		dispatch({
			type: REFRESH_OFFLINE_QUEUE,
			offlineFileCount,
		})
	})

	// dispatch({
	// 	type: REFRESH_OFFLINE_QUEUE,
	// })
}