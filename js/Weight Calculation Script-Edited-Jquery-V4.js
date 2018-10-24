// jQuery( document ).ready(function() {
// calculation function starts here

    function startcalc() {

        jQuery(".input-weightsneeded").val(null);

        //calls inputs to start calculation
        var weighttolift = jQuery(".input-weight").val();
        var percentage = jQuery(".input-percentage").val();
        var bar = jQuery(".input-bar").val();


        // calculates and logs final values
        var final = Math.floor(weighttolift * percentage);



        // calculates weight of the plates needed
        var finalPlateWeights = final - bar;


        //This creates an arrary for the weights available
        var plateWeights = [];

        $( ".input-weightsavailable" ).each( function(){
           plateWeights.push( $( this ).data( "weight" ));
        });
        


        //This creates an arrary for the number of plates available
        var platesAvailable = [];

        $( ".input-weightsavailable" ).each( function(){
           platesAvailable.push( $( this ).val());
        });

        //calls the plate calculator function
        platecalculator(plateWeights, platesAvailable, finalPlateWeights, final);

    }

        // var plateloader = jQuery(".b-platevisual__plates").html('<img src="images/45lbs-Plate.svg" class="b-platevisual__plate b-platevisual__plate--45">');
        // console.log(plateloader);
    function animatePlatesOut() {
        jQuery('.b-platevisual__plates--left').animate({
            opacity: 0,
            left: "-16%",
         }, {duration: 350, queue: false });
        jQuery('.b-platevisual__plates--right').animate({
            opacity: 0,
            left: "116%",
         }, {duration: 350, queue: false });
    }

    function animatePlatesIn() {
        jQuery('.b-platevisual__plates--left').animate({
            opacity: 1,
            left: "21%",
         }, {duration: 350, queue: false });
        jQuery('.b-platevisual__plates--right').animate({
            opacity: 1,
            left: "79%",
         }, {duration: 350, queue: false });
    }


//plate calulation function
    function platecalculator ( plateWeights, platesAvailable, target, finalWeight) {
        var weighthtml = "";
        //iterates though the plates availble.
        for (var i = 0; i < platesAvailable.length; i++) {
            //checks if the plate is less than or equal to the weight of plates needed
            if (plateWeights[i]*2 <= target) {
                var weightToAdd = Math.floor(target / (plateWeights[i]*2));
                
                //check if there are enough weights
                var plateCheck = Math.floor(platesAvailable[i]/2);
                if (weightToAdd > plateCheck) {
                    weightToAdd = plateCheck;
                }
                //subtracts added weights
                target = target - weightToAdd*(plateWeights[i]*2);

                //Adds plates required
                if (weightToAdd > 0) {
                    jQuery(".input-weightsneeded").eq(i).val(weightToAdd);
                    
                    //itterates through plates being added and saves html to string
                    for(var x = 0; x < weightToAdd; x++){
                      //instead of putting in a string and updating all at once. append the weights each time. Make function and append and then animate. Replace this block.
                      var platename = plateWeights[i];
                      if (platename == 2.5) {
                        platename = '2half';
                      }
                      weighthtml += '<img src="images/'+ platename +'lbs-Plate.svg" class="b-platevisual__plate b-platevisual__plate--' + platename + '">';
                    }
                }

                //sets the offset
                jQuery(".input-difference").text(target);

                //sets the final weight
                jQuery(".input-final").text(finalWeight - target);

            }
        }
        //replaces and animates html for plates required to bar.
        //if statment works but need to figureout how to step animation.
        if (jQuery('.b-platevisual__plate').length > 0) {
            //animates plates off
            animatePlatesOut();
            //updates plates - v2
            setTimeout(function(){
                jQuery(".b-platevisual__plates").html(weighthtml);
            }, 500);
            //animates plates back on
            setTimeout(animatePlatesIn, 350);
        } else {
            //updates plates
            jQuery(".b-platevisual__plates").html(weighthtml);
            //animates plates back on
            animatePlatesIn();
        }
    }

  //Smooth Scrolling

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    //show reset button on calculate
    jQuery(".input-calculate").click(function(){
        jQuery(".b-infoentry__reset, .b-platevisual__weightfinal, .b-platevisual__weightdifference").show();
    });

    //hide reset button on weight input
    jQuery('.input-weight').keyup(function() {
        jQuery('.b-infoentry__reset').hide();
    }).keyup();

    //reset inputs and plate visuals
    jQuery(".b-infoentry__reset").click(function(){
        jQuery(".input-weight, .input-weightsneeded").val('');
        jQuery(".input-final, .input-difference").html('0');
        animatePlatesOut();
        jQuery(".b-infoentry__reset, .b-platevisual__weightfinal, .b-platevisual__weightdifference").hide();
    });

    //Saves scroll position on focus and restores
    var savedScrollTop;
    function saveScroll() {
        savedScrollTop = jQuery(document).scrollTop();
    }
    

    function restoreScroll(){
        jQuery("html, body").animate({ 
            scrollTop: savedScrollTop
        }, 500).offset().top;
    }

    //jQuery event watching
    jQuery(".input-weight").on("focus", function(){
        saveScroll();
    });
    jQuery(".input-weight").on('blur', function(){
        restoreScroll()
    });
  });
