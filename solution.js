{
    init: function(elevators, floors) {

        function setElevatorCallbacks(i) {
            var e = elevators[i];

            e.on("idle", function() {
            });

            e.on("floor_button_pressed", function(floorNum) {
                if (e.loadFactor() > 0.5) {
                    e.goToFloor(floorNum);
                }
            })

        }

        for(var i = 0; i < elevators.length; i++) {
            setElevatorCallbacks(i);
        }

    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }


}