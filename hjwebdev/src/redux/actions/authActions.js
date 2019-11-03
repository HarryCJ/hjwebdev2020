import { LOGIN, LOGOUT, LOGIN_ERROR, SET_CURRENT_ID } from './types'
import { api_url } from '../../api_url'

export const login = (email, password) => dispatch => {
	console.log("authActions login", email, password)

	const endpoint = `${api_url}rest-auth/login/` 
	let lookupOptions = {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"email": email,
			"password": password,
		})
	}

	fetch(endpoint, lookupOptions)
	.then(function(response){
		if (response.ok){
			return response.json()
		} else {
			dispatch({
				type: LOGIN_ERROR,
				payload: true,
			})
		}
	}).then(function(responseData){
		if (responseData){
			window.localStorage.setItem('authKey', responseData.key)
			dispatch({
				type: LOGIN,
				payload: responseData.key,
			})
			dispatch(getCurrentID())
		} else {
			dispatch({
				type: LOGIN_ERROR,
				payload: true,
			})
		}
	}).catch(function(error){
		console.log("error", error)
		dispatch({
			type: LOGIN_ERROR,
			payload: true,
		})
	})
}

function getAuthKey(){
	return window.localStorage.getItem('authKey');
}

export const getCurrentID = () => dispatch => {
	console.log("authActions getCurrentID")

	const endpoint = `${api_url}rest-auth/users/current_id` 
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
		// console.log("responseData", responseData)
		window.localStorage.setItem('currentID', responseData)
		dispatch({
			type: SET_CURRENT_ID,
			payload: responseData,
		})
	}).catch(function(error){
		console.log("error", error)
	})
}

export const logout = () => dispatch => {
	window.localStorage.removeItem('authKey')
	dispatch({
		type: LOGOUT,
	})
}