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

//plate calulation function
    function platecalculator ( plateWeights, platesAvailable, target, finalWeight) {
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
                }

                //sets the offset
                jQuery(".input-difference").text(target);

                //sets the final weight
                jQuery(".input-final").text(finalWeight - target);

            }
        }
    }