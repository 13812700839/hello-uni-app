(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-button-nav-button"],{"284c":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"nav-button"}},onNavigationBarButtonTap:function(t){uni.showToast({title:0===t.index?"你点了分享按钮":"你点了收藏按钮",icon:"none"})}};n.default=i},"920a":function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={pageHead:e("c9f2").default,uniIcons:e("1687").default},u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-title"},[e("uni-icons",{attrs:{size:"16",type:"info"}}),t._v("说明 :")],1),e("v-uni-view",{staticClass:"uni-helllo-text"},[e("v-uni-view",[t._v("在App端可在pages.json里配置buttons，暂不支持动态改变buttons的样式，使用onNavigationBarButtonTap可监听buttons的点击事件。")]),e("v-uni-view",[t._v("在小程序端，不支持配置buttons，故按钮不见了。")])],1)],1)],1)},a=[]},ea94:function(t,n,e){"use strict";e.r(n);var i=e("284c"),u=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=u.a},f6dd:function(t,n,e){"use strict";e.r(n);var i=e("920a"),u=e("ea94");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);var o,r=e("f0c5"),c=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,"695cb389",null,!1,i["a"],o);n["default"]=c.exports}}]);