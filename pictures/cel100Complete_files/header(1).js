$(document).ready(function() {

	//clear text in search field
	$('.hs_form_text').clearField();
	
	$('.hs_form_text').focus(
	function () {
	    $(this).removeClass("hs_form_text").addClass("hs_form_focus");
	  }
	);	
	$('.hs_form_text').blur(
	function () {
	    $(this).removeClass("hs_form_focus").addClass("hs_form_text");
	  }
	);	

	//left channel hover (Business, Investing, Tech, Entrepreneurs)
	$(".chLeft").hover(
	  function () {
	    $(this).addClass("channel_hover_left");
	  },
	  function () {
	    $(this).removeClass("channel_hover_left");
	  }
	);	

	//left channel hover (Business, Investing, Tech, Entrepreneurs)
	$(".chMiddle").hover(
	  function () {
	    $(this).addClass("channel_hover_middle");
	  },
	  function () {
	    $(this).removeClass("channel_hover_middle");
	  }
	);	

	//right channel hover (Op/Ed, Leadership, Lifestyle, Lists)
	$(".chRight").hover(
	  function () {
 	   $(this).addClass("channel_hover_right");
	  },
	  function () {
	    $(this).removeClass("channel_hover_right");
	  }
	);	
   $(".channel_hover_right > ul:last-child").addClass("last");

});

