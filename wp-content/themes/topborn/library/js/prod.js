/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
/*!
 * Fresco - A Beautiful Responsive Lightbox - v2.1.1
 * (c) 2012-2015 Nick Stakenburg
 *
 * http://www.frescojs.com
 *
 * License: http://www.frescojs.com/license
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):a.Fresco=b(jQuery)}(this,function($){function baseToString(a){return"string"==typeof a?a:null==a?"":a+""}function Timers(){return this.initialize.apply(this,_slice.call(arguments))}function getURIData(a){var b={type:"image"};return $.each(Types,function(c,d){var e=d.data(a);e&&(b=e,b.type=c,b.url=a)}),b}function detectExtension(a){var b=(a||"").replace(/\?.*/g,"").match(/\.([^.]{3,4})$/);return b?b[1].toLowerCase():null}function View(){this.initialize.apply(this,_slice.call(arguments))}function Thumbnail(){this.initialize.apply(this,_slice.call(arguments))}var Fresco={};$.extend(Fresco,{version:"2.1.1"}),Fresco.Skins={fresco:{}};var Bounds={viewport:function(){var a={width:$(window).width()};if(Browser.MobileSafari||Browser.Android&&Browser.Gecko){var b=document.documentElement.clientWidth/window.innerWidth;a.height=window.innerHeight*b}else a.height=$(window).height();return a}},Browser=function(a){function b(b){var c=new RegExp(b+"([\\d.]+)").exec(a);return c?parseFloat(c[1]):!0}return{IE:!(!window.attachEvent||-1!==a.indexOf("Opera"))&&b("MSIE "),Opera:a.indexOf("Opera")>-1&&(!!window.opera&&opera.version&&parseFloat(opera.version())||7.55),WebKit:a.indexOf("AppleWebKit/")>-1&&b("AppleWebKit/"),Gecko:a.indexOf("Gecko")>-1&&-1===a.indexOf("KHTML")&&b("rv:"),MobileSafari:!!a.match(/Apple.*Mobile.*Safari/),Chrome:a.indexOf("Chrome")>-1&&b("Chrome/"),ChromeMobile:a.indexOf("CrMo")>-1&&b("CrMo/"),Android:a.indexOf("Android")>-1&&b("Android "),IEMobile:a.indexOf("IEMobile")>-1&&b("IEMobile/")}}(navigator.userAgent),_slice=Array.prototype.slice,_={isElement:function(a){return a&&1==a.nodeType},String:{capitalize:function(a){return a=baseToString(a),a&&a.charAt(0).toUpperCase()+a.slice(1)}}};!function(){function a(a){var b;if(a.originalEvent.wheelDelta?b=a.originalEvent.wheelDelta/120:a.originalEvent.detail&&(b=-a.originalEvent.detail/3),b){var c=$.Event("fresco:mousewheel");$(a.target).trigger(c,b),c.isPropagationStopped()&&a.stopPropagation(),c.isDefaultPrevented()&&a.preventDefault()}}$(document.documentElement).on("mousewheel DOMMouseScroll",a)}();var Fit={within:function(a,b){for(var c=$.extend({height:!0,width:!0},arguments[2]||{}),d=$.extend({},b),e=1,f=5,g={width:c.width,height:c.height};f>0&&(g.width&&d.width>a.width||g.height&&d.height>a.height);){var h=1,i=1;g.width&&d.width>a.width&&(h=a.width/d.width),g.height&&d.height>a.height&&(i=a.height/d.height);var e=Math.min(h,i);d={width:Math.round(b.width*e),height:Math.round(b.height*e)},f--}return d.width=Math.max(d.width,0),d.height=Math.max(d.height,0),d}};$.extend($.easing,{frescoEaseInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},frescoEaseInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},frescoEaseOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c}});var Support=function(){function a(a){return c(a,"prefix")}function b(a,b){for(var c in a)if(void 0!==d.style[a[c]])return"prefix"==b?a[c]:!0;return!1}function c(a,c){var d=a.charAt(0).toUpperCase()+a.substr(1),f=(a+" "+e.join(d+" ")+d).split(" ");return b(f,c)}var d=document.createElement("div"),e="Webkit Moz O ms Khtml".split(" ");return{canvas:function(){var a=document.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))}(),css:{animation:c("animation"),transform:c("transform"),prefixed:a},svg:!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,touch:function(){try{return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}catch(a){return!1}}()}}();Support.detectMobileTouch=function(){Support.mobileTouch=Support.touch&&(Browser.MobileSafari||Browser.Android||Browser.IEMobile||Browser.ChromeMobile||!/^(Win|Mac|Linux)/.test(navigator.platform))},Support.detectMobileTouch();var ImageReady=function(){return this.initialize.apply(this,Array.prototype.slice.call(arguments))};$.extend(ImageReady.prototype,{supports:{naturalWidth:function(){return"naturalWidth"in new Image}()},initialize:function(a,b,c){return this.img=$(a)[0],this.successCallback=b,this.errorCallback=c,this.isLoaded=!1,this.options=$.extend({method:"naturalWidth",pollFallbackAfter:1e3},arguments[3]||{}),this.supports.naturalWidth&&"onload"!=this.options.method?this.img.complete&&"undefined"!=$.type(this.img.naturalWidth)?void setTimeout($.proxy(function(){this.img.naturalWidth>0?this.success():this.error()},this)):($(this.img).bind("error",$.proxy(function(){setTimeout($.proxy(function(){this.error()},this))},this)),this.intervals=[[1e3,10],[2e3,50],[4e3,100],[2e4,500]],this._ipos=0,this._time=0,this._delay=this.intervals[this._ipos][1],void this.poll()):void setTimeout($.proxy(this.fallback,this))},poll:function(){this._polling=setTimeout($.proxy(function(){if(this.img.naturalWidth>0)return void this.success();if(this._time+=this._delay,this.options.pollFallbackAfter&&this._time>=this.options.pollFallbackAfter&&!this._usedPollFallback&&(this._usedPollFallback=!0,this.fallback()),this._time>this.intervals[this._ipos][0]){if(!this.intervals[this._ipos+1])return void this.error();this._ipos++,this._delay=this.intervals[this._ipos][1]}this.poll()},this),this._delay)},fallback:function(){var a=new Image;this._fallbackImg=a,a.onload=$.proxy(function(){a.onload=function(){},this.supports.naturalWidth||(this.img.naturalWidth=a.width,this.img.naturalHeight=a.height),this.success()},this),a.onerror=$.proxy(this.error,this),a.src=this.img.src},abort:function(){this._fallbackImg&&(this._fallbackImg.onload=function(){}),this._polling&&(clearTimeout(this._polling),this._polling=null)},success:function(){this._calledSuccess||(this._calledSuccess=!0,this.isLoaded=!0,this.successCallback(this))},error:function(){this._calledError||(this._calledError=!0,this.abort(),this.errorCallback&&this.errorCallback(this))}}),$.extend(Timers.prototype,{initialize:function(){this._timers={}},set:function(a,b,c){this._timers[a]=setTimeout(b,c)},get:function(a){return this._timers[a]},clear:function(a){a?this._timers[a]&&(clearTimeout(this._timers[a]),delete this._timers[a]):this.clearAll()},clearAll:function(){$.each(this._timers,function(a,b){clearTimeout(b)}),this._timers={}}});var Type={isVideo:function(a){return/^(youtube|vimeo)$/.test(a)}},Types={image:{extensions:"bmp gif jpeg jpg png webp",detect:function(a){return $.inArray(detectExtension(a),this.extensions.split(" "))>-1},data:function(a){return this.detect()?{extension:detectExtension(a)}:!1}},vimeo:{detect:function(a){var b=/(vimeo\.com)\/([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(a);return b&&b[2]?b[2]:!1},data:function(a){var b=this.detect(a);return b?{id:b}:!1}},youtube:{detect:function(a){var b=/(youtube\.com|youtu\.be)\/watch\?(?=.*vi?=([a-zA-Z0-9-_]+))(?:\S+)?$/.exec(a);return b&&b[2]?b[2]:(b=/(youtube\.com|youtu\.be)\/(vi?\/|u\/|embed\/)?([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(a),b&&b[3]?b[3]:!1)},data:function(a){var b=this.detect(a);return b?{id:b}:!1}}},VimeoThumbnail=function(){var a=function(){return this.initialize.apply(this,_slice.call(arguments))};$.extend(a.prototype,{initialize:function(a,b,c){this.url=a,this.successCallback=b,this.errorCallback=c,this.load()},load:function(){var a=b.get(this.url);if(a)return this.successCallback(a.data.url);var c="http"+(window.location&&"https:"==window.location.protocol?"s":"")+":",d=getURIData(this.url).id;this._xhr=$.getJSON(c+"//vimeo.com/api/oembed.json?url="+c+"//vimeo.com/"+d+"&callback=?",$.proxy(function(a){if(a&&a.thumbnail_url){var a={url:a.thumbnail_url};b.set(this.url,a),this.successCallback(a.url)}else this.errorCallback()},this))},abort:function(){this._xhr&&(this._xhr.abort(),this._xhr=null)}});var b={cache:[],get:function(a){for(var b=null,c=0;c<this.cache.length;c++)this.cache[c]&&this.cache[c].url==a&&(b=this.cache[c]);return b},set:function(a,b){this.remove(a),this.cache.push({url:a,data:b})},remove:function(a){for(var b=0;b<this.cache.length;b++)this.cache[b]&&this.cache[b].url==a&&delete this.cache[b]}};return a}(),VimeoReady=function(){var a=function(){return this.initialize.apply(this,_slice.call(arguments))};$.extend(a.prototype,{initialize:function(a,b){this.url=a,this.callback=b,this.load()},load:function(){var a=b.get(this.url);if(a)return this.callback(a.data);var c="http"+(window.location&&"https:"==window.location.protocol?"s":"")+":",d=getURIData(this.url).id;this._xhr=$.getJSON(c+"//vimeo.com/api/oembed.json?url="+c+"//vimeo.com/"+d+"&callback=?",$.proxy(function(a){var c={dimensions:{width:a.width,height:a.height}};b.set(this.url,c),this.callback&&this.callback(c)},this))},abort:function(){this._xhr&&(this._xhr.abort(),this._xhr=null)}});var b={cache:[],get:function(a){for(var b=null,c=0;c<this.cache.length;c++)this.cache[c]&&this.cache[c].url==a&&(b=this.cache[c]);return b},set:function(a,b){this.remove(a),this.cache.push({url:a,data:b})},remove:function(a){for(var b=0;b<this.cache.length;b++)this.cache[b]&&this.cache[b].url==a&&delete this.cache[b]}};return a}(),Options={defaults:{effects:{content:{show:0,hide:0},spinner:{show:150,hide:150},window:{show:440,hide:300},thumbnail:{show:300,delay:150},thumbnails:{slide:0}},keyboard:{left:!0,right:!0,esc:!0},loadedMethod:"naturalWidth",loop:!1,onClick:"previous-next",overflow:!1,overlay:{close:!0},preload:[1,2],position:!0,skin:"fresco",spinner:!0,spinnerDelay:300,sync:!0,thumbnails:"horizontal",ui:"outside",uiDelay:3e3,vimeo:{autoplay:1,api:1,title:1,byline:1,portrait:0,loop:0},youtube:{autoplay:1,controls:1,enablejsapi:1,hd:1,iv_load_policy:3,loop:0,modestbranding:1,rel:0,vq:"hd1080"},initialTypeOptions:{image:{},vimeo:{width:1280},youtube:{width:1280,height:720}}},create:function(a,b,c){a=a||{},c=c||{},a.skin=a.skin||this.defaults.skin;var d=a.skin?$.extend({},Fresco.Skins[a.skin]||Fresco.Skins[this.defaults.skin]):{},e=$.extend(!0,{},this.defaults,d);e.initialTypeOptions&&(b&&e.initialTypeOptions[b]&&(e=$.extend(!0,{},e.initialTypeOptions[b],e)),delete e.initialTypeOptions);var f=$.extend(!0,{},e,a);if(Support.mobileTouch&&"inside"==f.ui&&(f.ui="outside"),(!f.effects||Browser.IE&&Browser.IE<9)&&(f.effects={},$.each(this.defaults.effects,function(a,b){$.each(f.effects[a]=$.extend({},b),function(b){f.effects[a][b]=0})}),f.spinner=!1),f.keyboard&&("boolean"==$.type(f.keyboard)&&(f.keyboard={},$.each(this.defaults.keyboard,function(a,b){f.keyboard[a]=!0})),("vimeo"==b||"youtube"==b)&&$.extend(f.keyboard,{left:!1,right:!1})),!f.overflow||Support.mobileTouch?f.overflow={x:!1,y:!1}:"boolean"==$.type(f.overflow)&&(f.overflow={x:!1,y:!0}),("vimeo"==b||"youtube"==b)&&(f.overlap=!1),(Browser.IE&&Browser.IE<9||Support.mobileTouch)&&(f.thumbnail=!1,f.thumbnails=!1),"youtube"!=b&&(f.width&&!f.maxWidth&&(f.maxWidth=f.width),f.height&&!f.maxHeight&&(f.maxHeight=f.height)),!f.thumbnail&&"boolean"!=$.type(f.thumbnail)){var g=!1;switch(b){case"youtube":var h="http"+(window.location&&"https:"==window.location.protocol?"s":"")+":";g=h+"//img.youtube.com/vi/"+c.id+"/0.jpg";break;case"image":case"vimeo":g=!0}f.thumbnail=g}return f}},Overlay={initialize:function(){this.build(),this.visible=!1},build:function(){this.element=$("<div>").addClass("fr-overlay").hide().append($("<div>").addClass("fr-overlay-background")),this.element.on("click",$.proxy(function(){var a=Pages.page;a&&a.view&&a.view.options.overlay&&!a.view.options.overlay.close||Window.hide()},this)),Support.mobileTouch&&this.element.addClass("fr-mobile-touch"),this.element.on("fresco:mousewheel",function(a){a.preventDefault()})},setSkin:function(a){this.skin&&this.element.removeClass("fr-overlay-skin-"+this.skin),this.element.addClass("fr-overlay-skin-"+a),this.skin=a},attach:function(){$(document.body).append(this.element)},detach:function(){this.element.detach()},show:function(a,b){if(this.visible)return void(a&&a());this.visible=!0,this.attach(),this.max();var c=Pages.page&&Pages.page.view.options.effects.window.show||0,d=("number"==$.type(b)?b:c)||0;this.element.stop(!0).fadeTo(d,1,a)},hide:function(a,b){if(!this.visible)return void(a&&a());var c=Pages.page&&Pages.page.view.options.effects.window.hide||0,d=("number"==$.type(b)?b:c)||0;this.element.stop(!0).fadeOut(d||0,$.proxy(function(){this.detach(),this.visible=!1,a&&a()},this))},getScrollDimensions:function(){var a={};return $.each(["width","height"],function(b,c){var d=c.substr(0,1).toUpperCase()+c.substr(1),e=document.documentElement;a[c]=(Browser.IE?Math.max(e["offset"+d],e["scroll"+d]):Browser.WebKit?document.body["scroll"+d]:e["scroll"+d])||0}),a},max:function(){var a;if(Browser.MobileSafari&&Browser.WebKit&&Browser.WebKit<533.18&&(a=this.getScrollDimensions(),this.element.css(a)),Browser.IE&&Browser.IE<9){var b=Bounds.viewport();this.element.css({height:b.height,width:b.width})}Support.mobileTouch&&!a&&this.element.css({height:this.getScrollDimensions().height})}},Window={initialize:function(){this.queues=[],this.queues.hide=$({}),this.pages=[],this._tracking=[],this._first=!0,this.timers=new Timers,this.build(),this.setSkin(Options.defaults.skin)},build:function(){if(this.element=$("<div>").addClass("fr-window fr-measured").hide().append(this._box=$("<div>").addClass("fr-box").append(this._pages=$("<div>").addClass("fr-pages"))).append(this._thumbnails=$("<div>").addClass("fr-thumbnails")),Overlay.initialize(),Pages.initialize(this._pages),Thumbnails.initialize(this._thumbnails),Spinner.initialize(),UI.initialize(),this.element.addClass("fr"+(Support.mobileTouch?"":"-no")+"-mobile-touch"),this.element.addClass("fr"+(Support.svg?"":"-no")+"-svg"),Browser.IE)for(var a=7;9>=a;a++)Browser.IE<a&&this.element.addClass("fr-ltIE"+a);this.element.on("fresco:mousewheel",function(a){a.preventDefault()})},attach:function(){this._attached||($(document.body).append(this.element),this._attached=!0)},detach:function(){this._attached&&(this.element.detach(),this._attached=!1)},setSkin:function(a){this._skin&&this.element.removeClass("fr-window-skin-"+this._skin),this.element.addClass("fr-window-skin-"+a),Overlay.setSkin(a),this._skin=a},setShowingType:function(a){this._showingType!=a&&(this._showingType&&(this.element.removeClass("fr-showing-type-"+this._showingType),Type.isVideo(this._showingType)&&this.element.removeClass("fr-showing-type-video")),this.element.addClass("fr-showing-type-"+a),Type.isVideo(a)&&this.element.addClass("fr-showing-type-video"),this._showingType=a)},startObservingResize:function(){this._onWindowResizeHandler||$(window).on("resize orientationchange",this._onWindowResizeHandler=$.proxy(this._onWindowResize,this))},stopObservingResize:function(){this._onWindowResizeHandler&&($(window).off("resize orientationchange",this._onWindowResizeHandler),this._onWindowResizeHandler=null)},_onScroll:function(){Support.mobileTouch&&this.timers.set("scroll",$.proxy(this.adjustToScroll,this),0)},_onWindowResize:function(){var a;(a=Pages.page)&&(Thumbnails.fitToViewport(),this.updateBoxDimensions(),a.fitToBox(),UI.update(),UI.adjustPrevNext(null,0),Spinner.center(),Overlay.max(),UI._onWindowResize(),this._onScroll())},adjustToScroll:function(){Support.mobileTouch&&this.element.css({top:$(window).scrollTop()})},getBoxDimensions:function(){return this._boxDimensions},updateBoxDimensions:function(){var a;if(a=Pages.page){var b=Bounds.viewport(),c=Thumbnails.getDimensions(),d="horizontal"==Thumbnails._orientation;this._boxDimensions={width:d?b.width:b.width-c.width,height:d?b.height-c.height:b.height},this._boxPosition={top:0,left:d?0:c.width},this._box.css($.extend({},this._boxDimensions,this._boxPosition))}},show:function(a,b){if(this.visible)return void(a&&a());this.visible=!0,this.opening=!0,this.attach(),this.timers.clear("show-window"),this.timers.clear("hide-overlay"),this.adjustToScroll();var c=("number"==$.type(b)?b:Pages.page&&Pages.page.view.options.effects.window.show)||0,d=2;Overlay[Pages.page&&Pages.page.view.options.overlay?"show":"hide"](function(){a&&--d<1&&a()},c),this.timers.set("show-window",$.proxy(function(){this._show($.proxy(function(){this.opening=!1,a&&--d<1&&a()},this),c)},this),c>1?Math.min(.5*c,50):1)},_show:function(a,b){var c=("number"==$.type(b)?b:Pages.page&&Pages.page.view.options.effects.window.show)||0;this.element.stop(!0).fadeTo(c,1,a)},hide:function(a){var b=this.queues.hide;b.queue([]),this.timers.clear("show-window"),this.timers.clear("hide-overlay");var c=Pages.page?Pages.page.view.options.effects.window.hide:0;b.queue($.proxy(function(a){Pages.stop(),Spinner.hide(),a()},this)),b.queue($.proxy(function(a){UI.disable(),UI.hide(null,c),Keyboard.disable(),a()},this)),b.queue($.proxy(function(a){var b=2;this._hide(function(){--b<1&&a()},c),this.timers.set("hide-overlay",$.proxy(function(){Overlay.hide(function(){--b<1&&a()},c)},this),c>1?Math.min(.5*c,150):1),this._first=!0},this)),b.queue($.proxy(function(a){this._reset(),this.stopObservingResize(),Pages.removeAll(),Thumbnails.clear(),this.timers.clear(),this._position=-1;var b=Pages.page&&Pages.page.view.options.afterHide;"function"==$.type(b)&&b.call(Fresco),this.view=null,this.opening=!1,this.closing=!1,this.detach(),a()},this)),"function"==$.type(a)&&b.queue($.proxy(function(b){a(),b()},this))},_hide:function(a,b){var c=("number"==$.type(b)?b:Pages.page&&Pages.page.view.options.effects.window.hide)||0;this.element.stop(!0).fadeOut(c,a)},load:function(a,b){this.views=a,this.attach(),Thumbnails.load(a),Pages.load(a),this.startObservingResize(),b&&this.setPosition(b)},setPosition:function(a,b){this._position=a,this.view=this.views[a-1],this.stopHideQueue(),this.page=Pages.show(a,$.proxy(function(){b&&b()},this))},stopHideQueue:function(){this.queues.hide.queue([])},_reset:function(){this.visible=!1,UI.hide(null,0),UI.reset()},mayPrevious:function(){return this.view&&this.view.options.loop&&this.views&&this.views.length>1||1!=this._position},previous:function(a){var b=this.mayPrevious();(a||b)&&this.setPosition(this.getSurroundingIndexes().previous)},mayNext:function(){var a=this.views&&this.views.length>1;return this.view&&this.view.options.loop&&a||a&&1!=this.getSurroundingIndexes().next},next:function(a){var b=this.mayNext();(a||b)&&this.setPosition(this.getSurroundingIndexes().next)},getSurroundingIndexes:function(){if(!this.views)return{};var a=this._position,b=this.views.length,c=1>=a?b:a-1,d=a>=b?1:a+1;return{previous:c,next:d}}},Keyboard={enabled:!1,keyCode:{left:37,right:39,esc:27},enable:function(a){this.disable(),a&&($(document).on("keydown",this._onKeyDownHandler=$.proxy(this.onKeyDown,this)).on("keyup",this._onKeyUpHandler=$.proxy(this.onKeyUp,this)),this.enabled=a)},disable:function(){this.enabled=!1,this._onKeyUpHandler&&($(document).off("keyup",this._onKeyUpHandler).off("keydown",this._onKeyDownHandler),this._onKeyUpHandler=this._onKeyDownHandler=null)},onKeyDown:function(a){if(this.enabled){var b=this.getKeyByKeyCode(a.keyCode);if(b&&(!b||!this.enabled||this.enabled[b]))switch(a.preventDefault(),a.stopPropagation(),b){case"left":Window.previous();break;case"right":Window.next()}}},onKeyUp:function(a){if(this.enabled){var b=this.getKeyByKeyCode(a.keyCode);if(b&&(!b||!this.enabled||this.enabled[b]))switch(b){case"esc":Window.hide()}}},getKeyByKeyCode:function(a){for(var b in this.keyCode)if(this.keyCode[b]==a)return b;return null}},Page=function(){function a(){return this.initialize.apply(this,_slice.call(arguments))}var b=0,c={},d=$("<div>").addClass("fr-stroke fr-stroke-top fr-stroke-horizontal").append($("<div>").addClass("fr-stroke-color")).add($("<div>").addClass("fr-stroke fr-stroke-bottom fr-stroke-horizontal").append($("<div>").addClass("fr-stroke-color"))).add($("<div>").addClass("fr-stroke fr-stroke-left fr-stroke-vertical").append($("<div>").addClass("fr-stroke-color"))).add($("<div>").addClass("fr-stroke fr-stroke-right fr-stroke-vertical").append($("<div>").addClass("fr-stroke-color")));return $.extend(a.prototype,{initialize:function(a,c,d){this.view=a,this.dimensions={width:0,height:0},this.uid=b++,this._position=c,this._total=d,this._fullClick=!1,this._visible=!1,this.queues={},this.queues.showhide=$({})},create:function(){if(!this._created){Pages.element.append(this.element=$("<div>").addClass("fr-page").append(this.container=$("<div>").addClass("fr-container")).css({opacity:0}).hide());var a=this.view.options.position&&this._total>1;if(a&&this.element.addClass("fr-has-position"),(this.view.caption||a)&&(this.element.append(this.info=$("<div>").addClass("fr-info").append($("<div>").addClass("fr-info-background")).append(d.clone(!0)).append(this.infoPadder=$("<div>").addClass("fr-info-padder"))),a&&(this.element.addClass("fr-has-position"),this.infoPadder.append(this.pos=$("<div>").addClass("fr-position").append($("<span>").addClass("fr-position-text").html(this._position+" / "+this._total)))),this.view.caption&&this.infoPadder.append(this.caption=$("<div>").addClass("fr-caption").html(this.view.caption))),this.container.append(this.background=$("<div>").addClass("fr-content-background")).append(this.content=$("<div>").addClass("fr-content")),"image"==this.view.type&&(this.content.append(this.image=$("<img>").addClass("fr-content-element").attr({src:this.view.url})),this.content.append(d.clone(!0))),a&&"outside"==this.view.options.ui&&this.container.append(this.positionOutside=$("<div>").addClass("fr-position-outside").append($("<div>").addClass("fr-position-background")).append($("<span>").addClass("fr-position-text").html(this._position+" / "+this._total))),"inside"==this.view.options.ui){this.content.append(this.previousInside=$("<div>").addClass("fr-side fr-side-previous fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this.nextInside=$("<div>").addClass("fr-side fr-side-next fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this.closeInside=$("<div>").addClass("fr-close fr-toggle-ui").append($("<div>").addClass("fr-close-background")).append($("<div>").addClass("fr-close-icon"))),(this.view.caption||a&&this.view.grouped.caption)&&(this.content.append(this.infoInside=$("<div>").addClass("fr-info fr-toggle-ui").append($("<div>").addClass("fr-info-background")).append(d.clone(!0)).append(this.infoPadderInside=$("<div>").addClass("fr-info-padder"))),a&&this.infoPadderInside.append(this.posInside=$("<div>").addClass("fr-position").append($("<span>").addClass("fr-position-text").html(this._position+" / "+this._total))),this.view.caption&&this.infoPadderInside.append(this.captionInside=$("<div>").addClass("fr-caption").html(this.view.caption))),this.view.caption||!a||this.view.grouped.caption||this.content.append(this.positionInside=$("<div>").addClass("fr-position-inside fr-toggle-ui").append($("<div>").addClass("fr-position-background")).append($("<span>").addClass("fr-position-text").html(this._position+" / "+this._total)));var b=this.view.options.loop&&this._total>1||1!=this._position,c=this.view.options.loop&&this._total>1||this._position<this._total;this.previousInside[(b?"remove":"add")+"Class"]("fr-side-disabled"),this.nextInside[(c?"remove":"add")+"Class"]("fr-side-disabled")}$.each(["x","y"],$.proxy(function(a,b){this.view.options.overflow[b]&&this.element.addClass("fr-overflow-"+b)},this)),this.element.addClass("fr-type-"+this.view.type),Type.isVideo(this.view.type)&&this.element.addClass("fr-type-video"),this._total<2&&this.element.addClass("fr-no-sides"),this._created=!0}},_getSurroundingPages:function(){var a;if(!(a=this.view.options.preload))return[];for(var b=[],c=Math.max(1,this._position-a[0]),d=Math.min(this._position+a[1],this._total),e=this._position,f=e;d>=f;f++){var g=Pages.pages[f-1];g._position!=e&&b.push(g)}for(var f=e;f>=c;f--){var g=Pages.pages[f-1];g._position!=e&&b.push(g)}return b},preloadSurroundingImages:function(){var a=this._getSurroundingPages();$.each(a,$.proxy(function(a,b){b.preload()},this))},preload:function(){this.preloading||this.preloaded||"image"!=this.view.type||!this.view.options.preload||this.loaded||(this.create(),this.preloading=!0,this.preloadReady=new ImageReady(this.image[0],$.proxy(function(a){this.loaded=!0,c[this.view.url]=!0,this.preloading=!1,this.preloaded=!0,this.dimensions={width:a.img.naturalWidth,height:a.img.naturalHeight}},this),null,{method:"naturalWidth"}))},load:function(a,b){if(this.create(),this.loaded)return void(a&&a());switch(this.abort(),this.loading=!0,this.view.options.spinner&&(this._spinnerDelay=setTimeout($.proxy(function(){Spinner.show()},this),this.view.options.spinnerDelay||0)),this.view.type){case"image":if(this.error)return void(a&&a());this.imageReady=new ImageReady(this.image[0],$.proxy(function(b){this._markAsLoaded(),this.setDimensions({width:b.img.naturalWidth,height:b.img.naturalHeight}),a&&a()},this),$.proxy(function(){this._markAsLoaded(),this.image.hide(),this.content.prepend(this.error=$("<div>").addClass("fr-error fr-content-element").append($("<div>").addClass("fr-error-icon"))),this.element.addClass("fr-has-error"),this.setDimensions({width:this.error.outerWidth(),height:this.error.outerHeight()}),this.error.css({width:"100%",height:"100%"}),a&&a()},this),{method:this.view.options.loadedMethod});break;case"vimeo":this.vimeoReady=new VimeoReady(this.view.url,$.proxy(function(b){this._markAsLoaded(),this.setDimensions({width:b.dimensions.width,height:b.dimensions.height}),a&&a()},this));break;case"youtube":this._markAsLoaded(),this.setDimensions({width:this.view.options.width,height:this.view.options.height}),a&&a()}},setDimensions:function(a){if(this.dimensions=a,this.view.options.maxWidth||this.view.options.maxHeight){var b=this.view.options,c={width:b.maxWidth?b.maxWidth:this.dimensions.width,height:b.maxHeight?b.maxHeight:this.dimensions.height};this.dimensions=Fit.within(c,this.dimensions)}},_markAsLoaded:function(){this._abortSpinnerDelay(),this.loading=!1,this.loaded=!0,c[this.view.url]=!0,Spinner.hide(null,null,this._position)},isVideo:function(){return Type.isVideo(this.view.type)},insertVideo:function(a){if(this.playerIframe||!this.isVideo())return void(a&&a());var b="http"+(window.location&&"https:"==window.location.protocol?"s":"")+":",c=$.extend({},this.view.options[this.view.type]||{}),d=$.param(c),e={vimeo:b+"//player.vimeo.com/video/{id}?{queryString}",youtube:b+"//www.youtube.com/embed/{id}?{queryString}"},f=e[this.view.type].replace("{id}",this.view._data.id).replace("{queryString}",d);this.content.prepend(this.playerIframe=$("<iframe webkitAllowFullScreen mozallowfullscreen allowFullScreen>").addClass("fr-content-element").attr({src:f,height:this._contentDimensions.height,width:this._contentDimensions.width,frameborder:0})),a&&a()},raise:function(){var a=Pages.element[0].lastChild;a&&a==this.element[0]||Pages.element.append(this.element)},show:function(a){var b=this.queues.showhide;b.queue([]),b.queue($.proxy(function(a){var b=this.view.options.spinner&&!c[this.view.url];Spinner._visible&&!b&&Spinner.hide(),Pages.stopInactive(),a()},this)),b.queue($.proxy(function(a){this.updateUI(),UI.set(this._ui),a()},this)),b.queue($.proxy(function(a){Keyboard.enable(this.view.options.keyboard),a()},this)),b.queue($.proxy(function(a){Spinner.setSkin(this.view.options.skin),this.load($.proxy(function(){this.preloadSurroundingImages(),a()},this))},this)),b.queue($.proxy(function(a){this.raise(),Window.setSkin(this.view.options.skin),UI.enable(),this.fitToBox(),Window.adjustToScroll(),a()},this)),this.isVideo()&&b.queue($.proxy(function(a){this.insertVideo($.proxy(function(){a()}))},this)),this.view.options.sync||b.queue($.proxy(function(a){Pages.hideInactive(a)},this)),b.queue($.proxy(function(a){var b=3,c=this.view.options.effects.content.show;Window.setShowingType(this.view.type),Window.visible||(c=this.view.options.effects.window.show,"function"==$.type(this.view.options.onShow)&&this.view.options.onShow.call(Fresco)),this.view.options.sync&&(b++,Pages.hideInactive(function(){--b<1&&a()})),Window.show(function(){--b<1&&a()},this.view.options.effects.window.show),this._show(function(){--b<1&&a()},c),UI.adjustPrevNext(function(){--b<1&&a()},Window._first?0:c),Window._first?(UI.show(null,0),Window._first=!1):UI.show(null,0);var d=this.view.options.afterPosition;"function"==$.type(d)&&d.call(Fresco,this._position)},this)),b.queue($.proxy(function(b){this._visible=!0,a&&a(),b()},this))},_show:function(a,b){var c=Window.visible?"number"==$.type(b)?b:this.view.options.effects.content.show:0;this.element.stop(!0).show().fadeTo(c||0,1,a)},hide:function(a,b){if(!this.element)return void(a&&a());this.removeVideo(),this.abort();var c="number"==$.type(b)?b:this.view.options.effects.content.hide;this.isVideo()&&(c=0),this.element.stop(!0).fadeTo(c,0,"frescoEaseInCubic",$.proxy(function(){this.element.hide(),this._visible=!1,Pages.removeTracking(this._position),a&&a()},this))},stop:function(){var a=this.queues.showhide;a.queue([]),this.element&&this.element.stop(!0),this.abort()},removeVideo:function(){this.playerIframe&&(this.playerIframe[0].src="//about:blank",this.playerIframe.remove(),this.playerIframe=null)},remove:function(){this.stop(),this.removeVideo(),this.element&&this.element.remove(),this._track&&(Pages.removeTracking(this._position),this._track=!1),this.preloadReady&&(this.preloadReady.abort(),this.preloadReady=null,this.preloading=null,this.preloaded=null),this._visible=!1,this.removed=!0},abort:function(){this.imageReady&&(this.imageReady.abort(),this.imageReady=null),this.vimeoReady&&(this.vimeoReady.abort(),this.vimeoReady=null),this._abortSpinnerDelay(),this.loading=!1},_abortSpinnerDelay:function(){this._spinnerDelay&&(clearTimeout(this._spinnerDelay),this._spinnerDelay=null)},_getInfoHeight:function(a){var b=this.view.options.position&&this._total>1;switch(this._ui){case"fullclick":case"inside":if(!this.view.caption&&!b)return 0;break;case"outside":if(!this.view.caption)return 0}var c="inside"==this._ui?this.infoInside:this.info;"outside"==this._ui&&(a=Math.min(a,Window._boxDimensions.width));var d,e=c[0].style.width;return("inside"==this._ui||"fullclick"==this._ui)&&(e="100%"),c.css({width:a+"px"}),d=parseFloat(c.outerHeight()),c.css({width:e}),d},_whileVisible:function(a,b){var c=[],d=Window.element.add(this.element);b&&(d=d.add(b)),$.each(d,function(a,b){var d=$(b).is(":visible");d||c.push($(b).show())});var e=this.element.hasClass("fr-no-caption");this.element.removeClass("fr-no-caption");var f=this.element.hasClass("fr-has-caption");this.element.addClass("fr-has-caption"),Window.element.css({visibility:"hidden"}),a(),Window.element.css({visibility:"visible"}),e&&this.element.addClass("fr-no-caption"),f||this.element.removeClass("fr-has-caption"),$.each(c,function(a,b){b.hide()})},updateForced:function(){this.create(),this._fullClick=this.view.options.fullClick,this._noOverflow=!1,parseInt(this.element.css("min-width"))>0&&(this._fullClick=!0),parseInt(this.element.css("min-height"))>0&&(this._noOverflow=!0)},updateUI:function(a){this.updateForced();var a=this._fullClick?"fullclick":this.view.options.ui;this._ui&&this.element.removeClass("fr-ui-"+this._ui),this.element.addClass("fr-ui-"+a),this._ui=a},fitToBox:function(){if(this.content){var a=(this.element,$.extend({},Window.getBoxDimensions())),b=$.extend({},this.dimensions),c=this.container;this.updateUI();var d={left:parseInt(c.css("padding-left")),top:parseInt(c.css("padding-top"))};if("outside"==this._ui&&this._positionOutside){var e=0;this._whileVisible($.proxy(function(){this._positionOutside.is(":visible")&&(e=this._positionOutside.outerWidth(!0))},this)),e>d.left&&(d.left=e)}a.width-=2*d.left,a.height-=2*d.top;var f,g={width:!0,height:this._noOverflow?!0:!this.view.options.overflow.y},h=Fit.within(a,b,g),i=$.extend({},h),j=(this.content,0),k="inside"==this._ui,l=k?this.infoInside:this.info,m=k?this.captionInside:this.caption,n=k?this.posInside:this.pos,o=!!m;switch(this._ui){case"outside":var p,q=$.extend({},i);this.caption&&(p=this.caption,this._whileVisible($.proxy(function(){for(var b=0,c=2;c>b;){j=this._getInfoHeight(i.width);var d=a.height-i.height;j>d&&(i=Fit.within({width:i.width,height:Math.max(i.height-(j-d),0)},i,g)),b++}j=this._getInfoHeight(i.width);var e=.5;(!this.view.options.overflow.y&&j+i.height>a.height||l&&"none"==l.css("display")||e&&j>=e*i.height)&&(o=!1,j=0,i=q)},this),p)),l&&l.css({width:i.width+"px"}),f={width:i.width,height:i.height+j};break;case"inside":if(this.caption){var p=m;this._whileVisible($.proxy(function(){j=this._getInfoHeight(i.width);var a=.45;a&&j>=a*i.height&&(o=!1,j=0)},this),p)}f=i;break;case"fullclick":var r=[];m&&r.push(m),this._whileVisible($.proxy(function(){if((m||n)&&l.css({width:"100%"}),j=this._getInfoHeight(Window._boxDimensions.width),m&&j>.5*a.height)if(o=!1,n){var b=this.caption.is(":visible");this.caption.hide(),j=this._getInfoHeight(Window._boxDimensions.width),b&&this.caption.show()}else j=0;i=Fit.within({width:a.width,height:Math.max(0,a.height-j)},i,g),f=i},this),r),this.content.css({"padding-bottom":0})}m&&m[o?"show":"hide"](),this.element[(o?"remove":"add")+"Class"]("fr-no-caption"),this.element[(o?"add":"remove")+"Class"]("fr-has-caption"),this.content.css(i),this.background.css(f),this.playerIframe&&this.playerIframe.attr(i),this.overlap={y:f.height+("fullclick"==this._ui?j:0)-Window._boxDimensions.height,x:0},this._track=!this._noOverflow&&this.view.options.overflow.y&&this.overlap.y>0,this._infoHeight=j,this._padding=d,this._contentDimensions=i,this._backgroundDimensions=f,Pages[(this._track?"set":"remove")+"Tracking"](this._position),this.position()}},position:function(){if(this.content){var a=this._contentDimensions,b=this._backgroundDimensions,c={top:.5*Window._boxDimensions.height-.5*b.height,left:.5*Window._boxDimensions.width-.5*b.width},d={top:c.top+a.height,left:c.left},e=0,f="inside"==this._ui?this.infoInside:this.info;switch(this._ui){case"fullclick":c.top=.5*(Window._boxDimensions.height-this._infoHeight)-.5*b.height,d={top:Window._boxDimensions.height-this._infoHeight,left:0,bottom:"auto"},e=this._infoHeight;break;case"inside":d={top:"auto",left:0,bottom:0}}if(this.overlap.y>0){var g=Pages.getXYP();switch(c.top=0-g.y*this.overlap.y,this._ui){case"outside":case"fullclick":d.top=Window._boxDimensions.height-this._infoHeight;break;case"inside":var h=c.top+a.height-Window._boxDimensions.height,i=-1*c.top;if(d.bottom=h,this.closeInside.css({top:i}),this._total>1){var j=Window.element.is(":visible");j||Window.element.show();var k=this.previousInside.attr("style");this.previousInside.removeAttr("style");var l=parseInt(this.previousInside.css("margin-top"));this.previousInside.attr({style:k}),j||Window.element.hide();var m=this.previousInside.add(this.nextInside),n=.5*this.overlap.y;m.css({"margin-top":l+(i-n)}),this.positionInside&&this.positionInside.css({bottom:h})}}}else"inside"==this._ui&&this.element.find(".fr-info, .fr-side, .fr-close, .fr-position-inside").removeAttr("style");f&&f.css(d),this.container.css({bottom:e}),this.content.css(c),this.background.css(c)}}}),a}(),Pages={initialize:function(a){this.element=a,this.pages=[],this.uid=1,this._tracking=[]},load:function(a){this.views=a,this.removeAll(),$.each(a,$.proxy(function(a,b){this.pages.push(new Page(b,a+1,this.views.length))},this))},show:function(a,b){var c=this.pages[a-1];this.page&&this.page.uid==c.uid||(this.page=c,Thumbnails.show(a),Window.updateBoxDimensions(),c.show($.proxy(function(){b&&b()},this)))},getPositionInActivePageGroup:function(a){var b=0;return $.each(this.pages,function(c,d){d.view.element&&d.view.element==a&&(b=c+1)}),b},getLoadingCount:function(){var a=0;return $.each(this.pages,function(b,c){c.loading&&a++}),a},removeAll:function(){$.each(this.pages,function(a,b){b.remove()}),this.pages=[]},hideInactive:function(a,b){var c=[];$.each(this.pages,$.proxy(function(a,b){b.uid!=this.page.uid&&c.push(b)},this));var d=0+c.length;return 1>d?a&&a():$.each(c,function(c,e){e.hide(function(){a&&--d<1&&a()},b)}),c.length},stopInactive:function(){$.each(this.pages,$.proxy(function(a,b){b.uid!=this.page.uid&&b.stop()},this))},stop:function(){$.each(this.pages,function(a,b){b.stop()})},handleTracking:function(a){Browser.IE&&Browser.IE<9?(this.setXY({x:a.pageX,y:a.pageY}),this.updatePositions()):this._tracking_timer=setTimeout($.proxy(function(){this.setXY({x:a.pageX,y:a.pageY}),this.updatePositions()},this),30)},clearTrackingTimer:function(){this._tracking_timer&&(clearTimeout(this._tracking_timer),this._tracking_timer=null)},startTracking:function(){Support.mobileTouch||this._handleTracking||$(document.documentElement).on("mousemove",this._handleTracking=$.proxy(this.handleTracking,this))},stopTracking:function(){!Support.mobileTouch&&this._handleTracking&&($(document.documentElement).off("mousemove",this._handleTracking),this._handleTracking=null,this.clearTrackingTimer())},setTracking:function(a){this.isTracking(a)||(this._tracking.push(this.pages[a-1]),1==this._tracking.length&&this.startTracking())},clearTracking:function(){this._tracking=[]},removeTracking:function(a){this._tracking=$.grep(this._tracking,function(b){return b._position!=a}),this._tracking.length<1&&this.stopTracking()},isTracking:function(a){var b=!1;return $.each(this._tracking,function(c,d){return d._position==a?(b=!0,!1):void 0}),b},setXY:function(a){this._xy=a},getXYP:function(a){var b=Pages.page,c=$.extend({},Window._boxDimensions),a=$.extend({},this._xy);a.y-=$(window).scrollTop(),b&&("outside"==b._ui||"fullclick"==b._ui)&&b._infoHeight>0&&(c.height-=b._infoHeight),a.y-=Window._boxPosition.top;var d={x:0,y:Math.min(Math.max(a.y/c.height,0),1)},e=20,f={x:"width",y:"height"},g={};return $.each("y".split(" "),$.proxy(function(a,b){g[b]=Math.min(Math.max(e/c[f[b]],0),1),d[b]*=1+2*g[b],d[b]-=g[b],d[b]=Math.min(Math.max(d[b],0),1)},this)),this.setXYP(d),this._xyp},setXYP:function(a){this._xyp=a},updatePositions:function(){this._tracking.length<1||$.each(this._tracking,function(a,b){b.position()})}};$.extend(View.prototype,{initialize:function(object){var options=arguments[1]||{},data={};if("string"==$.type(object))object={url:object};else if(object&&1==object.nodeType){var element=$(object);object={element:element[0],url:element.attr("href"),caption:element.data("fresco-caption"),group:element.data("fresco-group"),extension:element.data("fresco-extension"),type:element.data("fresco-type"),options:element.data("fresco-options")&&eval("({"+element.data("fresco-options")+"})")||{}}}if(object&&(object.extension||(object.extension=detectExtension(object.url)),!object.type)){var data=getURIData(object.url);object._data=data,object.type=data.type}return object._data||(object._data=getURIData(object.url)),object&&object.options?object.options=$.extend(!0,$.extend({},options),$.extend({},object.options)):object.options=$.extend({},options),object.options=Options.create(object.options,object.type,object._data),$.extend(this,object),this}});var Spinner={supported:Support.css.transform&&Support.css.animation,initialize:function(a){this.element=$("<div>").addClass("fr-spinner").hide();for(var b=1;12>=b;b++)this.element.append($("<div>").addClass("fr-spin-"+b));this.element.on("click",$.proxy(function(){Window.hide()},this)),this.element.on("fresco:mousewheel",function(a){a.preventDefault()})},setSkin:function(a){this.supported&&(this._skin&&this.element.removeClass("fr-spinner-skin-"+this._skin),this.updateDimensions(),this.element.addClass("fr-spinner-skin-"+a),this._skin=a)},updateDimensions:function(){var a=this._attached;a||this.attach(),this._dimensions={width:this.element.outerWidth(),height:this.element.outerHeight()},a||this.detach()},attach:function(){this._attached||($(document.body).append(this.element),this._attached=!0)},detach:function(){this._attached&&(this.element.detach(),this._attached=!1)},show:function(a,b){this._visible=!0,this.attach(),this.center();var c=Pages.page&&Pages.page.view.options.effects.spinner.show||0,d=("number"==$.type(b)?b:c)||0;this.element.stop(!0).fadeTo(d,1,a)},hide:function(a,b,c){this._visible=!1;var d=Pages.page&&Pages.page.view.options.effects.spinner.hide||0,e=("number"==$.type(b)?b:d)||0;this.element.stop(!0).fadeOut(e||0,$.proxy(function(){this.detach(),a&&a()},this))},center:function(){if(this.supported){this._dimensions||this.updateDimensions();var a=Pages.page,b=0;a&&"fullclick"==a._ui&&a._whileVisible(function(){b=a._getInfoHeight(Window._boxDimensions.width)}),this.element.css({top:Window._boxPosition.top+.5*Window._boxDimensions.height-.5*this._dimensions.height-.5*b,left:Window._boxPosition.left+.5*Window._boxDimensions.width-.5*this._dimensions.width})}}},_Fresco={_disabled:!1,_fallback:!0,initialize:function(){Window.initialize(),this._disabled||this.startDelegating()},startDelegating:function(){this._delegateHandler||$(document.documentElement).on("click",".fresco[href]",this._delegateHandler=$.proxy(this.delegate,this)).on("click",this._setClickXYHandler=$.proxy(this.setClickXY,this))},stopDelegating:function(){this._delegateHandler&&($(document.documentElement).off("click",".fresco[href]",this._delegateHandler).off("click",this._setClickXYHandler),this._setClickXYHandler=null,this._delegateHandler=null)},setClickXY:function(a){Pages.setXY({x:a.pageX,y:a.pageY})},delegate:function(a){if(!this._disabled){a.stopPropagation(),a.preventDefault();var b=a.currentTarget;this.setClickXY(a),_Fresco.show(b)}},show:function(object){if(this._disabled)return void this.showFallback.apply(_Fresco,_slice.call(arguments));var options=arguments[1]||{},position=arguments[2];arguments[1]&&"number"==$.type(arguments[1])&&(position=arguments[1],options={});var views=[],object_type,isElement=_.isElement(object);switch(object_type=$.type(object)){case"string":case"object":var view=new View(object,options),_dgo="data-fresco-group-options";if(view.group){if(isElement){var elements=$('.fresco[data-fresco-group="'+$(object).data("fresco-group")+'"]'),groupOptions={};elements.filter("["+_dgo+"]").each(function(i,element){$.extend(groupOptions,eval("({"+($(element).attr(_dgo)||"")+"})"))}),elements.each(function(a,b){position||b!=object||(position=a+1),views.push(new View(b,$.extend({},groupOptions,options)))})}}else{var groupOptions={};isElement&&$(object).is("["+_dgo+"]")&&($.extend(groupOptions,eval("({"+($(object).attr(_dgo)||"")+"})")),view=new View(object,$.extend({},groupOptions,options))),views.push(view)}break;case"array":$.each(object,function(a,b){var c=new View(b,options);views.push(c)})}var groupExtend={grouped:{caption:!1}},firstUI=views[0].options.ui;$.each(views,function(a,b){b.caption&&(groupExtend.grouped.caption=!0),a>0&&b.options.ui!=firstUI&&(b.options.ui=firstUI)}),$.each(views,function(a,b){b=$.extend(b,groupExtend)}),(!position||1>position)&&(position=1),position>views.length&&(position=views.length);var positionInAPG;isElement&&(positionInAPG=Pages.getPositionInActivePageGroup(object))?Window.setPosition(positionInAPG):Window.load(views,position)},showFallback:function(){function a(b){var c,d=$.type(b);if("string"==d)c=b;else if("array"==d&&b[0])c=a(b[0]);else if(_.isElement(b)&&$(b).attr("href"))var c=$(b).attr("href");else c=b.url?b.url:!1;return c}return function(b){if(this._fallback){var c=a(b);c&&(window.location.href=c)}}}()};$.extend(Fresco,{show:function(a){return _Fresco.show.apply(_Fresco,_slice.call(arguments)),this},hide:function(){return Window.hide(),this},disable:function(){return _Fresco.stopDelegating(),_Fresco._disabled=!0,this},enable:function(){return _Fresco._disabled=!1,_Fresco.startDelegating(),this},fallback:function(a){return _Fresco._fallback=a,this},setDefaultSkin:function(a){return Options.defaults.skin=a,this}}),(Browser.IE&&Browser.IE<7||"number"==$.type(Browser.Android)&&Browser.Android<3||Browser.MobileSafari&&"number"==$.type(Browser.WebKit)&&Browser.WebKit<533.18)&&(_Fresco.show=_Fresco.showFallback);var Thumbnails={initialize:function(a){this.element=a,this._thumbnails=[],this._orientation="vertical",this._vars={thumbnail:{},thumbnailFrame:{},thumbnails:{}},this.build(),this.startObserving()},build:function(){this.element.append(this.wrapper=$("<div>").addClass("fr-thumbnails-wrapper").append(this._slider=$("<div>").addClass("fr-thumbnails-slider").append(this._previous=$("<div>").addClass("fr-thumbnails-side fr-thumbnails-side-previous").append(this._previous_button=$("<div>").addClass("fr-thumbnails-side-button").append($("<div>").addClass("fr-thumbnails-side-button-background")).append($("<div>").addClass("fr-thumbnails-side-button-icon")))).append(this._thumbs=$("<div>").addClass("fr-thumbnails-thumbs").append(this._slide=$("<div>").addClass("fr-thumbnails-slide"))).append(this._next=$("<div>").addClass("fr-thumbnails-side fr-thumbnails-side-next").append(this._next_button=$("<div>").addClass("fr-thumbnails-side-button").append($("<div>").addClass("fr-thumbnails-side-button-background")).append($("<div>").addClass("fr-thumbnails-side-button-icon"))))))},startObserving:function(){this._slider.delegate(".fr-thumbnail","click",$.proxy(function(a){a.stopPropagation();var b=$(a.target).closest(".fr-thumbnail")[0],c=b&&$(b).data("fr-position");c&&(this.setActive(c),Window.setPosition(c))},this)),this._slider.bind("click",function(a){a.stopPropagation()}),this._previous.bind("click",$.proxy(this.previousPage,this)),this._next.bind("click",$.proxy(this.nextPage,this))},load:function(a){this.clear();var b="horizontal",c=!1;$.each(a,$.proxy(function(a,d){"vertical"==d.options.thumbnails&&(b="vertical"),d.options.thumbnails||(c=!0)},this)),this.setOrientation(b),this._disabledGroup=c,$.each(a,$.proxy(function(a,b){this._thumbnails.push(new Thumbnail(b,a+1))},this)),this.fitToViewport()},clear:function(){$.each(this._thumbnails,function(a,b){b.remove()}),this._thumbnails=[],this._position=-1,this._page=-1},setOrientation:function(a){this._orientation&&Window.element.removeClass("fr-thumbnails-"+this._orientation),Window.element.addClass("fr-thumbnails-"+a),this._orientation=a},disable:function(){Window.element.removeClass("fr-thumbnails-enabled").addClass("fr-thumbnails-disabled"),this._disabled=!0},enable:function(){Window.element.removeClass("fr-thumbnails-disabled").addClass("fr-thumbnails-enabled"),this._disabled=!1},enabled:function(){return!this._disabled},disabled:function(){return this._disabled},updateVars:function(){var a=Window.element,b=this._vars,c=this._orientation,d="horizontal"==c,e=d?"top":"left",f=d?"left":"top",g=d?"bottom":"left",h=d?"top":"right",i=d?"width":"height",j=d?"height":"width",k={left:"right",right:"left",top:"bottom",bottom:"top"};this.element.removeClass("fr-thumbnails-measured");var l=a.is(":visible");if(l||a.show(),this.disabled()&&this.enable(),!this.element.is(":visible")||this._thumbnails.length<2||this._disabledGroup)return this.disable(),$.extend(this._vars.thumbnails,{width:0,height:0}),l||a.hide(),void this.element.addClass("fr-thumbnails-measured");this.enable();var m=this._previous,n=this._next,o=this._thumbs,p=Bounds.viewport(),q=this.element["inner"+_.String.capitalize(j)](),r=parseInt(this._thumbs.css("padding-"+e))||0,s=Math.max(q-2*r,0),t=parseInt(this._thumbs.css("padding-"+f))||0,u=(parseInt(this.element.css("margin-"+g))||0)+(parseInt(this.element.css("margin-"+h))||0);$.extend(b.thumbnails,{height:q+u,width:p[d?"width":"height"],paddingTop:r}),$.extend(b.thumbnail,{height:s,width:s}),$.extend(b.thumbnailFrame,{width:s+2*t,height:q}),b.sides={previous:{width:n["inner"+_.String.capitalize(i)](),marginLeft:parseInt(m.css("margin-"+f))||0,marginRight:parseInt(m.css("margin-"+k[f]))||0},next:{width:n["inner"+_.String.capitalize(i)](),marginLeft:parseInt(n.css("margin-"+f))||0,marginRight:parseInt(n.css("margin-"+k[f]))||0}};var v=p[i],w=b.thumbnailFrame.width,o=this._thumbnails.length;b.thumbnails.width=v,b.sides.enabled=o*w/v>1;var x=v,y=b.sides,z=y.previous,A=y.next,B=z.marginLeft+z.width+z.marginRight+A.marginLeft+A.width+A.marginRight;b.sides.enabled&&(x-=B),x=Math.floor(x/w)*w;var C=o*w;x>C&&(x=C);var D=x+(b.sides.enabled?B:0);b.ipp=x/w,this._mode="page",b.ipp<=1&&(x=v,D=v,b.sides.enabled=!1,this._mode="center"),b.pages=Math.ceil(o*w/x),b.wrapper={width:D+1,height:q},b.thumbs={width:x,height:q},b.slide={width:o*w+1,height:q},l||a.hide(),this.element.addClass("fr-thumbnails-measured")},hide:function(){this.disable(),this.thumbnails.hide(),this._visible=!1},getDimensions:function(){var a="horizontal"==this._orientation;return{width:a?this._vars.thumbnails.width:this._vars.thumbnails.height,height:a?this._vars.thumbnails.height:this._vars.thumbnails.width}},fitToViewport:function(){if(this.updateVars(),!this.disabled()){var a=$.extend({},this._vars),b="horizontal"==this._orientation;$.each(this._thumbnails,function(a,b){b.resize()}),this._previous[a.sides.enabled?"show":"hide"](),this._next[a.sides.enabled?"show":"hide"](),this._thumbs.css({width:a.thumbs[b?"width":"height"],height:a.thumbs[b?"height":"width"]}),this._slide.css({width:a.slide[b?"width":"height"],height:a.slide[b?"height":"width"]});var c={width:a.wrapper[b?"width":"height"],height:a.wrapper[b?"height":"width"]};c["margin-"+(b?"left":"top")]=Math.round(-.5*a.wrapper.width)+"px",c["margin-"+(b?"top":"left")]=0,this.wrapper.css(c),this._position&&this.moveTo(this._position,!0)}},moveToPage:function(a){if(!(1>a||a>this._vars.pages||a==this._page)){var b=this._vars.ipp*(a-1)+1;this.moveTo(b)}},previousPage:function(){this.moveToPage(this._page-1)},nextPage:function(){this.moveToPage(this._page+1)},show:function(a){var b=this._position<0;1>a&&(a=1);var c=this._thumbnails.length;a>c&&(a=c),this._position=a,this.setActive(a),("page"!=this._mode||this._page!=Math.ceil(a/this._vars.ipp))&&this.moveTo(a,b)},moveTo:function(a,b){if(this.updateVars(),!this.disabled()){var c,d="horizontal"==this._orientation,e=Bounds.viewport()[d?"width":"height"],f=.5*e,g=this._vars.thumbnailFrame.width;if("page"==this._mode){var h=Math.ceil(a/this._vars.ipp);this._page=h,c=-1*(g*(this._page-1)*this._vars.ipp);var i="fr-thumbnails-side-button-disabled";this._previous_button[(2>h?"add":"remove")+"Class"](i),this._next_button[(h>=this._vars.pages?"add":"remove")+"Class"](i)}else c=f+-1*(g*(a-1)+.5*g);var h=Pages.page,j={},k={};j[d?"top":"left"]=0,k[d?"left":"top"]=c+"px",this._slide.stop(!0).css(j).animate(k,b?0:h?h.view.options.effects.thumbnails.slide||0:0,$.proxy(function(){this.loadCurrentPage()},this))}},loadCurrentPage:function(){var a,b;if(this._position&&this._vars.thumbnailFrame.width&&!(this._thumbnails.length<1)){if("page"==this._mode){if(this._page<1)return;a=(this._page-1)*this._vars.ipp+1,b=Math.min(a-1+this._vars.ipp,this._thumbnails.length)}else{var c=("horizontal"==this._orientation,Math.ceil(this._vars.thumbnails.width/this._vars.thumbnailFrame.width));a=Math.max(Math.floor(Math.max(this._position-.5*c,0)),1),b=Math.ceil(Math.min(this._position+.5*c)),this._thumbnails.length<b&&(b=this._thumbnails.length)}for(var d=a;b>=d;d++)this._thumbnails[d-1].load()}},setActive:function(a){this._slide.find(".fr-thumbnail-active").removeClass("fr-thumbnail-active");var b=a&&this._thumbnails[a-1];b&&b.activate()},refresh:function(){this._position&&this.setPosition(this._position)}};$.extend(Thumbnail.prototype,{initialize:function(a,b){this.view=a,this._dimension={},this._position=b,this.preBuild()},preBuild:function(){this.thumbnail=$("<div>").addClass("fr-thumbnail").data("fr-position",this._position)},build:function(){if(!this.thumbnailFrame){var a=this.view.options;Thumbnails._slide.append(this.thumbnailFrame=$("<div>").addClass("fr-thumbnail-frame").append(this.thumbnail.append(this.thumbnailWrapper=$("<div>").addClass("fr-thumbnail-wrapper")))),"image"==this.view.type&&this.thumbnail.addClass("fr-load-thumbnail").data("thumbnail",{view:this.view,src:a.thumbnail||this.view.url});var b=a.thumbnail&&a.thumbnail.icon;b&&this.thumbnail.append($("<div>").addClass("fr-thumbnail-icon fr-thumbnail-icon-"+b));var c;this.thumbnail.append(c=$("<div>").addClass("fr-thumbnail-overlay").append($("<div>").addClass("fr-thumbnail-overlay-background")).append(this.loading=$("<div>").addClass("fr-thumbnail-loading").append($("<div>").addClass("fr-thumbnail-loading-background")).append(this.spinner=$("<div>").addClass("fr-thumbnail-spinner").hide().append($("<div>").addClass("fr-thumbnail-spinner-spin")))).append($("<div>").addClass("fr-thumbnail-overlay-border"))),this.thumbnail.append($("<div>").addClass("fr-thumbnail-state")),this.resize()}},remove:function(){this.thumbnailFrame&&(this.thumbnailFrame.remove(),this.thumbnailFrame=null,this.image=null),this.ready&&(this.ready.abort(),this.ready=null),this.vimeoThumbnail&&(this.vimeoThumbnail.abort(),this.vimeoThumbnail=null),this._loading=!1,this._removed=!0,this.view=null,this._clearDelay()},load:function(){if(!(this._loaded||this._loading||this._removed)){this.thumbnailWrapper||this.build(),this._loading=!0;var a=this.view.options.thumbnail,b=a&&"boolean"==$.type(a)?this.view.url:a||this.view.url;if(this._url=b,b)if("vimeo"==this.view.type)if(b==a)this._url=b,this._load(this._url);else switch(this.view.type){case"vimeo":this.vimeoThumbnail=new VimeoThumbnail(this.view.url,$.proxy(function(a){this._url=a,this._load(a)},this),$.proxy(function(){this._error()},this))}else this._load(this._url)}},activate:function(){this.thumbnail.addClass("fr-thumbnail-active")},_load:function(a){this.thumbnailWrapper.prepend(this.image=$("<img>").addClass("fr-thumbnail-image").attr({src:a}).css({opacity:1e-4})),this.fadeInSpinner(),this.ready=new ImageReady(this.image[0],$.proxy(function(a){var b=a.img;this.thumbnailFrame&&this._loading&&(this._loaded=!0,this._loading=!1,this._dimensions={width:b.naturalWidth,height:b.naturalHeight},this.resize(),this.show())},this),$.proxy(function(){this._error()},this),{method:this.view.options.loadedMethod})},_error:function(){this._loaded=!0,this._loading=!1,this.thumbnail.addClass("fr-thumbnail-error"),this.image.hide(),this.thumbnailWrapper.append($("<div>").addClass("fr-thumbnail-image")),this.show()},fadeInSpinner:function(){if(Spinner.supported&&this.view.options.spinner){this._clearDelay();var a=this.view.options.effects.thumbnail;this._delay=setTimeout($.proxy(function(){this.spinner.stop(!0).fadeTo(a.show||0,1)},this),this.view.options.spinnerDelay||0)}},show:function(){this._clearDelay();var a=this.view.options.effects.thumbnail;this.loading.stop(!0).delay(a.delay).fadeTo(a.show,0)},_clearDelay:function(){this._delay&&(clearTimeout(this._delay),this._delay=null)},resize:function(){if(this.thumbnailFrame){var a="horizontal"==Thumbnails._orientation;if(this.thumbnailFrame.css({width:Thumbnails._vars.thumbnailFrame[a?"width":"height"],height:Thumbnails._vars.thumbnailFrame[a?"height":"width"]}),this.thumbnailFrame.css({top:a?0:Thumbnails._vars.thumbnailFrame.width*(this._position-1),left:a?Thumbnails._vars.thumbnailFrame.width*(this._position-1):0}),this.thumbnailWrapper){var b=Thumbnails._vars.thumbnail;if(this.thumbnail.css({width:b.width,height:b.height,"margin-top":Math.round(-.5*b.height),"margin-left":Math.round(-.5*b.width),"margin-bottom":0,"margin-right":0}),this._dimensions){var c,d={width:b.width,height:b.height},e=Math.max(d.width,d.height),f=$.extend({},this._dimensions);if(f.width>d.width&&f.height>d.height){c=Fit.within(d,f);var g=1,h=1;c.width<d.width&&(g=d.width/c.width),c.height<d.height&&(h=d.height/c.height);var i=Math.max(g,h);i>1&&(c.width*=i,c.height*=i),$.each("width height".split(" "),function(a,b){c[b]=Math.round(c[b])})}else c=Fit.within(this._dimensions,f.width<d.width||f.height<d.height?{width:e,height:e}:d);var j=Math.round(.5*d.width-.5*c.width),k=Math.round(.5*d.height-.5*c.height);this.image.removeAttr("style").css($.extend({},c,{top:k,left:j}))}}}}});var UI={_modes:["fullclick","outside","inside"],_ui:!1,_validClickTargetSelector:[".fr-content-element",".fr-content",".fr-content > .fr-stroke",".fr-content > .fr-stroke .fr-stroke-color"].join(", "),initialize:function(a){$.each(this._modes,$.proxy(function(a,b){this[b].initialize()},this)),Window.element.addClass("fr-ui-inside-hidden fr-ui-fullclick-hidden")},set:function(a){this._ui&&(Window.element.removeClass("fr-window-ui-"+this._ui),Overlay.element.removeClass("fr-overlay-ui-"+this._ui)),Window.element.addClass("fr-window-ui-"+a),Overlay.element.addClass("fr-overlay-ui-"+a),this._enabled&&this._ui&&this._ui!=a&&(this[this._ui].disable(),this[a].enable(),UI[a].show()),this._ui=a},_onWindowResize:function(){Support.mobileTouch&&this.show()},enable:function(){$.each(this._modes,$.proxy(function(a,b){UI[b][b==this._ui?"enable":"disable"]()},this)),this._enabled=!0},disable:function(){$.each(this._modes,$.proxy(function(a,b){UI[b].disable()},this)),this._enabled=!1},adjustPrevNext:function(a,b){UI[this._ui].adjustPrevNext(a,b)},show:function(a,b){UI[this._ui].show(a,b)},hide:function(a,b){UI[this._ui].hide(a,b)},reset:function(){$.each(this._modes,$.proxy(function(a,b){UI[b].reset()},this))},update:function(){var a=Pages.page;a&&this.set(a._ui)}};return UI.fullclick={initialize:function(){this.build(),this._scrollLeft=-1},build:function(){Window._box.append(this._previous=$("<div>").addClass("fr-side fr-side-previous fr-side-previous-fullclick fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._next=$("<div>").addClass("fr-side fr-side-next fr-side-next-fullclick fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._close=$("<div>").addClass("fr-close fr-close-fullclick").append($("<div>").addClass("fr-close-background")).append($("<div>").addClass("fr-close-icon"))),Browser.IE&&Browser.IE<=7&&this._previous.add(this._next).add(this._close).hide(),this._close.on("click",$.proxy(function(a){a.preventDefault(),Window.hide()},this)),this._previous.on("click",$.proxy(function(a){Window.previous(),this._onMouseMove(a)},this)),this._next.on("click",$.proxy(function(a){Window.next(),this._onMouseMove(a)},this))},enable:function(){this.bind()},disable:function(){this.unbind()},reset:function(){Window.timers.clear("ui-fullclick"),this._x=-1,this._y=-1,this._scrollLeft=-1,this.resetPrevNext(),this._onMouseLeave()},resetPrevNext:function(){var a=this._previous.add(this._next);a.stop(!0).removeAttr("style")},bind:function(){this._onMouseUpHandler||(this.unbind(),Window._pages.on("mouseup",".fr-container",this._onMouseUpHandler=$.proxy(this._onMouseUp,this)),Support.mobileTouch||(Window.element.on("mouseenter",this._showHandler=$.proxy(this.show,this)).on("mouseleave",this._hideHandler=$.proxy(this.hide,this)),Window.element.on("mousemove",this._mousemoveHandler=$.proxy(function(a){var b=a.pageX,c=a.pageY;this._hoveringSideButton||c==this._y&&b==this._x||(this._x=b,this._y=c,this.show(),this.startTimer())},this)),Window._pages.on("mousemove",".fr-container",this._onMouseMoveHandler=$.proxy(this._onMouseMove,this)).on("mouseleave",".fr-container",this._onMouseLeaveHandler=$.proxy(this._onMouseLeave,this)).on("mouseenter",".fr-container",this._onMouseEnterHandler=$.proxy(this._onMouseEnter,this)),Window.element.on("mouseenter",".fr-side",this._onSideMouseEnterHandler=$.proxy(this._onSideMouseEnter,this)).on("mouseleave",".fr-side",this._onSideMouseLeaveHandler=$.proxy(this._onSideMouseLeave,this)),$(window).on("scroll",this._onScrollHandler=$.proxy(this._onScroll,this))))},unbind:function(){this._onMouseUpHandler&&(Window._pages.off("mouseup",".fr-container",this._onMouseUpHandler),this._onMouseUpHandler=null,this._showHandler&&(Window.element.off("mouseenter",this._showHandler).off("mouseleave",this._hideHandler).off("mousemove",this._mousemoveHandler),Window._pages.off("mousemove",".fr-container",this._onMouseMoveHandler).off("mouseleave",".fr-container",this._onMouseLeaveHandler).off("mouseenter",".fr-container",this._onMouseEnterHandler),Window.element.off("mouseenter",".fr-side",this._onSideMouseEnterHandler).off("mouseleave",".fr-side",this._onSideMouseLeaveHandler),$(window).off("scroll",this._onScrollHandler),this._showHandler=null))},adjustPrevNext:function(a,b){var c=Pages.page;if(!c)return void(a&&a());var d=Window.element.is(":visible");d||Window.element.show();var e=this._previous.attr("style");this._previous.removeAttr("style");var f=parseInt(this._previous.css("margin-top"));this._previous.attr({style:e}),d||Window.element.hide();var g=c._infoHeight||0,h=this._previous.add(this._next),i={"margin-top":f-.5*g},j="number"==$.type(b)?b:Pages.page&&Pages.page.view.options.effects.content.show||0;this.opening&&(j=0),h.stop(!0).animate(i,j,a),this._previous[(Window.mayPrevious()?"remove":"add")+"Class"]("fr-side-disabled"),this._next[(Window.mayNext()?"remove":"add")+"Class"]("fr-side-disabled"),h[(c._total<2?"add":"remove")+"Class"]("fr-side-hidden"),a&&a()},_onScroll:function(){this._scrollLeft=$(window).scrollLeft()},_onMouseMove:function(a){if(!Support.mobileTouch){var b=this._getEventSide(a),c=_.String.capitalize(b),d=b?Window["may"+c]():!1;if(b!=this._hoveringSide||d!=this._mayClickHoveringSide)switch(this._hoveringSide=b,this._mayClickHoveringSide=d,Window._box[(d?"add":"remove")+"Class"]("fr-hovering-clickable"),b){case"previous":Window._box.addClass("fr-hovering-previous").removeClass("fr-hovering-next");break;case"next":Window._box.addClass("fr-hovering-next").removeClass("fr-hovering-previous")}}},_onMouseLeave:function(a){Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next"),this._hoveringSide=!1},_onMouseUp:function(a){if(!(a.which>1)){if(1==Pages.pages.length)return void Window.hide();var b=this._getEventSide(a);Window[b](),this._onMouseMove(a)}},_onMouseEnter:function(a){this._onMouseMove(a)},_getEventSide:function(a){var b=(this._scrollLeft>-1?this._scrollLeft:this._scrollLeft=$(window).scrollLeft(),a.pageX-Window._boxPosition.left-this._scrollLeft),c=Window._boxDimensions.width;return.5*c>b?"previous":"next"},_onSideMouseEnter:function(a){this._hoveringSideButton=!0,this._hoveringSide=this._getEventSide(a),this._mayClickHoveringSide=Window["may"+_.String.capitalize(this._hoveringSide)](),this.clearTimer()},_onSideMouseLeave:function(a){this._hoveringSideButton=!1,this._hoveringSide=!1,this._mayClickHoveringSide=!1,this.startTimer()},show:function(a){return this._visible?(this.startTimer(),void("function"==$.type(a)&&a())):(this._visible=!0,this.startTimer(),Window.element.addClass("fr-visible-fullclick-ui").removeClass("fr-hidden-fullclick-ui"),Browser.IE&&Browser.IE<=7&&this._previous.add(this._next).add(this._close).show(),void("function"==$.type(a)&&a()))},hide:function(a){var b=Pages.page&&Pages.page.view.type;return!this._visible||b&&("youtube"==b||"vimeo"==b)?void("function"==$.type(a)&&a()):(this._visible=!1,Window.element.removeClass("fr-visible-fullclick-ui").addClass("fr-hidden-fullclick-ui"),void("function"==$.type(a)&&a()))},clearTimer:function(){Support.mobileTouch||Window.timers.clear("ui-fullclick")},startTimer:function(){Support.mobileTouch||(this.clearTimer(),Window.timers.set("ui-fullclick",$.proxy(function(){this.hide()},this),Window.view?Window.view.options.uiDelay:0))}},UI.inside={initialize:function(){},enable:function(){this.bind()},disable:function(){this.unbind()},bind:function(){this._onMouseUpHandler||(this.unbind(),Window._pages.on("mouseup",".fr-content",this._onMouseUpHandler=$.proxy(this._onMouseUp,this)),Window._pages.on("click",".fr-content .fr-close",$.proxy(function(a){a.preventDefault(),Window.hide()},this)).on("click",".fr-content .fr-side-previous",$.proxy(function(a){Window.previous(),this._onMouseMove(a)},this)).on("click",".fr-content .fr-side-next",$.proxy(function(a){Window.next(),this._onMouseMove(a)},this)),Window.element.on("click",".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper",this._delegateOverlayCloseHandler=$.proxy(this._delegateOverlayClose,this)),Support.mobileTouch||(Window.element.on("mouseenter",".fr-content",this._showHandler=$.proxy(this.show,this)).on("mouseleave",".fr-content",this._hideHandler=$.proxy(this.hide,this)),Window.element.on("mousemove",".fr-content",this._mousemoveHandler=$.proxy(function(a){var b=a.pageX,c=a.pageY;this._hoveringSideButton||c==this._y&&b==this._x||(this._x=b,this._y=c,this.show(),this.startTimer())},this)),Window._pages.on("mousemove",".fr-info, .fr-close",$.proxy(function(a){a.stopPropagation(),this._onMouseLeave(a)},this)),Window._pages.on("mousemove",".fr-info",$.proxy(function(a){this.clearTimer()},this)),Window._pages.on("mousemove",".fr-content",this._onMouseMoveHandler=$.proxy(this._onMouseMove,this)).on("mouseleave",".fr-content",this._onMouseLeaveHandler=$.proxy(this._onMouseLeave,this)).on("mouseenter",".fr-content",this._onMouseEnterHandler=$.proxy(this._onMouseEnter,this)),Window.element.on("mouseenter",".fr-side",this._onSideMouseEnterHandler=$.proxy(this._onSideMouseEnter,this)).on("mouseleave",".fr-side",this._onSideMouseLeaveHandler=$.proxy(this._onSideMouseLeave,this)),$(window).on("scroll",this._onScrollHandler=$.proxy(this._onScroll,this))))},unbind:function(){this._onMouseUpHandler&&(Window._pages.off("mouseup",".fr-content",this._onMouseUpHandler),this._onMouseUpHandler=null,Window._pages.off("click",".fr-content .fr-close").off("click",".fr-content .fr-side-previous").off("click",".fr-content .fr-side-next"),Window.element.off("click",".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper",this._delegateOverlayCloseHandler),this._showHandler&&(Window.element.off("mouseenter",".fr-content",this._showHandler).off("mouseleave",".fr-content",this._hideHandler).off("mousemove",".fr-content",this._mousemoveHandler),Window._pages.off("mousemove",".fr-info, .fr-close"),Window._pages.off("mousemove",".fr-info"),Window._pages.off("mousemove",".fr-content-element",this._onMouseMoveHandler).off("mouseleave",".fr-content",this._onMouseLeaveHandler).off("mouseenter",".fr-content",this._onMouseEnterHandler),Window.element.off("mouseenter",".fr-side",this._onSideMouseEnterHandler).off("mouseleave",".fr-side",this._onSideMouseLeaveHandler),$(window).off("scroll",this._onScrollHandler),this._showHandler=null))},reset:function(){Window.timers.clear("ui-fullclick"),this._x=-1,this._y=-1,this._scrollLeft=-1,this._hoveringSide=!1,this._onMouseLeave()},adjustPrevNext:function(a){a&&a()},_onScroll:function(){this._scrollLeft=$(window).scrollLeft()},_delegateOverlayClose:function(a){var b=Pages.page;b&&b.view.options.overlay&&!b.view.options.overlay.close||$(a.target).is(".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper")&&(a.preventDefault(),a.stopPropagation(),Window.hide())},_onMouseMove:function(a){if(!Support.mobileTouch){var b=this._getEventSide(a),c=_.String.capitalize(b),d=b?Window["may"+c]():!1;if((1==Pages.pages.length||Pages.page&&"close"==Pages.page.view.options.onClick)&&(b=!1),b!=this._hoveringSide||d!=this._mayClickHoveringSide)if(this._hoveringSide=b,this._mayClickHoveringSide=d,b)switch(Window._box[(d?"add":"remove")+"Class"]("fr-hovering-clickable"),b){case"previous":Window._box.addClass("fr-hovering-previous").removeClass("fr-hovering-next");break;case"next":Window._box.addClass("fr-hovering-next").removeClass("fr-hovering-previous")}else Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next")}},_onMouseLeave:function(a){Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next"),this._hoveringSide=!1},_onMouseUp:function(a){if(!(a.which>1)&&$(a.target).is(UI._validClickTargetSelector)){if(1==Pages.pages.length||Pages.page&&"close"==Pages.page.view.options.onClick)return void Window.hide();var b=this._getEventSide(a);Window[b](),this._onMouseMove(a)}},_onMouseEnter:function(a){this._onMouseMove(a)},_getEventSide:function(a){var b=(this._scrollLeft>-1?this._scrollLeft:this._scrollLeft=$(window).scrollLeft(),a.pageX-Window._boxPosition.left-this._scrollLeft),c=Window._boxDimensions.width;return.5*c>b?"previous":"next"},_onSideMouseEnter:function(a){this._hoveringSideButton=!0,this._hoveringSide=this._getEventSide(a),this._mayClickHoveringSide=Window["may"+_.String.capitalize(this._hoveringSide)](),this.clearTimer()},_onSideMouseLeave:function(a){this._hoveringSideButton=!1,this._hoveringSide=!1,this._mayClickHoveringSide=!1,this.startTimer()},show:function(a){return this._visible?(this.startTimer(),void("function"==$.type(a)&&a())):(this._visible=!0,this.startTimer(),Window.element.addClass("fr-visible-inside-ui").removeClass("fr-hidden-inside-ui"),void("function"==$.type(a)&&a()))},hide:function(a){return this._visible?(this._visible=!1,Window.element.removeClass("fr-visible-inside-ui").addClass("fr-hidden-inside-ui"),void("function"==$.type(a)&&a())):void("function"==$.type(a)&&a())},clearTimer:function(){Support.mobileTouch||Window.timers.clear("ui-inside")},startTimer:function(){Support.mobileTouch||(this.clearTimer(),Window.timers.set("ui-inside",$.proxy(function(){this.hide()},this),Window.view?Window.view.options.uiDelay:0))}},UI.outside={initialize:function(){this.build(),this._scrollLeft=-1},build:function(){Window._box.append(this._previous=$("<div>").addClass("fr-side fr-side-previous fr-side-previous-outside").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._next=$("<div>").addClass("fr-side fr-side-next fr-side-next-outside").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._close=$("<div>").addClass("fr-close fr-close-outside").append($("<div>").addClass("fr-close-background")).append($("<div>").addClass("fr-close-icon"))),Browser.IE&&Browser.IE<=7&&this._previous.add(this._next).add(this._close).hide(),this._close.on("click",$.proxy(function(a){a.preventDefault(),Window.hide()},this)),this._previous.on("click",$.proxy(function(a){Window.previous(),this._onMouseMove(a)},this)),this._next.on("click",$.proxy(function(a){Window.next(),this._onMouseMove(a)},this))},enable:function(){this.bind()},disable:function(){this.unbind()},reset:function(){Window.timers.clear("ui-outside"),this._x=-1,this._y=-1,this._scrollLeft=-1,this._onMouseLeave()},bind:function(){this._onMouseUpHandler||(this.unbind(),Window.element.on("mouseup",".fr-content",this._onMouseUpHandler=$.proxy(this._onMouseUp,this)),Window.element.on("click",".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper",this._delegateOverlayCloseHandler=$.proxy(this._delegateOverlayClose,this)),Support.mobileTouch||(Window._pages.on("mousemove",".fr-content",this._onMouseMoveHandler=$.proxy(this._onMouseMove,this)).on("mouseleave",".fr-content",this._onMouseLeaveHandler=$.proxy(this._onMouseLeave,this)).on("mouseenter",".fr-content",this._onMouseEnterHandler=$.proxy(this._onMouseEnter,this)),Window.element.on("mouseenter",".fr-side",this._onSideMouseEnterHandler=$.proxy(this._onSideMouseEnter,this)).on("mouseleave",".fr-side",this._onSideMouseLeaveHandler=$.proxy(this._onSideMouseLeave,this)),$(window).on("scroll",this._onScrollHandler=$.proxy(this._onScroll,this))))},unbind:function(){this._onMouseUpHandler&&(Window.element.off("mouseup",".fr-content",this._onMouseUpHandler),this._onMouseUpHandler=null,Window.element.off("click",".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper",this._delegateOverlayCloseHandler),this._onMouseMoveHandler&&(Window._pages.off("mousemove",".fr-content",this._onMouseMoveHandler).off("mouseleave",".fr-content",this._onMouseLeaveHandler).off("mouseenter",".fr-content",this._onMouseEnterHandler),Window.element.off("mouseenter",".fr-side",this._onSideMouseEnterHandler).off("mouseleave",".fr-side",this._onSideMouseLeaveHandler),$(window).off("scroll",this._onScrollHandler),this._onMouseMoveHandler=null))},adjustPrevNext:function(a,b){var c=Pages.page;if(!c)return void(a&&a());var d=this._previous.add(this._next);this._previous[(Window.mayPrevious()?"remove":"add")+"Class"]("fr-side-disabled"),this._next[(Window.mayNext()?"remove":"add")+"Class"]("fr-side-disabled"),d[(c._total<2?"add":"remove")+"Class"]("fr-side-hidden"),a&&a()},_onScroll:function(){this._scrollLeft=$(window).scrollLeft()},_delegateOverlayClose:function(a){var b=Pages.page;b&&b.view.options.overlay&&!b.view.options.overlay.close||$(a.target).is(".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper")&&(a.preventDefault(),a.stopPropagation(),Window.hide())},_onMouseMove:function(a){if(!Support.mobileTouch){var b=this._getEventSide(a),c=_.String.capitalize(b),d=b?Window["may"+c]():!1;if((1==Pages.pages.length||Pages.page&&"close"==Pages.page.view.options.onClick)&&(b=!1),b!=this._hoveringSide||d!=this._mayClickHoveringSide)if(this._hoveringSide=b,this._mayClickHoveringSide=d,b)switch(Window._box[(d?"add":"remove")+"Class"]("fr-hovering-clickable"),b){case"previous":Window._box.addClass("fr-hovering-previous").removeClass("fr-hovering-next");break;case"next":Window._box.addClass("fr-hovering-next").removeClass("fr-hovering-previous")}else Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next")}},_onMouseLeave:function(a){Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next"),this._hoveringSide=!1},_onMouseUp:function(a){if(!(a.which>1)&&$(a.target).is(UI._validClickTargetSelector)){if(1==Pages.pages.length||Pages.page&&"close"==Pages.page.view.options.onClick)return void Window.hide();var b=this._getEventSide(a);Window[b](),this._onMouseMove(a)}},_onMouseEnter:function(a){this._onMouseMove(a)},_getEventSide:function(a){var b=(this._scrollLeft>-1?this._scrollLeft:this._scrollLeft=$(window).scrollLeft(),a.pageX-Window._boxPosition.left-this._scrollLeft),c=Window._boxDimensions.width;return.5*c>b?"previous":"next"},show:function(){Browser.IE&&Browser.IE<=7&&this._previous.add(this._next).add(this._close).show()},hide:function(){},_onSideMouseEnter:function(a){this._hoveringSideButton=!0,this._hoveringSide=this._getEventSide(a),this._mayClickHoveringSide=Window["may"+_.String.capitalize(this._hoveringSide)]()},_onSideMouseLeave:function(a){this._hoveringSideButton=!1,this._hoveringSide=!1,this._mayClickHoveringSide=!1},clearTimer:function(){}},$(document).ready(function(a){_Fresco.initialize()}),Fresco});
// Sticky Plugin v1.0.3 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        //update height in case of dynamic content
        s.stickyWrapper.css('height', s.stickyElement.outerHeight());

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop !== newTop) {
            var newWidth;
            if (s.getWidthFrom) {
                newWidth = $(s.getWidthFrom).width() || null;
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth == null) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }

          // Check if sticky has reached end of container and stop sticking
          var stickyWrapperContainer = s.stickyWrapper.parent();
          var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

          if( unstick ) {
            s.stickyElement
              .css('position', 'absolute')
              .css('top', '')
              .css('bottom', 0);
          } else {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop)
              .css('bottom', '');
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i];
        var newWidth = null;
        if (s.getWidthFrom) {
            if (s.responsiveWidth) {
                newWidth = $(s.getWidthFrom).width();
            }
        } else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if (newWidth != null) {
            s.stickyElement.css('width', newWidth);
        }
      }
    },
    methods = {
      init: function(options) {
        var o = $.extend({}, defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(wrapper);

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") === "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);

          methods.setWrapperHeight(this);
          methods.setupChangeListeners(this);
        });
      },

      setWrapperHeight: function(stickyElement) {
        var element = $(stickyElement);
        var stickyWrapper = element.parent();
        if (stickyWrapper) {
          stickyWrapper.css('height', element.outerHeight());
        }
      },

      setupChangeListeners: function(stickyElement) {
        if (window.MutationObserver) {
          var mutationObserver = new window.MutationObserver(function(mutations) {
            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
              methods.setWrapperHeight(stickyElement);
            }
          });
          mutationObserver.observe(stickyElement, {subtree: true, childList: true});
        } else {
          stickyElement.addEventListener('DOMNodeInserted', function() {
            methods.setWrapperHeight(stickyElement);
          }, false);
          stickyElement.addEventListener('DOMNodeRemoved', function() {
            methods.setWrapperHeight(stickyElement);
          }, false);
        }
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while (i-- > 0) {
            if (sticked[i].stickyElement.get(0) === that) {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx !== -1) {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': ''
              })
            ;
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
}));

