/*! For license information please see 956-411a5be00b84a90c148d.js.LICENSE.txt */
(self.webpackChunka_week_in_the_woods=self.webpackChunka_week_in_the_woods||[]).push([[956],{6983:function(t,e,r){"use strict";r.d(e,{Dq:function(){return k}});var n=r(581),o=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,i=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,a=/[\s\n\\/='"\0<>]/,c=/^xlink:?./,u=/["&<]/;function l(t){if(!1===u.test(t+=""))return t;for(var e=0,r=0,n="",o="";r<t.length;r++){switch(t.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==e&&(n+=t.slice(e,r)),n+=o,e=r+1}return r!==e&&(n+=t.slice(e,r)),n}var s=function(t,e){return String(t).replace(/(\n+)/g,"$1"+(e||"\t"))},f=function(t,e,r){return String(t).length>(e||40)||!r&&-1!==String(t).indexOf("\n")||-1!==String(t).indexOf("<")},d={},p=/([A-Z])/g;function h(t){var e="";for(var r in t){var n=t[r];null!=n&&""!==n&&(e&&(e+=" "),e+="-"==r[0]?r:d[r]||(d[r]=r.replace(p,"-$1").toLowerCase()),e="number"==typeof n&&!1===o.test(r)?e+": "+n+"px;":e+": "+n+";")}return e||void 0}function v(t,e){return Array.isArray(e)?e.reduce(v,t):null!=e&&!1!==e&&t.push(e),t}function y(){this.__d=!0}function g(t,e){return{__v:t,context:e,props:t.props,setState:y,forceUpdate:y,__d:!0,__h:[]}}function _(t,e){var r=t.contextType,n=r&&e[r.__c];return null!=r?n?n.props.value:r.__:e}var m=[];function b(t,e,r,o,u,d){if(null==t||"boolean"==typeof t)return"";if("object"!=typeof t)return"function"==typeof t?"":l(t);var p=r.pretty,y=p&&"string"==typeof p?p:"\t";if(Array.isArray(t)){for(var w="",x=0;x<t.length;x++)p&&x>0&&(w+="\n"),w+=b(t[x],e,r,o,u,d);return w}if(void 0!==t.constructor)return"";var k,L=t.type,j=t.props,S=!1;if("function"==typeof L){if(S=!0,!r.shallow||!o&&!1!==r.renderRootComponent){if(L===n.HY){var E=[];return v(E,t.props.children),b(E,e,r,!1!==r.shallowHighOrder,u,d)}var M,O=t.__c=g(t,e);n.YM.__b&&n.YM.__b(t);var C=n.YM.__r;if(L.prototype&&"function"==typeof L.prototype.render){var Y=_(L,e);(O=t.__c=new L(j,Y)).__v=t,O._dirty=O.__d=!0,O.props=j,null==O.state&&(O.state={}),null==O._nextState&&null==O.__s&&(O._nextState=O.__s=O.state),O.context=Y,L.getDerivedStateFromProps?O.state=Object.assign({},O.state,L.getDerivedStateFromProps(O.props,O.state)):O.componentWillMount&&(O.componentWillMount(),O.state=O._nextState!==O.state?O._nextState:O.__s!==O.state?O.__s:O.state),C&&C(t),M=O.render(O.props,O.state,O.context)}else for(var F=_(L,e),P=0;O.__d&&P++<25;)O.__d=!1,C&&C(t),M=L.call(t.__c,j,F);return O.getChildContext&&(e=Object.assign({},e,O.getChildContext())),n.YM.diffed&&n.YM.diffed(t),b(M,e,r,!1!==r.shallowHighOrder,u,d)}L=(k=L).displayName||k!==Function&&k.name||function(t){var e=(Function.prototype.toString.call(t).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!e){for(var r=-1,n=m.length;n--;)if(m[n]===t){r=n;break}r<0&&(r=m.push(t)-1),e="UnnamedComponent"+r}return e}(k)}var A,T,N="<"+L;if(j){var H=Object.keys(j);r&&!0===r.sortAttributes&&H.sort();for(var I=0;I<H.length;I++){var G=H[I],D=j[G];if("children"!==G){if(!a.test(G)&&(r&&r.allAttributes||"key"!==G&&"ref"!==G&&"__self"!==G&&"__source"!==G)){if("defaultValue"===G)G="value";else if("defaultChecked"===G)G="checked";else if("defaultSelected"===G)G="selected";else if("className"===G){if(void 0!==j.class)continue;G="class"}else u&&c.test(G)&&(G=G.toLowerCase().replace(/^xlink:?/,"xlink:"));if("htmlFor"===G){if(j.for)continue;G="for"}"style"===G&&D&&"object"==typeof D&&(D=h(D)),"a"===G[0]&&"r"===G[1]&&"boolean"==typeof D&&(D=String(D));var R=r.attributeHook&&r.attributeHook(G,D,e,r,S);if(R||""===R)N+=R;else if("dangerouslySetInnerHTML"===G)T=D&&D.__html;else if("textarea"===L&&"value"===G)A=D;else if((D||0===D||""===D)&&"function"!=typeof D){if(!(!0!==D&&""!==D||(D=G,r&&r.xml))){N=N+" "+G;continue}if("value"===G){if("select"===L){d=D;continue}"option"===L&&d==D&&void 0===j.selected&&(N+=" selected")}N=N+" "+G+'="'+l(D)+'"'}}}else A=D}}if(p){var W=N.replace(/\n\s*/," ");W===N||~W.indexOf("\n")?p&&~N.indexOf("\n")&&(N+="\n"):N=W}if(N+=">",a.test(L))throw new Error(L+" is not a valid HTML tag name in "+N);var $,q=i.test(L)||r.voidElements&&r.voidElements.test(L),z=[];if(T)p&&f(T)&&(T="\n"+y+s(T,y)),N+=T;else if(null!=A&&v($=[],A).length){for(var U=p&&~N.indexOf("\n"),V=!1,Z=0;Z<$.length;Z++){var B=$[Z];if(null!=B&&!1!==B){var J=b(B,e,r,!0,"svg"===L||"foreignObject"!==L&&u,d);if(p&&!U&&f(J)&&(U=!0),J)if(p){var K=J.length>0&&"<"!=J[0];V&&K?z[z.length-1]+=J:z.push(J),V=K}else z.push(J)}}if(p&&U)for(var Q=z.length;Q--;)z[Q]="\n"+y+s(z[Q],y)}if(z.length||T)N+=z.join("");else if(r&&r.xml)return N.substring(0,N.length-1)+" />";return!q||$||T?(p&&~N.indexOf("\n")&&(N+="\n"),N=N+"</"+L+">"):N=N.replace(/>$/," />"),N}var w={shallow:!0};k.render=k;var x=[];function k(t,e,r){e=e||{};var o=n.YM.__s;n.YM.__s=!0;var i,a=(0,n.h)(n.HY,null);return a.__k=[t],i=r&&(r.pretty||r.voidElements||r.sortAttributes||r.shallow||r.allAttributes||r.xml||r.attributeHook)?b(t,e,r):O(t,e,!1,void 0,a),n.YM.__c&&n.YM.__c(t,x),n.YM.__s=o,x.length=0,i}function L(t){return null==t||"boolean"==typeof t?null:"string"==typeof t||"number"==typeof t||"bigint"==typeof t?(0,n.h)(null,null,t):t}function j(t,e){return"className"===t?"class":"htmlFor"===t?"for":"defaultValue"===t?"value":"defaultChecked"===t?"checked":"defaultSelected"===t?"selected":e&&c.test(t)?t.toLowerCase().replace(/^xlink:?/,"xlink:"):t}function S(t,e){return"style"===t&&null!=e&&"object"==typeof e?h(e):"a"===t[0]&&"r"===t[1]&&"boolean"==typeof e?String(e):e}var E=Array.isArray,M=Object.assign;function O(t,e,r,o,c){if(null==t||!0===t||!1===t||""===t)return"";if("object"!=typeof t)return"function"==typeof t?"":l(t);if(E(t)){var u="";c.__k=t;for(var s=0;s<t.length;s++)u+=O(t[s],e,r,o,c),t[s]=L(t[s]);return u}if(void 0!==t.constructor)return"";t.__=c,n.YM.__b&&n.YM.__b(t);var f=t.type,d=t.props;if("function"==typeof f){var p;if(f===n.HY)p=d.children;else{p=f.prototype&&"function"==typeof f.prototype.render?function(t,e){var r=t.type,o=_(r,e),i=new r(t.props,o);t.__c=i,i.__v=t,i.__d=!0,i.props=t.props,null==i.state&&(i.state={}),null==i.__s&&(i.__s=i.state),i.context=o,r.getDerivedStateFromProps?i.state=M({},i.state,r.getDerivedStateFromProps(i.props,i.state)):i.componentWillMount&&(i.componentWillMount(),i.state=i.__s!==i.state?i.__s:i.state);var a=n.YM.__r;return a&&a(t),i.render(i.props,i.state,i.context)}(t,e):function(t,e){var r,o=g(t,e),i=_(t.type,e);t.__c=o;for(var a=n.YM.__r,c=0;o.__d&&c++<25;)o.__d=!1,a&&a(t),r=t.type.call(o,t.props,i);return r}(t,e);var h=t.__c;h.getChildContext&&(e=M({},e,h.getChildContext()))}var v=O(p=null!=p&&p.type===n.HY&&null==p.key?p.props.children:p,e,r,o,t);return n.YM.diffed&&n.YM.diffed(t),t.__=void 0,n.YM.unmount&&n.YM.unmount(t),v}var y,m,b="<";if(b+=f,d)for(var w in y=d.children,d){var x=d[w];if(!("key"===w||"ref"===w||"__self"===w||"__source"===w||"children"===w||"className"===w&&"class"in d||"htmlFor"===w&&"for"in d||a.test(w)))if(x=S(w=j(w,r),x),"dangerouslySetInnerHTML"===w)m=x&&x.__html;else if("textarea"===f&&"value"===w)y=x;else if((x||0===x||""===x)&&"function"!=typeof x){if(!0===x||""===x){x=w,b=b+" "+w;continue}if("value"===w){if("select"===f){o=x;continue}"option"!==f||o!=x||"selected"in d||(b+=" selected")}b=b+" "+w+'="'+l(x)+'"'}}var k=b;if(b+=">",a.test(f))throw new Error(f+" is not a valid HTML tag name in "+b);var C="",Y=!1;if(m)C+=m,Y=!0;else if("string"==typeof y)C+=l(y),Y=!0;else if(E(y)){t.__k=y;for(var F=0;F<y.length;F++){var P=y[F];if(y[F]=L(P),null!=P&&!1!==P){var A=O(P,e,"svg"===f||"foreignObject"!==f&&r,o,t);A&&(C+=A,Y=!0)}}}else if(null!=y&&!1!==y&&!0!==y){t.__k=[L(y)];var T=O(y,e,"svg"===f||"foreignObject"!==f&&r,o,t);T&&(C+=T,Y=!0)}if(n.YM.diffed&&n.YM.diffed(t),t.__=void 0,n.YM.unmount&&n.YM.unmount(t),Y)b+=C;else if(i.test(f))return k+" />";return b+"</"+f+">"}k.shallowRender=function(t,e){return k(t,e,w)}},9217:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}r.r(e),r.d(e,{renderImageToString:function(){return y},swapPlaceholderImage:function(){return v}});var o,i=r(4687),a=r.n(i),c=r(3723),u=r(257),l=r(9365),s=(r(2369),new WeakMap),f=navigator.connection||navigator.mozConnection||navigator.webkitConnection,d=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function p(t,e){t.style.opacity="1",e&&(e.style.opacity="0")}function h(t,e,r,n,o,i){var a=t.querySelector("[data-main-image]"),c=t.querySelector("[data-placeholder-image]"),u=r.has(e);function l(t){var e=this;this.removeEventListener("load",l);var r=t.currentTarget,n=new Image;n.src=r.currentSrc,n.decode?n.decode().then((function(){p(e,c),null==o||o({wasCached:u})})).catch((function(t){p(e,c),null==i||i(t)})):(p(this,c),null==o||o({wasCached:u}))}return a.addEventListener("load",l),null==n||n({wasCached:u}),Array.from(a.parentElement.children).forEach((function(t){var e=t.getAttribute("data-src"),r=t.getAttribute("data-srcset");e&&(t.removeAttribute("data-src"),t.setAttribute("src",e)),r&&(t.removeAttribute("data-srcset"),t.setAttribute("srcset",r))})),r.add(e),a.complete&&l.call(a,{currentTarget:a}),function(){a&&a.removeEventListener("load",l)}}function v(t,e,i,u,l,d,p){if(!(0,c.h)()){var v,y,g,_=(x=function(){v=h(t,e,i,l,d,p)},"IntersectionObserver"in window?(o||(o=new IntersectionObserver((function(t){t.forEach((function(t){var e;t.isIntersecting&&(null==(e=s.get(t.target))||e(),s.delete(t.target))}))}),{rootMargin:"4g"!==(null==f?void 0:f.effectiveType)||null!=f&&f.saveData?"2500px":"1250px"})),function(t){return s.set(t,x),o.observe(t),function(){o&&t&&(s.delete(t),o.unobserve(t))}}):function(){return x(),function(){}}),m=_(t);return"objectFit"in document.documentElement.style||(t.dataset.objectFit=null!=(y=u.objectFit)?y:"cover",t.dataset.objectPosition=""+(null!=(g=u.objectPosition)?g:"50% 50%"),(b=a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0="objectFitPolyfill"in window,t.t0){t.next=4;break}return t.next=4,r.e(231).then(r.t.bind(r,7231,23));case 4:window.objectFitPolyfill(e);case 5:case"end":return t.stop()}}),t)})),w=function(){var t=this,e=arguments;return new Promise((function(r,o){var i=b.apply(t,e);function a(t){n(i,r,o,a,c,"next",t)}function c(t){n(i,r,o,a,c,"throw",t)}a(void 0)}))},function(t){return w.apply(this,arguments)})(t)),function(){v&&v(),m()}}var b,w,x;return h(t,e,i,l,d,p)}function y(t){var e=t.image,r=t.loading,n=void 0===r?"lazy":r,o=t.isLoading,i=t.isLoaded,a=t.imgClassName,s=t.imgStyle,f=void 0===s?{}:s,p=t.objectPosition,h=t.backgroundColor,v=t.objectFit,y=void 0===v?"cover":v,g=(0,c._)(t,d),_=e.width,m=e.height,b=e.layout,w=e.images,x=e.placeholder,k=e.backgroundColor;return f=(0,c.a)({objectFit:y,objectPosition:p,backgroundColor:h},f),(0,l.u)(u.default.createElement(c.L,{layout:b,width:_,height:m},u.default.createElement(c.P,(0,c.a)({},(0,c.g)(x,i,b,_,m,k,y,p))),u.default.createElement(c.M,(0,c.a)({},g,{width:_,height:m,className:a},(0,c.b)(o,i,w,n,f)))))}},7061:function(t,e,r){var n=r(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(Y){f=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new M(n||[]);return a(i,"_invoke",{value:L(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(Y){return{type:"throw",arg:Y}}}e.wrap=d;var h={};function v(){}function y(){}function g(){}var _={};f(_,u,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(O([])));b&&b!==r&&i.call(b,u)&&(_=b);var w=g.prototype=v.prototype=Object.create(_);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,c,u){var l=p(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:C}}function C(){return{value:void 0,done:!0}}return y.prototype=g,a(w,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:y,configurable:!0}),y.displayName=f(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},x(k.prototype),f(k.prototype,l,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(d(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),f(w,s,"Generator"),f(w,u,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4687:function(t,e,r){var n=r(7061)();t.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=956-411a5be00b84a90c148d.js.map