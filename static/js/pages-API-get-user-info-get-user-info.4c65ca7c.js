(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-user-info-get-user-info"],{5179:function(e,n,t){"use strict";t.r(n);var i=t("6899"),a=t.n(i);for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);n["default"]=a.a},6899:function(e,n,t){"use strict";(function(e){var i=t("4ea4");t("c975"),t("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("5530")),r=t("26cb"),o={data:function(){return{title:"getUserInfo",hasUserInfo:!1,userInfo:{},btnLoading:!1}},computed:(0,a.default)({},(0,r.mapState)(["loginProvider","isUniverifyLogin"])),methods:(0,a.default)((0,a.default)({},(0,r.mapActions)(["getPhoneNumber"])),{},{getUserInfo:function(){var n=this;if(this.btnLoading=!0,this.isUniverifyLogin)this.getPhoneNumber(uni.getStorageSync("univerifyInfo")).then((function(e){n.hasUserInfo=!0,n.userInfo={phoneNumber:e}})).catch((function(t){e("error","getUserInfo fail:",t," at pages/API/get-user-info/get-user-info.vue:65"),n.hasUserInfo=!1})).finally((function(){n.btnLoading=!1}));else{if("apple"===this.loginProvider){var t=uni.getStorageSync("apple_nickname");if(t)return this.hasUserInfo=!0,this.userInfo={nickName:t},void(this.btnLoading=!1)}uni.getUserInfo({provider:this.loginProvider,success:function(e){n.hasUserInfo=!0,n.userInfo=e.userInfo},fail:function(n){e("log","getUserInfo fail",n," at pages/API/get-user-info/get-user-info.vue:90");var t=n.errMsg;~t.indexOf("uni.login")&&(t="请在登录页面完成登录操作"),uni.getSetting({success:function(e){var n=e.authSetting["scope.userInfo"];n?uni.showModal({title:"获取用户信息失败",content:"错误原因"+t,showCancel:!1}):uni.showModal({title:"授权失败",content:"Hello uni-app需要获取您的用户信息，请在设置界面打开相关权限",success:function(e){e.confirm&&uni.openSetting()}})}})},complete:function(){n.btnLoading=!1}})}},mpGetUserInfo:function(n){e("log","mpGetUserInfo",n," at pages/API/get-user-info/get-user-info.vue:133"),"getUserInfo:ok"===n.detail.errMsg?(this.hasUserInfo=!0,n.detail&&n.detail.userInfo&&(this.userInfo=n.detail.userInfo)):uni.showModal({title:"获取用户信息失败",content:"错误原因"+n.detail.errMsg,showCancel:!1})},clear:function(){this.hasUserInfo=!1,this.userInfo={}}})};n.default=o}).call(this,t("0de9")["log"])},"922e":function(e,n,t){"use strict";t.r(n);var i=t("ea27"),a=t("5179");for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);t("ae31");var o,s=t("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"8e051d46",null,!1,i["a"],o);n["default"]=u.exports},a722:function(e,n,t){var i=t("b169");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("4f06").default;a("76216b54",i,!0,{sourceMap:!1,shadowMode:!1})},ae31:function(e,n,t){"use strict";var i=t("a722"),a=t.n(i);a.a},b169:function(e,n,t){var i=t("24fb");n=i(!1),n.push([e.i,".userinfo-avatar[data-v-8e051d46]{border-radius:%?128?%;width:%?128?%;height:%?128?%}",""]),e.exports=n},ea27:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return i}));var i={pageHead:t("c9f2").default},a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("page-head",{attrs:{title:e.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap"},[t("v-uni-view",{staticStyle:{background:"#FFF",padding:"40rpx"}},[!1===e.hasUserInfo?[t("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t("v-uni-text",[e._v("请点击下方按钮获取用户头像及昵称或手机号")])],1)]:e._e(),!0===e.hasUserInfo?[t("v-uni-view",{staticClass:"uni-h4 uni-center uni-common-mt"},[e._v(e._s(e.userInfo.nickName||e.userInfo.nickname||e.userInfo.gender||e.userInfo.email||e.userInfo.phoneNumber))]),e.userInfo.avatarUrl||e.userInfo.avatar_url?t("v-uni-view",{staticStyle:{padding:"30rpx 0","text-align":"center"}},[t("v-uni-image",{staticClass:"userinfo-avatar",attrs:{src:e.userInfo.avatarUrl||e.userInfo.avatar_url}})],1):e._e()]:e._e()],2),t("v-uni-view",{staticClass:"uni-btn-v"},[t("v-uni-button",{on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.clear.apply(void 0,arguments)}}},[e._v("清空")])],1)],1)],1)},r=[]}}]);