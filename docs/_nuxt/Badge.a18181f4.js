import{i as n,o as t,l as o,b as r,m as c,k as p,a as l}from"./entry.b9ee2a71.js";const d=n({__name:"Badge",props:{type:{type:String,default:"info",validator(e){return["info","success","warning","danger","primary"].includes(e)}}},setup(e){return(a,i)=>{const s=p;return t(),o("span",{class:c([[e.type],"badge"])},[r(s,{use:a.$slots.default,unwrap:"p"},null,8,["use"])],2)}}}),_=l(d,[["__scopeId","data-v-851f5faa"]]);export{_ as default};