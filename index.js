const button = document.querySelector('button');
const input = document.querySelector('input');

const container = document.createElement('div');
const par = document.createElement('p');

container.setAttribute('class', 'container');
par.setAttribute('class', 'par');

var first, second, third = null;

function funnyFinder() {
  var funparts = [
    ['Willy the Goblin','Big Daddy','Father Christmas' ],
    ['the soup kitchen','Disneyland','the White House'],
    ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away']
  ]
  
  funparts.forEach((elm, idx) => {
    let randomIndex = Math.floor(Math.random() * 3);
    if (idx === 0) {
      first = elm[randomIndex];
    }
    if (idx === 1) {
      second = elm[randomIndex];
    }
    if (idx === 2) {
      third = elm[randomIndex];
    } 
  });
}

function handleClick(e) {
  if (e.target && input.value !== '') {
    e.preventDefault();
    funnyFinder();
    let capInput = input.value[0].toUpperCase() + input.value.slice(1);
    par.textContent = `It was 94 fahrenheit outside, so ${first} went for a walk. When they got to ${second}, they stared in horror for a few moments, then ${third}. ${capInput} saw the whole thing, but was not surprised — ${first} weighs 300 pounds, and it was a hot day.`;
    container.appendChild(par);
    document.body.appendChild(container);
    input.value = '';
  }
}

button.addEventListener('click', handleClick);
