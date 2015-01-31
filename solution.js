{
    init: function(elevators, floors) {

        function setElevatorCallbacks(i) {
            var e = elevators[i];

            e.on("idle", function() {
                // e.goToFloor(0);
            });

            e.on("floor_button_pressed", function(floorNum) {
                if (e.loadFactor() > 0.3) {
                    e.goToFloor(floorNum);
                }
            });
        }

        function bestElevatorGoToFloor(floorNum) {
            var shortestDistance = 1000000;
            var bestElevator = 0;
            for (var i=0; i<elevators.length; i++) {
                var currentDistance = Math.abs(elevators[i].currentFloor() - floors[floorNum].floorNum());
                if (currentDistance < shortestDistance) {
                    shortestDistance = currentDistance;
                    bestElevator = i;
                }
            }
            // return i;
            // if (elevators[bestElevator].loadFactor() < 0.3) {
                elevators[bestElevator].goToFloor(floorNum);
            // }
        }

        function setFloorCallbacks(j) {
            var f = floors[j];

            f.on("up_button_pressed", function() {
                bestElevatorGoToFloor(j);
            });

            f.on("down_button_pressed", function() {
                bestElevatorGoToFloor(j);
            });
        }

        for (var i = 0; i < elevators.length; i++) {
            setElevatorCallbacks(i);
        }

        for (var j = 0; j < floors.length; j++) {
            setFloorCallbacks(j);
        }

    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }


}