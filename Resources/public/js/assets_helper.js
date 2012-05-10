/**
 * Portions of this code are from the Google Closure Library,
 * received from the Closure Authors under the Apache 2.0 license.
 *
 * All other code is taken from php.js or is (C) 2011 Jeremy Mikola and subject to the MIT license.
 */
(function() {var p=null;
function r(a){var h=typeof a;if(h=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return h;var i=Object.prototype.toString.call(a);if(i=="[object Window]")return"object";if(i=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(i=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if(h==
"function"&&typeof a.call=="undefined")return"object";return h}function s(a,h){function i(){}i.prototype=h.prototype;a.i=h.prototype;a.prototype=new i};var u=Array.prototype,v=u.map?function(a,h,i){return u.map.call(a,h,i)}:function(a,h,i){for(var k=a.length,m=Array(k),l=typeof a=="string"?a.split(""):a,j=0;j<k;j++)j in l&&(m[j]=h.call(i,l[j],j,a));return m};function w(a,h){function i(g,a,h,i,j,l,b){g>>>=0;h=h&&g&&{2:"0b",8:"0",16:"0x"}[a]||"";g=h+m(g.toString(a),l||0,"0",false);return k(g,h,i,j,b)}function k(a,e,h,i,j,k){var b=i-a.length;b>0&&(a=h||!j?m(a,i,k,h):a.slice(0,e.length)+m("",b,"0",true)+a.slice(e.length));return a}function m(a,e,h,i){h||(h=" ");e=a.length>=e?"":Array(1+e-a.length>>>0).join(h);return i?a+e:e+a}var l=arguments,j=0;return l[j++].replace(/%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g,function(a,
e,h,n,q,o,b){var d,f;if(a=="%%")return"%";var c=false;f="";var t=q=false;d=" ";for(var J=h.length,x=0;h&&x<J;x++)switch(h.charAt(x)){case " ":f=" ";break;case "+":f="+";break;case "-":c=true;break;case "'":d=h.charAt(x+1);break;case "0":q=true;break;case "#":t=true}n=n?n=="*"?+l[j++]:n.charAt(0)=="*"?+l[n.slice(1,-1)]:+n:0;n<0&&(n=-n,c=true);if(!isFinite(n))throw Error("sprintf: (minimum-)width must be finite");o=o?o=="*"?+l[j++]:o.charAt(0)=="*"?+l[o.slice(1,-1)]:+o:"fFeE".indexOf(b)>-1?6:b=="d"?
0:void 0;e=e?l[e.slice(0,-1)]:l[j++];switch(b){case "s":return b=String(e),o!=p&&(b=b.slice(0,o)),k(b,"",c,n,q,d);case "c":return b=String.fromCharCode(+e),o!=p&&(b=b.slice(0,o)),k(b,"",c,n,q,void 0);case "b":return i(e,2,t,c,n,o,q);case "o":return i(e,8,t,c,n,o,q);case "x":return i(e,16,t,c,n,o,q);case "X":return i(e,16,t,c,n,o,q).toUpperCase();case "u":return i(e,10,t,c,n,o,q);case "i":case "d":return d=+e|0,a=d<0?"-":f,e=a+m(String(Math.abs(d)),o,"0",false),k(e,a,c,n,q);case "e":case "E":case "f":case "F":case "g":case "G":return d=
+e,a=d<0?"-":f,f=["toExponential","toFixed","toPrecision"]["efg".indexOf(b.toLowerCase())],b=["toString","toUpperCase"]["eEfFgG".indexOf(b)%2],e=a+Math.abs(d)[f](o),k(e,a,c,n,q)[b]();default:return a}})};function y(a){if(a===p||typeof a==="undefined")return"";a+="";var h="",i,k,m=0;i=k=0;for(var m=a.length,l=0;l<m;l++){var j=a.charCodeAt(l),g=p;j<128?k++:g=j>127&&j<2048?String.fromCharCode(j>>6|192)+String.fromCharCode(j&63|128):String.fromCharCode(j>>12|224)+String.fromCharCode(j>>6&63|128)+String.fromCharCode(j&63|128);g!==p&&(k>i&&(h+=a.slice(i,k)),h+=g,i=k=l+1)}k>i&&(h+=a.slice(i,m));return h};function z(a){function h(a){var b="",c="",d;for(d=0;d<=3;d++)c=a>>>d*8&255,c="0"+c.toString(16),b+=c.substr(c.length-2,2);return b}function i(a,b,c,d,e,f,g){a=j(a,j(j(c^(b|~d),e),g));return j(a<<f|a>>>32-f,b)}function k(a,b,c,d,f,e,g){a=j(a,j(j(b^c^d,f),g));return j(a<<e|a>>>32-e,b)}function m(a,b,c,d,e,f,g){a=j(a,j(j(b&d|c&~d,e),g));return j(a<<f|a>>>32-f,b)}function l(a,b,c,d,f,e,g){a=j(a,j(j(b&c|~b&d,f),g));return j(a<<e|a>>>32-e,b)}function j(a,b){var c,d,e,f,g;e=a&2147483648;f=b&2147483648;c=
a&1073741824;d=b&1073741824;g=(a&1073741823)+(b&1073741823);return c&d?g^2147483648^e^f:c|d?g&1073741824?g^3221225472^e^f:g^1073741824^e^f:g^e^f}var g=[],e,E,n,q,o,b,d,f,c,a=y(a),g=function(a){var b,c=a.length;b=c+8;for(var d=((b-b%64)/64+1)*16,e=Array(d-1),f=0,g=0;g<c;)b=(g-g%4)/4,f=g%4*8,e[b]|=a.charCodeAt(g)<<f,g++;e[(g-g%4)/4]|=128<<g%4*8;e[d-2]=c<<3;e[d-1]=c>>>29;return e}(a);b=1732584193;d=4023233417;f=2562383102;c=271733878;a=g.length;for(e=0;e<a;e+=16)E=b,n=d,q=f,o=c,b=l(b,d,f,c,g[e+0],7,
3614090360),c=l(c,b,d,f,g[e+1],12,3905402710),f=l(f,c,b,d,g[e+2],17,606105819),d=l(d,f,c,b,g[e+3],22,3250441966),b=l(b,d,f,c,g[e+4],7,4118548399),c=l(c,b,d,f,g[e+5],12,1200080426),f=l(f,c,b,d,g[e+6],17,2821735955),d=l(d,f,c,b,g[e+7],22,4249261313),b=l(b,d,f,c,g[e+8],7,1770035416),c=l(c,b,d,f,g[e+9],12,2336552879),f=l(f,c,b,d,g[e+10],17,4294925233),d=l(d,f,c,b,g[e+11],22,2304563134),b=l(b,d,f,c,g[e+12],7,1804603682),c=l(c,b,d,f,g[e+13],12,4254626195),f=l(f,c,b,d,g[e+14],17,2792965006),d=l(d,f,c,b,
g[e+15],22,1236535329),b=m(b,d,f,c,g[e+1],5,4129170786),c=m(c,b,d,f,g[e+6],9,3225465664),f=m(f,c,b,d,g[e+11],14,643717713),d=m(d,f,c,b,g[e+0],20,3921069994),b=m(b,d,f,c,g[e+5],5,3593408605),c=m(c,b,d,f,g[e+10],9,38016083),f=m(f,c,b,d,g[e+15],14,3634488961),d=m(d,f,c,b,g[e+4],20,3889429448),b=m(b,d,f,c,g[e+9],5,568446438),c=m(c,b,d,f,g[e+14],9,3275163606),f=m(f,c,b,d,g[e+3],14,4107603335),d=m(d,f,c,b,g[e+8],20,1163531501),b=m(b,d,f,c,g[e+13],5,2850285829),c=m(c,b,d,f,g[e+2],9,4243563512),f=m(f,c,b,
d,g[e+7],14,1735328473),d=m(d,f,c,b,g[e+12],20,2368359562),b=k(b,d,f,c,g[e+5],4,4294588738),c=k(c,b,d,f,g[e+8],11,2272392833),f=k(f,c,b,d,g[e+11],16,1839030562),d=k(d,f,c,b,g[e+14],23,4259657740),b=k(b,d,f,c,g[e+1],4,2763975236),c=k(c,b,d,f,g[e+4],11,1272893353),f=k(f,c,b,d,g[e+7],16,4139469664),d=k(d,f,c,b,g[e+10],23,3200236656),b=k(b,d,f,c,g[e+13],4,681279174),c=k(c,b,d,f,g[e+0],11,3936430074),f=k(f,c,b,d,g[e+3],16,3572445317),d=k(d,f,c,b,g[e+6],23,76029189),b=k(b,d,f,c,g[e+9],4,3654602809),c=k(c,
b,d,f,g[e+12],11,3873151461),f=k(f,c,b,d,g[e+15],16,530742520),d=k(d,f,c,b,g[e+2],23,3299628645),b=i(b,d,f,c,g[e+0],6,4096336452),c=i(c,b,d,f,g[e+7],10,1126891415),f=i(f,c,b,d,g[e+14],15,2878612391),d=i(d,f,c,b,g[e+5],21,4237533241),b=i(b,d,f,c,g[e+12],6,1700485571),c=i(c,b,d,f,g[e+3],10,2399980690),f=i(f,c,b,d,g[e+10],15,4293915773),d=i(d,f,c,b,g[e+1],21,2240044497),b=i(b,d,f,c,g[e+8],6,1873313359),c=i(c,b,d,f,g[e+15],10,4264355552),f=i(f,c,b,d,g[e+6],15,2734768916),d=i(d,f,c,b,g[e+13],21,1309151649),
b=i(b,d,f,c,g[e+4],6,4149444226),c=i(c,b,d,f,g[e+11],10,3174756917),f=i(f,c,b,d,g[e+2],15,718787259),d=i(d,f,c,b,g[e+9],21,3951481745),b=j(b,E),d=j(d,n),f=j(f,q),c=j(c,o);return(h(b)+h(d)+h(f)+h(c)).toLowerCase()};function A(a,h){this.f=a;this.j=(h||"%s?%s")+""}A.prototype.a=function(a){if(!(-1!==a.indexOf("://")||0===a.indexOf("//"))&&p!==this.f){var h=w(this.j,a.replace(/^\/+/,""),this.f);a&&"/"===a.charAt(0)&&(h="/"+h);a=h}return a};A.prototype.d=function(){return this.f};function B(a,h,i){A.call(this,h,i);a?("/"!==a.charAt(0)&&(a="/"+a),this.b=a.replace(/\/+$/,"")+"/"):this.b="/"}s(B,A);B.prototype.a=function(a){(a=B.i.a.call(this,a))&&"/"!==a.charAt(0)&&(a=this.b+a);return a};
function C(a,h,i){A.call(this,h,i);a=a||[];r(a)=="array"||(a=[a]);this.c=v(a,function(a){return a.replace(/\/+$/,"")})}s(C,A);C.prototype.a=function(a){var h=C.i.a.call(this,a);h&&"/"!==h.charAt(0)&&(h="/"+h);a:switch(this.c.length){case 0:a="";break a;case 1:a=this.c[0];break a;default:a=this.c[parseInt(z(a).substring(0,10),16)%this.c.length]}return a+h};function D(){this.b="/";this.g=p;this.e=[]}(function(a){a.h=function(){return a.l||(a.l=new a)}})(D);function F(a,h){return h.hasOwnProperty("baseUrls")?new C(h.baseUrls,h.version,h.format):h.hasOwnProperty("version")?new B(a.b,h.version,h.format):F(a,h["https:"===window.location.protocol?"ssl":"http"])}D.prototype.k=function(a,h,i){this.b=a;this.g=F(this,h);this.e=v(i,function(a){return F(D.prototype,a)})};
function G(a,h){if(void 0===h||p===h)return a.g;if(!a.e.hasOwnProperty(h))throw new H(h);return a.e[h]}D.prototype.a=function(a,h){return G(this,h).a(a)};D.prototype.d=function(a){return G(this,a).d()};function H(a){this.name="InvalidPackageError";this.message='There is no "'+a+'" asset package.'}s(H,Error);var I="jmikola.AssetsHelper.Helper".split("."),K=this;!(I[0]in K)&&K.execScript&&K.execScript("var "+I[0]);for(var L;I.length&&(L=I.shift());)!I.length&&D!==void 0?K[L]=D:K=K[L]?K[L]:K[L]={};D.getInstance=D.h;D.prototype.init=D.prototype.k;D.prototype.getUrl=D.prototype.a;D.prototype.getVersion=D.prototype.d;window.AssetsHelper=D.h();})();
