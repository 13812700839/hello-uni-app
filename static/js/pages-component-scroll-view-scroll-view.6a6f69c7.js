(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-scroll-view-scroll-view"],{"2d0a":function(t,i,e){var l=e("79c9");"string"===typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);var o=e("4f06").default;o("4b4daed7",l,!0,{sourceMap:!1,shadowMode:!1})},3171:function(t,i,e){"use strict";e.r(i);var l=e("b970"),o=e.n(l);for(var n in l)"default"!==n&&function(t){e.d(i,t,(function(){return l[t]}))}(n);i["default"]=o.a},"4f44":function(t,i,e){"use strict";var l=e("2d0a"),o=e.n(l);o.a},"593c":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return l}));var l={pageHead:e("c9f2").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("page-head",{attrs:{title:"scroll-view,区域滚动视图"}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Vertical Scroll"),e("v-uni-text",[t._v("\\n纵向滚动")])],1),e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"},on:{scrolltoupper:function(i){arguments[0]=i=t.$handleEvent(i),t.upper.apply(void 0,arguments)},scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.lower.apply(void 0,arguments)},scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"scroll-view-item uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),e("v-uni-view",{staticClass:"scroll-view-item uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),e("v-uni-view",{staticClass:"scroll-view-item uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1),e("v-uni-view",{staticClass:"uni-link uni-center uni-common-mt",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goTop.apply(void 0,arguments)}}},[t._v("点击这里返回顶部")]),e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Horizontal Scroll"),e("v-uni-text",[t._v("\\n横向滚动")])],1),e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true","scroll-left":"120"},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),e("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),e("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1),e("v-uni-view",{staticClass:"uni-common-pb"})],1)],1)},n=[]},"79c9":function(t,i,e){var l=e("24fb");i=l(!1),i.push([t.i,".scroll-Y[data-v-560af2fa]{height:%?300?%}.scroll-view_H[data-v-560af2fa]{white-space:nowrap;width:100%}.scroll-view-item[data-v-560af2fa]{height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}.scroll-view-item_H[data-v-560af2fa]{display:inline-block;width:100%;height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}",""]),t.exports=i},"7dfa":function(t,i,e){"use strict";e.r(i);var l=e("593c"),o=e("3171");for(var n in o)"default"!==n&&function(t){e.d(i,t,(function(){return o[t]}))}(n);e("4f44");var s,c=e("f0c5"),a=Object(c["a"])(o["default"],l["b"],l["c"],!1,null,"560af2fa",null,!1,l["a"],s);i["default"]=a.exports},b970:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{scrollTop:0,old:{scrollTop:0}}},methods:{upper:function(i){t("log",i," at pages/component/scroll-view/scroll-view.vue:48")},lower:function(i){t("log",i," at pages/component/scroll-view/scroll-view.vue:51")},scroll:function(i){t("log",i," at pages/component/scroll-view/scroll-view.vue:54"),this.old.scrollTop=i.detail.scrollTop},goTop:function(t){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=0})),uni.showToast({icon:"none",title:"纵向滚动 scrollTop 值已被修改为 0"})}}};i.default=e}).call(this,e("0de9")["log"])}}]);