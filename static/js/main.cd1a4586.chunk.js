(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{84:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),r=a.n(c),s=a(10),i=a.n(s),l=(a(84),a(140)),o=a(129),j=a(11),d=a(14),b=a(12),h=a(130),u=a(139),O=a(143),m=a(144),x=a(37),g=a(123),p=a(141),D=a(128),v=function(e){var t=e.handleChangeClass,a=e.course;return Object(n.jsxs)(g.a,{children:[Object(n.jsx)(x.a,{children:"Select Your Classes below"}),a&&Object(n.jsx)(p.a,{onChange:t,children:a.map((function(e){return Object(n.jsxs)(D.a,{value:e,children:[Object(n.jsx)(x.a,{variant:"h6",children:e.name}),Object(n.jsx)(x.a,{variant:"caption",children:"".concat(e.startDate," to ").concat(e.endDate)})]},e.slug)}))})]})},f=a(136),C=a(135),S=a(138),w=a(137),y=a(134),N=a(142),k=a(132),M=a(91),F=a(131),E=a(133),Y=a(62),A=a.n(Y),B=a(63),I=a.n(B),L=Object(o.a)((function(e){return{root:{width:"500px",padding:e.spacing(0,2,4,2)},spacing:{margin:"10px"},divider:{height:"1px",backgroundColor:"#E7E7EA"},content:{marginBottom:e.spacing(2),marginTop:e.spacing(3)},labels:{margin:e.spacing(3,0,3,4),minWidth:e.spacing(10),fontWeight:"500"},schedule:{margin:e.spacing(3,0,0,2),fontWeight:"600"},nested:{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)},button:{float:"right",margin:"5px"}}}));var T=function(e){var t=e.data,a=e.shouldRender,r=L(),s=Object(c.useState)(!0),i=Object(b.a)(s,2),l=i[0],o=i[1],j=Object(c.useState)(!0),d=Object(b.a)(j,2),u=d[0],O=d[1];return Object(n.jsx)("div",{className:r.root,children:a&&Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(N.a,{mt:0,border:1,borderColor:"#E7E7EA",borderRadius:15,children:[Object(n.jsxs)(g.a,{children:[Object(n.jsxs)(h.a,{container:!0,direction:"row",children:[Object(n.jsx)(h.a,{children:Object(n.jsx)(x.a,{className:r.labels,children:"Name"})}),Object(n.jsx)(N.a,{className:r.spacing}),Object(n.jsx)(h.a,{children:Object(n.jsx)(F.a,{className:r.content,children:t.name})})]}),Object(n.jsx)(k.a,{className:r.divider}),Object(n.jsxs)(h.a,{container:!0,direction:"row",children:[Object(n.jsx)(h.a,{children:Object(n.jsxs)(x.a,{className:r.labels,children:["Email Address"," "]})}),Object(n.jsx)(N.a,{className:r.spacing}),Object(n.jsx)(h.a,{children:Object(n.jsxs)(F.a,{className:r.content,children:[t.email," "]})})]}),Object(n.jsx)(k.a,{className:r.divider}),Object(n.jsxs)(h.a,{container:!0,direction:"row",children:[Object(n.jsx)(h.a,{children:Object(n.jsx)(x.a,{className:r.labels,children:"Birthday "})}),Object(n.jsx)(N.a,{className:r.spacing}),Object(n.jsx)(h.a,{children:Object(n.jsxs)(F.a,{className:r.content,children:[t.birthday," "]})})]}),Object(n.jsx)(k.a,{className:r.divider}),Object(n.jsxs)(h.a,{container:!0,direction:"row",children:[Object(n.jsxs)(h.a,{children:[Object(n.jsxs)(M.a,{button:!0,onClick:function(){o(!l)},children:[Object(n.jsx)(F.a,{className:r.schedule,primary:"Scheduled Classes"}),l?Object(n.jsx)(A.a,{}):Object(n.jsx)(I.a,{})]}),Object(n.jsx)(E.a,{in:l,timeout:"auto",unmountOnExit:!0,children:Object(n.jsx)(g.a,{children:t.schedule.map((function(e){return Object(n.jsxs)(M.a,{button:!0,className:r.nested,children:[Object(n.jsx)(h.a,{direction:"row",item:!0,md:10,children:Object(n.jsx)(x.a,{variant:"h6",children:e.name})}),Object(n.jsx)(F.a,{children:"".concat(e.startDate," to ").concat(e.endDate)})]})}))})})]}),Object(n.jsx)(N.a,{className:r.spacing})]})]}),Object(n.jsx)(y.a,{size:"small",onClick:function(){var e="text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(t)));O(e)},className:r.button,variant:"outlined",color:"primary",href:"data: ".concat(u),download:"data.json",children:"Download JSON"})]})})})},R=function(e,t){return!!/^\d+$/.test(t)&&("birthDay"===e?t>=1&&t<=31:"birthMonth"===e?/^(0[1-9]|1[012])$/.test(t):4===t.length)},q={subjects:["Sports","Art","Literature","Music"],dates:{sports:[{name:"Sports 100",slug:"spt100",startDate:new Date("2020-07-23").toDateString(),endDate:new Date("2020-08-26").toDateString()},{name:"Sports 101",slug:"spt101",startDate:new Date("2020-08-26").toDateString(),endDate:new Date("2020-09-26").toDateString()}],art:[{name:"Art 100",slug:"art100",startDate:new Date("2020-05-10").toDateString(),endDate:new Date("2020-06-10").toDateString()},{name:"Art 101",slug:"art101",startDate:new Date("2020-07-11").toDateString(),endDate:new Date("2020-08-11").toDateString()}],literature:[{name:"Literature 100",slug:"lit100",startDate:new Date("2020-07-11").toDateString(),endDate:new Date("2020-10-11").toDateString()}],music:[{name:"Music 100",slug:"msc100",startDate:new Date("2020-06-09").toDateString(),endDate:new Date("2020-07-09").toDateString()},{name:"Music 101",slug:"msc101",startDate:new Date("2020-08-09").toDateString(),endDate:new Date("2020-09-09").toDateString()}]}},P=Object(o.a)((function(e){return{root:{display:"flex"},form:{width:"500px",marginLeft:"5px"},previewButton:{margin:"5px"},cancelButton:{margin:"5px"},textField:{width:"245px",margin:"5px"},birthdayField:{width:"75px",margin:"5px"}}}));var J=function(){var e=P(),t=Object(c.useState)(!1),a=Object(b.a)(t,2),r=a[0],s=a[1],i=Object(c.useState)(!1),l=Object(b.a)(i,2),o=l[0],x=l[1],g=Object(c.useState)(!1),p=Object(b.a)(g,2),D=p[0],N=p[1],k=Object(c.useState)(!1),M=Object(b.a)(k,2),F=M[0],E=M[1],Y=Object(c.useState)(!1),A=Object(b.a)(Y,2),B=A[0],I=A[1],L=Object(c.useState)({subjects:{sportsCheck:!1,artCheck:!1,literatureCheck:!1,musicCheck:!1}}),J=Object(b.a)(L,2),W=J[0],$=J[1],z=Object(c.useState)({name:"",email:"email@email.com",birthday:"",schedule:[],birthMonth:"",birthDay:"",birthYear:""}),H=Object(b.a)(z,2),U=H[0],G=H[1],K=W.subjects,Q=K.sportsCheck,V=K.artCheck,X=K.literatureCheck,Z=K.musicCheck,_=!/\S+@\S+\.\S+/.test(U.email),ee=!_&&!F&&!o&&!D,te=function(e){var t=e.target,a=t.name,n=t.value;if("birthMonth"===a){var c=R(a,n);x(!c),G(Object(d.a)(Object(d.a)({},U),{},Object(j.a)({},a,n)))}else if("birthDay"===a){var r=R(a,n);N(!r),G(Object(d.a)(Object(d.a)({},U),{},Object(j.a)({},a,n)))}else if("birthYear"===a){var s=R(a,n);E(!s),G(Object(d.a)(Object(d.a)({},U),{},Object(j.a)({},a,n)))}else G(Object(d.a)(Object(d.a)({},U),{},Object(j.a)({},a,n)))},ae=function(e){var t=W.subjects,a=e.target,n=a.checked;t[a.name]=n,$(Object(d.a)(Object(d.a)({},U),{},{subjects:t}))},ne=function(e){var t=e.target.value,a=U.schedule;if(0===a.length)return a.push(t),void G(Object(d.a)(Object(d.a)({},U),{},{schedule:a}));a.length>=1&&(function(e,t){if(0!==e.filter((function(e){return e.slug.slice(0,3)===t.slug.slice(0,3)})).length)return!1;for(var a=0;a<e.length;a++){var n=e[a],c=Date.parse(t.startDate),r=Date.parse(t.endDate),s=Date.parse(n.startDate),i=Date.parse(n.endDate);if(s<r&&c<i)return!1}return!0}(U.schedule,t)?a.push(t):I(!0));G(Object(d.a)(Object(d.a)({},U),{},{schedule:a}))};return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault();var t=U.birthMonth,a=U.birthDay,n=U.birthYear,c="".concat(t,"/").concat(a,"/").concat(n);0===U.schedule.length&&I(!0),G(Object(d.a)(Object(d.a)({},U),{},{birthday:c,birthMonth:void 0,birthDay:void 0,birthYear:void 0})),s(!0)},autoComplete:"off",children:[Object(n.jsxs)(h.a,{container:!0,children:[Object(n.jsxs)(h.a,{item:!0,md:4,children:[Object(n.jsx)(m.a,{className:e.textField,onChange:te,required:!0,label:"Name",variant:"outlined",name:"name",value:U.name}),Object(n.jsx)(m.a,{className:e.textField,required:!0,name:"email",onChange:te,label:"Email Address",variant:"outlined",error:_,helperText:_?"Invalid Email address":null,value:U.email})]}),Object(n.jsxs)(h.a,{item:!0,md:12,direction:"row",children:[Object(n.jsx)(m.a,{className:e.birthdayField,onChange:te,label:"Month",variant:"outlined",name:"birthMonth",required:!0,error:o,helperText:o?"Invalid Month":null,value:U.birthMonth}),Object(n.jsx)(m.a,{className:e.birthdayField,onChange:te,label:"Day",required:!0,variant:"outlined",name:"birthDay",error:D,helperText:D?"Invalid Day":null,value:U.birthDay}),Object(n.jsx)(m.a,{required:!0,className:e.birthdayField,onChange:te,label:"Year",variant:"outlined",name:"birthYear",error:F,helperText:F?" Invalid Year":null,value:U.birthYear})]}),Object(n.jsxs)(C.a,{component:"fieldset",error:B,children:[Object(n.jsx)(f.a,{component:"legend",children:"Select Classes"}),B&&Object(n.jsx)(w.a,{children:"Scheduling conflict! Please select a class or reset form and try again"}),Object(n.jsxs)(S.a,{children:[Object(n.jsx)(w.a,{children:"You may select 1 class per area of study. Please ensure class dates do not overlap"}),Object(n.jsx)(u.a,{control:Object(n.jsx)(O.a,{checked:Q,onChange:ae,name:"sportsCheck"}),label:"Sports"}),Q&&Object(n.jsx)(v,{data:U,handleChangeClass:ne,course:q.dates.sports}),Object(n.jsx)(u.a,{control:Object(n.jsx)(O.a,{checked:V,onChange:ae,name:"artCheck"}),label:"Art"}),V&&Object(n.jsx)(v,{data:U,handleChangeClass:ne,course:q.dates.art}),Object(n.jsx)(u.a,{control:Object(n.jsx)(O.a,{checked:X,onChange:ae,name:"literatureCheck"}),label:"Literature"}),X&&Object(n.jsx)(v,{data:U,handleChangeClass:ne,course:q.dates.literature}),Object(n.jsx)(u.a,{control:Object(n.jsx)(O.a,{checked:Z,onChange:ae,name:"musicCheck"}),label:"Music"}),Z&&Object(n.jsx)(v,{data:U,handleChangeClass:ne,course:q.dates.music})]})]})]}),Object(n.jsx)(y.a,{className:e.cancelButton,onClick:function(e){e.preventDefault(),$({subjects:{sportsCheck:!1,artCheck:!1,literatureCheck:!1,musicCheck:!1}}),G({name:"",email:"email@email.com",birthday:"",schedule:[],birthMonth:"",birthDay:"",birthYear:""}),I(!1),E(!1),x(!1),x(!1),s(!1)},variant:"outlined",color:"secondary",children:"Reset"}),Object(n.jsx)(y.a,{className:e.previewButton,variant:"outlined",color:"primary",disabled:!ee,type:"submit",children:"Preview"})]}),Object(n.jsx)(T,{data:U,shouldRender:r})]})},W=Object(o.a)((function(){return{root:{backgroundColor:"#ffff",display:"flex"}}}));var $=function(){var e=W();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsxs)(l.a,{maxWidth:"xl",children:[Object(n.jsx)("h1",{children:"Hello Media Alpha"}),Object(n.jsx)(J,{})]})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,147)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)($,{})}),document.getElementById("root")),z()}},[[89,1,2]]]);
//# sourceMappingURL=main.cd1a4586.chunk.js.map