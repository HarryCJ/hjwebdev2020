import { GET_USER_LIST, ADD_USER_SERVER_ERROR_MESSAGE, ADD_QUEUE_MESSAGE, EDIT_USER, ADD_USER_MESSAGE, REMOVE_MESSAGE, DELETE_USER, PUSH_OFFLINE_QUEUE, MASS_DELETE_USER, SET_SHOW_CREATE_USER_MODAL, SET_CREATE_USER_ERRORS } from './types'
import { api_url } from '../../api_url'

function getAuthKey(){
	return window.localStorage.getItem('authKey');
}

export const setShowCreateUserModal = (v) => dispatch => {
	dispatch({
		type: SET_SHOW_CREATE_USER_MODAL,
		payload: v
	})
	if (v === false){
		dispatch({
			type: SET_CREATE_USER_ERRORS,
			payload: {}
		})
	}
}

export const setCreateUserErrors = (v) => dispatch => {
	dispatch({
		type: SET_CREATE_USER_ERRORS,
		payload: v
	})
}


export const getUserList = () => dispatch => {

	const endpoint = `${api_url}rest-auth/users/` 
	let lookupOptions = {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Token '+getAuthKey(),
		}
	}

	fetch(endpoint, lookupOptions)
	.then(function(response){
		if (response.ok) return response.json()
	}).then(function(responseData){
		if (responseData){
			dispatch({
				type: GET_USER_LIST,
				payload: responseData,
			})
		}
	}).catch(function(error){
		console.log("error", error)
	})
}


export const changePassword = (raw) => dispatch => {
	console.log("userActions createUser", raw)
	const endpoint = `${api_url}rest-auth/users/${raw.id}/`
	let lookupOptions = {
		method: "PATCH",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Token '+getAuthKey(),
		},
		body: JSON.stringify(raw),
	}
	if (navigator.onLine){
		fetch(endpoint, lookupOptions)
		.then(function(response){
			if (response.ok){
				return response.json()
			} else {
				dispatch({
					type: ADD_USER_SERVER_ERROR_MESSAGE,
					payload: { type: 'server-error' }
				})
			}
		}).then(function(responseData){
			if (responseData){
				dispatch({
					type: ADD_USER_MESSAGE,
					payload: { type: 'changePassword' }
				})
				dispatch(getUserList())
				// dispatch({
				// 	type: CREATE_USER,
				// 	payload: {
				// 		type: 'createUser',
				// 		item: raw
				// 	},
				// })
			}
		}).catch(function(error){
			console.log("error", error)
			dispatch({
				type: ADD_USER_SERVER_ERROR_MESSAGE,
				payload: { type: 'server-error' }
			})
		})
	}
}


export const createUser = (raw) => dispatch => {
	console.log("userActions createUser", raw)
	const endpoint = `${api_url}rest-auth/registration/` 
	let lookupOptions = {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Token '+getAuthKey(),
		},
		body: JSON.stringify(raw),
	}
	function getOfflineQueueItem(endpoint, lookupOptions){
		return {type: 'createUser', title: `Create User`, endpoint: endpoint, lookupOptions: lookupOptions}
	}
	function offlineActions(){
		dispatch({
			type: PUSH_OFFLINE_QUEUE,
			payload: getOfflineQueueItem(endpoint, lookupOptions),
		})
		dispatch({
			type: ADD_QUEUE_MESSAGE,
			payload: {
				type: 'createUser-cache',
				item: raw
			},
		})
	}

	let fetchResponse = null
	if (!navigator.onLine){
		offlineActions()
	} else {
		fetch(endpoint, lookupOptions)
		.then(function(response){
			fetchResponse = response
			// if (response.ok){
				return response.json()
			// } else {
				// dispatch({
				// 	type: ADD_USER_SERVER_ERROR_MESSAGE,
				// 	payload: { type: 'server-error' }
				// })
				// offlineActions()
			// }
		}).then(function(responseData){
			if (responseData){
				if (fetchResponse.ok){
					dispatch(getUserList())
					dispatch({
						type: ADD_USER_MESSAGE,
						payload: { type: 'createUser' }
					})
					dispatch({
						type: SET_SHOW_CREATE_USER_MODAL,
						payload: false
					})
				} else if (fetchResponse.status === 400){
					dispatch({
						type: SET_CREATE_USER_ERRORS,
						payload: responseData
					})
				} else {
					dispatch({
						type: ADD_USER_SERVER_ERROR_MESSAGE,
						payload: { type: 'server-error' }
					})
					offlineActions()
					dispatch({
						type: SET_SHOW_CREATE_USER_MODAL,
						payload: false
					})
				}
				console.log("responseData, fetchResponse", responseData, fetchResponse)
			}
		}).catch(function(error){
			console.log("error", error)
			dispatch({
				type: ADD_USER_SERVER_ERROR_MESSAGE,
				payload: { type: 'server-error' }
			})
			offlineActions()
		})
	}
}

