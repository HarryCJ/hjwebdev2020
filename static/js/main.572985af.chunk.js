(this.webpackJsonphjwebwdev=this.webpackJsonphjwebwdev||[]).push([[0],{30:function(e,t,a){},57:function(e,t,a){e.exports=a(87)},67:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(14),o=a.n(s),i=a(13),c=a(27),l=a(51),u=a(4),p=a(3);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}Object(p.a)();var f={history:Object(p.a)(),routes:{home:"#",projects:"#projects",projectsSAB:"#projects-sab",projectsAB:"#projects-ab",projectsSamAndMax:"#projects-samandmax",projectsSPG:"#projects-sohamplaygroup",about:"#about"},page_opacity:1,page_left:0,pageContentSelector:""};function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y={authKey:window.localStorage.getItem("authKey"),loginError:!1,currentID:parseInt(window.localStorage.getItem("currentID"))};function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O={addressMessages:[],addresses:{}};function v(){var e=parseInt(window.localStorage.getItem("message-id")||"0");return window.localStorage.setItem("message-id",e+1),e}var j=a(18),_=a.n(j);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function D(e){_.a.setItem("offlineQueue",JSON.stringify(e)),console.log("registering sync"),navigator.serviceWorker.ready.then((function(e){if(console.log("registering sync ok"),e.sync)return e.sync.register("onlineSync")}))}var P={offlineQueue:[],onlineCount:0,offlineFileCount:0,savedFilesToDelete:[]};function k(e,t){var a=[];return Object.keys(e).forEach((function(r){e[r]&&("rooms"===r?e[r].forEach((function(e){delete e.history,e.comments.forEach((function(e){if(delete e.history,e.image&&e.image.length>0){var r=[];e.image.forEach((function(e){console.log("room image",e),e.url&&"object"===typeof e.url&&(_.a.setItem("file ".concat(t+1),e.url),e.url=t+1,a.push(t+1),t++),r.push(e)})),e.image=r}}))})):"comments"===r?e[r].forEach((function(e){if(delete e.history,e.image&&e.image.length>0&&"object"===typeof e.image[0]){var r=[];e.image.forEach((function(e){console.log("comment image",e),e.url&&"object"===typeof e.url&&(console.log("saving image",e),_.a.setItem("file ".concat(t+1),e.url),e.url=t+1,a.push(t+1),t++),r.push(e)})),e.image=r}})):"signature_image"===r&&e[r]&&"object"===typeof e[r]&&(_.a.setItem("file ".concat(t+1),e[r]),e[r]=t+1,t++))})),console.log("new offline validatedData",e),_.a.setItem("offlineFileCount",t),{item:e,offlineFileCount:t,filesToDelete:a}}var M=a(33),A=a.n(M),C=a(41);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R={checkMessages:[],checks:{}};function I(){var e=parseInt(window.localStorage.getItem("message-id")||"0");return window.localStorage.setItem("message-id",e+1),e}function L(e){_.a.getItem("save_check_".concat(e)).then((function(t){t&&function(){var t=Object(C.a)(A.a.mark((function t(a){var r,n,s,o,i,c,l,u,p,d,m,f,g,h,y,E,b,O;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(){return(n=Object(C.a)(A.a.mark((function e(t){var a,r,n,s,o,i,c,l,u,p,d,m,f;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],r=!0,n=!1,s=void 0,e.prev=4,o=t[Symbol.iterator]();case 6:if(r=(i=o.next()).done){e.next=31;break}if(!((c=i.value).image&&c.image.length>0)){e.next=28;break}for(l=!0,u=!1,p=void 0,e.prev=12,d=c.image[Symbol.iterator]();!(l=(m=d.next()).done);l=!0)(f=m.value).url&&"number"===typeof f.url&&a.push(f.url);e.next=20;break;case 16:e.prev=16,e.t0=e.catch(12),u=!0,p=e.t0;case 20:e.prev=20,e.prev=21,l||null==d.return||d.return();case 23:if(e.prev=23,!u){e.next=26;break}throw p;case 26:return e.finish(23);case 27:return e.finish(20);case 28:r=!0,e.next=6;break;case 31:e.next=37;break;case 33:e.prev=33,e.t1=e.catch(4),n=!0,s=e.t1;case 37:e.prev=37,e.prev=38,r||null==o.return||o.return();case 40:if(e.prev=40,!n){e.next=43;break}throw s;case 43:return e.finish(40);case 44:return e.finish(37);case 45:return e.abrupt("return",a);case 46:case"end":return e.stop()}}),e,null,[[4,33,37,45],[12,16,20,28],[21,,23,27],[38,,40,44]])})))).apply(this,arguments)},r=function(e){return n.apply(this,arguments)},s=[],o=JSON.parse(a),t.next=6,r(o.comments);case 6:i=t.sent,s=s.concat(i),c=!0,l=!1,u=void 0,t.prev=11,p=o.rooms[Symbol.iterator]();case 13:if(c=(d=p.next()).done){t.next=22;break}return m=d.value,t.next=17,r(m.comments);case 17:f=t.sent,s=s.concat(f);case 19:c=!0,t.next=13;break;case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(11),l=!0,u=t.t0;case 28:t.prev=28,t.prev=29,c||null==p.return||p.return();case 31:if(t.prev=31,!l){t.next=34;break}throw u;case 34:return t.finish(31);case 35:return t.finish(28);case 36:for(console.log("deleteAutoSave filesToDelete",s),g=!0,h=!1,y=void 0,t.prev=40,E=s[Symbol.iterator]();!(g=(b=E.next()).done);g=!0)O=b.value,_.a.removeItem("file ".concat(O));t.next=48;break;case 44:t.prev=44,t.t1=t.catch(40),h=!0,y=t.t1;case 48:t.prev=48,t.prev=49,g||null==E.return||E.return();case 51:if(t.prev=51,!h){t.next=54;break}throw y;case 54:return t.finish(51);case 55:return t.finish(48);case 56:_.a.removeItem("save_check_".concat(e));case 57:case"end":return t.stop()}}),t,null,[[11,24,28,36],[29,,31,35],[40,44,48,56],[49,,51,55]])})));return function(e){return t.apply(this,arguments)}}()(t)}))}function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x={userMessages:[],userList:[],createUserErrors:{},showCreateUserModal:!1};function F(){var e=parseInt(window.localStorage.getItem("message-id")||"0");return window.localStorage.setItem("message-id",e+1),e}function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var q={reportMessages:[],reports:{}};function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var K={settingsMessages:[],hiddenElement:null,settings:{midterm_declaration:"",disclaimer:"",room_names:[],default_rooms:[]},isLoading:!1};function W(){var e=parseInt(window.localStorage.getItem("message-id")||"0");return window.localStorage.setItem("message-id",e+1),e}var J=Object(c.c)({site:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE_OPACITY":return m({},e,{page_opacity:t.page_opacity,page_left:t.page_left});case"SET_PAGE_CONTENT_SELECTOR":return m({},e,{pageContentSelector:t.payload});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action.payload",t.payload),t.type){case"SET_CURRENT_ID":return h({},e,{currentID:t.payload});case"LOGIN":return h({},e,{loginError:!1,authKey:t.payload});case"LOGOUT":return h({},e,{loginError:!1,authKey:null});case"LOGIN_ERROR":return h({},e,{loginError:t.payload});default:return e}},address:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;console.log("action",t);var a=null,r=null;switch(t.type){case"FETCH_ADDRESSES":return!0===t.clearResults?b({},e,{addresses:Object(u.a)({},t.params.page,t.payload)}):b({},e,{addresses:Object.assign({},e.addresses,Object(u.a)({},t.params.page,t.payload))});case"CREATE_ADDRESS":return t.payload.id=v(),b({},e,{addressMessages:e.addressMessages.concat([t.payload]).slice(-3)});case"EDIT_ADDRESS":return a=Object.assign({},e.addresses),Object.keys(a).forEach((function(e){a[e].results.forEach((function(r,n){r.id===t.payload.item.id&&(a[e].results[n]=t.payload.item)}))})),(r=e.addressMessages).forEach((function(e){e.item&&e.item.id&&e.item.id===t.payload.item.id&&(e.item=t.payload.item)})),t.payload.id=v(),b({},e,{addresses:a,addressMessages:r.concat([t.payload]).slice(-3)});case"DELETE_ADDRESS":return a=Object.assign({},e.addresses),Object.keys(a).forEach((function(e){a[e].results.forEach((function(r,n){r.id===t.payload.item.id&&a[e].results.splice(n,1)}))})),r=e.addressMessages.filter((function(e){return!e.item||e.item.id!==t.payload.item.id})),t.payload.id=v(),b({},e,{addresses:a,addressMessages:r.concat([t.payload]).slice(-3)});case"MASS_DELETE_ADDRESS":return a=Object.assign({},e.addresses),r=e.addressMessages,t.payload.id_array.forEach((function(e){r=r.filter((function(t){return!t.item||t.item.id!==e})),Object.keys(a).forEach((function(t){a[t].results.forEach((function(r,n){e===r.id&&a[t].results.splice(n,1)}))}))})),t.payload.id=v(),b({},e,{addresses:a,addressMessages:r.concat([t.payload]).slice(-3)});case"REMOVE_MESSAGE":return r=e.addressMessages.filter((function(e){return e.id!==t.payload})),b({},e,{addressMessages:r});case"ADD_QUEUE_MESSAGE":case"ADD_ADDRESS_SERVER_ERROR_MESSAGE":return t.payload.id=v(),b({},e,{addressMessages:e.addressMessages.concat([t.payload]).slice(-3)});default:return e}},offline:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;console.log("action.payload",t.payload);var a=[],r=null;switch(t.type){case"SAVE_CHECK":if(delete t.payload.history,t.filesToDelete&&t.filesToDelete.length>0){var n=!0,s=!1,o=void 0;try{for(var i,c=t.filesToDelete[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var l=i.value;"number"===typeof l&&_.a.removeItem("file ".concat(l))}}catch(u){s=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(s)throw o}}}return r=k(t.payload,e.offlineFileCount),_.a.setItem("save_check_".concat(r.item.id),JSON.stringify(r.item)),w({},e,{offlineFileCount:r.offlineFileCount,savedFilesToDelete:r.filesToDelete});case"PUSH_CHECK_TO_OFFLINE_QUEUE":return console.log("offline, storing in queue"),a=Array.from(e.offlineQueue),console.log("offlineQueue",a),t.payload.id=a.length>0?a[a.length-1].id+1:1,delete t.payload.validatedData.history,r=k(t.payload.validatedData,e.offlineFileCount),console.log("offline",r),t.payload.item=r.item,a.push(t.payload),console.log("offlineQueue",a),D(a),w({},e,{offlineQueue:a,offlineFileCount:r.offlineFileCount});case"PUSH_ADDRESS_TO_OFFLINE_QUEUE":return a=Array.from(e.offlineQueue),t.payload.id=a.length>0?a[a.length-1].id+1:1,a.push(t.payload),D(a),w({},e,{offlineQueue:a});case"PUSH_OFFLINE_QUEUE":return console.log("offline, storing in queue"),a=Array.from(e.offlineQueue),t.payload.id=a.length>0?a[a.length-1].id+1:1,a.push(t.payload),console.log("offlineQueue",a),D(a),w({},e,{offlineQueue:a});case"REMOVE_OFFLINE_QUEUE_ITEM":return a=Array.from(e.offlineQueue).filter((function(e){return e.id!==t.payload.id})),console.log("offlineQueue",a),_.a.setItem("offlineQueue",JSON.stringify(a)),w({},e,{offlineQueue:a});case"SET_QUEUE_ITEM_PENDING":return(a=Array.from(e.offlineQueue)).forEach((function(e){e.id===t.payload.id&&(e.status="pending")})),console.log("offlineQueue",a),_.a.setItem("offlineQueue",JSON.stringify(a)),w({},e,{offlineQueue:a});case"UNSET_QUEUE_ITEM_PENDING":return(a=Array.from(e.offlineQueue)).forEach((function(e){e.id===t.payload.id&&(e.status=null)})),console.log("offlineQueue",a),D(a),w({},e,{offlineQueue:a});case"HANDLE_ONLINE":return w({},e,{onlineCount:e.onlineCount+1});case"REFRESH_OFFLINE_QUEUE":if(t.offlineQueue)return w({},e,{offlineQueue:t.offlineQueue});if(t.offlineFileCount)return w({},e,{offlineFileCount:t.offlineFileCount});default:return e}},check:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;console.log("action",t);var a=null,r=null;switch(t.type){case"FETCH_CHECKS":return!0===t.clearResults?T({},e,{checks:Object(u.a)({},t.params.page,t.payload)}):T({},e,{checks:Object.assign({},e.checks,Object(u.a)({},t.params.page,t.payload))});case"CREATE_CHECK":return t.payload.id=I(),T({},e,{checkMessages:e.checkMessages.concat([t.payload]).slice(-3)});case"EDIT_CHECK":return a=Object.assign({},e.checks),Object.keys(a).forEach((function(e){a[e].results.forEach((function(r,n){r.id===t.payload.item.id&&(a[e].results[n]=t.payload.item)}))})),L(t.payload.item.id),(r=e.checkMessages).forEach((function(e){e.item&&e.item.id&&e.item.id===t.payload.item.id&&(e.item=t.payload.item)})),t.payload.id=I(),T({},e,{checks:a,checkMessages:r.concat([t.payload]).slice(-3)});case"DELETE_CHECK":return a=Object.assign({},e.checks),r=e.checkMessages.filter((function(e){return!e.item||e.item.id!==t.payload.item.id})),Object.keys(a).forEach((function(e){a[e].results.forEach((function(r,n){r.id===t.payload.item.id&&a[e].results.splice(n,1)}))})),t.payload.id=I(),T({},e,{checks:a,checkMessages:r.concat([t.payload]).slice(-3)});case"MASS_DELETE_CHECK":return a=Object.assign({},e.checks),r=e.checkMessages,t.payload.id_array.forEach((function(e){r=r.filter((function(t){return!t.item||t.item.id!==e})),Object.keys(a).forEach((function(t){a[t].results.forEach((function(r,n){e===r.id&&a[t].results.splice(n,1)}))}))})),t.payload.id=I(),T({},e,{checks:a,checkMessages:r.concat([t.payload]).slice(-3)});case"REMOVE_MESSAGE":return r=e.checkMessages.filter((function(e){return e.id!==t.payload})),T({},e,{checkMessages:r});case"ADD_QUEUE_MESSAGE":return T({},e,{checkMessages:e.checkMessages.concat([t.payload]).slice(-3)});case"ADD_CHECK_SERVER_ERROR_MESSAGE":return t.payload.id=I(),T({},e,{checkMessages:e.checkMessages.concat([t.payload]).slice(-3)});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;console.log("action.payload",t.payload);var a=[],r=[];switch(t.type){case"SET_SHOW_CREATE_USER_MODAL":return Q({},e,{showCreateUserModal:t.payload});case"SET_CREATE_USER_ERRORS":return Q({},e,{createUserErrors:t.payload});case"GET_USER_LIST":return Q({},e,{userList:t.payload});case"CREATE_USER":return t.payload.id=F(),Q({},e,{userMessages:e.userMessages.concat([t.payload]).slice(-3)});case"EDIT_USER":return(a=e.userList).forEach((function(e,r){e.id===t.payload.item.id&&(a[r]=t.payload.item)})),(r=e.userMessages).forEach((function(e){e.item&&e.item.id&&e.item.id===t.payload.item.id&&(e.item=t.payload.item)})),t.payload.id=F(),Q({},e,{userList:a,userMessages:r.concat([t.payload]).slice(-3)});case"MASS_DELETE_USER":return a=e.userList,r=e.userMessages,t.payload.id_array.forEach((function(e){r=r.filter((function(t){return!t.item||t.item.id!==e})),a.forEach((function(t,r){e===t.id&&a.splice(r,1)}))})),t.payload.id=F(),Q({},e,{userList:a,userMessages:e.userMessages.concat([t.payload]).slice(-3)});case"ADD_USER_MESSAGE":return t.payload.id=F(),Q({},e,{userMessages:e.userMessages.concat([t.payload]).slice(-3)});case"REMOVE_MESSAGE":return r=e.userMessages.filter((function(e){return e.id!==t.payload})),Q({},e,{userMessages:r});case"ADD_QUEUE_MESSAGE":case"ADD_USER_SERVER_ERROR_MESSAGE":return t.payload.id=F(),Q({},e,{userMessages:e.userMessages.concat([t.payload]).slice(-3)});case"DELETE_USER":return a=e.userList,r=e.userMessages.filter((function(e){return!e.item||e.item.id!==t.payload.item.id})),a.forEach((function(e,r){e.id===t.payload.item.id&&a.splice(r,1)})),t.payload.id=F(),Q({},e,{userList:a,userMessages:r.concat([t.payload]).slice(-3)});default:return e}},report:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action",t),t.type){case"FETCH_REPORTS":return!0===t.clearResults?H({},e,{reports:Object(u.a)({},t.params.page,t.payload)}):H({},e,{reports:Object.assign({},e.reports,Object(u.a)({},t.params.page,t.payload))});case"ADD_REPORT_SERVER_ERROR_MESSAGE":var a=window.localStorage.getItem("server-error-id")||0;return t.payload.item={id:a},window.localStorage.setItem("server-error-id",a+1),H({},e,{addressMessages:e.addressMessages.concat([t.payload])});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;console.log("action",t);var a=null;switch(t.type){case"FETCH_SETTINGS":return V({},e,{isLoading:!1,settings:Object.assign({},e.settings,{midterm_declaration:t.midterm_declaration,disclaimer:t.disclaimer,room_names:t.room_names,default_rooms:t.default_rooms}),hiddenElement:t.hiddenElement});case"SUBMIT_SETTINGS":return t.payload.id=W(),V({},e,{isLoading:!1,settingsMessages:e.settingsMessages.concat([t.payload]).slice(-3),settings:Object.assign({},e.settings,{midterm_declaration:t.midterm_declaration,disclaimer:t.disclaimer,room_names:t.room_names,default_rooms:t.default_rooms})});case"SET_SETTINGS_LOADING":return V({},e,{isLoading:t.payload});case"ADD_SETTINGS_SERVER_ERROR_MESSAGE":return t.payload.id=W(),V({},e,{settingsMessages:e.settingsMessages.concat([t.payload]).slice(-3)});case"REMOVE_MESSAGE":return a=e.settingsMessages.filter((function(e){return e.id!==t.payload})),V({},e,{settingsMessages:a});case"ADD_QUEUE_MESSAGE":return t.payload.id=W(),V({},e,{settingsMessages:e.settingsMessages.concat([t.payload]).slice(-3)});default:return e}}}),Y=[l.a],Z=Object(c.d)(J,{},c.a.apply(void 0,Y)),$=(a(67),a(7)),z=a(8),X=a(10),ee=a(9),te=a(11),ae=(a(30),a(93)),re=a(91),ne=a(90),se=a(15),oe=a(21),ie=function(e){function t(e){var a;return Object($.a)(this,t),(a=Object(X.a)(this,Object(ee.a)(t).call(this,e))).handleClick=function(e){var t=a.props,r=t.replace,n=t.to,s=t.delay,o=t.onDelayStart,i=t.onDelayEnd,c=a.props.history;o(e,n),e.defaultPrevented||(e.preventDefault(),a.timeout=setTimeout((function(){r?c.replace(n):c.push(n),i(e,n)}),s))},a.timeout=null,a}return Object(te.a)(t,e),Object(z.a)(t,[{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"render",value:function(){var e=Object.assign({},this.props);return delete e.delay,delete e.onDelayStart,delete e.onDelayEnd,n.a.createElement("a",Object.assign({},e,{onClick:this.handleClick}))}}]),t}(n.a.Component);ie.defaultProps={delay:0,onDelayStart:function(){},onDelayEnd:function(){}},ie.contextTypes=oe.a.contextTypes;var ce=function(e,t){return function(a){console.log("setPageOpacity",e,t),a({type:"SET_PAGE_OPACITY",page_opacity:e,page_left:t})}},le=function(e){function t(){return Object($.a)(this,t),Object(X.a)(this,Object(ee.a)(t).apply(this,arguments))}return Object(te.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return n.a.createElement(ie,{delay:250,to:this.props.projectURL,history:this.props.history,className:"defaultOpaque col-sm-3 project-tile"},n.a.createElement("img",{src:this.props.imgURL,className:"w-100",alt:this.props.imgAlt}),n.a.createElement("h3",{className:"mt-2 mb-0"},this.props.title))}}]),t}(r.Component),ue=Object(i.b)((function(e){return{history:e.site.history}}),{setPageOpacity:ce})(le),pe=function(e){function t(){return Object($.a)(this,t),Object(X.a)(this,Object(ee.a)(t).apply(this,arguments))}return Object(te.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:this.props.className+" page",style:{opacity:this.props.page_opacity,transform:"translateX(".concat(this.props.page_left,"px)")}},this.props.inner)}}]),t}(r.Component),de=Object(i.b)((function(e){return{page_opacity:e.site.page_opacity,page_left:e.site.page_left}}),{})(pe),me=a(16),fe=function(e){function t(){return Object($.a)(this,t),Object(X.a)(this,Object(ee.a)(t).apply(this,arguments))}return Object(te.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return n.a.createElement(ie,{delay:250,to:this.props.to,history:this.props.history,className:"back-button-link"},n.a.createElement("img",{src:"/back-arrow.png",className:"back-arrow"}))}}]),t}(r.Component),ge=Object(i.b)((function(e){return{history:e.site.history,routes:e.site.routes}}),{setPageOpacity:ce})(fe),he=function(e){function t(){return Object($.a)(this,t),Object(X.a)(this,Object(ee.a)(t).apply(this,arguments))}return Object(te.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.props.setPageOpacity(1,0)}),100)}},{key:"render",value:function(){return n.a.createElement(de,{className:"from-left",inner:n.a.createElement(n.a.Fragment,null,n.a.createElement(ge,{to:this.props.routes.projects}),n.a.createElement(ne.a,{sm:8},n.a.createElement("img",{src:"/sohamplaygroup-desktop.png",className:"w-100"})),n.a.createElement(ne.a,{sm:3},n.a.createElement("h3",null,"Soham Playgroup"),n.a.createElement("a",{href:"https://sohamplaygroup.co.uk/",className:"mb-2"},"Visit website"),n.a.createElement("div",{className:"tech-logo"},n.a.createElement("img",{src:"/django-logo.png"})),n.a.createElement("div",{className:"tech-logo ml-2"},n.a.createElement("img",{src:"/wagtail-logo.png"}))))})}}]),t}(r.Component),ye=Object(i.b)((function(e){return{history:e.site.history,routes:e.site.routes}}),{setPageOpacity:ce})(he),Ee=function(e){function t(){return Object($.a)(this,t),Object(X.a)(this,Object(ee.a)(t).apply(this,arguments))}return Object(te.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=[".page > .project-tile:nth-child(1)",".page > .project-tile:nth-child(2)",".page > .project-tile:nth-child(3)",".page > .project-tile:nth-child(4)"],t=[e[0],e[1],e[2],e[3]].join(", ");this.props.setPageContentSelector(t)}},{key:"render",value:function(){return n.a.createElement(de,{inner:n.a.createElement(n.a.Fragment,null,n.a.createElement(ue,{title:"Saint Andrews Bureau Routine Check App",projectURL:this.props.routes.projectsSAB,imgURL:"/sabapp.png",imgAlt:"SAB App"}),n.a.createElement(ue,{title:"Advanced Boosters Virtual Item Store",projectURL:this.props.routes.projectsAB,imgURL:"/abapp.png",imgAlt:"Advanced Boosters"}),n.a.createElement(ue,{title:"Sam and Max Website",projectURL:this.props.routes.projectsSamAndMax,imgURL:"/samandmax.png",imgAlt:"Sam and Max"}),n.a.createElement(ue,{title:"Soham Playgroup Website",projectURL:this.props.routes.projectsSPG,imgURL:"/sohamplaygroup.png",imgAlt:"Soham Playgroup"}))})}}]),t}(r.Component),be=Object(i.b)((function(e){return{history:e.site.history,routes:e.site.routes}}),{setPageOpacity:ce,setPageContentSelector:function(e){return function(t){console.log("setPageContentSelector",e),t({type:"SET_PAGE_CONTENT_SELECTOR",payload:e})}}})(Ee),Oe=function(e){function t(){return Object($.a)(this,t),Object(X.a)(this,Object(ee.a)(t).apply(this,arguments))}return Object(te.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.props.setPageOpacity(1,0)}),100)}},{key:"render",value:function(){return n.a.createElement(de,{className:"from-left",inner:n.a.createElement(n.a.Fragment,null,n.a.createElement(ge,{to:this.props.routes.projects}),n.a.createElement(ne.a,{sm:12},n.a.createElement("img",{src:"/samandmax_header.png",className:"w-100"})))})}}]),t}(r.Component),ve=Object(i.b)((function(e){return{history:e.site.history,routes:e.site.routes}}),{setPageOpacity:ce})(Oe),je=a(94),_e=a(92),Se=n.a.createElement("div",{className:"pswp",tabindex:"-1",role:"dialog","aria-hidden":"true"},n.a.createElement("div",{className:"pswp__bg"}),n.a.createElement("div",{className:"pswp__scroll-wrap"},n.a.createElement("div",{className:"pswp__container"},n.a.createElement("div",{className:"pswp__item"}),n.a.createElement("div",{className:"pswp__item"}),n.a.createElement("div",{className:"pswp__item"})),n.a.createElement("div",{className:"pswp__ui pswp__ui--hidden"},n.a.createElement("div",{className:"pswp__top-bar"},n.a.createElement("div",{className:"pswp__counter"}),n.a.createElement("button",{className:"pswp__button pswp__button--close",title:"Close (Esc)"}),n.a.createElement("button",{className:"pswp__button pswp__button--share",title:"Share"}),n.a.createElement("button",{className:"pswp__button pswp__button--fs",title:"Toggle fullscreen"}),n.a.createElement("button",{className:"pswp__button pswp__button--zoom",title:"Zoom in/out"}),n.a.createElement("div",{className:"pswp__preloader"},n.a.createElement("div",{className:"pswp__preloader__icn"},n.a.createElement("div",{className:"pswp__preloader__cut"},n.a.createElement("div",{className:"pswp__preloader__donut"}))))),n.a.createElement("div",{className:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},n.a.createElement("div",{className:"pswp__share-tooltip"})),n.a.createElement("button",{className:"pswp__button pswp__button--arrow--left",title:"Previous (arrow left)"}),n.a.createElement("button",{className:"pswp__button pswp__button--arrow--right",title:"Next (arrow right)"}),n.a.createElement("div",{className:"pswp__caption"},n.a.createElement("div",{className:"pswp__caption__center"}))))),we=function(e){function t(){var e,a;Object($.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(X.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(n)))).initialiseGallery=function(e,t){console.log("initialiseGallery index",t);var a=document.querySelector(".pswp");console.log("pswpEle",a);var r=new PhotoSwipe(a,PhotoSwipeUI_Default,[{src:"/screenshots/sab/sab (1).png",title:"Main menu",description:"",w:2405,h:1454},{src:"/screenshots/sab/sab (2).png",title:"Address management",description:"",w:2405,h:1454},{src:"/screenshots/sab/sab (3).png",title:"Address edit form",description:"",w:2405,h:1454},{src:"/screenshots/sab/sab (4).png",title:"Routine check management",description:"",w:2405,h:1454},{src:"/screenshots/sab/sab (5).png",title:"Routine check edit form",description:"",w:2405,h:1454},{src:"/screenshots/sab/sab (7).png",title:"Routine check signature",description:"",w:2405,h:1454},{src:"/screenshots/sab/sab (8).png",title:"Inventory edit form",description:"",w:2405,h:1454},{src:"/screenshots/sab/sab (10).png",title:"User edit form",description:"",w:2405,h:1454},{src:"/screenshots/sab/sab (11).png",title:"Inventory settings",description:"",w:2405,h:1454}],{history:!1,maxSpreadZoom:1,focus:!1,escKey:!1,modal:!1,pinchToClose:!1,closeOnScroll:!1,closeOnVerticalDrag:!1,index:0,addCaptionHTMLFn:function(e,t,a){var r=e.title&&""!==e.title,n=e.description&&""!==e.description;return r&&n?(t.children[0].innerHTML=e.title+"<br/><small>"+e.description+"</small>",!0):r||n?(t.children[0].innerHTML=r?e.title:e.description,!0):(t.children[0].innerText="",!1)}});r.listen("updateScrollOffset",(function(e){var t=a.getBoundingClientRect();e.x+=t.left,e.y+=t.top})),r.listen("preventDragEvent",(function(e,t,a){a.prevent=!1})),r.init()},a}return Object(te.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.props.setPageOpacity(1,0)}),100)}},{key:"render",value:function(){var e=this;return window.requestAnimationFrame((function(){e.initialiseGallery()})),n.a.createElement(de,{className:"from-left ml-3 mt-5",inner:n.a.createElement(re.a,null,n.a.createElement(ne.a,{sm:2},n.a.createElement(je.a,{placement:"bottom",delay:{show:50,hide:50},overlay:n.a.createElement(_e.a,{id:"button-tooltip"},n.a.createElement("b",null,"Visit website"))},n.a.createElement("a",{href:"https://www.sab.co.uk/"},n.a.createElement("img",{src:"/sab-border-3.png",className:"w-100"})))),n.a.createElement(ne.a,{sm:10},n.a.createElement("h3",{className:""},"SAB Property Management App"),n.a.createElement("p",{className:"font-italic"},"Saint Andrews Bureau is a lettings, sales, estate management and investment company with offices located in London, Cambridgeshire and Hertfordshire.")),n.a.createElement(ne.a,{sm:12,className:"mt-3"},Se),n.a.createElement(ne.a,{sm:6,className:"mt-3"},n.a.createElement("p",null,"Features:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Offline capability"),n.a.createElement("li",null,"Mobile friendly"),n.a.createElement("li",null,"Cross-platform - iOS/Android/Desktop browser"),n.a.createElement("li",null,"Touch-screen signature input"),n.a.createElement("li",null,"Intuitive UI"),n.a.createElement("li",null,"PDF reports"),n.a.createElement("li",null,"Email notifications"))),n.a.createElement(ne.a,{sm:6,className:"mt-3 text-right"},n.a.createElement("p",null,"Made with:"),n.a.createElement("ul",{className:"logo-list"},n.a.createElement(je.a,{placement:"bottom",delay:{show:50,hide:50},overlay:n.a.createElement(_e.a,{id:"button-tooltip"},n.a.createElement("b",null,"ReactJS"))},n.a.createElement("li",null,n.a.createElement("a",{href:"https://reactjs.org/"},n.a.createElement("img",{src:"/logos/reactjs-logo.png",height:"50"})))),n.a.createElement(je.a,{placement:"bottom",delay:{show:50,hide:50},overlay:n.a.createElement(_e.a,{id:"button-tooltip"},n.a.createElement("b",null,"Django"))},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.djangoproject.com/"},n.a.createElement("img",{src:"/logos/django-logo.png",height:"50"})))),n.a.createElement(je.a,{placement:"bottom",delay:{show:50,hide:50},overlay:n.a.createElement(_e.a,{id:"button-tooltip"},n.a.createElement("b",null,"Bootstrap"))},n.a.createElement("li",null,n.a.createElement("a",{href:"https://getbootstrap.com/"},n.a.createElement("img",{src:"/logos/bootstrap-logo.svg",height:"50"})))),n.a.createElement(je.a,{placement:"bottom",delay:{show:50,hide:50},overlay:n.a.createElement(_e.a,{id:"button-tooltip"},n.a.createElement("b",null,"MySQL"))},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.mysql.com/"},n.a.createElement("img",{src:"/logos/mysql-logo.png",height:"50"})))))))})}}]),t}(r.Component),De=Object(i.b)((function(e){return{history:e.site.history,routes:e.site.routes}}),{setPageOpacity:ce,toggleAlignCenter:function(e){return function(t){console.log("toggleAlignCenter",e);var a=document.querySelector(".center-row");a.offsetTop,a.offsetHeight}}})(we),Pe=(r.Component,r.Component,function(e){function t(e){var a;return Object($.a)(this,t),(a=Object(X.a)(this,Object(ee.a)(t).call(this,e))).AnimatePageContent=function(e,t){Object(se.a)({targets:e,opacity:[{value:0,duration:t},{value:1,easing:"easeInOutQuad",duration:500}],scale:[{value:1,easing:"easeInQuad",duration:t},{value:1.025,easing:"easeInQuad",duration:200},{value:1,easing:"easeOutQuad",duration:200}],delay:se.a.stagger(100,{easing:"easeInSine"})}),setTimeout((function(){document.querySelectorAll(e).forEach((function(e){return e.style.transform=""}))}),t+1e3)},a.textWrapper=function(e,t){return n.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.replace(/\S/g,"<span class='"+t+"'>$&</span>")}})},a.setActive=function(e){document.querySelector(".nav-links .active").classList.remove("active");var t=e.target;setTimeout((function(){return t.classList.add("active")}),50)},a.state={currentPage:null},a.selectors={logo:".App-logo",title:".rightSide > h1",titleLetters:".rightSide > h1 .letter",subTitle:".rightSide > h2",subTitleLetters:".rightSide > h2 .letter",links:[".leftSide > .nav-links > a:nth-child(1)",".leftSide > .nav-links > a:nth-child(2)",".leftSide > .nav-links > a:nth-child(3)",".leftSide > .nav-links > a:nth-child(4)"]},a.paths=[{name:a.props.routes.home,value:n.a.createElement(be,null)},{name:a.props.routes.projects,value:n.a.createElement(be,null)},{name:a.props.routes.projectsSAB,value:n.a.createElement(De,null)},{name:a.props.routes.projectsSamAndMax,value:n.a.createElement(ve,null)},{name:a.props.routes.projectsSPG,value:n.a.createElement(ye,null)}],a}return Object(te.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({currentPage:this.paths.find((function(e){return e.name===window.location.hash}))});this.props.history.listen((function(t,a){e.setState({currentPage:e.paths.find((function(e){return e.name===window.location.hash}))},(function(){var t=e.props.pageContentSelector;e.AnimatePageContent(t,0)}))}));var t=this.selectors,a=(t.logo,t.title,t.titleLetters),r=t.links,n=(t.subTitle,t.subTitleLetters);this.props.pageContentSelector;Object(se.a)({targets:a,opacity:1,duration:500,easing:"easeInSine",scale:[{value:1.05,easing:"easeInQuad",duration:200},{value:1,easing:"easeOutQuad",duration:200}],delay:se.a.stagger(25,{start:500})}),Object(se.a)({targets:n,opacity:1,duration:500,easing:"easeInSine",scale:[{value:1.05,easing:"easeInQuad",duration:200},{value:1,easing:"easeOutQuad",duration:200}],delay:se.a.stagger(25,{start:750})}),Object(se.a)({targets:".top-padding",paddingTop:"0vh",duration:1500,easing:"easeInOutQuad",delay:500}),Object(se.a)({targets:[r[0],r[1],r[2],r[3]],opacity:1,duration:500,easing:"easeInSine",scale:[{value:1.01,easing:"easeInQuad",duration:200},{value:1,easing:"easeOutQuad",duration:200}],delay:se.a.stagger(200,{start:1e3})}),setTimeout((function(){document.querySelector(r[0]).classList.add("active")}),1800)}},{key:"componentWillReceiveProps",value:function(e){var t=e.pageContentSelector;t&&this.AnimatePageContent(t,1250)}},{key:"render",value:function(){console.log("render",this.state);var e=this.state.currentPage;return n.a.createElement(ae.a,null,n.a.createElement(me.a,{history:this.props.history},n.a.createElement(re.a,{className:"center-row pt-5"},n.a.createElement("div",{className:"top-padding"}),n.a.createElement(ne.a,{sm:2,className:"leftSide"},n.a.createElement("img",{src:"/logofinal.png",className:"App-logo",alt:"logo"}),n.a.createElement("div",{className:"nav-links"},n.a.createElement(oe.a,{className:"defaultOpaque",onClick:this.setActive,to:this.props.routes.projects},"Projects"),n.a.createElement(oe.a,{className:"defaultOpaque",onClick:this.setActive,to:this.props.routes.about},"About"),n.a.createElement("a",{className:"defaultOpaque",onClick:this.setActive,href:"#"},"Services"),n.a.createElement("a",{className:"defaultOpaque",onClick:this.setActive,href:"#"},"Contact"))),n.a.createElement(ne.a,{sm:10,className:"rightSide"},n.a.createElement("h1",{className:""},this.textWrapper("Harry Johnson Web Development","defaultOpaque letter")),n.a.createElement("h2",{className:""},this.textWrapper("Full-stack developer","defaultOpaque letter")),n.a.createElement("div",{className:"mt-3 mx-n3"},e&&e.value||n.a.createElement(be,null),"            ")))))}}]),t}(r.Component)),ke=Object(i.b)((function(e){return{history:e.site.history,routes:e.site.routes,pageContentSelector:e.site.pageContentSelector}}),{setPageOpacity:ce})(Pe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Me=document.getElementById("root");o.a.render(n.a.createElement(i.a,{store:Z},n.a.createElement(ke,null)),Me),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.572985af.chunk.js.map