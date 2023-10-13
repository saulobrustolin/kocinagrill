"use strict";(self.webpackChunkapp_hcapp=self.webpackChunkapp_hcapp||[]).push([[412,908,626,885,852],{4412:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var i=t(9439),s=t(2791),c=t(2927),r=t(6133),l=t(4018),o=t(7834),d=t(2968),a=t(6647),x=t(7737),u=t(2908),h=t(1626),j=t(4885),f=t(8852),Z=t(184);function p(){var e=(0,d.Z)().language;(0,a.Z)(x.Z[e].title);var n=(0,l.Z)().app,t=(0,o.Z)().user,p=(0,s.useState)([]),m=(0,i.Z)(p,2),g=m[0],v=m[1],k=(0,s.useState)(!0),b=(0,i.Z)(k,2),C=b[0],y=b[1];(0,s.useEffect)((function(){n&&t&&t.id&&r.Z.get("notifications").then((function(e){e.data.length>0&&v(e.data),y(!1),e.data.map((function(e){return e.read.includes(t.id)||r.Z.patch("/notifications/".concat(e.id,"/read")),!0}))}))}),[n,t]);var E={initial:(0,Z.jsx)(f.default,{loading:C,app:n,list:g}),Artiffy:(0,Z.jsx)(u.default,{loading:C,app:n,list:g}),Blue:(0,Z.jsx)(h.default,{loading:C,app:n,list:g}),Hacker:(0,Z.jsx)(j.default,{loading:C,app:n,list:g})};return(0,Z.jsx)(s.Fragment,{children:n?(0,Z.jsx)(s.Fragment,{children:E[n.theme]}):(0,Z.jsx)(c.Z,{})})}},2908:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});t(2791);var i=t(3385),s=t(4554),c=t(3044),r=t(7924),l=t(3239),o=t(6129),d=t(7785),a=t(6133),x=t(7834),u=t(2968),h=t(7737),j=t(184);function f(e){var n=e.app,t=e.list,f=e.loading,Z=(0,x.Z)().user,p=(0,u.Z)().language;return(0,j.jsx)(s.Z,{pt:4,pb:13,children:f?(0,j.jsx)(s.Z,{textAlign:"center",pt:1,children:(0,j.jsx)(l.Z,{})}):(0,j.jsxs)(j.Fragment,{children:[0===t.length&&(0,j.jsx)(o.Z,{justifyContent:"center",sx:{mt:3},children:(0,j.jsx)(d.nv,{color:"text.disabled",children:h.Z[p].zeroNotifications})}),t.map((function(e,t){return(0,j.jsxs)(s.Z,{children:[(0,j.jsxs)(s.Z,{sx:{cursor:"pointer"},onClick:function(){return function(e){if(e.clicked.includes(Z.id)||a.Z.patch("/notifications/".concat(e.id,"/clicked")),e.link){var n=document.createElement("a");n.href=e.link,n.click()}}(e)},children:[(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(o.Z,{justifyContent:"center",alignItems:"center",children:(0,j.jsx)(c.Z,{sx:{width:30,height:30},src:null===n||void 0===n?void 0:n.logo64})}),(0,j.jsxs)(s.Z,{ml:2,children:[(0,j.jsx)(d.H4,{children:e.title}),(0,j.jsx)(d.nv,{color:"text.disabled",children:e.message})]})]}),(0,j.jsxs)(o.Z,{mt:2,justifyContent:"end",children:[(0,j.jsx)(d.YE,{color:"text.disabled",children:new Date(e.createdAt).toLocaleDateString()}),e.link&&(0,j.jsxs)(d.YE,{sx:{ml:2},children:[h.Z[p].open,(0,j.jsx)(i.Z,{sx:{fontSize:"11px",mb:"-2px",ml:"5px"}})]})]})]}),(0,j.jsx)(r.Z,{sx:{mb:2,mt:2}})]},t)}))]})})}},1626:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});t(2791);var i=t(3385),s=t(4554),c=t(3044),r=t(7924),l=t(3239),o=t(6129),d=t(7785),a=t(6133),x=t(7834),u=t(2968),h=t(7737),j=t(184);function f(e){var n=e.app,t=e.list,f=e.loading,Z=(0,x.Z)().user,p=(0,u.Z)().language;return(0,j.jsx)(s.Z,{pt:4,pb:13,children:f?(0,j.jsx)(s.Z,{textAlign:"center",pt:1,children:(0,j.jsx)(l.Z,{})}):(0,j.jsxs)(j.Fragment,{children:[0===t.length&&(0,j.jsx)(o.Z,{justifyContent:"center",sx:{mt:3},children:(0,j.jsx)(d.nv,{color:"text.disabled",children:h.Z[p].zeroNotifications})}),t.map((function(e,t){return(0,j.jsxs)(s.Z,{children:[(0,j.jsxs)(s.Z,{sx:{cursor:"pointer"},onClick:function(){return function(e){if(e.clicked.includes(Z.id)||a.Z.patch("/notifications/".concat(e.id,"/clicked")),e.link){var n=document.createElement("a");n.href=e.link,n.click()}}(e)},children:[(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(o.Z,{justifyContent:"center",alignItems:"center",children:(0,j.jsx)(c.Z,{sx:{width:30,height:30},src:null===n||void 0===n?void 0:n.logo64})}),(0,j.jsxs)(s.Z,{ml:2,children:[(0,j.jsx)(d.H4,{children:e.title}),(0,j.jsx)(d.nv,{color:"text.disabled",children:e.message})]})]}),(0,j.jsxs)(o.Z,{mt:2,justifyContent:"end",children:[(0,j.jsx)(d.YE,{color:"text.disabled",children:new Date(e.createdAt).toLocaleDateString()}),e.link&&(0,j.jsxs)(d.YE,{sx:{ml:2},children:[h.Z[p].open,(0,j.jsx)(i.Z,{sx:{fontSize:"11px",mb:"-2px",ml:"5px"}})]})]})]}),(0,j.jsx)(r.Z,{sx:{mb:2,mt:2}})]},t)}))]})})}},4885:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});t(2791);var i=t(3385),s=t(4554),c=t(3044),r=t(7924),l=t(3239),o=t(6129),d=t(7785),a=t(6133),x=t(7834),u=t(2968),h=t(7737),j=t(184);function f(e){var n=e.app,t=e.list,f=e.loading,Z=(0,x.Z)().user,p=(0,u.Z)().language;return(0,j.jsx)(s.Z,{pt:4,pb:13,children:f?(0,j.jsx)(s.Z,{textAlign:"center",pt:1,children:(0,j.jsx)(l.Z,{})}):(0,j.jsxs)(j.Fragment,{children:[0===t.length&&(0,j.jsx)(o.Z,{justifyContent:"center",sx:{mt:3},children:(0,j.jsx)(d.nv,{color:"text.disabled",children:h.Z[p].zeroNotifications})}),t.map((function(e,t){return(0,j.jsxs)(s.Z,{children:[(0,j.jsxs)(s.Z,{sx:{cursor:"pointer"},onClick:function(){return function(e){if(e.clicked.includes(Z.id)||a.Z.patch("/notifications/".concat(e.id,"/clicked")),e.link){var n=document.createElement("a");n.href=e.link,n.click()}}(e)},children:[(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(o.Z,{justifyContent:"center",alignItems:"center",children:(0,j.jsx)(c.Z,{sx:{width:30,height:30},src:null===n||void 0===n?void 0:n.logo64})}),(0,j.jsxs)(s.Z,{ml:2,children:[(0,j.jsx)(d.H4,{children:e.title}),(0,j.jsx)(d.nv,{color:"text.disabled",children:e.message})]})]}),(0,j.jsxs)(o.Z,{mt:2,justifyContent:"end",children:[(0,j.jsx)(d.YE,{color:"text.disabled",children:new Date(e.createdAt).toLocaleDateString()}),e.link&&(0,j.jsxs)(d.YE,{sx:{ml:2},children:[h.Z[p].open,(0,j.jsx)(i.Z,{sx:{fontSize:"11px",mb:"-2px",ml:"5px"}})]})]})]}),(0,j.jsx)(r.Z,{sx:{mb:2,mt:2}})]},t)}))]})})}},8852:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});t(2791);var i=t(3385),s=t(4554),c=t(3044),r=t(7924),l=t(3239),o=t(6129),d=t(7785),a=t(6133),x=t(7834),u=t(2968),h=t(7737),j=t(184);function f(e){var n=e.app,t=e.list,f=e.loading,Z=(0,x.Z)().user,p=(0,u.Z)().language;return(0,j.jsx)(s.Z,{pt:4,pb:13,children:f?(0,j.jsx)(s.Z,{textAlign:"center",pt:1,children:(0,j.jsx)(l.Z,{})}):(0,j.jsxs)(j.Fragment,{children:[0===t.length&&(0,j.jsx)(o.Z,{justifyContent:"center",sx:{mt:3},children:(0,j.jsx)(d.nv,{color:"text.disabled",children:h.Z[p].zeroNotifications})}),t.map((function(e,t){return(0,j.jsxs)(s.Z,{children:[(0,j.jsxs)(s.Z,{sx:{cursor:"pointer"},onClick:function(){return function(e){if(e.clicked.includes(Z.id)||a.Z.patch("/notifications/".concat(e.id,"/clicked")),e.link){var n=document.createElement("a");n.href=e.link,n.click()}}(e)},children:[(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(o.Z,{justifyContent:"center",alignItems:"center",children:(0,j.jsx)(c.Z,{sx:{width:30,height:30},src:null===n||void 0===n?void 0:n.logo64})}),(0,j.jsxs)(s.Z,{ml:2,children:[(0,j.jsx)(d.H4,{children:e.title}),(0,j.jsx)(d.nv,{color:"text.disabled",children:e.message})]})]}),(0,j.jsxs)(o.Z,{mt:2,justifyContent:"end",children:[(0,j.jsx)(d.YE,{color:"text.disabled",children:new Date(e.createdAt).toLocaleDateString()}),e.link&&(0,j.jsxs)(d.YE,{sx:{ml:2},children:[h.Z[p].open,(0,j.jsx)(i.Z,{sx:{fontSize:"11px",mb:"-2px",ml:"5px"}})]})]})]}),(0,j.jsx)(r.Z,{sx:{mb:2,mt:2}})]},t)}))]})})}},7737:function(e,n){n.Z={"pt-BR":{title:"Notifica\xe7\xf5es",zeroNotifications:"Sem notifica\xe7\xf5es no momento.",open:"Abrir"},es:{title:"Notificaciones",zeroNotifications:"Sin notificaciones en este momento.",open:"Abrir"}}},3385:function(e,n,t){var i=t(4836);n.Z=void 0;var s=i(t(5649)),c=t(184),r=(0,s.default)((0,c.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");n.Z=r}}]);
//# sourceMappingURL=412.a7847af6.chunk.js.map