const h="modulepreload",v=function(e,s){return new URL(e,s).href},m={},w=function(s,i,u){if(!i||i.length===0)return s();const d=document.getElementsByTagName("link");return Promise.all(i.map(t=>{if(t=v(t,u),t in m)return;m[t]=!0;const n=t.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!u)for(let o=d.length-1;o>=0;o--){const l=d[o];if(l.href===t&&(!n||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${f}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":h,n||(r.as="script",r.crossOrigin=""),r.href=t,document.head.appendChild(r),n)return new Promise((o,l)=>{r.addEventListener("load",o),r.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>s()).catch(t=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t})};var c=(e=>(e.Touchstart="touchstart",e.Mousedown="mousedown",e.Mousemove="mousemove",e.Keydown="keydown",e.Scroll="scroll",e))(c||{});const E=async()=>{const{default:e}=await w(()=>import("./ats-chunk-module.esm-7cd60ff5.js"),[],import.meta.url);e.start(),window.Alpine=e},y=setTimeout(()=>{a()},300),a=()=>{clearTimeout(y),Object.values(c).forEach(e=>document.removeEventListener(e,a,{capture:!0})),E()},_=e=>{document.addEventListener(e,a,{capture:!0})};Object.values(c).forEach(e=>{_(e)});