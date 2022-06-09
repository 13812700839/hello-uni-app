(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-rate-rate"],{"20b2":function(t,e,n){"use strict";(function(t){n("c975"),n("a9e3"),n("e25e"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniRate",props:{isFill:{type:[Boolean,String],default:!0},color:{type:String,default:"#ececec"},activeColor:{type:String,default:"#ffca3e"},disabledColor:{type:String,default:"#c0c0c0"},size:{type:[Number,String],default:24},value:{type:[Number,String],default:0},modelValue:{type:[Number,String],default:0},max:{type:[Number,String],default:5},margin:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1},readonly:{type:[Boolean,String],default:!1},allowHalf:{type:[Boolean,String],default:!1},touchable:{type:[Boolean,String],default:!0}},data:function(){return{valueSync:"",userMouseFristMove:!0,userRated:!1,userLastRate:1}},watch:{value:function(t){this.valueSync=Number(t)},modelValue:function(t){this.valueSync=Number(t)}},computed:{stars:function(){for(var t=this.valueSync?this.valueSync:0,e=[],n=Math.floor(t),i=Math.ceil(t),a=0;a<this.max;a++)n>a?e.push({activeWitch:"100%"}):i-1===a?e.push({activeWitch:100*(t-n)+"%"}):e.push({activeWitch:"0"});return e},marginNumber:function(){return Number(this.margin)}},created:function(){this.valueSync=Number(this.value||this.modelValue),this._rateBoxLeft=0,this._oldValue=null},mounted:function(){var t=this;setTimeout((function(){t._getSize()}),100),this.PC=this.IsPC()},methods:{touchstart:function(t){if(!this.IsPC()&&!this.readonly&&!this.disabled){var e=t.changedTouches[0],n=e.clientX,i=e.screenX;this._getRateCount(n||i)}},touchmove:function(t){if(!this.IsPC()&&!this.readonly&&!this.disabled&&this.touchable){var e=t.changedTouches[0],n=e.clientX,i=e.screenX;this._getRateCount(n||i)}},mousedown:function(t){if(this.IsPC()&&!this.readonly&&!this.disabled){var e=t.clientX;this.userLastRate=this.valueSync,this._getRateCount(e),this.userRated=!0}},mousemove:function(e){if(this.IsPC()&&!this.userRated&&(this.userMouseFristMove&&(t("log","---mousemove----",this.valueSync," at uni_modules/uni-rate/components/uni-rate/uni-rate.vue:220"),this.userLastRate=this.valueSync,this.userMouseFristMove=!1),!this.readonly&&!this.disabled&&this.touchable)){var n=e.clientX;this._getRateCount(n)}},mouseleave:function(t){this.IsPC()&&(this.readonly||this.disabled||!this.touchable||(this.userRated?this.userRated=!1:this.valueSync=this.userLastRate))},IsPC:function(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,i=0;i<e.length-1;i++)if(t.indexOf(e[i])>0){n=!1;break}return n},_getRateCount:function(t){this._getSize();var e=Number(this.size);if(isNaN(e))return new Error("size 属性只能设置为数字");var n=t-this._rateBoxLeft,i=parseInt(n/(e+this.marginNumber));i=i<0?0:i,i=i>this.max?this.max:i;var a=parseInt(n-(e+this.marginNumber)*i),u=0;(this._oldValue!==i||this.PC)&&(this._oldValue=i,u=this.allowHalf?a>e/2?i+1:i+.5:i+1,u=Math.max(.5,Math.min(u,this.max)),this.valueSync=u,this._onChange())},_onChange:function(){this.$emit("input",this.valueSync),this.$emit("update:modelValue",this.valueSync),this.$emit("change",{value:this.valueSync})},_getSize:function(){var t=this;uni.createSelectorQuery().in(this).select(".uni-rate").boundingClientRect().exec((function(e){e&&(t._rateBoxLeft=e[0].left)}))}}};e.default=i}).call(this,n("0de9")["log"])},"2c93":function(t,e,n){var i=n("5435");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7a7ba0ce",i,!0,{sourceMap:!1,shadowMode:!1})},"3c65":function(t,e,n){"use strict";n.r(e);var i=n("d230"),a=n("4a70");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("673e");var s,o=n("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"1d32552a",null,!1,i["a"],s);e["default"]=r.exports},"4a70":function(t,e,n){"use strict";n.r(e);var i=n("20b2"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},5435:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-rate[data-v-1d32552a]{display:flex;line-height:1;font-size:0;flex-direction:row;cursor:pointer}.uni-rate__icon[data-v-1d32552a]{position:relative;line-height:1;font-size:0}.uni-rate__icon-on[data-v-1d32552a]{overflow:hidden;position:absolute;top:0;left:0;line-height:1;text-align:left}.uni-cursor-not-allowed[data-v-1d32552a]{cursor:not-allowed!important}',""]),t.exports=e},"673e":function(t,e,n){"use strict";var i=n("2c93"),a=n.n(i);a.a},"6abd":function(t,e,n){"use strict";n.r(e);var i=n("778f"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},"778f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},data:function(){return{rateValue:0}},onLoad:function(){var t=this;setTimeout((function(){t.rateValue=3}),1e3)},methods:{onChange:function(e){t("log","rate发生改变:"+JSON.stringify(e)," at pages/extUI/rate/rate.nvue:55")}}};e.default=n}).call(this,n("0de9")["log"])},b66f:function(t,e,n){"use strict";n.r(e);var i=n("bb14"),a=n("6abd");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);var s,o=n("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"b6433850",null,!1,i["a"],s);e["default"]=r.exports},bb14:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var i={uniCard:n("54a9").default,uniSection:n("dfac").default,uniRate:n("3c65").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("uni-card",{attrs:{"is-full":!0,"is-shadow":!1}},[n("v-uni-text",{staticClass:"uni-h6"},[t._v("评分组件多用于商品评价打分、服务态度评价、用户满意度等场景。")])],1),n("uni-section",{attrs:{title:"基本用法",type:"line",padding:!0}},[n("uni-rate",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}},model:{value:t.rateValue,callback:function(e){t.rateValue=e},expression:"rateValue"}})],1),n("uni-section",{attrs:{title:"不支持滑动手势选择评分",subTitle:"设置 touchable 属性控制是否开启手势选择",type:"line",padding:!0}},[n("uni-rate",{attrs:{touchable:!1,value:5},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}})],1),n("uni-section",{attrs:{title:"设置尺寸大小",subTitle:"设置 size 属性控制组件大小",type:"line",padding:!0}},[n("uni-rate",{attrs:{size:"18",value:5}})],1),n("uni-section",{attrs:{title:"设置评分数",subTitle:"设置 max 属性控制组件最大星星数量",type:"line",padding:!0}},[n("uni-rate",{attrs:{max:10,value:5}})],1),n("uni-section",{attrs:{title:"设置星星间隔",subTitle:"设置 margin 属性控制星星间隔",type:"line",padding:!0}},[n("uni-rate",{attrs:{value:4,margin:"20"}})],1),n("uni-section",{attrs:{title:"设置颜色",subTitle:"使用 color 属性设置星星颜色",type:"line",padding:!0}},[n("uni-rate",{attrs:{value:3,color:"#bbb","active-color":"red"}})],1),n("uni-section",{attrs:{title:"半星",subTitle:"使用 allow-half 属性设置是否显示半星",type:"line",padding:!0}},[n("uni-rate",{attrs:{"allow-half":!0,value:3.5}})],1),n("uni-section",{attrs:{title:"只读状态",subTitle:"使用 readonly 属性设置组件只读",type:"line",padding:!0}},[n("uni-rate",{attrs:{readonly:!0,value:2}})],1),n("uni-section",{attrs:{title:"禁用状态",subTitle:"使用 disabled 属性设置组件禁用",type:"line",padding:!0}},[n("uni-rate",{attrs:{disabled:!0,disabledColor:"#ccc",value:3}})],1),n("uni-section",{attrs:{title:"未选中的星星为镂空状态",subTitle:"使用 is-fill 属性设置星星镂空",type:"line",padding:!0}},[n("uni-rate",{attrs:{value:3,"is-fill":!1}})],1)],1)},u=[]},d230:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("1687").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{ref:"uni-rate",staticClass:"uni-rate"},t._l(t.stars,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-rate__icon",class:{"uni-cursor-not-allowed":t.disabled},style:{"margin-right":t.marginNumber+"px"},on:{touchstart:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)},mousedown:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.mousedown.apply(void 0,arguments)},mousemove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.mousemove.apply(void 0,arguments)},mouseleave:function(e){arguments[0]=e=t.$handleEvent(e),t.mouseleave.apply(void 0,arguments)}}},[n("uni-icons",{attrs:{color:t.color,size:t.size,type:t.isFill?"star-filled":"star"}}),n("v-uni-view",{staticClass:"uni-rate__icon-on",style:{width:e.activeWitch}},[n("uni-icons",{attrs:{color:t.disabled?t.disabledColor:t.activeColor,size:t.size,type:"star-filled"}})],1)],1)})),1)],1)},u=[]}}]);