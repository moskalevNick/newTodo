(this["webpackJsonpnew-todo"]=this["webpackJsonpnew-todo"]||[]).push([[51],{151:function(t,n,e){"use strict";e.r(n),e.d(n,"KEYBOARD_DID_CLOSE",(function(){return o})),e.d(n,"KEYBOARD_DID_OPEN",(function(){return i})),e.d(n,"copyVisualViewport",(function(){return D})),e.d(n,"keyboardDidClose",(function(){return b})),e.d(n,"keyboardDidOpen",(function(){return p})),e.d(n,"keyboardDidResize",(function(){return w})),e.d(n,"resetKeyboardAssist",(function(){return a})),e.d(n,"setKeyboardClose",(function(){return h})),e.d(n,"setKeyboardOpen",(function(){return c})),e.d(n,"startKeyboardAssist",(function(){return s})),e.d(n,"trackViewportChanges",(function(){return y}));var i="ionKeyboardDidShow",o="ionKeyboardDidHide",r={},u={},d=!1,a=function(){r={},u={},d=!1},s=function(t){f(t),t.visualViewport&&(u=D(t.visualViewport),t.visualViewport.onresize=function(){y(t),p()||w(t)?c(t):b(t)&&h(t)})},f=function(t){t.addEventListener("keyboardDidShow",(function(n){return c(t,n)})),t.addEventListener("keyboardDidHide",(function(){return h(t)}))},c=function(t,n){g(t,n),d=!0},h=function(t){v(t),d=!1},p=function(){var t=(r.height-u.height)*u.scale;return!d&&r.width===u.width&&t>150},w=function(t){return d&&!b(t)},b=function(t){return d&&u.height===t.innerHeight},g=function(t,n){var e=n?n.keyboardHeight:t.innerHeight-u.height,o=new CustomEvent(i,{detail:{keyboardHeight:e}});t.dispatchEvent(o)},v=function(t){var n=new CustomEvent(o);t.dispatchEvent(n)},y=function(t){r=Object.assign({},u),u=D(t.visualViewport)},D=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}}}]);
//# sourceMappingURL=51.5392b398.chunk.js.map