(function ($, undefined) {
    'use strict';
    var defaults = {
        item: 3,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 10,
        addClass: '',
        mode: 'slide',
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',
        easing: 'linear', //'for jquery animation',//
        speed: 400, //ms'
        auto: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
        rtl: false,
        adaptiveHeight: false,
        vertical: false,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,
        responsive: [],
        /* jshint ignore:start */
        onBeforeStart: function ($el) {},
        onSliderLoad: function ($el) {},
        onBeforeSlide: function ($el, scene) {},
        onAfterSlide: function ($el, scene) {},
        onBeforeNextSlide: function ($el, scene) {},
        onBeforePrevSlide: function ($el, scene) {}
        /* jshint ignore:end */
    };
    $.fn.lightSlider = function (options) {
        if (this.length === 0) {
            return this;
        }

        if (this.length > 1) {
            this.each(function () {
                $(this).lightSlider(options);
            });
            return this;
        }

        var plugin = {},
            settings = $.extend(true, {}, defaults, options),
            settingsTemp = {},
            $el = this;
        plugin.$el = this;

        if (settings.mode === 'fade') {
            settings.vertical = false;
        }
        var $children = $el.children(),
            windowW = $(window).width(),
            breakpoint = null,
            resposiveObj = null,
            length = 0,
            w = 0,
            on = false,
            elSize = 0,
            $slide = '',
            scene = 0,
            property = (settings.vertical === true) ? 'height' : 'width',
            gutter = (settings.vertical === true) ? 'margin-bottom' : 'margin-right',
            slideValue = 0,
            pagerWidth = 0,
            slideWidth = 0,
            thumbWidth = 0,
            interval = null,
            isTouch = ('ontouchstart' in document.documentElement);
        var refresh = {};

        refresh.chbreakpoint = function () {
            windowW = $(window).width();
            if (settings.responsive.length) {
                var item;
                if (settings.autoWidth === false) {
                    item = settings.item;
                }
                if (windowW < settings.responsive[0].breakpoint) {
                    for (var i = 0; i < settings.responsive.length; i++) {
                        if (windowW < settings.responsive[i].breakpoint) {
                            breakpoint = settings.responsive[i].breakpoint;
                            resposiveObj = settings.responsive[i];
                        }
                    }
                }
                if (typeof resposiveObj !== 'undefined' && resposiveObj !== null) {
                    for (var j in resposiveObj.settings) {
                        if (resposiveObj.settings.hasOwnProperty(j)) {
                            if (typeof settingsTemp[j] === 'undefined' || settingsTemp[j] === null) {
                                settingsTemp[j] = settings[j];
                            }
                            settings[j] = resposiveObj.settings[j];
                        }
                    }
                }
                if (!$.isEmptyObject(settingsTemp) && windowW > settings.responsive[0].breakpoint) {
                    for (var k in settingsTemp) {
                        if (settingsTemp.hasOwnProperty(k)) {
                            settings[k] = settingsTemp[k];
                        }
                    }
                }
                if (settings.autoWidth === false) {
                    if (slideValue > 0 && slideWidth > 0) {
                        if (item !== settings.item) {
                            scene = Math.round(slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove));
                        }
                    }
                }
            }
        };

        refresh.calSW = function () {
            if (settings.autoWidth === false) {
                slideWidth = (elSize - ((settings.item * (settings.slideMargin)) - settings.slideMargin)) / settings.item;
            }
        };

        refresh.calWidth = function (cln) {
            var ln = cln === true ? $slide.find('.lslide').length : $children.length;
            if (settings.autoWidth === false) {
                w = ln * (slideWidth + settings.slideMargin);
            } else {
                w = 0;
                for (var i = 0; i < ln; i++) {
                    w += (parseInt($children.eq(i).width()) + settings.slideMargin);
                }
            }
            return w;
        };
        plugin = {
            doCss: function () {
                var support = function () {
                    var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
                    var root = document.documentElement;
                    for (var i = 0; i < transition.length; i++) {
                        if (transition[i] in root.style) {
                            return true;
                        }
                    }
                };
                if (settings.useCSS && support()) {
                    return true;
                }
                return false;
            },
            keyPress: function () {
                if (settings.keyPress) {
                    $(document).on('keyup.lightslider', function (e) {
                        if (!$(':focus').is('input, textarea')) {
                            if (e.preventDefault) {
                                e.preventDefault();
                            } else {
                                e.returnValue = false;
                            }
                            if (e.keyCode === 37) {
                                $el.goToPrevSlide();
                                clearInterval(interval);
                            } else if (e.keyCode === 39) {
                                $el.goToNextSlide();
                                clearInterval(interval);
                            }
                        }
                    });
                }
            },
            controls: function () {
                if (settings.controls) {
                    $el.after('<div class="lSAction"><a class="lSPrev">' + settings.prevHtml + '</a><a class="lSNext">' + settings.nextHtml + '</a></div>');
                    if (!settings.autoWidth) {
                        if (length <= settings.item) {
                            $slide.find('.lSAction').hide();
                        }
                    } else {
                        if (refresh.calWidth(false) < elSize) {
                            $slide.find('.lSAction').hide();
                        }
                    }
                    $slide.find('.lSAction a').on('click', function (e) {
                        if (e.preventDefault) {
                            e.preventDefault();
                        } else {
                            e.returnValue = false;
                        }
                        if ($(this).attr('class') === 'lSPrev') {
                            $el.goToPrevSlide();
                        } else {
                            $el.goToNextSlide();
                        }
                        clearInterval(interval);
                        return false;
                    });
                }
            },
            initialStyle: function () {
                var $this = this;
                if (settings.mode === 'fade') {
                    settings.autoWidth = false;
                    settings.slideEndAnimation = false;
                }
                if (settings.auto) {
                    settings.slideEndAnimation = false;
                }
                if (settings.autoWidth) {
                    settings.slideMove = 1;
                    settings.item = 1;
                }
                if (settings.loop) {
                    settings.slideMove = 1;
                    settings.freeMove = false;
                }
                settings.onBeforeStart.call(this, $el);
                refresh.chbreakpoint();
                $el.addClass('lightSlider').wrap('<div class="lSSlideOuter ' + settings.addClass + '"><div class="lSSlideWrapper"></div></div>');
                $slide = $el.parent('.lSSlideWrapper');
                if (settings.rtl === true) {
                    $slide.parent().addClass('lSrtl');
                }
                if (settings.vertical) {
                    $slide.parent().addClass('vertical');
                    elSize = settings.verticalHeight;
                    $slide.css('height', elSize + 'px');
                } else {
                    elSize = $el.outerWidth();
                }
                $children.addClass('lslide');
                if (settings.loop === true && settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.clone = function () {
                        if (refresh.calWidth(true) > elSize) {
                            /**/
                            var tWr = 0,
                                tI = 0;
                            for (var k = 0; k < $children.length; k++) {
                                tWr += (parseInt($el.find('.lslide').eq(k).width()) + settings.slideMargin);
                                tI++;
                                if (tWr >= (elSize + settings.slideMargin)) {
                                    break;
                                }
                            }
                            var tItem = settings.autoWidth === true ? tI : settings.item;

                            /**/
                            if (tItem < $el.find('.clone.left').length) {
                                for (var i = 0; i < $el.find('.clone.left').length - tItem; i++) {
                                    $children.eq(i).remove();
                                }
                            }
                            if (tItem < $el.find('.clone.right').length) {
                                for (var j = $children.length - 1; j > ($children.length - 1 - $el.find('.clone.right').length); j--) {
                                    scene--;
                                    $children.eq(j).remove();
                                }
                            }
                            /**/
                            for (var n = $el.find('.clone.right').length; n < tItem; n++) {
                                $el.find('.lslide').eq(n).clone().removeClass('lslide').addClass('clone right').appendTo($el);
                                scene++;
                            }
                            for (var m = $el.find('.lslide').length - $el.find('.clone.left').length; m > ($el.find('.lslide').length - tItem); m--) {
                                $el.find('.lslide').eq(m - 1).clone().removeClass('lslide').addClass('clone left').prependTo($el);
                            }
                            $children = $el.children();
                        } else {
                            if ($children.hasClass('clone')) {
                                $el.find('.clone').remove();
                                $this.move($el, 0);
                            }
                        }
                    };
                    refresh.clone();
                }
                refresh.sSW = function () {
                    length = $children.length;
                    if (settings.rtl === true && settings.vertical === false) {
                        gutter = 'margin-left';
                    }
                    if (settings.autoWidth === false) {
                        $children.css(property, slideWidth + 'px');
                    }
                    $children.css(gutter, settings.slideMargin + 'px');
                    w = refresh.calWidth(false);
                    $el.css(property, w + 'px');
                    if (settings.loop === true && settings.mode === 'slide') {
                        if (on === false) {
                            scene = $el.find('.clone.left').length;
                        }
                    }
                };
                refresh.calL = function () {
                    $children = $el.children();
                    length = $children.length;
                };
                if (this.doCss()) {
                    $slide.addClass('usingCss');
                }
                refresh.calL();
                if (settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.sSW();
                    if (settings.loop === true) {
                        slideValue = $this.slideValue();
                        this.move($el, slideValue);
                    }
                    if (settings.vertical === false) {
                        this.setHeight($el, false);
                    }

                } else {
                    this.setHeight($el, true);
                    $el.addClass('lSFade');
                    if (!this.doCss()) {
                        $children.fadeOut(0);
                        $children.eq(scene).fadeIn(0);
                    }
                }
                if (settings.loop === true && settings.mode === 'slide') {
                    $children.eq(scene).addClass('active');
                } else {
                    $children.first().addClass('active');
                }
            },
            pager: function () {
                var $this = this;
                refresh.createPager = function () {
                    thumbWidth = (elSize - ((settings.thumbItem * (settings.thumbMargin)) - settings.thumbMargin)) / settings.thumbItem;
                    var $children = $slide.find('.lslide');
                    var length = $slide.find('.lslide').length;
                    var i = 0,
                        pagers = '',
                        v = 0;
                    for (i = 0; i < length; i++) {
                        if (settings.mode === 'slide') {
                            // calculate scene * slide value
                            if (!settings.autoWidth) {
                                v = i * ((slideWidth + settings.slideMargin) * settings.slideMove);
                            } else {
                                v += ((parseInt($children.eq(i).width()) + settings.slideMargin) * settings.slideMove);
                            }
                        }
                        var thumb = $children.eq(i * settings.slideMove).attr('data-thumb');
                        if (settings.gallery === true) {
                            pagers += '<li style="width:100%;' + property + ':' + thumbWidth + 'px;' + gutter + ':' + settings.thumbMargin + 'px"><a href="#"><img src="' + thumb + '" /></a></li>';
                        } else {
                            pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                        }
                        if (settings.mode === 'slide') {
                            if ((v) >= w - elSize - settings.slideMargin) {
                                i = i + 1;
                                var minPgr = 2;
                                if (settings.autoWidth) {
                                    pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                                    minPgr = 1;
                                }
                                if (i < minPgr) {
                                    pagers = null;
                                    $slide.parent().addClass('noPager');
                                } else {
                                    $slide.parent().removeClass('noPager');
                                }
                                break;
                            }
                        }
                    }
                    var $cSouter = $slide.parent();
                    $cSouter.find('.lSPager').html(pagers); 
                    if (settings.gallery === true) {
                        if (settings.vertical === true) {
                            // set Gallery thumbnail width
                            $cSouter.find('.lSPager').css('width', settings.vThumbWidth + 'px');
                        }
                        pagerWidth = (i * (settings.thumbMargin + thumbWidth)) + 0.5;
                        $cSouter.find('.lSPager').css({
                            property: pagerWidth + 'px',
                            'transition-duration': settings.speed + 'ms'
                        });
                        if (settings.vertical === true) {
                            $slide.parent().css('padding-right', (settings.vThumbWidth + settings.galleryMargin) + 'px');
                        }
                        $cSouter.find('.lSPager').css(property, pagerWidth + 'px');
                    }
                    var $pager = $cSouter.find('.lSPager').find('li');
                    $pager.first().addClass('active');
                    $pager.on('click', function () {
                        if (settings.loop === true && settings.mode === 'slide') {
                            scene = scene + ($pager.index(this) - $cSouter.find('.lSPager').find('li.active').index());
                        } else {
                            scene = $pager.index(this);
                        }
                        $el.mode(false);
                        if (settings.gallery === true) {
                            $this.slideThumb();
                        }
                        clearInterval(interval);
                        return false;
                    });
                };
                if (settings.pager) {
                    var cl = 'lSpg';
                    if (settings.gallery) {
                        cl = 'lSGallery';
                    }
                    $slide.after('<ul class="lSPager ' + cl + '"></ul>');
                    var gMargin = (settings.vertical) ? 'margin-left' : 'margin-top';
                    $slide.parent().find('.lSPager').css(gMargin, settings.galleryMargin + 'px');
                    refresh.createPager();
                }

                setTimeout(function () {
                    refresh.init();
                }, 0);
            },
            setHeight: function (ob, fade) {
                var obj = null,
                    $this = this;
                if (settings.loop) {
                    obj = ob.children('.lslide ').first();
                } else {
                    obj = ob.children().first();
                }
                var setCss = function () {
                    var tH = obj.outerHeight(),
                        tP = 0,
                        tHT = tH;
                    if (fade) {
                        tH = 0;
                        tP = ((tHT) * 100) / elSize;
                    }
                    ob.css({
                        'height': tH + 'px',
                        'padding-bottom': tP + '%'
                    });
                };
                setCss();
                if (obj.find('img').length) {
                    if ( obj.find('img')[0].complete) {
                        setCss();
                        if (!interval) {
                            $this.auto();
                        }   
                    }else{
                        obj.find('img').load(function () {
                            setTimeout(function () {
                                setCss();
                                if (!interval) {
                                    $this.auto();
                                }
                            }, 100);
                        });
                    }
                }else{
                    if (!interval) {
                        $this.auto();
                    }
                }
            },
            active: function (ob, t) {
                if (this.doCss() && settings.mode === 'fade') {
                    $slide.addClass('on');
                }
                var sc = 0;
                if (scene * settings.slideMove < length) {
                    ob.removeClass('active');
                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.fadeOut(settings.speed);
                    }
                    if (t === true) {
                        sc = scene;
                    } else {
                        sc = scene * settings.slideMove;
                    }
                    //t === true ? sc = scene : sc = scene * settings.slideMove;
                    var l, nl;
                    if (t === true) {
                        l = ob.length;
                        nl = l - 1;
                        if (sc + 1 >= l) {
                            sc = nl;
                        }
                    }
                    if (settings.loop === true && settings.mode === 'slide') {
                        //t === true ? sc = scene - $el.find('.clone.left').length : sc = scene * settings.slideMove;
                        if (t === true) {
                            sc = scene - $el.find('.clone.left').length;
                        } else {
                            sc = scene * settings.slideMove;
                        }
                        if (t === true) {
                            l = ob.length;
                            nl = l - 1;
                            if (sc + 1 === l) {
                                sc = nl;
                            } else if (sc + 1 > l) {
                                sc = 0;
                            }
                        }
                    }

                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.eq(sc).fadeIn(settings.speed);
                    }
                    ob.eq(sc).addClass('active');
                } else {
                    ob.removeClass('active');
                    ob.eq(ob.length - 1).addClass('active');
                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.fadeOut(settings.speed);
                        ob.eq(sc).fadeIn(settings.speed);
                    }
                }
            },
            move: function (ob, v) {
                if (settings.rtl === true) {
                    v = -v;
                }
                if (this.doCss()) {
                    if (settings.vertical === true) {
                        ob.css({
                            'transform': 'translate3d(0px, ' + (-v) + 'px, 0px)',
                            '-webkit-transform': 'translate3d(0px, ' + (-v) + 'px, 0px)'
                        });
                    } else {
                        ob.css({
                            'transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
                            '-webkit-transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
                        });
                    }
                } else {
                    if (settings.vertical === true) {
                        ob.css('position', 'relative').animate({
                            top: -v + 'px'
                        }, settings.speed, settings.easing);
                    } else {
                        ob.css('position', 'relative').animate({
                            left: -v + 'px'
                        }, settings.speed, settings.easing);
                    }
                }
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, true);
            },
            fade: function () {
                this.active($children, false);
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, true);
            },
            slide: function () {
                var $this = this;
                refresh.calSlide = function () {
                    if (w > elSize) {
                        slideValue = $this.slideValue();
                        $this.active($children, false);
                        if ((slideValue) > w - elSize - settings.slideMargin) {
                            slideValue = w - elSize - settings.slideMargin;
                        } else if (slideValue < 0) {
                            slideValue = 0;
                        }
                        $this.move($el, slideValue);
                        if (settings.loop === true && settings.mode === 'slide') {
                            if (scene >= (length - ($el.find('.clone.left').length / settings.slideMove))) {
                                $this.resetSlide($el.find('.clone.left').length);
                            }
                            if (scene === 0) {
                                $this.resetSlide($slide.find('.lslide').length);
                            }
                        }
                    }
                };
                refresh.calSlide();
            },
            resetSlide: function (s) {
                var $this = this;
                $slide.find('.lSAction a').addClass('disabled');
                setTimeout(function () {
                    scene = s;
                    $slide.css('transition-duration', '0ms');
                    slideValue = $this.slideValue();
                    $this.active($children, false);
                    plugin.move($el, slideValue);
                    setTimeout(function () {
                        $slide.css('transition-duration', settings.speed + 'ms');
                        $slide.find('.lSAction a').removeClass('disabled');
                    }, 50);
                }, settings.speed + 100);
            },
            slideValue: function () {
                var _sV = 0;
                if (settings.autoWidth === false) {
                    _sV = scene * ((slideWidth + settings.slideMargin) * settings.slideMove);
                } else {
                    _sV = 0;
                    for (var i = 0; i < scene; i++) {
                        _sV += (parseInt($children.eq(i).width()) + settings.slideMargin);
                    }
                }
                return _sV;
            },
            slideThumb: function () {
                var position;
                switch (settings.currentPagerPosition) {
                case 'left':
                    position = 0;
                    break;
                case 'middle':
                    position = (elSize / 2) - (thumbWidth / 2);
                    break;
                case 'right':
                    position = elSize - thumbWidth;
                }
                var sc = scene - $el.find('.clone.left').length;
                var $pager = $slide.parent().find('.lSPager');
                if (settings.mode === 'slide' && settings.loop === true) {
                    if (sc >= $pager.children().length) {
                        sc = 0;
                    } else if (sc < 0) {
                        sc = $pager.children().length;
                    }
                }
                var thumbSlide = sc * ((thumbWidth + settings.thumbMargin)) - (position);
                if ((thumbSlide + elSize) > pagerWidth) {
                    thumbSlide = pagerWidth - elSize - settings.thumbMargin;
                }
                if (thumbSlide < 0) {
                    thumbSlide = 0;
                }
                this.move($pager, thumbSlide);
            },
            auto: function () {
                if (settings.auto) {
                    interval = setInterval(function () {
                        $el.goToNextSlide();
                    }, settings.pause);
                }
            },

            touchMove: function (endCoords, startCoords) {
                $slide.css('transition-duration', '0ms');
                if (settings.mode === 'slide') {
                    var distance = endCoords - startCoords;
                    var swipeVal = slideValue - distance;
                    if ((swipeVal) >= w - elSize - settings.slideMargin) {
                        if (settings.freeMove === false) {
                            swipeVal = w - elSize - settings.slideMargin;
                        } else {
                            var swipeValT = w - elSize - settings.slideMargin;
                            swipeVal = swipeValT + ((swipeVal - swipeValT) / 5);

                        }
                    } else if (swipeVal < 0) {
                        if (settings.freeMove === false) {
                            swipeVal = 0;
                        } else {
                            swipeVal = swipeVal / 5;
                        }
                    }
                    this.move($el, swipeVal);
                }
            },

            touchEnd: function (distance) {
                $slide.css('transition-duration', settings.speed + 'ms');
                clearInterval(interval);
                if (settings.mode === 'slide') {
                    var mxVal = false;
                    var _next = true;
                    slideValue = slideValue - distance;
                    if ((slideValue) > w - elSize - settings.slideMargin) {
                        slideValue = w - elSize - settings.slideMargin;
                        if (settings.autoWidth === false) {
                            mxVal = true;
                        }
                    } else if (slideValue < 0) {
                        slideValue = 0;
                    }
                    var gC = function (next) {
                        var ad = 0;
                        if (!mxVal) {
                            if (next) {
                                ad = 1;
                            }
                        }
                        if (!settings.autoWidth) {
                            var num = slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove);
                            scene = parseInt(num) + ad;
                            if (slideValue >= (w - elSize - settings.slideMargin)) {
                                if (num % 1 !== 0) {
                                    scene++;
                                }
                            }
                        } else {
                            var tW = 0;
                            for (var i = 0; i < $children.length; i++) {
                                tW += (parseInt($children.eq(i).width()) + settings.slideMargin);
                                scene = i + ad;
                                if (tW >= slideValue) {
                                    break;
                                }
                            }
                        }
                    };
                    if (distance >= settings.swipeThreshold) {
                        gC(false);
                        _next = false;
                    } else if (distance <= -settings.swipeThreshold) {
                        gC(true);
                        _next = false;
                    }
                    $el.mode(_next);
                    this.slideThumb();
                } else {
                    if (distance >= settings.swipeThreshold) {
                        $el.goToPrevSlide();
                    } else if (distance <= -settings.swipeThreshold) {
                        $el.goToNextSlide();
                    }
                }
            },



            enableDrag: function () {
                var $this = this;
                if (!isTouch) {
                    var startCoords = 0,
                        endCoords = 0,
                        isDraging = false;
                    $slide.find('.lightSlider').addClass('lsGrab');
                    $slide.on('mousedown', function (e) {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        if ($(e.target).attr('class') !== ('lSPrev') && $(e.target).attr('class') !== ('lSNext')) {
                            startCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            isDraging = true;
                            if (e.preventDefault) {
                                e.preventDefault();
                            } else {
                                e.returnValue = false;
                            }
                            // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                            $slide.scrollLeft += 1;
                            $slide.scrollLeft -= 1;
                            // *
                            $slide.find('.lightSlider').removeClass('lsGrab').addClass('lsGrabbing');
                            clearInterval(interval);
                        }
                    });
                    $(window).on('mousemove', function (e) {
                        if (isDraging) {
                            endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            $this.touchMove(endCoords, startCoords);
                        }
                    });
                    $(window).on('mouseup', function (e) {
                        if (isDraging) {
                            $slide.find('.lightSlider').removeClass('lsGrabbing').addClass('lsGrab');
                            isDraging = false;
                            endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            var distance = endCoords - startCoords;
                            if (Math.abs(distance) >= settings.swipeThreshold) {
                                $(window).on('click.ls', function (e) {
                                    if (e.preventDefault) {
                                        e.preventDefault();
                                    } else {
                                        e.returnValue = false;
                                    }
                                    e.stopImmediatePropagation();
                                    e.stopPropagation();
                                    $(window).off('click.ls');
                                });
                            }

                            $this.touchEnd(distance);

                        }
                    });
                }
            },




            enableTouch: function () {
                var $this = this;
                if (isTouch) {
                    var startCoords = {},
                        endCoords = {};
                    $slide.on('touchstart', function (e) {
                        endCoords = e.originalEvent.targetTouches[0];
                        startCoords.pageX = e.originalEvent.targetTouches[0].pageX;
                        startCoords.pageY = e.originalEvent.targetTouches[0].pageY;
                        clearInterval(interval);
                    });
                    $slide.on('touchmove', function (e) {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        var orig = e.originalEvent;
                        endCoords = orig.targetTouches[0];
                        var xMovement = Math.abs(endCoords.pageX - startCoords.pageX);
                        var yMovement = Math.abs(endCoords.pageY - startCoords.pageY);
                        if (settings.vertical === true) {
                            if ((yMovement * 3) > xMovement) {
                                e.preventDefault();
                            }
                            $this.touchMove(endCoords.pageY, startCoords.pageY);
                        } else {
                            if ((xMovement * 3) > yMovement) {
                                e.preventDefault();
                            }
                            $this.touchMove(endCoords.pageX, startCoords.pageX);
                        }

                    });
                    $slide.on('touchend', function () {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        var distance;
                        if (settings.vertical === true) {
                            distance = endCoords.pageY - startCoords.pageY;
                        } else {
                            distance = endCoords.pageX - startCoords.pageX;
                        }
                        $this.touchEnd(distance);
                    });
                }
            },
            build: function () {
                var $this = this;
                $this.initialStyle();
                if (this.doCss()) {

                    if (settings.enableTouch === true) {
                        $this.enableTouch();
                    }
                    if (settings.enableDrag === true) {
                        $this.enableDrag();
                    }
                }
                $this.pager();
                $this.controls();
                $this.keyPress();
            }
        };
        plugin.build();
        refresh.init = function () {
            refresh.chbreakpoint();
            if (settings.vertical === true) {
                if (settings.item > 1) {
                    elSize = settings.verticalHeight;
                } else {
                    elSize = $children.outerHeight();
                }
                $slide.css('height', elSize + 'px');
            } else {
                elSize = $slide.outerWidth();
            }
            if (settings.loop === true && settings.mode === 'slide') {
                refresh.clone();
            }
            refresh.calL();
            if (settings.mode === 'slide') {
                $el.removeClass('lSSlide');
            }
            if (settings.mode === 'slide') {
                refresh.calSW();
                refresh.sSW();
            }
            setTimeout(function () {
                if (settings.mode === 'slide') {
                    $el.addClass('lSSlide');
                }
            }, 1000);
            if (settings.pager) {
                refresh.createPager();
            }
            if (settings.adaptiveHeight === true && settings.vertical === false) {
                $el.css('height', $children.eq(scene).outerHeight(true));
            }
            if (settings.adaptiveHeight === false) {
                if (settings.mode === 'slide') {
                    if (settings.vertical === false) {
                        plugin.setHeight($el, false);
                    }else{
                        plugin.auto();
                    }
                } else {
                    plugin.setHeight($el, true);
                }
            }
            if (settings.gallery === true) {
                plugin.slideThumb();
            }
            if (settings.mode === 'slide') {
                plugin.slide();
            }
            if (settings.autoWidth === false) {
                if ($children.length <= settings.item) {
                    $slide.find('.lSAction').hide();
                } else {
                    $slide.find('.lSAction').show();
                }
            } else {
                if ((refresh.calWidth(false) < elSize) && (w !== 0)) {
                    $slide.find('.lSAction').hide();
                } else {
                    $slide.find('.lSAction').show();
                }
            }
        };
        $el.goToPrevSlide = function () {
            if (scene > 0) {
                settings.onBeforePrevSlide.call(this, $el, scene);
                scene--;
                $el.mode(false);
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
            } else {
                if (settings.loop === true) {
                    settings.onBeforePrevSlide.call(this, $el, scene);
                    if (settings.mode === 'fade') {
                        var l = (length - 1);
                        scene = parseInt(l / settings.slideMove);
                    }
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else if (settings.slideEndAnimation === true) {
                    $el.addClass('leftEnd');
                    setTimeout(function () {
                        $el.removeClass('leftEnd');
                    }, 400);
                }
            }
        };
        $el.goToNextSlide = function () {
            var nextI = true;
            if (settings.mode === 'slide') {
                var _slideValue = plugin.slideValue();
                nextI = _slideValue < w - elSize - settings.slideMargin;
            }
            if (((scene * settings.slideMove) < length - settings.slideMove) && nextI) {
                settings.onBeforeNextSlide.call(this, $el, scene);
                scene++;
                $el.mode(false);
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
            } else {
                if (settings.loop === true) {
                    settings.onBeforeNextSlide.call(this, $el, scene);
                    scene = 0;
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else if (settings.slideEndAnimation === true) {
                    $el.addClass('rightEnd');
                    setTimeout(function () {
                        $el.removeClass('rightEnd');
                    }, 400);
                }
            }
        };
        $el.mode = function (_touch) {
            if (settings.adaptiveHeight === true && settings.vertical === false) {
                $el.css('height', $children.eq(scene).outerHeight(true));
            }
            if (on === false) {
                if (settings.mode === 'slide') {
                    if (plugin.doCss()) {
                        $el.addClass('lSSlide');
                        if (settings.speed !== '') {
                            $slide.css('transition-duration', settings.speed + 'ms');
                        }
                        if (settings.cssEasing !== '') {
                            $slide.css('transition-timing-function', settings.cssEasing);
                        }
                    }
                } else {
                    if (plugin.doCss()) {
                        if (settings.speed !== '') {
                            $el.css('transition-duration', settings.speed + 'ms');
                        }
                        if (settings.cssEasing !== '') {
                            $el.css('transition-timing-function', settings.cssEasing);
                        }
                    }
                }
            }
            if (!_touch) {
                settings.onBeforeSlide.call(this, $el, scene);
            }
            if (settings.mode === 'slide') {
                plugin.slide();
            } else {
                plugin.fade();
            }
            setTimeout(function () {
                if (!_touch) {
                    settings.onAfterSlide.call(this, $el, scene);
                }
            }, settings.speed);
            on = true;
        };
        $el.play = function () {
            clearInterval(interval);
            $el.goToNextSlide();
            interval = setInterval(function () {
                $el.goToNextSlide();
            }, settings.pause);
        };
        $el.pause = function () {
            clearInterval(interval);
        };
        $el.refresh = function () {
            refresh.init();
        };
        $el.getCurrentSlideCount = function () {
            var sc = scene;
            if (settings.loop) {
                var ln = $slide.find('.lslide').length,
                    cl = $el.find('.clone.left').length;
                if (scene <= cl - 1) {
                    sc = ln + (scene - cl);
                } else if (scene >= (ln + cl)) {
                    sc = scene - ln - cl;
                } else {
                    sc = scene - cl;
                }
            }
            return sc + 1;
        }; 
        $el.getTotalSlideCount = function () {
            return $slide.find('.lslide').length;
        };
        $el.goToSlide = function (s) {
            if (settings.loop) {
                scene = (s + $el.find('.clone.left').length - 1);
            } else {
                scene = s;
            }
            $el.mode(false);
            if (settings.gallery === true) {
                plugin.slideThumb();
            }
        };
        setTimeout(function () {
            settings.onSliderLoad.call(this, $el);
        }, 10);
        $(window).on('resize orientationchange', function (e) {
            setTimeout(function () {
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
                refresh.init();
            }, 200);
        });
        return this;
    };
}(jQuery));
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-hashchange-history-audio-video-input-inputtypes-localstorage-websockets-geolocation-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-css_mediaqueries-css_regions-css_supports-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("mediaqueries",Modernizr.mq("only all")),Modernizr.addTest("regions",function(){var a=Modernizr.prefixed("flowFrom"),b=Modernizr.prefixed("flowInto");if(!a||!b)return!1;var c=document.createElement("div"),d=document.createElement("div"),e=document.createElement("div"),f="modernizr_flow_for_regions_check";d.innerText="M",c.style.cssText="top: 150px; left: 150px; padding: 0px;",e.style.cssText="width: 50px; height: 50px; padding: 42px;",e.style[a]=f,c.appendChild(d),c.appendChild(e),document.documentElement.appendChild(c);var g,h,i=d.getBoundingClientRect();return d.style[b]=f,g=d.getBoundingClientRect(),h=g.left-i.left,document.documentElement.removeChild(c),d=e=c=undefined,h==42}),Modernizr.addTest("supports","CSSSupportsRule"in window);
/**
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @author Lea Verou
 * MIT license
 */
