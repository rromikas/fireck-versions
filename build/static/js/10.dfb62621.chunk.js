(this["webpackJsonpfireck-cms"]=this["webpackJsonpfireck-cms"]||[]).push([[10],{825:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(17),r=n(33),a=n.n(r),o=(n(0),n(35)),i=n(30),l=n(98),s=n(244),u=n(64),d=n(2);function j(e){var t=e.Component,n=e.props;return new Promise((function(e,r){var j,b=null===(j=document.getElementById("root"))||void 0===j?void 0:j.appendChild(document.createElement("div"));b&&a.a.render(Object(d.jsx)(o.a,{store:i.a,children:Object(d.jsx)(l.a,{children:Object(d.jsx)(s.QueryClientProvider,{client:u.queryClient,children:Object(d.jsx)(t,Object(c.a)(Object(c.a)({},n),{},{proceed:function(t){var n;a.a.unmountComponentAtNode(b),null===(n=b.parentNode)||void 0===n||n.removeChild(b),e(t)}}))})})}),b)}))}},826:function(e,t,n){"use strict";var c=n(5),r=n(185),a=n(17),o=n(841),i=n(769),l=n(0),s=n.n(l),u=n(110),d=n.n(u),j=n(2),b=["className","options","error","ground"],f=s.a.forwardRef((function(e,t){return Object(j.jsx)("div",Object(a.a)(Object(a.a)({},e),{},{ref:t,children:Object(j.jsx)(o.a,{className:"text-red-FF0000",size:20})}))}));t.a=function(e){var t=e.className,n=void 0===t?"":t,o=e.options,l=e.error,s=e.ground,u=Object(r.a)(e,b),p="input".concat(s,"TextColor input").concat(s,"HoverBackground input").concat(s,"FocusedTextColor input").concat(s,"FocusedBackground input").concat(s,"FocusedBorderColor input").concat(s,"Background");return Object(j.jsxs)("div",{className:"".concat(n," relative flex items-center"),children:[Object(j.jsx)("select",Object(a.a)(Object(a.a)({className:d()("px-3 h-full border-2 border-solid w-full rounded outline-none",Object(c.a)({"border-red-FF0000":l},p,!l))},u),{},{spellCheck:!1,children:o.map((function(e,t){return Object(j.jsx)("option",{"data-testid":"select-option-".concat(e.value),value:e.value,children:e.label},"opt-"+t)}))})),l?Object(j.jsx)(i.a,{title:l,placement:"top",children:Object(j.jsx)(f,{className:"absolute right-2 my-auto w-auto"})}):null]})}},827:function(e,t,n){"use strict";var c=n(17),r=n(0),a=n.n(r),o=n(319),i=n.n(o),l=n(769),s=n(110),u=n.n(s),d=n(2),j=a.a.forwardRef((function(e,t){return Object(d.jsx)("div",Object(c.a)(Object(c.a)({},e),{},{ref:t,children:Object(d.jsx)(i.a,{className:"text-red-500 text-xl",fontSize:"inherit"})}))}));t.a=function(e){var t=e.className,n=void 0===t?"":t,c=e.children,r=e.error,a=e.ground;return Object(d.jsxs)("div",{className:u()("flex justify-between relative ".concat(n),"".concat(a.toLowerCase(),"TextColor")),children:[Object(d.jsx)("div",{children:c}),r?Object(d.jsx)(l.a,{title:r,placement:"top",children:Object(d.jsx)(j,{className:"absolute right-2 my-auto w-auto"})}):null]})}},828:function(e,t,n){"use strict";var c=n(19),r=n(1),a=n.n(r),o=n(4),i=n(13),l=n(830),s=n(0),u=n.n(s),d=n(837),j=n.n(d),b=n(34),f=n(186),p=n(829),x=n(56),m=n(187),h=n(110),O=n.n(h),v=n(17),g=n(98),N=(n(825),n(2)),w=n(245),y=n(244),k=function(e){var t=e.collectionId,n=e.filters,r=void 0===n?[]:n,a=e.orderBy,o=e.inView,i=(Object(g.b)(),Object(s.useCallback)((function(){var e={collectionId:t,where:"",orderBy:""};return r.forEach((function(t,n){e.where+=(n>0?";":"")+t.fieldId+","+t.operator+","+t.value,a&&a.fieldId!==t.fieldId&&(e.orderBy+=(e.orderBy?";":"")+t.fieldId)})),a&&(e.orderBy+=(e.orderBy?";":"")+"".concat(a.fieldId,",").concat(a.direction)),a||r.length||(e.orderBy="createdAt,asc"),e.populateRef=!1,e}),[a,r,t])),l=Object(y.useInfiniteQuery)([t,a,r],(function(e){var t=e.pageParam;return w.a.getCollection(Object(v.a)(Object(v.a)({},i()),{},{startAfter:t}))}),{keepPreviousData:!0,getNextPageParam:function(e,t){var n=(null===e||void 0===e?void 0:e.length)&&10===e.length?e[9]:null;return n?n[a?a.fieldId:"createdAt"]:void 0}}),u=l.data,d=(l.error,l.fetchNextPage),j=l.hasNextPage;return Object(s.useEffect)((function(){o&&j&&d()}),[o,d,j]),{docs:(null===u||void 0===u?void 0:u.pages.reduce((function(e,t){return[].concat(Object(c.a)(e),Object(c.a)(t))}),[]))||[]}},C=n(318),I=n(1031),D=n(836),B=n.n(D),S=n(87);t.a=function(e){var t=e.collectionType,n=e.onPick,r=e.blackList,d=void 0===r?[]:r,h=e.singleSelect,v=void 0!==h&&h,g=e.valueFormatters,y=e.ground,D=e.filters,T=void 0===D?[]:D,F=e.onEdit,P=e.hideFilters,E=void 0!==P&&P,z=Object(b.k)(),R=u.a.useState([]),A=Object(i.a)(R,2),M=A[0],H=A[1],V=t.fields.filter((function(e){return e.displayOnTable})),L=u.a.useState([]),_=Object(i.a)(L,2),G=_[0],U=_[1],Y=u.a.useState(),q=Object(i.a)(Y,2),J=q[0],Q=q[1],K=u.a.useState(!1),W=Object(i.a)(K,2),X=W[0],Z=W[1],$=k({collectionId:t.id,filters:M,orderBy:J,inView:X}).docs,ee=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)({confirmation:"Delete ".concat(G.length," documents?")});case 2:if(!e.sent){e.next=5;break}w.a.deleteMultipleDocuments(t.id,$.filter((function(e){return G.includes(e.docId)}))),U([]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=F||function(e){z.push("/collections/".concat(t.id,"/edit/").concat(e.docId))},ne=function(e){return(null===J||void 0===J?void 0:J.fieldId)!==e.id?function(){Q({fieldId:e.id,direction:"asc"})}:"asc"!==(null===J||void 0===J?void 0:J.direction)?function(){return Q(void 0)}:function(){return Q({fieldId:e.id,direction:"desc"})}},ce=function(e,t){U(t?v?[e]:function(t){return[].concat(Object(c.a)(t),[e])}:function(t){var n=Object(c.a)(t),r=n.findIndex((function(t){return t===e}));return null!=r&&n.splice(r,1),n})},re=function(e,t){return"date"===e.type?B()(t).format("YYYY-MM-DD HH:mm"):g&&e.id in g?g[e.id](t):t.toString().substring(0,40)};return Object(s.useEffect)((function(){T.length&&H((function(e){return[].concat(Object(c.a)(e),Object(c.a)(T))}))}),[T]),Object(N.jsxs)("div",{className:"h-full w-full flex-col flex",children:[Object(N.jsxs)("div",{className:"flex justify-between mb-3",children:[E?null:Object(N.jsxs)("div",{className:"flex flex-wrap",children:[Object(N.jsx)(p.a,{ground:y,collectionType:t,onValue:function(e){return H((function(t){return[e].concat(Object(c.a)(t))}))}}),M.map((function(e,t){return e.hidden?null:Object(N.jsxs)("div",{className:O()("rounded min-h-28px border leading-28px pl-3 text-sm pr-3 flex mr-3 mb-3 relative","".concat(Object(S.d)(y),"TextColor ").concat(Object(S.d)(y),"BorderColor")),children:[e.fieldId," ",e.operator," ",e.value," ",Object(N.jsx)("span",{onClick:function(){return H((function(e){var n=Object(c.a)(e);return n.splice(t,1),n}))},className:"text-xs leading-28px ml-3 cursor-pointer",children:"\u2715"})]},"f-".concat(t))}))]}),n?Object(N.jsx)(x.a,{onClick:function(){return n($.filter((function(e){return G.includes(e.docId)})))},className:"h-28px min-w-unset rounded mb-3 px-7 ".concat(0===G.length?"buttonDisabledBackground buttonDisabledTextColor cursor-default":"primaryBackground buttonPrimaryTextColor"," "),children:"Select"}):Object(N.jsx)(x.a,{onClick:ee,disabled:0===G.length,className:"px-7 mb-3 min-w-unset rounded h-28px ".concat(0===G.length?"buttonDisabledBackground buttonDisabledTextColor cursor-default":"dangerBackground buttonDangerTextColor"," "),children:"Delete"})]}),Object(N.jsx)("div",{className:O()("flex-grow h-0 -mt-3 rounded overflow-hidden bg-white"),children:Object(N.jsxs)(m.a,{className:"relative scrollbar-light h-full",children:[Object(N.jsxs)("table",{className:"w-full text-center",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{className:"whitespace-nowrap",children:[Object(N.jsx)("th",{className:"sticky top-0 table".concat(y,"HeaderBackground z-10 px-1"),children:v?null:Object(N.jsx)(I.a,{size:"small",classes:{checked:"tableCheckboxColor",root:"p-0"},checked:G.length===$.length,onChange:function(e){return t=e.target.checked,U(t?$.map((function(e){return e.docId})):[]);var t}})}),V.map((function(e,t){return Object(N.jsx)("th",{className:"font-medium sticky top-0 table".concat(y,"HeaderBackground"),children:Object(N.jsxs)("div",{className:"flex items-center justify-center",children:[Object(N.jsx)("div",{className:"w-5"}),Object(N.jsx)("div",{className:"cursor-pointer select-none",onClick:ne(e),children:e.id}),Object(N.jsx)("div",{className:"w-5",children:(null===J||void 0===J?void 0:J.fieldId)===e.id?Object(N.jsx)(j.a,{fontSize:"small",className:"".concat("asc"===(null===J||void 0===J?void 0:J.direction)?"transform rotate-180":"")}):null})]})},"th-".concat(t))}))]})}),Object(N.jsxs)("tbody",{children:[$.map((function(e,t){return d.includes(e.docId)?null:Object(N.jsxs)("tr",{onClick:function(){return n?ce(e.docId,!G.includes(e.docId)):te(e)},className:"cursor-pointer table".concat(y,"RowHoverTextColor table").concat(y,"RowHoverBackground"),children:[Object(N.jsx)("td",{className:"px-1",onClick:function(e){return e.stopPropagation()},children:Object(N.jsx)(I.a,{size:"small",classes:{checked:"tableCheckboxColor",root:"p-0"},checked:G.includes(e.docId),onChange:function(t){return ce(e.docId,t.target.checked)}})}),V.map((function(n,c){return Object(N.jsx)("td",{className:"px-2",children:null!=e[n.id]?"media"===n.type?n.mediaSingle?Object(N.jsx)(l.a,{file:e[n.id]}):Object(N.jsx)(l.a,{files:e[n.id]}):Object(N.jsx)("div",{className:"whitespace-nowrap",children:re(n,e[n.id])}):null},"row-".concat(t,"-col-").concat(c))}))]},"row-".concat(t))})),Object(N.jsx)("tr",{children:Object(N.jsx)("td",{colSpan:V.length+1,children:Object(N.jsx)(C.a,{onChange:function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(N.jsx)("div",{className:"w-full"})})})})]})]}),Object(N.jsx)("div",{})]})})]})}},829:function(e,t,n){"use strict";var c=n(19),r=n(1),a=n.n(r),o=n(4),i=n(13),l=n(818),s=n(111),u=n(826),d=n(56),j=n(0),b=n.n(j),f=n(188),p=n(827),x=n(316),m=n.n(x),h=n(2);t.a=function(e){var t=e.collectionType,n=e.onValue,r=(e.ground,b.a.useState(!1)),j=Object(i.a)(r,2),x=j[0],O=j[1],v=Object(f.a)({onSubmit:function(){var e=Object(o.a)(a.a.mark((function e(t,c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=c.resetForm,n(t),O(!1),r();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),initialValues:{value:"",operator:"",fieldId:""},validate:function(e){var t={};return Object.keys(e).forEach((function(n){e[n]||(t[n]="Required")})),t}}),g=v.values,N=v.errors,w=v.handleChange,y=v.submitCount,k=v.handleSubmit,C=v.isSubmitting;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a,{onClick:function(){return O(!0)},className:"secondaryBackground buttonSecondaryTextColor min-w-unset flex items-center justify-center h-28px px-7 rounded text-sm mr-3 mb-3",children:"Filters"}),x?Object(h.jsx)(l.a,{open:x,children:Object(h.jsx)("div",{className:"fixed left-0 top-0 w-full h-full flex p-7",onMouseDown:function(){return O(!1)},children:Object(h.jsxs)("div",{onMouseDown:function(e){return e.stopPropagation()},className:"bg-white rounded p-7 m-auto relative animate-littlemoveup",style:{maxWidth:600},children:[Object(h.jsx)(m.a,{className:"absolute top-0 right-0 cursor-pointer",onClick:function(){return O(!1)}}),Object(h.jsxs)("div",{className:"flex flex-wrap -mx-2 mb-4",children:[Object(h.jsxs)("div",{className:"sm:w-1/3 w-full mb-3 px-2",children:[Object(h.jsx)(p.a,{ground:"Dialog",className:"mb-2",error:y>0?N.fieldId:null,children:"Field"}),Object(h.jsx)(u.a,{className:"h-34px",ground:"Dialog",name:"fieldId",onChange:w,value:g.fieldId,options:[{value:"",label:"Select"}].concat(Object(c.a)(t.fields.map((function(e){return{value:e.id,label:e.id}}))))})]}),Object(h.jsxs)("div",{className:"sm:w-1/3 w-full mb-3 px-2",children:[Object(h.jsx)(p.a,{ground:"Dialog",className:"mb-2",error:y>0?N.operator:null,children:"Operator"}),Object(h.jsx)(u.a,{className:"h-34px",ground:"Dialog",name:"operator",onChange:w,value:g.operator,options:[{value:"",label:"Select"}].concat(Object(c.a)(["<","<=","==",">",">=","!=","array-contains","array-contains-any","in","not-in"].map((function(e){return{value:e,label:e}}))))})]}),Object(h.jsxs)("div",{className:"sm:w-1/3 w-full mb-3 px-2",children:[Object(h.jsx)(p.a,{ground:"Dialog",className:"mb-2 text-black",error:y>0?N.value:null,children:"Value"}),Object(h.jsx)(s.a,{onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),k())},ground:"Dialog",placeholder:["in","not in","array-contains-any"].includes(g.operator)?"value, value, value":"value",className:"placeholder-black h-34px",value:g.value,onChange:w,name:"value"})]})]}),Object(h.jsx)("div",{className:"flex justify-end",children:Object(h.jsx)(d.a,{disabled:C,onClick:function(){return k()},className:"primaryBackground buttonPrimaryTextColor h-28px min-w-unset px-8",children:"Add"})})]})})}):null]})}},830:function(e,t,n){"use strict";var c=n(0),r=n.n(c),a=n(17),o=n(2),i=Object(c.forwardRef)((function(e,t){return Object(o.jsx)("div",Object(a.a)(Object(a.a)({},e),{},{ref:t}))})),l=n(769),s=function(e){var t=e.src;return Object(o.jsx)(l.a,{arrow:!0,title:Object(o.jsx)("div",{className:"p-1",children:Object(o.jsx)("img",{src:t,className:"max-w-136px max-h-136px w-auto h-auto",alt:""})}),placement:"top",classes:{tooltip:"font-poppins text-xs p-0 rounded bg-fireck-1",arrow:"text-fireck-1"},children:Object(o.jsx)(i,{children:Object(o.jsx)("div",{className:"group w-4 h-4 relative flex items-center justify-center rounded hover:bg-gray-535371 hover:bg-opacity-5 cursor-pointer",children:Object(o.jsx)("div",{className:"relative w-4 h-4 rounded-full bg-center bg-cover pointer-events-none",style:{backgroundImage:"url(".concat(t,")")}})})})})};t.a=function(e){var t=e.files,n=e.file,c=r.a.useRef(Math.random());return Object(o.jsxs)("div",{className:"flex justify-center",children:[(t||(n?[n]:[])).slice(0,4).map((function(e,t){return Object(o.jsx)("div",{className:"mr-0.5",children:Object(o.jsx)(s,{src:e})},"".concat(c,"-file-").concat(t))})),t&&t.length>4?Object(o.jsx)("div",{className:"relative",children:Object(o.jsxs)("div",{className:"w-4 h-4 rounded-full bg-fireck-4 text-10px flex items-center justify-center",children:[t.length-4,"+"]})}):null]})}},833:function(e,t,n){"use strict";var c=n(17),r=n(185),a=n(110),o=n.n(a),i=n(2),l=["className"];t.a=function(e){var t=e.className,n=Object(r.a)(e,l);return Object(i.jsx)("div",Object(c.a)(Object(c.a)({},n),{},{className:o()("text-27px font-medium capitalize leading-none",t)}))}},838:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var c=n(1),r=n.n(c),a=n(4),o=n(87),i=(n(30),n(40)),l=n(6),s=n(7),u=n(864),d=n(861),j=n.n(d),b=new(function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,[{key:"upload",value:function(e){return new Promise((function(t){try{var n=Object(u.c)(),c=e.name.split("."),r=j.a.generate()+"."+c[c.length-1],a=Object(u.d)(n,r),o=Object(u.e)(a,e);o.on("state_changed",(function(e){}),(function(e){t({error:e.name})}),(function(){Object(u.b)(o.snapshot.ref).then((function(e){t({downloadUrl:e,fileName:r})}))}))}catch(i){t({error:i})}}))}},{key:"delete",value:function(e){var t=Object(u.c)();Object(u.a)(Object(u.d)(t,e))}}]),e}()),f=function(){var e=Object(a.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.upload(t);case 3:if(!("error"in(n=e.sent))){e.next=8;break}return e.abrupt("return",n);case 8:return c={name:t.name,size:t.size,url:n.downloadUrl,storagePath:n.fileName,type:Object(o.c)(t)},e.abrupt("return",Object(i.a)("FilesReservedCollection",c));case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",{error:e.t0.toString()});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},843:function(e,t,n){"use strict";n.r(t),n.d(t,"MediaDocumentFormatters",(function(){return g}));var c=n(1),r=n.n(c),a=n(32),o=n(4),i=n(13),l=n(56),s=n(0),u=n.n(s),d=n(838),j=n(30),b=n(98),f=n(833),p=n(828),x=n(35),m=n(832),h=n.n(m),O=n(87),v=n(2),g={url:function(e){return Object(v.jsx)("div",{onClick:function(t){t.stopPropagation(),window.open(e,"_blank")},className:"bg-center bg-cover h-10 w-10 mx-auto bg-gray-E1E1E1",style:{backgroundImage:"url(".concat(e,")")}})},size:function(e){return Object(O.a)(e)}};t.default=function(){var e=u.a.useRef(null),t=Object(b.b)(),n=Object(s.useState)(0),c=Object(i.a)(n,2),m=c[0],O=c[1],N=Object(x.e)((function(e){return{collectionType:e.collectionTypes.find((function(e){return"FilesReservedCollection"===e.id}))}})).collectionType;return Object(v.jsxs)("div",{className:"h-full w-full flex flex-col",children:[Object(v.jsxs)("div",{className:"flex justify-between flex-wrap mb-3",children:[Object(v.jsx)(f.a,{className:"mb-4 mr-4",children:"Media"}),Object(v.jsx)("input",{type:"file",multiple:!0,className:"hidden",ref:e,onChange:function(){var e=Object(o.a)(r.a.mark((function e(n){var c,o,i,l,s,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c=n.target.files)||!c.length){e.next=25;break}j.a.dispatch({type:"SET_LOADING",payload:"Uploading ".concat(c.length," file").concat(c.length>1?"s":"","...")}),o=0,i=Object(a.a)(c),e.prev=5,i.s();case 7:if((l=i.n()).done){e.next=15;break}return s=l.value,e.next=11,Object(d.a)(s);case 11:"error"in(u=e.sent)?t(u.error+". Try reload the app",{variant:"error"}):(o++,j.a.dispatch({type:"SET_LOADING",payload:"".concat(o,"/").concat(c.length," uploaded.")}));case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),i.e(e.t0);case 20:return e.prev=20,i.f(),e.finish(20);case 23:j.a.dispatch({type:"SET_LOADING",payload:!1}),O((function(e){return e+1}));case 25:case"end":return e.stop()}}),e,null,[[5,17,20,23]])})));return function(t){return e.apply(this,arguments)}}()},"file-input-".concat(m)),Object(v.jsx)(l.a,{onClick:function(){return e.current.click()},className:"primaryBackground buttonPrimaryTextColor mb-4 h-34px pr-6 pl-5 min-w-unset",children:Object(v.jsxs)("div",{className:"flex items-center",children:[Object(v.jsx)(h.a,{className:"mr-2 text-lg",fontSize:"inherit"}),Object(v.jsx)("span",{children:"Upload"})]})})]}),N?Object(v.jsx)(p.a,{ground:"Ground",valueFormatters:g,collectionType:N},"files-table-".concat(m)):null]})}}}]);
//# sourceMappingURL=10.dfb62621.chunk.js.map