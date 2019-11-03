import { FETCH_ADDRESSES, CREATE_ADDRESS, REMOVE_MESSAGE, EDIT_ADDRESS, DELETE_ADDRESS, MASS_DELETE_ADDRESS, PUSH_OFFLINE_QUEUE, ADD_QUEUE_MESSAGE, ADD_ADDRESS_SERVER_ERROR_MESSAGE, PUSH_ADDRESS_TO_OFFLINE_QUEUE } from './types'
import { stringify } from 'query-string';
import { api_url } from '../../api_url'

function getAuthKey(){
	return window.localStorage.getItem('authKey');
}

export const fetchAddresses = (params, clearResults, forCache) => dispatch => {

	const endpoint = `${api_url}rest-auth/addresses/?${stringify(params)}` 
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
			dispatch({
				type: FETCH_ADDRESSES,
				payload: responseData,
				params,
				clearResults,
			})
		}
	}).catch(function(error){
		console.log("error", error)
	})

}

export const createAddress = (form, raw) => dispatch => {
	console.log("addressActions createAddress", form)
	const endpoint = `${api_url}rest-auth/addresses/` 
	let lookupOptions = {
		method: "POST",
		body: form,
		headers: {
			'Authorization': 'Token '+getAuthKey(),
		}
	}
	function getOfflineQueueItem(endpoint, lookupOptions, raw){
		delete lookupOptions.body
		return {type: 'createAddress', title: `Create Address`, endpoint: endpoint, lookupOptions: lookupOptions, raw: raw}
	}
	function offlineActions(){
		dispatch({
			type: PUSH_ADDRESS_TO_OFFLINE_QUEUE,
			payload: getOfflineQueueItem(endpoint, lookupOptions, raw),
		})
		dispatch({
			type: ADD_QUEUE_MESSAGE,
			payload: {
				type: 'createAddress-cache',
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
					type: ADD_ADDRESS_SERVER_ERROR_MESSAGE,
					payload: { type: 'server-error' }
				})
				offlineActions()
			}
		}).then(function(responseData){
			if (responseData){
				dispatch({
					type: CREATE_ADDRESS,
					payload: {
						type: 'createAddress',
						item: responseData
					},
				})
			}
		}).catch(function(error){
			console.log("error", error)
			dispatch({
				type: ADD_ADDRESS_SERVER_ERROR_MESSAGE,
				payload: { type: 'server-error' }
			})
			offlineActions()
		})
	}
}

export const editAddress = (form, raw) => dispatch => {
	console.log("addressActions editAddress", form, raw)
	const endpoint = `${api_url}rest-auth/addresses/${raw.id}/`
	let lookupOptions = {
		method: "PATCH",
		body: form,
		headers: {
			'Authorization': 'Token '+getAuthKey(),
		},
	}
	function getOfflineQueueItem(endpoint, lookupOptions, raw){
		delete lookupOptions.body
		return {type: 'editAddress', title: `Edit Address #${raw.id}`, endpoint: endpoint, lookupOptions: lookupOptions, raw: raw}
	}
	function offlineActions(){
		dispatch({
			type: PUSH_ADDRESS_TO_OFFLINE_QUEUE,
			payload: getOfflineQueueItem(endpoint, lookupOptions, raw),
		})
		dispatch({
			type: ADD_QUEUE_MESSAGE,
			payload: {
				type: 'editAddress-cache',
				item: {id: raw.id}
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
					type: ADD_ADDRESS_SERVER_ERROR_MESSAGE,
					payload: { type: 'server-error' }
				})
				offlineActions()
			}
		}).then(function(responseData){
			if (responseData){
				dispatch({
					type: EDIT_ADDRESS,
					payload: {
						type: 'editAddress',
						item: responseData
					},
				})
			}
		}).catch(function(error){
			console.log("error", error)
			dispatch({
				type: ADD_ADDRESS_SERVER_ERROR_MESSAGE,
				payload: {
					type: 'server-error',
					error: error
				},
			})
			offlineActions()
		})
	}
}

export const deleteAddress = (id) => dispatch => {
	console.log("addressActions deleteAddress", id)
	const endpoint = `${api_url}rest-auth/addresses/${id}/`
	let lookupOptions = {
		method: "DELETE",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Token '+getAuthKey(),
		},
	}
	if (!navigator.onLine){
		dispatch({
			type: PUSH_OFFLINE_QUEUE,
			payload: {title: `Delete Address #${id}`, endpoint: endpoint, lookupOptions: lookupOptions},
		})
		dispatch({
			type: ADD_QUEUE_MESSAGE,
			payload: {
				type: 'deleteAddress-cache',
				item: {id: id}
			},
		})
	} else {
		fetch(endpoint, lookupOptions)
		.then(function(response){
			dispatch({
				type: DELETE_ADDRESS,
				payload: {
					type: 'deleteAddress',
					item: {id: id}
				},
			})
		}).catch(function(error){
			console.log("error", error)
		})
	}
}

export const massDeleteAddress = (id_array) => dispatch => {
	console.log("addressActions massDeleteAddress", id_array)
	const endpoint = `${api_url}rest-auth/addresses/multi_delete/?id=${id_array.join(',')}`
	console.log("endpoint", endpoint)
	let lookupOptions = {
		method: "DELETE",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Token '+getAuthKey(),
		},
	}
	if (!navigator.onLine){
		dispatch({
			type: PUSH_OFFLINE_QUEUE,
			payload: {title: `Delete Addresses #${id_array.join(', #')}`, endpoint: endpoint, lookupOptions: lookupOptions},
		})
		dispatch({
			type: ADD_QUEUE_MESSAGE,
			payload: {
				type: 'massDeleteAddress-cache',
				id_array: id_array,
			},
		})
	} else {
		fetch(endpoint, lookupOptions)
		.then(function(response){
			dispatch({
				type: MASS_DELETE_ADDRESS,
				payload: {
					type: 'massDeleteAddress',
					id_array: id_array,
				},
			})
		}).catch(function(error){
			console.log("error", error)
		})
	}
}

export const removeMessage = (message) => dispatch => {
	dispatch({
		type: REMOVE_MESSAGE,
		payload: message,
	})
}