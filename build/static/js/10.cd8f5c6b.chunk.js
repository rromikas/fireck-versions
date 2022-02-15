(this["webpackJsonpfireck-cms"]=this["webpackJsonpfireck-cms"]||[]).push([[10],{1043:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),l=n(12),o=n(37),i=n(861),s=n(847),d=n(0),u=n(35),j=n(57),b=n(19),f=n(1040),m=n(115),x=n(845),h=n(192),p=n(846),O=n(193),v=n.n(O),g=n(2),w=["find","find one","create","update","delete"],N=["GET","POST","PUT","PATCH","DELETE"],y=function(e){var t=e.onValue,n=e.initialValue,c=e.open,l=e.onClose,o=e.collectionTypeDocId,i=Object(h.a)({onSubmit:function(){var e=Object(r.a)(a.a.mark((function e(n,c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=c.resetForm,t(n),l(),r();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),enableReinitialize:!0,initialValues:n||{event:"",method:"",url:"",collectionTypeDocId:o},validate:function(e){var t={};return Object.keys(e).forEach((function(n){e[n]||(t[n]="Required")})),t}}),s=i.values,d=i.errors,u=i.handleChange,O=i.submitCount,y=i.handleSubmit,k=i.isSubmitting;return c?Object(g.jsx)(f.a,{open:c,children:Object(g.jsx)("div",{className:"fixed left-0 top-0 w-full h-full flex p-7",onMouseDown:l,children:Object(g.jsxs)("div",{onMouseDown:function(e){return e.stopPropagation()},className:"bg-white rounded p-7 m-auto relative animate-littlemoveup",style:{maxWidth:600},children:[Object(g.jsx)(v.a,{className:"absolute top-0 right-0 cursor-pointer",onClick:l}),Object(g.jsxs)("div",{className:"flex flex-wrap -mx-2 mb-4",children:[Object(g.jsxs)("div",{className:"sm:w-1/3 w-full mb-3 px-2",children:[Object(g.jsx)(p.a,{ground:"Dialog",className:"mb-2",error:O>0?d.event:null,children:"Event"}),Object(g.jsx)(x.a,{ground:"Dialog",className:"h-34px",name:"event",onChange:u,value:s.event,options:[{value:"",label:"Select"}].concat(Object(b.a)(w.map((function(e){return{value:e,label:e}}))))})]}),Object(g.jsxs)("div",{className:"sm:w-1/3 w-full mb-3 px-2",children:[Object(g.jsx)(p.a,{ground:"Dialog",className:"mb-2",error:O>0?d.method:null,children:"Method"}),Object(g.jsx)(x.a,{className:"h-34px",ground:"Dialog",name:"method",onChange:u,value:s.method,options:[{value:"",label:"Select"}].concat(Object(b.a)(N.map((function(e){return{value:e,label:e}}))))})]}),Object(g.jsxs)("div",{className:"sm:w-1/3 w-full mb-3 px-2",children:[Object(g.jsx)(p.a,{ground:"Dialog",className:"mb-2 text-black",error:O>0?d.url:null,children:"Url"}),Object(g.jsx)(m.a,{onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),y())},ground:"Dialog",placeholder:"url",className:"placeholder-black h-34px",value:s.url,onChange:u,name:"url"})]})]}),Object(g.jsx)("div",{className:"flex justify-end",children:Object(g.jsx)(j.a,{disabled:k,onClick:function(){return y()},className:"primaryBackground buttonPrimaryTextColor h-34px",children:n?"Save":"Add"})})]})})}):null},k=n(52),C=n(99),I=n(36);t.default=function(){var e=Object(o.e)((function(e){return e.collectionTypes})),t=e.find((function(e){return e.docId===I.a.WEBHOOKS})),n=(Object(u.k)(),Object(d.useState)(!1)),c=Object(l.a)(n,2),b=c[0],f=c[1],m=Object(d.useState)(),x=Object(l.a)(m,2),h=x[0],p=x[1],O=Object(d.useState)(0),v=Object(l.a)(O,2),w=v[0],N=v[1],S=Object(d.useState)([]),D=Object(l.a)(S,2),B=D[0],T=D[1],E=Object(d.useState)(""),P=Object(l.a)(E,2),F=P[0],H=P[1],z=e.find((function(e){return e.docId===F})),A=Object(C.b)();Object(d.useEffect)((function(){e.length&&H(e[0].docId)}),[e]),Object(d.useEffect)((function(){T(F?[{fieldId:"collectionTypeDocId",operator:"==",value:F,hidden:!0}]:[])}),[z]);return Object(g.jsxs)(g.Fragment,{children:[z?Object(g.jsx)(y,{collectionTypeDocId:F,open:b,initialValue:h,onClose:function(){f(!1),p(void 0)},onValue:function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.docId){e.next=6;break}return e.next=3,k.a.updateDocument(I.a.WEBHOOKS,t.docId,t);case 3:n=e.sent,e.next=9;break;case 6:return e.next=8,k.a.addDocument(I.a.WEBHOOKS,t);case 8:n=e.sent;case 9:n.error?A(n.error,{variant:"error"}):N((function(e){return e+1}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}):null,Object(g.jsx)(i.a,{entityContent:t?Object(g.jsx)(s.a,{onEdit:function(e){p(e),f(!0)},ground:"GroundContainer",collectionType:t,filters:B},"webhooks-table-".concat(B.length?B[0].value:"","-").concat(w)):Object(g.jsx)("div",{}),selectedEntityId:F,entities:e,onSelectEntity:function(e){return H(e)},entity:"webhook",enitityPlural:"webhooks",entityButtons:Object(g.jsx)("div",{className:"flex",children:Object(g.jsx)(j.a,{type:"button",onClick:function(){return f(!0)},className:"buttonPrimaryBackground buttonPrimaryTextColor h-28px px-6 min-w-unset",children:"Add hook"})})})]})}},844:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(14),a=n(34),r=n.n(a),l=(n(0),n(37)),o=n(33),i=n(99),s=n(250),d=n(65),u=n(2);function j(e){var t=e.Component,n=e.props;return new Promise((function(e,a){var j,b,f=null===(j=document.getElementById("root"))||void 0===j||null===(b=j.parentNode)||void 0===b?void 0:b.appendChild(document.createElement("div"));f&&r.a.render(Object(u.jsx)(l.a,{store:o.a,children:Object(u.jsx)(i.a,{children:Object(u.jsx)(s.QueryClientProvider,{client:d.queryClient,children:Object(u.jsx)(t,Object(c.a)(Object(c.a)({},n),{},{proceed:function(t){var n;r.a.unmountComponentAtNode(f),null===(n=f.parentNode)||void 0===n||n.removeChild(f),e(t)}}))})})}),f)}))}},845:function(e,t,n){"use strict";var c=n(5),a=n(189),r=n(14),l=n(857),o=n(788),i=n(0),s=n.n(i),d=n(114),u=n.n(d),j=n(2),b=["className","options","error","ground"],f=s.a.forwardRef((function(e,t){return Object(j.jsx)("div",Object(r.a)(Object(r.a)({},e),{},{ref:t,children:Object(j.jsx)(l.a,{className:"text-red-FF0000",size:20})}))})),m=function(e){var t=e.className,n=void 0===t?"":t,l=e.options,i=e.error,s=e.ground,d=Object(a.a)(e,b),m="input".concat(s,"TextColor input").concat(s,"HoverBackground input").concat(s,"FocusedTextColor input").concat(s,"FocusedBackground input").concat(s,"FocusedBorderColor input").concat(s,"Background");return Object(j.jsxs)("div",{className:"".concat(n," relative flex items-center"),children:[Object(j.jsx)("select",Object(r.a)(Object(r.a)({className:u()("px-3 h-full border-2 border-solid w-full rounded outline-none",Object(c.a)({"border-red-FF0000":i},m,!i))},d),{},{spellCheck:!1,children:l.map((function(e,t){return Object(j.jsx)("option",{"data-testid":"select-option-".concat(e.value),value:e.value,children:e.label},"opt-"+t)}))})),i?Object(j.jsx)(o.a,{title:i,placement:"top",children:Object(j.jsx)(f,{className:"absolute right-2 my-auto w-auto"})}):null]})};t.a=Object(i.memo)(m)},846:function(e,t,n){"use strict";var c=n(14),a=n(0),r=n.n(a),l=n(326),o=n.n(l),i=n(788),s=n(114),d=n.n(s),u=n(2),j=r.a.forwardRef((function(e,t){return Object(u.jsx)("div",Object(c.a)(Object(c.a)({},e),{},{ref:t,children:Object(u.jsx)(o.a,{className:"text-red-500 text-xl",fontSize:"inherit"})}))}));t.a=function(e){var t=e.className,n=void 0===t?"":t,c=e.children,a=e.error,r=e.ground;return Object(u.jsxs)("div",{className:d()("flex justify-between relative ".concat(n),"".concat(r.toLowerCase(),"TextColor")),children:[Object(u.jsx)("div",{children:c}),a?Object(u.jsx)(i.a,{title:a,placement:"top",classes:{tooltip:"bg-red-500",tooltipArrow:"bg-red-500"},children:Object(u.jsx)(j,{className:"absolute right-2 my-auto w-auto"})}):null]})}},847:function(e,t,n){"use strict";var c=n(19),a=n(1),r=n.n(a),l=n(4),o=n(12),i=n(849),s=n(0),d=n.n(s),u=n(854),j=n.n(u),b=n(35),f=n(191),m=n(848),x=n(57),h=n(190),p=n(114),O=n.n(p),v=n(14),g=n(99),w=(n(844),n(2)),N=n(250),y=n(52),k=function(e){var t=e.collectionId,n=e.filters,a=void 0===n?[]:n,r=e.orderBy,l=e.inView,o=(Object(g.b)(),Object(s.useCallback)((function(){var e={collectionId:t,where:"",orderBy:""};return a.forEach((function(t,n){e.where+=(n>0?";":"")+t.fieldId+","+t.operator+","+t.value,r&&r.fieldId!==t.fieldId&&(e.orderBy+=(e.orderBy?";":"")+t.fieldId)})),r&&(e.orderBy+=(e.orderBy?";":"")+"".concat(r.fieldId,",").concat(r.direction)),r||a.length||(e.orderBy="createdAt,asc"),e.populateRef=!1,e}),[r,a,t])),i=Object(N.useInfiniteQuery)([t,r,a],(function(e){var t=e.pageParam;return y.a.getCollection(Object(v.a)(Object(v.a)({},o()),{},{startAfter:t}))}),{keepPreviousData:!0,getNextPageParam:function(e,t){var n=(null===e||void 0===e?void 0:e.length)&&10===e.length?e[9]:null;return n?n[r?r.fieldId:"createdAt"]:void 0}}),d=i.data,u=(i.error,i.fetchNextPage),j=i.hasNextPage;return Object(s.useEffect)((function(){l&&j&&u()}),[l,u,j]),{docs:(null===d||void 0===d?void 0:d.pages.reduce((function(e,t){return[].concat(Object(c.a)(e),Object(c.a)(t))}),[]))||[]}},C=n(324),I=n(1028),S=n(853),D=n.n(S),B=n(251),T=n(69);t.a=function(e){var t=e.collectionType,n=e.onPick,a=e.blackList,u=void 0===a?[]:a,p=e.singleSelect,v=void 0!==p&&p,g=e.valueFormatters,N=e.ground,y=e.filters,S=void 0===y?[]:y,E=e.onEdit,P=e.hideFilters,F=void 0!==P&&P,H=Object(b.k)(),z=d.a.useState([]),A=Object(o.a)(z,2),V=A[0],R=A[1],M=t.fields.filter((function(e){return e.displayOnTable})),K=d.a.useState([]),L=Object(o.a)(K,2),W=L[0],Y=L[1],q=d.a.useState(),G=Object(o.a)(q,2),J=G[0],Q=G[1],U=d.a.useState(!1),_=Object(o.a)(U,2),X=_[0],Z=_[1],$=k({collectionId:t.id,filters:V,orderBy:J,inView:X}).docs,ee=function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)({confirmation:"Delete ".concat(W.length," documents?")});case 2:if(!e.sent){e.next=5;break}B.a.deleteMultipleDocuments(t.id,$.filter((function(e){return W.includes(e.docId)}))),Y([]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=E||function(e){H.push("/collections/".concat(t.id,"/edit/").concat(e.docId))},ne=function(e){return(null===J||void 0===J?void 0:J.fieldId)!==e.id?function(){Q({fieldId:e.id,direction:"asc"})}:"asc"!==(null===J||void 0===J?void 0:J.direction)?function(){return Q(void 0)}:function(){return Q({fieldId:e.id,direction:"desc"})}},ce=function(e,t){Y(t?v?[e]:function(t){return[].concat(Object(c.a)(t),[e])}:function(t){var n=Object(c.a)(t),a=n.findIndex((function(t){return t===e}));return null!=a&&n.splice(a,1),n})},ae=function(e,t){return"date"===e.type?D()(t).format("YYYY-MM-DD HH:mm"):g&&e.id in g?g[e.id](t):t.toString().substring(0,40)};return Object(s.useEffect)((function(){S.length&&R((function(e){return[].concat(Object(c.a)(e),Object(c.a)(S))}))}),[S]),Object(w.jsxs)("div",{className:"h-full w-full flex-col flex",children:[Object(w.jsxs)("div",{className:"flex justify-between mb-3",children:[F?null:Object(w.jsxs)("div",{className:"flex flex-wrap",children:[Object(w.jsx)(m.a,{ground:N,collectionType:t,onValue:function(e){return R((function(t){return[e].concat(Object(c.a)(t))}))}}),V.map((function(e,t){return e.hidden?null:Object(w.jsxs)("div",{className:O()("rounded min-h-28px border leading-28px pl-3 text-sm pr-3 flex mr-3 mb-3 relative","".concat(Object(T.e)(N),"TextColor ").concat(Object(T.e)(N),"BorderColor")),children:[e.fieldId," ",e.operator," ",e.value," ",Object(w.jsx)("span",{onClick:function(){return R((function(e){var n=Object(c.a)(e);return n.splice(t,1),n}))},className:"text-xs leading-28px ml-3 cursor-pointer",children:"\u2715"})]},"f-".concat(t))}))]}),n?Object(w.jsx)(x.a,{onClick:function(){return n($.filter((function(e){return W.includes(e.docId)})))},className:"h-28px min-w-unset rounded mb-3 px-7 ".concat(0===W.length?"buttonDisabledBackground buttonDisabledTextColor cursor-default":"primaryBackground buttonPrimaryTextColor"," "),children:"Select"}):Object(w.jsx)(x.a,{onClick:ee,disabled:0===W.length,className:"px-7 mb-3 min-w-unset rounded h-28px ".concat(0===W.length?"buttonDisabledBackground buttonDisabledTextColor cursor-default":"dangerBackground buttonDangerTextColor"," "),children:"Delete"})]}),Object(w.jsx)("div",{className:O()("flex-grow h-0 -mt-3 rounded overflow-hidden bg-white"),children:Object(w.jsxs)(h.a,{className:"relative table".concat(N,"Scrollbar h-full"),children:[Object(w.jsxs)("table",{className:"w-full text-center",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{className:"whitespace-nowrap",children:[Object(w.jsx)("th",{className:"sticky top-0 table".concat(N,"HeaderBackground z-10 px-1"),children:v?null:Object(w.jsx)(I.a,{size:"small",classes:{checked:"tableCheckboxTextColor",root:"p-0"},checked:W.length===$.length,onChange:function(e){return t=e.target.checked,Y(t?$.map((function(e){return e.docId})):[]);var t}})}),M.map((function(e,t){return Object(w.jsx)("th",{className:"font-medium sticky top-0 table".concat(N,"HeaderBackground"),children:Object(w.jsxs)("div",{className:"flex items-center justify-center",children:[Object(w.jsx)("div",{className:"w-5"}),Object(w.jsx)("div",{className:"cursor-pointer select-none",onClick:ne(e),children:e.id}),Object(w.jsx)("div",{className:"w-5",children:(null===J||void 0===J?void 0:J.fieldId)===e.id?Object(w.jsx)(j.a,{fontSize:"small",className:"".concat("asc"===(null===J||void 0===J?void 0:J.direction)?"transform rotate-180":"")}):null})]})},"th-".concat(t))}))]})}),Object(w.jsxs)("tbody",{children:[$.map((function(e,t){return u.includes(e.docId)?null:Object(w.jsxs)("tr",{onClick:function(){return n?ce(e.docId,!W.includes(e.docId)):te(e)},className:"cursor-pointer table".concat(N,"RowHoverTextColor table").concat(N,"RowHoverBackground"),children:[Object(w.jsx)("td",{className:"px-1",onClick:function(e){return e.stopPropagation()},children:Object(w.jsx)(I.a,{size:"small",classes:{checked:"tableCheckboxTextColor",root:"p-0"},checked:W.includes(e.docId),onChange:function(t){return ce(e.docId,t.target.checked)}})}),M.map((function(n,c){return Object(w.jsx)("td",{className:"px-2",children:null!=e[n.id]?"media"===n.type?n.mediaSingle?Object(w.jsx)(i.a,{file:e[n.id]}):Object(w.jsx)(i.a,{files:e[n.id]}):Object(w.jsx)("div",{className:"whitespace-nowrap",children:ae(n,e[n.id])}):null},"row-".concat(t,"-col-").concat(c))}))]},"row-".concat(t))})),Object(w.jsx)("tr",{children:Object(w.jsx)("td",{colSpan:M.length+1,children:Object(w.jsx)(C.a,{onChange:function(){var e=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(w.jsx)("div",{className:"w-full"})})})})]})]}),Object(w.jsx)("div",{})]})})]})}},848:function(e,t,n){"use strict";var c=n(19),a=n(1),r=n.n(a),l=n(4),o=n(12),i=n(837),s=n(115),d=n(845),u=n(57),j=n(0),b=n.n(j),f=n(192),m=n(846),x=n(322),h=n.n(x),p=n(2);t.a=function(e){var t=e.collectionType,n=e.onValue,a=(e.ground,b.a.useState(!1)),j=Object(o.a)(a,2),x=j[0],O=j[1],v=Object(f.a)({onSubmit:function(){var e=Object(l.a)(r.a.mark((function e(t,c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=c.resetForm,n(t),O(!1),a();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),initialValues:{value:"",operator:"",fieldId:""},validate:function(e){var t={};return Object.keys(e).forEach((function(n){e[n]||(t[n]="Required")})),t}}),g=v.values,w=v.errors,N=v.handleChange,y=v.submitCount,k=v.handleSubmit,C=v.isSubmitting;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.a,{onClick:function(){return O(!0)},className:"secondaryBackground buttonSecondaryTextColor min-w-unset flex items-center justify-center h-28px px-7 rounded text-sm mr-3 mb-3",children:"Filters"}),x?Object(p.jsx)(i.a,{open:x,children:Object(p.jsx)("div",{className:"fixed left-0 top-0 w-full h-full flex p-7",onMouseDown:function(){return O(!1)},children:Object(p.jsxs)("div",{onMouseDown:function(e){return e.stopPropagation()},className:"bg-white rounded p-7 m-auto relative animate-littlemoveup",style:{maxWidth:600},children:[Object(p.jsx)(h.a,{className:"absolute top-0 right-0 cursor-pointer",onClick:function(){return O(!1)}}),Object(p.jsxs)("div",{className:"flex flex-wrap -mx-2 mb-4",children:[Object(p.jsxs)("div",{className:"sm:w-1/3 w-full mb-3 px-2",children:[Object(p.jsx)(m.a,{ground:"Dialog",className:"mb-2",error:y>0?w.fieldId:null,children:"Field"}),Object(p.jsx)(d.a,{className:"h-34px",ground:"Dialog",name:"fieldId",onChange:N,value:g.fieldId,options:[{value:"",label:"Select"}].concat(Object(c.a)(t.fields.map((function(e){return{value:e.id,label:e.id}}))))})]}),Object(p.jsxs)("div",{className:"sm:w-1/3 w-full mb-3 px-2",children:[Object(p.jsx)(m.a,{ground:"Dialog",className:"mb-2",error:y>0?w.operator:null,children:"Operator"}),Object(p.jsx)(d.a,{className:"h-34px",ground:"Dialog",name:"operator",onChange:N,value:g.operator,options:[{value:"",label:"Select"}].concat(Object(c.a)(["<","<=","==",">",">=","!=","array-contains","array-contains-any","in","not-in"].map((function(e){return{value:e,label:e}}))))})]}),Object(p.jsxs)("div",{className:"sm:w-1/3 w-full mb-3 px-2",children:[Object(p.jsx)(m.a,{ground:"Dialog",className:"mb-2 text-black",error:y>0?w.value:null,children:"Value"}),Object(p.jsx)(s.a,{onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),k())},ground:"Dialog",placeholder:["in","not in","array-contains-any"].includes(g.operator)?"value, value, value":"value",className:"placeholder-black h-34px",value:g.value,onChange:N,name:"value"})]})]}),Object(p.jsx)("div",{className:"flex justify-end",children:Object(p.jsx)(u.a,{disabled:C,onClick:function(){return k()},className:"primaryBackground buttonPrimaryTextColor h-28px min-w-unset px-8",children:"Add"})})]})})}):null]})}},849:function(e,t,n){"use strict";var c=n(0),a=n.n(c),r=n(14),l=n(2),o=Object(c.forwardRef)((function(e,t){return Object(l.jsx)("div",Object(r.a)(Object(r.a)({},e),{},{ref:t}))})),i=n(788),s=function(e){var t=e.src;return Object(l.jsx)(i.a,{arrow:!0,title:Object(l.jsx)("div",{className:"p-1",children:Object(l.jsx)("img",{src:t,className:"max-w-136px max-h-136px w-auto h-auto",alt:""})}),placement:"top",classes:{tooltip:"font-poppins text-xs p-0 rounded bg-white shadow-md",arrow:"text-white"},children:Object(l.jsx)(o,{children:Object(l.jsx)("div",{onClick:function(e){e.stopPropagation(),window.open(t,"_blank")},className:"group w-4 h-4 relative flex items-center justify-center rounded hover:bg-gray-535371 hover:bg-opacity-5 cursor-pointer",children:Object(l.jsx)("div",{className:"relative w-4 h-4 rounded-full bg-center bg-cover pointer-events-none",style:{backgroundImage:"url(".concat(t,")")}})})})})};t.a=function(e){var t=e.files,n=e.file,c=a.a.useRef(Math.random());return Object(l.jsxs)("div",{className:"flex justify-center",children:[(t||(n?[n]:[])).slice(0,4).map((function(e,t){return Object(l.jsx)("div",{className:"mr-0.5",children:Object(l.jsx)(s,{src:e})},"".concat(c,"-file-").concat(t))})),t&&t.length>4?Object(l.jsx)("div",{className:"relative",children:Object(l.jsxs)("div",{className:"w-4 h-4 rounded-full bg-fireck-4 text-10px flex items-center justify-center",children:[t.length-4,"+"]})}):null]})}},861:function(e,t,n){"use strict";var c=n(12),a=n(57),r=n(0),l=n.n(r),o=n(868),i=n.n(o),s=n(845),d=n(190),u=n(852),j=n.n(u),b=n(867),f=n.n(b),m=n(2),x=l.a.memo((function(e){var t,n=e.entity,l=e.enitityPlural,o=e.onAddEntity,u=e.entities,b=e.onSelectEntity,x=e.entityButtons,h=e.onInvokeEntityEdit,p=e.entityContent,O=e.selectedEntityId,v=Object(r.useState)(""),g=Object(c.a)(v,2),w=g[0],N=g[1];return Object(m.jsxs)("div",{className:"h-full flex flex-col",children:[Object(m.jsxs)("div",{className:"flex flex-wrap justify-between mb-4",children:[Object(m.jsx)("div",{className:"font-medium text-27px leading-none mb-4 mr-4 capitalize",children:l}),o?Object(m.jsx)(a.a,{"data-testid":"add-collection-btn",onClick:o,className:"primaryBackground buttonPrimaryTextColor mb-4 min-w-unset",children:Object(m.jsxs)("div",{className:"flex items-center pointer-events-none h-34px",children:[Object(m.jsx)(j.a,{className:"mr-2 text-lg",fontSize:"inherit"}),Object(m.jsxs)("span",{className:"hidden md:block",children:["Add ",n]}),Object(m.jsx)("span",{className:"md:hidden",children:"Add"})]})}):null]}),u.length?Object(m.jsxs)("div",{className:"flex flex-wrap lg:flex-nowrap w-full flex-grow",children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"relative mb-3 mr-4 hidden lg:block",style:{width:180},children:[Object(m.jsx)("div",{className:"h-6 flex items-center left-1 top-0 absolute",children:Object(m.jsx)(f.a,{fontSize:"inherit",className:"text-base text-gray-500 pointer-events-none"})}),Object(m.jsx)("input",{type:"search",spellCheck:!1,placeholder:"Search",className:"placeholder-gray-500 pl-7 h-6 leading-6 hover:bg-fireck-3 focus:bg-fireck-3 w-full text-sm px-2 border-white rounded bg-transparent outline-none focus:outline-none",value:w,onChange:function(e){return N(e.target.value)}})]}),Object(m.jsx)(d.a,{style:{maxHeight:230},className:"max-w-192px w-full flex-shrink-0 mr-4 hidden lg:block groundScrollbar pr-3",autoHide:!1,children:u.filter((function(e){return!w||e.name.toLowerCase().includes(w.toLowerCase())})).map((function(e){return Object(m.jsx)("div",{"data-testid":"entity-name-".concat(e.name),onClick:function(){b(e.docId)},className:"mb-1 capitalize truncate select-none cursor-pointer ".concat(O===e.docId?"primaryBackground buttonPrimaryTextColor":"groundHoverBackground"," rounded h-28px leading-28px px-3"),children:e.name},"entity-".concat(e.docId))}))})]}),Object(m.jsxs)("div",{className:"lg:flex-grow w-full rounded-lg groundContainerBackground p-3 md:p-7 flex flex-col",children:[Object(m.jsxs)("div",{className:"flex justify-between mb-3 flex-wrap",children:[Object(m.jsxs)("div",{className:"font-medium text-22px capitalize mb-3 mr-3",children:[Object(m.jsx)("span",{className:"hidden lg:inline-block",children:(null===(t=u.find((function(e){return e.docId===O})))||void 0===t?void 0:t.name)||""}),Object(m.jsx)("div",{className:"lg:hidden inline-block text-base",children:Object(m.jsx)(s.a,{className:"h-28px",ground:"GroundContainer",onChange:function(e){return b(e.target.value)},value:O,options:u.map((function(e){return{label:e.name,value:e.docId}}))})}),h?Object(m.jsx)(i.a,{"data-testid":"edit-collection-btn",onClick:h,className:"ml-3 text-lg cursor-pointer",fontSize:"inherit"}):null]}),x]}),Object(m.jsx)("div",{className:"flex-grow h-0",children:p})]})]}):Object(m.jsx)("div",{})]})}));t.a=x}}]);
//# sourceMappingURL=10.cd8f5c6b.chunk.js.map