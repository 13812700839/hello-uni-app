(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-file-file"],{"2c17":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"saveFile",tempFilePath:"",savedFilePath:""}},onLoad:function(){this.savedFilePath=uni.getStorageSync("savedFilePath")},methods:{chooseImage:function(){var t=this;uni.chooseImage({count:1,success:function(e){t.tempFilePath=e.tempFilePaths[0]},fail:function(t){}})},saveFile:function(){var t=this;this.tempFilePath.length>0?uni.saveFile({tempFilePath:this.tempFilePath,success:function(e){t.savedFilePath=e.savedFilePath,uni.setStorageSync("savedFilePath",e.savedFilePath),uni.showModal({title:"保存成功",content:"下次进入页面时，此文件仍可用",showCancel:!1})},fail:function(t){uni.showModal({title:"保存失败",content:"失败原因: "+JSON.stringify(t),showCancel:!1})}}):uni.showModal({content:"请选择文件",showCancel:!1})},clear:function(){uni.setStorageSync("savedFilePath",""),this.tempFilePath="",this.savedFilePath=""},openDocument:function(){uni.downloadFile({url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b3f1d0b0-5168-11eb-bd01-97bc1429a9ff.pdf",success:function(e){uni.openDocument({filePath:e.tempFilePath,success:function(){t("log","打开文档成功"," at pages/API/file/file.vue:108")}})}})}}};e.default=i}).call(this,i("0de9")["log"])},"2e2c":function(t,e,i){"use strict";var a=i("8299"),n=i.n(a);n.a},"2fd7":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={pageHead:i("c9f2").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t.tempFilePath?[i("v-uni-image",{staticClass:"image",attrs:{src:t.tempFilePath,mode:"aspectFit"}})]:t._e(),!t.tempFilePath&&t.savedFilePath?[i("v-uni-image",{staticClass:"image",attrs:{src:t.savedFilePath,mode:"aspectFit"}})]:t._e(),t.tempFilePath||t.savedFilePath?t._e():[i("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}},[t._v("+ 请选择文件")])],i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{staticClass:"btn-savefile",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveFile.apply(void 0,arguments)}}},[t._v("保存文件")]),i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._v("删除文件")])],1),i("v-uni-view",{staticClass:"btn-area"},[i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDocument.apply(void 0,arguments)}}},[t._v("打开pdf文件")])],1)],2)],1)},s=[]},"577b":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".image[data-v-2592387d]{width:100%;height:%?360?%}.btn-savefile[data-v-2592387d]{background-color:#007aff;color:#fff}",""]),t.exports=e},8299:function(t,e,i){var a=i("577b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("35b53d58",a,!0,{sourceMap:!1,shadowMode:!1})},a21d:function(t,e,i){"use strict";i.r(e);var a=i("2c17"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},fbf9:function(t,e,i){"use strict";i.r(e);var a=i("2fd7"),n=i("a21d");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("2e2c");var c,o=i("f0c5"),l=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"2592387d",null,!1,a["a"],c);e["default"]=l.exports}}]);