(this.webpackJsonppizza=this.webpackJsonppizza||[]).push([[0],{24:function(e,t,a){e.exports=a(44)},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),s=a(8),i=a(2),o=a(9),m=a.n(o),u=a(10),p=a(6),d=Object(n.createContext)(),E=function(e){var t=Object(n.useState)(null),a=Object(p.a)(t,2),l=a[0],c=a[1],s=function(){var e=Object(u.a)(m.a.mark((function e(){var t,a,n,r,l,s,i,o,u,p,d,E;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/toppings");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,fetch("/api/sauce");case 8:return n=e.sent,e.next=11,n.json();case 11:return r=e.sent,e.next=14,fetch("/api/cheese");case 14:return l=e.sent,e.next=17,l.json();case 17:return s=e.sent,e.next=20,fetch("/api/crust");case 20:return i=e.sent,e.next=23,i.json();case 23:return o=e.sent,e.next=26,fetch("/api/crust-type");case 26:return u=e.sent,e.next=29,u.json();case 29:return p=e.sent,e.next=32,fetch("/api/beverages");case 32:return d=e.sent,e.next=35,d.json();case 35:E=e.sent,c({crustTypes:p,crustSizes:o,cheese:s,sauce:r,toppings:a,beverages:E});case 37:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l||s()}),[]),r.a.createElement(d.Provider,{value:{pizza:l}},e.children)},v=(a(30),Object(i.g)((function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),l=a[0],c=a[1],s=function(t){t.preventDefault(),l.length>0&&e.history.push("/orders/".concat(l))};return r.a.createElement("div",{className:"nav-search"},r.a.createElement("div",{className:"search-bar"},r.a.createElement("div",{className:"search-box"},r.a.createElement("form",{onSubmit:s},r.a.createElement("input",{type:"text",placeholder:"myemail@example.com",onChange:function(e){return c(e.target.value)}}))),r.a.createElement("div",{className:"search-btn"},r.a.createElement("button",{onClick:s},r.a.createElement("span",null,"Search")))))}))),h=(a(36),function(){return r.a.createElement("header",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"nav-left"},r.a.createElement("div",{className:"logo"},r.a.createElement(s.b,{to:"/"},r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("img",{src:"/images/logo.png",alt:"logo"})),r.a.createElement("div",{className:"logo-text"},r.a.createElement("span",null,"PIZZA STACK"))))),r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"searchbar-wrapper"},r.a.createElement("div",{className:"label"},r.a.createElement("span",null,"ORDER LOOKUP:")),r.a.createElement(v,null)))))}),g=(a(37),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"generic-text"},r.a.createElement("p",null,"Pizzas are delivered shortly after they are cooked. Delivery time may vary based on location, traffic, driver safety, and other factors."),r.a.createElement("p",null,"Expect your pizza to arrive within an hour, but no less than thirty minutes."),r.a.createElement("p",null,"Payment is required upon delivery. We accept cash, credit, and mobile payments. Please consider giving your driver a tip. Keep in mind our drivers carry less than $30. It is advised that cash payments should be paid in exact change.")),r.a.createElement("p",null,"Project stack:"),r.a.createElement("div",{className:"stack"},r.a.createElement("img",{src:"/images/spring-boot.png",alt:"spring-boot-icon"}),r.a.createElement("img",{src:"/images/mongodb.png",alt:"mongo-icon"}),r.a.createElement("img",{src:"/images/react.png",alt:"react-icon"}))))}),b=a(18),f=a(1),N=a(45),y=(a(38),function(e){var t=e.order;return r.a.createElement("div",{className:"order-review"},r.a.createElement("div",{className:"order-pizza"},r.a.createElement("h3",null,"Crust Type"),r.a.createElement("div",{className:"order-item",key:Object(N.a)()},r.a.createElement("div",{className:"left"},r.a.createElement("p",null,t.crustType.type))),r.a.createElement("h3",null,"Crust Size"),r.a.createElement("div",{className:"order-item",key:Object(N.a)()},r.a.createElement("div",{className:"left"},r.a.createElement("p",null,t.crust.size)),r.a.createElement("div",{className:"right"},r.a.createElement("p",null,"$",(parseFloat(t.crust.price)*parseFloat(t.crustType.priceMultiplier)).toFixed(2)))),r.a.createElement("h3",null,"Cheese"),r.a.createElement("div",{className:"order-item",key:Object(N.a)()},r.a.createElement("div",{className:"left"},r.a.createElement("p",null,t.cheese.amount)),r.a.createElement("div",{className:"right"},r.a.createElement("p",null,"$",parseFloat(t.cheese.price).toFixed(2)))),r.a.createElement("h3",null,"Sauce"),r.a.createElement("div",{className:"order-item",key:Object(N.a)()},r.a.createElement("div",{className:"left"},r.a.createElement("p",null,t.sauce.amount)),r.a.createElement("div",{className:"right"},r.a.createElement("p",null,"$",parseFloat(t.sauce.price).toFixed(2))))),r.a.createElement("div",{className:"order-toppings"},r.a.createElement("h3",null,"Toppings"),0===Object.keys(t.toppings).length?r.a.createElement("div",{className:"none"},"no toppings"):"",t.toppings.map((function(e){return r.a.createElement("div",{className:"order-item",key:Object(N.a)()},r.a.createElement("div",{className:"left"},r.a.createElement("p",null,e.name)),r.a.createElement("div",{className:"right"},r.a.createElement("p",null,"$",parseFloat(e.price*t.crust.toppingMultiplier).toFixed(2))))}))),r.a.createElement("div",{className:"order-beverages"},r.a.createElement("h3",null,"Beverages"),0===Object.keys(t.beverages).length?r.a.createElement("div",{className:"none"},"no beverages"):"",t.beverages.map((function(e){return r.a.createElement("div",{className:"order-item",key:Object(N.a)()},r.a.createElement("div",{className:"left"},r.a.createElement("p",null,e.name)),r.a.createElement("div",{className:"right"},r.a.createElement("p",null,"$",parseFloat(e.price).toFixed(2))))}))),r.a.createElement("div",{className:"order-address"},r.a.createElement("h3",null,"Delivery Info"),r.a.createElement("p",{className:"delivery-label"},"Email"),r.a.createElement("p",{className:"delivery-field"},t.email),r.a.createElement("p",{className:"delivery-label"},"Phone Number"),r.a.createElement("p",{className:"delivery-field"},"(",t.phoneNumber.substring(0,3),") ",t.phoneNumber.substring(3,6),"-",t.phoneNumber.substring(6,10)),r.a.createElement("p",{className:"delivery-label"},"Deliver to"),r.a.createElement("p",{className:"delivery-field"},t.streetAddress," ",r.a.createElement("br",null)," ",t.city,", ",t.state," ",t.zipcode)),r.a.createElement("div",{className:"order-total"},r.a.createElement("h1",null,"Total"),r.a.createElement("p",null,"$",e.total)))}),O=(a(39),Object(i.g)((function(e){var t=Object(n.useState)({email:"",phoneNumber:"",streetAddress:"",city:"",state:"AL",zipcode:"",crustType:{},crust:{},sauce:{},cheese:{},toppings:[],beverages:[]}),a=Object(p.a)(t,2),l=a[0],c=a[1],s=Object(n.useContext)(d).pizza,i=Object(n.useState)(!0),o=Object(p.a)(i,2),E=o[0],v=o[1],h=Object(n.useState)(0),g=Object(p.a)(h,2),O=g[0],j=g[1],k=Object(n.useState)([]),x=Object(p.a)(k,2),T=x[0],w=x[1],z=Object(n.useState)(!1),C=Object(p.a)(z,2),A=C[0],S=C[1],F=function(){var e=[];return 0===l.email.length&&e.push("Please enter your email address."),l.email.includes("@")||e.push("Enter a valid email. Must contain @ symbol."),0===l.phoneNumber.length&&e.push("Please enter your phone number."),10!==l.phoneNumber.length&&e.push('Phone number must be 10 digits: "555-555-5555"'),0===l.streetAddress.length&&e.push("Please enter your street address."),0===l.city.length&&e.push("Please enter your city."),0===l.state.length&&e.push("Please select your state."),0===l.zipcode.length&&e.push("Please enter your zipcode."),5!==l.zipcode.length&&e.push("Your zipcode must be 5 digits."),0===Object.keys(l.crustType).length&&e.push("Please select a crust thickness."),0===Object.keys(l.crust).length&&e.push("Please select a crust size."),0===Object.keys(l.sauce).length&&e.push("Please select a sauce option."),0===Object.keys(l.cheese).length&&e.push("Please select a cheese option."),e.length>0?(w(e),v(!1),window.scrollTo(0,0),!1):(v(!0),!0)},P=function(){var t=Object(u.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});case 2:200===t.sent.status?e.history.push("/orders/".concat(l.email)):w(["There was a problem placing your order. Please review your order and try again."]);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),M=function(e){var t=s.crustTypes.find((function(t){return t.id===e.target.value}));t&&c(Object(f.a)(Object(f.a)({},l),{},{crustType:t}))},D=function(e){var t=s.crustSizes.find((function(t){return t.id===e.target.value}));t&&c(Object(f.a)(Object(f.a)({},l),{},{crust:t}))},I=function(e){var t=s.sauce.find((function(t){return t.id===e.target.value}));t&&c(Object(f.a)(Object(f.a)({},l),{},{sauce:t}))},L=function(e){var t=s.cheese.find((function(t){return t.id===e.target.value}));t&&c(Object(f.a)(Object(f.a)({},l),{},{cheese:t}))},W=function(e){e.preventDefault(),e.currentTarget.classList.contains("topping-option")&&(e.currentTarget.classList.toggle("selected"),e.currentTarget.classList.contains("selected")?q(e.currentTarget.getAttribute("data-id")):B(e.currentTarget.getAttribute("data-id")))},q=function(e){var t=s.toppings.find((function(t){return t.id===e}));t&&c(Object(f.a)(Object(f.a)({},l),{},{toppings:[].concat(Object(b.a)(l.toppings),[t])}))},B=function(e){if(l.toppings.find((function(t){return t.id===e}))){var t=l.toppings.filter((function(t){return t.id!==e}));c(Object(f.a)(Object(f.a)({},l),{},{toppings:t}))}},K=function(e){e.preventDefault(),e.currentTarget.classList.contains("beverage-option")&&(e.currentTarget.classList.toggle("selected"),e.currentTarget.classList.contains("selected")?V(e.currentTarget.getAttribute("data-id")):$(e.currentTarget.getAttribute("data-id")))},V=function(e){var t=s.beverages.find((function(t){return t.id===e}));t&&c(Object(f.a)(Object(f.a)({},l),{},{beverages:[].concat(Object(b.a)(l.beverages),[t])}))},$=function(e){if(l.beverages.find((function(t){return t.id===e}))){var t=l.beverages.filter((function(t){return t.id!==e}));c(Object(f.a)(Object(f.a)({},l),{},{beverages:t}))}};return r.a.createElement("main",{className:"place-order"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Your Pizza")),s?r.a.createElement(r.a.Fragment,null,!E&&T.length>0&&r.a.createElement("div",{className:"errors"},r.a.createElement("h3",null,"Order cannot be placed"),T?T.map((function(e){return r.a.createElement("p",{key:Object(N.a)()},e)})):""),r.a.createElement("div",{className:"".concat(A?"hidden":"")},r.a.createElement("div",{className:"crust-type"},r.a.createElement("h2",null,"Crust Thickness"),r.a.createElement("div",{className:"crust-types"},r.a.createElement("ul",{className:"base-options-list"},s.crustTypes.map((function(e){return r.a.createElement("li",{className:"base-option",key:e.id},r.a.createElement("input",{type:"radio",id:e.id,name:"crustType",value:e.id,required:!0,onChange:M}),r.a.createElement("label",{htmlFor:e.id},e.type))}))))),r.a.createElement("div",{className:"crust-size"},r.a.createElement("h2",null,"Crust Size"),r.a.createElement("div",{className:"crust-sizes"},r.a.createElement("ul",{className:"base-options-list"},s.crustSizes.map((function(e){return r.a.createElement("li",{className:"base-option",key:e.id},r.a.createElement("input",{type:"radio",id:e.id,name:"crustSize",value:e.id,required:!0,onChange:D}),r.a.createElement("label",{htmlFor:e.id},e.size))}))))),r.a.createElement("div",{className:"sauce"},r.a.createElement("h2",null,"Sauce Amount"),r.a.createElement("div",{className:"sauce-options"},r.a.createElement("ul",{className:"base-options-list"},s.sauce.map((function(e){return r.a.createElement("li",{className:"base-option",key:e.id},r.a.createElement("input",{type:"radio",id:e.id,name:"sauce",value:e.id,required:!0,onChange:I}),r.a.createElement("label",{htmlFor:e.id},e.amount))}))))),r.a.createElement("div",{className:"cheese"},r.a.createElement("h2",null,"Cheese Amount"),r.a.createElement("div",{className:"cheese-options"},r.a.createElement("ul",{className:"base-options-list"},s.cheese.map((function(e){return r.a.createElement("li",{className:"base-option",key:e.id},r.a.createElement("input",{type:"radio",id:e.id,name:"cheese",value:e.id,required:!0,onChange:L}),r.a.createElement("label",{htmlFor:e.id},e.amount))}))))),r.a.createElement("div",{className:"toppings"},r.a.createElement("h2",null,"Toppings"),r.a.createElement("div",{className:"topping-options"},r.a.createElement("ul",{className:"topping-options-list"},s.toppings.map((function(e){return r.a.createElement("li",{className:"topping-option",key:e.id,"data-id":e.id,onClick:W},r.a.createElement("h3",null,e.name),r.a.createElement("img",{src:"/images/toppings/".concat(e.name,".jpg"),alt:"topping-img"}))}))))),r.a.createElement("div",{className:"beverages"},r.a.createElement("h2",null,"Beverages"),r.a.createElement("div",{className:"beverage-options"},r.a.createElement("ul",{className:"beverage-options-list"},s.beverages.map((function(e){return r.a.createElement("li",{className:"beverage-option",key:e.id,"data-id":e.id,onClick:K},r.a.createElement("h3",null,e.name),r.a.createElement("p",null,"2 L"),r.a.createElement("img",{src:"/images/beverages/".concat(e.name,".jpg"),alt:"beverage-img"}))}))))),r.a.createElement("div",{className:"delivery-info"},r.a.createElement("div",{className:"delivery-title"},r.a.createElement("h2",null,"Delivery Information")),r.a.createElement("div",{className:"delivery"},r.a.createElement("div",{className:"delivery-field"},r.a.createElement("p",null,"Email Address"),r.a.createElement("input",{type:"email",placeholder:"myemail@example.com",required:!0,onBlur:function(e){c(Object(f.a)(Object(f.a)({},l),{},{email:e.target.value}))}})),r.a.createElement("div",{className:"delivery-field"},r.a.createElement("p",null,"Phone Number"),r.a.createElement("input",{type:"text",placeholder:"555-555-5555",required:!0,onBlur:function(e){c(Object(f.a)(Object(f.a)({},l),{},{phoneNumber:e.target.value.replace(/\D/g,"")}))}})),r.a.createElement("div",{className:"delivery-field"},r.a.createElement("p",null,"Street Address"),r.a.createElement("input",{type:"text",placeholder:"742 Evergreen Terrace",required:!0,onBlur:function(e){c(Object(f.a)(Object(f.a)({},l),{},{streetAddress:e.target.value}))}})),r.a.createElement("div",{className:"delivery-field"},r.a.createElement("p",null,"City"),r.a.createElement("input",{type:"text",placeholder:"Houston",required:!0,onBlur:function(e){c(Object(f.a)(Object(f.a)({},l),{},{city:e.target.value}))}})),r.a.createElement("div",{className:"delivery-field"},r.a.createElement("p",null,"State"),r.a.createElement("select",{onChange:function(e){c(Object(f.a)(Object(f.a)({},l),{},{state:e.target.value}))}},r.a.createElement("option",{value:"AL"},"Alabama"),r.a.createElement("option",{value:"AK"},"Alaska"),r.a.createElement("option",{value:"AZ"},"Arizona"),r.a.createElement("option",{value:"AR"},"Arkansas"),r.a.createElement("option",{value:"CA"},"California"),r.a.createElement("option",{value:"CO"},"Colorado"),r.a.createElement("option",{value:"CT"},"Connecticut"),r.a.createElement("option",{value:"DE"},"Delaware"),r.a.createElement("option",{value:"DC"},"District Of Columbia"),r.a.createElement("option",{value:"FL"},"Florida"),r.a.createElement("option",{value:"GA"},"Georgia"),r.a.createElement("option",{value:"HI"},"Hawaii"),r.a.createElement("option",{value:"ID"},"Idaho"),r.a.createElement("option",{value:"IL"},"Illinois"),r.a.createElement("option",{value:"IN"},"Indiana"),r.a.createElement("option",{value:"IA"},"Iowa"),r.a.createElement("option",{value:"KS"},"Kansas"),r.a.createElement("option",{value:"KY"},"Kentucky"),r.a.createElement("option",{value:"LA"},"Louisiana"),r.a.createElement("option",{value:"ME"},"Maine"),r.a.createElement("option",{value:"MD"},"Maryland"),r.a.createElement("option",{value:"MA"},"Massachusetts"),r.a.createElement("option",{value:"MI"},"Michigan"),r.a.createElement("option",{value:"MN"},"Minnesota"),r.a.createElement("option",{value:"MS"},"Mississippi"),r.a.createElement("option",{value:"MO"},"Missouri"),r.a.createElement("option",{value:"MT"},"Montana"),r.a.createElement("option",{value:"NE"},"Nebraska"),r.a.createElement("option",{value:"NV"},"Nevada"),r.a.createElement("option",{value:"NH"},"New Hampshire"),r.a.createElement("option",{value:"NJ"},"New Jersey"),r.a.createElement("option",{value:"NM"},"New Mexico"),r.a.createElement("option",{value:"NY"},"New York"),r.a.createElement("option",{value:"NC"},"North Carolina"),r.a.createElement("option",{value:"ND"},"North Dakota"),r.a.createElement("option",{value:"OH"},"Ohio"),r.a.createElement("option",{value:"OK"},"Oklahoma"),r.a.createElement("option",{value:"OR"},"Oregon"),r.a.createElement("option",{value:"PA"},"Pennsylvania"),r.a.createElement("option",{value:"RI"},"Rhode Island"),r.a.createElement("option",{value:"SC"},"South Carolina"),r.a.createElement("option",{value:"SD"},"South Dakota"),r.a.createElement("option",{value:"TN"},"Tennessee"),r.a.createElement("option",{value:"TX"},"Texas"),r.a.createElement("option",{value:"UT"},"Utah"),r.a.createElement("option",{value:"VT"},"Vermont"),r.a.createElement("option",{value:"VA"},"Virginia"),r.a.createElement("option",{value:"WA"},"Washington"),r.a.createElement("option",{value:"WV"},"West Virginia"),r.a.createElement("option",{value:"WI"},"Wisconsin"),r.a.createElement("option",{value:"WY"},"Wyoming"))),r.a.createElement("div",{className:"delivery-field"},r.a.createElement("p",null,"Zipcode"),r.a.createElement("input",{type:"text",placeholder:"12345",required:!0,onBlur:function(e){c(Object(f.a)(Object(f.a)({},l),{},{zipcode:e.target.value.replace(/\D/g,"")}))}})))),r.a.createElement("div",{className:"confirm-button"},r.a.createElement("button",{className:"confirm",onClick:function(){F()?(!function(){if(!(0===Object.keys(l.crustType).length||0===Object.keys(l.crust).length||0===Object.keys(l.sauce).length||0===Object.keys(l.cheese).length)){var e=0,t=0,a=0;l.toppings.length>0&&l.toppings.forEach((function(t){return e+=parseFloat(t.price)*parseFloat(l.crust.toppingMultiplier)})),l.beverages.length>0&&l.beverages.forEach((function(e){return t+=parseFloat(e.price)})),a=parseFloat(l.crust.price)*parseFloat(l.crustType.priceMultiplier)+parseFloat(l.sauce.price)+parseFloat(l.cheese.price)+parseFloat(e)+parseFloat(t),j(a.toFixed(2))}}(),S(!0),window.scrollTo(0,0)):S(!1)}},"Confirm Order"))),r.a.createElement("div",{className:"".concat(A?"":"hidden")},r.a.createElement("div",{className:"order-summary"},r.a.createElement("div",{className:"summary-title"},r.a.createElement("h2",null,"Order Summary")),r.a.createElement("div",{className:"summary-wrapper"},r.a.createElement("div",{className:"back-button",onClick:function(){S(!1)}},r.a.createElement("button",{className:"back"},"Back")),r.a.createElement(y,{order:l,total:O}))),r.a.createElement("div",{className:"order-submit"},r.a.createElement("button",{onClick:function(){F()&&P()}},"Place Order")))):"Please wait..."))}))),j=(a(40),Object(i.g)((function(e){window.scrollTo(0,0);var t=Object(n.useState)(null),a=Object(p.a)(t,2),l=a[0],c=a[1],s=function(){var t=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.match.params.email){t.next=8;break}return t.next=3,fetch("/api/orders/".concat(e.match.params.email));case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,200===a.status?(c(n),0===n.length&&e.history.push("/")):e.history.push("/");case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){window.scrollTo(0,0),s()}),[e.match.params.email]);var i=function(){var t=Object(u.a)(m.a.mark((function t(a){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target.getAttribute("data-id"),t.next=3,fetch("/api/orders/".concat(n),{method:"DELETE"});case 3:200===t.sent.status&&(r=l.filter((function(e){return e.id!==n})),c(r),0===r.length&&e.history.push("/"),window.scrollTo(0,0));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"view-orders"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"your-orders"},r.a.createElement("h1",null,"Current Orders for ",r.a.createElement("span",null,e.match.params.email))),r.a.createElement("div",{className:"main-content"},l?r.a.createElement("div",{className:"orders"},l.map((function(e,t){return r.a.createElement("div",{className:"order-content",key:Object(N.a)()},r.a.createElement("h2",null,"Order ",t+1," ",r.a.createElement("span",null,"(Order no: ",e.id,")")," "),r.a.createElement(y,{order:e,total:e.orderTotal.toFixed(2)}),r.a.createElement("div",{className:"cancel-order"},r.a.createElement("button",{className:"cancel-order-btn",onClick:i,"data-id":e.id},"Cancel Order")))}))):"Just a moment..."))),r.a.createElement(g,null))}))),k=(a(41),function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"order-pizza"},r.a.createElement(s.b,{to:"/place-order"},r.a.createElement("h1",null,"Place An Order"),r.a.createElement("h3",null,"Build Your Pizza"))),r.a.createElement("div",{className:"lookup-order"},r.a.createElement("h2",null,"View your orders"),r.a.createElement(v,null)),r.a.createElement("div",{className:"filler"},r.a.createElement("p",null,"Serving quality pizza since 1991")))}),x=(a(42),function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("h1",null,"We could not find that page."),r.a.createElement(s.b,{to:"/"},"Return To Homepage"))});a(43);var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app-container"},r.a.createElement(s.a,null,r.a.createElement(E,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(h,null),r.a.createElement(k,null),r.a.createElement(g,null)),r.a.createElement(i.b,{exact:!0,path:"/place-order"},r.a.createElement(h,null),r.a.createElement(O,null),r.a.createElement(g,null)),r.a.createElement(i.b,{exact:!0,path:"/orders/:email",component:j}),r.a.createElement(i.b,{exact:!0,path:"/404"},r.a.createElement(h,null),r.a.createElement(x,null),r.a.createElement(g,null)),r.a.createElement(i.b,{path:"*"},r.a.createElement(i.a,{to:"/404"})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.f2c951db.chunk.js.map