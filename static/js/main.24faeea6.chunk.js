(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(3),l=c(1);c(10);function r(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var s=c(2),o=c.n(s),j=c(0),d=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=void 0===t?1:t,i=e.onPageChange,l=Math.ceil(a/c),s=r(1,l),d=function(e){e!==n&&i(e)},u=1===n,b=n===l;return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:u}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":u,onClick:function(){u||i(n-1)},children:"\xab"})}),s.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:e===n}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:d.bind(null,e),children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:b}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":b,onClick:function(){b||i(n+1)},children:"\xbb"})})]})},u=r(1,42).map((function(e){return"Item ".concat(e)})),b=function(){var e=Object(l.useState)(5),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(l.useState)(1),r=Object(i.a)(n,2),s=r[0],o=r[1],b=Object(l.useState)((function(){return u.slice(0,c)})),h=Object(i.a)(b,2),p=h[0],m=h[1],g=u.length,O=c*s-(c-1),x=c*s>g?g:c*s;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsxs)("p",{className:"lead","data-cy":"info",children:["Page ".concat(s," "),"(items ".concat(O," - ").concat(x," of ").concat(g,")")]}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){var a=+e.target.value;t(a),m(u.slice(0,a)),o(1)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:g,perPage:c,currentPage:s,onPageChange:function(e){o(e);var a=c*e,t=a-(c-1);m(u.slice(t-1,a))}}),Object(j.jsx)("ul",{children:p.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.24faeea6.chunk.js.map