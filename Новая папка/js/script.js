/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-csstransforms3d-csstransitions-domprefixes-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,a;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],n=S[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),C.push((s?"":"no-")+a.join("-"))}}function o(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?_.className.baseVal=n:_.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(){var e=n.body;return e||(e=a(b?"svg":"body"),e.fake=!0),e}function u(e,t,r,s){var o,i,l,u,p="modernizr",d=a("div"),c=f();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=s?s[r]:p+(r+1),d.appendChild(l);return o=a("style"),o.type="text/css",o.id="s"+p,(c.fake?c:d).appendChild(o),c.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),d.id=p,c.fake&&(c.style.background="",c.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=u,_.offsetHeight):d.parentNode.removeChild(d),!!i}function p(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?p(s,t||n):s);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,t,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,n,t);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!t&&n.currentStyle&&n.currentStyle[r];return s}function g(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+c(n[s])+":"+r+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return t}function v(e,n,s,o){function f(){p&&(delete j.style,delete j.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var u=g(e,s);if(!r(u,"undefined"))return u}for(var p,d,c,m,v,h=["modernizr","tspan","samp"];!j.style&&h.length;)p=!0,j.modElem=a(h.shift()),j.style=j.modElem.style;for(c=e.length,d=0;c>d;d++)if(m=e[d],v=j.style[m],i(m,"-")&&(m=l(m)),j.style[m]!==t){if(o||r(s,"undefined"))return f(),"pfx"==n?m:!0;try{j.style[m]=s}catch(y){}if(j.style[m]!=v)return f(),"pfx"==n?m:!0}return f(),!1}function h(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+k.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,s,o):(a=(e+" "+z.join(i+" ")+i).split(" "),d(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var C=[],S=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){S.push({name:e,fn:n,options:t})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var x=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=x;var _=n.documentElement,b="svg"===_.nodeName.toLowerCase(),P="Moz O ms Webkit",z=w._config.usePrefixes?P.toLowerCase().split(" "):[];w._domPrefixes=z;var T="CSS"in e&&"supports"in e.CSS,E="supportsCSS"in e;Modernizr.addTest("supports",T||E);var k=w._config.usePrefixes?P.split(" "):[];w._cssomPrefixes=k;var N=w.testStyles=u,A={elem:a("modernizr")};Modernizr._q.push(function(){delete A.elem});var j={style:A.elem.style};Modernizr._q.unshift(function(){delete j.style});w.testProp=function(e,n,r){return v([e],t,n,r)};w.testAllProps=h,w.testAllProps=y,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),n=Modernizr._config.usePrefixes;if(e&&(!n||"webkitPerspective"in _.style)){var t,r="#modernizr{width:0;height:0}";Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",n&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",N(r+t,function(n){e=7===n.offsetWidth&&18===n.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0)),s(),o(C),delete w.addTest,delete w.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);

!function(a){"use strict";var b=a.jCarousel={};b.version="0.3.4";var c=/^([+\-]=)?(.+)$/;b.parseTarget=function(a){var b=!1,d="object"!=typeof a?c.exec(a):null;return d?(a=parseInt(d[2],10)||0,d[1]&&(b=!0,"-="===d[1]&&(a*=-1))):"object"!=typeof a&&(a=parseInt(a,10)||0),{target:a,relative:b}},b.detectCarousel=function(a){for(var b;a.length>0;){if(b=a.filter("[data-jcarousel]"),b.length>0)return b;if(b=a.find("[data-jcarousel]"),b.length>0)return b;a=a.parent()}return null},b.base=function(c){return{version:b.version,_options:{},_element:null,_carousel:null,_init:a.noop,_create:a.noop,_destroy:a.noop,_reload:a.noop,create:function(){return this._element.attr("data-"+c.toLowerCase(),!0).data(c,this),!1===this._trigger("create")?this:(this._create(),this._trigger("createend"),this)},destroy:function(){return!1===this._trigger("destroy")?this:(this._destroy(),this._trigger("destroyend"),this._element.removeData(c).removeAttr("data-"+c.toLowerCase()),this)},reload:function(a){return!1===this._trigger("reload")?this:(a&&this.options(a),this._reload(),this._trigger("reloadend"),this)},element:function(){return this._element},options:function(b,c){if(0===arguments.length)return a.extend({},this._options);if("string"==typeof b){if("undefined"==typeof c)return"undefined"==typeof this._options[b]?null:this._options[b];this._options[b]=c}else this._options=a.extend({},this._options,b);return this},carousel:function(){return this._carousel||(this._carousel=b.detectCarousel(this.options("carousel")||this._element),this._carousel||a.error('Could not detect carousel for plugin "'+c+'"')),this._carousel},_trigger:function(b,d,e){var f,g=!1;return e=[this].concat(e||[]),(d||this._element).each(function(){f=a.Event((c+":"+b).toLowerCase()),a(this).trigger(f,e),f.isDefaultPrevented()&&(g=!0)}),!g}}},b.plugin=function(c,d){var e=a[c]=function(b,c){this._element=a(b),this.options(c),this._init(),this.create()};return e.fn=e.prototype=a.extend({},b.base(c),d),a.fn[c]=function(b){var d=Array.prototype.slice.call(arguments,1),f=this;return this.each("string"==typeof b?function(){var e=a(this).data(c);if(!e)return a.error("Cannot call methods on "+c+' prior to initialization; attempted to call method "'+b+'"');if(!a.isFunction(e[b])||"_"===b.charAt(0))return a.error('No such method "'+b+'" for '+c+" instance");var g=e[b].apply(e,d);return g!==e&&"undefined"!=typeof g?(f=g,!1):void 0}:function(){var d=a(this).data(c);d instanceof e?d.reload(b):new e(this,b)}),f},e}}(jQuery),function(a,b){"use strict";var c=function(a){return parseFloat(a)||0};a.jCarousel.plugin("jcarousel",{animating:!1,tail:0,inTail:!1,resizeTimer:null,lt:null,vertical:!1,rtl:!1,circular:!1,underflow:!1,relative:!1,_options:{list:function(){return this.element().children().eq(0)},items:function(){return this.list().children()},animation:400,transitions:!1,wrap:null,vertical:null,rtl:null,center:!1},_list:null,_items:null,_target:a(),_first:a(),_last:a(),_visible:a(),_fullyvisible:a(),_init:function(){var a=this;return this.onWindowResize=function(){a.resizeTimer&&clearTimeout(a.resizeTimer),a.resizeTimer=setTimeout(function(){a.reload()},100)},this},_create:function(){this._reload(),a(b).on("resize.jcarousel",this.onWindowResize)},_destroy:function(){a(b).off("resize.jcarousel",this.onWindowResize)},_reload:function(){this.vertical=this.options("vertical"),null==this.vertical&&(this.vertical=this.list().height()>this.list().width()),this.rtl=this.options("rtl"),null==this.rtl&&(this.rtl=function(b){if("rtl"===(""+b.attr("dir")).toLowerCase())return!0;var c=!1;return b.parents("[dir]").each(function(){return/rtl/i.test(a(this).attr("dir"))?(c=!0,!1):void 0}),c}(this._element)),this.lt=this.vertical?"top":"left",this.relative="relative"===this.list().css("position"),this._list=null,this._items=null;var b=this.index(this._target)>=0?this._target:this.closest();this.circular="circular"===this.options("wrap"),this.underflow=!1;var c={left:0,top:0};return b.length>0&&(this._prepare(b),this.list().find("[data-jcarousel-clone]").remove(),this._items=null,this.underflow=this._fullyvisible.length>=this.items().length,this.circular=this.circular&&!this.underflow,c[this.lt]=this._position(b)+"px"),this.move(c),this},list:function(){if(null===this._list){var b=this.options("list");this._list=a.isFunction(b)?b.call(this):this._element.find(b)}return this._list},items:function(){if(null===this._items){var b=this.options("items");this._items=(a.isFunction(b)?b.call(this):this.list().find(b)).not("[data-jcarousel-clone]")}return this._items},index:function(a){return this.items().index(a)},closest:function(){var b,d=this,e=this.list().position()[this.lt],f=a(),g=!1,h=this.vertical?"bottom":this.rtl&&!this.relative?"left":"right";return this.rtl&&this.relative&&!this.vertical&&(e+=this.list().width()-this.clipping()),this.items().each(function(){if(f=a(this),g)return!1;var i=d.dimension(f);if(e+=i,e>=0){if(b=i-c(f.css("margin-"+h)),!(Math.abs(e)-i+b/2<=0))return!1;g=!0}}),f},target:function(){return this._target},first:function(){return this._first},last:function(){return this._last},visible:function(){return this._visible},fullyvisible:function(){return this._fullyvisible},hasNext:function(){if(!1===this._trigger("hasnext"))return!0;var a=this.options("wrap"),b=this.items().length-1,c=this.options("center")?this._target:this._last;return b>=0&&!this.underflow&&(a&&"first"!==a||this.index(c)<b||this.tail&&!this.inTail)?!0:!1},hasPrev:function(){if(!1===this._trigger("hasprev"))return!0;var a=this.options("wrap");return this.items().length>0&&!this.underflow&&(a&&"last"!==a||this.index(this._first)>0||this.tail&&this.inTail)?!0:!1},clipping:function(){return this._element["inner"+(this.vertical?"Height":"Width")]()},dimension:function(a){return a["outer"+(this.vertical?"Height":"Width")](!0)},scroll:function(b,c,d){if(this.animating)return this;if(!1===this._trigger("scroll",null,[b,c]))return this;a.isFunction(c)&&(d=c,c=!0);var e=a.jCarousel.parseTarget(b);if(e.relative){var f,g,h,i,j,k,l,m,n=this.items().length-1,o=Math.abs(e.target),p=this.options("wrap");if(e.target>0){var q=this.index(this._last);if(q>=n&&this.tail)this.inTail?"both"===p||"last"===p?this._scroll(0,c,d):a.isFunction(d)&&d.call(this,!1):this._scrollTail(c,d);else if(f=this.index(this._target),this.underflow&&f===n&&("circular"===p||"both"===p||"last"===p)||!this.underflow&&q===n&&("both"===p||"last"===p))this._scroll(0,c,d);else if(h=f+o,this.circular&&h>n){for(m=n,j=this.items().get(-1);m++<h;)j=this.items().eq(0),k=this._visible.index(j)>=0,k&&j.after(j.clone(!0).attr("data-jcarousel-clone",!0)),this.list().append(j),k||(l={},l[this.lt]=this.dimension(j),this.moveBy(l)),this._items=null;this._scroll(j,c,d)}else this._scroll(Math.min(h,n),c,d)}else if(this.inTail)this._scroll(Math.max(this.index(this._first)-o+1,0),c,d);else if(g=this.index(this._first),f=this.index(this._target),i=this.underflow?f:g,h=i-o,0>=i&&(this.underflow&&"circular"===p||"both"===p||"first"===p))this._scroll(n,c,d);else if(this.circular&&0>h){for(m=h,j=this.items().get(0);m++<0;){j=this.items().eq(-1),k=this._visible.index(j)>=0,k&&j.after(j.clone(!0).attr("data-jcarousel-clone",!0)),this.list().prepend(j),this._items=null;var r=this.dimension(j);l={},l[this.lt]=-r,this.moveBy(l)}this._scroll(j,c,d)}else this._scroll(Math.max(h,0),c,d)}else this._scroll(e.target,c,d);return this._trigger("scrollend"),this},moveBy:function(a,b){var d=this.list().position(),e=1,f=0;return this.rtl&&!this.vertical&&(e=-1,this.relative&&(f=this.list().width()-this.clipping())),a.left&&(a.left=d.left+f+c(a.left)*e+"px"),a.top&&(a.top=d.top+f+c(a.top)*e+"px"),this.move(a,b)},move:function(b,c){c=c||{};var d=this.options("transitions"),e=!!d,f=!!d.transforms,g=!!d.transforms3d,h=c.duration||0,i=this.list();if(!e&&h>0)return void i.animate(b,c);var j=c.complete||a.noop,k={};if(e){var l={transitionDuration:i.css("transitionDuration"),transitionTimingFunction:i.css("transitionTimingFunction"),transitionProperty:i.css("transitionProperty")},m=j;j=function(){a(this).css(l),m.call(this)},k={transitionDuration:(h>0?h/1e3:0)+"s",transitionTimingFunction:d.easing||c.easing,transitionProperty:h>0?function(){return f||g?"all":b.left?"left":"top"}():"none",transform:"none"}}g?k.transform="translate3d("+(b.left||0)+","+(b.top||0)+",0)":f?k.transform="translate("+(b.left||0)+","+(b.top||0)+")":a.extend(k,b),e&&h>0&&i.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",j),i.css(k),0>=h&&i.each(function(){j.call(this)})},_scroll:function(b,c,d){if(this.animating)return a.isFunction(d)&&d.call(this,!1),this;if("object"!=typeof b?b=this.items().eq(b):"undefined"==typeof b.jquery&&(b=a(b)),0===b.length)return a.isFunction(d)&&d.call(this,!1),this;this.inTail=!1,this._prepare(b);var e=this._position(b),f=this.list().position()[this.lt];if(e===f)return a.isFunction(d)&&d.call(this,!1),this;var g={};return g[this.lt]=e+"px",this._animate(g,c,d),this},_scrollTail:function(b,c){if(this.animating||!this.tail)return a.isFunction(c)&&c.call(this,!1),this;var d=this.list().position()[this.lt];this.rtl&&this.relative&&!this.vertical&&(d+=this.list().width()-this.clipping()),this.rtl&&!this.vertical?d+=this.tail:d-=this.tail,this.inTail=!0;var e={};return e[this.lt]=d+"px",this._update({target:this._target.next(),fullyvisible:this._fullyvisible.slice(1).add(this._visible.last())}),this._animate(e,b,c),this},_animate:function(b,c,d){if(d=d||a.noop,!1===this._trigger("animate"))return d.call(this,!1),this;this.animating=!0;var e=this.options("animation"),f=a.proxy(function(){this.animating=!1;var a=this.list().find("[data-jcarousel-clone]");a.length>0&&(a.remove(),this._reload()),this._trigger("animateend"),d.call(this,!0)},this),g="object"==typeof e?a.extend({},e):{duration:e},h=g.complete||a.noop;return c===!1?g.duration=0:"undefined"!=typeof a.fx.speeds[g.duration]&&(g.duration=a.fx.speeds[g.duration]),g.complete=function(){f(),h.call(this)},this.move(b,g),this},_prepare:function(b){var d,e,f,g,h=this.index(b),i=h,j=this.dimension(b),k=this.clipping(),l=this.vertical?"bottom":this.rtl?"left":"right",m=this.options("center"),n={target:b,first:b,last:b,visible:b,fullyvisible:k>=j?b:a()};if(m&&(j/=2,k/=2),k>j)for(;;){if(d=this.items().eq(++i),0===d.length){if(!this.circular)break;if(d=this.items().eq(0),b.get(0)===d.get(0))break;if(e=this._visible.index(d)>=0,e&&d.after(d.clone(!0).attr("data-jcarousel-clone",!0)),this.list().append(d),!e){var o={};o[this.lt]=this.dimension(d),this.moveBy(o)}this._items=null}if(g=this.dimension(d),0===g)break;if(j+=g,n.last=d,n.visible=n.visible.add(d),f=c(d.css("margin-"+l)),k>=j-f&&(n.fullyvisible=n.fullyvisible.add(d)),j>=k)break}if(!this.circular&&!m&&k>j)for(i=h;;){if(--i<0)break;if(d=this.items().eq(i),0===d.length)break;if(g=this.dimension(d),0===g)break;if(j+=g,n.first=d,n.visible=n.visible.add(d),f=c(d.css("margin-"+l)),k>=j-f&&(n.fullyvisible=n.fullyvisible.add(d)),j>=k)break}return this._update(n),this.tail=0,m||"circular"===this.options("wrap")||"custom"===this.options("wrap")||this.index(n.last)!==this.items().length-1||(j-=c(n.last.css("margin-"+l)),j>k&&(this.tail=j-k)),this},_position:function(a){var b=this._first,c=b.position()[this.lt],d=this.options("center"),e=d?this.clipping()/2-this.dimension(b)/2:0;return this.rtl&&!this.vertical?(c-=this.relative?this.list().width()-this.dimension(b):this.clipping()-this.dimension(b),c+=e):c-=e,!d&&(this.index(a)>this.index(b)||this.inTail)&&this.tail?(c=this.rtl&&!this.vertical?c-this.tail:c+this.tail,this.inTail=!0):this.inTail=!1,-c},_update:function(b){var c,d=this,e={target:this._target,first:this._first,last:this._last,visible:this._visible,fullyvisible:this._fullyvisible},f=this.index(b.first||e.first)<this.index(e.first),g=function(c){var g=[],h=[];b[c].each(function(){e[c].index(this)<0&&g.push(this)}),e[c].each(function(){b[c].index(this)<0&&h.push(this)}),f?g=g.reverse():h=h.reverse(),d._trigger(c+"in",a(g)),d._trigger(c+"out",a(h)),d["_"+c]=b[c]};for(c in b)g(c);return this}})}(jQuery,window),function(a){"use strict";a.jcarousel.fn.scrollIntoView=function(b,c,d){var e,f=a.jCarousel.parseTarget(b),g=this.index(this._fullyvisible.first()),h=this.index(this._fullyvisible.last());if(e=f.relative?f.target<0?Math.max(0,g+f.target):h+f.target:"object"!=typeof f.target?f.target:this.index(f.target),g>e)return this.scroll(e,c,d);if(e>=g&&h>=e)return a.isFunction(d)&&d.call(this,!1),this;for(var i,j=this.items(),k=this.clipping(),l=this.vertical?"bottom":this.rtl?"left":"right",m=0;;){if(i=j.eq(e),0===i.length)break;if(m+=this.dimension(i),m>=k){var n=parseFloat(i.css("margin-"+l))||0;m-n!==k&&e++;break}if(0>=e)break;e--}return this.scroll(e,c,d)}}(jQuery),function(a){"use strict";a.jCarousel.plugin("jcarouselControl",{_options:{target:"+=1",event:"click",method:"scroll"},_active:null,_init:function(){this.onDestroy=a.proxy(function(){this._destroy(),this.carousel().one("jcarousel:createend",a.proxy(this._create,this))},this),this.onReload=a.proxy(this._reload,this),this.onEvent=a.proxy(function(b){b.preventDefault();var c=this.options("method");a.isFunction(c)?c.call(this):this.carousel().jcarousel(this.options("method"),this.options("target"))},this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend",this.onReload),this._element.on(this.options("event")+".jcarouselcontrol",this.onEvent),this._reload()},_destroy:function(){this._element.off(".jcarouselcontrol",this.onEvent),this.carousel().off("jcarousel:destroy",this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend",this.onReload)},_reload:function(){var b,c=a.jCarousel.parseTarget(this.options("target")),d=this.carousel();if(c.relative)b=d.jcarousel(c.target>0?"hasNext":"hasPrev");else{var e="object"!=typeof c.target?d.jcarousel("items").eq(c.target):c.target;b=d.jcarousel("target").index(e)>=0}return this._active!==b&&(this._trigger(b?"active":"inactive"),this._active=b),this}})}(jQuery),function(a){"use strict";a.jCarousel.plugin("jcarouselPagination",{_options:{perPage:null,item:function(a){return'<a href="#'+a+'">'+a+"</a>"},event:"click",method:"scroll"},_carouselItems:null,_pages:{},_items:{},_currentPage:null,_init:function(){this.onDestroy=a.proxy(function(){this._destroy(),this.carousel().one("jcarousel:createend",a.proxy(this._create,this))},this),this.onReload=a.proxy(this._reload,this),this.onScroll=a.proxy(this._update,this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy).on("jcarousel:reloadend",this.onReload).on("jcarousel:scrollend",this.onScroll),this._reload()},_destroy:function(){this._clear(),this.carousel().off("jcarousel:destroy",this.onDestroy).off("jcarousel:reloadend",this.onReload).off("jcarousel:scrollend",this.onScroll),this._carouselItems=null},_reload:function(){var b=this.options("perPage");if(this._pages={},this._items={},a.isFunction(b)&&(b=b.call(this)),null==b)this._pages=this._calculatePages();else for(var c,d=parseInt(b,10)||0,e=this._getCarouselItems(),f=1,g=0;;){if(c=e.eq(g++),0===c.length)break;this._pages[f]=this._pages[f]?this._pages[f].add(c):c,g%d===0&&f++}this._clear();var h=this,i=this.carousel().data("jcarousel"),j=this._element,k=this.options("item"),l=this._getCarouselItems().length;a.each(this._pages,function(b,c){var d=h._items[b]=a(k.call(h,b,c));d.on(h.options("event")+".jcarouselpagination",a.proxy(function(){var a=c.eq(0);if(i.circular){var d=i.index(i.target()),e=i.index(a);parseFloat(b)>parseFloat(h._currentPage)?d>e&&(a="+="+(l-d+e)):e>d&&(a="-="+(d+(l-e)))}i[this.options("method")](a)},h)),j.append(d)}),this._update()},_update:function(){var b,c=this.carousel().jcarousel("target");a.each(this._pages,function(a,d){return d.each(function(){return c.is(this)?(b=a,!1):void 0}),b?!1:void 0}),this._currentPage!==b&&(this._trigger("inactive",this._items[this._currentPage]),this._trigger("active",this._items[b])),this._currentPage=b},items:function(){return this._items},reloadCarouselItems:function(){return this._carouselItems=null,this},_clear:function(){this._element.empty(),this._currentPage=null},_calculatePages:function(){for(var a,b,c=this.carousel().data("jcarousel"),d=this._getCarouselItems(),e=c.clipping(),f=0,g=0,h=1,i={};;){if(a=d.eq(g++),0===a.length)break;b=c.dimension(a),f+b>e&&(h++,f=0),f+=b,i[h]=i[h]?i[h].add(a):a}return i},_getCarouselItems:function(){return this._carouselItems||(this._carouselItems=this.carousel().jcarousel("items")),this._carouselItems}})}(jQuery),function(a,b){"use strict";var c,d,e={hidden:"visibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange",webkitHidden:"webkitvisibilitychange"};a.each(e,function(a,e){return"undefined"!=typeof b[a]?(c=a,d=e,!1):void 0}),a.jCarousel.plugin("jcarouselAutoscroll",{_options:{target:"+=1",interval:3e3,autostart:!0},_timer:null,_started:!1,_init:function(){this.onDestroy=a.proxy(function(){this._destroy(),this.carousel().one("jcarousel:createend",a.proxy(this._create,this))},this),this.onAnimateEnd=a.proxy(this._start,this),this.onVisibilityChange=a.proxy(function(){b[c]?this._stop():this._start()},this)},_create:function(){this.carousel().one("jcarousel:destroy",this.onDestroy),a(b).on(d,this.onVisibilityChange),this.options("autostart")&&this.start()},_destroy:function(){this._stop(),this.carousel().off("jcarousel:destroy",this.onDestroy),a(b).off(d,this.onVisibilityChange)},_start:function(){return this._stop(),this._started?(this.carousel().one("jcarousel:animateend",this.onAnimateEnd),this._timer=setTimeout(a.proxy(function(){this.carousel().jcarousel("scroll",this.options("target"))},this),this.options("interval")),this):void 0},_stop:function(){return this._timer&&(this._timer=clearTimeout(this._timer)),this.carousel().off("jcarousel:animateend",this.onAnimateEnd),this},start:function(){return this._started=!0,this._start(),this},stop:function(){return this._started=!1,this._stop(),this}})}(jQuery,document);
;



window.Modernizr = (function( window, document, undefined ) {

    var version = '2.8.3',

        Modernizr = {},


        docElement = document.documentElement,

        mod = 'modernizr',
        modElem = document.createElement(mod),
        mStyle = modElem.style,

        inputElem  ,


        toString = {}.toString,

        prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



        omPrefixes = 'Webkit Moz O ms',

        cssomPrefixes = omPrefixes.split(' '),

        domPrefixes = omPrefixes.toLowerCase().split(' '),


        tests = {},
        inputs = {},
        attrs = {},

        classes = [],

        slice = classes.slice,

        featureName,


        injectElementWithStyles = function( rule, callback, nodes, testnames ) {

            var style, ret, node, docOverflow,
                div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

            if ( parseInt(nodes, 10) ) {
                while ( nodes-- ) {
                    node = document.createElement('div');
                    node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
                    div.appendChild(node);
                }
            }

            style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
            div.id = mod;
            (body ? div : fakeBody).innerHTML += style;
            fakeBody.appendChild(div);
            if ( !body ) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
                docOverflow = docElement.style.overflow;
                docElement.style.overflow = 'hidden';
                docElement.appendChild(fakeBody);
            }

            ret = callback(div, rule);
            if ( !body ) {
                fakeBody.parentNode.removeChild(fakeBody);
                docElement.style.overflow = docOverflow;
            } else {
                div.parentNode.removeChild(div);
            }

            return !!ret;

        },
        _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
        hasOwnProp = function (object, property) {
            return _hasOwnProperty.call(object, property);
        };
    }
    else {
        hasOwnProp = function (object, property) {
            return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
        };
    }


    if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(that) {

            var target = this;

            if (typeof target != "function") {
                throw new TypeError();
            }

            var args = slice.call(arguments, 1),
                bound = function () {

                    if (this instanceof bound) {

                        var F = function(){};
                        F.prototype = target.prototype;
                        var self = new F();

                        var result = target.apply(
                            self,
                            args.concat(slice.call(arguments))
                        );
                        if (Object(result) === result) {
                            return result;
                        }
                        return self;

                    } else {

                        return target.apply(
                            that,
                            args.concat(slice.call(arguments))
                        );

                    }

                };

            return bound;
        };
    }

    function setCss( str ) {
        mStyle.cssText = str;
    }

    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    function is( obj, type ) {
        return typeof obj === type;
    }

    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                if (elem === false) return props[i];

                if (is(item, 'function')){
                    return item.bind(elem || obj);
                }

                return item;
            }
        }
        return false;
    }

    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        if(is(prefixed, "string") || is(prefixed, "undefined")) {
            return testProps(props, prefixed);

        } else {
            props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
            return testDOMProps(props, prefixed, elem);
        }
    }


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

        if ( ret && 'webkitPerspective' in docElement.style ) {

            injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
                ret = node.offsetLeft === 9 && node.offsetHeight === 3;
            });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };



    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
            featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }



    Modernizr.addTest = function ( feature, test ) {
        if ( typeof feature == 'object' ) {
            for ( var key in feature ) {
                if ( hasOwnProp( feature, key ) ) {
                    Modernizr.addTest( key, feature[ key ] );
                }
            }
        } else {

            feature = feature.toLowerCase();

            if ( Modernizr[feature] !== undefined ) {
                return Modernizr;
            }

            test = typeof test == 'function' ? test() : test;

            if (typeof enableClasses !== "undefined" && enableClasses) {
                docElement.className += ' ' + (test ? '' : 'no-') + feature;
            }
            Modernizr[feature] = test;

        }

        return Modernizr;
    };


    setCss('');
    modElem = inputElem = null;


    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;



    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };

    Modernizr.testAllProps  = testPropsAll;


    Modernizr.testStyles    = injectElementWithStyles;
    return Modernizr;

})(this, this.document);
;
