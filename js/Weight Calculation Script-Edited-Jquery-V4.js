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
        //replaces html for plates required to bar.
        jQuery(".b-platevisual__plates").html(weighthtml);
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
        jQuery(".b-infoentry__reset").show();
    });

    //reset inputs and plate visuals
    jQuery(".b-infoentry__reset").click(function(){
        jQuery(".input-weight, .input-weightsneeded").val('');
        jQuery(".input-final, .input-difference").html('0');
        jQuery(".b-platevisual__plates").html('');
        jQuery(".b-infoentry__reset").hide();
    });

    //Saves scroll position on focus and restores
    var savedScrollTop;
    function saveScroll() {
        savedScrollTop = jQuery(document).scrollTop();
        console.log(savedScrollTop);
    }
    

    function restoreScroll(){
        jQuery("html, body").animate({ 
            scrollTop: savedScrollTop
        }, 250).offset().top;
    }

    //jQuery event watching
    jQuery(".input-weight").on("focus", function(){
        saveScroll();
    });
    jQuery(".input-weight").on('blur', function(){
        restoreScroll()
    });
  });
