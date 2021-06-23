const { Deck, Hand } = require('./deck');
const deck = new Deck();


test('deck should be shuffled', () => {
  expect(deck.cards.length).toBe(52);
});

test('deck should return hand of size 5', () => {
  expect(deck.cards.length).toBeGreaterThan(5);
  const hand = new Hand(deck, 5);
  expect(hand.cards.length).toBe(5);
});

test('deck should return random cards', () => {
  const hand = new Hand(deck, 5);
  const handObject = Object.fromEntries(
    hand.cards.map((card) => {
      return [card, ''];
    })
  );

  expect(Object.keys(handObject).length).toBe(5);
});

test('No two hands can be the same', () => {
  const hand1 = new Hand(deck,3);
  const hand2 = new Hand(deck,3);
  expect(hand1.cards == hand2.cards).toBe(false)
});