// Initial Values
let start;
let racers = [];
let winners = [];
const FROGS = 3;

// Initialize racers
const prepareRace = () => {

    for(let lane=0; lane<FROGS; lane++) {
        
        // Create an li element to represent a lane in the race.
        let li = document.createElement('li');
        
        // Get a random frog object from frogStable array.
        let index = Math.floor(Math.random() * frogStable.length);
        let frog = frogStable[index];
        
        // Add progress property of 0 and push to racers.
        frog.progress = 0;
        racers.push(frog);

        // Remove this choice of frog from frogStable.
        frogStable.splice(index, 1);
    
        // Create a span element to contain the frog info.
        let span = document.createElement('span');
        span.innerHTML = `${frog.number}`;
        span.className = `frog`;
        span.style.backgroundColor = frog.color;
    
        // Create another span to contain the name of the racer.
        let span2 = document.createElement('span');
        span2.innerHTML = `${frog.name} ${frog.progress}%`;
        span2.style.backgroundColor = `${frog.color}`;
    
        // Create a container for both frog spans.
        let frogdiv = document.createElement('div');
        frogdiv.id = `lane-${lane+1}`;
        frogdiv.style.left = '0%';
        
        // Append span to li, li to ol#track.
        frogdiv.appendChild(span);
        frogdiv.appendChild(span2);
        li.appendChild(frogdiv);
        document.querySelector('#track').appendChild(li);
    }
}

// Return a random distance to hop
const racingFrog = () => {

    for(let lane=0; lane<FROGS; lane++) {

        // Current racer and span
        let frog = racers[lane];
        let frogdiv = document.querySelector(`#lane-${lane+1}`);

        // Get new distance value
        let distance_left = 100 - frog.progress;
        let distance_to_run = Math.floor(Math.random() * 5) + 1;
        
        // Update progress & check for winners
        if(distance_to_run > distance_left) {
            stop();
            frog.progress = 100;
            winners.push(frog.name);
            document.querySelector('h1').innerHTML = `WINNER(S): ${winners.toString().replace(/,/g, ", ")}`;
        }
        else
            frog.progress += distance_to_run;

        // Update position
        frogdiv.style.left = `${frog.progress}%`;
        frogdiv.lastChild.innerHTML = `${frog.name} ${frog.progress}%`;
    }
}

const stop = () => clearInterval(start);

// Main
function main() {
    
    prepareRace();    
    start = setInterval(racingFrog, 1000);;
}

main();