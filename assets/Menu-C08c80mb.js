import{N as y}from"./NavTitle-CYNdx2Gd.js";import{m as M}from"./index-B6ijL1JC.js";import{_ as p,o as i,c as o,a as t,t as d,i as f,p as k,d as g,r as m,F as B,j as w,w as S,v as $,f as v,n as C}from"./index-Dfw0YM_7.js";const I={props:{id:{type:Number,default:null},title:{type:String,default:"Название"},img:{type:String,default:"empty"},price:{type:Number,default:0}},computed:{imgSet(){return M[this.img]},inBasket(){return this.$store.getters.getBasket.filter(e=>e.id===this.id)}},methods:{addToBasket(){this.$store.commit("addToBasket",this.id)},removeFromBasket(){this.$store.commit("removeFromBasket",this.id)}}},b=e=>(k("data-v-c55d6526"),e=e(),g(),e),N={class:"menu__item"},T={class:"menu__item-img-wrapper"},F=["src"],V={class:"menu__item-info"},L={class:"menu__item-info__text"},x={class:"menu__item-title"},j={class:"menu__item-price"},D={key:0,class:"counter"},H={class:"counter__value"},z=b(()=>t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M21 10L15 4M21 10H3M21 10L19.6431 16.7845C19.2692 18.6542 17.6275 20 15.7208 20H8.27922C6.37249 20 4.73083 18.6542 4.35689 16.7845L3 10M3 10L9 4","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),E=[z];function q(e,n,l,h,r,s){return i(),o("div",N,[t("div",T,[t("img",{src:s.imgSet,class:"menu__item-img"},null,8,F)]),t("div",V,[t("div",L,[t("div",x,d(l.title),1),t("div",j,d(l.price)+" ₽",1)]),s.inBasket.length?(i(),o("div",D,[t("div",{class:"counter__button",onClick:n[0]||(n[0]=(...a)=>s.removeFromBasket&&s.removeFromBasket(...a))},"-"),t("div",H,d(s.inBasket.length),1),t("div",{class:"counter__button",onClick:n[1]||(n[1]=(...a)=>s.addToBasket&&s.addToBasket(...a))},"+")])):f("",!0),s.inBasket.length?f("",!0):(i(),o("div",{key:1,class:"add",onClick:n[2]||(n[2]=(...a)=>s.addToBasket&&s.addToBasket(...a))},E))])])}const A=p(I,[["render",q],["__scopeId","data-v-c55d6526"]]),G={props:{value:{type:String,default:"all"}},components:{MenuItem:A}},J={class:"menu-list"};function K(e,n,l,h,r,s){const a=m("MenuItem");return i(),o("ul",J,[(i(!0),o(B,null,w(e.$store.getters.getMenu,(c,_)=>S((i(),o("li",{class:"menu-list__item",key:_},[v(a,{price:c.price,title:c.title,img:c.img,id:c.id},null,8,["price","title","img","id"])])),[[$,l.value==="all"||c.type===l.value]])),128))])}const O=p(G,[["render",K],["__scopeId","data-v-dc871b54"]]),P={components:{NavTitle:y,MenuBoard:O},data(){return{categories:[{name:"Все",value:"all"},{name:"Напитки",value:"drink"},{name:"Круассаны",value:"croissant"},{name:"Выпечка",value:"bakery"},{name:"Завтраки",value:"breakfast"},{name:"Салаты",value:"salad"},{name:"Десерты",value:"desert"}],selected:0,selectedValue:"all"}},methods:{select(e){this.selected=e,this.selectedValue=this.categories[e].value}}},Q=e=>(k("data-v-6fc6112b"),e=e(),g(),e),R={class:"menu"},U={class:"filter"},W={class:"filter__wrapper"},X=Q(()=>t("div",{class:"filter__title"},"Категория:",-1)),Y={class:"filter__categories"},Z=["onClick"];function ee(e,n,l,h,r,s){const a=m("NavTitle"),c=m("MenuBoard");return i(),o("div",R,[v(a,{title:"Наш ассортимент"}),t("div",U,[t("div",W,[X,t("ul",Y,[(i(!0),o(B,null,w(r.categories,(_,u)=>(i(),o("li",{key:u,class:C(["filter__category",{active:u===r.selected}]),onClick:te=>s.select(u)},d(_.name),11,Z))),128))])])]),v(c,{value:r.selectedValue},null,8,["value"])])}const oe=p(P,[["render",ee],["__scopeId","data-v-6fc6112b"]]);export{oe as default};
