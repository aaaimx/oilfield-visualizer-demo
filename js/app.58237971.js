(function(e){function t(t){for(var s,o,r=t[0],l=t[1],c=t[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},i={app:0},n=[];function o(e){return r.p+"js/"+({"client-form~forms":"client-form~forms","client-form":"client-form",forms:"forms",profile:"profile",tables:"tables"}[e]||e)+"."+{"client-form~forms":"462db0ab","client-form":"0ddf9b25",forms:"6aeabe56",profile:"3aad6ad4",tables:"c30fdb7a"}[e]+".js"}function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=i[e]=[t,s]}));t.push(a[2]=s);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(e);var c=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=i[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",c.name="ChunkLoadError",c.type=s,c.request=n,a[1](c)}i[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/oilfield-visualizer-demo/",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1e1d":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section is-title-bar"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("ul",e._l(e.titleStack,(function(t,s){return a("li",{key:s},[e._v(" "+e._s(t)+" ")])})),0)])]),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"buttons is-right"},[a("a",{staticClass:"button is-primary",attrs:{href:"https://admin-one.justboil.me/",target:"_blank"}},[a("b-icon",{attrs:{icon:"credit-card","custom-size":"default"}}),a("span",[e._v("Premium Demo")])],1)])])])])])},i=[],n={name:"TitleBar",props:{titleStack:{type:Array,default:()=>[]}}},o=n,r=a("2877"),l=Object(r["a"])(o,s,i,!1,null,null,null);t["a"]=l.exports},"43f2":function(e,t,a){e.exports=a.p+"img/logo.eb5a226b.jpeg"},"503b":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"hero is-hero-bar"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("h1",{staticClass:"title"},[e._t("default")],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[a("div",{staticClass:"level-item"},[e._t("right")],2)])])])])},i=[],n={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},o=n,r=a("2877"),l=Object(r["a"])(o,s,i,!1,null,null,null);t["a"]=l.exports},"56d7":function(e,t,a){"use strict";a.r(t);a("a79d"),a("b107");var s=a("2b0e"),i=a("289d"),n=a("8c4f"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._e(),a("hero-bar",{attrs:{"has-right-visible":!1}},[e._v(" Welcome to Stress and Log Analysis Dashboard ")]),a("section",{staticClass:"section is-main-section"},[e._e(),e._m(0),e._e()],1)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"columns is-desktop"},[a("div",{staticClass:"card has-text-centered"},[a("p",{staticClass:"title is-size-6 mx-4 my-4"},[e._v("Prepared for PEMEX, 2021")]),a("p",{staticClass:"card-content mx-4"},[e._v(" This software is intended to assist in the analysis of well logs for the purpose of preparing stress and permeability profiles for the optimization of completion designs. The output is a full dataset of rock properties values ready for direct importation into MFRAC or for manual layer averaging in other fracture design programs. The log analysis is for the purpose of identifying the general petrophysical properties which characterize the zone or reservoir of interest and is not intended to replace petrophysical analysis as part of an integrated team approach. As always, the numeric values calculated must not ignore the experience local conditions and expertise. ")]),a("div",{staticClass:"card-body has-text-centered mb-4"},[a("img",{staticClass:"mr-4",attrs:{src:"https://lh3.googleusercontent.com/proxy/dJ4snu9Hf2EwEPwtjDnn4OWItX52N2F-04xUdgo8nHMBAeb7KzzBoPn2JKN0kRhFr2XfDvOpAyO4Wniht6YPkNR8TacibtBe-KFkP4ty6j5Q-NtNkr3zkV9pGTvwVsOCiVos5VnSq6Ez3a-GNeY0w9RilWOZDxVcDOtU1V4OYV4uVJxqos-LPBzK5jxR",alt:""}}),a("img",{staticClass:"ml-4",attrs:{width:"200",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Logo_Petr%C3%B3leos_Mexicanos.svg/1200px-Logo_Petr%C3%B3leos_Mexicanos.svg.png",alt:""}})])])])}],l=a("f755"),c=a("1e1d"),u=a("503b"),d=a("9e7c"),m=a("7f57"),p=a("6df7"),h=a("7080"),f={name:"Home",components:{ClientsTableSample:h["a"],CardComponent:p["a"],CardWidget:m["a"],Tiles:d["a"],HeroBar:u["a"],TitleBar:c["a"]},data(){return{defaultChart:{chartData:null,extraOptions:l["a"]}}},computed:{titleStack(){return["Admin","Dashboard"]}},mounted(){this.fillChartData(),this.$buefy.snackbar.open({message:"Welcome back",queue:!1})},methods:{randomChartData(e){const t=[];for(let a=0;a<e;a++)t.push(Math.round(200*Math.random()));return t},fillChartData(){}}},v=f,b=a("2877"),g=Object(b["a"])(v,o,r,!1,null,null,null),C=g.exports;s["a"].use(n["a"]);const w=[{meta:{title:"Dashboard"},path:"/",name:"home",component:C},{meta:{title:"Charts"},path:"/charts",name:"charts",component:()=>a.e("tables").then(a.bind(null,"6923"))},{meta:{title:"Tables"},path:"/tables",name:"tables",component:()=>a.e("tables").then(a.bind(null,"8840"))},{meta:{title:"Forms"},path:"/forms",name:"forms",component:()=>Promise.all([a.e("client-form~forms"),a.e("forms")]).then(a.bind(null,"0894"))},{meta:{title:"Profile"},path:"/profile",name:"profile",component:()=>a.e("profile").then(a.bind(null,"c66d"))},{meta:{title:"New Client"},path:"/client/new",name:"client.new",component:()=>Promise.all([a.e("client-form~forms"),a.e("client-form")]).then(a.bind(null,"e96b"))},{meta:{title:"Edit Client"},path:"/client/:id",name:"client.edit",component:()=>Promise.all([a.e("client-form~forms"),a.e("client-form")]).then(a.bind(null,"e96b")),props:!0}],_=new n["a"]({base:"/oilfield-visualizer-demo/",routes:w,scrollBehavior(e,t,a){return a||{x:0,y:0}}});var y=_,k=a("2f62");s["a"].use(k["a"]);var x=new k["a"].Store({state:{userName:null,userEmail:null,userAvatar:null,isNavBarVisible:!0,isFooterBarVisible:!0,isAsideVisible:!0,isAsideMobileExpanded:!1},mutations:{basic(e,t){e[t.key]=t.value},user(e,t){t.name&&(e.userName=t.name),t.email&&(e.userEmail=t.email),t.avatar&&(e.userAvatar=t.avatar)},asideMobileStateToggle(e,t=null){const a="has-aside-mobile-expanded";let s;s=null!==t?t:!e.isAsideMobileExpanded,s?document.documentElement.classList.add(a):document.documentElement.classList.remove(a),e.isAsideMobileExpanded=s}},actions:{}}),A=a("9483");Object(A["a"])("/oilfield-visualizer-demo/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav-bar"),a("aside-menu",{attrs:{menu:e.menu}}),a("router-view"),a("footer-bar")],1)},N=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{directives:[{name:"show",rawName:"v-show",value:e.isNavBarVisible,expression:"isNavBarVisible"}],staticClass:"navbar is-fixed-top",attrs:{id:"navbar-main"}},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item is-hidden-desktop",on:{click:function(t){return t.preventDefault(),e.menuToggleMobile(t)}}},[a("b-icon",{attrs:{icon:e.menuToggleMobileIcon}})],1),e._m(0)]),a("div",{staticClass:"navbar-brand is-right"},[a("a",{staticClass:"navbar-item navbar-item-menu-toggle is-hidden-desktop",on:{click:function(t){return t.preventDefault(),e.menuNavBarToggle(t)}}},[a("b-icon",{attrs:{icon:e.menuNavBarToggleIcon,"custom-size":"default"}})],1)]),a("div",{staticClass:"navbar-menu fadeIn animated faster",class:{"is-active":e.isMenuNavBarActive}},[a("div",{staticClass:"navbar-end"},[a("nav-bar-menu",{staticClass:"has-divider"},[a("b-icon",{attrs:{icon:"account-circle","custom-size":"default"}}),a("span",[e._v("Hello Admin")]),a("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/profile","exact-active-class":"is-active"}},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[e._v("My Profile")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}}),a("span",[e._v("Settings")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"email","custom-size":"default"}}),a("span",[e._v("Messages")])],1),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[e._v("Log Out")])],1)],1)],1),e._e(),a("a",{staticClass:"navbar-item is-desktop-icon-only",attrs:{title:"Log out"},on:{click:e.logout}},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[e._v("Log out")])],1)],1)])])},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-item has-control no-left-space-touch"},[a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{placeholder:"Search Pages..."}})])])}],M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-item has-dropdown has-dropdown-with-icons",class:{"is-hoverable":e.isHoverable,"is-active":e.isDropdownActive},on:{click:e.toggle}},[a("a",{staticClass:"navbar-link is-arrowless"},[e._t("default"),a("b-icon",{attrs:{icon:e.toggleDropdownIcon,"custom-size":"default"}})],2),e._t("dropdown")],2)},S=[],E={name:"NavBarMenu",props:{isHoverable:{type:Boolean,default:!1}},data(){return{isDropdownActive:!1}},computed:{toggleDropdownIcon(){return this.isDropdownActive?"chevron-up":"chevron-down"}},mounted(){window.addEventListener("click",this.forceClose)},beforeDestroy(){window.removeEventListener("click",this.forceClose)},methods:{toggle(){this.isHoverable||(this.isDropdownActive=!this.isDropdownActive)},forceClose(e){this.$el.contains(e.target)||(this.isDropdownActive=!1)}}},$=E,P=Object(b["a"])($,M,S,!1,null,null,null),T=P.exports,D=a("808f"),z={name:"NavBar",components:{UserAvatar:D["a"],NavBarMenu:T},data(){return{isMenuNavBarActive:!1}},computed:{menuNavBarToggleIcon(){return this.isMenuNavBarActive?"close":"dots-vertical"},menuToggleMobileIcon(){return this.isAsideMobileExpanded?"backburger":"forwardburger"},...Object(k["b"])(["isNavBarVisible","isAsideMobileExpanded","userName"])},mounted(){this.$router.afterEach(()=>{this.isMenuNavBarActive=!1})},methods:{menuToggleMobile(){this.$store.commit("asideMobileStateToggle")},menuNavBarToggle(){this.isMenuNavBarActive=!this.isMenuNavBarActive},logout(){this.$buefy.snackbar.open({message:"Log out clicked",queue:!1})}}},V=z,L=Object(b["a"])(V,O,B,!1,null,null,null),I=L.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("aside",{directives:[{name:"show",rawName:"v-show",value:e.isAsideVisible,expression:"isAsideVisible"}],staticClass:"aside is-placed-left is-expanded"},[s("aside-tools",{attrs:{"is-main-menu":!0}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("img",{attrs:{src:a("43f2"),width:"150",alt:""}})])]),s("div",{staticClass:"menu is-menu-main"},[e._l(e.menu,(function(t,a){return["string"===typeof t?s("p",{key:a,staticClass:"menu-label"},[e._v(" "+e._s(t)+" ")]):s("aside-menu-list",{key:a,attrs:{menu:t},on:{"menu-click":e.menuClick}})]}))],2),s("div",{staticClass:"menu is-menu-bottom"},[s("aside-menu-list",{attrs:{menu:[{action:"logout",icon:"logout",label:"Log out",state:"link"}]},on:{"menu-click":e.menuClick}})],1)],1)},H=[],R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aside-tools"},[a("div",{staticClass:"aside-tools-label"},[e.icon?a("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e._t("label")],2)])},U=[],q={name:"AsideTools",props:{icon:{type:String,default:null},label:{type:String,default:null}}},W=q,J=Object(b["a"])(W,R,U,!1,null,null,null),G=J.exports,K=a("9a7b"),X={name:"AsideMenu",components:{AsideTools:G,AsideMenuList:K["default"]},props:{menu:{type:Array,default:()=>[]}},computed:{...Object(k["b"])(["isAsideVisible"])},methods:{menuClick(e){}}},Y=X,Q=Object(b["a"])(Y,F,H,!1,null,null,null),Z=Q.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{directives:[{name:"show",rawName:"v-show",value:e.isFooterBarVisible,expression:"isFooterBarVisible"}],staticClass:"footer"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"footer-copyright"},[a("b",[e._v("© "+e._s(e.year)+", oilfield.tech")]),e._v(" — Oilfield Visualizer Demo "),a("span",{staticClass:"tag"},[e._v("v1.0.0")])])])]),e._m(0)])])])},te=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"level-right"},[s("div",{staticClass:"level-item"},[s("div",{staticClass:"logo"},[s("a",{attrs:{href:"https://oilfield.tech"}},[s("img",{attrs:{src:a("43f2"),alt:"oilfield.tech"}})])])])])}],ae=a("5a0c"),se=a.n(ae),ie={name:"FooterBar",computed:{year(){return se()().year()},...Object(k["b"])(["isFooterBarVisible"])}},ne=ie,oe=Object(b["a"])(ne,ee,te,!1,null,null,null),re=oe.exports,le={name:"Home",components:{FooterBar:re,AsideMenu:Z,NavBar:I},computed:{menu(){return["Admin",[{to:"/",icon:"home",label:"Home"},{to:"/client/new",icon:"account-group",label:"Users"},{to:"/tables",icon:"trending-up",label:"Trends"}],"Settings",[{to:"/charts",label:"Charts",icon:"chart-line"},{to:"/forms",label:"Options",icon:"cogs"}]]}},created(){this.$store.commit("user",{name:"John Doe",email:"john@example.com",avatar:"https://avatars.dicebear.com/api/human/jjjjjjjjjjjj.svg"})}},ce=le,ue=Object(b["a"])(ce,j,N,!1,null,null,null),de=ue.exports,me=a("04d1");const pe="Admin One Bulma";y.afterEach(e=>{x.commit("asideMobileStateToggle",!1),e.meta&&e.meta.title?document.title=`${e.meta.title} — ${pe}`:document.title=pe}),s["a"].config.productionTip=!1,s["a"].component("Plotly",me["Plotly"]),s["a"].use(i["a"]),new s["a"]({router:y,store:x,render:e=>e(de)}).$mount("#app")},"6df7":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card",class:{"has-height-medium":e.isScrollable,"has-card-header-background":e.hasCardHeaderBackground}},[e.title||e.hasTitleSlot?a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[e.icon?a("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e.hasTitleSlot?e._t("title"):e.title?a("span",[e._v(e._s(e.title))]):e._e()],2),e.hasButtonSlot?e._t("button"):e.headerIcon?a("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(t){return t.preventDefault(),e.headerIconClick(t)}}},[a("b-icon",{attrs:{icon:e.headerIcon,"custom-size":"default"}})],1):e._e()],2):e._e(),e._t("toolbar"),a("div",{ref:"cardContent",staticClass:"card-content"},[e._t("default")],2),e.hasFooterSlot?a("footer",{staticClass:"card-footer"},[e._t("footer")],2):e._e()],2)},i=[],n={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},hasTitleSlot:{type:Boolean,default:!1},hasButtonSlot:{type:Boolean,default:!1},hasFooterSlot:{type:Boolean,default:!1},hasCardHeaderBackground:{type:Boolean,default:!1},isScrollable:{type:Boolean,default:!1}},methods:{headerIconClick(){this.$emit("header-icon-click")}},mounted(){this.isScrollable&&this.$emit("ps-ready",this.ps)}},o=n,r=a("2877"),l=Object(r["a"])(o,s,i,!1,null,null,null);t["a"]=l.exports},7080:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("modal-box",{attrs:{"is-active":e.isModalActive,"trash-object-name":e.trashObjectName},on:{confirm:e.trashConfirm,cancel:e.trashCancel}}),a("b-table",{attrs:{checkable:!1,loading:e.isLoading,paginated:e.paginated,"per-page":e.perPage,striped:!0,narrowed:"",bordered:!0,hoverable:!0,columns:e.columns,data:e.clients}},[a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"content has-text-grey has-text-centered"},[e.isLoading?[a("p",[a("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),a("p",[e._v("Fetching data...")])]:[a("p",[a("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),a("p",[e._v("Nothing's here…")])]],2)])])],1)},i=[],n=a("bc3a"),o=a.n(n),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{attrs:{active:e.isModalActive,"has-modal-card":""},on:{"update:active":function(t){e.isModalActive=t}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[e._v("Confirm action")])]),a("section",{staticClass:"modal-card-body"},[a("p",[e._v(" This will permanently delete "),a("b",[e._v(e._s(e.trashObjectName))])]),a("p",[e._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.cancel}},[e._v("Cancel")]),a("button",{staticClass:"button is-danger",on:{click:e.confirm}},[e._v("Delete")])])])])},l=[],c={name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data(){return{isModalActive:!1}},watch:{isActive(e){this.isModalActive=e},isModalActive(e){e||this.cancel()}},methods:{cancel(){this.$emit("cancel")},confirm(){this.$emit("confirm")}}},u=c,d=a("2877"),m=Object(d["a"])(u,r,l,!1,null,null,null),p=m.exports,h={name:"ClientsTableSample",components:{ModalBox:p},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data(){return{isModalActive:!1,trashObject:null,columns:[],clients:[],isLoading:!1,paginated:!1,perPage:10,checkedRows:[]}},computed:{trashObjectName(){return this.trashObject?this.trashObject.name:null}},mounted(){this.dataUrl&&(this.isLoading=!0,o.a.get(this.dataUrl).then(e=>{this.isLoading=!1,e.data&&e.data&&(e.data.length>this.perPage&&(this.paginated=!0),this.clients=e.data,this.columns=Object.keys(e.data[0]).map(e=>({field:e,label:e.toUpperCase()})))}).catch(e=>{this.isLoading=!1,this.$buefy.toast.open({message:"Error: "+e.message,type:"is-danger"})}))},methods:{trashModal(e){this.trashObject=e,this.isModalActive=!0},trashConfirm(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel(){this.isModalActive=!1}}},f=h,v=Object(d["a"])(f,s,i,!1,null,null,null);t["a"]=v.exports},"7f57":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",{staticClass:"is-card-widget",attrs:{icon:e.trendingIcon,"has-button-slot":!0,"has-title-slot":!0}},[a("span",{attrs:{slot:"title"},slot:"title"},[a("b",[e._v(e._s(e.previousValue))]),e._v(" in "),a("b",[e._v(e._s(e.previousPeriod))])]),a("button",{staticClass:"button is-small",attrs:{slot:"button",type:"button"},on:{click:e.buttonClick},slot:"button"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}})],1),a("div",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"is-widget-label"},[a("h3",{staticClass:"subtitle is-spaced"},[e._v(" "+e._s(e.label)+" ")]),a("h1",{staticClass:"title"},[a("growing-number",{attrs:{value:e.number,prefix:e.prefix,suffix:e.suffix}})],1)])]),e.icon?a("div",{staticClass:"level-item has-widget-icon"},[a("div",{staticClass:"is-widget-icon"},[a("b-icon",{attrs:{icon:e.icon,size:"is-large",type:e.type}})],1)]):e._e()])])},i=[],n=a("6612"),o=a.n(n),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(e._s(e.prefix)+e._s(e.newValueFormatted)+e._s(e.suffix))])},l=[],c={name:"GrowingNumber",props:{prefix:{type:String,default:null},suffix:{type:String,default:null},value:{type:Number,default:0},duration:{type:Number,default:500}},data(){return{newValue:0,step:0}},computed:{newValueFormatted(){return this.newValue<1e3?this.newValue:o()(this.newValue).format("0,0")}},watch:{value(){this.growInit()}},mounted(){this.growInit()},methods:{growInit(){const e=this.value/(this.duration/25);this.grow(e)},grow(e){const t=Math.ceil(this.newValue+e);if(t>this.value)return this.newValue=this.value,!1;this.newValue=t,setTimeout(()=>{this.grow(e)},25)}}},u=c,d=a("2877"),m=Object(d["a"])(u,r,l,!1,null,null,null),p=m.exports,h={name:"CardWidget",components:{GrowingNumber:p},props:{icon:{type:String,default:null},number:{type:Number,default:0},prefix:{type:String,default:null},suffix:{type:String,default:null},label:{type:String,default:null},type:{type:String,default:null},previousNumber:{type:Number,default:0},previousPeriod:{type:String,default:null}},computed:{trendingIcon(){return this.previousNumber<this.number?"arrow-up-bold":"arrow-down-bold"},previousValue(){let e=this.previousNumber<1e3?this.previousNumber:o()(this.previousNumber).format("0,0");return this.prefix&&(e=this.prefix+e),this.suffix&&(e+=this.suffix),e}},methods:{buttonClick(){this.$buefy.snackbar.open({message:"Got click",queue:!1})}}},f=h,v=Object(d["a"])(f,s,i,!1,null,null,null);t["a"]=v.exports},"808f":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"is-user-avatar"},[a("img",{attrs:{src:e.newUserAvatar,alt:e.userName}})])},i=[],n=(a("5319"),a("2f62")),o={name:"UserAvatar",props:{avatar:{type:String,default:null}},computed:{newUserAvatar(){if(this.avatar)return this.avatar;if(this.userAvatar)return this.userAvatar;let e="somename";return this.userName&&(e=this.userName.replace(/[^a-z0-9]+/i,"")),`https://avatars.dicebear.com/v2/human/${e}.svg?options[mood][]=happy`},...Object(n["b"])(["userAvatar","userName"])}},r=o,l=a("2877"),c=Object(l["a"])(r,s,i,!1,null,null,null);t["a"]=c.exports},"9a7b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{class:{"menu-list":!e.isSubmenuList}},e._l(e.menu,(function(t,s){return a("aside-menu-item",{key:s,attrs:{item:t},on:{"menu-click":e.menuClick}})})),1)},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{class:{"is-active":e.isDropdownActive}},[a(e.componentIs,{tag:"component",class:{"has-icon":!!e.item.icon,"has-dropdown-icon":e.hasDropdown},attrs:{to:e.itemTo,href:e.itemHref,"exact-active-class":"is-active"},on:{click:e.menuClick}},[e.item.icon?a("b-icon",{class:{"has-update-mark":e.item.updateMark},attrs:{icon:e.item.icon,"custom-size":"default"}}):e._e(),e.item.label?a("span",{class:{"menu-item-label":!!e.item.icon}},[e._v(e._s(e.item.label))]):e._e(),e.hasDropdown?a("div",{staticClass:"dropdown-icon"},[a("b-icon",{attrs:{icon:e.dropdownIcon,"custom-size":"default"}})],1):e._e()],1),e.hasDropdown?a("aside-menu-list",{attrs:{menu:e.item.menu,"is-submenu-list":!0}}):e._e()],1)},o=[],r={name:"AsideMenuItem",components:{AsideMenuList:()=>Promise.resolve().then(a.bind(null,"9a7b"))},props:{item:{type:Object,default:null}},data(){return{isDropdownActive:!1}},computed:{componentIs(){return this.item.to?"router-link":"a"},hasDropdown(){return!!this.item.menu},dropdownIcon(){return this.isDropdownActive?"minus":"plus"},itemTo(){return this.item.to?this.item.to:null},itemHref(){return this.item.href?this.item.href:null}},methods:{menuClick(){this.$emit("menu-click",this.item),this.hasDropdown&&(this.isDropdownActive=!this.isDropdownActive)}}},l=r,c=a("2877"),u=Object(c["a"])(l,n,o,!1,null,null,null),d=u.exports,m={name:"AsideMenuList",components:{AsideMenuItem:d},props:{isSubmenuList:{type:Boolean,default:!1},menu:{type:Array,default:()=>[]}},methods:{menuClick(e){this.$emit("menu-click",e)}}},p=m,h=Object(c["a"])(p,s,i,!1,null,null,null);t["default"]=h.exports},"9e7c":function(e,t,a){"use strict";var s,i,n=a("91c8"),o=a.n(n),r={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},methods:{renderAncestor(e,t){return e("div",{attrs:{class:"tile is-ancestor"}},t.map(t=>e("div",{attrs:{class:"tile is-parent"}},[t])))}},render(e){return this.$slots.default.length<=this.maxPerRow?this.renderAncestor(e,this.$slots.default):e("div",{attrs:{class:"is-tiles-wrapper"}},o()(this.$slots.default,this.maxPerRow).map(t=>this.renderAncestor(e,t)))}},l=r,c=a("2877"),u=Object(c["a"])(l,s,i,!1,null,null,null);t["a"]=u.exports},b107:function(e,t,a){},f755:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));const s={maintainAspectRatio:!1,legend:{display:!1},responsive:!0},i={...s,tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}}});
//# sourceMappingURL=app.58237971.js.map