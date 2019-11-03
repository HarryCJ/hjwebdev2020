import { FETCH_CHECKS, CREATE_CHECK, REMOVE_MESSAGE, EDIT_CHECK, DELETE_CHECK, MASS_DELETE_CHECK, PUSH_OFFLINE_QUEUE, ADD_QUEUE_MESSAGE, ADD_CHECK_SERVER_ERROR_MESSAGE, PUSH_CHECK_TO_OFFLINE_QUEUE } from './types'
import { stringify } from 'query-string';
import { api_url } from '../../api_url'

function getAuthKey(){
	return window.localStorage.getItem('authKey');
}

export const fetchChecks = (params, clearResults, forCache) => dispatch => {
	console.log("checkActions fetchChecks")
	// dispatch({
	// 	type: LOGIN,
	// 	payload: undefined,
	// })
	// const params = {
	// 	page: page,
	// }
	console.log("params", params)
	// if (!navigator.onLine){
	// 	if (isInitialCheckFetch(params)){
	// 		// Load from cache
	// 		let result = window.localStorage.getItem('fetchChecks-cache')
	// 		console.log("loading from cache")
	// 		if (result){
	// 			let responseData = JSON.parse(result)
	// 			dispatch({
	// 				type: FETCH_CHECKS,
	// 				payload: responseData,
	// 				params: params,
	// 				clearResults, clearResults,
	// 			})
	// 		}
	// 	}
	// } else {
		const endpoint = `${api_url}rest-auth/checks/?${stringify(params)}` 
		let lookupOptions = {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Token '+getAuthKey(),
			}
		}
		fetch(endpoint, lookupOptions)
		.then(function(response){
			return response.json()
		}).then(function(responseData){
			if (responseData && !forCache){
				// if (isInitialCheckFetch(params)){
				// 	window.localStorage.setItem('fetchChecks-cache', JSON.stringify(responseData))
				// }
				dispatch({
					type: FETCH_CHECKS,
					payload: responseData,
					params,
					clearResults,
				})
			}
		}).catch(function(error){
			console.log("error", error)
		})
	// }
}

export const createCheck = (form, isDuplicate) => dispatch => {
	console.log("checkActions createCheck", form)
	const endpoint = isDuplicate ? `${api_url}rest-auth/addresses/${form.address}/duplicate_last_check/` : `${api_url}rest-auth/checks/`
	console.log("endpoint", endpoint)
	let lookupOptions = {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Token '+getAuthKey(),
		},
		body: JSON.stringify(form),
	}
	function getOfflineQueueItem(endpoint, lookupOptions){
		return {type: 'createCheck', title: `Create Check`, endpoint: endpoint, lookupOptions: lookupOptions}
	}
	function offlineActions(){
		dispatch({
			type: PUSH_OFFLINE_QUEUE,
			payload: getOfflineQueueItem(endpoint, lookupOptions),
		})
		dispatch({
			type: ADD_QUEUE_MESSAGE,
			payload: {
				type: 'createCheck-cache',
				item: form
			},
		})
	}

	if (!navigator.onLine){
		offlineActions()
	} else {
		fetch(endpoint, lookupOptions)
		.then(function(response){
			if (response.ok){
				return response.json()
			} else {
				dispatch({
					type: ADD_CHECK_SERVER_ERROR_MESSAGE,
					payload: { type: 'server-error' }
				})
				offlineActions()
			}
		}).then(function(responseData){
			if (responseData){
				dispatch({
					type: CREATE_CHECK,
					payload: {
						type: 'createCheck',
						item: responseData
					},
				})
			}
		}).catch(function(error){
			console.log("error", error)
			dispatch({
				type: ADD_CHECK_SERVER_ERROR_MESSAGE,
				payload: { type: 'server-error' }
			})
			offlineActions()
		})
	}
}

function collectImages(images, prefix, formData){
	console.log("collectImages", images, prefix, formData)
	if (images && images.length > 0){
		for (let x = 0; x < images.length; x++){
			// console.log("images[x]", images[x], typeof images[x].url)
			if (images[x] && (!images[x].url || typeof images[x].url === 'object')){
				console.log("adding")
				let id = images[x].id ? `id${images[x].id}` : `${x}`
				formData.append(`${prefix}_image_${id}`, images[x].url ); // Add/replace with new image
			}
		}
	} else if (!images){
		formData.append(`${prefix}_image`, null ); //Delete image
	}
	return formData
}

