// import { LOGIN, LOGOUT, LOGIN_ERROR, SET_CURRENT_ID } from './types'
// import { api_url } from '../../api_url'

export const setPageOpacity = (value) => dispatch => {
	console.log("setPageOpacity", value)
	document.querySelector('.page').style.setProperty('opacity', value)
}