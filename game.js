const cards = ["HA", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "HT", "HJ", "HQ", "HK",
    "DA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "DT", "DJ", "DQ", "DK",
    "CA", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "CT", "CJ", "CQ", "CK",
    "SA", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "ST", "SJ", "SQ", "SK"
];
// количество карт одной масти
const sameSuitCardsCount = 13;

const values = {
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
};

const suits = {
    H: {
        suit: 'hearts',
        id: 1
    },
    D: {
        suit: 'diamonds',
        id: 14
    },
    C: {
        suit: 'clubs',
        id: 27
    },
    S: {
        suit: 'spades',
        id: 40
    }
};
class Game {
    constructor () {
        this.deck = this._generateDeck();
    }

    _generateDeck() {
        return cards
            .map((card, index) => index)
            .sort(() => 0.5 - Math.random())
            .map(card => _getCardByChars(card));
    }

    _getCards(number) {
        number = Math.min(number, this.deck.length);
        let position = this.deck.length - number;

        return this.deck.splice(position);
    }

    _getCardByChars(chars) {
        var suitChar = chars[0];
        var faceChar = chars[1];
    
        return {
            id: suits[suitChar].id + values[faceChar] - 2,
            suit: suits[suitChar].suit,
            value: values[faceChar]
        };
    }

    _sortCards(cards) {
        return cards.sort((firstCard, secondCard) => firstCard.value -secondCardb.value);
    }
}

export default Game;