import{i as d,o,l as i,c as u,j as p,q as _,e as a,b as n,w as r,P as c,m,f,k as C,a as y}from"./entry.b9ee2a71.js";const b={class:"title"},h={class:"description"},k=d({__name:"Card",props:{icon:{type:String,default:""},iconClass:{type:String,default:""},blurry:{type:Boolean,default:!0,required:!1}},setup(e){return(t,B)=>{const l=f,s=C;return o(),i("div",{class:m([{blurry:e.blurry},"card"])},[e.icon?(o(),u(l,{key:0,name:e.icon},null,8,["name"])):p("",!0),_(t.$slots,"default",{},void 0,!0),a("div",null,[a("h3",b,[n(s,{use:t.$slots.title,unwrap:"p"},{default:r(()=>[c(" Card title ")]),_:1},8,["use"])]),a("p",h,[n(s,{use:t.$slots.description,unwrap:"p"},{default:r(()=>[c(" Card description ")]),_:1},8,["use"])])])],2)}}}),w=y(k,[["__scopeId","data-v-28ab87fd"]]);export{w as default};