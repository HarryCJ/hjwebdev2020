import { SET_PAGE_OPACITY, SET_PAGE_CONTENT_SELECTOR } from './types'
// import { api_url } from '../../api_url'
import anime from 'animejs';

export const toggleAlignCenter = (isCenter) => dispatch => {
  console.log("toggleAlignCenter", isCenter)
  const centerRow = document.querySelector('.center-row')
  let offsetTop = centerRow.offsetTop + centerRow.offsetHeight
  // anime({
  //     targets: '.center-row',
  //     marginTop: offsetTop*-1,
  //     // delay: 250,
  //     duration: 1000,
  //     easing: 'easeInOutQuad',
  //   });
}

export const setPageOpacity = (value, offsetX) => dispatch => {
	console.log("setPageOpacity", value, offsetX)
	  dispatch({
	    type: SET_PAGE_OPACITY,
	    page_opacity: value,
	    page_left: offsetX,
	  })
      // setTimeout(()=>{
		// document.querySelector('.page').style.setProperty('opacity', value)
		// document.querySelector('.page').style.setProperty('left', offsetX)
      // }, 100)
	// document.querySelector('.page').style.setProperty('transform', `translateX(${offsetX.toString()}px);`)
      // anime({
      //   targets: [document.querySelector('.page')],
      //   keyframes: [
      //     {opacity: value, duration: 1000},
      //   ],
      //   delay: 250,
      //   easing: 'easeInOutQuad',
      // });
}

export const setPageContentSelector = (value) => dispatch => {
      console.log("setPageContentSelector", value)
        dispatch({
          type: SET_PAGE_CONTENT_SELECTOR,
          payload: value,
        })
}