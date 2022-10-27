(function(){"use strict";var t={3071:function(t,e,n){var o={};n.r(o),n.d(o,{arrow:function(){return Ce},close:function(){return de},exit:function(){return Bt},fork:function(){return oe},github:function(){return be},home:function(){return St},logo:function(){return Wt},star:function(){return Kt},triangle:function(){return It}});var s=n(9963),r=n(3907),a=n(196);const i="https://api.github.com",l=({url:t,method:e="get",data:n={},headers:o={}})=>(0,a.Z)({url:t,method:e,data:n,baseURL:i,headers:{Authorization:`token ${localStorage.getItem("token")}`,...o}}),c=t=>t<10?`0${t}`:t,d=(t="javascript")=>{const e=new URLSearchParams,n=6048e5,o=new Date(Date.now()-n),s=[o.getFullYear(),c(o.getMonth()+1),c(o.getDate())].join("-");return e.append("order","desc"),e.append("sort","stars"),e.append("per_page",10),e.append("q",`language:${t} created:>${s}`),l({url:`/search/repositories?${e}`})},u=({owner:t,repo:e})=>{const n="application/vnd.github.v3.html+json";return l({url:`/repos/${t}/${e}/readme`,headers:{accept:n}})};var p={clientId:"6c97e701d61563fe2de0",clientSecret:"4fc41e64bcf6bd0d774b68a3d5b1a4f3dab81777"};const g=(t,e=p.clientId,n=p.clientSecret)=>l({url:"https://webdev-api.loftschool.com/github",method:"post",data:{code:t,clientId:e,clientSecret:n}}),m=()=>{const t="https://github.com/login/oauth/authorize",e=`${t}?client_id=${p.clientId}&scope=repo%20user`;window.location.href=e},h=()=>l({url:"/user"}),v=({limit:t})=>{const e=new URLSearchParams;return t&&e.append("per_page",t),l({url:`/user/starred?${e}`})},C=({repo:t,owner:e})=>l({url:`/user/starred/${e}/${t}`,method:"put"}),w=({repo:t,owner:e})=>l({url:`/user/starred/${e}/${t}`,method:"delete"}),f=({owner:t,repo:e})=>{const n=new URLSearchParams;return n.append("per_page",10),l({url:`/repos/${t}/${e}/issues`})};var _={namespaced:!0,state:{data:[]},mutations:{SET_TRENDINGS:(t,{starred:e,trendings:n})=>{e.length>0?t.data=n.filter((t=>void 0===e.find((e=>e.id===t.id)))):t.data=n},SET_README:(t,e)=>{t.data=t.data.map((t=>(e.id===t.id&&(t.readme=e.content),t)))},SET_FOLLOWING:(t,e)=>{t.data=t.data.map((t=>{const n=t;return e.id===n.id&&(n.following=e.following,n.loading=e.loading),n}))}},getters:{getRepoById:t=>e=>t.data.find((t=>t.id===e)),getStarredRepo:t=>e=>t.data.find((t=>t.id===e))},actions:{async fetchTrendings({state:t,commit:e,rootState:n}){if(!(t.data.length>0)){console.log(n);try{const{data:t}=await d();e("SET_TRENDINGS",{starred:n.starred.data,trendings:t.items})}catch(o){throw console.log(o),o}}},async fetchReadme({commit:t,getters:e},{id:n,owner:o,repo:s}){const r=e.getRepoById(n);if(void 0===r.readme)try{const{data:e}=await u({owner:o,repo:s});t("SET_README",{id:n,content:e})}catch(a){throw console.log(a),a}},async starRepo({commit:t,getters:e},n){t("SET_FOLLOWING",{id:n,loading:!0});const{name:o,owner:s}=e.getStarredRepo(n);try{await C({owner:s.login,repo:o}),t("SET_FOLLOWING",{id:n,following:!0,loading:!1}),console.log()}catch(r){throw console.log(r),r}},async unStarRepo({commit:t,getters:e},n){t("SET_FOLLOWING",{id:n,loading:!0});const{name:o,owner:s}=e.getStarredRepo(n);try{await w({owner:s.login,repo:o}),t("SET_FOLLOWING",{id:n,following:!1,loading:!1}),console.log()}catch(r){throw console.log(r),r}}}},L={namespaced:!0,state:{},actions:{getAuthCode(){m()},async authUserForCode(t,e){const{data:n}=await g(e);return n.token},logout(){localStorage.removeItem("token"),window.location.reload()}}},S={namespaced:!0,state:{data:[]},mutations:{SET_STARRED:(t,e)=>{t.data=e.map((t=>(t.following=!0,t.loading=!1,t)))},SET_ISSUES_TO_REPO:(t,{id:e,issues:n})=>{t.data=t.data.map((t=>{const o=t;return t.id===e&&(o.issues=n),o}))}},getters:{},actions:{async fetchStarred({commit:t},e){try{const{data:n}=await v({limit:e?.limit});t("SET_STARRED",n),console.log(n)}catch(n){throw console.log(n),n}},async fetchIssuesForRepo({commit:t},{id:e,owner:n,repo:o}){t("SET_ISSUES_TO_REPO",{id:e,issues:{loading:!0}});try{const{data:s}=await f({owner:n,repo:o});t("SET_ISSUES_TO_REPO",{id:e,issues:{data:s,loading:!1}})}catch(s){throw t("SET_ISSUES_TO_REPO",{id:e,issues:{loading:!1}}),console.log(s),s}}}},y={namespaced:!0,state:{data:{}},mutations:{SET_USER:(t,e)=>{t.data=e}},actions:{async getUserData({commit:t}){try{const{data:e}=await h();t("SET_USER",e),console.log(e)}catch(e){throw console.log(e),e}}}},b=(0,r.MT)({modules:{trendings:_,auth:L,starred:S,user:y}}),D=n(6252);function x(t,e,n,o,s,r){const a=(0,D.up)("router-view");return(0,D.wg)(),(0,D.j4)(a)}var Z={name:"App",components:{}},k=n(8118);const I=(0,k.Z)(Z,[["render",x]]);var T=I,R=n(2201);n(7658);const O={class:"topline"},H={class:"stories"};function V(t,e,n,o,s,r){const a=(0,D.up)("logo"),i=(0,D.up)("navigation"),l=(0,D.up)("story-user-item"),c=(0,D.up)("topline"),d=(0,D.up)("repo-list");return(0,D.wg)(),(0,D.iD)(D.HY,null,[(0,D._)("div",O,[(0,D.Wm)(c,null,{headline:(0,D.w5)((()=>[(0,D.Wm)(a),(0,D.Wm)(i,{src:t.user.avatar_url,username:t.user.login},null,8,["src","username"])])),content:(0,D.w5)((()=>[(0,D._)("ul",H,[((0,D.wg)(!0),(0,D.iD)(D.HY,null,(0,D.Ko)(t.trendings,(e=>((0,D.wg)(),(0,D.iD)("li",{class:"stories-item",key:e.id},[(0,D.Wm)(l,(0,D.dG)(r.getFeedData(e),{onOnPress:n=>t.$router.push({name:"stories",params:{initialSlide:e.id}})}),null,16,["onOnPress"])])))),128))])])),_:1})]),(0,D.Wm)(d)],64)}const E={class:"c-topline"},W={class:"x-container"},$={class:"headline"},F={key:0,class:"content"};function M(t,e){return(0,D.wg)(),(0,D.iD)("div",E,[(0,D._)("div",W,[(0,D._)("div",$,[(0,D.WI)(t.$slots,"headline",{},void 0,!0)]),t.$slots.content?((0,D.wg)(),(0,D.iD)("div",F,[(0,D.WI)(t.$slots,"content",{},void 0,!0)])):(0,D.kq)("",!0)])])}const P={},U=(0,k.Z)(P,[["render",M],["__scopeId","data-v-fb035952"]]);var N=U,B=n(3577);const j={class:"avatar"},A=["src"],z={class:"username"};function q(t,e,n,o,s,r){return(0,D.wg)(),(0,D.iD)("button",{class:"c-story-user-item",onClick:e[0]||(e[0]=e=>t.$emit("onPress"))},[(0,D._)("div",j,[(0,D._)("img",{src:n.avatar,class:"img",alt:"username avatar"},null,8,A)]),(0,D._)("div",z,(0,B.zw)(n.username),1)])}var Y={props:{avatar:String,username:String}};const G=(0,k.Z)(Y,[["render",q],["__scopeId","data-v-24daa060"]]);var K=G;const X={class:"repository-list"};function J(t,e,n,o,s,r){const a=(0,D.up)("user"),i=(0,D.up)("post-content"),l=(0,D.up)("reviews");return(0,D.wg)(),(0,D.iD)("div",X,[((0,D.wg)(!0),(0,D.iD)(D.HY,null,(0,D.Ko)(t.starred,(t=>((0,D.wg)(),(0,D.iD)("div",{class:"repository-list__container",key:t.id},[(0,D.Wm)(a,(0,B.vs)((0,D.F4)(r.getFeedData(t))),null,16),(0,D.Wm)(i,(0,B.vs)((0,D.F4)(r.getFeedData(t))),null,16),(0,D.Wm)(l,{issues:t.issues?.data,loading:t.issues?.loading,date:new Date(t.created_at),onLoadContent:e=>r.loadIssues({id:t.id,owner:t.owner.login,repo:t.name})},null,8,["issues","loading","date","onLoadContent"])])))),128))])}const Q={class:"post-author"},tt={class:"post-author-avatar"},et=["src"],nt={class:"username"};function ot(t,e,n,o,s,r){return(0,D.wg)(),(0,D.iD)("div",Q,[(0,D._)("div",tt,[(0,D._)("img",{src:n.avatar,alt:"avatar",class:"img-avatar"},null,8,et)]),(0,D._)("div",nt,(0,B.zw)(n.username),1)])}var st={name:"User",props:{username:{type:String,required:!0},avatar:{type:String,required:!0}}};const rt=(0,k.Z)(st,[["render",ot],["__scopeId","data-v-3222599b"]]);var at=rt;const it={class:"reviews"},lt={key:1,class:"comments"},ct={class:"comments-list"},dt={class:"date"};function ut(t,e,n,o,s,r){const a=(0,D.up)("toggler"),i=(0,D.up)("comment-placeholder"),l=(0,D.up)("comment");return(0,D.wg)(),(0,D.iD)(D.HY,null,[(0,D._)("div",it,[(0,D.Wm)(a,{onOnToggle:r.toggle},null,8,["onOnToggle"]),n.loading?((0,D.wg)(),(0,D.j4)(i,{key:0})):(0,D.kq)("",!0),n.issues?.length&&s.shown?((0,D.wg)(),(0,D.iD)("div",lt,[(0,D._)("ul",ct,[((0,D.wg)(!0),(0,D.iD)(D.HY,null,(0,D.Ko)(n.issues,(t=>((0,D.wg)(),(0,D.iD)("li",{class:"comments-item",key:t.id},[(0,D.Wm)(l,{text:t.title,username:t.user.login},null,8,["text","username"])])))),128))])])):(0,D.kq)("",!0)]),(0,D._)("div",dt,(0,B.zw)(r.transformDate),1)],64)}const pt={class:"text"},gt={class:"icon"};function mt(t,e,n,o,s,r){const a=(0,D.up)("icon");return(0,D.wg)(),(0,D.iD)("button",{class:(0,B.C_)(["button",{active:s.isOpened}]),onClick:e[0]||(e[0]=(...t)=>r.toggle&&r.toggle(...t))},[(0,D._)("span",pt,(0,B.zw)(s.isOpened?"Hide":"View")+" issues",1),(0,D._)("span",gt,[(0,D.Wm)(a,{name:"triangle"})])],2)}function ht(t,e,n,o,s,r){return(0,D.wg)(),(0,D.j4)((0,D.LL)(n.name))}const vt={preserveAspectRatio:"none",viewBox:"0 0 24 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ct=(0,D._)("path",{d:"M10.0692 1.06704C11.1853 0.128491 12.8147 0.128491 13.9308 1.06704L22.9308 8.63522C23.6087 9.20524 24 10.0456 24 10.9313V23.5C24 24.6046 23.1046 25.5 22 25.5H16.5C15.3954 25.5 14.5 24.6046 14.5 23.5V16.5H9.5V23.5C9.5 24.6046 8.60457 25.5 7.5 25.5H2C0.895431 25.5 0 24.6046 0 23.5V10.9313C0 10.0456 0.391346 9.20524 1.0692 8.63522L10.0692 1.06704Z",fill:"currentColor"},null,-1),wt=[Ct];function ft(t,e){return(0,D.wg)(),(0,D.iD)("svg",vt,wt)}const _t={},Lt=(0,k.Z)(_t,[["render",ft]]);var St=Lt;const yt={width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},bt=(0,D._)("path",{d:"M0.200408 0.739665C0.48226 0.436132 0.956809 0.418556 1.26034 0.700408L5 4.22652L8.73967 0.700408C9.0432 0.418556 9.51775 0.436132 9.7996 0.739665C10.0815 1.0432 10.0639 1.51775 9.76034 1.7996L5.51034 5.7996C5.22258 6.0668 4.77743 6.0668 4.48967 5.7996L0.239665 1.7996C-0.0638681 1.51775 -0.081444 1.0432 0.200408 0.739665Z",fill:"#212121"},null,-1),Dt=[bt];function xt(t,e){return(0,D.wg)(),(0,D.iD)("svg",yt,Dt)}const Zt={},kt=(0,k.Z)(Zt,[["render",xt]]);var It=kt;const Tt={width:"175",height:"37",viewBox:"0 0 175 37",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Rt=(0,D.uE)('<path d="M18.6664 10.4756H24.3009C23.5838 5.28933 19.0122 1.63971 13.0832 1.63971C6.15528 1.63971 0.815308 6.63393 0.815308 15.1369C0.815308 23.435 5.80953 28.5829 13.1984 28.5829C19.819 28.5829 24.5443 24.3954 24.5443 17.4931V14.1893H13.5698V18.3639H19.2043C19.1274 21.6166 16.9121 23.6783 13.224 23.6783C9.06217 23.6783 6.43701 20.5665 6.43701 15.0857C6.43701 9.63046 9.16462 6.54429 13.1728 6.54429C16.0285 6.54429 17.9621 8.01694 18.6664 10.4756Z" fill="currentColor"></path><path d="M28.5773 28.2243H34.0325V8.55478H28.5773V28.2243ZM31.3177 6.01925C32.944 6.01925 34.2758 4.7771 34.2758 3.25322C34.2758 1.74215 32.944 0.5 31.3177 0.5C29.7042 0.5 28.3724 1.74215 28.3724 3.25322C28.3724 4.7771 29.7042 6.01925 31.3177 6.01925Z" fill="currentColor"></path><path d="M47.6026 8.55478H43.9017V3.84229H38.4465V8.55478H35.7573V12.6526H38.4465V22.8972C38.4209 26.7517 41.046 28.6597 45.003 28.4932C46.4116 28.442 47.4105 28.1603 47.9611 27.981L47.1031 23.9216C46.8342 23.9728 46.258 24.1009 45.7457 24.1009C44.6572 24.1009 43.9017 23.6911 43.9017 22.18V12.6526H47.6026V8.55478Z" fill="currentColor"></path><path d="M58.5699 28.6085C64.5373 28.6085 68.251 24.5235 68.251 18.4664C68.251 12.3709 64.5373 8.29867 58.5699 8.29867C52.6024 8.29867 48.8888 12.3709 48.8888 18.4664C48.8888 24.5235 52.6024 28.6085 58.5699 28.6085ZM58.5955 24.3826C55.8422 24.3826 54.4336 21.8599 54.4336 18.428C54.4336 14.996 55.8422 12.4605 58.5955 12.4605C61.2975 12.4605 62.7061 14.996 62.7061 18.428C62.7061 21.8599 61.2975 24.3826 58.5955 24.3826Z" fill="currentColor"></path><path d="M79.3975 36.0102C85.0192 36.0102 89.0146 33.449 89.0146 28.4164V8.55478H83.5978V11.8586H83.3929C82.663 10.2579 81.0623 8.29867 77.7712 8.29867C73.4557 8.29867 69.8061 11.6538 69.8061 18.3511C69.8061 24.8948 73.3533 27.9426 77.784 27.9426C80.9214 27.9426 82.6758 26.3675 83.3929 24.7412H83.6234V28.3396C83.6234 31.0416 81.8947 32.0916 79.5256 32.0916C77.1181 32.0916 75.9016 31.0416 75.4534 29.8506L70.4079 30.5293C71.061 33.6283 74.096 36.0102 79.3975 36.0102ZM79.5128 23.8448C76.8364 23.8448 75.3766 21.719 75.3766 18.3255C75.3766 14.9832 76.8108 12.6398 79.5128 12.6398C82.1636 12.6398 83.649 14.8808 83.649 18.3255C83.649 21.7959 82.138 23.8448 79.5128 23.8448Z" fill="currentColor"></path><path d="M92.0936 28.2243H97.5488V17.0962C97.5488 14.6759 99.316 13.0112 101.723 13.0112C102.479 13.0112 103.516 13.1392 104.029 13.3057V8.46514C103.542 8.34989 102.863 8.27305 102.313 8.27305C100.11 8.27305 98.3044 9.55362 97.5873 11.9867H97.3824V8.55478H92.0936V28.2243Z" fill="currentColor"></path><path d="M110.632 28.5957C113.539 28.5957 115.422 27.3279 116.382 25.4967H116.536V28.2243H121.709V14.9576C121.709 10.2707 117.739 8.29867 113.36 8.29867C108.647 8.29867 105.548 10.5525 104.793 14.1381L109.838 14.5478C110.21 13.2417 111.375 12.2812 113.334 12.2812C115.191 12.2812 116.254 13.2161 116.254 14.8296V14.9064C116.254 16.1742 114.909 16.3406 111.49 16.6736C107.597 17.0321 104.101 18.3383 104.101 22.7307C104.101 26.6236 106.88 28.5957 110.632 28.5957ZM112.195 24.8308C110.517 24.8308 109.313 24.0497 109.313 22.5514C109.313 21.0147 110.581 20.2592 112.502 19.9903C113.693 19.8238 115.639 19.5421 116.292 19.1067V21.194C116.292 23.2557 114.589 24.8308 112.195 24.8308Z" fill="currentColor"></path><path d="M124.679 28.2243H130.135V16.4175C130.135 14.2405 131.518 12.7935 133.336 12.7935C135.129 12.7935 136.333 14.0228 136.333 15.9565V28.2243H141.621V16.2126C141.621 14.1765 142.787 12.7935 144.771 12.7935C146.513 12.7935 147.819 13.8819 147.819 16.0717V28.2243H153.262V14.996C153.262 10.7317 150.726 8.29867 147.064 8.29867C144.182 8.29867 141.941 9.77132 141.135 12.0251H140.93C140.302 9.74571 138.292 8.29867 135.59 8.29867C132.939 8.29867 130.929 9.70729 130.109 12.0251H129.878V8.55478H124.679V28.2243Z" fill="currentColor"></path><path d="M174.815 0.768919H170.116L161.664 32.1685H166.364L174.815 0.768919Z" fill="currentColor"></path>',9),Ot=[Rt];function Ht(t,e){return(0,D.wg)(),(0,D.iD)("svg",Tt,Ot)}const Vt={},Et=(0,k.Z)(Vt,[["render",Ht]]);var Wt=Et;const $t={preserveAspectRatio:"none",viewBox:"0 0 26 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ft=(0,D._)("path",{d:"M13 0.942731V8.625L13.0007 9.25621L22.3025 9.255L20.1495 7.10032C19.8167 6.76743 19.7865 6.2466 20.0589 5.87963L20.1497 5.7745C20.4826 5.44172 21.0034 5.41155 21.3704 5.68393L21.4755 5.77472L25.2213 9.52178C25.5538 9.85436 25.5842 10.3746 25.3125 10.7416L25.2219 10.8467L21.4762 14.601C21.1105 14.9676 20.5169 14.9683 20.1503 14.6026C19.8171 14.2701 19.7863 13.7493 20.0582 13.382L20.1488 13.2767L22.29 11.13L13.0007 11.1312L13 19.5625C13 20.1455 12.4735 20.5871 11.8994 20.4857L1.27444 18.6091C0.826512 18.53 0.5 18.1408 0.5 17.6859V2.68752C0.5 2.22839 0.832518 1.83681 1.28558 1.76241L11.9106 0.0176215C12.4813 -0.0761076 13 0.364318 13 0.942731ZM8.62769 9.87502C7.93585 9.87502 7.375 10.4359 7.375 11.1277C7.375 11.8196 7.93585 12.3804 8.62769 12.3804C9.31953 12.3804 9.88037 11.8196 9.88037 11.1277C9.88037 10.4359 9.31953 9.87502 8.62769 9.87502ZM14.25 18.6266L15.2064 18.6268L15.3338 18.6183C15.7919 18.556 16.1447 18.163 16.1439 17.6878L16.135 12.375H14.25V18.6266ZM14.2525 8.00002L14.25 6.4067V1.75002L15.1816 1.75002C15.6556 1.75002 16.0476 2.10192 16.1103 2.55891L16.1191 2.68597L16.1275 8.00002H14.2525Z",fill:"currentColor"},null,-1),Mt=[Ft];function Pt(t,e){return(0,D.wg)(),(0,D.iD)("svg",$t,Mt)}const Ut={},Nt=(0,k.Z)(Ut,[["render",Pt]]);var Bt=Nt;const jt={width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},At=(0,D._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.00004 0.25C8.14006 0.24991 8.2773 0.289014 8.39624 0.362887C8.51518 0.43676 8.61106 0.542452 8.67304 0.668L10.555 4.483L14.765 5.095C14.9035 5.11511 15.0336 5.17355 15.1405 5.26372C15.2475 5.35388 15.3272 5.47218 15.3704 5.60523C15.4137 5.73829 15.4189 5.8808 15.3854 6.01665C15.352 6.1525 15.2812 6.27628 15.181 6.374L12.135 9.344L12.854 13.536C12.8777 13.6739 12.8624 13.8157 12.8097 13.9454C12.757 14.0751 12.6691 14.1874 12.5559 14.2697C12.4427 14.352 12.3087 14.401 12.1691 14.4111C12.0295 14.4212 11.8899 14.3921 11.766 14.327L8.00004 12.347L4.23404 14.327C4.11023 14.392 3.97071 14.4211 3.83123 14.411C3.69176 14.4009 3.55788 14.352 3.44472 14.2699C3.33157 14.1877 3.24363 14.0755 3.19086 13.946C3.13808 13.8165 3.12255 13.6749 3.14604 13.537L3.86604 9.343L0.818042 6.374C0.717608 6.27632 0.646541 6.15247 0.612894 6.01647C0.579246 5.88047 0.584364 5.73777 0.627666 5.60453C0.670969 5.47129 0.750725 5.35284 0.857898 5.26261C0.96507 5.17238 1.09537 5.11397 1.23404 5.094L5.44404 4.483L7.32704 0.668C7.38902 0.542452 7.48491 0.43676 7.60385 0.362887C7.72279 0.289014 7.86003 0.24991 8.00004 0.25ZM8.00004 2.695L6.61504 5.5C6.56126 5.6089 6.48183 5.70311 6.38359 5.77453C6.28534 5.84595 6.17122 5.89244 6.05104 5.91L2.95404 6.36L5.19404 8.544C5.28119 8.62886 5.3464 8.73365 5.38403 8.84933C5.42166 8.96501 5.43059 9.0881 5.41004 9.208L4.88204 12.292L7.65104 10.836C7.75867 10.7794 7.87845 10.7499 8.00004 10.7499C8.12164 10.7499 8.24141 10.7794 8.34904 10.836L11.119 12.292L10.589 9.208C10.5685 9.0881 10.5774 8.96501 10.615 8.84933C10.6527 8.73365 10.7179 8.62886 10.805 8.544L13.045 6.361L9.94904 5.911C9.82886 5.89344 9.71474 5.84695 9.6165 5.77553C9.51825 5.70411 9.43883 5.6099 9.38504 5.501L8.00004 2.694V2.695Z",fill:"#586069"},null,-1),zt=[At];function qt(t,e){return(0,D.wg)(),(0,D.iD)("svg",jt,zt)}const Yt={},Gt=(0,k.Z)(Yt,[["render",qt]]);var Kt=Gt;const Xt={width:"12",height:"15",viewBox:"0 0 12 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Jt=(0,D._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 2.25001C3 2.44892 2.92099 2.63969 2.78033 2.78034C2.63968 2.92099 2.44892 3.00001 2.25 3.00001C2.05109 3.00001 1.86033 2.92099 1.71967 2.78034C1.57902 2.63969 1.5 2.44892 1.5 2.25001C1.5 2.05109 1.57902 1.86033 1.71967 1.71968C1.86033 1.57902 2.05109 1.50001 2.25 1.50001C2.44892 1.50001 2.63968 1.57902 2.78033 1.71968C2.92099 1.86033 3 2.05109 3 2.25001ZM3 4.37201C3.50042 4.19509 3.92217 3.84696 4.19073 3.38915C4.45929 2.93134 4.55735 2.39333 4.4676 1.87021C4.37785 1.34709 4.10605 0.87253 3.70025 0.53043C3.29445 0.18832 2.78077 0.00069046 2.25 0.00069046C1.71924 0.00069046 1.20556 0.18832 0.799762 0.53043C0.393962 0.87253 0.122161 1.34709 0.0324114 1.87021C-0.0573486 2.39333 0.0407214 2.93134 0.309281 3.38915C0.577841 3.84696 0.999591 4.19509 1.5 4.37201V5.25001C1.5 5.84674 1.73706 6.41904 2.15901 6.841C2.58097 7.26295 3.15327 7.50001 3.75 7.50001H5.25V9.628C4.74932 9.8049 4.3273 10.1532 4.05855 10.6112C3.78981 11.0692 3.69164 11.6075 3.78139 12.1309C3.87115 12.6543 4.14306 13.1291 4.54905 13.4714C4.95504 13.8136 5.46897 14.0014 6 14.0014C6.53104 14.0014 7.04497 13.8136 7.45096 13.4714C7.85695 13.1291 8.1289 12.6543 8.2186 12.1309C8.3084 11.6075 8.2102 11.0692 7.94146 10.6112C7.67271 10.1532 7.25069 9.8049 6.75 9.628V7.50001H8.25C8.8467 7.50001 9.419 7.26295 9.841 6.841C10.263 6.41904 10.5 5.84674 10.5 5.25001V4.37201C11.0004 4.19509 11.4222 3.84696 11.6907 3.38915C11.9593 2.93134 12.0574 2.39333 11.9676 1.87021C11.8778 1.34709 11.6061 0.87253 11.2002 0.53043C10.7944 0.18832 10.2808 0.00069046 9.75 0.00069046C9.2192 0.00069046 8.7056 0.18832 8.2998 0.53043C7.89396 0.87253 7.62216 1.34709 7.53241 1.87021C7.44265 2.39333 7.54072 2.93134 7.80928 3.38915C8.0778 3.84696 8.4996 4.19509 9 4.37201V5.25001C9 5.44892 8.921 5.63969 8.7803 5.78034C8.6397 5.92099 8.4489 6.00001 8.25 6.00001H3.75C3.55109 6.00001 3.36033 5.92099 3.21967 5.78034C3.07902 5.63969 3 5.44892 3 5.25001V4.37201ZM6.75 11.75C6.75 11.9489 6.67099 12.1397 6.53033 12.2803C6.38968 12.421 6.19892 12.5 6 12.5C5.80109 12.5 5.61033 12.421 5.46967 12.2803C5.32902 12.1397 5.25 11.9489 5.25 11.75C5.25 11.5511 5.32902 11.3603 5.46967 11.2197C5.61033 11.079 5.80109 11 6 11C6.19892 11 6.38968 11.079 6.53033 11.2197C6.67099 11.3603 6.75 11.5511 6.75 11.75ZM9.75 3.00001C9.9489 3.00001 10.1397 2.92099 10.2803 2.78034C10.421 2.63969 10.5 2.44892 10.5 2.25001C10.5 2.05109 10.421 1.86033 10.2803 1.71968C10.1397 1.57902 9.9489 1.50001 9.75 1.50001C9.5511 1.50001 9.3603 1.57902 9.2197 1.71968C9.079 1.86033 9 2.05109 9 2.25001C9 2.44892 9.079 2.63969 9.2197 2.78034C9.3603 2.92099 9.5511 3.00001 9.75 3.00001Z",fill:"#586069"},null,-1),Qt=[Jt];function te(t,e){return(0,D.wg)(),(0,D.iD)("svg",Xt,Qt)}const ee={},ne=(0,k.Z)(ee,[["render",te]]);var oe=ne;const se={width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},re=(0,D._)("path",{d:"M0.899054 0.887401L1.01256 0.762563C1.65578 0.119347 2.67513 0.0815103 3.3626 0.649054L3.48744 0.762563L11.75 9.025L20.0126 0.762563C20.696 0.0791457 21.804 0.0791457 22.4874 0.762563C23.1709 1.44598 23.1709 2.55402 22.4874 3.23744L14.225 11.5L22.4874 19.7626C23.1307 20.4058 23.1685 21.4251 22.6009 22.1126L22.4874 22.2374C21.8442 22.8807 20.8249 22.9185 20.1374 22.3509L20.0126 22.2374L11.75 13.975L3.48744 22.2374C2.80402 22.9209 1.69598 22.9209 1.01256 22.2374C0.329146 21.554 0.329146 20.446 1.01256 19.7626L9.275 11.5L1.01256 3.23744C0.369347 2.59422 0.33151 1.57487 0.899054 0.887401L1.01256 0.762563L0.899054 0.887401Z",fill:"currentColor"},null,-1),ae=[re];function ie(t,e){return(0,D.wg)(),(0,D.iD)("svg",se,ae)}const le={},ce=(0,k.Z)(le,[["render",ie]]);var de=ce;const ue={width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pe=(0,D._)("path",{d:"M8.72228 17.4388L8.56806 17.3056L1.23322 9.9708L1.08692 9.79854C0.740634 9.31559 0.745078 8.65876 1.10023 8.18029L1.23341 8.02607L8.56954 0.692742L8.72378 0.55964C9.26215 0.160342 10.026 0.204864 10.5141 0.693113C11.0021 1.18136 11.0464 1.94525 10.6469 2.48346L10.5137 2.63766L5.52663 7.62504L17.7916 7.62504L17.9782 7.63759C18.5883 7.72036 19.0713 8.20333 19.1541 8.81346L19.1666 9.00004L19.1541 9.18662C19.0713 9.79675 18.5883 10.2797 17.9782 10.3625L17.7916 10.375L5.52663 10.375L10.5126 15.3611L10.6589 15.5333C11.0051 16.0162 11.0008 16.673 10.6457 17.1514L10.5126 17.3056L10.3404 17.4519C9.85749 17.7982 9.20076 17.7938 8.72228 17.4388Z",fill:"currentColor"},null,-1),ge=[pe];function me(t,e){return(0,D.wg)(),(0,D.iD)("svg",ue,ge)}const he={},ve=(0,k.Z)(he,[["render",me]]);var Ce=ve;const we={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},fe=(0,D._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 0.727051C5.64625 0.727051 0.5 5.8733 0.5 12.227C0.5 17.3158 3.79187 21.6139 8.36312 23.1377C8.93812 23.2383 9.15375 22.8933 9.15375 22.5914C9.15375 22.3183 9.13938 21.4127 9.13938 20.4495C6.25 20.9814 5.5025 19.7452 5.2725 19.0983C5.14313 18.7677 4.5825 17.747 4.09375 17.4739C3.69125 17.2583 3.11625 16.7264 4.07938 16.712C4.985 16.6977 5.63188 17.5458 5.8475 17.8908C6.8825 19.6302 8.53563 19.1414 9.19688 18.8396C9.2975 18.0921 9.59938 17.5889 9.93 17.3014C7.37125 17.0139 4.6975 16.022 4.6975 11.6233C4.6975 10.3727 5.14312 9.33768 5.87625 8.53267C5.76125 8.24517 5.35875 7.06643 5.99125 5.48518C5.99125 5.48518 6.95438 5.1833 9.15375 6.66393C10.0738 6.40518 11.0513 6.2758 12.0288 6.2758C13.0063 6.2758 13.9838 6.40518 14.9038 6.66393C17.1031 5.16893 18.0662 5.48518 18.0662 5.48518C18.6987 7.06643 18.2962 8.24517 18.1812 8.53267C18.9144 9.33768 19.36 10.3583 19.36 11.6233C19.36 16.0364 16.6719 17.0139 14.1131 17.3014C14.53 17.6608 14.8894 18.3508 14.8894 19.4289C14.8894 20.967 14.875 22.2033 14.875 22.5914C14.875 22.8933 15.0906 23.2527 15.6656 23.1377C20.2081 21.6139 23.5 17.3014 23.5 12.227C23.5 5.8733 18.3538 0.727051 12 0.727051Z",fill:"white"},null,-1),_e=[fe];function Le(t,e){return(0,D.wg)(),(0,D.iD)("svg",we,_e)}const Se={},ye=(0,k.Z)(Se,[["render",Le]]);var be=ye,De={name:"Icon",components:{...o},props:{name:{type:String,required:!0,validator(t){return Object.keys(o).includes(t)}}}};const xe=(0,k.Z)(De,[["render",ht]]);var Ze=xe,ke={components:{icon:Ze},data(){return{isOpened:!1}},methods:{toggle(){this.isOpened=!this.isOpened,this.$emit("onToggle",this.isOpened)}}};const Ie=(0,k.Z)(ke,[["render",mt],["__scopeId","data-v-9d028058"]]);var Te=Ie;const Re=t=>((0,D.dD)("data-v-634ed401"),t=t(),(0,D.Cn)(),t),Oe={class:"placeholder"},He=Re((()=>(0,D._)("div",{class:"content"},[(0,D._)("div",{class:"item"})],-1))),Ve=[He];function Ee(t,e,n,o,s,r){return(0,D.wg)(),(0,D.iD)("div",Oe,Ve)}var We={};const $e=(0,k.Z)(We,[["render",Ee],["__scopeId","data-v-634ed401"]]);var Fe=$e;const Me={class:"c-comment"},Pe={class:"username"};function Ue(t,e,n,o,s,r){return(0,D.wg)(),(0,D.iD)("div",Me,[(0,D._)("p",null,[(0,D._)("span",Pe,(0,B.zw)(n.username),1),(0,D.Uk)(" "+(0,B.zw)(n.text),1)])])}var Ne={name:"Comment",props:{username:{type:String,required:!0},text:{type:String,required:!0}}};const Be=(0,k.Z)(Ne,[["render",Ue],["__scopeId","data-v-b400e00e"]]);var je=Be,Ae={name:"reviews",components:{toggler:Te,commentPlaceholder:Fe,comment:je},emits:["loadContent"],props:{text:{type:String},username:{type:String},loading:{type:Boolean},date:{type:Date},issues:{type:Array,default:()=>[]}},data(){return{shown:!1}},computed:{transformDate(){const t=new Date(this.date);return t.toLocaleString("en-EN",{month:"short",day:"numeric"})}},methods:{toggle(t){this.shown=t,t&&0===this.issues.length&&this.$emit("loadContent")}}};const ze=(0,k.Z)(Ae,[["render",ut],["__scopeId","data-v-3218299c"]]);var qe=ze;const Ye={class:"user__post-container"},Ge={class:"post-title"},Ke={class:"post-desc"};function Xe(t,e,n,o,s,r){const a=(0,D.up)("metrics");return(0,D.wg)(),(0,D.iD)("div",Ye,[(0,D._)("div",Ge,(0,B.zw)(n.title),1),(0,D._)("div",Ke,(0,B.zw)(n.description),1),(0,D.Wm)(a,{stars:n.stars,forks:n.forks},null,8,["stars","forks"])])}const Je=t=>((0,D.dD)("data-v-618f8191"),t=t(),(0,D.Cn)(),t),Qe={class:"metrics__wrap"},tn={class:"metric__item"},en=Je((()=>(0,D._)("div",{class:"metric__item-title"},"Star",-1))),nn={class:"metric__item"},on={class:"metric__item"},sn=Je((()=>(0,D._)("div",{class:"metric__item-title"},"Fork",-1))),rn={class:"metric__item"};function an(t,e,n,o,s,r){const a=(0,D.up)("icon");return(0,D.wg)(),(0,D.iD)("div",Qe,[(0,D._)("button",tn,[(0,D.Wm)(a,{name:"star"}),en]),(0,D._)("button",nn,(0,B.zw)(n.stars),1),(0,D._)("button",on,[(0,D.Wm)(a,{name:"fork"}),sn]),(0,D._)("button",rn,(0,B.zw)(n.forks),1)])}var ln={name:"metrics",components:{icon:Ze},props:{stars:Number,forks:Number}};const cn=(0,k.Z)(ln,[["render",an],["__scopeId","data-v-618f8191"]]);var dn=cn,un={name:"postContent",components:{metrics:dn},props:["title","description","stars","forks"]};const pn=(0,k.Z)(un,[["render",Xe],["__scopeId","data-v-efd6bd0c"]]);var gn=pn,mn={components:{reviews:qe,user:at,postContent:gn},data(){return{items:{}}},methods:{...(0,r.nv)({fetchStarred:"starred/fetchStarred",fetchIssues:"starred/fetchIssuesForRepo"}),getFeedData(t){return{username:t.owner.login,title:t.name,description:t.description,stars:t.stargazers_count,forks:t.forks,avatar:t.owner.avatar_url}},loadIssues({id:t,owner:e,repo:n}){this.fetchIssues({id:t,owner:e,repo:n})}},computed:{...(0,r.rn)({starred:t=>t.starred.data})},async created(){try{const{data:t}=await d();this.items=t.items}catch(t){console.log(t)}},mounted(){this.fetchStarred({limit:10})}};const hn=(0,k.Z)(mn,[["render",J],["__scopeId","data-v-b61ef1c8"]]);var vn=hn;const Cn={class:"navigation"},wn={class:"home-img"},fn={class:"profile-img"},_n=["src","alt"];function Ln(t,e,n,o,s,r){const a=(0,D.up)("icon");return(0,D.wg)(),(0,D.iD)("div",Cn,[(0,D._)("button",wn,[(0,D.Wm)(a,{name:"home"})]),(0,D._)("button",fn,[(0,D._)("img",{src:n.src,class:"img-avatar",alt:`${n.username} avatar`},null,8,_n)]),(0,D._)("button",{class:"exit-img",onClick:e[0]||(e[0]=(...e)=>t.logout&&t.logout(...e))},[(0,D.Wm)(a,{name:"exit"})])])}var Sn={name:"navigation",props:{src:{type:String},username:{type:String}},components:{icon:Ze},methods:{...(0,r.nv)({logout:"auth/logout"})}};const yn=(0,k.Z)(Sn,[["render",Ln],["__scopeId","data-v-75fd8292"]]);var bn=yn;const Dn={class:"logo"};function xn(t,e,n,o,s,r){const a=(0,D.up)("icon");return(0,D.wg)(),(0,D.iD)("div",Dn,[(0,D.Wm)(a,{name:"logo"})])}var Zn={name:"navigation",components:{icon:Ze}};const kn=(0,k.Z)(Zn,[["render",xn],["__scopeId","data-v-27c15ee2"]]);var In=kn,Tn={name:"feeds",components:{topline:N,storyUserItem:K,repoList:vn,navigation:bn,logo:In},computed:{...(0,r.rn)({trendings:t=>t.trendings.data,user:t=>t.user.data})},data(){return{items:{}}},methods:{...(0,r.nv)({fetchTrendings:"trendings/fetchTrendings",getUser:"user/getUserData"}),getFeedData(t){return{avatar:t.owner.avatar_url,username:t.owner.login}},handlePress(t){console.log(t)}},async created(){try{const{data:t}=await d();this.items=t.items}catch(t){console.log(t)}d()},mounted(){this.fetchTrendings(),this.getUser()}};const Rn=(0,k.Z)(Tn,[["render",V],["__scopeId","data-v-61e9a868"]]);var On=Rn;const Hn={class:"wrapper"},Vn={class:"header"},En={class:"x-container"},Wn={class:"content"};function $n(t,e,n,o,s,r){const a=(0,D.up)("logo"),i=(0,D.up)("icon"),l=(0,D.up)("storiesSlider");return(0,D.wg)(),(0,D.iD)("div",Hn,[(0,D._)("header",Vn,[(0,D._)("div",En,[(0,D._)("button",{class:"logo",onClick:e[0]||(e[0]=e=>t.$router.push("/"))},[(0,D.Wm)(a)]),(0,D._)("button",{class:"close-btn",onClick:e[1]||(e[1]=e=>t.$router.push("/"))},[(0,D.Wm)(i,{name:"close"})])])]),(0,D._)("div",Wn,[(0,D.Wm)(l,{initialSlide:Number(t.$route.params.initialSlide)},null,8,["initialSlide"])])])}const Fn={class:"c-stories-slider"},Mn={class:"x-container"},Pn={class:"stories-container"},Un={class:"stories",ref:"slider"};function Nn(t,e,n,o,s,r){const a=(0,D.up)("story-post-item");return(0,D.wg)(),(0,D.iD)("div",Fn,[(0,D._)("div",Mn,[(0,D._)("div",Pn,[(0,D._)("ul",Un,[((0,D.wg)(!0),(0,D.iD)(D.HY,null,(0,D.Ko)(t.trendings,((e,n)=>((0,D.wg)(),(0,D.iD)("li",{class:"stories-item",ref_for:!0,ref:"item",key:e.id},[(0,D.Wm)(a,{data:r.getStoryData(e),active:s.slideNdx===n,loading:s.slideNdx===n&&s.loading,btnsShown:r.activeBtns,onNext:t=>r.handleSlide(n+1),onPrev:t=>r.handleSlide(n-1),onOnProgressFinish:t=>r.handleSlide(n+1),onFollowTheRepo:n=>t.starRepo(e.id),onUnFollowTheRepo:n=>t.unStarRepo(e.id)},null,8,["data","active","loading","btnsShown","onNext","onPrev","onOnProgressFinish","onFollowTheRepo","onUnFollowTheRepo"])])))),128))],512)])])])}const Bn={class:"stories-container"},jn={class:"header"},An={class:"progress"},zn={class:"user"},qn={class:"content"},Yn={key:0,class:"loader"},Gn={key:1,class:"info"},Kn=["innerHTML"],Xn={class:"footer"},Jn={key:0},Qn={key:1},to={class:"icon"},eo={class:"icon"};function no(t,e,n,o,s,r){const a=(0,D.up)("xProgress"),i=(0,D.up)("user"),l=(0,D.up)("spinner"),c=(0,D.up)("placeholder"),d=(0,D.up)("x-button"),u=(0,D.up)("icon");return(0,D.wg)(),(0,D.iD)("div",{class:(0,B.C_)(["c-story-post-item",{active:n.active}])},[(0,D._)("div",Bn,[(0,D._)("div",jn,[(0,D._)("div",An,[(0,D.Wm)(a,{active:n.active,onOnFinish:e[0]||(e[0]=e=>t.$emit("onProgressFinish"))},null,8,["active"])]),(0,D._)("div",zn,[(0,D.Wm)(i,{avatar:n.data.avatar,username:n.data.username},null,8,["avatar","username"])])]),(0,D._)("div",qn,[n.loading?((0,D.wg)(),(0,D.iD)("div",Yn,[(0,D.Wm)(l)])):((0,D.wg)(),(0,D.iD)("div",Gn,[n.data.content?.length?((0,D.wg)(),(0,D.iD)("div",{key:0,class:"content-text",innerHTML:n.data.content},null,8,Kn)):((0,D.wg)(),(0,D.j4)(c,{key:1,paragraphs:3}))]))]),(0,D._)("div",Xn,[(0,D.Wm)(d,{theme:r.buttonTheme,onClick:e[1]||(e[1]=e=>t.$emit(n.data.following?"unFollowTheRepo":"followTheRepo"))},{default:(0,D.w5)((()=>[n.data.loading?((0,D.wg)(),(0,D.iD)("span",Jn,[(0,D.Wm)(l,{class:"loader-btn"})])):((0,D.wg)(),(0,D.iD)("span",Qn,(0,B.zw)(n.data.following?"Unfollow":"Follow"),1))])),_:1},8,["theme"])]),n.active?((0,D.wg)(),(0,D.iD)(D.HY,{key:0},[n.btnsShown.includes("next")?((0,D.wg)(),(0,D.iD)("button",{key:0,class:"btn btn-next",onClick:e[2]||(e[2]=e=>t.$emit("next"))},[(0,D._)("span",to,[(0,D.Wm)(u,{name:"arrow"})])])):(0,D.kq)("",!0),n.btnsShown.includes("prev")?((0,D.wg)(),(0,D.iD)("button",{key:1,class:"btn btn-prev",onClick:e[3]||(e[3]=e=>t.$emit("prev"))},[(0,D._)("span",eo,[(0,D.Wm)(u,{name:"arrow"})])])):(0,D.kq)("",!0)],64)):(0,D.kq)("",!0)])],2)}const oo={ref:"indicator",class:"indicator"};function so(t,e,n,o,s,r){return(0,D.wg)(),(0,D.iD)("div",{class:(0,B.C_)(["c-progress",{active:s.startProgress}])},[(0,D._)("div",oo,null,512)],2)}var ro={name:"Xprogress",data(){return{startProgress:!1}},props:{active:Boolean},emits:["onFinish"],methods:{emitOnFinish(){this.$emit("onFinish")}},mounted(){setTimeout((()=>{this.startProgress=this.active}),0),this.$refs.indicator.addEventListener("transitionend",this.emitOnFinish)},beforeUnmount(){this.$refs.indicator.removeEventListener("transitionend",this.emitOnFinish)},watch:{active(t,e){console.log(t,"|",e),this.startProgress=!this.startProgress}}};const ao=(0,k.Z)(ro,[["render",so],["__scopeId","data-v-42b3dd26"]]);var io=ao;const lo={class:"btn-text"};function co(t,e,n,o,s,r){return(0,D.wg)(),(0,D.iD)("button",{class:(0,B.C_)(["c-button",`theme-${n.theme}`])},[(0,D._)("span",lo,[(0,D.WI)(t.$slots,"default",{},void 0,!0)])],2)}var uo={name:"Button",props:{theme:{type:String}}};const po=(0,k.Z)(uo,[["render",co],["__scopeId","data-v-72509c31"]]);var go=po;const mo=t=>((0,D.dD)("data-v-38a48134"),t=t(),(0,D.Cn)(),t),ho={class:"placeholder"},vo=mo((()=>(0,D._)("div",{class:"mainpic"},null,-1))),Co=mo((()=>(0,D._)("div",{class:"item"},null,-1))),wo=[Co];function fo(t,e,n,o,s,r){return(0,D.wg)(),(0,D.iD)("div",ho,[vo,((0,D.wg)(!0),(0,D.iD)(D.HY,null,(0,D.Ko)(n.paragraphs,(t=>((0,D.wg)(),(0,D.iD)("div",{class:"content",key:t},wo)))),128))])}var _o={props:{paragraphs:{type:Number,default:1}}};const Lo=(0,k.Z)(_o,[["render",fo],["__scopeId","data-v-38a48134"]]);var So=Lo;const yo={class:"spinner"};function bo(t,e,n,o,s,r){return(0,D.wg)(),(0,D.iD)("div",yo)}var Do={};const xo=(0,k.Z)(Do,[["render",bo],["__scopeId","data-v-0c211d40"]]);var Zo=xo,ko={name:"StoryUserItem",props:{active:Boolean,loading:Boolean,following:Boolean,btnsShown:{type:Array,default:()=>["next","prev"],validator(t){return t.every((t=>"next"===t||"prev"===t))}},data:{type:Object,required:!0,default:()=>({})}},components:{xProgress:io,user:at,xButton:go,placeholder:So,spinner:Zo,icon:Ze},computed:{buttonTheme(){return!0===this.data.following?"grey":"green"}}};const Io=(0,k.Z)(ko,[["render",no],["__scopeId","data-v-1f07287c"]]);var To=Io,Ro={components:{storyPostItem:To},props:{initialSlide:{type:Number}},data(){return{slideNdx:0,sliderPosition:0,loading:!1,btnsShown:!0}},computed:{...(0,r.rn)({trendings:t=>t.trendings.data}),activeBtns(){return!1===this.btnsShown?[]:0===this.slideNdx?["next"]:this.slideNdx===this.trendings.length-1?["prev"]:["next","prev"]}},methods:{...(0,r.nv)({fetchTrendings:"trendings/fetchTrendings",fetchReadme:"trendings/fetchReadme",starRepo:"trendings/starRepo",unStarRepo:"trendings/unStarRepo"}),async fetchReadmeForActiveSlide(){const{id:t,owner:e,name:n}=this.trendings[this.slideNdx];await this.fetchReadme({id:t,owner:e.login,repo:n})},getStoryData(t){return{id:t.id,avatar:t.owner?.avatar_url,username:t.owner?.login,content:t.readme,following:t.following,loading:t.loading}},moveSlider(t){const{slider:e,item:n}=this.$refs,o=parseInt(getComputedStyle(n[t]).getPropertyValue("width"),10);this.slideNdx=t,this.sliderPosition=-o*t,e.style.transform=`translateX(${this.sliderPosition}px)`},async loadReadme(){this.loading=!0,this.btnsShown=!1;try{await this.fetchReadmeForActiveSlide()}catch(t){throw console.log(t),t}finally{this.loading=!1,this.btnsShown=!0}},async handleSlide(t){this.moveSlider(t),await this.loadReadme()}},async mounted(){if(console.log(this.initialSlide),this.initialSlide){const t=this.trendings.findIndex((t=>t.id===this.initialSlide));await this.handleSlide(t)}await this.fetchTrendings(),await this.loadReadme()}};const Oo=(0,k.Z)(Ro,[["render",Nn],["__scopeId","data-v-60df140e"]]);var Ho=Oo,Vo={components:{storiesSlider:Ho,logo:In,icon:Ze}};const Eo=(0,k.Z)(Vo,[["render",$n],["__scopeId","data-v-58619b6e"]]);var Wo=Eo,$o=n.p+"img/auth-img.a10ff7a9.png";const Fo=t=>((0,D.dD)("data-v-39232712"),t=t(),(0,D.Cn)(),t),Mo={class:"auth"},Po={class:"auth-content"},Uo={class:"logo"},No=Fo((()=>(0,D._)("div",{class:"text"},[(0,D.Uk)(" More than just one repository. "),(0,D._)("br"),(0,D.Uk)(" This is our digital world. ")],-1))),Bo={class:"auth-button"},jo={class:"button-content"},Ao=Fo((()=>(0,D._)("span",{class:"button-text"},"Authorize with github",-1))),zo=Fo((()=>(0,D._)("div",{class:"auth-img"},[(0,D._)("img",{src:$o,alt:""})],-1)));function qo(t,e,n,o,s,r){const a=(0,D.up)("logo"),i=(0,D.up)("icon"),l=(0,D.up)("x-button");return(0,D.wg)(),(0,D.iD)("div",Mo,[(0,D._)("div",Po,[(0,D._)("div",Uo,[(0,D.Wm)(a)]),No,(0,D._)("div",Bo,[(0,D.Wm)(l,{onClick:t.redirectToAuth},{default:(0,D.w5)((()=>[(0,D._)("span",jo,[Ao,(0,D.Wm)(i,{name:"github"})])])),_:1},8,["onClick"])]),zo])])}var Yo={name:"auth",components:{logo:In,xButton:go,icon:Ze},methods:{...(0,r.nv)({redirectToAuth:"auth/getAuthCode",authUserForCode:"auth/authUserForCode"})},async mounted(){const t=new URLSearchParams(window.location.search).get("code");if(t){const e=await this.authUserForCode(t);localStorage.setItem("token",e),this.$router.replace({name:"feeds"})}}};const Go=(0,k.Z)(Yo,[["render",qo],["__scopeId","data-v-39232712"]]);var Ko=Go,Xo=[{path:"/",name:"feeds",component:On},{path:"/stories/:initialSlide",name:"stories",component:Wo},{path:"/auth",name:"auth",component:Ko}],Jo=(0,R.p7)({history:(0,R.r5)(),routes:Xo});Jo.beforeEach((async(t,e,n)=>{const o="auth"===t.name;try{await h(),n(o?{name:"feeds"}:null),console.log(1)}catch(s){n(o?null:{name:"auth"}),console.log(2)}}));const Qo=(0,s.ri)(T);Qo.use(Jo),Qo.use(b),Qo.mount("#app")}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,r){if(!o){var a=1/0;for(d=0;d<t.length;d++){o=t[d][0],s=t[d][1],r=t[d][2];for(var i=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(i=!1,r<a&&(a=r));if(i){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[o,s,r]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/gitogram/dist/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,r,a=o[0],i=o[1],l=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(l)var d=l(n)}for(e&&e(o);c<a.length;c++)r=a[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(d)},o=self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3071)}));o=n.O(o)})();
//# sourceMappingURL=app.42ee3ec0.js.map