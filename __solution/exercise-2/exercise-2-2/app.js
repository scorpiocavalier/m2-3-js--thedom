// Preset values
const FROGS = 3;

const track = document.getElementById('track');

// Exercise 2.1
for (let laneCount = 1; laneCount <= FROGS; laneCount++) {
    let lane = document.createElement('li');
    track.appendChild(lane);
    
    let number = document.createElement('span');
    number.innerText = laneCount;
    lane.appendChild(number);
    
    lane.id = `frog-${laneCount}`;
}

// Exercise 2.2
// 3. Define array
let racers = [];

// 4. Write for loop
for (let x = 0; x < FROGS; x++) {
    const newFrog = frogStable[x];
    racers.push(newFrog);    
}

// 5. console.log(racers)
console.log(racers);