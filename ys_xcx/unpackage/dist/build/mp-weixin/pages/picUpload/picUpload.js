(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/picUpload/picUpload"],{1075:function(n,t,i){"use strict";var o=i("e470"),a=i.n(o);a.a},1613:function(n,t,i){"use strict";var o;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return e})),i.d(t,"a",(function(){return o}));var a=function(){var n=this,t=n.$createElement;n._self._c},e=[]},"3b5a":function(n,t,i){"use strict";i.r(t);var o=i("1613"),a=i("afbf");for(var e in a)"default"!==e&&function(n){i.d(t,n,(function(){return a[n]}))}(e);i("1075");var u,c=i("f0c5"),s=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"a51b8fb8",null,!1,o["a"],u);t["default"]=s.exports},"5f02":function(n,t,i){"use strict";(function(n){i("75df");o(i("66fd"));var t=o(i("3b5a"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,i("543d")["createPage"])},6521:function(n,t,i){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{img_url:"../../static/upload.png",img_flag:!1,imgs:"",order_num:"",car_num:"",Api_url:this.config.Api_url}},methods:{useCamera:function(){var t=this,i=this;n.chooseImage({count:1,success:function(o){wx.showLoading(),i.img_flag=!0,n.uploadFile({url:i.Api_url+"/admin/common/upload_img",filePath:o.tempFilePaths[0],name:"img",success:function(n){wx.hideLoading();var i=JSON.parse(n.data);t.imgs=i.data.url},fail:function(n){wx.hideLoading(),console.log("s:",n)}})},fail:function(t){n.showToast({title:"获取图片失败"})}})},submit:function(){var t=this;wx.showLoading(),this.order_num&&this.imgs&&this.car_num?t.publicModel.uploadImg({order_num:t.order_num,imgs:t.imgs,sign_car:t.car_num}).then((function(t){console.log(t),wx.hideLoading(),200==t.status?n.showToast({title:"上传成功",icon:"success",success:function(){setTimeout((function(){n.reLaunch({url:"../index/index"})}),1500)},fail:function(n){wx.hideLoading()}}):n.showToast({title:t.data.msg,icon:"none"})})):n.showToast({title:"请填写完整",icon:"none"})},deleteImg:function(){this.imgs="",this.img_flag=!1}}};t.default=i}).call(this,i("543d")["default"])},afbf:function(n,t,i){"use strict";i.r(t);var o=i("6521"),a=i.n(o);for(var e in o)"default"!==e&&function(n){i.d(t,n,(function(){return o[n]}))}(e);t["default"]=a.a},e470:function(n,t,i){}},[["5f02","common/runtime","common/vendor"]]]);