export const editUser = (raw) => dispatch => {
	console.log("userActions editUser", raw)
	const endpoint = `${api_url}rest-auth/users/${raw.id}/`
	let lookupOptions = {
		method: "PATCH",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Token '+getAuthKey(),
		},
		body: JSON.stringify(raw),
	}
	function getOfflineQueueItem(endpoint, lookupOptions, raw){
		return {type: 'editUser', title: `Edit User #${raw.id}`, endpoint: endpoint, lookupOptions: lookupOptions}
	}
	function offlineActions(){
		dispatch({
			type: PUSH_OFFLINE_QUEUE,
			payload: getOfflineQueueItem(endpoint, lookupOptions, raw),
		})
		dispatch({
			type: ADD_QUEUE_MESSAGE,
			payload: {
				type: 'editUser-cache',
				item: raw,
			},
		})
		dispatch({
			type: SET_SHOW_CREATE_USER_MODAL,
			payload: false
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
					type: ADD_USER_SERVER_ERROR_MESSAGE,
					payload: { type: 'server-error' }
				})
				offlineActions()
			}
		}).then(function(responseData){
			if (responseData){
				dispatch({
					type: EDIT_USER,
					payload: {
						type: 'editUser',
						item: responseData
					},
				})
				dispatch({
					type: SET_SHOW_CREATE_USER_MODAL,
					payload: false
				})
			}
		}).catch(function(error){
			console.log("error", error)
			dispatch({
				type: ADD_USER_SERVER_ERROR_MESSAGE,
				payload: {
					type: 'server-error',
					error: error
				},
			})
			offlineActions()
		})
	}
}

export const massDeleteUser = (id_array) => dispatch => {
	console.log("addressActions massDeleteUser", id_array)
	const endpoint = `${api_url}rest-auth/users/multi_delete/?id=${id_array.join(',')}`
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
			payload: {title: `Delete Users #${id_array.join(', #')}`, endpoint: endpoint, lookupOptions: lookupOptions},
		})
		dispatch({
			type: ADD_QUEUE_MESSAGE,
			payload: {
				type: 'massDeleteUser-cache',
				id_array: id_array,
			},
		})
	} else {
		fetch(endpoint, lookupOptions)
		.then(function(response){
			dispatch({
				type: MASS_DELETE_USER,
				payload: {
					type: 'massDeleteUser',
					id_array: id_array,
				},
			})
		}).catch(function(error){
			console.log("error", error)
		})
	}
}

export const deleteUser = (id) => dispatch => {
	console.log("addressActions deleteUser", id)
	const endpoint = `${api_url}rest-auth/users/${id}/`
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
			payload: {title: `Delete User #${id}`, endpoint: endpoint, lookupOptions: lookupOptions},
		})
		dispatch({
			type: ADD_QUEUE_MESSAGE,
			payload: {
				type: 'deleteUser-cache',
				item: {id: id}
			},
		})
	} else {
		fetch(endpoint, lookupOptions)
		.then(function(response){
			dispatch({
				type: DELETE_USER,
				payload: {
					type: 'deleteUser',
					item: {id: id}
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