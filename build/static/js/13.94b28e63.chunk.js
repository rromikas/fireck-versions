(this["webpackJsonpfireck-cms"]=this["webpackJsonpfireck-cms"]||[]).push([[13],{1039:function(e,t,n){"use strict";n.r(t);n(0);var c=n(35),r=n(56),a=n(832),o=n.n(a),l=n(34),i=n(828),s=n(2);t.default=function(){var e=Object(c.e)((function(e){return e.collectionTypes.find((function(e){return"UsersReservedCollection"===e.id}))})),t=Object(l.k)();return Object(s.jsxs)("div",{className:"h-full flex flex-col w-full",children:[Object(s.jsxs)("div",{className:"flex flex-wrap justify-between mb-5",children:[Object(s.jsx)("div",{className:"mr-3 mb-3 text-27px font-medium capitalize leading-none",children:"Users"}),Object(s.jsx)(r.a,{onClick:function(){return t.push("/collections/".concat(null===e||void 0===e?void 0:e.id,"/add"))},className:"primaryBackground buttonPrimaryTextColor mb-3 h-34px min-w-unset",children:Object(s.jsxs)("div",{className:"flex items-center pr-1",children:[Object(s.jsx)(o.a,{fontSize:"inherit",className:"text-lg sm:mr-3"}),Object(s.jsx)("span",{children:"Create"})]})})]}),e?Object(s.jsx)("div",{className:"flex-grow h-0",children:Object(s.jsx)(i.a,{ground:"Ground",collectionType:e},e.id)}):null]})}},825:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(17),r=n(33),a=n.n(r),o=(n(0),n(35)),l=n(30),i=n(98),s=n(244),d=n(64),u=n(2);function j(e){var t=e.Component,n=e.props;return new Promise((function(e,r){var j,b=null===(j=document.getElementById("root"))||void 0===j?void 0:j.appendChild(document.createElement("div"));b&&a.a.render(Object(u.jsx)(o.a,{store:l.a,children:Object(u.jsx)(i.a,{children:Object(u.jsx)(s.QueryClientProvider,{client:d.queryClient,children:Object(u.jsx)(t,Object(c.a)(Object(c.a)({},n),{},{proceed:function(t){var n;a.a.unmountComponentAtNode(b),null===(n=b.parentNode)||void 0===n||n.removeChild(b),e(t)}}))})})}),b)}))}},826:function(e,t,n){"use strict";var c=n(5),r=n(185),a=n(17),o=n(841),l=n(769),i=n(0),s=n.n(i),d=n(110),u=n.n(d),j=n(2),b=["className","options","error","ground"],f=s.a.forwardRef((function(e,t){return Object(j.jsx)("div",Object(a.a)(Object(a.a)({},e),{},{ref:t,children:Object(j.jsx)(o.a,{className:"text-red-FF0000",size:20})}))}));t.a=function(e){var t=e.className,n=void 0===t?"":t,o=e.options,i=e.error,s=e.ground,d=Object(r.a)(e,b),x="input".concat(s,"TextColor input").concat(s,"HoverBackground input").concat(s,"FocusedTextColor input").concat(s,"FocusedBackground input").concat(s,"FocusedBorderColor input").concat(s,"Background");return Object(j.jsxs)("div",{className:"".concat(n," relative flex items-center"),children:[Object(j.jsx)("select",Object(a.a)(Object(a.a)({className:u()("px-3 h-full border-2 border-solid w-full rounded outline-none",Object(c.a)({"border-red-FF0000":i},x,!i))},d),{},{spellCheck:!1,children:o.map((function(e,t){return Object(j.jsx)("option",{"data-testid":"select-option-".concat(e.value),value:e.value,children:e.label},"opt-"+t)}))})),i?Object(j.jsx)(l.a,{title:i,placement:"top",children:Object(j.jsx)(f,{className:"absolute right-2 my-auto w-auto"})}):null]})}},827:function(e,t,n){"use strict";var c=n(17),r=n(0),a=n.n(r),o=n(319),l=n.n(o),i=n(769),s=n(110),d=n.n(s),u=n(2),j=a.a.forwardRef((function(e,t){return Object(u.jsx)("div",Object(c.a)(Object(c.a)({},e),{},{ref:t,children:Object(u.jsx)(l.a,{className:"text-red-500 text-xl",fontSize:"inherit"})}))}));t.a=function(e){var t=e.className,n=void 0===t?"":t,c=e.children,r=e.error,a=e.ground;return Object(u.jsxs)("div",{className:d()("flex justify-between relative ".concat(n),"".concat(a.toLowerCase(),"TextColor")),children:[Object(u.jsx)("div",{children:c}),r?Object(u.jsx)(i.a,{title:r,placement:"top",children:Object(u.jsx)(j,{className:"absolute right-2 my-auto w-auto"})}):null]})}},828:function(e,t,n){"use strict";var c=n(19),r=n(1),a=n.n(r),o=n(4),l=n(13),i=n(830),s=n(0),d=n.n(s),u=n(837),j=n.n(u),b=n(34),f=n(186),x=n(829),m=n(56),h=n(187),p=n(110),v=n.n(p),O=n(17),g=n(98),N=(n(825),n(2)),w=n(245),y=n(244),k=function(e){var t=e.collectionId,n=e.filters,r=void 0===n?[]:n,a=e.orderBy,o=e.inView,l=(Object(g.b)(),Object(s.useCallback)((function(){var e={collectionId:t,where:"",orderBy:""};return r.forEach((function(t,n){e.where+=(n>0?";":"")+t.fieldId+","+t.operator+","+t.value,a&&a.fieldId!==t.fieldId&&(e.orderBy+=(e.orderBy?";":"")+t.fieldId)})),a&&(e.orderBy+=(e.orderBy?";":"")+"".concat(a.fieldId,",").concat(a.direction)),a||r.length||(e.orderBy="createdAt,asc"),e.populateRef=!1,e}),[a,r,t])),i=Object(y.useInfiniteQuery)([t,a,r],(function(e){var t=e.pageParam;return w.a.getCollection(Object(O.a)(Object(O.a)({},l()),{},{startAfter:t}))}),{keepPreviousData:!0,getNextPageParam:function(e,t){var n=(null===e||void 0===e?void 0:e.length)&&10===e.length?e[9]:null;return n?n[a?a.fieldId:"createdAt"]:void 0}}),d=i.data,u=(i.error,i.fetchNextPage),j=i.hasNextPage;return Object(s.useEffect)((function(){o&&j&&u()}),[o,u,j]),{docs:(null===d||void 0===d?void 0:d.pages.reduce((function(e,t){return[].concat(Object(c.a)(e),Object(c.a)(t))}),[]))||[]}},C=n(318),I=n(1031),B=n(836),D=n.n(B),T=n(87);t.a=function(e){var t=e.collectionType,n=e.onPick,r=e.blackList,u=void 0===r?[]:r,p=e.singleSelect,O=void 0!==p&&p,g=e.valueFormatters,y=e.ground,B=e.filters,S=void 0===B?[]:B,P=e.onEdit,F=e.hideFilters,R=void 0!==F&&F,z=Object(b.k)(),E=d.a.useState([]),H=Object(l.a)(E,2),M=H[0],V=H[1],A=t.fields.filter((function(e){return e.displayOnTable})),Y=d.a.useState([]),q=Object(l.a)(Y,2),J=q[0],L=q[1],Q=d.a.useState(),U=Object(l.a)(Q,2),G=U[0],K=U[1],W=d.a.useState(!1),X=Object(l.a)(W,2),Z=X[0],$=X[1],_=k({collectionId:t.id,filters:M,orderBy:G,inView:Z}).docs,ee=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)({confirmation:"Delete ".concat(J.length," documents?")});case 2:if(!e.sent){e.next=5;break}w.a.deleteMultipleDocuments(t.id,_.filter((function(e){return J.includes(e.docId)}))),L([]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=P||function(e){z.push("/collections/".concat(t.id,"/edit/").concat(e.docId))},ne=function(e){return(null===G||void 0===G?void 0:G.fieldId)!==e.id?function(){K({fieldId:e.id,direction:"asc"})}:"asc"!==(null===G||void 0===G?void 0:G.direction)?function(){return K(void 0)}:function(){return K({fieldId:e.id,direction:"desc"})}},ce=function(e,t){L(t?O?[e]:function(t){return[].concat(Object(c.a)(t),[e])}:function(t){var n=Object(c.a)(t),r=n.findIndex((function(t){return t===e}));return null!=r&&n.splice(r,1),n})},re=function(e,t){return"date"===e.type?D()(t).format("YYYY-MM-DD HH:mm"):g&&e.id in g?g[e.id](t):t.toString().substring(0,40)};return Object(s.useEffect)((function(){S.length&&V((function(e){return[].concat(Object(c.a)(e),Object(c.a)(S))}))}),[S]),Object(N.jsxs)("div",{className:"h-full w-full flex-col flex",children:[Object(N.jsxs)("div",{className:"flex justify-between mb-3",children:[R?null:Object(N.jsxs)("div",{className:"flex flex-wrap",children:[Object(N.jsx)(x.a,{ground:y,collectionType:t,onValue:function(e){return V((function(t){return[e].concat(Object(c.a)(t))}))}}),M.map((function(e,t){return e.hidden?null:Object(N.jsxs)("div",{className:v()("rounded min-h-28px border leading-28px pl-3 text-sm pr-3 flex mr-3 mb-3 relative","".concat(Object(T.d)(y),"TextColor ").concat(Object(T.d)(y),"BorderColor")),children:[e.fieldId," ",e.operator," ",e.value," ",Object(N.jsx)("span",{onClick:function(){return V((function(e){var n=Object(c.a)(e);return n.splice(t,1),n}))},className:"text-xs leading-28px ml-3 cursor-pointer",children:"\u2715"})]},"f-".concat(t))}))]}),n?Object(N.jsx)(m.a,{onClick:function(){return n(_.filter((function(e){return J.includes(e.docId)})))},className:"h-28px min-w-unset rounded mb-3 px-7 ".concat(0===J.length?"buttonDisabledBackground buttonDisabledTextColor cursor-default":"primaryBackground buttonPrimaryTextColor"," "),children:"Select"}):Object(N.jsx)(m.a,{onClick:ee,disabled:0===J.length,className:"px-7 mb-3 min-w-unset rounded h-28px ".concat(0===J.length?"buttonDisabledBackground buttonDisabledTextColor cursor-default":"dangerBackground buttonDangerTextColor"," "),children:"Delete"})]}),Object(N.jsx)("div",{className:v()("flex-grow h-0 -mt-3 rounded overflow-hidden bg-white"),children:Object(N.jsxs)(h.a,{className:"relative scrollbar-light h-full",children:[Object(N.jsxs)("table",{className:"w-full text-center",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{className:"whitespace-nowrap",children:[Object(N.jsx)("th",{className:"sticky top-0 table".concat(y,"HeaderBackground z-10 px-1"),children:O?null:Object(N.jsx)(I.a,{size:"small",classes:{checked:"primaryTextColor",root:"p-0"},checked:J.length===_.length,onChange:function(e){return t=e.target.checked,L(t?_.map((function(e){return e.docId})):[]);var t}})}),A.map((function(e,t){return Object(N.jsx)("th",{className:"font-medium sticky top-0 table".concat(y,"HeaderBackground"),children:Object(N.jsxs)("div",{className:"flex items-center justify-center",children:[Object(N.jsx)("div",{className:"w-5"}),Object(N.jsx)("div",{className:"cursor-pointer select-none",onClick:ne(e),children:e.id}),Object(N.jsx)("div",{className:"w-5",children:(null===G||void 0===G?void 0:G.fieldId)===e.id?Object(N.jsx)(j.a,{fontSize:"small",className:"".concat("asc"===(null===G||void 0===G?void 0:G.direction)?"transform rotate-180":"")}):null})]})},"th-".concat(t))}))]})}),Object(N.jsxs)("tbody",{children:[_.map((function(e,t){return u.includes(e.docId)?null:Object(N.jsxs)("tr",{onClick:function(){return n?ce(e.docId,!J.includes(e.docId)):te(e)},className:"cursor-pointer table".concat(y,"RowHoverTextColor table").concat(y,"RowHoverBackground"),children:[Object(N.jsx)("td",{className:"px-1",onClick:function(e){return e.stopPropagation()},children:Object(N.jsx)(I.a,{size:"small",classes:{checked:"primaryTextColor",root:"p-0"},checked:J.includes(e.docId),onChange:function(t){return ce(e.docId,t.target.checked)}})}),A.map((function(n,c){return Object(N.jsx)("td",{className:"px-2",children:null!=e[n.id]?"media"===n.type?n.mediaSingle?Object(N.jsx)(i.a,{file:e[n.id]}):Object(N.jsx)(i.a,{files:e[n.id]}):Object(N.jsx)("div",{className:"whitespace-nowrap",children:re(n,e[n.id])}):null},"row-".concat(t,"-col-").concat(c))}))]},"row-".concat(t))})),Object(N.jsx)("tr",{children:Object(N.jsx)("td",{colSpan:A.length+1,children:Object(N.jsx)(C.a,{onChange:function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(N.jsx)("div",{className:"w-full"})})})})]})]}),Object(N.jsx)("div",{})]})})]})}},829:function(e,t,n){"use strict";var c=n(19),r=n(1),a=n.n(r),o=n(4),l=n(13),i=n(818),s=n(111),d=n(826),u=n(56),j=n(0),b=n.n(j),f=n(188),x=n(827),m=n(316),h=n.n(m),p=n(2);t.a=function(e){var t=e.collectionType,n=e.onValue,r=(e.ground,b.a.useState(!1)),j=Object(l.a)(r,2),m=j[0],v=j[1],O=Object(f.a)({onSubmit:function(){var e=Object(o.a)(a.a.mark((function e(t,c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=c.resetForm,n(t),v(!1),r();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),initialValues:{value:"",operator:"",fieldId:""},validate:function(e){var t={};return Object.keys(e).forEach((function(n){e[n]||(t[n]="Required")})),t}}),g=O.values,N=O.errors,w=O.handleChange,y=O.submitCount,k=O.handleSubmit,C=O.isSubmitting;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.a,{onClick:function(){return v(!0)},className:"secondaryBackground buttonSecondaryTextColor min-w-unset flex items-center justify-center h-28px px-7 rounded text-sm mr-3 mb-3",children:"Filters"}),m?Object(p.jsx)(i.a,{open:m,children:Object(p.jsx)("div",{className:"fixed left-0 top-0 w-full h-full flex p-7",onMouseDown:function(){return v(!1)},children:Object(p.jsxs)("div",{onMouseDown:function(e){return e.stopPropagation()},className:"bg-white rounded p-7 m-auto relative animate-littlemoveup",style:{maxWidth:600},children:[Object(p.jsx)(h.a,{className:"absolute top-0 right-0 cursor-pointer",onClick:function(){return v(!1)}}),Object(p.jsxs)("div",{className:"flex flex-wrap -mx-2 mb-4",children:[Object(p.jsxs)("div",{className:"sm:w-1/3 w-full mb-3 px-2",children:[Object(p.jsx)(x.a,{ground:"Dialog",className:"mb-2",error:y>0?N.fieldId:null,children:"Field"}),Object(p.jsx)(d.a,{className:"h-34px",ground:"Dialog",name:"fieldId",onChange:w,value:g.fieldId,options:[{value:"",label:"Select"}].concat(Object(c.a)(t.fields.map((function(e){return{value:e.id,label:e.id}}))))})]}),Object(p.jsxs)("div",{className:"sm:w-1/3 w-full mb-3 px-2",children:[Object(p.jsx)(x.a,{ground:"Dialog",className:"mb-2",error:y>0?N.operator:null,children:"Operator"}),Object(p.jsx)(d.a,{className:"h-34px",ground:"Dialog",name:"operator",onChange:w,value:g.operator,options:[{value:"",label:"Select"}].concat(Object(c.a)(["<","<=","==",">",">=","!=","array-contains","array-contains-any","in","not-in"].map((function(e){return{value:e,label:e}}))))})]}),Object(p.jsxs)("div",{className:"sm:w-1/3 w-full mb-3 px-2",children:[Object(p.jsx)(x.a,{ground:"Dialog",className:"mb-2 text-black",error:y>0?N.value:null,children:"Value"}),Object(p.jsx)(s.a,{onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),k())},ground:"Dialog",placeholder:["in","not in","array-contains-any"].includes(g.operator)?"value, value, value":"value",className:"placeholder-black h-34px",value:g.value,onChange:w,name:"value"})]})]}),Object(p.jsx)("div",{className:"flex justify-end",children:Object(p.jsx)(u.a,{disabled:C,onClick:function(){return k()},className:"primaryBackground buttonPrimaryTextColor h-28px min-w-unset px-8",children:"Add"})})]})})}):null]})}},830:function(e,t,n){"use strict";var c=n(0),r=n.n(c),a=n(17),o=n(2),l=Object(c.forwardRef)((function(e,t){return Object(o.jsx)("div",Object(a.a)(Object(a.a)({},e),{},{ref:t}))})),i=n(769),s=function(e){var t=e.src;return Object(o.jsx)(i.a,{arrow:!0,title:Object(o.jsx)("div",{className:"p-1",children:Object(o.jsx)("img",{src:t,className:"max-w-136px max-h-136px w-auto h-auto",alt:""})}),placement:"top",classes:{tooltip:"font-poppins text-xs p-0 rounded bg-fireck-1",arrow:"text-fireck-1"},children:Object(o.jsx)(l,{children:Object(o.jsx)("div",{className:"group w-4 h-4 relative flex items-center justify-center rounded hover:bg-gray-535371 hover:bg-opacity-5 cursor-pointer",children:Object(o.jsx)("div",{className:"relative w-4 h-4 rounded-full bg-center bg-cover pointer-events-none",style:{backgroundImage:"url(".concat(t,")")}})})})})};t.a=function(e){var t=e.files,n=e.file,c=r.a.useRef(Math.random());return Object(o.jsxs)("div",{className:"flex justify-center",children:[(t||(n?[n]:[])).slice(0,4).map((function(e,t){return Object(o.jsx)("div",{className:"mr-0.5",children:Object(o.jsx)(s,{src:e})},"".concat(c,"-file-").concat(t))})),t&&t.length>4?Object(o.jsx)("div",{className:"relative",children:Object(o.jsxs)("div",{className:"w-4 h-4 rounded-full bg-fireck-4 text-10px flex items-center justify-center",children:[t.length-4,"+"]})}):null]})}}}]);
//# sourceMappingURL=13.94b28e63.chunk.js.map