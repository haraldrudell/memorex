var forbes=(function(b,a){b.modal_window=(function(e){var n=false;var d={window_width:200,window_height:150,border_depth:8};var i=null,m=null;function k(){m=(typeof imagesBaseCdn!="undefined")?imagesBaseCdn:e("body").attr("data-images-base-cdn");i=m+"/assets/img/loading_spinners/43px_grey_on_white.gif";f();g();e(window).resize(function(){c()})}function j(p){var r=e("#forbes_modal_window");var q=r.find(".load_target");if(!e.browser.msie){q.css("opacity",0.3)}var s=r.find(".window_loading_spinner");s.show();s.stop();s.css("opacity",0);s.animate({opacity:1},300);if(!r.hasClass("active")||!n){h({animate:false});n=true;r.addClass("active")}r.find(".close_btn").unbind("click").bind("click",function(t){p.on_cancel();return false});if(typeof p.html!="undefined"){s.stop().hide();q.html(p.html);if(typeof p.parse_rules!="undefined"){q.parse_rules(p.parse_rules)}if(typeof p.on_complete!="undefined"){p.on_complete(q)}h({animate:true});return false}e.get(p.url,(typeof p.params!="undefined")?p.params:{},function(x){var v="";if(typeof x=="object"){if(x.success=="form found"){v=x.form}}else{if(typeof x=="string"){v=x}}s.stop().hide();var w=v.indexOf("<!--start:ajax_content-->");var t=v.indexOf("<!--end:ajax_content-->");var u=v.substring(w,t);if(!e.browser.msie){q.css("opacity",0)}q.html(u);if(typeof p.parse_rules!="undefined"){q.parse_rules(p.parse_rules)}h({animate:true});if(typeof p.on_complete!="undefined"){p.on_complete(q)}})}function h(r){var J=e("#forbes_modal_window");var p=J.find(".load_target");var s=J.find(".scrim");var G=J.find(".window_border");var I=J.find(".window_contents");var M=J.find(".window_loading_spinner");var K=J.find(".close_btn");var v=e(document).width();var F=e(document).height();var t=e(window).width();var E=e(window).height();var H=parseInt(e(document).scrollTop());J.show();if(e.browser.msie){r.animate=false}if(t>980){s.width(t)}else{s.width(980)}s.height(F);var z=d.border_depth;if(p.find(".modal_screen").width()>d.window_width||p.find(".modal_screen").height()>d.window_height){var q=p.find(".modal_screen").width();var y=p.find(".modal_screen").height()}else{var q=d.window_width;var y=d.window_height}var x=((t/2)-(q/2));if(y>(E-40)){var D=H+40}else{var D=H+((E/2)-(y/2))}var u=q+(z*2);var C=y+(z*2);var w=(D-z);var L=(x-z);var N=(((y/2)-(M.height()/2))-10);var A=(((q/2)-(M.width()/2))-3);var P=(D-(K.height()/2));var B=((x+q)-(K.width()/2));if(r.animate){var O={duration:175,easing:"easeInOutCubic",complete:function(){p.css("opacity",1)}};I.stop().animate({width:q,height:y,top:D+"px",left:x+"px"},O);G.stop().animate({width:u,height:C,top:w+"px",left:L+"px"},O);M.stop().animate({top:N+"px",left:A+"px"},O);K.stop().animate({top:P+"px",left:B+"px"},O)}else{I.width(q);I.height(y);I.css({top:D+"px",left:x+"px"});G.width(u);G.height(C);G.css({top:w+"px",left:L+"px"});M.css({top:N+"px",left:A+"px"});K.css({top:P+"px",left:B+"px"})}}function c(){if(n){h({animate:false})}}function l(){n=false;e("#forbes_modal_window").removeClass("active");e("#forbes_modal_window").remove();g()}function g(){if(e("div#forbes_modal_window").length>0){return false}var q="",p="";if(e.browser.msie){q+="msie"}p+='<div id="forbes_modal_window" class="'+q+'" style="display:none;">';p+='<div class="close_btn"></div>';p+='<div class="window_contents">';p+='<div class="load_target"></div>';p+='<div class="window_loading_spinner" style="display:none;">';p+=o();p+="</div>";p+="</div>";p+='<div class="window_border"></div>';p+='<div class="scrim"></div>';p+="</div>";e("body").append(p)}function o(){return'<img src="'+i+'" height="43" width="43" alt="" />'}function f(){e.fn.parse_rules=function(r){var q=e(this);for(var p in r){q.find(p).html(r[p])}return q}}return{init:k,load:j,destroy:l,active:n,position:h,generate_large_loading_spinner_html:o}}(a));return b}(forbes||{},jQuery));forbes.bootstrap.register(forbes.modal_window.init);