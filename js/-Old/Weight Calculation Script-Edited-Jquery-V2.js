    var weighttolift = 0;
    var percentage = 0;
    var target = 0;
    var weightsNeeded = 0;




    // calculation function starts here

    function startcalc() {

        var weighttolift = jQuery(".input-weight").val();
        var percentage = jQuery(".input-percentage").val();
        var bar = jQuery(".input-bar").val();


        // targeted values
        var final = Math.floor(weighttolift * percentage);
        console.log("final", final);

        var finalPlateWeights = final - bar;

        jQuery(".input-final").val(final);




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
        platecalculator(plateWeights, platesAvailable, finalPlateWeights);

    }

    function platecalculator ( plateWeights, platesAvailable, target) {
        console.log("Plate Weights", plateWeights);
        console.log("Plate Available", platesAvailable);
        console.log("Weight To Add", target);
        for (var i = 0; i < platesAvailable.length; i++) {
            if (plateWeights[i]*2 <= target) {
                var weightToAdd = Math.floor(target / (plateWeights[i]*2));
                target = target - weightToAdd*(plateWeights[i]*2);
                console.log("plateWeights " + plateWeights[i]);
                console.log("weightToAdd " + weightToAdd);
                console.log("target " + target);
                if (weightToAdd > 0) {
                    jQuery(".input-weightsneeded").eq(i).val(weightToAdd);
                }
                jQuery(".input-difference").val(target);
            }
        }
    }