// Exercise 1.1 - Add HTML content
// ----------------------------------------------
const mainDiv = document.getElementById('main');

// Create all of the elements
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const paragraphOne = document.createElement('p');
const paragraphTwo = document.createElement('p');
const paragraphThree = document.createElement('p');
const image = document.createElement('img');
const source = document.createElement('a');

// Add content to the elements
h1.innerText = 'The best How I Met Your Mother episode (according to fans)'
h2.innerText = 'The Slap Bet (Season 2, Episode 9)';
paragraphOne.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';
paragraphTwo.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';
paragraphThree.innerText = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';
image.src = './images/robin-sparkles.jpg';
image.alt = 'Robin Sparkles';
source.href = 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/'
source.innerText = 'Source';

// Add content to the page!
mainDiv.appendChild(h1);
mainDiv.appendChild(paragraphOne);
mainDiv.appendChild(h2);
mainDiv.appendChild(image);
mainDiv.appendChild(paragraphTwo);
mainDiv.appendChild(paragraphThree);
mainDiv.appendChild(source);

// Add <link> to CSS
const head = document.getElementsByTagName('head');
const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
head[0].appendChild(stylesheet);

// Exercise 1.2 - Add class names
// ----------------------------------------------
// be sure to remove the code this section...

// Exercise 1.3 - Add class names
// ----------------------------------------------

// body
const body = document.getElementsByTagName('body');
body[0].style.background = 'rgba(246,187,33, .8) url(./images/yellow-umbrella.jpg) no-repeat';
body[0].style.backgroundSize = '100%';
body[0].style.fontFamily = '"Playfair Display", serif';

// #main
mainDiv.style.background = '#fafafa';
mainDiv.style.borderRadius = '4px';
mainDiv.style.boxShadow = '8px 10px 25px 0 rgba(128, 128, 128, .44)';
mainDiv.style.minWidth = '320px';
mainDiv.style.maxWidth = '600px';
mainDiv.style.margin = '36px';
mainDiv.style.padding = '4px 32px 32px';

// h1
h1.style.fontFamily = "'Open Sans', sans-serif";
h1.style.textAlign = 'center';

// h2
h2.style.fontFamily = "'Open Sans', sans-serif";

// img
image.style.border = '#fafafa';
image.style.borderRadius = '4px';
image.style.boxShadow = '4px 4px 14px rgba(128, 128, 128, .4)';
image.style.width = '100%';

// p
paragraphOne.style.fontSize = paragraphTwo.style.fontSize = paragraphThree.style.fontSize = '17px';
paragraphOne.style.lineHeight = paragraphTwo.style.lineHeight = paragraphThree.style.lineHeight = '1.5em';

// a
source.style.color = '#174E7C';
source.style.display = 'block';
source.style.fontWeight = '700';
source.style.marginTop = 'auto';
source.style.textAlign = 'right';
source.style.textDecoration = 'none';