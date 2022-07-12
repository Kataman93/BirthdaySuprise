
/*let saveEl = document.getElementById('save-el');
let merac = document.getElementById('count-el');
let brojac = 0;

function save() {
    varijabla = brojac + ' - ';
    saveEl.textContent += varijabla;
    brojac = 0;
    merac.textContent = brojac;

}

function uvecanje() {
  brojac += 1;
  merac.textContent = brojac;
};

function save() {
    varijabla = ' - ' + brojac;
    saveEl.textContent += varijabla;
    brojac = 0;
    merac.textContent = brojac;
}

let myPoints = 0;

function add3Points() {
  myPoints += 3;
}

function remove1Points() {
  myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
add3Points();
remove1Points();
remove1Points();
console.log(myPoints); */

/*let sum = 0;
let cards = [];
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
  name: 'Катарина',
  chips: 200
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ': $' + player.chips;


function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if(randomNumber === 1) {
    return 11
  } else if(randomNumber > 10) {
    return 10
  } else {
    return randomNumber
  }};

  console.log(cards);

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  isAlive = true;
  renderGame();
};

function renderGame() {

  cardsEl.textContent = "Карте: ";

  for( i = 0; i < cards.length; i++ ) {
    cardsEl.textContent += cards[i] + " ";
  };

  sumEl.textContent = "Укупно: " + sum;

    if(sum <= 20) {
    message = "Да ли желите да извучете нову карту?";
} else if(sum === 21) {
    message = "Добили сте блекџек";
    hasBlackjack = true;
} else {
  message = "Изгубили сте игру";
  isAlive = false;
}  messageEl.textContent = message;
};

function newCard() {
  if(isAlive === true && hasBlackjack === false) {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
  }
};*/

/*let myLeads = [""]
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteButton = document.getElementById('delete-btn')
const saveTabButton = document.getElementById('savetab-btn')

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}


saveTabButton.addEventListener("click", ()=> {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
    })
 })
 

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})

function render(leads) {
  let listItems = ""
for (let i = 0; i < leads.length; i++) {
  listItems += 
  `<li>
  <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
  </li>`
}
ulEl.innerHTML = listItems
}

deleteButton.addEventListener('dblclick', ()=>{
  localStorage.clear()
  myLeads = []
  ulEl.innerHTML = ""
})


const podaci = [
  {ime: 'Marko', prezime: 'Markovic'},
  {ime: 'Darko', prezime: 'Marinkovic'},
  {ime: 'Zarko', prezime: 'Kovacevic'},
  {ime: 'Dusko', prezime: 'Momirovic'}
]

for(let pre of podaci) {
  console.log(podaci);
}*/
  





















