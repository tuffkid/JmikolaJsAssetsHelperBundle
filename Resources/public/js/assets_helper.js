/**
 * Portions of this code are from the Google Closure Library,
 * received from the Closure Authors under the Apache 2.0 license.
 *
 * All other code is (C) 2011 Jeremy Mikola and subject to the MIT license.
 */
(function() {function c(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if(d=="[object Window]")return"object";if(d=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(d=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}function e(a,b){function d(){}d.prototype=b.prototype;a.j=b.prototype;a.prototype=new d};var g=Array.prototype,h=g.map?function(a,b,d){return g.map.call(a,b,d)}:function(a,b,d){for(var o=a.length,p=Array(o),q=typeof a=="string"?a.split(""):a,f=0;f<o;f++)f in q&&(p[f]=b.call(d,q[f],f,a));return p};function i(){this.b="/";this.h=null;this.f=[]}(function(a){a.i=function(){return a.m||(a.m=new a)}})(i);function j(a,b){return b.hasOwnProperty("baseUrls")?new k(b.baseUrls,b.version,b.format):b.hasOwnProperty("version")?new l(a.b,b.version,b.format):j(a,b["https:"===window.location.protocol?"ssl":"http"])}i.prototype.l=function(a,b,d){this.b=a;this.h=j(this,b);this.f=h(d,function(a){return j(i.prototype,a)})};
i.prototype.d=function(a){if(void 0===a||null===a)return this.h;if(!this.f.hasOwnProperty(a))throw new m(a);return this.f[a]};i.prototype.a=function(a,b){return this.d(b).a(a)};i.prototype.e=function(a){return this.d(a).e()};function n(a,b){this.g=a;this.k=b+""||"%s?%s"}n.prototype.a=function(a){if(!(-1!==a.indexOf("://")||0===a.indexOf("//"))&&null!==this.g){var b=(new PHP_JS).sprintf(this.k,a.replace(/^\/+/,""),this.g);a&&"/"===a.charAt(0)&&(b="/"+b);a=b}return a};n.prototype.e=function(){return this.g};
function l(a,b,d){n.call(this,b,d);a?("/"!==a.charAt(0)&&(a="/"+a),this.b=a.replace(/\/+$/,"")+"/"):this.b="/"}e(l,n);l.prototype.a=function(a){(a=l.j.a.call(this,a))&&"/"!==a.charAt(0)&&(a=this.b+a);return a};function k(a,b,d){n.call(this,b,d);a=a||[];c(a)=="array"||(a=[a]);this.c=h(a,function(a){return a.replace(/\/+$/,"")})}e(k,n);
k.prototype.a=function(a){var b=l.j.a.call(this,a);b&&"/"!==b.charAt(0)&&(b="/"+b);a:switch(this.c.length){case 0:a="";break a;case 1:a=this.c[0];break a;default:var d=new PHP_JS,a=this.c[parseInt(d.md5(a).substring(0,10),16)%this.c.length]}return a+b};function m(a){this.name="InvalidPackageError";this.message='There is no "'+a+'" asset package.'}e(m,Error);var r="jmikola.AssetsHelper".split("."),s=this;!(r[0]in s)&&s.execScript&&s.execScript("var "+r[0]);for(var t;r.length&&(t=r.shift());)!r.length&&i!==void 0?s[t]=i:s=s[t]?s[t]:s[t]={};i.getInstance=i.i;i.prototype.init=i.prototype.l;i.prototype.getUrl=i.prototype.a;i.prototype.getVersion=i.prototype.e;i.prototype.getPackage=i.prototype.d;window.AssetsHelper=i.i();})();