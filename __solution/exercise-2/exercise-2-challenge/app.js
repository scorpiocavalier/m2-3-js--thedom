// Here is the updated code to fulfill the Challenge.

// Exercise 2.2
let racers = [];
while (racers.length < FROGS) {
    const newFrog = frogStable[Math.floor(Math.random() * (frogStable.length))];
    
    // need to confirm that they are not already in the race.
    function validateEntry(frog) {
        return racers.some(function(racer) {
            return racer.name === frog.name;
        })
    }
    // the frog is not already in the race, add him to racers.
    if (!validateEntry(newFrog)) racers.push(newFrog);
}

