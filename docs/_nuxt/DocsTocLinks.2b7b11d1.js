import{r as i,D as h,a1 as _,Y as f,i as g,S as y,a2 as k,o as r,l as d,M as S,N as b,m as p,e as x,t as B,u as C,a3 as H,c as A,j as q,a as D}from"./entry.b9ee2a71.js";const T=()=>{const c=i(),o=i([]),a=i([]),u=e=>e.forEach(t=>{const n=t.target.id;t.isIntersecting?o.value.push(n):o.value=o.value.filter(m=>m!==n)}),l=e=>e.forEach(t=>{c.value.observe(t)});return h(o,(e,t)=>{e.length===0?a.value=t:a.value=e}),_(()=>c.value=new IntersectionObserver(u)),f(()=>{var e;return(e=c.value)==null?void 0:e.disconnect()}),{visibleHeadings:o,activeHeadings:a,updateHeadings:l}},$={class:"docs-toc-links"},w=["href","onClick"],E=g({__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(c,{emit:o}){const a=y(),u=k(),{activeHeadings:l,updateHeadings:e}=T();h(()=>a.path,()=>{setTimeout(()=>{e([...document.querySelectorAll(".document-driven-page h1, .docus-content h1"),...document.querySelectorAll(".document-driven-page h2, .docus-content h2"),...document.querySelectorAll(".document-driven-page h3, .docus-content h3"),...document.querySelectorAll(".document-driven-page h4, .docus-content h4")])},300)},{immediate:!0});const t=n=>{u.push(`#${n}`),o("move",n)};return(n,m)=>{const v=I;return r(),d("ul",$,[(r(!0),d(S,null,b(c.links,s=>(r(),d("li",{key:s.text,class:p([`depth-${s.depth}`])},[x("a",{href:`#${s.id}`,class:p([C(l).includes(s.id)&&"active"]),onClick:H(L=>t(s.id),["prevent"])},B(s.text),11,w),s.children?(r(),A(v,{key:0,links:s.children},null,8,["links"])):q("",!0)],2))),128))])}}}),I=D(E,[["__scopeId","data-v-51522414"]]);export{I as default};