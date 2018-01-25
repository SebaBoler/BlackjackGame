let suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight',
  'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];
let  deck = [],
  playerDeck = [],
  dealerDeck = [];

let textArea = document.getSelection('#text-area');
let newGameButton = document.querySelector('#new-game-button');
let hitButton = document.querySelector('#hit-button');
let stayButton = document.querySelector('#stay-button');
let visualPlayerDeck = document.querySelector('#player-deck');
let visualDealerDeck = document.querySelector('#dealer-deck');
let allCards = document.querySelector('#all-cards');

hitButton.style.display = 'none';
stayButton.style.display = 'none';

function createDeck() {
  for (let suitId = 0; suitId < suits.length; suitId += 1) {
    for (let valueId = 0; valueId < values.length; valueId += 1) {
      let card = {
        suit: suits[suitId],
        value : values[valueId],
      };
      deck.push(card);
    }
  }
  return deck;
}

deck = createDeck();

function getCardString(card) {
  return `${card.suit} of ${card.value}`;
}

function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i += 1) {
    let swapId = Math.trunc(Math.random() * deck.length);  //56
    let tmp = deck[swapId];     
    deck[swapId] = deck[i];
    deck[i] = tmp;
  }
}

function getNextCard(deck) {
  return deck.shift();
}

function showPlayerDeck(deck) {
  for (let y = 0; y < playerDeck.length; y+= 1) {
    visualPlayerDeck.innerText += '\n' + getCardString(playerDeck[y]);
  }
}

function showDealerDeck(deck) {
  for (let y = 0; y < dealerDeck.length; y += 1) {
    visualDealerDeck.innerText += '\n' + getCardString(dealerDeck[y]);
  }  
}

newGameButton.addEventListener('click', function() {
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  shuffleDeck(deck);
  for (let x = 0; x < deck.length; x += 1) {
    allCards.innerText += ', ' + getCardString(deck[x]);
  }

  playerDeck = [getNextCard(deck), getNextCard(deck)];
  dealerDeck = [getNextCard(deck), getNextCard(deck)];

  showPlayerDeck(playerDeck);
  showDealerDeck(dealerDeck);


});

