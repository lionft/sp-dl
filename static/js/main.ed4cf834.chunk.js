(this.webpackJsonpsamurai_society=this.webpackJsonpsamurai_society||[]).push([[0],{271:function(e,t,n){},292:function(e,t){},295:function(e,t){},298:function(e,t){},302:function(e,t){},329:function(e,t){},331:function(e,t){},340:function(e,t){},342:function(e,t){},352:function(e,t){},354:function(e,t){},472:function(e,t){},474:function(e,t){},481:function(e,t){},482:function(e,t){},576:function(e,t,n){},577:function(e,t,n){},578:function(e,t,n){},579:function(e,t,n){},580:function(e,t,n){},581:function(e,t,n){},582:function(e,t,n){},583:function(e,t,n){},584:function(e,t,n){},585:function(e,t,n){},587:function(e,t,n){},588:function(e,t,n){},590:function(e,t,n){"use strict";n.r(t);var a,c,i,s,o,r,l,d,m,j,h,b,u,p,x,f,O=n(2),g=n(38),v=n.n(g),N=n(596),w=n(599),y=(n(253),n(21)),A=n(602),T=n(603),E=n.p+"static/media/logo.37096bc6.png",k=(n(271),n(594)),I=n(595),S=n(1),M=[{socialUrl:"https://twitter.com/natoverseNFt",socialIcon:Object(S.jsx)(k.a,{})},{socialUrl:"https://t.me/natoverse",socialIcon:Object(S.jsx)(I.b,{})},{socialUrl:"https://www.instagram.com/natoversenft/",socialIcon:Object(S.jsx)(I.a,{})}],C=function(e){e.connectWallet;var t=Object(O.useState)(!1),n=Object(y.a)(t,2),a=n[0],c=n[1];return Object(S.jsxs)(A.a,{collapseOnSelect:!0,expand:"lg",className:"header-comp flex-column",children:[Object(S.jsx)(N.a,{className:"header-comp-social",children:Object(S.jsx)("div",{className:"header-comp-social-container",children:M.map((function(e,t){return Object(S.jsx)("div",{className:"social-item",children:Object(S.jsx)("a",{href:e.socialUrl,className:"item",target:"_blank",children:Object(S.jsx)("div",{className:"icon d-flex justify-content-center align-items-center",children:e.socialIcon})})},t)}))})}),Object(S.jsxs)(N.a,{className:"header-comp-container",children:[Object(S.jsx)(A.a.Brand,{href:"#home",className:"header-comp-mobile-screen",children:Object(S.jsx)("img",{src:E,alt:"bored-bunny"})}),Object(S.jsxs)(A.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return c(!a)},className:"header-comp-toggle-custom ".concat(a&&"active"),children:[Object(S.jsx)("span",{className:"toggle-line"}),Object(S.jsx)("span",{className:"toggle-line"}),Object(S.jsx)("span",{className:"toggle-line"})]}),Object(S.jsxs)(A.a.Collapse,{id:"responsive-navbar-nav",className:"header-navbar-menu",children:[Object(S.jsxs)(T.a,{className:"me-auto left-side-menu",children:[Object(S.jsx)(T.a.Link,{href:"#introducing",className:"menu-item d-flex flex-column justify-content-center align-items-center",children:Object(S.jsx)("span",{children:"introducing Natoverse"})}),Object(S.jsx)(T.a.Link,{href:"#benefits",className:"menu-item",children:"BENEFITS & UTILITIES"})]}),Object(S.jsx)(A.a.Brand,{href:"#home",className:"navbar-logo",children:Object(S.jsx)("img",{src:E,alt:"bored-bunny"})}),Object(S.jsxs)(T.a,{className:"right-side-menu",children:[Object(S.jsx)(T.a.Link,{href:"#roadmap",className:"menu-item",children:"roadmap"}),Object(S.jsx)(T.a.Link,{href:"#team",className:"menu-item",children:"The team"}),Object(S.jsx)(T.a.Link,{href:"#faq",className:"menu-item",children:"faq's"})]}),Object(S.jsx)(T.a,{className:"header-comp-button d-flex justify-content-center align-items-center",children:Object(S.jsx)("button",{className:"connect-wallet-button",children:"Select wallet"})})]})]})]})},_=n(600),D=(n.p,n(40)),R=n(67),Z=n(28),Q=n.n(Z),G=n(99),U=n(256),z=n(3),Y={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(z.a)(Object(z.a)({},Y),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(z.a)(Object(z.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(z.a)(Object(z.a)({},Y),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(z.a)(Object(z.a)({},e),{},{account:t.payload.account});default:return e}},W={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(z.a)(Object(z.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(z.a)(Object(z.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(z.a)(Object(z.a)({},W),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},J=Object(G.b)({blockchain:B,data:F}),L=[U.a],P=Object(G.c)(G.a.apply(void 0,L)),V=Object(G.d)(J,P),X=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},H=function(){return function(){var e=Object(R.a)(Q.a.mark((function e(t){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,V.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(X("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},q=n(26),K=n(27),$=(K.a.div(a||(a=Object(q.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),K.a.div(c||(c=Object(q.a)(["\n  height: 8px;\n  width: 8px;\n"]))),K.a.div(i||(i=Object(q.a)(["\n  height: 16px;\n  width: 16px;\n"]))),K.a.div(s||(s=Object(q.a)(["\n  height: 24px;\n  width: 24px;\n"]))),K.a.div(o||(o=Object(q.a)(["\n  height: 32px;\n  width: 32px;\n"]))),K.a.div(r||(r=Object(q.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),K.a.p(l||(l=Object(q.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),K.a.p(d||(d=Object(q.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),K.a.p(m||(m=Object(q.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"]))),K.a.div(j||(j=Object(q.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),K.a.button(h||(h=Object(q.a)(["\n  border: none;\n  outline: none;\n  font-size: 14px;\n  color: #000;\n  background-color: #F5BC58;\n  margin-right: 5px;\n  padding: 12px 30px;\n  border-radius: 50px;\n  font-weight: bold;\n\n  &:hover {\n    background-color: #ffffff;\n    color: #F5BC58;\n  }\n"]))),K.a.button(b||(b=Object(q.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),K.a.div(u||(u=Object(q.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),K.a.img(p||(p=Object(q.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),K.a.img(x||(x=Object(q.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),K.a.a(f||(f=Object(q.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))),n(97)),ee=n.n($),te=n(261),ne=n.n(te),ae=function(e){return{type:"CONNECTION_FAILED",payload:e}},ce=function(){return function(){var e=Object(R.a)(Q.a.mark((function e(t){var n,a,c,i,s,o,r,l,d;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return c=e.sent,e.next=12,c.json();case 12:if(i=e.sent,s=window,o=s.ethereum,!(o&&o.isMetaMask)){e.next=33;break}return ee.a.setProvider(o),r=new ne.a(o),e.prev=18,e.next=21,o.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,o.request({method:"net_version"});case 24:e.sent==i.NETWORK.ID?(d=new ee.a(a,i.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:r}}),o.on("accountsChanged",(function(e){t(ie(e[0]))})),o.on("chainChanged",(function(){window.location.reload()}))):t(ae("Change network to ".concat(i.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(ae("Something went wrong."));case 31:e.next=34;break;case 33:t(ae("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()},ie=function(e){return function(){var t=Object(R.a)(Q.a.mark((function t(n){return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(H());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},se=n(598),oe=n(605),re=function(e){var t=e.errorMsg,n=Object(O.useState)(!1),a=Object(y.a)(n,2),c=a[0],i=a[1];return Object(O.useEffect)((function(){t&&(i(!0),setTimeout((function(){i(!1)}),2e3))}),[t]),Object(S.jsx)(se.a,{className:"p-3",position:"bottom-end",children:Object(S.jsxs)(oe.a,{show:c,children:[Object(S.jsx)(oe.a.Header,{closeButton:!1,children:Object(S.jsx)("strong",{className:"me-auto",children:"Error"})}),Object(S.jsx)(oe.a.Body,{children:t})]})})},le=(n(576),n(577),function(){return Object(S.jsx)(N.a,{fluid:!0,className:"welcome-comp",children:Object(S.jsxs)(N.a,{className:"welcome-comp-container d-flex flex-column justify-content-center align-items-center",children:[Object(S.jsxs)(w.a,{className:"welcome-comp-content",children:[Object(S.jsx)("h6",{"data-aos":"fade-up",className:"title",children:"Welcome To The Exclusive Natoverse"}),Object(S.jsx)("p",{"data-aos":"fade-up",className:"sub-title",children:"Join the first Army in the mMEtaworld a nd protect the wolrd togethery!"})]}),Object(S.jsx)(w.a,{className:"welcome-comp-button",children:Object(S.jsxs)("button",{"data-aos":"zoom-in",className:"button-item",children:[Object(S.jsx)("span",{children:"view all collection"}),Object(S.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OTA4ODE2NzYxNUUxMUVDOUJGQ0Y3OUMyNzg2QzIzNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OTA4ODE2ODYxNUUxMUVDOUJGQ0Y3OUMyNzg2QzIzNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk5MDg4MTY1NjE1RTExRUM5QkZDRjc5QzI3ODZDMjM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk5MDg4MTY2NjE1RTExRUM5QkZDRjc5QzI3ODZDMjM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1l2itAAAAcFJREFUeNrslj1LA0EQhjfhWgvNdeIHgjZeZwoFP0KigoW1dvkBWlkGUhh7GxX9CQpaqJVCBMEmXmGTCFHwo09USKOHeL4rc7CZTGIwKCK+8HDLy84MO7t3t8r3fRvsgidwAcaAYoRACpSIFHlKQMfnQYXy2trc96v1QIXNwKRfq6RQwKZ4UwdhpdSUqlY7GGZeQtVK8kYo3tS0LnLNTB8UmXcnJLwXvCLFm7rRS4wZS3wDK0IbIsA1WuCSJ+1JhvIErY99bB5kg1FaVUHJssAEjU/Bq6qvQdAPzkApKPKtCqsf0N8pYtFzDkyCW7AGKsJcByzQeAPk6+RsA0ugBxyBHX3k0uwNzQGLHcsh8GzM0eOocHwtijeVVvQt4oqz4C1hzqZQJCHMK+s98YQlv3xxP+U4oV3nQruirbQreBnnwSy4AqsNNn6RxutNbPwAOATb/2/87y0S0X8w2qxGX4c4YX2SV3/qZyivkn5aGeFodrTy09JmgZ1rPcERArmWhQKOUSDQpW5XN1tqCHQyr1doSZ/gdVF81TxdJMvMR+Ay70RImBW8HMWbOg7uSnvAo0vZeIPLXZlo5nLnUV77XYABAPQNQkjAcWa8AAAAAElFTkSuQmCC",alt:""})]})})]})})}),de=n.p+"static/media/introducingImg.aa50b50e.png",me=(n(578),function(){return Object(S.jsx)(N.a,{fluid:!0,className:"introducing-comp",children:Object(S.jsx)(N.a,{className:"introducing-comp-container",children:Object(S.jsxs)(w.a,{className:"introducing-comp-content",children:[Object(S.jsx)(_.a,{"data-aos":"zoom-in",lg:5,md:5,sm:12,className:"introducing-left-side d-flex justify-content-center align-items-center",children:Object(S.jsx)("img",{src:de,alt:""})}),Object(S.jsxs)(_.a,{lg:7,md:7,sm:12,className:"introducing-right-side d-flex flex-column justify-content-center",children:[Object(S.jsx)("div",{"data-aos":"fade-down",className:"title-container",children:Object(S.jsxs)("h3",{className:"title",children:[Object(S.jsx)("em",{children:"Introducing"}),Object(S.jsx)("br",{}),"Natoverse"]})}),Object(S.jsxs)("div",{className:"content-container",children:[Object(S.jsx)("p",{"data-aos":"fade-up",children:"Welcome to NAtoverse the first army of Metaverse our duty is to protect the Metaworld from invader criminals and vanadlism. be part of our Army the first of its kind and help Natoverse keep peace and prosperity around the Meta Natoverse is an army of Humans and animals alien and robots have evolved and learned advanced fighting skills in preparation and plan to defend themselves and keep peac in the mtaworld . Which force will you join?"}),Object(S.jsx)("p",{"data-aos":"fade-up",children:"Entering into the realm of the NATOVERSE means joining a family full of investors and NFT enthusiasts who believe in the future of cryptocurrencies and blockchain technology."})]}),Object(S.jsx)("div",{"data-aos":"zoom-in",className:"content-btn",children:Object(S.jsxs)("a",{className:"btn-item",children:[Object(S.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAZCAYAAABZ5IzrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQjlGOEI2NzYxNTgxMUVDQjc0NUEzOTkxM0I4RjUxQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQjlGOEI2ODYxNTgxMUVDQjc0NUEzOTkxM0I4RjUxQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNCOUY4QjY1NjE1ODExRUNCNzQ1QTM5OTEzQjhGNTFDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNCOUY4QjY2NjE1ODExRUNCNzQ1QTM5OTEzQjhGNTFDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+17w0iAAAAdVJREFUeNrEV4FtwjAQdLIA7gSkEySdoNkANoBOUDZIO0HDBNAJoBM0TACdIOkEhAnSf+lcWcGOTSnJSSck6+N/7t/vd9A0jXBAEqcgG1fEnPjt8d2GGOCbLdiJwBHQC3GGjVQQKTECleMETius1cQDOCLOQbZ9xV5mcEAGJsQ98Y0YExfEovkbeJ+cmBIz4hFrkcm3SaEEUhdQIRX/hwr7Jtj7HmpaU8aS7rV03Bqc0gd9IWwZZD0Go7KR2RTiQErRP2qoVLUVysQw4DJ5biskoY4cKChW6U5XaDJgMEqQiR7QVAyPVA/Ip9fk6BsB/kDtcZwD/Ba+AQl0TBc2lm5uQkmUBvvSw49khWKP6JcWFXaG9Q+LeksPP3GI5nTNVWA6MbY0OtMWetZP1Jn38+5rgs/BSQRuXhdqQ10sOuznnvV2NhlwY2w803MirpESVubRYf+OlEaYqbxwSUC9IHT0ncMNfBaYt8yFjx5jwhFTXozJsWyuwydxQlx12MwEHHZhrY2bKrj9BeMrj61jFHrpCPj3tp8hRdJRpPN2I8M3+tCvrondBVPoFnuf9KM5dslpeRD4cOVIY+eQP0YTU8+dBMf96YpCHmEPqT2RWJWvtuGPAAMAekp4eqXAc+4AAAAASUVORK5CYII=",alt:""}),"join our discord"]})})]})]})})})}),je=n.p+"static/media/ape.e5bfaa5a.png",he=n.p+"static/media/bear.996d9992.png",be=n.p+"static/media/bunny.73565f5b.png",ue=n.p+"static/media/alien.def9ab05.png",pe=[je,he,be,ue],xe=(n(579),function(){return Object(S.jsxs)(N.a,{fluid:!0,className:"sub-banner-comp",children:[Object(S.jsx)("div",{className:"bg-blur"}),Object(S.jsxs)("div",{className:"sub-banner-comp-container",children:[pe.map((function(e,t){return Object(S.jsx)("div",{className:"img-item",children:Object(S.jsx)("img",{src:e,alt:""})},t)})),Object(S.jsx)("div",{className:"sub-banner-text",children:Object(S.jsx)("h3",{children:"Natoverse"})})]})]})}),fe=[{img:[ue],imgName:"Alien",content:"From the neighboring planet of kepler they have evolved and have been planning a cooperation as they have run out of resources on their planets, they have discovered how to fight and are ready to join the Natoverse coalition "},{img:[n.p+"static/media/robots.655aea01.png"],imgName:"Robots",content:"Cyborgs are roaming the Kepler and have teamed up with Humans  to set a peace accord and join to natoverse to protect the civilians ."},{img:[be,n.p+"static/media/lion.5f762a76.png",he,je],imgName:"bunny/lion/bear/ape",content:"These endangered animals have evolved and have learned how to defend themselves , they have learned the way of the Natoverse and are planning to cleanse planet earth from all evil and roam earth like they used to. "},{img:[n.p+"static/media/human.ce33fb55.png"],imgName:"Humans",content:"They are an endangered species after many wars and nuking each other they have turned back to an old civilization with not many advancements and turned back to the way of the Natoverseas inspiration to build and grow and advance as they once were. They had came to an agreement to never use  guns, bombs, or anything against each others that will caused there extinction, instead they have swords and the way of the samurai. They have oppressed many before but this time they have to protect their planet and fight for their survival."}],Oe=(n(580),function(){return Object(S.jsx)(N.a,{fluid:!0,className:"nft-explain-comp",children:Object(S.jsxs)(N.a,{className:"nft-explain-container d-flex flex-column justify-content-center align-items-center",children:[Object(S.jsx)("div",{"data-aos":"fade-down",className:"nft-explain-title",children:Object(S.jsxs)("h3",{children:[Object(S.jsx)("em",{children:"NFT"})," ","explain"]})}),Object(S.jsx)("div",{className:"card-container d-flex justify-content-center align-items-center flex-wrap",children:fe.map((function(e,t){return Object(S.jsxs)("div",{"data-aos":"zoom-in",className:"card",children:[Object(S.jsxs)("div",{className:"circle",children:[Object(S.jsx)("div",{className:"img-container d-flex justify-content-center align-items-center",children:Object(S.jsx)("div",{className:"".concat(4===e.img.length&&"img-grid"),children:e.img.map((function(e,t){return Object(S.jsx)("img",{src:e,alt:""},t)}))})}),Object(S.jsx)("h2",{className:"name",children:e.imgName})]}),Object(S.jsx)("div",{className:"content",children:Object(S.jsx)("p",{children:e.content})})]},t)}))})]})})}),ge=n(601),ve=n.p+"static/media/174.eadb7805.png",Ne=[{content:"All Natoverseholders will be eligible for a private sale of our own crypto token set to launch soon!",img:ve},{content:"All Natoverseholders will have a chance to win high value prizes in many giveaways.",img:n.p+"static/media/1710.f4ec8cac.png"},{content:"Beta game testing for all holders in which they can mine and earn our crypto just by playing the game.",img:n.p+"static/media/1793.3df2b607.png"}],we=(n(581),function(){return Object(S.jsx)(N.a,{fluid:!0,className:"benefit-comp",children:Object(S.jsxs)(N.a,{className:"benefit-comp-container",children:[Object(S.jsx)("div",{"data-aos":"fade-down",className:"benefit-comp-title",children:Object(S.jsxs)("h3",{children:[Object(S.jsx)("em",{children:"benefits"})," ","& ultilities"]})}),Object(S.jsx)(w.a,{className:"benefit-comp-quotes",children:Object(S.jsxs)("div",{className:"quotes-container d-flex justify-content-center align-items-center",children:[Object(S.jsx)("div",{className:"left-icon icon-position",children:Object(S.jsx)(ge.a,{})}),Object(S.jsxs)("div",{className:"content-container d-flex flex-column justify-content-center align-items-center",children:[Object(S.jsx)("h3",{className:"question",children:"Why invest in Natoverse?"}),Object(S.jsx)("p",{className:"answer",children:"We are the future of the metaverse and with our Army we will be the first Security entity. we are expecting great returns. The utility holds great value in revolutionizing gaming as we know it in the metaverse. With our goals set we will grow and expand our project to be remembered for generations."})]}),Object(S.jsx)("div",{className:"right-icon icon-position",children:Object(S.jsx)(ge.b,{})})]})}),Object(S.jsxs)(w.a,{className:"benefit-comp-detail",children:[Object(S.jsx)("h3",{className:"title",children:"Benefit of investing in Natoverse:"}),Object(S.jsx)("div",{className:"benefit-detail-container",children:Ne.map((function(e,t){return Object(S.jsxs)("div",{className:"detail-item",children:[Object(S.jsx)("div",{"data-aos":"zoom-in",className:"content-container d-flex justify-content-center align-items-center",children:Object(S.jsx)("p",{children:e.content})}),Object(S.jsx)("div",{className:"img-container",children:Object(S.jsx)("img",{src:e.img,alt:""})})]},t)}))})]})]})})}),ye=n.p+"static/media/processTree.eabed24b.png",Ae=function(){return Object(S.jsxs)("div",{className:"home_road_map_flex",children:[Object(S.jsxs)("div",{className:"home_road_map_inner",children:[Object(S.jsx)("div",{className:"home_road_map_box home_road_map_box1","data-aos":"fade-up","data-aos-duration":"2000",children:Object(S.jsxs)("div",{className:"home_road_map_text",children:[Object(S.jsx)("h3",{children:"Phase 1"}),Object(S.jsx)("p",{children:"Our first collection will be 8888 unique NFTs, set to be launched in March. Stay tuned on discord for our official mint date."})]})}),Object(S.jsx)("div",{className:"home_road_map_box home_road_map_box2","data-aos":"fade-up","data-aos-duration":"3000",children:Object(S.jsxs)("div",{className:"home_road_map_text",children:[Object(S.jsx)("h3",{children:"Phase 3"}),Object(S.jsx)("p",{children:"Q3 we will launch a crypto token which will be used in our game and the metaverse. This will leave an impact and all holders will have access to a private sale before launch."})]})}),Object(S.jsx)("div",{className:"home_road_map_box home_road_map_box3","data-aos":"fade-up","data-aos-duration":"4000",children:Object(S.jsxs)("div",{className:"home_road_map_text",children:[Object(S.jsx)("h3",{children:"Phase 5"}),Object(S.jsx)("p",{children:"Official game release estimated end of Q4 2022, The nft you hold will be your registration card and will be your official skin in the game, certain Nfts will have special moves and power ups depending on the rarity of the NFT. Train your Natoverseand fight the enemy to claim Earth is your home planet!"})]})})]}),Object(S.jsx)("div",{className:"home_road_map_inner",children:Object(S.jsx)("div",{className:"home_road_map_img",children:Object(S.jsx)("img",{src:ye,title:"",alt:""})})}),Object(S.jsxs)("div",{className:"home_road_map_inner",children:[Object(S.jsx)("div",{className:"home_road_map_box home_road_map_box4","data-aos":"fade-up","data-aos-duration":"2000",children:Object(S.jsxs)("div",{className:"home_road_map_text",children:[Object(S.jsx)("h3",{children:"Phase 2"}),Object(S.jsx)("p",{children:"Q2 we will release a 2nd drop of NFTs which will be mutated samurais and it will be a rare collection of only 4,444 NFTs."})]})}),Object(S.jsx)("div",{className:"home_road_map_box home_road_map_box5","data-aos":"fade-up","data-aos-duration":"3000",children:Object(S.jsxs)("div",{className:"home_road_map_text",children:[Object(S.jsx)("h3",{children:"Phase 4"}),Object(S.jsx)("p",{children:"Q4 we will launch the beta of our Natoversegame which will be compatible with IOS and other platforms. All holders of our NFT will be eligible for early access to the game."})]})})]})]})},Te=[{percent:"20%",title:"Phase 1:",content:"Our first collection will be 7,777 unique NFTs, set to be launched in March. Stay tuned on discord for our official mint date."},{percent:"40%",title:"phase 2:",content:"Q2 we will release a 2nd drop of NFTs which will be mutated samurais and it will be a rare collection of only 4,444 NFTs."},{percent:"60%",title:"Phase 3:",content:"Q3 we will launch a crypto token which will be used in our game and the metaverse. This will leave an impact and all holders will have access to a private sale before launch."},{percent:"80%",title:"Phase 4:",content:"Q4 we will launch the beta of our Natoversegame which will be compatible with IOS and other platforms. All holders of our NFT will be eligible for early access to the game."},{percent:"100%",title:"Phase 5:",content:"Official game release estimated end of Q4 2022, The nft you hold will be your registration card and will be your official skin in the game, certain Nfts will have special moves and power ups depending on the rarity of the NFT. Train your Natoverseand fight the enemy to claim Earth is your home planet!"}],Ee=function(){return Object(S.jsx)("div",{className:"mobile_road_map_flex",children:Te.map((function(e,t){return Object(S.jsxs)("div",{className:"mobile_road_map_inner","data-aos":"fade-up","data-aos-duration":"2000",children:[Object(S.jsx)("div",{className:"mobile_road_map_img d-flex justify-content-center align-items-center",children:Object(S.jsx)("p",{className:"roadmap-percent",children:e.percent})}),Object(S.jsx)("div",{className:"mobile_road_map_text",children:Object(S.jsxs)("div",{className:"home_road_map_text",children:[Object(S.jsx)("h3",{children:e.title}),Object(S.jsx)("p",{children:e.content})]})})]},t)}))})},ke=(n(582),function(){var e=function(){var e=Object(O.useState)(0),t=Object(y.a)(e,2),n=t[0],a=t[1];return Object(O.useLayoutEffect)((function(){var e=function(){a(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}();return Object(S.jsx)(N.a,{fluid:!0,className:"roadmap-comp",children:Object(S.jsxs)(N.a,{className:"roadmap-comp-container",children:[Object(S.jsx)("div",{"data-aos":"fade-down",className:"roadmap-comp-title",children:Object(S.jsxs)("h3",{children:[Object(S.jsx)("em",{children:"road"}),"map"]})}),Object(S.jsx)(w.a,{style:{marginTop:"24px"},children:e<=767?Object(S.jsx)(Ee,{}):Object(S.jsx)(Ae,{})})]})})}),Ie=[{name:"Mr. Biggie",position:"Creator and founder",ava:n.p+"static/media/teamMember1.4320db10.png"},{name:"Mr. Mystery",position:"Blockchain Developer",ava:n.p+"static/media/teamMember2.db31129b.png"},{name:"Mr. Nhan",position:"Developer",ava:n.p+"static/media/teamMember3.64f62629.png"},{name:"Ms. Jimena",position:"Artist",ava:ve},{name:"Ms. Jojo",position:"Social Media Content",ava:n.p+"static/media/teamMember4.2c01e5ed.png"}],Se=(n(583),function(){return Object(S.jsx)(N.a,{fluid:!0,className:"team-comp",children:Object(S.jsxs)(N.a,{className:"team-comp-container d-flex flex-column justify-content-center align-items-center",children:[Object(S.jsx)("div",{"data-aos":"fade-down",className:"team-comp-title",children:Object(S.jsxs)("h3",{children:[Object(S.jsx)("em",{children:"meet"})," ","the team"]})}),Object(S.jsx)("div",{className:"team-comp-content",children:Ie.map((function(e,t){return Object(S.jsxs)("div",{"data-aos":"zoom-in","data-aos-duration":"1000",className:"team-item-container",children:[Object(S.jsx)("div",{className:"team-ava",children:Object(S.jsx)("img",{src:e.ava,alt:"bored-bunny-team"})}),Object(S.jsxs)("div",{className:"team-info-container justify-content-center align-items-center",children:[Object(S.jsx)("p",{className:"name",children:e.name}),Object(S.jsx)("p",{className:"position",children:e.position})]})]},t)}))})]})})}),Me=n(604),Ce=[{question:"Where will I be able to see my NatoverseNFT?",answer:["Once you have minted a Natoverseyou will be able to view it on Opensea by connecting your metamask."]},{question:"When is the official launch?",answer:["The official launch will be estimated in March stay tuned on instagram/twitter/discord for further updates."]},{question:"What will be the price?",answer:["For our exclusive private sale it will be .2 bnb+ gas fees.","For our public sale it will be .3 bnb+ gas  fees."]},{question:"How do I join the private sale?",answer:["To join the private sale you have to be active in our discord group and you will be automatically joined in our private sale."]}],_e=n.p+"static/media/email.a619dad8.png",De=n.p+"static/media/message.8ef2b04a.png",Re=(n(584),function(){return Object(S.jsx)(N.a,{fluid:!0,className:"faq-comp",children:Object(S.jsxs)(N.a,{className:"faq-comp-container d-flex flex-column justify-content-center align-items-center",children:[Object(S.jsx)("div",{"data-aos":"fade-down",className:"faq-comp-title",children:Object(S.jsxs)("h3",{children:[Object(S.jsx)("em",{children:"frequently"}),Object(S.jsx)("br",{}),"asked questions"]})}),Object(S.jsx)(w.a,{className:"faq-comp-content",children:Object(S.jsx)(Me.a,{className:"accordion-container",children:Ce.map((function(e,t){return Object(S.jsxs)(Me.a.Item,{"data-aos":"zoom-in",eventKey:"".concat(t),children:[Object(S.jsx)(Me.a.Header,{className:"accordion-header-custom",children:e.question}),Object(S.jsx)(Me.a.Body,{className:"accordion-body-custom",children:e.answer})]})}))})}),Object(S.jsxs)(w.a,{className:"faq-comp-social",children:[Object(S.jsxs)(_.a,{lg:6,md:6,sm:12,className:"social-container",children:[Object(S.jsx)("img",{src:_e,alt:""}),Object(S.jsx)("a",{href:"mailto:natoverse@gmail.com",className:"social-item",children:"NAtoverseNFT@gmail.com"})]}),Object(S.jsxs)(_.a,{lg:6,md:6,sm:12,className:"social-container",children:[Object(S.jsx)("img",{src:De,alt:""}),Object(S.jsx)("a",{href:"https://t.me/natoverse",className:"social-item",children:"https://t.me/natoverse"})]})]})]})})}),Ze=n(262),Qe=n.n(Ze),Ge=n.p+"static/media/bg.625cbd33.png",Ue=(n(585),function(){var e=Object(O.useState)(!1),t=Object(y.a)(e,2),n=t[0],a=t[1],c=Object(D.b)(),i=Object(D.c)((function(e){return e.blockchain}));return Object(S.jsxs)(N.a,{fluid:!0,className:"banner-comp-v2",children:[Object(S.jsx)(C,{connectWallet:function(e){e.preventDefault(),c(ce()),""!==i.account&&null!==i.smartContract&&c(H(i.account))}}),Object(S.jsxs)(w.a,{fluid:!0,className:"banner-comp-v2-container",children:[Object(S.jsx)(_.a,{xxl:7,xl:7,lg:12,md:12,sm:12,className:"image-container",children:Object(S.jsx)("img",{src:Ge,alt:"natoverse"})}),Object(S.jsxs)(_.a,{xxl:5,xl:5,lg:12,md:12,sm:12,className:"content-container d-flex flex-column justify-content-center align-content-center",children:[Object(S.jsx)("div",{className:"logo-container",children:Object(S.jsx)("img",{src:E,alt:"natoverse"})}),Object(S.jsx)("div",{className:"greeting-container",children:Object(S.jsx)("h6",{className:"text",children:"we are recruiting"})}),Object(S.jsx)("div",{className:"title-container",children:Object(S.jsx)(Qe.a,{onInit:function(e){e.typeString("BE PART OF THE FIRST ARMY").start().callFunction((function(){a(!0)}))}})}),Object(S.jsx)("div",{className:"button-container ".concat(n&&"button-container-active"),children:Object(S.jsx)("button",{children:"mint soon"})})]})]}),Object(S.jsx)(re,{errorMsg:i.errorMsg})]})}),ze=function(){return Object(S.jsxs)(N.a,{fluid:!0,className:"main-layout",style:{paddingLeft:0,paddingRight:0,backgroundColor:"#2c100e",overflow:"hidden"},children:[Object(S.jsx)(w.a,{id:"home",children:Object(S.jsx)(Ue,{})}),Object(S.jsx)(w.a,{id:"welcome",children:Object(S.jsx)(le,{})}),Object(S.jsx)(w.a,{id:"introducing",children:Object(S.jsx)(me,{})}),Object(S.jsx)(w.a,{children:Object(S.jsx)(xe,{})}),Object(S.jsx)(w.a,{id:"nft-explain",children:Object(S.jsx)(Oe,{})}),Object(S.jsx)(w.a,{id:"benefit",children:Object(S.jsx)(we,{})}),Object(S.jsx)(w.a,{id:"roadmap",children:Object(S.jsx)(ke,{})}),Object(S.jsx)(w.a,{id:"team",children:Object(S.jsx)(Se,{})}),Object(S.jsx)(w.a,{id:"faq",children:Object(S.jsx)(Re,{})})]})};n(586),n(587);var Ye=function(){return Object(S.jsx)(ze,{})},Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,606)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))},We=n(263),Fe=n.n(We);n(588),n(589);Fe.a.init(),v.a.render(Object(S.jsx)(D.a,{store:V,children:Object(S.jsx)(Ye,{})}),document.getElementById("root")),Be()}},[[590,1,2]]]);
//# sourceMappingURL=main.ed4cf834.chunk.js.map