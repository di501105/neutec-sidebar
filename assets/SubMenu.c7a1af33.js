import{_ as i,d as c,a as b,b as d,r as f,i as M,o as n,c as a,e as u,w as t,f as y,g as v,h as g,j as r,t as l,F as k,k as E}from"./index.67fa32d1.js";const S=c({name:"SubMenu",components:{SubMenu:b(()=>d(()=>Promise.resolve().then(()=>C),void 0))},props:{menu:{type:Array,default:()=>[]},level:{type:Number,default:0}},setup:e=>{const s=f(e.menu);return{isEmpty:M,subMenu:s}}});function $(e,s,P,j,A,B){const _=y("sub-menu",!0),p=v,m=g;return n(),a("div",null,[e.isEmpty(e.subMenu.subMenu)?(n(),u(m,{key:e.subMenu.value},{default:t(()=>[r(l(e.subMenu.label),1)]),_:1})):(n(),u(p,{key:e.subMenu.value},{title:t(()=>[r(l(e.subMenu.label),1)]),default:t(()=>[(n(!0),a(k,null,E(e.subMenu.subMenu,o=>(n(),u(_,{key:o.value,menu:o},null,8,["menu"]))),128))]),_:1}))])}const h=i(S,[["render",$]]),C=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));export{h as default};
