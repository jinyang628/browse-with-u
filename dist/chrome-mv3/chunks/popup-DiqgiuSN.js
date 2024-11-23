import{r as n,z as l,e as g,j as s,B as k,f as x,J as y}from"./index-B-ouW-6M.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(...e)=>e.filter((t,r,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=n.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:c="",children:o,iconNode:h,...d},u)=>n.createElement("svg",{ref:u,...w,width:t,height:t,stroke:e,strokeWidth:a?Number(r)*24/Number(t):r,className:i("lucide",c),...d},[...h.map(([p,f])=>n.createElement(p,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(e,t)=>{const r=n.forwardRef(({className:a,...c},o)=>n.createElement(v,{ref:o,iconNode:t,className:i(`lucide-${j(e)}`,a),...c}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=m("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=m("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function E(){const{theme:e,setTheme:t}=l();n.useEffect(()=>{g.storage.sync.set({theme:e})},[e]);const r=()=>{t(e==="dark"?"light":"dark")};return s.jsxs(k,{variant:"outline",size:"icon",onClick:r,children:[s.jsx(b,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),s.jsx(T,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),s.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}const C="/favicons/favicon.png",M="/favicons/favicon-light.png";function A(){const{theme:e}=l();return s.jsxs("div",{className:"flex flex-col items-center justify-center w-[400px] h-[400px] space-y-5",children:[s.jsx("img",{src:e==="dark"?M:C,alt:"Logo",className:"logo"}),s.jsx("div",{className:"flex flex-col justify-center items-center space-y-4",children:s.jsx(E,{})})]})}x.createRoot(document.getElementById("root")).render(s.jsx(y,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:s.jsx(A,{})}));