export const editCheck = (validatedData) => dispatch => {
	console.log("checkActions editCheck", validatedData)
	const endpoint = `${api_url}rest-auth/checks/${validatedData.id}/`
	// Create formData
	let formData = new FormData();
	Object.keys(validatedData).forEach(key => {
		// console.log(key, validatedData[key])
		if (validatedData[key] || validatedData[key] === ''){
			if (key === "rooms"){

				validatedData[key].forEach(roomItem => {
					let prefix = typeof roomItem.id === 'string' ? roomItem.id : `room_${roomItem.id}`
					formData.append(`${prefix}_name`, roomItem.name )
					formData.append(`${prefix}_condition`, roomItem.condition )
					formData.append(`${prefix}_order`, roomItem.order )
					roomItem.comments.forEach(commentItem => {
						let prefix = typeof commentItem.id === 'string' ? commentItem.id : `comment_${commentItem.id}`
						formData = collectImages(commentItem.image, prefix, formData)
						formData.append(`${prefix}_comment`, commentItem.comment );
						formData.append(`${prefix}_maintenance`, commentItem.maintenance );
						formData.append(`${prefix}_room`, roomItem.id );
					})
				})

			} else if (key === 'comments'){

				validatedData[key].forEach(commentItem => {
					let prefix = typeof commentItem.id === 'string' ? commentItem.id : `comment_${commentItem.id}`
					formData = collectImages(commentItem.image, prefix, formData)
					formData.append(`${prefix}_comment`, commentItem.comment );
					formData.append(`${prefix}_maintenance`, commentItem.maintenance );
				})

			} else if (key === 'signature_image') {
				formData.append(key, validatedData[key], 'signature.png');
			} else {
				formData.append(key, validatedData[key] );
			}
		}
	})
	// console.log('---formData---')
	// for (var pair of formData.entries()) {
	//     console.log(pair[0]+ ', ' + pair[1]); 
	// }
	let lookupOptions = {
		method: "PATCH",
		body: formData,
		headers: {
			'Authorization': 'Token '+getAuthKey(),
		}
	}
	
	function getOfflineQueueItem(endpoint, lookupOptions, validatedData){
		delete lookupOptions.body
		return {type: 'editCheck', title: `Edit Check #${validatedData.id}`, endpoint: endpoint, lookupOptions: lookupOptions, validatedData: validatedData}
	}
	function offlineActions(){
		dispatch({
			type: PUSH_CHECK_TO_OFFLINE_QUEUE,
			payload: getOfflineQueueItem(endpoint, lookupOptions, validatedData),
		})
		dispatch({
			type: ADD_QUEUE_MESSAGE,
			payload: {
				type: 'editCheck-cache',
				item: {id: validatedData.id}
			},
		})
	}
	if (!navigator.onLine){
		offlineActions()
	} else {
		fetch(endpoint, lookupOptions)
		.then(function(response){
			if (response.ok){
				return response.json()
			} else {
				dispatch({
					type: ADD_CHECK_SERVER_ERROR_MESSAGE,
					payload: { type: 'server-error' }
				})
				offlineActions()
			}
		}).then(function(responseData){
			if (responseData){
				dispatch({
					type: EDIT_CHECK,
					payload: {
						type: 'editCheck',
						item: responseData
					},
				})
			}
		}).catch(function(error){
			console.log("error", error)
			dispatch({
				type: ADD_CHECK_SERVER_ERROR_MESSAGE,
				payload: {
					type: 'server-error',
					error: error
				},
			})
			offlineActions()
		})
	}
}

export const deleteCheck = (id) => dispatch => {
	console.log("checkActions deleteCheck", id)
	const endpoint = `${api_url}rest-auth/checks/${id}/`
	let lookupOptions = {
		method: "DELETE",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Token '+getAuthKey(),
		}
	}
	if (!navigator.onLine){
		dispatch({
			type: PUSH_OFFLINE_QUEUE,
			payload: {title: `Delete Check #${id}`, endpoint: endpoint, lookupOptions: lookupOptions},
		})
		dispatch({
			type: ADD_QUEUE_MESSAGE,
			payload: {
				type: 'deleteCheck-cache',
				item: {id: id}
			},
		})
	} else {
		fetch(endpoint, lookupOptions)
		.then(function(response){
			dispatch({
				type: DELETE_CHECK,
				payload: {
					type: 'deleteCheck',
					item: {id: id}
				},
			})
		}).catch(function(error){
			console.log("error", error)
		})
	}
}

export const massDeleteCheck = (id_array) => dispatch => {
	console.log("checkActions massDeleteCheck", id_array)
	const endpoint = `${api_url}rest-auth/checks/multi_delete/?id=${id_array.join(',')}`
	console.log("endpoint", endpoint)
	let lookupOptions = {
		method: "DELETE",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Token '+getAuthKey(),
		}
	}
	if (!navigator.onLine){
		dispatch({
			type: PUSH_OFFLINE_QUEUE,
			payload: {title: `Delete Checks #${id_array.join(', #')}`, endpoint: endpoint, lookupOptions: lookupOptions},
		})
		dispatch({
			type: ADD_QUEUE_MESSAGE,
			payload: {
				type: 'massDeleteCheck-cache',
				id_array: id_array,
			},
		})
	} else {
		fetch(endpoint, lookupOptions)
		.then(function(response){
			dispatch({
				type: MASS_DELETE_CHECK,
				payload: {
					type: 'massDeleteCheck',
					id_array: id_array,
				},
			})
		}).catch(function(error){
			console.log("error", error)
		})
	}
}

export const removeMessage = (id) => dispatch => {
	dispatch({
		type: REMOVE_MESSAGE,
		payload: id,
	})
}