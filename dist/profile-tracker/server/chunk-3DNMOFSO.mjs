import './polyfills.server.mjs';
import{A as x,B as S,C as z,D as I,E,F,I as D,M as H,N,Q as T,R as M,a as b,b as f,c as O,d as s,e as _,f as c,g as h,h as v,i as u,j as w,k as r,l as a,m as p,n as y,o as l,p as d,q as m,r as k,z as j}from"./chunk-6LXHWDW3.mjs";var P=(()=>{let t=class t{constructor(i){this.http=i,this.profiles=[]}setProfiles(i){this.profiles=i}getProfiles(){return this.profiles}fetchProfiles(){return this.http.get("https://jsonplaceholder.typicode.com/users")}};t.\u0275fac=function(e){return new(e||t)(O(x))},t.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var q=(()=>{let t=class t{constructor(i,e){this.route=i,this.dataService=e,this.profiles=[],this.loading=!0}ngOnInit(){this.route.paramMap.subscribe(i=>{this.profiles=this.dataService.getProfiles(),this.profiles.length===0?this.dataService.fetchProfiles().subscribe(e=>{this.profiles=e,this.fetchSelectedProfile()}):this.fetchSelectedProfile()})}fetchSelectedProfile(){this.route.paramMap.subscribe(i=>{let e=i.get("id");if(e){let n=parseInt(e,10);this.selectedProfile=this.profiles.find(X=>X.id===n),this.loading=!1}})}};t.\u0275fac=function(e){return new(e||t)(h(H),h(P))},t.\u0275cmp=s({type:t,selectors:[["app-profile-page"]],decls:30,vars:8,consts:[[1,"w-[100vw]","h-fit","flex","justify-center"],[1,"text-white","w-full","max-w-[600px]","h-fit","bg-[#262626]","rounded-[10px]","px-[30px]","py-[20px]","flex","flex-col","gap-[10px]"],[1,"w-full","flex","justify-between","h-[150px]"],[1,"aspect-square","h-[140px]","rounded-[50%]","z-[5]","border-[0px]","border-[#ffdd09]",2,"background-image","url('https://www.ateneo.edu/sites/default/files/styles/large/public/2021-11/istockphoto-517998264-612x612.jpeg?itok=aMC1MRHJ')","background-size","100% 100%","background-position","center"],[1,"text-right","flex","flex-col","justify-center"],[1,"text-[32px]","leading-[32px]","font-[500]","text-[#ffdd09]"],[1,"text-[24px]","text-gray-300","leading-[32px]"],[1,"text-[20px]","text-gray-500","leading-[32px]","italic"],[1,"text-[18px]","text-gray-500","leading-[32px]","italic"],[1,"w-full","h-[1px]",2,"background","linear-gradient(to right, transparent, #4d4c4c, transparent)"],[1,"w-full","h-fit","flex","justify-center"],[1,"w-full","h-full","py-[10px]"],[1,"text-[24px]","font-[400]","leading-[24px]","text-[#ffdd09]","mb-2"],[1,""],[1,"text-gray-300","italic"],[1,"h-[100px]","w-full","max-w-[1px]","bg-[#4d4c4c]",2,"background","linear-gradient(to bottom, transparent, #4d4c4c, transparent)"],[1,"w-full","h-full","text-right","py-[10px]"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),p(3,"div",3),r(4,"div",4)(5,"div",5),l(6),a(),r(7,"div",6),l(8),a(),r(9,"div",7),l(10),a(),r(11,"div",8),l(12),a()()(),p(13,"div",9),r(14,"div",10)(15,"div",11)(16,"div",12),l(17,"Works In"),a(),r(18,"div",13),l(19),a(),r(20,"div",14),l(21),a()(),p(22,"div",15),r(23,"div",16)(24,"div",12),l(25,"Location"),a(),r(26,"div",13),l(27),a(),r(28,"div",14),l(29),a()()()()()),e&2&&(c(6),d(n.selectedProfile==null?null:n.selectedProfile.name),c(2),m("[",n.selectedProfile==null?null:n.selectedProfile.username,"]"),c(2),d(n.selectedProfile==null?null:n.selectedProfile.email),c(2),d(n.selectedProfile==null?null:n.selectedProfile.phone),c(7),d(n.selectedProfile==null||n.selectedProfile.company==null?null:n.selectedProfile.company.name),c(2),d(n.selectedProfile==null||n.selectedProfile.company==null?null:n.selectedProfile.company.catchPhrase),c(6),m("Lat : ",n.selectedProfile==null||n.selectedProfile.address==null||n.selectedProfile.address.geo==null?null:n.selectedProfile.address.geo.lat,""),c(2),m("Lng : ",n.selectedProfile==null||n.selectedProfile.address==null||n.selectedProfile.address.geo==null?null:n.selectedProfile.address.geo.lng,""))}});let o=t;return o})();var B=(()=>{let t=class t{ngOnInit(){}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["app-card-component"]],inputs:{profile:"profile",color:"color"},decls:17,vars:13,consts:[[3,"routerLink"],[1,"w-full","relative","h-[150px]","cursor-pointer","text-white","rounded-[10px]","overflow-hidden","bg-[#262626]","flex","items-center","justify-between","hoverbehave"],[1,"w-[30%]","h-[150px]","absolute","clip"],[1,"aspect-square","h-[120px]","rounded-[50%]","z-[5]","ml-[20px]",2,"background-image","url('https://www.ateneo.edu/sites/default/files/styles/large/public/2021-11/istockphoto-517998264-612x612.jpeg?itok=aMC1MRHJ')","background-size","100% 100%","background-position","center"],[1,"h-[150px]","relative","w-fit","flex","mr-[20px]","gap-[10px]"],[1,"h-[110px]","flex","flex-col","text-white","text-right","py-[20px]"],[1,"text-[24px]","font-[600]"],[1,"text-[14px]","italic","opacity-80","leading-[16px]","mb-[8px]","hover:underline"],[1,"text-[16px]"],[1,"h-[135px]","w-[4px]","self-end"],[1,"h-[100px]","self-end","w-[16px]","flex","items-start","justify-start","mb-[10px]","text-[12px]","text-gray-400",2,"text-orientation","mixed","writing-mode","vertical-rl","transform","rotate(180deg)","letter-spacing","2px","line-height","12px"]],template:function(e,n){e&1&&(r(0,"a",0)(1,"div",1),p(2,"div",2)(3,"div",3),r(4,"div",4)(5,"div",5)(6,"div",6),l(7),a(),r(8,"div",7),l(9),a(),r(10,"div",8),l(11),a(),r(12,"div",8),l(13),a()(),p(14,"div",9),r(15,"div",10),l(16),a()()()()),e&2&&(u("routerLink","user/"+n.profile.id),c(2),w("background-color",n.color),c(5),k("",n.profile.name," - ( ",n.profile.username," )"),c(),w("color",n.color),c(),d(n.profile.email),c(2),d(n.profile.phone),c(2),d(n.profile.address.city),c(),w("background-color",n.color),c(2),m(" ",n.profile.company.name," "))},dependencies:[T],styles:[".clip[_ngcontent-%COMP%]{clip-path:polygon(0 0,100% 0%,80% 100%,0% 100%)}.hoverbehave[_ngcontent-%COMP%]{transition:all .2s}.hoverbehave[_ngcontent-%COMP%]:hover{transform:scale(1.04)}"]});let o=t;return o})();function K(o,t){if(o&1&&(r(0,"div"),p(1,"app-card-component",3),a()),o&2){let W=t.$implicit,i=t.index,e=y();c(),u("profile",W)("color",e.getColorByIndex(i))}}var J=(()=>{let t=class t{constructor(i,e){this.http=i,this.dataService=e,this.profiles=[],this.loading=!0,this.colors=["#ffdd09","#05ffea","#d92ff7","#8bff1f"]}ngOnInit(){this.fetchProfiles()}fetchProfiles(){this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(i=>{this.profiles=i,this.loading=!1,this.dataService.setProfiles(i)})}getColorByIndex(i){return this.colors[i%this.colors.length]}};t.\u0275fac=function(e){return new(e||t)(h(x),h(P))},t.\u0275cmp=s({type:t,selectors:[["app-home"]],decls:3,vars:1,consts:[[1,"w-[100vw]","flex","justify-center"],[1,"w-full","h-full","max-w-[750px]","flex","flex-col","gap-[20px]"],[4,"ngFor","ngForOf"],[3,"profile","color"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"div",1),v(2,K,2,2,"div",2),a()()),e&2&&(c(2),u("ngForOf",n.profiles))},dependencies:[j,B]});let o=t;return o})();var Q=[{path:"",component:J},{path:"user/:id",component:q}],U=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=_({type:t}),t.\u0275inj=f({imports:[M.forRoot(Q),M]});let o=t;return o})();var Y=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["app-navbar"]],decls:6,vars:0,consts:[[1,"w-[100vw]","flex","justify-center"],[1,"w-full","max-w-[750px]","h-[54px]","bg-[#262626]","rounded-[10px]","text-white","flex","px-[20px]","py-[10px]","items-center","justify-between"],[1,"text-[30px]","font-[500]"],[1,"text-[20px]","text-gray-400","cursor-pointer"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Profile Tracker"),a(),r(4,"div",3),l(5,"Home"),a()()())},styles:['*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}[_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-content: ""}html[_ngcontent-%COMP%], [_nghost-%COMP%]{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body[_ngcontent-%COMP%]{margin:0;line-height:inherit}hr[_ngcontent-%COMP%]{height:0;color:inherit;border-top-width:1px}abbr[_ngcontent-%COMP%]:where([title]){text-decoration:underline dotted}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-size:inherit;font-weight:inherit}a[_ngcontent-%COMP%]{color:inherit;text-decoration:inherit}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}table[_ngcontent-%COMP%]{text-indent:0;border-color:inherit;border-collapse:collapse}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:where([type=button]), input[_ngcontent-%COMP%]:where([type=reset]), input[_ngcontent-%COMP%]:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}[_ngcontent-%COMP%]:-moz-focusring{outline:auto}[_ngcontent-%COMP%]:-moz-ui-invalid{box-shadow:none}progress[_ngcontent-%COMP%]{vertical-align:baseline}[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary[_ngcontent-%COMP%]{display:list-item}blockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{margin:0}fieldset[_ngcontent-%COMP%]{margin:0;padding:0}legend[_ngcontent-%COMP%]{padding:0}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}dialog[_ngcontent-%COMP%]{padding:0}textarea[_ngcontent-%COMP%]{resize:vertical}input[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder{opacity:1;color:#9ca3af}button[_ngcontent-%COMP%], [role=button][_ngcontent-%COMP%]{cursor:pointer}[_ngcontent-%COMP%]:disabled{cursor:default}img[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%]{display:block;vertical-align:middle}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{max-width:100%;height:auto}[hidden][_ngcontent-%COMP%]{display:none}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }[_ngcontent-%COMP%]::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.absolute[_ngcontent-%COMP%]{position:absolute}.relative[_ngcontent-%COMP%]{position:relative}.z-\\__ph-0__[_ngcontent-%COMP%]{z-index:5}.mb-2[_ngcontent-%COMP%]{margin-bottom:.5rem}.mb-\\__ph-0__[_ngcontent-%COMP%]{margin-bottom:10px}.mb-\\__ph-0__[_ngcontent-%COMP%]{margin-bottom:8px}.ml-\\__ph-0__[_ngcontent-%COMP%]{margin-left:20px}.mr-\\__ph-0__[_ngcontent-%COMP%]{margin-right:20px}.flex[_ngcontent-%COMP%]{display:flex}.aspect-square[_ngcontent-%COMP%]{aspect-ratio:1 / 1}.h-\\__ph-0__[_ngcontent-%COMP%]{height:100px}.h-\\__ph-0__[_ngcontent-%COMP%]{height:100vh}.h-\\__ph-0__[_ngcontent-%COMP%]{height:110px}.h-\\__ph-0__[_ngcontent-%COMP%]{height:120px}.h-\\__ph-0__[_ngcontent-%COMP%]{height:135px}.h-\\__ph-0__[_ngcontent-%COMP%]{height:140px}.h-\\__ph-0__[_ngcontent-%COMP%]{height:150px}.h-\\__ph-0__[_ngcontent-%COMP%]{height:1px}.h-\\__ph-0__[_ngcontent-%COMP%]{height:54px}.h-fit[_ngcontent-%COMP%]{height:fit-content}.h-full[_ngcontent-%COMP%]{height:100%}.w-\\__ph-0__[_ngcontent-%COMP%]{width:100vw}.w-\\__ph-0__[_ngcontent-%COMP%]{width:16px}.w-\\__ph-0__[_ngcontent-%COMP%]{width:30%}.w-\\__ph-0__[_ngcontent-%COMP%]{width:4px}.w-fit[_ngcontent-%COMP%]{width:fit-content}.w-full[_ngcontent-%COMP%]{width:100%}.max-w-\\__ph-0__[_ngcontent-%COMP%]{max-width:1px}.max-w-\\__ph-0__[_ngcontent-%COMP%]{max-width:600px}.max-w-\\__ph-0__[_ngcontent-%COMP%]{max-width:750px}.transform[_ngcontent-%COMP%]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.flex-col[_ngcontent-%COMP%]{flex-direction:column}.items-start[_ngcontent-%COMP%]{align-items:flex-start}.items-center[_ngcontent-%COMP%]{align-items:center}.justify-start[_ngcontent-%COMP%]{justify-content:flex-start}.justify-center[_ngcontent-%COMP%]{justify-content:center}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.gap-\\__ph-0__[_ngcontent-%COMP%]{gap:10px}.gap-\\__ph-0__[_ngcontent-%COMP%]{gap:20px}.self-end[_ngcontent-%COMP%]{align-self:flex-end}.overflow-hidden[_ngcontent-%COMP%]{overflow:hidden}.overflow-y-scroll[_ngcontent-%COMP%]{overflow-y:scroll}.rounded-\\__ph-0__[_ngcontent-%COMP%]{border-radius:10px}.rounded-\\__ph-0__[_ngcontent-%COMP%]{border-radius:50%}.border-\\__ph-0__[_ngcontent-%COMP%]{border-width:0px}.border-\\__ph-0__[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(255 221 9 / var(--tw-border-opacity))}.bg-\\__ph-0__[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(18 18 18 / var(--tw-bg-opacity))}.bg-\\__ph-0__[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(38 38 38 / var(--tw-bg-opacity))}.bg-\\__ph-0__[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(77 76 76 / var(--tw-bg-opacity))}.px-\\__ph-0__[_ngcontent-%COMP%]{padding-left:20px;padding-right:20px}.px-\\__ph-0__[_ngcontent-%COMP%]{padding-left:30px;padding-right:30px}.py-\\__ph-0__[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px}.py-\\__ph-0__[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px}.text-right[_ngcontent-%COMP%]{text-align:right}.text-\\__ph-0__[_ngcontent-%COMP%]{font-size:12px}.text-\\__ph-0__[_ngcontent-%COMP%]{font-size:14px}.text-\\__ph-0__[_ngcontent-%COMP%]{font-size:16px}.text-\\__ph-0__[_ngcontent-%COMP%]{font-size:18px}.text-\\__ph-0__[_ngcontent-%COMP%]{font-size:20px}.text-\\__ph-0__[_ngcontent-%COMP%]{font-size:24px}.text-\\__ph-0__[_ngcontent-%COMP%]{font-size:30px}.text-\\__ph-0__[_ngcontent-%COMP%]{font-size:32px}.font-\\__ph-0__[_ngcontent-%COMP%]{font-weight:400}.font-\\__ph-0__[_ngcontent-%COMP%]{font-weight:500}.font-\\__ph-0__[_ngcontent-%COMP%]{font-weight:600}.italic[_ngcontent-%COMP%]{font-style:italic}.leading-\\__ph-0__[_ngcontent-%COMP%]{line-height:16px}.leading-\\__ph-0__[_ngcontent-%COMP%]{line-height:24px}.leading-\\__ph-0__[_ngcontent-%COMP%]{line-height:32px}.text-\\__ph-0__[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 221 9 / var(--tw-text-opacity))}.text-gray-300[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.text-gray-400[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-white[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.opacity-80[_ngcontent-%COMP%]{opacity:.8}.hover\\:underline[_ngcontent-%COMP%]:hover{text-decoration-line:underline}']});let o=t;return o})();var C=(()=>{let t=class t{constructor(){this.title="ProfileTracker"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"w-[100vw]","h-[100vh]","bg-[#121212]","flex","flex-col","items-center","gap-[10px]","py-[10px]","overflow-y-scroll"]],template:function(e,n){e&1&&(r(0,"div",0),p(1,"app-navbar")(2,"router-outlet"),a())},dependencies:[N,Y]});let o=t;return o})();var A=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=_({type:t,bootstrap:[C]}),t.\u0275inj=f({providers:[F(),S(z())],imports:[E,U,I]});let o=t;return o})();var Z=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=_({type:t,bootstrap:[C]}),t.\u0275inj=f({imports:[A,D]});let o=t;return o})();export{Z as a};