(function(){function k(a,b){return[].slice.call((b||document).querySelectorAll(a))}if(window.addEventListener){var e=window.StyleFix={link:function(a){var c=a.href||a.getAttribute("data-href");try{if(!c||"stylesheet"!==a.rel||a.hasAttribute("data-noprefix"))return}catch(b){return}var d=c.replace(/[^\/]+$/,""),h=(/^[a-z]{3,10}:/.exec(d)||[""])[0],l=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(d)||[""])[0],g=/^([^?]*)\??/.exec(c)[1],m=a.parentNode,f=new XMLHttpRequest,n;f.onreadystatechange=function(){4===f.readyState&&
n()};n=function(){var b=f.responseText;if(b&&a.parentNode&&(!f.status||400>f.status||600<f.status)){b=e.fix(b,!0,a);if(d)var b=b.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(b,a,c){return/^([a-z]{3,10}:|#)/i.test(c)?b:/^\/\//.test(c)?'url("'+h+c+'")':/^\//.test(c)?'url("'+l+c+'")':/^\?/.test(c)?'url("'+g+c+'")':'url("'+d+c+'")'}),c=d.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1"),b=b.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+c,"gi"),"$1");c=document.createElement("style");c.textContent='/*# sourceURL='+a.getAttribute('href')+' */\n/*@ sourceURL='+a.getAttribute('href')+' */\n' +
b;c.media=a.media;c.disabled=a.disabled;c.setAttribute("data-href",a.getAttribute("href"));m.insertBefore(c,a);m.removeChild(a);c.media=a.media}};try{f.open("GET",c),f.send(null)}catch(p){"undefined"!=typeof XDomainRequest&&(f=new XDomainRequest,f.onerror=f.onprogress=function(){},f.onload=n,f.open("GET",c),f.send(null))}a.setAttribute("data-inprogress","")},styleElement:function(a){if(!a.hasAttribute("data-noprefix")){var b=a.disabled;a.textContent=e.fix(a.textContent,!0,a);a.disabled=b}},styleAttribute:function(a){var b=
a.getAttribute("style"),b=e.fix(b,!1,a);a.setAttribute("style",b)},process:function(){k('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);k("style").forEach(StyleFix.styleElement);k("[style]").forEach(StyleFix.styleAttribute)},register:function(a,b){(e.fixers=e.fixers||[]).splice(void 0===b?e.fixers.length:b,0,a)},fix:function(a,b,c){for(var d=0;d<e.fixers.length;d++)a=e.fixers[d](a,b,c)||a;return a},camelCase:function(a){return a.replace(/-([a-z])/g,function(b,a){return a.toUpperCase()}).replace("-",
"")},deCamelCase:function(a){return a.replace(/[A-Z]/g,function(b){return"-"+b.toLowerCase()})}};(function(){setTimeout(function(){k('link[rel="stylesheet"]').forEach(StyleFix.link)},10);document.addEventListener("DOMContentLoaded",StyleFix.process,!1)})()}})();
(function(k){function e(b,c,d,h,l){b=a[b];b.length&&(b=RegExp(c+"("+b.join("|")+")"+d,"gi"),l=l.replace(b,h));return l}if(window.StyleFix&&window.getComputedStyle){var a=window.PrefixFree={prefixCSS:function(b,c,d){var h=a.prefix;-1<a.functions.indexOf("linear-gradient")&&(b=b.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig,function(b,a,c,d){return a+(c||"")+"linear-gradient("+(90-d)+"deg"}));b=e("functions","(\\s|:|,)","\\s*\\(","$1"+h+"$2(",b);b=e("keywords","(\\s|:)","(\\s|;|\\}|$)",
"$1"+h+"$2$3",b);b=e("properties","(^|\\{|\\s|;)","\\s*:","$1"+h+"$2:",b);if(a.properties.length){var l=RegExp("\\b("+a.properties.join("|")+")(?!:)","gi");b=e("valueProperties","\\b",":(.+?);",function(a){return a.replace(l,h+"$1")},b)}c&&(b=e("selectors","","\\b",a.prefixSelector,b),b=e("atrules","@","\\b","@"+h+"$1",b));b=b.replace(RegExp("-"+h,"g"),"-");return b=b.replace(/-\*-(?=[a-z]+)/gi,a.prefix)},property:function(b){return(0<=a.properties.indexOf(b)?a.prefix:"")+b},value:function(b,c){b=
e("functions","(^|\\s|,)","\\s*\\(","$1"+a.prefix+"$2(",b);b=e("keywords","(^|\\s)","(\\s|$)","$1"+a.prefix+"$2$3",b);0<=a.valueProperties.indexOf(c)&&(b=e("properties","(^|\\s|,)","($|\\s|,)","$1"+a.prefix+"$2$3",b));return b},prefixSelector:function(b){return b.replace(/^:{1,2}/,function(b){return b+a.prefix})},prefixProperty:function(b,c){var d=a.prefix+b;return c?StyleFix.camelCase(d):d}};(function(){var b={},c=[],d=getComputedStyle(document.documentElement,null),h=document.createElement("div").style,
l=function(a){if("-"===a.charAt(0)){c.push(a);a=a.split("-");var d=a[1];for(b[d]=++b[d]||1;3<a.length;)a.pop(),d=a.join("-"),StyleFix.camelCase(d)in h&&-1===c.indexOf(d)&&c.push(d)}};if(0<d.length)for(var g=0;g<d.length;g++)l(d[g]);else for(var e in d)l(StyleFix.deCamelCase(e));var g=0,f,k;for(k in b)d=b[k],g<d&&(f=k,g=d);a.prefix="-"+f+"-";a.Prefix=StyleFix.camelCase(a.prefix);a.properties=[];for(g=0;g<c.length;g++)e=c[g],0===e.indexOf(a.prefix)&&(f=e.slice(a.prefix.length),StyleFix.camelCase(f)in
h||a.properties.push(f));!("Ms"!=a.Prefix||"transform"in h||"MsTransform"in h)&&"msTransform"in h&&a.properties.push("transform","transform-origin");a.properties.sort()})();(function(){function b(a,b){h[b]="";h[b]=a;return!!h[b]}var c={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};c["repeating-linear-gradient"]=
c["repeating-radial-gradient"]=c["radial-gradient"]=c["linear-gradient"];var d={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display",grid:"display","inline-grid":"display","max-content":"width","min-content":"width","fit-content":"width","fill-available":"width"};a.functions=[];a.keywords=[];var h=document.createElement("div").style,e;for(e in c){var g=c[e],k=g.property,g=e+"("+g.params+")";!b(g,k)&&
b(a.prefix+g,k)&&a.functions.push(e)}for(var f in d)k=d[f],!b(f,k)&&b(a.prefix+f,k)&&a.keywords.push(f)})();(function(){function b(a){e.textContent=a+"{}";return!!e.sheet.cssRules.length}var c={":read-only":null,":read-write":null,":any-link":null,"::selection":null},d={keyframes:"name",viewport:null,document:'regexp(".")'};a.selectors=[];a.atrules=[];var e=k.appendChild(document.createElement("style")),l;for(l in c){var g=l+(c[l]?"("+c[l]+")":"");!b(g)&&b(a.prefixSelector(g))&&a.selectors.push(l)}for(var m in d)g=
m+" "+(d[m]||""),!b("@"+g)&&b("@"+a.prefix+g)&&a.atrules.push(m);k.removeChild(e)})();a.valueProperties=["transition","transition-property"];k.className+=" "+a.prefix;StyleFix.register(a.prefixCSS)}})(document.documentElement);

