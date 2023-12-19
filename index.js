// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const headquarters = 42;
    const distance = pickupLocation - headquarters;
    const belowDistance = 42 - pickupLocation;
    if (pickupLocation > headquarters) {
        return distance
    } else {
        return belowDistance
    }
    
}

distanceFromHqInBlocks()


function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation)*264;
}

distanceFromHqInFeet()

function distanceTravelledInFeet(start, destination){
    if (destination > start){
        return (destination - start)* 264;
    } else {
        return (start - destination)* 264;
    }
    
}

function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination);

    if (distanceTravelled <= 400) {
        return 0;

    } else if (distanceTravelled <= 2000) {
        return 0.02 * (distanceTravelled - 400);

    } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
        return 25;

    } else if (distanceTravelled >= 2500) {
        return 'cannot travel that far';
    }

    }

