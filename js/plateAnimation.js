function test () {
	//checks if there are any plates showing
	if (document.body.contains('.platevisual__plate')) {
		//animates plates off
		jQuery('.b-platevisual__plates--left').animate({
		    opacity: 0,
		    left: "-=37%",
		  }, {duration: 500, queue: false });
		jQuery('.b-platevisual__plates--right').animate({
		    opacity: 0,
		    left: "+=37%",
		  }, {duration: 500, queue: false });
		//updates plates
		jQuery(".b-platevisual__plates").html(weighthtml);
		//animates plates back on
		jQuery('.b-platevisual__plates--left').animate({
		    opacity: 1,
		    left: "+=37%",
		  }, {duration: 500, queue: false });
		jQuery('.b-platevisual__plates--right').animate({
		    opacity: 1,
		    left: "-=37%",
		  }, {duration: 500, queue: false });
	} else {
		//updates plates
		jQuery(".b-platevisual__plates").html(weighthtml);
		//animates plates back on
		jQuery('.b-platevisual__plates--left').animate({
		    opacity: 1,
		    left: "+=37%",
		  }, {duration: 500, queue: false });
		jQuery('.b-platevisual__plates--right').animate({
		    opacity: 1,
		    left: "-=37%",
		  }, {duration: 500, queue: false });
		}
	}
