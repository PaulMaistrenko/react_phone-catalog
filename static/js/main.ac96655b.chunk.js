(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(30).concat([function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(25),n=c.n(s),a=c(6),r=c(3),i=c(1),o=c.n(i),l=(c(30),c(0)),u=function(e){var t=e.currentPage,c=e.item;return Object(l.jsxs)("div",{className:"path-box",children:[Object(l.jsx)(a.b,{to:"/",className:"home__link icon"}),Object(l.jsx)("div",{className:"arrow-path icon"}),c?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(a.b,{className:"current-page__link",to:"/".concat(t.toLowerCase()),children:t}),Object(l.jsx)("div",{className:"arrow-path icon"}),Object(l.jsx)("p",{className:"current-item",children:c})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"current-page",children:t}),Object(l.jsx)("p",{className:"current-item",children:c})]})]})},j=c(7),d=c(4),b=c(5),m=c.n(b);function O(e){return new Promise((function(t){setTimeout(t,e)}))}var _=function(){var e=Object(j.a)(m.a.mark((function e(t,c){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(10);case 2:return e.next=4,fetch("https://mate-academy.github.io/react_phone-catalog/_new"+t,{method:c});case 4:if((s=e.sent).ok){e.next=7;break}throw new Error;case 7:return e.abrupt("return",s.json());case 8:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),h=function(e){return _(e,"GET")},p=function(e){return h("/products/".concat(e,".json"))},x=function(e,t){localStorage.setItem(e,JSON.stringify(t))},f=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):[]},v=o.a.createContext({currentPage:"Home",products:[],phones:[],tablets:[],accessories:[],sortType:"No sorting",itemsOnPage:"All",cartItems:[],favouritesItems:[],queryValue:"",setCurrentPage:function(){},setProducts:function(){},setPhones:function(){},setTablets:function(){},setAccessories:function(){},setSortType:function(){},setItemsOnPage:function(){},setCartItems:function(){},setFavouritesItems:function(){},setqueryValue:function(){}}),N=function(e){var t=e.children,c=Object(i.useState)("Home"),s=Object(d.a)(c,2),n=s[0],a=s[1],r=Object(i.useState)([]),o=Object(d.a)(r,2),u=o[0],b=o[1],O=Object(i.useState)([]),_=Object(d.a)(O,2),p=_[0],N=_[1],g=Object(i.useState)([]),y=Object(d.a)(g,2),C=y[0],k=y[1],P=Object(i.useState)([]),w=Object(d.a)(P,2),I=w[0],A=w[1],S=Object(i.useState)("No sorting"),q=Object(d.a)(S,2),M=q[0],F=q[1],T=Object(i.useState)("All"),E=Object(d.a)(T,2),L=E[0],V=E[1],B=Object(i.useState)([]),Q=Object(d.a)(B,2),D=Q[0],H=Q[1],R=Object(i.useState)([]),$=Object(d.a)(R,2),G=$[0],J=$[1],z=Object(i.useState)(""),W=Object(d.a)(z,2),X=W[0],Y=W[1],Z=function(){var e=Object(j.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h("/products.json");case 3:t=e.sent,b(t),N(t.filter((function(e){return"phones"===e.category}))),k(t.filter((function(e){return"tablets"===e.category}))),A(t.filter((function(e){return"accessories"===e.category}))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.warn("products loading error!");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){Z(),H(f("cart")),J(f("favourites"))}),[]),Object(i.useEffect)((function(){x("cart",D),x("favourites",G)}),[D,G]);var K=Object(i.useMemo)((function(){return{currentPage:n,setCurrentPage:a,products:u,setProducts:b,phones:p,setPhones:N,tablets:C,setTablets:k,accessories:I,setAccessories:A,sortType:M,setSortType:F,itemsOnPage:L,setItemsOnPage:V,cartItems:D,setCartItems:H,favouritesItems:G,setFavouritesItems:J,queryValue:X,setqueryValue:Y}}),[n,a,u,b,p,N,C,k,I,A,M,F,L,V,D,H,G,J,X,Y]);return Object(l.jsx)(v.Provider,{value:K,children:t})},g=c(8),y=(c(33),c(9)),C=c.n(y),k=function(){window.scrollTo({top:0,behavior:"smooth"})},P=function(e){var t=e.productsListLenth,c=e.itemsOnPage,s=e.currentPage,n=e.onPageChange,a=Object(i.useState)([]),r=Object(d.a)(a,2),o=r[0],u=r[1],j=function(){return Math.ceil(t/+c)};return Object(i.useEffect)((function(){j();var e=Array.from({length:j()},(function(e,t){return t+1}));u(e)}),[t,c]),Object(l.jsxs)("div",{className:"pagination",children:[Object(l.jsx)("button",{type:"button",className:C()("pagination__item previous",{disabled:1===s}),disabled:1===s,onClick:function(){n(s-1),k()}}),Object(l.jsx)("ul",{className:"pagination__buttons",children:o.map((function(e){return Object(l.jsx)("li",{className:C()("pagination__item",{active:s===e}),children:Object(l.jsx)("button",{type:"button",className:"pagination__button",onClick:function(){n(e),k()},children:e})},e)}))}),Object(l.jsx)("button",{type:"button",className:C()("pagination__item next",{disabled:s===o.length}),disabled:s===o.length,onClick:function(){return n(s+1)}})]})},w=(c(34),c(35),function(e){var t=e.title,c=e.value;return Object(l.jsxs)("div",{className:"detail",children:[Object(l.jsx)("p",{className:"detail__title",children:t}),Object(l.jsx)("p",{className:"detail__value",children:c})]})}),I=(c(36),function(e){var t=e.product,c=Object(i.useContext)(v),s=c.cartItems,n=c.setCartItems,a=c.favouritesItems,r=c.setFavouritesItems,o=Object(i.useMemo)((function(){return s.some((function(e){return e.product.id===t.id}))}),[t,s]),u=Object(i.useMemo)((function(){return a.some((function(e){return e.id===t.id}))}),[t,a]),j=Object(i.useCallback)((function(e){if(e){var t={id:+e.id,qnty:1,product:e};o||n((function(e){return[].concat(Object(g.a)(e),[t])}))}}),[o]),d=Object(i.useCallback)((function(e){r(u?function(t){return t.filter((function(t){return t.id!==e.id}))}:function(t){return[].concat(Object(g.a)(t),[e])})}),[u]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{type:"button",name:"add-to-card",className:C()("add-to-card primary__button button",{selected:o}),onClick:function(){return j(t)},children:o?"Added to cart":"Add to cart"}),Object(l.jsx)("button",{type:"button",name:"add-to-favourite",className:C()("add-to-favourite button icon",{selected:u}),onClick:function(){return d(t)}})]})}),A=function(e){var t=e.product,c=t.itemId,s=t.fullPrice,n=t.price,r=t.screen,i=t.capacity,o=t.ram,u=t.image;return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsxs)(a.b,{to:"/phones/".concat(c),children:[Object(l.jsx)("img",{src:"./".concat(u),alt:t.name,className:"product__image"}),Object(l.jsx)("p",{className:"product__title",children:t.name}),Object(l.jsxs)("div",{className:"product__prices",children:[Object(l.jsxs)("p",{className:"new-price",children:["$"," ",n]}),Object(l.jsxs)("p",{className:"old-price",children:["$"," ",s]})]}),Object(l.jsxs)("div",{className:"product__details",children:[Object(l.jsx)(w,{title:"Screen",value:r}),Object(l.jsx)(w,{title:"Capacity",value:i}),Object(l.jsx)(w,{title:"RAM",value:o})]})]}),Object(l.jsx)("div",{className:"product__actions",children:Object(l.jsx)(I,{product:t})})]})},S=(c(37),function(e){var t=e.products,c=Object(i.useContext)(v),s=c.sortType,n=c.itemsOnPage,a=Object(i.useState)(1),r=Object(d.a)(a,2),o=r[0],u=r[1],j=Object(i.useMemo)((function(){var e=Object(g.a)(t);if("No sorting"!==s)switch(s){case"Newest":e=e.sort((function(e,t){return t.year-e.year}));break;case"Alphabetically":e=e.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"Cheapest":e=e.sort((function(e,t){return e.price-t.price}))}if("All"===n)return e;var c=o*+n-+n,a=o*+n;return(c>e.length||a>e.length+ +n)&&u(1),e.slice(c,a)}),[s,n,t,o]);return Object(l.jsxs)("div",{className:"product-list__wrapper",children:[Object(l.jsx)("ul",{className:"product-list","data-cy":"cardsContainer",children:j.map((function(e){return Object(l.jsx)("li",{className:"product-list__item",children:Object(l.jsx)(A,{product:e})},e.id)}))}),"All"!==n&&Object(l.jsx)(P,{itemsOnPage:n,productsListLenth:t.length,currentPage:o,onPageChange:function(e){u(e)}})]})}),q=(c(38),function(){return Object(l.jsx)("div",{className:"empty-page",children:Object(l.jsx)("h2",{children:"No products added yet..."})})}),M=(c(39),function(){var e=Object(i.useContext)(v),t=e.sortType,c=e.setSortType,s=e.itemsOnPage,n=e.setItemsOnPage;return Object(l.jsxs)("div",{className:"selectors__wrapper",children:[Object(l.jsxs)("div",{className:"select__sort-by",children:[Object(l.jsx)("label",{htmlFor:"sort-by",className:"selector__title",children:"Sort by"}),Object(l.jsxs)("select",{id:"sort-by",className:"select__field select__field--sort",value:t,onChange:function(e){return c(e.target.value)},children:[Object(l.jsx)("option",{value:"No sorting",children:"No sorting"}),Object(l.jsx)("option",{value:"Newest",children:"Newest"}),Object(l.jsx)("option",{value:"Alphabetically",children:"Alphabetically"}),Object(l.jsx)("option",{value:"Cheapest",children:"Cheapest"})]})]}),Object(l.jsxs)("div",{className:"select__items-on-page",children:[Object(l.jsx)("label",{htmlFor:"items-on-page",className:"selector__title",children:"Items on page"}),Object(l.jsxs)("select",{id:"items-on-page",className:"select__field select__field--items",value:s,onChange:function(e){return n(e.target.value)},children:[Object(l.jsx)("option",{value:"All",children:"All"}),Object(l.jsx)("option",{value:"4",children:"4"}),Object(l.jsx)("option",{value:"8",children:"8"}),Object(l.jsx)("option",{value:"16",children:"16"})]})]})]})}),F=function(){var e=Object(i.useContext)(v),t=e.setCurrentPage,c=e.currentPage,s=e.accessories,n=e.queryValue;Object(i.useEffect)((function(){t("Accessories"),k()}),[]);var a=Object(i.useMemo)((function(){return s.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}),[s,n]);return Object(l.jsxs)("div",{className:"product__page",children:[Object(l.jsx)(u,{currentPage:c}),Object(l.jsx)("h1",{className:"page__title",children:c}),Object(l.jsx)("p",{className:"products-range",children:"".concat(s.length," models")}),0===s.length?Object(l.jsx)(q,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{}),Object(l.jsx)(S,{products:a})]})]})},T=(c(40),function(){var e=Object(r.p)();return Object(l.jsx)("button",{type:"button",className:"back-button button","data-cy":"backButton",onClick:function(){return e(-1)},children:"Back"})}),E=(c(41),c(24)),L=(c(42),function(e){var t=e.item,c=t.qnty,s=t.product,n=Object(i.useContext)(v).setCartItems,a=function(e,t){n((function(c){return c.map((function(c){return c.id!==e.id?c:Object(E.a)(Object(E.a)({},c),{},{qnty:"-"===t?c.qnty-1:c.qnty+1})}))}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"cross__icon icon",type:"button",onClick:function(){return e=s,void n((function(t){return t.filter((function(t){return t.product!==e}))}));var e}}),Object(l.jsx)("div",{className:"item__image",children:Object(l.jsx)("img",{src:"./".concat(s.image),alt:s.name})}),Object(l.jsx)("p",{className:"item__title",children:s.name}),Object(l.jsxs)("div",{className:"item-counter",children:[Object(l.jsx)("button",{className:C()("minus-button button",{disabled:1===c}),type:"button",disabled:1===c,onClick:function(){return a(t,"-")},children:"-"}),Object(l.jsx)("p",{className:"item__amount",children:c}),Object(l.jsx)("button",{className:"plus-button button",type:"button",onClick:function(){return a(t,"+")},children:"+"})]}),Object(l.jsx)("p",{className:"total__price",children:"".concat(s.price,"$")})]})}),V=(c(43),function(e){var t=e.cartItems;return Object(l.jsx)("div",{className:"cart__list",children:t.map((function(e){return Object(l.jsx)("div",{className:"cart__item",children:Object(l.jsx)(L,{item:e})},e.id)}))})}),B=(c(44),function(e){var t=e.totalAmount,c=e.totalQnty,s=Object(i.useState)(!0),n=Object(d.a)(s,2),a=n[0],r=n[1];return Object(l.jsxs)("div",{className:"cart-total__block",children:[Object(l.jsx)("p",{className:"total-price",children:"".concat(t,"$")}),1===c?Object(l.jsx)("p",{className:"total-item",children:"Total for ".concat(c," item")}):Object(l.jsx)("p",{className:"total-item",children:"Total for ".concat(c," items")}),Object(l.jsx)("button",{type:"button",className:C()("button primary__button total-price__button",{active:!a}),onClick:function(){return r(!a)},children:a?"Checkout":"We are sorry, but this feature is not implemented yet"})]})}),Q=function(){var e=Object(i.useContext)(v),t=e.setCurrentPage,c=e.cartItems;Object(i.useEffect)((function(){t("Cart"),k()}),[]);var s=Object(i.useMemo)((function(){return c.reduce((function(e,t){return e+t.qnty*t.product.price}),0)}),[c]),n=Object(i.useMemo)((function(){return c.reduce((function(e,t){return e+t.qnty}),0)}),[c]);return Object(l.jsxs)("div",{className:"cart-page",children:[Object(l.jsx)("div",{className:"back-button__wrapper",children:Object(l.jsx)(T,{})}),Object(l.jsx)("h1",{className:"cart-page__title",children:"Cart"}),0===c.length?Object(l.jsx)(q,{}):Object(l.jsxs)("div",{className:"cart-information__wrapper",children:[Object(l.jsx)(V,{cartItems:c}),Object(l.jsx)(B,{totalAmount:s,totalQnty:n})]})]})},D=(c(45),function(){var e=Object(i.useContext)(v),t=e.currentPage,c=e.setCurrentPage,s=e.favouritesItems,n=e.queryValue;Object(i.useEffect)((function(){c("Favourites"),k()}),[]);var a=Object(i.useMemo)((function(){return s.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}),[s,n]);return Object(l.jsxs)("div",{className:"favourites__page",children:[Object(l.jsx)(u,{currentPage:t}),Object(l.jsx)("h1",{className:"fvourites__title",children:"Favourites"}),0===s.length&&Object(l.jsx)(q,{}),1===s.length&&Object(l.jsx)("p",{className:"favourites-items__amount",children:"".concat(s.length," item")}),s.length>1&&Object(l.jsx)("p",{className:"favourites-items__amount",children:"".concat(s.length," items")}),Object(l.jsx)(S,{products:a})]})}),H=(c(46),function(){var e=Object(i.useState)(1),t=Object(d.a)(e,2),c=t[0],s=t[1],n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=c;e>0&&e+c<=3?t+=1:e<0&&e+c>=1?t-=1:e>0&&e+c>3?t=1:e<0&&e+c<1&&(t=3),s(t)},a=function(e){s(e)};return Object(i.useEffect)((function(){var e=setInterval((function(){n()}),5e3);return function(){clearInterval(e)}}),[c]),Object(l.jsxs)("section",{className:"slider",children:[Object(l.jsxs)("div",{className:"slider__field",children:[Object(l.jsx)("button",{className:"slider__button prev",type:"button",onClick:function(){return n(-1)}}),Object(l.jsx)("div",{className:"slider__poster poster--".concat(c)}),Object(l.jsx)("button",{className:"slider__button next",type:"button",onClick:function(){return n(1)}})]}),Object(l.jsxs)("div",{className:"slider__dots",children:[Object(l.jsx)("button",{type:"button",className:C()("slider__dot",{"slider__dot--active":1===c}),onClick:function(){return a(1)}}),Object(l.jsx)("button",{type:"button",className:C()("slider__dot",{"slider__dot--active":2===c}),onClick:function(){return a(2)}}),Object(l.jsx)("button",{type:"button",className:C()("slider__dot",{"slider__dot--active":3===c}),onClick:function(){return a(3)}})]})]})}),R=(c(47),function(e){var t=e.phonesQuantity,c=e.tabletsQuantity,s=e.accessoriesQuantity;return Object(l.jsxs)("section",{className:"shop-by-category page__section",children:[Object(l.jsx)("div",{className:"shop-by-category__top",children:Object(l.jsx)("h1",{className:"shop-by-category__title",children:"Shop by category"})}),Object(l.jsxs)("ul",{className:"category__list",children:[Object(l.jsx)("li",{className:"category__item",children:Object(l.jsxs)(a.b,{className:"category__link phones",to:"/phones",children:[Object(l.jsx)("div",{className:"category__image"}),Object(l.jsx)("h2",{className:"category__title",children:"Mobile phones"}),Object(l.jsx)("p",{className:"category__quantity",children:"".concat(t," models")})]})}),Object(l.jsx)("li",{className:"category__item",children:Object(l.jsxs)(a.b,{className:"category__link tablets",to:"/tablets",children:[Object(l.jsx)("div",{className:"category__image"}),Object(l.jsx)("h2",{className:"category__title",children:"Tablets"}),Object(l.jsx)("p",{className:"category__quantity",children:"".concat(c," models")})]})}),Object(l.jsx)("li",{className:"category__item",children:Object(l.jsxs)(a.b,{className:"category__link accessories",to:"/accessories",children:[Object(l.jsx)("div",{className:"category__image"}),Object(l.jsx)("h2",{className:"category__title",children:"Accessories"}),Object(l.jsx)("p",{className:"category__quantity",children:"".concat(s," models")})]})})]})]})}),$=(c(48),function(e){var t=e.title,c=e.products,s=Object(i.useState)(0),n=Object(d.a)(s,2),a=n[0],r=n[1],o=288,u=c.length*o-1152;return Object(l.jsxs)("section",{className:"page__section",children:[Object(l.jsxs)("div",{className:"promo__top",children:[Object(l.jsx)("h1",{className:"promo__title",children:t}),Object(l.jsxs)("div",{className:"promo__control",children:[Object(l.jsx)("button",{className:C()("promo__button prev icon",{disabled:0===a}),type:"button",onClick:function(){r((function(e){return e-o}))},disabled:0===a}),Object(l.jsx)("button",{className:C()("promo__button next icon",{disabled:a===u}),type:"button",onClick:function(){r((function(e){return e+o}))},disabled:a===u})]})]}),Object(l.jsx)("ul",{className:"product-slider__list",style:{transform:"translateX(-".concat(a,"px)")},children:c.map((function(e){return Object(l.jsx)("li",{className:"product-slider__item",children:Object(l.jsx)(A,{product:e})},e.id)}))})]})}),G=function(){var e=Object(i.useContext)(v),t=e.setCurrentPage,c=e.products,s=e.phones,n=e.tablets,a=e.accessories;Object(i.useEffect)((function(){t("Home"),k()}),[]);var r=Object(i.useMemo)((function(){return Object(g.a)(c).sort((function(e,t){return t.fullPrice-t.price-(e.fullPrice-e.price)}))}),[c]),o=Object(i.useMemo)((function(){return Object(g.a)(c).sort((function(e,t){return t.year-e.year}))}),[c]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(H,{}),Object(l.jsx)("div",{className:"product-list__wrapper product-list__wrapper--short",children:Object(l.jsx)($,{title:"Hot prices",products:r})}),Object(l.jsx)(R,{phonesQuantity:s.length,tabletsQuantity:n.length,accessoriesQuantity:a.length}),Object(l.jsx)("div",{className:"product-list__wrapper product-list__wrapper--short",children:Object(l.jsx)($,{title:"Brand new models",products:o})})]})},J=(c(49),function(){var e=Object(i.useContext)(v),t=e.setCurrentPage,c=e.currentPage,s=e.phones,n=e.queryValue;Object(i.useEffect)((function(){t("Phones"),k()}),[]);var a=Object(i.useMemo)((function(){return s.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}),[s,n]);return Object(l.jsxs)("div",{className:"product__page",children:[Object(l.jsx)(u,{currentPage:c}),Object(l.jsx)("h1",{className:"page__title",children:"Mobile phones"}),Object(l.jsx)("p",{className:"products-range",children:"".concat(a.length," models")}),0===a.length?Object(l.jsx)(q,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{}),Object(l.jsx)(S,{products:a})]})]})}),z=function(){var e=Object(i.useContext)(v),t=e.setCurrentPage,c=e.currentPage,s=e.tablets,n=e.queryValue;Object(i.useEffect)((function(){t("Tablets"),k()}),[]);var a=Object(i.useMemo)((function(){return s.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}),[s,n]);return Object(l.jsxs)("div",{className:"product__page",children:[Object(l.jsx)(u,{currentPage:c}),Object(l.jsx)("h1",{className:"page__title",children:c}),Object(l.jsx)("p",{className:"products-range",children:"".concat(s.length," models")}),0===s.length?Object(l.jsx)(q,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{}),Object(l.jsx)(S,{products:a})]})]})},W=(c(50),c(51),c(52),function(){return Object(l.jsx)(a.c,{to:"/",className:"logo icon",onClick:k})}),X=(c(53),function(){var e=Object(i.useContext)(v),t=e.currentPage,c=e.queryValue,s=e.setqueryValue;return Object(l.jsxs)("form",{className:"header__search",children:[Object(l.jsx)("input",{type:"text",name:"search",className:"header__input",placeholder:"Search in ".concat(t.toLowerCase(),"..."),autoComplete:"off",value:c,onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("div",{className:"search__icon icon"})]})}),Y=function(){var e=Object(i.useContext)(v),t=e.currentPage,c=e.cartItems,s=e.favouritesItems;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("div",{className:"header__nav",children:Object(l.jsxs)("nav",{className:"nav-bar",children:[Object(l.jsx)(W,{}),Object(l.jsxs)("ul",{className:"menu__list",children:[Object(l.jsx)("li",{className:"menu__item",children:Object(l.jsx)(a.c,{to:"/",className:function(e){return e.isActive?"menu__link activ-link":"menu__link"},children:"Home"})}),Object(l.jsx)("li",{className:"menu__item",children:Object(l.jsx)(a.c,{to:"/phones",className:function(e){return e.isActive?"menu__link activ-link":"menu__link"},children:"Phones"})}),Object(l.jsx)("li",{className:"menu__item",children:Object(l.jsx)(a.c,{to:"/tablets",className:function(e){return e.isActive?"menu__link activ-link":"menu__link"},children:"Tablets"})}),Object(l.jsx)("li",{className:"menu__item",children:Object(l.jsx)(a.c,{to:"/accessories",className:function(e){return e.isActive?"menu__link activ-link":"menu__link"},children:"Accessories"})})]})]})}),Object(l.jsxs)("div",{className:"header__actions",children:["Home"!==t&&"Cart"!==t&&"ProductDetails"!==t&&Object(l.jsx)(X,{}),Object(l.jsx)("div",{className:"actions__block",children:Object(l.jsx)(a.c,{to:"/favorites",className:function(e){return e.isActive?"favourites__icon icon active-block":"favourites__icon icon"},children:0!==s.length&&Object(l.jsx)("div",{className:"items__amount",children:s.length})})}),Object(l.jsx)("div",{className:"actions__block",children:Object(l.jsx)(a.c,{to:"/cart",className:function(e){return e.isActive?"cart__icon icon active-block":"cart__icon icon"},children:0!==c.length&&Object(l.jsx)("div",{className:"items__amount",children:c.length})})})]})]})},Z=(c(54),function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("div",{className:"footer__container container",children:[Object(l.jsx)(W,{}),Object(l.jsxs)("div",{className:"footer__nav",children:[Object(l.jsx)(a.b,{to:"/",className:"footer__link",target:"_blank",children:"Github"}),Object(l.jsx)(a.b,{to:"/",className:"footer__link",target:"_blank",children:"Contacts"}),Object(l.jsx)(a.b,{to:"/",className:"footer__link",target:"_blank",children:"rights"})]}),Object(l.jsx)("button",{className:"back-to-top",type:"button",onClick:k,children:"Back to top"})]})})}),K=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Y,{}),Object(l.jsx)("main",{className:"main container",children:Object(l.jsx)(r.a,{})}),Object(l.jsx)(Z,{})]})},U=(c(55),c(56),function(e){var t=e.productDetails,c=Object(i.useContext)(v),s=c.products,n=c.cartItems,r=c.favouritesItems,o=c.setCartItems,u=c.setFavouritesItems,j=Object(i.useState)(""),b=Object(d.a)(j,2),m=b[0],O=b[1];Object(i.useEffect)((function(){t&&O(t.images[0])}),[t]);var _=Object(i.useMemo)((function(){return t&&n.some((function(e){return e.product.itemId===t.id}))}),[t,n]),h=Object(i.useMemo)((function(){return t&&r.some((function(e){return e.itemId===t.id}))}),[t,r]),p=Object(i.useCallback)((function(e){if(e){var t=s.filter((function(t){return t.itemId===e}))[0];u((function(e){return h?e.filter((function(e){return e.id!==t.id})):[].concat(Object(g.a)(e),[t])}))}}),[h]),x=Object(i.useCallback)((function(e){if(e){var t=s.filter((function(t){return t.itemId===e}))[0],c={id:+t.id,qnty:1,product:t};if(_)return;o((function(e){return[].concat(Object(g.a)(e),[c])}))}}),[_]),f=function(e){switch(e){case"black":return"#000";case"spacegray":return"#808080";case"gold":return"#ffefd5";case"midnightgreen":return"#008080";case"silver":return"#c0c0c0";case"yellow":return"#ffff00";case"green":return"#66cdaa";case"red":return"#ff0000";case"white":return"#fff";case"gray":return"#d3d3d3";case"purple":return"#e6e6fa";case"rosegold":return"#ffdab9";case"coral":return"#f08080";default:return 0}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"product__title",children:null===t||void 0===t?void 0:t.name}),Object(l.jsxs)("section",{className:"product__section grid",children:[Object(l.jsxs)("div",{className:"images__selector grid__item--fullScreen-1-12",children:[Object(l.jsx)("div",{className:"images__list",children:null===t||void 0===t?void 0:t.images.map((function(e){return Object(l.jsx)("div",{className:C()("image__list-item",{selected:e===m}),role:"button",tabIndex:0,onMouseDown:function(){return O(e)},children:Object(l.jsx)("img",{src:e,alt:null===t||void 0===t?void 0:t.name})},e)}))}),Object(l.jsx)("div",{className:"selected__image",children:Object(l.jsx)("img",{src:"./".concat(m),alt:null===t||void 0===t?void 0:t.name,className:"product-details__selected-image"})})]}),Object(l.jsxs)("div",{className:"product-detail__actions grid__item--fullScreen-14-20",children:[Object(l.jsxs)("div",{className:"colors__selector",children:[Object(l.jsx)("p",{className:"detail-selector__title",children:"Available colors"}),Object(l.jsx)("ul",{className:"colors__list",children:null===t||void 0===t?void 0:t.colorsAvailable.map((function(e){return Object(l.jsx)("li",{className:C()("colors__item",{selected:e===t.color}),children:Object(l.jsx)(a.b,{to:"/phones/".concat(t.namespaceId,"-").concat(t.capacity.toLowerCase(),"-").concat(e),className:"color__handler-link",style:{background:"".concat(f(e))}})},e)}))})]}),Object(l.jsxs)("div",{className:"capacity__selector",children:[Object(l.jsx)("p",{className:"detail-selector__title",children:"Select capacity"}),Object(l.jsx)("ul",{className:"capacity__list",children:null===t||void 0===t?void 0:t.capacityAvailable.map((function(e){return Object(l.jsx)("li",{className:"capacity__item",children:Object(l.jsx)(a.b,{to:"/phones/".concat(t.namespaceId,"-").concat(e.toLowerCase(),"-").concat(t.color),className:C()("capacity__handler-link",{selected:e===t.capacity}),children:e.replace("GB"," GB")})},e)}))})]}),Object(l.jsxs)("div",{className:"prices",children:[Object(l.jsx)("p",{className:"new-price",children:"$".concat(null===t||void 0===t?void 0:t.priceDiscount)}),Object(l.jsx)("p",{className:"full-price",children:"$".concat(null===t||void 0===t?void 0:t.priceRegular)})]}),Object(l.jsxs)("div",{className:"product__actions product-detail__buttons",children:[Object(l.jsx)("button",{type:"button",name:"add-to-card",className:C()("add-to-card primary__button button",{selected:_}),onClick:function(){return x(t&&(null===t||void 0===t?void 0:t.id))},children:_?"Added to cart":"Add to cart"}),Object(l.jsx)("button",{type:"button",name:"add-to-favourite",className:C()("add-to-favourite button icon",{selected:h}),onClick:function(){return p(t&&(null===t||void 0===t?void 0:t.id))}})]}),Object(l.jsxs)("div",{className:"product__details",children:[Object(l.jsx)(w,{title:"Screen",value:null===t||void 0===t?void 0:t.screen}),Object(l.jsx)(w,{title:"Resolution",value:null===t||void 0===t?void 0:t.resolution}),Object(l.jsx)(w,{title:"Processor",value:null===t||void 0===t?void 0:t.processor}),Object(l.jsx)(w,{title:"RAM",value:null===t||void 0===t?void 0:t.ram})]})]})]}),Object(l.jsxs)("section",{className:"product__description grid",children:[Object(l.jsxs)("div",{className:"about grid__item--fullScreen-1-12",children:[Object(l.jsx)("h2",{className:"about__title",children:"About"}),Object(l.jsxs)("div",{className:"about__articles",children:[Object(l.jsxs)("article",{className:"about__article",children:[Object(l.jsx)("h3",{className:"article__title",children:null===t||void 0===t?void 0:t.description[0].title}),Object(l.jsx)("div",{className:"article__text",children:null===t||void 0===t?void 0:t.description[0].text})]}),Object(l.jsxs)("article",{className:"about__article",children:[Object(l.jsx)("h3",{className:"article__title",children:null===t||void 0===t?void 0:t.description[1].title}),Object(l.jsx)("div",{className:"article__text",children:null===t||void 0===t?void 0:t.description[1].text})]}),Object(l.jsxs)("article",{className:"about__article",children:[Object(l.jsx)("h3",{className:"article__title",children:null===t||void 0===t?void 0:t.description[2].title}),Object(l.jsx)("div",{className:"article__text",children:null===t||void 0===t?void 0:t.description[2].text})]})]})]}),Object(l.jsxs)("div",{className:"specification grid__item--fullScreen-14-24",children:[Object(l.jsx)("h2",{className:"specification__title",children:"Tech specs"}),Object(l.jsxs)("div",{className:"product__details",children:[Object(l.jsx)(w,{title:"Screen",value:null===t||void 0===t?void 0:t.screen}),Object(l.jsx)(w,{title:"Resolution",value:null===t||void 0===t?void 0:t.resolution}),Object(l.jsx)(w,{title:"Processor",value:null===t||void 0===t?void 0:t.processor}),Object(l.jsx)(w,{title:"RAM",value:null===t||void 0===t?void 0:t.ram}),Object(l.jsx)(w,{title:"Built in memory",value:null===t||void 0===t?void 0:t.capacity}),Object(l.jsx)(w,{title:"Camera",value:null===t||void 0===t?void 0:t.camera}),Object(l.jsx)(w,{title:"Zoom",value:null===t||void 0===t?void 0:t.zoom}),Object(l.jsx)(w,{title:"Cell",value:null===t||void 0===t?void 0:t.cell.join(", ")})]})]})]})]})}),ee=(c(57),function(e){var t=e.title;return Object(l.jsx)("div",{className:"not-found-page",children:Object(l.jsx)("h1",{className:"not-found-page__title",children:t})})}),te=function(){var e=Object(i.useContext)(v),t=e.setCurrentPage,c=e.products,s=Object(i.useState)(null),n=Object(d.a)(s,2),a=n[0],o=n[1],b=Object(r.r)().productId,O=function(){var e=Object(j.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,b){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,p(b);case 5:t=e.sent,o(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.warn("product details loading error!");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){O(),k()}),[b]),Object(i.useEffect)((function(){t("ProductDetails"),k()}),[]),Object(l.jsx)(l.Fragment,{children:a?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"product-details__page",children:[Object(l.jsx)(u,{currentPage:"Phones",item:null===a||void 0===a?void 0:a.name}),Object(l.jsx)(T,{}),Object(l.jsx)(U,{productDetails:a}),Object(l.jsx)("section",{className:"alternative-products__list",children:Object(l.jsx)("div",{className:"product-list__wrapper product-list__wrapper--short",children:Object(l.jsx)($,{title:"You may also like",products:c})})})]})}):Object(l.jsx)(ee,{title:"Product was not found"})})},ce=function(){return Object(l.jsx)(a.a,{children:Object(l.jsx)(N,{children:Object(l.jsx)(r.d,{children:Object(l.jsxs)(r.b,{path:"/",element:Object(l.jsx)(K,{}),children:[Object(l.jsx)(r.b,{index:!0,element:Object(l.jsx)(G,{})}),Object(l.jsxs)(r.b,{path:"phones",children:[Object(l.jsx)(r.b,{index:!0,element:Object(l.jsx)(J,{})}),Object(l.jsx)(r.b,{path:":productId",element:Object(l.jsx)(te,{})})]}),Object(l.jsx)(r.b,{path:"phones",element:Object(l.jsx)(J,{})}),Object(l.jsx)(r.b,{path:"tablets",element:Object(l.jsx)(z,{})}),Object(l.jsx)(r.b,{path:"accessories",element:Object(l.jsx)(F,{})}),Object(l.jsx)(r.b,{path:"favorites",element:Object(l.jsx)(D,{})}),Object(l.jsx)(r.b,{path:"cart",element:Object(l.jsx)(Q,{})}),Object(l.jsx)(r.b,{path:"*",element:Object(l.jsx)(ee,{title:"Page not found"})})]})})})})},se=document.getElementById("root");n.a.render(Object(l.jsx)(ce,{}),se)}]),[[58,1,2]]]);
//# sourceMappingURL=main.ac96655b.chunk.js.map