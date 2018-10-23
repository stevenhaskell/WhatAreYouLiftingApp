function test () {
	        //replaces and animates html for plates required to bar.
        //if statment works but need to figureout how to step animation.
        if (jQuery('.b-platevisual__plate').length > 0) {
            console.log("Test")
            //animates plates off
            jQuery('.b-platevisual__plates--left').animate({
                opacity: 0,
                left: "-16%",
              }, {duration: 500, queue: false });
            jQuery('.b-platevisual__plates--right').animate({
                opacity: 0,
                left: "116%",
              }, {duration: 500, queue: false });
            //updates plates
            jQuery(".b-platevisual__plates").html(weighthtml);
            //animates plates back on
            jQuery('.b-platevisual__plates--left').animate({
                opacity: 1,
                left: "21%",
              }, {duration: 500, queue: false });
            jQuery('.b-platevisual__plates--right').animate({
                opacity: 1,
                left: "79%",
              }, {duration: 500, queue: false });
        } else {
            //updates plates
            jQuery(".b-platevisual__plates").html(weighthtml);
            //animates plates back on
            jQuery('.b-platevisual__plates--left').animate({
                opacity: 1,
                left: "21%",
              }, {duration: 500, queue: false });
            jQuery('.b-platevisual__plates--right').animate({
                opacity: 1,
                left: "79%",
              }, {duration: 500, queue: false });
        }
	}

function animatePlatesOut () {
	jQuery('.b-platevisual__plates--left').animate({
        opacity: 0,
        left: "-16%",
     }, {duration: 500, queue: false });
    jQuery('.b-platevisual__plates--right').animate({
        opacity: 0,
        left: "116%",
     }, {duration: 500, queue: false });
}

function animatePlatesIn () {
	jQuery('.b-platevisual__plates--left').animate({
        opacity: 1,
        left: "21%",
     }, {duration: 500, queue: false });
    jQuery('.b-platevisual__plates--right').animate({
        opacity: 1,
        left: "79%",
     }, {duration: 500, queue: false });
}


function test () {
	        //replaces and animates html for plates required to bar.
        //if statment works but need to figureout how to step animation.
        if (jQuery('.b-platevisual__plate').length > 0) {
            console.log("Test")
            //animates plates off
            animatePlatesOut();
            //updates plates
            jQuery(".b-platevisual__plates").html(weighthtml);
            //animates plates back on
            setTimeout(animatePlatesIn(), 250);
        } else {
            //updates plates
            jQuery(".b-platevisual__plates").html(weighthtml);
            //animates plates back on
            animatePlatesIn();
        }
	}