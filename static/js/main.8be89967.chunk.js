/*! For license information please see main.8be89967.chunk.js.LICENSE.txt */
(this["webpackJsonpui-dev-test"]=this["webpackJsonpui-dev-test"]||[]).push([[0],{67:function(t,e,n){},84:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(9),i=n.n(r),c=(n(67),n(14)),s=n.n(c),u=n(13),l=n(124),d=n(126),h=n(132),j=n(134),p=n(121),b="https://jsonplaceholder.typicode.com",O=Object(p.a)((function(t){return{root:{flexGrow:1},paper:{padding:t.spacing(2),textAlign:"center",color:t.palette.text.secondary},gridContainer:{margin:5,width:"auto!important"},formControl:{width:"100%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},showMoreBtn:{width:"100%",textAlign:"center",fontWeight:"bold"},loadingContainer:{margin:"10px"},loading:{backgroundColor:"#1C6EA4",height:"1px",position:"relative"}}})),f=a.a.createContext(null);var v="RECIEVE_POSTS",g="UPDATE_POSTS";var m="RECIEVE_AUTHOR",x="UPDATE_AUTHOR";function y(t){return{type:x,payload:t}}var E="RECIEVE_COUNT",C="UPDATE_COUNT";function w(t){return{type:C,payload:t}}var I="RECIEVE_ADDITIONAL_VIEWS",S="RESET_ADDITIONAL_VIEWS",T="INCREMENT_ADDITIONAL_VIEWS";function A(t){return{type:S,payload:t}}var N=n(4);function V(){var t=Object(u.useDispatch)(),e=Object(u.useSelector)((function(t){return{users:t.users,count:t.count,author:t.author}})),n=e.users,o=e.count,r=e.author,i=O(),c=a.a.useContext(f),s=function(e){var o,a=e.target.name,r=e.target.value;if(r.trim())if("author"===a){var i,c="",s="";(i=Object.keys(n).filter((function(t,e){return n[e].id==r}))).length&&(s=n[i[0]].id,(o=s,new Promise((function(t,e){setTimeout((function(){fetch("".concat(b,"/posts?userId=").concat(o)).then((function(e){return t(e.json())}))}),20)}))).then((function(t){return(c=t).map((function(t,e){return function(t){return new Promise((function(e,n){setTimeout((function(){fetch("".concat(b,"/comments?postId=").concat(t)).then((function(t){return e(t.json())}))}),20)}))}(c[e].id).then((function(t){c[e].totalComments=t.length}))}))})).then((function(){setTimeout((function(){t(function(t){return{type:g,payload:t}}(c)),t(A(0)),t(y(parseInt(r)))}),200)})))}else"count"===a&&(t(A(0)),t(w(parseInt(r))));else t("author"===a?y(""):w(""))};return Object(N.jsxs)(a.a.Fragment,{children:["author"===c&&Object(N.jsx)(l.a,{item:!0,xs:6,children:Object(N.jsxs)(d.a,{variant:"outlined",className:i.formControl,children:[Object(N.jsx)(j.a,{htmlFor:"outlined-age-native-simple",children:"Author"}),Object(N.jsxs)(h.a,{native:!0,value:r,onChange:s,label:"Author",inputProps:{name:"author",id:"outlined-author-native-simple"},children:[Object(N.jsx)("option",{"aria-label":"None",value:""}),n&&Object.keys(n).map((function(t,e){return Object(N.jsx)("option",{value:n[e].id,children:n[e].name},n[e].id)}))]})]})}),"count"===c&&Object(N.jsx)(l.a,{item:!0,xs:6,children:Object(N.jsxs)(d.a,{variant:"outlined",className:i.formControl,children:[Object(N.jsx)(j.a,{htmlFor:"outlined-age-native-simple",children:"Count"}),Object(N.jsxs)(h.a,{native:!0,value:o,onChange:s,label:"Count",inputProps:{name:"count",id:"outlined-count-native-simple"},children:[Object(N.jsx)("option",{"aria-label":"None",value:""}),Object(N.jsx)("option",{value:2,children:"2"}),Object(N.jsx)("option",{value:5,children:"5"}),Object(N.jsx)("option",{value:10,children:"10"})]})]})})]})}var R=n(57),_=n(127),D=n(130),P=n(128),k=n(129),L=n(131),U=n(55),B=n.n(U);function M(){var t=Object(u.useSelector)((function(t){return{posts:t.posts,count:t.count,author:t.author,additionalViews:t.additionalViews}})),e=t.posts,n=t.count,o=t.author,r=t.additionalViews,i=O();return Object(N.jsx)(a.a.Fragment,{children:n>0&&o&&Object.keys(e).length>0&&Object(R.a)(Array(n+r>Object.keys(e).length?Object.keys(e).length:n+r)).map((function(t,n){return Object(N.jsx)(l.a,{item:!0,xs:12,children:Object(N.jsxs)(_.a,{className:i.root,variant:"outlined",children:[Object(N.jsxs)(P.a,{children:[Object(N.jsx)(k.a,{variant:"h5",component:"h2",children:e[n].title}),Object(N.jsx)(k.a,{variant:"body1",component:"p",children:e[n].body})]}),Object(N.jsx)(D.a,{children:e[n].totalComments&&Object(N.jsx)(L.a,{badgeContent:e[n].totalComments,color:"primary",children:Object(N.jsx)(B.a,{})})})]})},e[n].id)}))})}var F=n(133);function W(){var t=O(),e=Object(u.useDispatch)(),n=Object(u.useSelector)((function(t){return{posts:t.posts,count:t.count,author:t.author,additionalViews:t.additionalViews}})),o=n.posts,a=n.count,r=n.author,i=n.additionalViews;return Object(N.jsx)(l.a,{item:!0,xs:12,children:a&&r&&a+i<Object.keys(o).length?Object(N.jsx)(F.a,{variant:"outlined",color:"primary",onClick:function(t){t.preventDefault(),e(function(t){return{type:T,payload:t}}(i+2))},className:t.showMoreBtn,children:"SHOW MORE"}):Object(N.jsx)(F.a,{variant:"outlined",color:"primary",className:t.showMoreBtn,disabled:!0,children:"SHOW MORE"})})}var H="RECEIVE_USERS",J="RECEIVE_USERS_FAIL";function z(){return function(t){return t(Object(c.showLoading)()),t(function(){return{type:E,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}()),t(function(){return{type:m,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}()),t(function(){return{type:v,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}()),t(function(){return{type:I,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}}()),new Promise((function(t,e){setTimeout((function(){fetch("".concat(b,"/users")).then((function(e){return t(e.json())}))}),20)})).then((function(e){t(function(t){return{type:H,payload:t}}(e)),t(Object(c.hideLoading)())})).catch((function(e){return t({type:J,payload:e})}))}}var G=function(){var t=Object(u.useDispatch)(),e=Object(u.useSelector)((function(t){return{err:t.err,isLoading:t.isLoading}})),n=e.err,r=void 0===n?[]:n,i=e.isLoading,c=O();return Object(o.useEffect)((function(){t(z())}),[t]),Object(N.jsx)(a.a.Fragment,{children:i||r.length?Object(N.jsx)("div",{children:Object(N.jsx)(l.a,{container:!0,spacing:3,className:c.gridContainer})}):Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:c.loadingContainer,children:Object(N.jsx)(s.a,{className:c.loading})}),Object(N.jsxs)(l.a,{container:!0,spacing:3,className:c.gridContainer,children:[Object(N.jsx)(f.Provider,{value:"author",children:Object(N.jsx)(V,{})}),Object(N.jsx)(f.Provider,{value:"count",children:Object(N.jsx)(V,{})}),Object(N.jsx)(M,{}),Object(N.jsx)(W,{})]})]})})},q=n(20),K=n(19);var Q=Object(q.c)({users:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case H:case J:return Object(K.a)(Object(K.a)({},t),e.payload);default:return t}},count:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=e.type,o=e.payload;switch(n){case E:case C:return o;default:return t}},author:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=e.type,o=e.payload;switch(n){case m:case x:return o;default:return t}},posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=e.type,o=e.payload;switch(n){case v:case g:return Object(K.a)(Object(K.a)({},t),o);default:return t}},additionalViews:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=e.type,o=e.payload;switch(n){case I:case S:case T:return o;default:return t}},loadingBar:c.loadingBarReducer}),X=n(56),Y=function(t){return function(e){return function(n){console.group(n.type),console.log("The action: ",n);var o=e(n);return console.log("The new state: ",t.getState()),console.groupEnd(),o}}},Z=Object(q.a)(X.a,Y),$=Object(q.d)(Q,Z);i.a.render(Object(N.jsx)(u.Provider,{store:$,children:Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(G,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.8be89967.chunk.js.map