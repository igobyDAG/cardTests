class Deck {
  numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  suits = ['♣', '♦', '♥', '♠'];

  cards = [];

  constructor() {
    // This lets the object initialize its card values (the 52 card deck.)
    this.createNewDeck();
  }

  createNewDeck = () => {
    /* Creates the 52 deck card. Has all possible number and suit combinations.
    object.cards would return all card faces. */
    this.cards = [];
    this.suits.forEach((suit) => {
      this.numbers.forEach((face) => {
        this.cards.push(face + suit);
      });
    });
  };

  getNewHand = (size) => {
    // Returns a hand. Any posible combination of cards. Removes face from cards aray.
    return new Array(size)
      .fill()
      .map(
        () =>
          this.cards.splice(Math.floor(Math.random() * this.cards.length), 1)[0]
      );
  };

  dispatchCards = (size) => {
    if (this.cards.length > 2) {
      return this.getNewHand(size);
    } else {
      this.createNewDeck();
      return this.getNewHand(size);
    }
  };
}

class Hand {
  cards = [];
  constructor(deck, size) {
    this.cards = deck.dispatchCards(size);
  }
}


deck = new Deck // a full deck of cards.
hand = new Hand(deck,3) // Just a hand, there can be many hands for a single deck

//console.log(deck.dispatchCards(3))
console.log(hand.cards)



module.exports = {
  Deck,
  Hand,
};
