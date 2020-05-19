import { SET_PAGE_CONTENT_SELECTOR } from './types'

export const setPageContentSelector = (value) => dispatch => {
  dispatch({
    type: SET_PAGE_CONTENT_SELECTOR,
    payload: value,
  })
}