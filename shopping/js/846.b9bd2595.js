"use strict";(self["webpackChunkshopping"]=self["webpackChunkshopping"]||[]).push([[846],{846:function(t,s,e){e.r(s),e.d(s,{default:function(){return l}});e(560);var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"search"},[s("van-nav-bar",{attrs:{fixed:"",title:"商品列表","left-arrow":""},on:{"click-left":function(s){return t.$router.go(-1)}}}),s("van-search",{attrs:{readonly:"",shape:"round",background:"#ffffff",value:t.querySearch||"搜索商品","show-action":""},on:{click:function(s){return t.$router.push("/search")}},scopedSlots:t._u([{key:"action",fn:function(){return[s("van-icon",{staticClass:"tool",attrs:{name:"apps-o"}})]},proxy:!0}])}),t._m(0),s("div",{staticClass:"goods-list"},t._l(t.productList,(function(t){return s("GoodsItem",{key:t.goods_id,attrs:{item:t}})})),1)],1)},o=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"sort-btns"},[s("div",{staticClass:"sort-item"},[t._v("综合")]),s("div",{staticClass:"sort-item"},[t._v("销量")]),s("div",{staticClass:"sort-item"},[t._v("价格")])])}],r=e(1875),n=e(1787),i={name:"ListIndex",components:{GoodsItem:r.Z},computed:{querySearch(){return this.$route.query.search}},data(){return{page:1,productList:[]}},async created(){const{data:{list:t}}=await(0,n.jw)({categoryId:this.$route.query.categoryId,goodsName:this.querySearch,page:this.page});this.productList=t.data}},c=i,u=e(1001),d=(0,u.Z)(c,a,o,!1,null,"ad110b46",null),l=d.exports},1787:function(t,s,e){e.d(s,{Jx:function(){return n},jn:function(){return r},jw:function(){return o}});var a=e(4471);const o=t=>{const{categoryId:s,goodsName:e,page:o}=t;return a.Z.get("/goods/list",{params:{categoryId:s,goodsName:e,page:o}})},r=t=>a.Z.get("/goods/detail",{params:{goodsId:t}}),n=(t,s)=>a.Z.get("/comment/listRows",{params:{goodsId:t,limit:s}})}}]);
//# sourceMappingURL=846.b9bd2595.js.map