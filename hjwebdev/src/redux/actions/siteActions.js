import { SET_PAGE_OPACITY } from './types'
// import { api_url } from '../../api_url'
// import anime from 'animejs';

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