"use strict";(self.webpackChunkapp_hcapp=self.webpackChunkapp_hcapp||[]).push([[345,285,359,482,646],{5345:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var i=t(9439),r=t(2791),o=t(7689),s=t(4018),l=t(2968),a=t(6647),u=t(3028),c=t(3285),d=t(359),p=t(482),f=t(8250),v=t(184);function x(){var e=(0,l.Z)().language;(0,a.Z)(u.Z[e].title);var n=(0,s.Z)().app,t=(0,o.s0)(),x=(0,r.useState)(void 0),h=(0,i.Z)(x,2),Z=h[0],m=h[1];(0,r.useEffect)((function(){if(n&&n.resources){var e=n.resources.stories;e&&e.actived&&"paid"===e.payment?m(e):t("/".concat(n.slug,"/app"))}}),[n]);var g={initial:(0,v.jsx)(f.default,{app:n,signalsResults:Z}),Artiffy:(0,v.jsx)(c.default,{app:n,signalsResults:Z}),Blue:(0,v.jsx)(d.default,{app:n,signalsResults:Z}),Hacker:(0,v.jsx)(p.default,{app:n,signalsResults:Z})};return(0,v.jsx)(r.Fragment,{children:n&&Z&&(0,v.jsx)(r.Fragment,{children:g[n.theme]})})}},3285:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var i=t(4165),r=t(5861),o=t(9439),s=t(2791),l=t(225),a=t(7394),u=t(8264),c=t(2885),d=t(4554),p=t(3400),f=t(1918),v=t(6129),x=t(7785),h=t(6133),Z=t(4018),m=t(2968),g=t(3028),b=t(184);function j(){var e,n,t=(0,Z.Z)().app,l=(0,m.Z)().language,j=(0,s.useState)([]),S=(0,o.Z)(j,2),C=S[0],z=S[1],y=(0,s.useState)(0),R=(0,o.Z)(y,2),M=R[0],A=R[1];(0,s.useEffect)((function(){var e,n,i,r,o;null!==t&&void 0!==t&&null!==(e=t.resources)&&void 0!==e&&null!==(n=e.stories)&&void 0!==n&&n.images&&z(null===t||void 0===t||null===(r=t.resources)||void 0===r||null===(o=r.stories)||void 0===o?void 0:o.images);E(null===(i=C[0])||void 0===i?void 0:i.timestamp)}),[t]);var E=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={timestamp:String(n)},e.prev=1,e.next=4,h.Z.patch("/resources/stories/views",t).then((function(e){}));case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}();return(0,b.jsx)(d.Z,{pt:3,pb:13,children:0!==C.length?(0,b.jsxs)(v.Z,{children:[(0,b.jsx)(p.Z,{onClick:function(){M>0&&(A(M-1),E(C[M-1].timestamp))},disabled:0===M,children:(0,b.jsx)(a.Z,{})}),(0,b.jsx)(k,{sx:{backgroundImage:"url(".concat((null===(e=C[M])||void 0===e?void 0:e.url)||"",")")},children:(null===(n=C[M])||void 0===n?void 0:n.link)&&(0,b.jsxs)(w,{children:[(0,b.jsx)(v.Z,{sx:{mb:.5,justifyContent:"center"},children:(0,b.jsx)(c.Z,{sx:{fontSize:"14px",color:"white"}})}),(0,b.jsx)(f.Z,{onClick:function(){var e,n;return n=null===(e=C[M])||void 0===e?void 0:e.link,void window.open(n,"_blank")},label:g.Z[l].knowMore,size:"small",sx:{height:"35px",borderRadius:"20px",color:"white",backgroundColor:"#ffffff57"}})]})}),(0,b.jsx)(p.Z,{onClick:function(){M<C.length-1&&(A(M+1),E(C[M+1].timestamp))},disabled:M===C.length-1,children:(0,b.jsx)(u.Z,{})})]}):(0,b.jsx)(v.Z,{justifyContent:"center",sx:{mt:3},children:(0,b.jsx)(x.nv,{color:"text.disabled",children:g.Z[l].noStoriesAtMoment})})})}var k=(0,l.Z)(d.Z)((function(){return{height:430,width:300,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"relative"}})),w=(0,l.Z)(d.Z)((function(){return{position:"absolute",bottom:"-25px",left:"50%",transform:"translateX(-50%)",fontSize:"14px",padding:"6px 8px"}}))},359:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var i=t(4165),r=t(5861),o=t(9439),s=t(2791),l=t(225),a=t(7394),u=t(8264),c=t(2885),d=t(4554),p=t(3400),f=t(1918),v=t(6129),x=t(7785),h=t(6133),Z=t(4018),m=t(2968),g=t(3028),b=t(184);function j(){var e,n,t=(0,Z.Z)().app,l=(0,m.Z)().language,j=(0,s.useState)([]),S=(0,o.Z)(j,2),C=S[0],z=S[1],y=(0,s.useState)(0),R=(0,o.Z)(y,2),M=R[0],A=R[1];(0,s.useEffect)((function(){var e,n,i,r,o;null!==t&&void 0!==t&&null!==(e=t.resources)&&void 0!==e&&null!==(n=e.stories)&&void 0!==n&&n.images&&z(null===t||void 0===t||null===(r=t.resources)||void 0===r||null===(o=r.stories)||void 0===o?void 0:o.images);E(null===(i=C[0])||void 0===i?void 0:i.timestamp)}),[t]);var E=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={timestamp:String(n)},e.prev=1,e.next=4,h.Z.patch("/resources/stories/views",t).then((function(e){}));case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}();return(0,b.jsx)(d.Z,{pt:3,pb:13,children:0!==C.length?(0,b.jsxs)(v.Z,{children:[(0,b.jsx)(p.Z,{onClick:function(){M>0&&(A(M-1),E(C[M-1].timestamp))},disabled:0===M,children:(0,b.jsx)(a.Z,{})}),(0,b.jsx)(k,{sx:{backgroundImage:"url(".concat((null===(e=C[M])||void 0===e?void 0:e.url)||"",")")},children:(null===(n=C[M])||void 0===n?void 0:n.link)&&(0,b.jsxs)(w,{children:[(0,b.jsx)(v.Z,{sx:{mb:.5,justifyContent:"center"},children:(0,b.jsx)(c.Z,{sx:{fontSize:"14px",color:"white"}})}),(0,b.jsx)(f.Z,{onClick:function(){var e,n;return n=null===(e=C[M])||void 0===e?void 0:e.link,void window.open(n,"_blank")},label:g.Z[l].knowMore,size:"small",sx:{height:"35px",borderRadius:"20px",color:"white",backgroundColor:"#ffffff57"}})]})}),(0,b.jsx)(p.Z,{onClick:function(){M<C.length-1&&(A(M+1),E(C[M+1].timestamp))},disabled:M===C.length-1,children:(0,b.jsx)(u.Z,{})})]}):(0,b.jsx)(v.Z,{justifyContent:"center",sx:{mt:3},children:(0,b.jsx)(x.nv,{color:"text.disabled",children:g.Z[l].noStoriesAtMoment})})})}var k=(0,l.Z)(d.Z)((function(){return{height:430,width:300,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"relative"}})),w=(0,l.Z)(d.Z)((function(){return{position:"absolute",bottom:"-25px",left:"50%",transform:"translateX(-50%)",fontSize:"14px",padding:"6px 8px"}}))},482:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var i=t(4165),r=t(5861),o=t(9439),s=t(2791),l=t(225),a=t(7394),u=t(8264),c=t(2885),d=t(4554),p=t(3400),f=t(1918),v=t(6129),x=t(7785),h=t(6133),Z=t(4018),m=t(2968),g=t(3028),b=t(184);function j(){var e,n,t=(0,Z.Z)().app,l=(0,m.Z)().language,j=(0,s.useState)([]),S=(0,o.Z)(j,2),C=S[0],z=S[1],y=(0,s.useState)(0),R=(0,o.Z)(y,2),M=R[0],A=R[1];(0,s.useEffect)((function(){var e,n,i,r,o;null!==t&&void 0!==t&&null!==(e=t.resources)&&void 0!==e&&null!==(n=e.stories)&&void 0!==n&&n.images&&z(null===t||void 0===t||null===(r=t.resources)||void 0===r||null===(o=r.stories)||void 0===o?void 0:o.images);E(null===(i=C[0])||void 0===i?void 0:i.timestamp)}),[t]);var E=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={timestamp:String(n)},e.prev=1,e.next=4,h.Z.patch("/resources/stories/views",t).then((function(e){}));case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}();return(0,b.jsx)(d.Z,{pt:3,pb:13,children:0!==C.length?(0,b.jsxs)(v.Z,{children:[(0,b.jsx)(p.Z,{onClick:function(){M>0&&(A(M-1),E(C[M-1].timestamp))},disabled:0===M,children:(0,b.jsx)(a.Z,{})}),(0,b.jsx)(k,{sx:{backgroundImage:"url(".concat((null===(e=C[M])||void 0===e?void 0:e.url)||"",")")},children:(null===(n=C[M])||void 0===n?void 0:n.link)&&(0,b.jsxs)(w,{children:[(0,b.jsx)(v.Z,{sx:{mb:.5,justifyContent:"center"},children:(0,b.jsx)(c.Z,{sx:{fontSize:"14px",color:"white"}})}),(0,b.jsx)(f.Z,{onClick:function(){var e,n;return n=null===(e=C[M])||void 0===e?void 0:e.link,void window.open(n,"_blank")},label:g.Z[l].knowMore,size:"small",sx:{height:"35px",borderRadius:"20px",color:"white",backgroundColor:"#ffffff57"}})]})}),(0,b.jsx)(p.Z,{onClick:function(){M<C.length-1&&(A(M+1),E(C[M+1].timestamp))},disabled:M===C.length-1,children:(0,b.jsx)(u.Z,{})})]}):(0,b.jsx)(v.Z,{justifyContent:"center",sx:{mt:3},children:(0,b.jsx)(x.nv,{color:"text.disabled",children:g.Z[l].noStoriesAtMoment})})})}var k=(0,l.Z)(d.Z)((function(){return{height:430,width:300,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"relative"}})),w=(0,l.Z)(d.Z)((function(){return{position:"absolute",bottom:"-25px",left:"50%",transform:"translateX(-50%)",fontSize:"14px",padding:"6px 8px"}}))},8250:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var i=t(4165),r=t(5861),o=t(9439),s=t(2791),l=t(225),a=t(7394),u=t(8264),c=t(2885),d=t(4554),p=t(3400),f=t(1918),v=t(6129),x=t(7785),h=t(6133),Z=t(4018),m=t(2968),g=t(3028),b=t(184);function j(){var e,n,t=(0,Z.Z)().app,l=(0,m.Z)().language,j=(0,s.useState)([]),S=(0,o.Z)(j,2),C=S[0],z=S[1],y=(0,s.useState)(0),R=(0,o.Z)(y,2),M=R[0],A=R[1];(0,s.useEffect)((function(){var e,n,i,r,o;null!==t&&void 0!==t&&null!==(e=t.resources)&&void 0!==e&&null!==(n=e.stories)&&void 0!==n&&n.images&&z(null===t||void 0===t||null===(r=t.resources)||void 0===r||null===(o=r.stories)||void 0===o?void 0:o.images);E(null===(i=C[0])||void 0===i?void 0:i.timestamp)}),[t]);var E=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={timestamp:String(n)},e.prev=1,e.next=4,h.Z.patch("/resources/stories/views",t).then((function(e){}));case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}();return(0,b.jsx)(d.Z,{pt:3,pb:13,children:0!==C.length?(0,b.jsxs)(v.Z,{children:[(0,b.jsx)(p.Z,{onClick:function(){M>0&&(A(M-1),E(C[M-1].timestamp))},disabled:0===M,children:(0,b.jsx)(a.Z,{})}),(0,b.jsx)(k,{sx:{backgroundImage:"url(".concat((null===(e=C[M])||void 0===e?void 0:e.url)||"",")")},children:(null===(n=C[M])||void 0===n?void 0:n.link)&&(0,b.jsxs)(w,{children:[(0,b.jsx)(v.Z,{sx:{mb:.5,justifyContent:"center"},children:(0,b.jsx)(c.Z,{sx:{fontSize:"14px",color:"white"}})}),(0,b.jsx)(f.Z,{onClick:function(){var e,n;return n=null===(e=C[M])||void 0===e?void 0:e.link,void window.open(n,"_blank")},label:g.Z[l].knowMore,size:"small",sx:{height:"35px",borderRadius:"20px",color:"white",backgroundColor:"#ffffff57"}})]})}),(0,b.jsx)(p.Z,{onClick:function(){M<C.length-1&&(A(M+1),E(C[M+1].timestamp))},disabled:M===C.length-1,children:(0,b.jsx)(u.Z,{})})]}):(0,b.jsx)(v.Z,{justifyContent:"center",sx:{mt:3},children:(0,b.jsx)(x.nv,{color:"text.disabled",children:g.Z[l].noStoriesAtMoment})})})}var k=(0,l.Z)(d.Z)((function(){return{height:430,width:300,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"relative"}})),w=(0,l.Z)(d.Z)((function(){return{position:"absolute",bottom:"-25px",left:"50%",transform:"translateX(-50%)",fontSize:"14px",padding:"6px 8px"}}))},3028:function(e,n){n.Z={"pt-BR":{title:"Stories",knowMore:"Saiba mais",noStoriesAtMoment:"Sem Stories no momento."},es:{title:"Stories",knowMore:"Saber m\xe1s",noStoriesAtMoment:"No hay stories en este momento."}}},2885:function(e,n,t){var i=t(4836);n.Z=void 0;var r=i(t(5649)),o=t(184),s=(0,r.default)((0,o.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");n.Z=s}}]);
//# sourceMappingURL=345.a21e48d6.chunk.js.map