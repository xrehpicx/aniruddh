(this.webpackJsonpaniruddh=this.webpackJsonpaniruddh||[]).push([[0],{111:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),o=(n(63),n(17)),u=n.n(o),s=n(24),l=n(5),m=n(54),f=n(18),d=n(20),h=n(11),p=n(30),b=n(29),v=n.n(b),w=n(49);n(93);function g(e){return[e.pop()].concat(Object(h.a)(e))}var E=function(e){var t=e.edges,n=function(e,t,n){var r=function(){return t[e.findIndex((function(e){return matchMedia(e).matches}))]||n},c=Object(a.useState)(r),i=Object(l.a)(c,2),o=i[0],u=i[1];return Object(a.useEffect)((function(){var e=function(){return u(r)};return window.addEventListener("resize",e),function(){return window.removeEventListener(e)}}),[]),o}(["(min-width: 2400px)","(min-width: 1900px)","(min-width: 1500px)","(min-width: 1000px)","(min-width: 600px)"],[6,5,4,3,2],1),c=function(){var e=Object(a.useRef)(),t=Object(a.useState)({left:0,top:0,width:0,height:0}),n=Object(l.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)((function(){return new w.a((function(e){var t=Object(l.a)(e,1)[0];return c(t.contentRect)}))})),o=Object(l.a)(i,1)[0];return Object(a.useEffect)((function(){return o.observe(e.current),o.disconnect}),[o]),[{ref:e},r]}(),i=Object(l.a)(c,2),o=i[0],b=i[1].width,E=Object(a.useState)([]),j=Object(l.a)(E,2),O=j[0],y=j[1],_=Object(a.useState)(1!==n),x=Object(l.a)(_,2),k=x[0],I=(x[1],Object(a.useState)(!1)),F=Object(l.a)(I,2),S=F[0],N=F[1];Object(a.useEffect)((function(){Object(s.a)(u.a.mark((function e(){var n,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=Object(d.a)(t);try{for(a.s();!(r=a.n()).done;)c=r.value,n.push(Object(f.a)(Object(f.a)({css:"url(".concat(c.node.display_url,")")},c.node.dimensions),{},{code:c.node.shortcode}))}catch(i){a.e(i)}finally{a.f()}y(n);case 4:case"end":return e.stop()}}),e)})))()}),[t]),Object(a.useEffect)((function(){var e=setInterval((function(){return y(g)}),3e3),t=setInterval((function(){return y(v.a)}),1e4);if(!k)try{clearInterval(e),clearInterval(t)}catch(r){}var n=setInterval((function(){return y(v.a)}),3e3);if(S)try{clearInterval(e),clearInterval(t)}catch(r){}else clearInterval(n);var a=function(e){document.fullscreenElement?N(!0):N(!1)};return document.addEventListener("fullscreenchange",a),function(){try{clearInterval(e),clearInterval(t),document.removeEventListener("fullscreenchange",a)}catch(r){}}}),[k,S]);var q=new Array(n).fill(0),R=O.map((function(e,t){var a=q.indexOf(Math.min.apply(Math,Object(h.a)(q))),r=[b/n*a,(q[a]+=e.height/2)-e.height/2];return Object(f.a)(Object(f.a)({},e),{},{xy:r,width:b/n,height:e.height/2})})),C=Object(p.b)(R,(function(e){return e.css}),{from:function(e){return{xy:e.xy,width:e.width,height:e.height,opacity:0}},enter:function(e){return{xy:e.xy,width:e.width,height:e.height,opacity:1}},update:function(e){return{xy:e.xy,width:e.width,height:e.height}},leave:{height:0,opacity:0},config:{mass:5,tension:500,friction:68},trail:25});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",Object.assign({},o,{className:"list",style:{height:Math.max.apply(Math,Object(h.a)(q))}}),C.map((function(e){var t=e.item,n=e.props,a=n.xy,c=Object(m.a)(n,["xy"]),i=e.key;return r.a.createElement(p.a.div,{key:i,style:Object(f.a)({transform:a.interpolate((function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")}))},c)},r.a.createElement("div",{className:k?"":"active-image",onClick:function(){return window.open("https://www.instagram.com/p/".concat(t.code,"/"))},style:{backgroundImage:t.css}}))}))))},j=n(50),O=n.n(j),y=n(53),_=n.n(y),x=n(52),k=n.n(x),I=n(131);n(111);function F(e){var t=e.user;return r.a.createElement("div",{className:"user"},r.a.createElement(I.a,{className:"screen-saver",onClick:function(){var e;(e=document.querySelector(".grid")).requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},window.innerWidth>=600?r.a.createElement("p",null,"Screen saver"):r.a.createElement(r.a.Fragment,null),r.a.createElement(k.a,null)),r.a.createElement("div",{className:"profile-photo"},r.a.createElement("img",{src:"https://scontent-maa2-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/80753995_1773336572798955_4477812830697037919_n.jpg?_nc_ht=scontent-maa2-2.cdninstagram.com&_nc_cat=103&_nc_ohc=uC-AT3u3-boAX_rGgQC&oh=136161bd5f91c768b860f1db4c89f2c9&oe=5F8A23AE",alt:"profilepic"})),r.a.createElement("div",{className:"about"},r.a.createElement("h1",null,t.full_name),r.a.createElement("p",null,t.biography)),r.a.createElement(S,{user:t}))}function S(e){var t=e.user;return r.a.createElement("div",{className:"contact"},r.a.createElement(I.a,{onClick:function(){return setTimeout((function(){return window.open("https://instagram.com/"+t.username)}),400)}},r.a.createElement(_.a,{style:{color:"rgba(255, 255, 255, 0.6)"}}),r.a.createElement("span",null,t.username)),r.a.createElement("p",{onClick:function(){return window.open("https://github.com/xrehpicx")}},"website designed by Raj"))}function N(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){}),[]),r.a.createElement("div",{className:"mobile-warning",style:{opacity:n?"1":"0",pointerEvents:n?"":"none"}},r.a.createElement("p",null,"View on desktop for best view"),r.a.createElement(I.a,{onClick:function(){return setTimeout((function(){return c(!1)}),400)},variant:"outlined"},"view anyway"))}var q=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://www.instagram.com/aniruddh.gs/?__a=1");case 2:t=e.sent.data.graphql.user,c(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement("div",{className:"app"},r.a.createElement("img",{src:"https://instagram.fblr4-3.fna.fbcdn.net/v/t51.2885-19/s320x320/118470479_692199931507415_7487485173537430627_n.jpg?_nc_ht=instagram.fblr4-3.fna.fbcdn.net&_nc_ohc=LE4Q92c1_1kAX_L5bE6&tp=1&oh=5f3d1f566f68f0e0f9c5d02a6db1d5ba&oe=601007DC",alt:"",className:"bg-img"}),r.a.createElement(F,{user:n}),r.a.createElement("div",{className:"grid"},r.a.createElement(E,{edges:n.edge_owner_to_timeline_media?n.edge_owner_to_timeline_media.edges:""})),window.innerWidth<=600?r.a.createElement(N,null):r.a.createElement(r.a.Fragment,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,t,n){e.exports=n(117)},63:function(e,t,n){},93:function(e,t,n){}},[[58,1,2]]]);
//# sourceMappingURL=main.5b9bff69.chunk.js.map