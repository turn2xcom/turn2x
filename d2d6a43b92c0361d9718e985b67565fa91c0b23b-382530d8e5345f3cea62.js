"use strict";(self.webpackChunkturn2x=self.webpackChunkturn2x||[]).push([[576],{1742:function(e,t,i){i.d(t,{r:function(){return s}});var a,n,l=i(7294);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},r.apply(this,arguments)}var s=function(e){return l.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 40 40"},e),a||(a=l.createElement("rect",{width:16,height:20,x:15,y:7,fill:"#B7CDFF",rx:2})),n||(n=l.createElement("rect",{width:16,height:20,x:9,y:13,fill:"#487AEE",rx:2})))};t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgNDAgNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjE1IiB5PSI3IiB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSIjQjdDREZGIi8+CjxyZWN0IHg9IjkiIHk9IjEzIiB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSIjNDg3QUVFIi8+Cjwvc3ZnPgo="},5393:function(e,t,i){i(7294);t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgNDAgNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjE1IiB5PSI3IiB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSIjQjdDREZGIi8+CjxyZWN0IHg9IjkiIHk9IjEzIiB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},770:function(e,t,i){i.d(t,{AV:function(){return a},Z1:function(){return r},_R:function(){return g},dw:function(){return l},lh:function(){return o},qt:function(){return c},rs:function(){return n},se:function(){return s},zK:function(){return m},zi:function(){return d}});const a="https://turn2x-assets.s3.eu-west-3.amazonaws.com/video/turnDroneVideo.mp4",n="https://turn2x-assets.s3.eu-west-3.amazonaws.com/video/video-new+plant2.mp4",l="https://turn2x-assets.s3.eu-west-3.amazonaws.com/video/video-inauguration2.mp4",r="https://turn2x-assets.s3.eu-west-3.amazonaws.com/video/video-maritime.mp4",s="https://turn2x-assets.s3.eu-west-3.amazonaws.com/video/video-utilities.mp4",c="https://turn2x-assets.s3.eu-west-3.amazonaws.com/video/video-energy-intensive-industries.mp4",m="https://sketchfab.com/models/9480e5409a0442e39e01854d1fd4c47c/embed?scrollwheel=0&autostart=1&camera=0&transparent=1&ui_hint=0&mousewheel=0&ui_stop=0&ui_infos=0",o="https://sketchfab.com/models/105b6e473b8a47a0919b9ec251c887ea/embed?scrollwheel=0&autostart=1&camera=0&transparent=1&ui_hint=0&mousewheel=0&ui_stop=0&ui_infos=0",d="https://sketchfab.com/models/0ca03a80481c4fa4adc0875aaf1bdf17/embed?scrollwheel=0&autostart=1&camera=0&transparent=1&ui_hint=0&mousewheel=0&ui_stop=0&ui_infos=0",g="https://sketchfab.com/models/a7307ab4e8f940da8bba98322eee54a7/embed?scrollwheel=0&autostart=1&camera=0&transparent=1&ui_hint=0&mousewheel=0&ui_stop=0&ui_infos=0"},7912:function(e,t,i){var a=i(7294);t.Z=e=>{const{0:t,1:i}=(0,a.useState)((()=>"undefined"!=typeof window&&window.matchMedia(e).matches));return(0,a.useEffect)((()=>{if("undefined"==typeof window)return;const t=window.matchMedia(e),a=e=>i(e.matches);return t.addEventListener("change",a),()=>{t.removeEventListener("change",a)}}),[e]),t}},868:function(e,t,i){var a=i(7294),n=i(5716);t.Z=e=>{let{bgColor:t="#487AEE"}=e;const i=(0,a.useRef)(null),l=(0,a.useRef)({element:null,states:{default:{backgroundColor:"transparent",height:40,width:40},label:{backgroundColor:t,height:116,width:116}}}).current;return(0,a.useEffect)((()=>{const e=window.matchMedia("(min-width: 780px)"),t=e=>{if(!l.element)return;n.ZP.to(l.element,{duration:.3,left:e.clientX,top:e.clientY});const t=e.target,i=(null==t?void 0:t.getAttribute("data-cursor"))||"default";let a=(null==t?void 0:t.getAttribute("data-cursor-label"))||"";null==a&&(a=""),r(i,a),t.closest("[data-cursor]")?n.ZP.to(l.element,{duration:.3,opacity:1}):n.ZP.to(l.element,{duration:.3,opacity:0})},a=()=>{const e=document.querySelectorAll("[data-cursor]");let t=!1;e.forEach((e=>{const i=e.getBoundingClientRect();i.top<=window.innerHeight&&i.bottom>=0&&i.left<=window.innerWidth&&i.right>=0&&(t=!0)})),t||n.ZP.to(l.element,{duration:.3,opacity:0})},r=(e,t)=>{n.ZP.to(l.element,{duration:.3,...l.states[e]||l.states.default}),l.element.className="has-"+e+"-state",l.element.innerHTML=t},s=e=>{e.matches?(l.element=i.current,n.ZP.set(l.element,{left:window.innerWidth/2,top:window.innerHeight/2}),r("default",""),document.addEventListener("mousemove",t),document.addEventListener("scroll",a),l.element.style.display="flex"):(document.removeEventListener("mousemove",t),document.removeEventListener("scroll",a),l.element&&(l.element.style.display="none"))};return s(e),e.addEventListener("change",s),()=>{document.removeEventListener("mousemove",t),document.removeEventListener("scroll",a),e.removeEventListener("change",s)}}),[l,t]),a.createElement("div",{id:"adaptive-cursor",className:"text-m",ref:i})}},2830:function(e,t,i){var a=i(7294),n=i(1392);t.Z=e=>{let{label:t,title:i,text:l,video:r}=e;return a.createElement("section",{className:"challenge"},a.createElement("div",{className:"wrapper no-p-md"},a.createElement("div",{className:"challenge-container"},a.createElement("div",{className:"challenge-vis-wrapper","data-aos":"custom-animation"},a.createElement("div",{className:"video-container"},a.createElement("div",{className:"video-size-wrapper"},a.createElement("img",{className:"sensor",src:n.Z,alt:"video sensor"}),a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0},a.createElement("source",{src:r}))))),a.createElement("div",{className:"panel challenge-panel"},a.createElement("p",{className:"panel-pretitle lead-m"},t),a.createElement("h2",{className:"alpha"},i),a.createElement("p",{className:"text-xl"},l)))))}},5401:function(e,t,i){var a=i(7294);t.Z=e=>{let{src:t,children:i,headingLabel:n,headingTitle:l}=e;return a.createElement("div",{className:"model",id:"model"},l&&a.createElement("div",{className:"wrapper"},a.createElement("div",{className:"model-heading"},a.createElement("p",{className:"lead-m"},n),a.createElement("h3",{className:"alpha"},l))),a.createElement("div",{className:"model-wrapper"},a.createElement("div",{className:"ui-cover top-left"}),a.createElement("div",{className:"ui-cover top-right"}),a.createElement("iframe",{title:"3D Model",style:{width:"100%",height:"100%",border:"none",zIndex:-1},src:t}),a.createElement("div",{className:"ui-cover bottom"})),i)}},2944:function(e,t,i){i.d(t,{Z:function(){return I}});var a=i(7294),n=i(6553),l=i(3698),r=i(4184),s=i.n(r),c=i(3010);var m=e=>{let{to:t,title:i,pretitle:r,img:m,className:o,isExternal:d=!1}=e;const g=(0,l.Z)(),I=a.createElement(a.Fragment,null,a.createElement("div",{className:"press-item-heading"},a.createElement("div",{className:"press-item-pretitle"},a.createElement("p",{className:"lead-m"},g(r)),a.createElement("img",{src:c.Z,alt:"press item icon",className:"press-item-icon"})),a.createElement("h3",{className:"press-item-title beta"},g(i))),a.createElement("div",{className:"press-item-img-container"},a.createElement("img",{src:m,alt:"press item visual",className:"press-item-img"})));return d?a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:s()("press-item",{[o]:o})},I):a.createElement(n.Z,{to:t,className:s()("press-item",{[o]:o})},I)},o=i.p+"static/img-landing-energy-intensive-0f9f2539ad9f055c2f2064cdcfd1fb61.jpg",d=i.p+"static/img-landing-maritime-686e36a36d60008da08b067948b6f1ba.jpg",g=i.p+"static/img-landing-utilities-65bebd5cfcacfa6da5574fec1e95762c.jpg";var I=e=>{let{hiddenItem:t,pressItems:i=null,label:n,title:r,text:s}=e;const c=(0,l.Z)(),I=i||[{id:"maritime",to:"/industry-insights/maritime",pretitleKey:"press:item-1-pre",titleKey:"press:item-1-title",img:d,isExternal:!1},{id:"utilities",to:"/industry-insights/utilities",pretitleKey:"press:item-2-pre",titleKey:"press:item-2-title",img:g,isExternal:!1},{id:"energy",to:"/industry-insights/energy",pretitleKey:"press:item-3-pre",titleKey:"press:item-3-title",img:o,isExternal:!1}],u=n||c("press:label"),M=r||c("press:title"),N=s||c("press:text");return a.createElement("section",{className:"press",id:"press-section"},a.createElement("div",{className:"press-wrapper"},a.createElement("div",{className:"press-container","data-aos":"stagger-from-right","data-aos-anchor":"#press-section","data-aos-anchor-placement":"top-center","data-aos-delay":"10","data-aos-once":"true"},a.createElement("div",{className:"press-item press-item-first"},a.createElement("div",{className:"press-item-heading"},a.createElement("div",{className:"press-item-pretitle"},a.createElement("p",{className:"lead-m"},u)),a.createElement("h3",{className:"press-item-title alpha"},M),a.createElement("p",{className:"press-item-text text-xl"},N))),I.map((e=>e.id!==t?a.createElement(m,{key:e.id,to:e.to,pretitle:c(e.pretitleKey),title:c(e.titleKey),img:e.img,isExternal:e.isExternal}):null)),a.createElement("div",{className:"press-item spacer"}))))}},7012:function(e,t,i){i.d(t,{Z:function(){return r}});var a=i(7294),n=i(3698);var l=e=>{let{title:t,text:i}=e;const{0:n,1:l}=(0,a.useState)(!1),{0:r,1:s}=(0,a.useState)(0),c=(0,a.useRef)(null),m=()=>{l(!n)};return(0,a.useEffect)((()=>{c.current&&s(c.current.scrollHeight)}),[n]),a.createElement("div",{className:"toggle-card "+(n?"open":"")},a.createElement("div",{className:"toggle-card-header",onClick:m,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),m())},role:"button",tabIndex:"0","aria-expanded":n,"aria-controls":"toggle-card-body"},a.createElement("p",{className:"beta"},t),a.createElement("div",{className:"toggle-card-icon"},a.createElement("span",{className:"toggle-card-line toggle-card-line-1"}),a.createElement("span",{className:"toggle-card-line toggle-card-line-2"}))),a.createElement("div",{id:"toggle-card-body",className:"toggle-card-body",style:{maxHeight:n?r+"px":"0",opacity:n?1:0},ref:c,"aria-hidden":!n},a.createElement("p",{className:"text-xl"},i)))};var r=e=>{let{items:t}=e;const i=(0,n.Z)();return a.createElement("div",{className:"toggle-cards"},t.map((e=>a.createElement(l,{key:e.id,title:i(e.titleKey),text:i(e.textKey)}))))}},737:function(e,t,i){var a=i(7294),n=i(7912),l=i(5178);t.Z=e=>{let{title:t,pretitle:i,img:r,imgMobile:s}=e;const c=(0,n.Z)("(max-width: 780px)");return a.createElement("div",{className:"hero hero__img"},a.createElement("div",{className:"hero-intro"},a.createElement("div",{className:"wrapper"},a.createElement("div",{className:"hero-text"},i&&a.createElement("p",{className:"lead-m"},i),a.createElement(l.Z,{title:t})))),a.createElement("div",{className:"hero-img-container"},a.createElement("img",{src:c&&s?s:r,alt:"hero visual"})))}},3645:function(e,t,i){i.d(t,{Z:function(){return s}});var a=i(7294),n=i(3698);var l=e=>{let{title:t,text:i,iconLight:n,iconWhite:l}=e;const{0:r,1:s}=(0,a.useState)(!1),{0:c,1:m}=(0,a.useState)(0),{0:o,1:d}=(0,a.useState)(!1),g=(0,a.useRef)(null),I=()=>{g.current&&m(g.current.clientHeight)};(0,a.useEffect)((()=>{I()}),[t]),(0,a.useEffect)((()=>{const e=window.matchMedia("(max-width: 1060px)"),t=()=>{d(!e.matches),I()};return t(),e.addEventListener("change",t),window.addEventListener("resize",I),()=>{e.removeEventListener("change",t),window.removeEventListener("resize",I)}}),[]);return a.createElement("article",{"data-cursor":"label","data-cursor-label":"HOVER",className:"intro-card",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),s(!r))},role:"button",tabIndex:"0","aria-label":"Intro card for "+t},a.createElement("div",{className:"intro-card-icon-container"},a.createElement("img",{src:n,alt:"intro card icon",loading:"lazy",className:"intro-card-icon intro-card-icon-light"}),a.createElement("img",{src:l,alt:"intro card icon",loading:"lazy",className:"intro-card-icon intro-card-icon-white"})),a.createElement("div",{className:"intro-card-content",style:o?{transform:"translateY("+(r?0:c)+"px)"}:{}},a.createElement("h3",{className:"intro-card-title alpha"},t),a.createElement("p",{ref:g,className:"intro-card-text text-xl"},i)))},r=i(868);var s=e=>{let{title:t,cardItems:i}=e;const s=(0,n.Z)();return a.createElement("section",{className:"intro-cards"},a.createElement("div",{className:"wrapper"},a.createElement("h2",{className:"jumbo"},t),a.createElement("div",{id:"intro-cards-container",className:"intro-cards-container","data-aos":"stagger-from-right","data-aos-anchor":"#intro-cards-container","data-aos-anchor-placement":"top-bottom"},a.createElement(r.Z,{bgColor:"#F0E5A6"}),i.map(((e,t)=>a.createElement("div",{className:"w100",key:t},a.createElement(l,{iconLight:e.iconLight,iconWhite:e.iconWhite,title:s(e.titleKey),text:s(e.textKey)})))))))}},8068:function(e,t,i){i.d(t,{Z:function(){return h}});var a=i(7294),n=i(7280),l=i(2711),r=i.n(l),s=i(737),c=i(8598),m=i(3698),o=i(4407),d=i.p+"static/img-utilities-82e19c56cb8a10e775674fb1aa9023d3.jpg",g=i.p+"static/img-utilities-card-42746032eb2b651a63f7ee8ee2fbae03.jpg",I=i(3645),u=i(2944),M=i(5401),N=i(7012),p=i(2830),D=i(770),E=i(5393),A=i(1742);var h=()=>{const e=(0,m.Z)();(0,a.useEffect)((()=>{r().init({})}),[]);const t=[{iconLight:A.Z,iconWhite:E.Z,titleKey:"utilities-intro-card-1:title",textKey:"utilities-intro-card-1:text"},{iconLight:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MS42OTA3IDM3LjIwMDRDMzguNzE4NSAzOS42OTY2IDM0Ljg4NDYgNDEuMiAzMC42OTk2IDQxLjJDMjEuMjU1NSA0MS4yIDEzLjU5OTYgMzMuNTQ0MSAxMy41OTk2IDI0LjFDMTMuNTk5NiAxNC42NTU5IDIxLjI1NTUgNyAzMC42OTk2IDdDMzguMTQxMSA3IDQ0LjQ3MjQgMTEuNzUzMyA0Ni44MjI4IDE4LjM4OTRDNDcuOTc5MSAxOC4wMDcgNDkuMjE1MiAxNy44IDUwLjQ5OTYgMTcuOEM1Ni45NjEzIDE3LjggNjIuMTk5NiAyMy4wMzgzIDYyLjE5OTYgMjkuNUM2Mi4xOTk2IDM1Ljk2MTcgNTYuOTYxMyA0MS4yIDUwLjQ5OTYgNDEuMkM0Ni45ODY2IDQxLjIgNDMuODM1MyAzOS42NTE4IDQxLjY5MDcgMzcuMjAwNFoiIGZpbGw9IiNCN0NERkYiLz4KPHBhdGggZD0iTTE1LjQwMDQgMzguMjU5NkwyOC44OTc2IDE3VjM4LjI1OTZIMTUuNDAwNFoiIGZpbGw9IiM0ODdBRUUiLz4KPHBhdGggZD0iTTQyLjQwMDQgMzcuMTQwNEwyOC45MDMyIDU4LjRWMzcuMTQwNEg0Mi40MDA0WiIgZmlsbD0iIzQ4N0FFRSIvPgo8cGF0aCBkPSJNMTUuNDAwNCAzOC4yNTk2TDI4Ljg5NzYgMTdWMzguMjU5NkgxNS40MDA0WiIgc3Ryb2tlPSIjNDg3QUVFIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQyLjQwMDQgMzcuMTQwNEwyOC45MDMyIDU4LjRWMzcuMTQwNEg0Mi40MDA0WiIgc3Ryb2tlPSIjNDg3QUVFIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",iconWhite:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MS42OTA3IDM3LjIwMDRDMzguNzE4NSAzOS42OTY2IDM0Ljg4NDYgNDEuMiAzMC42OTk2IDQxLjJDMjEuMjU1NSA0MS4yIDEzLjU5OTYgMzMuNTQ0MSAxMy41OTk2IDI0LjFDMTMuNTk5NiAxNC42NTU5IDIxLjI1NTUgNyAzMC42OTk2IDdDMzguMTQxMSA3IDQ0LjQ3MjQgMTEuNzUzMyA0Ni44MjI4IDE4LjM4OTRDNDcuOTc5MSAxOC4wMDcgNDkuMjE1MiAxNy44IDUwLjQ5OTYgMTcuOEM1Ni45NjEzIDE3LjggNjIuMTk5NiAyMy4wMzgzIDYyLjE5OTYgMjkuNUM2Mi4xOTk2IDM1Ljk2MTcgNTYuOTYxMyA0MS4yIDUwLjQ5OTYgNDEuMkM0Ni45ODY2IDQxLjIgNDMuODM1MyAzOS42NTE4IDQxLjY5MDcgMzcuMjAwNFoiIGZpbGw9IiNCN0NERkYiLz4KPHBhdGggZD0iTTE1LjQwMDQgMzguMjU5NkwyOC44OTc2IDE3VjM4LjI1OTZIMTUuNDAwNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00Mi40MDA0IDM3LjE0MDRMMjguOTAzMiA1OC40VjM3LjE0MDRINDIuNDAwNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNS40MDA0IDM4LjI1OTZMMjguODk3NiAxN1YzOC4yNTk2SDE1LjQwMDRaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQyLjQwMDQgMzcuMTQwNEwyOC45MDMyIDU4LjRWMzcuMTQwNEg0Mi40MDA0WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",titleKey:"utilities-intro-card-2:title",textKey:"utilities-intro-card-2:text"},{iconLight:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzQiIGN5PSIzOCIgcj0iMTkiIGZpbGw9IiNCN0NERkYiLz4KPHBhdGggZD0iTTU5LjM4MDkgMzguNTk4NUM1OC44NjgyIDI1LjQ3NzEgNDguMzIyOSAxNC45MzE4IDM1LjIwMTUgMTQuNDE5MUMzNC42NDk3IDE0LjM5NzYgMzQuMjAwNCAxNC44NDczIDM0LjIwMDQgMTUuMzk5NkwzNC4yMDA0IDM4LjU5OTZDMzQuMjAwNCAzOS4xNTE5IDM0LjY0ODEgMzkuNTk5NiAzNS4yMDA0IDM5LjU5OTZMNTguNDAwNCAzOS41OTk2QzU4Ljk1MjcgMzkuNTk5NiA1OS40MDI0IDM5LjE1MDMgNTkuMzgwOSAzOC41OTg1WiIgZmlsbD0iIzQ4N0FFRSIvPgo8L3N2Zz4K",iconWhite:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzQiIGN5PSIzOCIgcj0iMTkiIGZpbGw9IiNCN0NERkYiLz4KPHBhdGggZD0iTTU5LjM4MDkgMzguNTk4NUM1OC44NjgyIDI1LjQ3NzEgNDguMzIyOSAxNC45MzE4IDM1LjIwMTUgMTQuNDE5MUMzNC42NDk3IDE0LjM5NzYgMzQuMjAwNCAxNC44NDczIDM0LjIwMDQgMTUuMzk5NkwzNC4yMDA0IDM4LjU5OTZDMzQuMjAwNCAzOS4xNTE5IDM0LjY0ODEgMzkuNTk5NiAzNS4yMDA0IDM5LjU5OTZMNTguNDAwNCAzOS41OTk2QzU4Ljk1MjcgMzkuNTk5NiA1OS40MDI0IDM5LjE1MDMgNTkuMzgwOSAzOC41OTg1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",titleKey:"utilities-intro-card-3:title",textKey:"utilities-intro-card-3:text"}];return a.createElement(n.Z,{className:"utilities-page insights-page"},a.createElement(s.Z,{title:e("utilities-hero:title"),pretitle:e("utilities-hero:pretitle"),img:d,imgMobile:g}),a.createElement("div",{className:"top-pattern"},a.createElement("img",{className:"pattern",src:o.Z,alt:"pattern",loading:"lazy"})),a.createElement(I.Z,{title:e("utilities-intro:title"),cardItems:t}),a.createElement(p.Z,{label:e("utilities-challenge:pretitle"),title:e("utilities-challenge:title"),text:e("utilities-challenge:text"),video:D.se}),a.createElement(M.Z,{src:D._R,headingLabel:e("utilities-solution:pretitle"),headingTitle:e("utilities-solution:title")},a.createElement("div",{className:"wrapper model-content"},a.createElement(N.Z,{items:[{id:"item1",titleKey:"utilities-3d-card-1:title",textKey:"utilities-3d-card-1:text"},{id:"item2",titleKey:"utilities-3d-card-2:title",textKey:"utilities-3d-card-2:text"},{id:"item3",titleKey:"utilities-3d-card-3:title",textKey:"utilities-3d-card-3:text"}]}))),a.createElement(u.Z,{hiddenItem:"utilities",label:e("utilities-press:label"),title:e("utilities-press:title"),text:e("utilities-press:text")}),a.createElement("div",{id:"contact",className:"nav-reference"}),a.createElement(c.Z,null))}},1392:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAIAAAC0SDtlAAAEs2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjE2IgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iOSIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICB0aWZmOkltYWdlV2lkdGg9IjE2IgogICB0aWZmOkltYWdlTGVuZ3RoPSI5IgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSIzMDAvMSIKICAgdGlmZjpZUmVzb2x1dGlvbj0iMzAwLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDYtMjFUMjA6MTI6MDErMDI6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDYtMjFUMjA6MTI6MDErMDI6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC41IgogICAgICBzdEV2dDp3aGVuPSIyMDIzLTA2LTIxVDIwOjEyOjAxKzAyOjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz586eN/AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz/GzxgNoSwsJg2rGTFKbJSZhJI0Rvm1efPmzYyaH6/3RpKtsp2ixMavBX8BW2WtFJGSLWtiw/ScZ9RMMud27vnc773ndO+54Agn1ZRZ1QupdNYIjQXcc/ML7tpnamijmTq6FNXUR6anJylrH3dU2PHGZ9cqf+5fa4hqpgoVdcLDqm5khceFJ1ezus3bwq1qQokKnwp7Dbmg8K2tRwr8YnO8wF82G+FQEBxNwu54CUdKWE0YKWF5OZ5UckX9vY/9EqeWnp2R2CnegUmIMQK4mWCUIAP0MSTzAD789MiKMvm9P/lTZCRXlVlnDYNl4iTI4hV1RaprEmOiazKSrNn9/9tXM9bvL1R3BqD6ybLeuqB2C/I5y/o8tKz8EVQ+wkW6mJ85gMF30XNFzbMPrg04uyxqkR0434T2B10xlB+pUtwRi8HrCTTOQ8s11C8Weva7z/E9hNflq65gdw+65bxr6Rs97GfTx4IUNgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABdJREFUGJVj/P79OwMpgIkk1aMaaKUBAAg4Avc3OcArAAAAAElFTkSuQmCC"},4407:function(e,t,i){t.Z=i.p+"static/pattern1-min-3b8582e6c2177382738fea68603754ed.png"}}]);
//# sourceMappingURL=d2d6a43b92c0361d9718e985b67565fa91c0b23b-382530d8e5345f3cea62.js.map