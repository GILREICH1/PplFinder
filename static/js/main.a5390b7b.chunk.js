(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var i,a,r,c,s,o,l,u,j,d,b,f,x,O,h=n(0),p=n.n(h),v=n(26),m=n.n(v),g=n(43),y=n(14),k=n(47),z=n(8),S=n(113),C=n(11),w=n(12),F=w.a.div(i||(i=Object(C.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),E=n(2),J=function(e){var t=e.size,n=void 0===t?"14px":t,i=e.children,a=e.bold;return Object(E.jsx)(S.a,{component:"span",children:Object(E.jsx)(F,{size:n,bold:a,children:i})})},N=n(147),I=n(140),L=w.a.div(a||(a=Object(C.a)([""]))),M=function(e){var t=e.onChange,n=e.label,i=e.value,a=p.a.useState(!1),r=Object(y.a)(a,2),c=r[0],s=r[1];return Object(E.jsx)(L,{children:Object(E.jsx)(I.a,{control:Object(E.jsx)(N.a,{checked:c,onChange:function(e){t&&t({checked:c,value:i}),s(e.target.checked)},color:"primary"}),label:n})})},T=w.a.div(r||(r=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),P=w.a.div(c||(c=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),U=w.a.div(s||(s=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),V=w.a.div(o||(o=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),_=w.a.img(l||(l=Object(C.a)(["\n  border-radius: 45%;\n"]))),q=w.a.div(u||(u=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),A=w.a.div(j||(j=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),B=n(141),G=n(71),H=n.n(G),Y=function(e){var t=e.isFavorite,n=e.user,i=p.a.useContext(Oe),a=i.addToFavorites,r=i.removeFromFavorites,c=Object(h.useState)(!1),s=Object(y.a)(c,2),o=s[0],l=s[1];return Object(E.jsxs)(U,{onMouseEnter:function(){l(!0)},onMouseLeave:function(){l(!1)},children:[Object(E.jsx)(_,{src:n.picture.large,alt:""}),Object(E.jsxs)(V,{children:[Object(E.jsxs)(J,{size:"22px",bold:!0,children:[n.name.title," ",n.name.first," ",n.name.last]}),Object(E.jsx)(J,{size:"14px",children:n.email}),Object(E.jsxs)(J,{size:"14px",children:[n.location.street.number," ",n.location.street.name]}),Object(E.jsxs)(J,{size:"14px",children:[n.location.city," ",n.location.country]})]}),Object(E.jsx)(q,{isVisible:t||o,children:Object(E.jsx)(B.a,{onClick:t?function(){return r(n)}:function(){return a(n)},children:Object(E.jsx)(H.a,{color:"error"})})})]})},D=p.a.memo(Y),K=["Brazil","Germany","Australia","Canada","Iran"],Q=function(e){var t=e.users,n=p.a.useContext(Oe).favorites,i=p.a.useState([]),a=Object(y.a)(i,2),r=a[0],c=a[1],s=p.a.useState([]),o=Object(y.a)(s,2),l=o[0],u=o[1],j=p.a.useCallback((function(e){var t=e.checked,n=e.value;c(t?function(e){return e.filter((function(e){return e!==n}))}:function(e){return[].concat(Object(g.a)(e),[n])})}),[c,r]);return p.a.useEffect((function(){u(t)}),[]),p.a.useEffect((function(){0===r.length?u(t):u((function(){return t.filter((function(e){return r.includes(e.location.country)}))}))}),[r]),Object(E.jsxs)(T,{children:[Object(E.jsx)(A,{children:K.map((function(e){return Object(E.jsx)(M,{onChange:j,value:e,label:e},e)}))}),Object(E.jsx)(P,{children:l.length>0?l.map((function(e){return Object(E.jsx)(D,{isFavorite:n.filter((function(t){return t.login.uuid===e.login.uuid})).length>0,user:e},"".concat(e.name.first,"_").concat(e.name.last))})):Object(E.jsx)(J,{children:"No users to display"})})]})},R=n(48),W=n.n(R),X=n(72),Z=n(73),$=n.n(Z),ee=n(142),te=function(e){var t=e.size,n=e.color,i=e.thickness,a=e.variant;return Object(E.jsx)(ee.a,{size:t,color:n,thickness:i,variant:a})},ne=w.a.div(d||(d=Object(C.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),ie=w.a.div(b||(b=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),ae=w.a.div(f||(f=Object(C.a)(["\n  display: flex;\n"]))),re=(w.a.div(x||(x=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),w.a.div(O||(O=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n"])))),ce=function(){var e=function(){var e=Object(h.useState)([]),t=Object(y.a)(e,2),n=t[0],i=t[1],a=Object(h.useState)(!1),r=Object(y.a)(a,2),c=r[0],s=r[1];function o(){return l.apply(this,arguments)}function l(){return(l=Object(X.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,$.a.get("https://randomuser.me/api/?results=25&page=1");case 3:t=e.sent,i(t.data.results),s(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.useEffect)((function(){o()}),[]),{users:n,isLoading:c,fetchUsers:o}}(),t=e.users,n=e.isLoading;return Object(E.jsx)(ne,{children:Object(E.jsxs)(ie,{children:[Object(E.jsx)(ae,{children:Object(E.jsx)(J,{size:"64px",bold:!0,children:"PplFinder"})}),n?Object(E.jsx)(re,{children:Object(E.jsx)(te,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})}):Object(E.jsx)(Q,{users:t})]})})},se=function(){var e=p.a.useContext(Oe).favorites;return Object(E.jsx)(ne,{children:Object(E.jsxs)(ie,{children:[Object(E.jsx)(ae,{children:Object(E.jsx)(J,{size:"64px",bold:!0,children:"Favorites"})}),0===e.length?Object(E.jsx)("h2",{children:"You have no favorites saved!"}):Object(E.jsx)(Q,{users:e},"favoritesUserList_".concat(e.length))]})})},oe=n(74),le=n(143),ue=n(144),je=function(e){var t=e.children,n={MuiTab:{root:{backgroundColor:"#303030"}}},i=p.a.useMemo((function(){return Object(oe.a)({overrides:n,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(E.jsxs)(le.a,{theme:i,children:[Object(E.jsx)(ue.a,{}),t]})},de=n(148),be=n(146),fe=n(145),xe=function(){var e=Object(h.useState)(0),t=Object(y.a)(e,2),n=t[0],i=t[1],a=Object(z.f)();return Object(E.jsx)(de.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:Object(E.jsxs)(be.a,{value:n,onChange:function(e,t){0===t&&a.push("/"),1===t&&a.push("/favorites"),i(t)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(E.jsx)(fe.a,{label:"Home",index:0}),Object(E.jsx)(fe.a,{label:"Favorites",index:1})]})})},Oe=p.a.createContext({}),he=function(){var e=p.a.useState([]),t=Object(y.a)(e,2),n=t[0],i=t[1];return p.a.useEffect((function(){var e=localStorage.getItem("favorites"),t=e?JSON.parse(e):[];i(t)}),[]),Object(E.jsx)(je,{children:Object(E.jsx)(k.a,{children:Object(E.jsxs)(Oe.Provider,{value:{favorites:n,setFavorites:i,addToFavorites:function(e){var t=[].concat(Object(g.a)(n),[e]);i(t),localStorage.setItem("favorites",JSON.stringify(t))},removeFromFavorites:function(e){var t=n.filter((function(t){return t.login.uuid!==e.login.uuid}));i(t),localStorage.setItem("favorites",JSON.stringify(t))}},children:[Object(E.jsx)(xe,{}),Object(E.jsxs)(z.c,{children:[Object(E.jsx)(z.a,{exact:!0,path:"/favorites",component:se}),Object(E.jsx)(z.a,{path:"/",component:ce})]})]})})})};m.a.render(Object(E.jsx)(he,{}),document.querySelector("#root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.a5390b7b.chunk.js.map