let racers = [];
const FROGS = 3;

for(let lane=1; lane<=FROGS; lane++) {
    
    let li = document.createElement('li');
    li.id = `lane-${lane}`;
    
    let index = Math.floor(Math.random() * 5);
    let frog = frogStable[index];
    
    let span = document.createElement('span');
    span.className = `frog`;
    span.style.backgroundColor = frog.color;
    span.innerHTML = `${frog.name} ${frog.number}`;
    
    racers.push(frog);
    racers[randomID].progress = '0';

    li.appendChild(span);
    document.querySelector('track').appendChild(li);
}