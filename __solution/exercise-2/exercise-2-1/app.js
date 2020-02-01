// Preset values
const FROGS = 3;

// Bind #track for easy reference
const track = document.getElementById('track');

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (let laneCount = 1; laneCount <= FROGS; laneCount++) {
    // 2. Create li
    let lane = document.createElement('li');
    track.appendChild(lane);
    
    // 3. Create span and add it to the li
    let number = document.createElement('span');
    number.innerText = laneCount;
    lane.appendChild(number);
    
    // 4. Assign an id to each lane
    lane.id = `frog-${laneCount}`;
}