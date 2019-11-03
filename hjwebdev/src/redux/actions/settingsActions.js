import { FETCH_SETTINGS, SUBMIT_SETTINGS, SET_SETTINGS_LOADING, ADD_SETTINGS_SERVER_ERROR_MESSAGE, PUSH_OFFLINE_QUEUE, ADD_QUEUE_MESSAGE, REMOVE_MESSAGE } from './types'
import { api_url } from '../../api_url'

function getAuthKey(){
  return window.localStorage.getItem('authKey');
}

export const fetchSettings = () => dispatch => {
  dispatch({
    type: SET_SETTINGS_LOADING,
    payload: true,
  })
  const endpoint = `${api_url}rest-auth/options/1/`
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
    if (responseData){
      dispatch({
        type: FETCH_SETTINGS,
        midterm_declaration: responseData.midterm_declaration,
        disclaimer: responseData.disclaimer,
        room_names: responseData.room_names ? responseData.room_names.split(','): [],
        default_rooms: responseData.default_rooms ? responseData.default_rooms.split(',') : [],
        hiddenElement: responseData.hiddenElement,
      })
    }
  }).catch(function(error){
    dispatch({
      type: SET_SETTINGS_LOADING,
      payload: false,
    })
    console.log("error", error)
  })
}

export const submitSettings = (midterm_declaration, disclaimer, room_names, default_rooms) => dispatch => {
  const endpoint = `${api_url}rest-auth/options/1/`
  let lookupOptions = {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '+getAuthKey(),
    },
    body: JSON.stringify({
      "midterm_declaration": midterm_declaration,
      "disclaimer": disclaimer,
      "room_names": room_names.join(','),
      "default_rooms": default_rooms.join(','),
    })
  }
  function offlineActions(){
    dispatch({
      type: PUSH_OFFLINE_QUEUE,
      payload: {title: `Submit Settings`, endpoint: endpoint, lookupOptions: lookupOptions},
    })
    dispatch({
      type: ADD_QUEUE_MESSAGE,
      payload: {
        type: 'submitSettings-cache',
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
          type: ADD_SETTINGS_SERVER_ERROR_MESSAGE,
          payload: { type: 'server-error' }
        })
        offlineActions()
      }
    }).then(function(responseData){
      if (responseData){
        dispatch({
          type: SUBMIT_SETTINGS,
          midterm_declaration: responseData.midterm_declaration,
          disclaimer: responseData.disclaimer,
          room_names: responseData.room_names.split(','),
          default_rooms: responseData.default_rooms.split(','),
          payload: {
            type: 'submitSettings',
          },
        })
      }
    }).catch(function(error){
      console.log("error", error)
      dispatch({
        type: ADD_SETTINGS_SERVER_ERROR_MESSAGE,
        payload: { type: 'server-error' }
      })
      offlineActions()
    })
  }
}



// export const addRoom = (newRoom) => dispatch => {
//   if (newRoom !== ""){
//       dispatch({
//         type: ADD_ROOM,
//         payload: newRoom,
//       })
//   }
// }

// export const removeRoom = (name) => dispatch => {
//   dispatch({
//     type: REMOVE_ROOM,
//     payload: name,
//   })
// }

export const removeMessage = (message) => dispatch => {
  dispatch({
    type: REMOVE_MESSAGE,
    payload: message,
  })
}