// Initial Values
let racers = [];
const FROGS = 3;

// Initialize racers
const prepareRacers = () => {

    for(let lane=0; lane<FROGS; lane++) {
        
        // Create an li element to represent a lane in the race.
        let li = document.createElement('li');
        
        // Get a random frog object from frogStable array.
        let index = Math.floor(Math.random() * 5);
        let frog = frogStable[index];
        
        // Add this frog to the racers array and reset its progress.
        racers.push(frog);
        racers[lane].progress = '0';
    
        // Create a span element to contain the frog info.
        let span = document.createElement('span');
        span.innerHTML = `${frog.number}`;
        span.className = `frog`;
        span.style.backgroundColor = frog.color;
    
        // Create another span to contain the name of the racer.
        let span2 = document.createElement('span');
        span2.innerHTML = `${frog.name} ${frog.progress}%`;
    
        // Create a container for both frog spans.
        let frogdiv = document.createElement('div');
        frogdiv.id = `lane-${lane+1}`;
        
        // Append span to li, li to ol#track.
        frogdiv.appendChild(span);
        frogdiv.appendChild(span2);
        li.appendChild(frogdiv);
        document.querySelector('#track').appendChild(li);
    }
}

// Return a random distance to hop
const racingFrog = frog => {

    let distance_left = 100 - frog.progress.valueOf();
    let distance = Math.floor(Math.random() * distance_left) + 1;
    frog.progress = (Number(frog.progress) + distance).toString();
}

let start = frog => setInterval(racingFrog(frog), 1000);
// let delayStart = frog => setTimeout(interval(frog), Math.floor(Math.random() * 3));
let stop = () => clearInterval(start);


// Main
function main() {
    
    prepareRacers();

    let winner = false;

    while(!winner) {
        
        // Start/Continue the race
        for(let i=0; i<FROGS; i++) {
            
            // Current frog.
            let frog = racers[i]
            
            // Move a frog.
            // delayStart(frog);
            start(frog);
            
            // Check if the frog won.
            winner = frog.progress >= 100
        }
        
        document.querySelector(`lane-${i}`).style.left = `${frog.progress}%`;
    }
    
    stop();
    
    document.querySelector('h1').innerHTML = 'WE GOT A WINNER!';
}

main();