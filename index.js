function distanceFromHqInBlocks(pickUp) {
  parseInt(pickUp);
  return Math.abs(pickUp -42);
}

function distanceFromHqInFeet(pickUp) {
  return (distanceFromHqInBlocks(pickUp) * 264);
}

function distanceTravelledInFeet(startB, destinationB) {
  return Math.abs((destinationB - startB) * 264);
}

function calculatesFarePrice(startB, destinationB) {
  let feetTravelled = distanceTravelledInFeet(startB, destinationB);
  if (feetTravelled <= 400) {
    return 0;
  }
  else if (feetTravelled > 400 && feetTravelled <= 2000) {
    return ((feetTravelled - 400) * .02);
  }
  else if (feetTravelled > 2000 && feetTravelled <= 2500) {
    return 25;
  }
  else if (feetTravelled > 2500) {
    return 'cannot travel that far';
  }
}