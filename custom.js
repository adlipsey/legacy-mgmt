$(document).ready( function(){

//Docks menu to top of screen when it would not be visible
	var docked = false;
	var menu = $('#menu');
	var init = menu.offset().top;

	$(window).scroll(function() 
	{       

	    if (!docked && (menu.offset().top - $("html,body").scrollTop() < 0)) 
	        {
	            menu.css({
	                position : "fixed",
	                top: 0,
	            });
	            docked = true;
	        } 
	    else if(docked && $("html,body").scrollTop() <= init)
	        {
	            menu.css({
	                position : "static",
	                top: init + 'px',
	            });

	            docked = false;
	        }
	});

});