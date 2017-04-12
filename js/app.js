

/*!
 Back to top button
 **/


$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#toTop:hidden').stop(true, true).fadeIn();
    } else {
        $('#toTop:visible').stop(true, true).fadeOut();
    }
});

/*!
 Parallax top animation
  jarallax.addAnimation('.planet1',[{progress: "0%", opacity:"1"}, {progress: "100%", opacity:"0"}]);
	  jarallax.addAnimation('.mydetail1',[{progress: "0%", opacity:"1"}, {progress: "100%", opacity:"0"}]);
	  jarallax.addAnimation('.mydetail2',[{progress: "0%", opacity:"1"}, {progress: "100%", opacity:"0"}]);
	  jarallax.addAnimation('.header',[{progress: "0%", opacity:"1"}, {progress: "100%", opacity:"0"}]);
 **/	
	
	init = function(){
      jarallax = new Jarallax();
      
    jarallax.addAnimation('.planet1',[{progress: "0%", top:"26%"}, {progress: "100%", top: "-60%"}]);
	 jarallax.addAnimation('.mydetail1',[{progress: "0%", top:"60%"}, {progress: "100%", top: "-30%"}]);
	 jarallax.addAnimation('.mydetail2',[{progress: "0%", top:"70%"}, {progress: "100%", top: "-25%"}]);
     jarallax.addAnimation('.behind',[{progress: "0%", top:"0%"}, {progress: "100%", top: "-10%"}]);
	 jarallax.addAnimation('.header',[{progress: "0%", top:"0%"}, {progress: "100%", top: "100%"}]);
	  
	 
    }


/*!
Mix it up init
 **/	
//$(function () {
   		$('#Container').mixItUp();
		init();
//	});  
	
	
	