/*! skrollr 0.6.30 (2015-08-12) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
!function(a,b,c){"use strict";function d(c){if(e=b.documentElement,f=b.body,T(),ha=this,c=c||{},ma=c.constants||{},c.easing)for(var d in c.easing)W[d]=c.easing[d];ta=c.edgeStrategy||"set",ka={beforerender:c.beforerender,render:c.render,keyframe:c.keyframe},la=c.forceHeight!==!1,la&&(Ka=c.scale||1),na=c.mobileDeceleration||y,pa=c.smoothScrolling!==!1,qa=c.smoothScrollingDuration||A,ra={targetTop:ha.getScrollTop()},Sa=(c.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||a.opera)})(),Sa?(ja=b.getElementById(c.skrollrBody||z),ja&&ga(),X(),Ea(e,[s,v],[t])):Ea(e,[s,u],[t]),ha.refresh(),wa(a,"resize orientationchange",function(){var a=e.clientWidth,b=e.clientHeight;(b!==Pa||a!==Oa)&&(Pa=b,Oa=a,Qa=!0)});var g=U();return function h(){$(),va=g(h)}(),ha}var e,f,g={get:function(){return ha},init:function(a){return ha||new d(a)},VERSION:"0.6.30"},h=Object.prototype.hasOwnProperty,i=a.Math,j=a.getComputedStyle,k="touchstart",l="touchmove",m="touchcancel",n="touchend",o="skrollable",p=o+"-before",q=o+"-between",r=o+"-after",s="skrollr",t="no-"+s,u=s+"-desktop",v=s+"-mobile",w="linear",x=1e3,y=.004,z="skrollr-body",A=200,B="start",C="end",D="center",E="bottom",F="___skrollable_id",G=/^(?:input|textarea|button|select)$/i,H=/^\s+|\s+$/g,I=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,J=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,K=/^(@?[a-z\-]+)\[(\w+)\]$/,L=/-([a-z0-9_])/g,M=function(a,b){return b.toUpperCase()},N=/[\-+]?[\d]*\.?[\d]+/g,O=/\{\?\}/g,P=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,Q=/[a-z\-]+-gradient/g,R="",S="",T=function(){var a=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(j){var b=j(f,null);for(var c in b)if(R=c.match(a)||+c==c&&b[c].match(a))break;if(!R)return void(R=S="");R=R[0],"-"===R.slice(0,1)?(S=R,R={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[R]):S="-"+R.toLowerCase()+"-"}},U=function(){var b=a.requestAnimationFrame||a[R.toLowerCase()+"RequestAnimationFrame"],c=Ha();return(Sa||!b)&&(b=function(b){var d=Ha()-c,e=i.max(0,1e3/60-d);return a.setTimeout(function(){c=Ha(),b()},e)}),b},V=function(){var b=a.cancelAnimationFrame||a[R.toLowerCase()+"CancelAnimationFrame"];return(Sa||!b)&&(b=function(b){return a.clearTimeout(b)}),b},W={begin:function(){return 0},end:function(){return 1},linear:function(a){return a},quadratic:function(a){return a*a},cubic:function(a){return a*a*a},swing:function(a){return-i.cos(a*i.PI)/2+.5},sqrt:function(a){return i.sqrt(a)},outCubic:function(a){return i.pow(a-1,3)+1},bounce:function(a){var b;if(.5083>=a)b=3;else if(.8489>=a)b=9;else if(.96208>=a)b=27;else{if(!(.99981>=a))return 1;b=91}return 1-i.abs(3*i.cos(a*b*1.028)/b)}};d.prototype.refresh=function(a){var d,e,f=!1;for(a===c?(f=!0,ia=[],Ra=0,a=b.getElementsByTagName("*")):a.length===c&&(a=[a]),d=0,e=a.length;e>d;d++){var g=a[d],h=g,i=[],j=pa,k=ta,l=!1;if(f&&F in g&&delete g[F],g.attributes){for(var m=0,n=g.attributes.length;n>m;m++){var p=g.attributes[m];if("data-anchor-target"!==p.name)if("data-smooth-scrolling"!==p.name)if("data-edge-strategy"!==p.name)if("data-emit-events"!==p.name){var q=p.name.match(I);if(null!==q){var r={props:p.value,element:g,eventType:p.name.replace(L,M)};i.push(r);var s=q[1];s&&(r.constant=s.substr(1));var t=q[2];/p$/.test(t)?(r.isPercentage=!0,r.offset=(0|t.slice(0,-1))/100):r.offset=0|t;var u=q[3],v=q[4]||u;u&&u!==B&&u!==C?(r.mode="relative",r.anchors=[u,v]):(r.mode="absolute",u===C?r.isEnd=!0:r.isPercentage||(r.offset=r.offset*Ka))}}else l=!0;else k=p.value;else j="off"!==p.value;else if(h=b.querySelector(p.value),null===h)throw'Unable to find anchor target "'+p.value+'"'}if(i.length){var w,x,y;!f&&F in g?(y=g[F],w=ia[y].styleAttr,x=ia[y].classAttr):(y=g[F]=Ra++,w=g.style.cssText,x=Da(g)),ia[y]={element:g,styleAttr:w,classAttr:x,anchorTarget:h,keyFrames:i,smoothScrolling:j,edgeStrategy:k,emitEvents:l,lastFrameIndex:-1},Ea(g,[o],[])}}}for(Aa(),d=0,e=a.length;e>d;d++){var z=ia[a[d][F]];z!==c&&(_(z),ba(z))}return ha},d.prototype.relativeToAbsolute=function(a,b,c){var d=e.clientHeight,f=a.getBoundingClientRect(),g=f.top,h=f.bottom-f.top;return b===E?g-=d:b===D&&(g-=d/2),c===E?g+=h:c===D&&(g+=h/2),g+=ha.getScrollTop(),g+.5|0},d.prototype.animateTo=function(a,b){b=b||{};var d=Ha(),e=ha.getScrollTop(),f=b.duration===c?x:b.duration;return oa={startTop:e,topDiff:a-e,targetTop:a,duration:f,startTime:d,endTime:d+f,easing:W[b.easing||w],done:b.done},oa.topDiff||(oa.done&&oa.done.call(ha,!1),oa=c),ha},d.prototype.stopAnimateTo=function(){oa&&oa.done&&oa.done.call(ha,!0),oa=c},d.prototype.isAnimatingTo=function(){return!!oa},d.prototype.isMobile=function(){return Sa},d.prototype.setScrollTop=function(b,c){return sa=c===!0,Sa?Ta=i.min(i.max(b,0),Ja):a.scrollTo(0,b),ha},d.prototype.getScrollTop=function(){return Sa?Ta:a.pageYOffset||e.scrollTop||f.scrollTop||0},d.prototype.getMaxScrollTop=function(){return Ja},d.prototype.on=function(a,b){return ka[a]=b,ha},d.prototype.off=function(a){return delete ka[a],ha},d.prototype.destroy=function(){var a=V();a(va),ya(),Ea(e,[t],[s,u,v]);for(var b=0,d=ia.length;d>b;b++)fa(ia[b].element);e.style.overflow=f.style.overflow="",e.style.height=f.style.height="",ja&&g.setStyle(ja,"transform","none"),ha=c,ja=c,ka=c,la=c,Ja=0,Ka=1,ma=c,na=c,La="down",Ma=-1,Oa=0,Pa=0,Qa=!1,oa=c,pa=c,qa=c,ra=c,sa=c,Ra=0,ta=c,Sa=!1,Ta=0,ua=c};var X=function(){var d,g,h,j,o,p,q,r,s,t,u,v;wa(e,[k,l,m,n].join(" "),function(a){var e=a.changedTouches[0];for(j=a.target;3===j.nodeType;)j=j.parentNode;switch(o=e.clientY,p=e.clientX,t=a.timeStamp,G.test(j.tagName)||a.preventDefault(),a.type){case k:d&&d.blur(),ha.stopAnimateTo(),d=j,g=q=o,h=p,s=t;break;case l:G.test(j.tagName)&&b.activeElement!==j&&a.preventDefault(),r=o-q,v=t-u,ha.setScrollTop(Ta-r,!0),q=o,u=t;break;default:case m:case n:var f=g-o,w=h-p,x=w*w+f*f;if(49>x){if(!G.test(d.tagName)){d.focus();var y=b.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,a.view,1,e.screenX,e.screenY,e.clientX,e.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),d.dispatchEvent(y)}return}d=c;var z=r/v;z=i.max(i.min(z,3),-3);var A=i.abs(z/na),B=z*A+.5*na*A*A,C=ha.getScrollTop()-B,D=0;C>Ja?(D=(Ja-C)/B,C=Ja):0>C&&(D=-C/B,C=0),A*=1-D,ha.animateTo(C+.5|0,{easing:"outCubic",duration:A})}}),a.scrollTo(0,0),e.style.overflow=f.style.overflow="hidden"},Y=function(){var a,b,c,d,f,g,h,j,k,l,m,n=e.clientHeight,o=Ba();for(j=0,k=ia.length;k>j;j++)for(a=ia[j],b=a.element,c=a.anchorTarget,d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],l=h.offset,m=o[h.constant]||0,h.frame=l,h.isPercentage&&(l*=n,h.frame=l),"relative"===h.mode&&(fa(b),h.frame=ha.relativeToAbsolute(c,h.anchors[0],h.anchors[1])-l,fa(b,!0)),h.frame+=m,la&&!h.isEnd&&h.frame>Ja&&(Ja=h.frame);for(Ja=i.max(Ja,Ca()),j=0,k=ia.length;k>j;j++){for(a=ia[j],d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],m=o[h.constant]||0,h.isEnd&&(h.frame=Ja-h.offset+m);a.keyFrames.sort(Ia)}},Z=function(a,b){for(var c=0,d=ia.length;d>c;c++){var e,f,i=ia[c],j=i.element,k=i.smoothScrolling?a:b,l=i.keyFrames,m=l.length,n=l[0],s=l[l.length-1],t=k<n.frame,u=k>s.frame,v=t?n:s,w=i.emitEvents,x=i.lastFrameIndex;if(t||u){if(t&&-1===i.edge||u&&1===i.edge)continue;switch(t?(Ea(j,[p],[r,q]),w&&x>-1&&(za(j,n.eventType,La),i.lastFrameIndex=-1)):(Ea(j,[r],[p,q]),w&&m>x&&(za(j,s.eventType,La),i.lastFrameIndex=m)),i.edge=t?-1:1,i.edgeStrategy){case"reset":fa(j);continue;case"ease":k=v.frame;break;default:case"set":var y=v.props;for(e in y)h.call(y,e)&&(f=ea(y[e].value),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f));continue}}else 0!==i.edge&&(Ea(j,[o,q],[p,r]),i.edge=0);for(var z=0;m-1>z;z++)if(k>=l[z].frame&&k<=l[z+1].frame){var A=l[z],B=l[z+1];for(e in A.props)if(h.call(A.props,e)){var C=(k-A.frame)/(B.frame-A.frame);C=A.props[e].easing(C),f=da(A.props[e].value,B.props[e].value,C),f=ea(f),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f)}w&&x!==z&&("down"===La?za(j,A.eventType,La):za(j,B.eventType,La),i.lastFrameIndex=z);break}}},$=function(){Qa&&(Qa=!1,Aa());var a,b,d=ha.getScrollTop(),e=Ha();if(oa)e>=oa.endTime?(d=oa.targetTop,a=oa.done,oa=c):(b=oa.easing((e-oa.startTime)/oa.duration),d=oa.startTop+b*oa.topDiff|0),ha.setScrollTop(d,!0);else if(!sa){var f=ra.targetTop-d;f&&(ra={startTop:Ma,topDiff:d-Ma,targetTop:d,startTime:Na,endTime:Na+qa}),e<=ra.endTime&&(b=W.sqrt((e-ra.startTime)/qa),d=ra.startTop+b*ra.topDiff|0)}if(sa||Ma!==d){La=d>Ma?"down":Ma>d?"up":La,sa=!1;var h={curTop:d,lastTop:Ma,maxTop:Ja,direction:La},i=ka.beforerender&&ka.beforerender.call(ha,h);i!==!1&&(Z(d,ha.getScrollTop()),Sa&&ja&&g.setStyle(ja,"transform","translate(0, "+-Ta+"px) "+ua),Ma=d,ka.render&&ka.render.call(ha,h)),a&&a.call(ha,!1)}Na=e},_=function(a){for(var b=0,c=a.keyFrames.length;c>b;b++){for(var d,e,f,g,h=a.keyFrames[b],i={};null!==(g=J.exec(h.props));)f=g[1],e=g[2],d=f.match(K),null!==d?(f=d[1],d=d[2]):d=w,e=e.indexOf("!")?aa(e):[e.slice(1)],i[f]={value:e,easing:W[d]};h.props=i}},aa=function(a){var b=[];return P.lastIndex=0,a=a.replace(P,function(a){return a.replace(N,function(a){return a/255*100+"%"})}),S&&(Q.lastIndex=0,a=a.replace(Q,function(a){return S+a})),a=a.replace(N,function(a){return b.push(+a),"{?}"}),b.unshift(a),b},ba=function(a){var b,c,d={};for(b=0,c=a.keyFrames.length;c>b;b++)ca(a.keyFrames[b],d);for(d={},b=a.keyFrames.length-1;b>=0;b--)ca(a.keyFrames[b],d)},ca=function(a,b){var c;for(c in b)h.call(a.props,c)||(a.props[c]=b[c]);for(c in a.props)b[c]=a.props[c]},da=function(a,b,c){var d,e=a.length;if(e!==b.length)throw"Can't interpolate between \""+a[0]+'" and "'+b[0]+'"';var f=[a[0]];for(d=1;e>d;d++)f[d]=a[d]+(b[d]-a[d])*c;return f},ea=function(a){var b=1;return O.lastIndex=0,a[0].replace(O,function(){return a[b++]})},fa=function(a,b){a=[].concat(a);for(var c,d,e=0,f=a.length;f>e;e++)d=a[e],c=ia[d[F]],c&&(b?(d.style.cssText=c.dirtyStyleAttr,Ea(d,c.dirtyClassAttr)):(c.dirtyStyleAttr=d.style.cssText,c.dirtyClassAttr=Da(d),d.style.cssText=c.styleAttr,Ea(d,c.classAttr)))},ga=function(){ua="translateZ(0)",g.setStyle(ja,"transform",ua);var a=j(ja),b=a.getPropertyValue("transform"),c=a.getPropertyValue(S+"transform"),d=b&&"none"!==b||c&&"none"!==c;d||(ua="")};g.setStyle=function(a,b,c){var d=a.style;if(b=b.replace(L,M).replace("-",""),"zIndex"===b)isNaN(c)?d[b]=c:d[b]=""+(0|c);else if("float"===b)d.styleFloat=d.cssFloat=c;else try{R&&(d[R+b.slice(0,1).toUpperCase()+b.slice(1)]=c),d[b]=c}catch(e){}};var ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa=g.addEvent=function(b,c,d){var e=function(b){return b=b||a.event,b.target||(b.target=b.srcElement),b.preventDefault||(b.preventDefault=function(){b.returnValue=!1,b.defaultPrevented=!0}),d.call(this,b)};c=c.split(" ");for(var f,g=0,h=c.length;h>g;g++)f=c[g],b.addEventListener?b.addEventListener(f,d,!1):b.attachEvent("on"+f,e),Ua.push({element:b,name:f,listener:d})},xa=g.removeEvent=function(a,b,c){b=b.split(" ");for(var d=0,e=b.length;e>d;d++)a.removeEventListener?a.removeEventListener(b[d],c,!1):a.detachEvent("on"+b[d],c)},ya=function(){for(var a,b=0,c=Ua.length;c>b;b++)a=Ua[b],xa(a.element,a.name,a.listener);Ua=[]},za=function(a,b,c){ka.keyframe&&ka.keyframe.call(ha,a,b,c)},Aa=function(){var a=ha.getScrollTop();Ja=0,la&&!Sa&&(f.style.height=""),Y(),la&&!Sa&&(f.style.height=Ja+e.clientHeight+"px"),Sa?ha.setScrollTop(i.min(ha.getScrollTop(),Ja)):ha.setScrollTop(a,!0),sa=!0},Ba=function(){var a,b,c=e.clientHeight,d={};for(a in ma)b=ma[a],"function"==typeof b?b=b.call(ha):/p$/.test(b)&&(b=b.slice(0,-1)/100*c),d[a]=b;return d},Ca=function(){var a,b=0;return ja&&(b=i.max(ja.offsetHeight,ja.scrollHeight)),a=i.max(b,f.scrollHeight,f.offsetHeight,e.scrollHeight,e.offsetHeight,e.clientHeight),a-e.clientHeight},Da=function(b){var c="className";return a.SVGElement&&b instanceof a.SVGElement&&(b=b[c],c="baseVal"),b[c]},Ea=function(b,d,e){var f="className";if(a.SVGElement&&b instanceof a.SVGElement&&(b=b[f],f="baseVal"),e===c)return void(b[f]=d);for(var g=b[f],h=0,i=e.length;i>h;h++)g=Ga(g).replace(Ga(e[h])," ");g=Fa(g);for(var j=0,k=d.length;k>j;j++)-1===Ga(g).indexOf(Ga(d[j]))&&(g+=" "+d[j]);b[f]=Fa(g)},Fa=function(a){return a.replace(H,"")},Ga=function(a){return" "+a+" "},Ha=Date.now||function(){return+new Date},Ia=function(a,b){return a.frame-b.frame},Ja=0,Ka=1,La="down",Ma=-1,Na=Ha(),Oa=0,Pa=0,Qa=!1,Ra=0,Sa=!1,Ta=0,Ua=[];"function"==typeof define&&define.amd?define([],function(){return g}):"undefined"!=typeof module&&module.exports?module.exports=g:a.skrollr=g}(window,document);

(function($) {
  $(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $(".post").fitVids();
  });
  
  })(jQuery);
// Font loader
WebFont.load({
  google: {
    families: ['Lato:300,400,700', 'Open+Sans:300,400,700']
  }
});

jQuery(document).ready(function($) {

  // fix content being blurred within transformed element
  $('.js-fix-blur').each(function() {
    var height = $(this).height();
    var roundedHeight = Math.ceil(height);
    if (roundedHeight % 2) {
      roundedHeight = roundedHeight + 1;
    }
    $(this).height(roundedHeight);
  });


  var responsive_viewport = $(window).width();
  if (responsive_viewport < 768) {}
  if (responsive_viewport >= 768) {}
  if (responsive_viewport >= 1200) {}


  // scroll watcher
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      //var headerHeight = $('.header').outerHeight();
      // var introHeight = $('.intro').outerHeight();

      // if (scroll > 10) {
      //   if (!$('.header').hasClass("scrolled")) {
      //     $('.header').addClass("scrolled");
      //   }
      // } else {
      //   if ($('.header').hasClass("scrolled")) {
      //     $('.header').removeClass("scrolled");
      //   }
      // }
      //
      // if (scroll > introHeight / 2) {
      //   if (!$('.header').hasClass("outro")) {
      //     $('.header').addClass("outro");
      //   }
      // } else {
      //   if ($('.header').hasClass("outro")) {
      //     $('.header').removeClass("outro");
      //   }
      // }
  });


  // tb pop toggle
  $('[data-pop-toggle]').click(function(e) {
    e.preventDefault();
    var pop = '#' + $(this).attr('data-pop-toggle');
    $(pop).addClass('open');
    $('body').addClass('prevent-scroll')
  });

  $('.pop-close').click(function() {
    $(this).parent('.pop-wrap').removeClass('open');
    $('body').removeClass('prevent-scroll')
  });


  // Create fresco gallery of wordpress galleries
  $('.gallery a').addClass('fresco');

  $('.gallery').each(function(i, el) {
    $(this).find('a').each(function(i2, el2) {
      $(this).attr('data-fresco-group', 'gallery' + i);
    });
  });


  // init skrollr
  if (!Modernizr.touch) {
    skrollr.init({
      forceHeight: false
    });
  }

});

// ########################################################################################################################################
// ########################################################################################################################################
// ########################################################################################################################################

/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
// (function(w){
// 	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
// 	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
//     var doc = w.document;
//     if( !doc.querySelector ){ return; }
//     var meta = doc.querySelector( "meta[name=viewport]" ),
//         initialContent = meta && meta.getAttribute( "content" ),
//         disabledZoom = initialContent + ",maximum-scale=1",
//         enabledZoom = initialContent + ",maximum-scale=10",
//         enabled = true,
// 		x, y, z, aig;
//     if( !meta ){ return; }
//     function restoreZoom(){
//         meta.setAttribute( "content", enabledZoom );
//         enabled = true; }
//     function disableZoom(){
//         meta.setAttribute( "content", disabledZoom );
//         enabled = false; }
//     function checkTilt( e ){
// 		aig = e.accelerationIncludingGravity;
// 		x = Math.abs( aig.x );
// 		y = Math.abs( aig.y );
// 		z = Math.abs( aig.z );
// 		// If portrait orientation and in one of the danger zones
//         if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
// 			if( enabled ){ disableZoom(); } }
// 		else if( !enabled ){ restoreZoom(); } }
// 	w.addEventListener( "orientationchange", restoreZoom, false );
// 	w.addEventListener( "devicemotion", checkTilt, false );
// })( this );
