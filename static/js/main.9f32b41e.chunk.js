(this["webpackJsonpreact-functinal-cmp-state-manage"]=this["webpackJsonpreact-functinal-cmp-state-manage"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),r=n(6),o=n.n(r),s=(n(13),n(14),n(7)),u=n(5),j=(n(15),{minimumFractionDigits:2,maximumFractionDigits:2}),m=[{emoji:"\ud83c\udf66",name:"ice cream",price:5},{emoji:"\ud83c\udf69",name:"donuts",price:2.5},{emoji:"\ud83c\udf49",name:"watermelon",price:4}];function d(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(0),o=Object(u.a)(r,2),d=o[0],l=o[1];return Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsxs)("div",{children:["Shopping Cart: ",n.length," total items."]}),Object(c.jsxs)("div",{children:["Total: ",d.toLocaleString(void 0,j)]}),Object(c.jsx)("div",{children:m.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"product",children:Object(c.jsx)("span",{role:"img","aria-label":e.name,children:e.emoji})}),Object(c.jsx)("button",{onClick:function(){return function(e){a((function(t){return[].concat(Object(s.a)(t),[e.name])})),l((function(t){return t+e.price}))}(e)},children:"Add"}),Object(c.jsx)("button",{children:"Remove"})]},e.name)}))})]})}var l=function(){return Object(c.jsx)(d,{})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.9f32b41e.chunk.js.map