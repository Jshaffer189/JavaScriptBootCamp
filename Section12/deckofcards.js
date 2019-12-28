// create deck
function initializeDeck() {
	deck = [];
	drawnCards = [];
	suits = [ 'hearts', 'diamonds', 'spades', 'clubs' ];
	values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
	const { suits, values, deck } = this;
	for (let value of values) {
		for (let suit of suits) {
			deck.push({ value, suit });
		}
	}
	return deck;
}

// draw single card
function drawCard(deck, drawnCards) {
	const card = deck.pop();
	drawnCards.push(card);
	return card;
}

// draw multiple cards
function drawMultiple(numCards, deck, drawnCards) {
	const cards = [];
	for (let i = 0; i < numCards; i++) {
		// draw a number cards per loop, push and return the array of cards drawn
		cards.push(drawCard(deck, drawnCards));
	}
	return cards;
}

// shuffle deck
function shuffle(deck) {
	const { deck } = this;
	// loop over array backwards
	for (let i = deck.length - 1; i > 0; i--) {
		// pick random index before current element
		let j = Math.floor(Math.random() * (i + 1));
		// numbers index'es swap using destructuring
		[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
	}
	return deck;
}

const firstDeck = initializeDeck();
const drawnCards = [];
shuffle(firstDeck);
const hand1 = drawMultiple(2, firstDeck, drawnCards);
const hand2 = drawMultiple(2, firstDeck, drawnCards);
const pokerHand = drawMultiple(5, firstDeck, drawnCards);
