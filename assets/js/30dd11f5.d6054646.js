"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?o.createElement(y,l(l({ref:t},u),{},{components:r})):o.createElement(y,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:4},l="Custom Overlay",i={unversionedId:"styling/custom-overlay",id:"styling/custom-overlay",title:"Custom Overlay",description:"The overlay can be customised by providing one or more custom CSS classes to augment or overwrite the default style.",source:"@site/docs/styling/custom-overlay.md",sourceDirName:"styling",slug:"/styling/custom-overlay",permalink:"/Modal/styling/custom-overlay",draft:!1,editUrl:"https://github.com/blazored/modal/tree/main/docs/docs/styling/custom-overlay.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Custom Layout",permalink:"/Modal/styling/custom-layout"}},s={},c=[{value:"Configuring for all modals",id:"configuring-for-all-modals",level:4},{value:"Configuring for a single modal",id:"configuring-for-a-single-modal",level:4}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custom-overlay"},"Custom Overlay"),(0,n.kt)("p",null,"The overlay can be customised by providing one or more custom CSS classes to augment or overwrite the default style."),(0,n.kt)("p",null,"If you wanted the overlay to be a transparent red you could define the following CSS class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="my-app.css"',title:'"my-app.css"'},".custom-modal-overlay {\n    background-color: rgba(255, 0, 0, 0.5);\n}\n")),(0,n.kt)("p",null,"Then apply that to your modal with either of the following options."),(0,n.kt)("h4",{id:"configuring-for-all-modals"},"Configuring for all modals"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-razor"},'<CascadingBlazoredModal OverlayCustomClass="custom-modal-overlay" />\n')),(0,n.kt)("h4",{id:"configuring-for-a-single-modal"},"Configuring for a single modal"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'var options = new ModalOptions() \n{ \n    OverlayCustomClass = "custom-modal-overlay" \n};\n\nModal.Show<Confirm>("Are you sure?", options);\n')))}p.isMDXComponent=!0}}]);