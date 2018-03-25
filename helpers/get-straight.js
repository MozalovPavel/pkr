const _ = require('lodash');

function getStraight(cards) {
    // глубокое копирование
    cards = _.cloneDeep(cards);
    
    let cardsLength = cards.length;
    let cardsByValue = cards
        .reduce((cards, card, index) => {
            cards[card.value] = card;

            return cards;
        }, []);

    cardsByValue[1] = cardsByValue[14];
    cardsByValue.reverse();

    let straightCards = [];

    for (let i = 0; i < cardsByValue.length; i++) {
        if (straightCards.length === 5) {
            break;
        }

        let card = cardsByValue[i];

        if (!card) {
            straightCards = [];

            continue;
        }

        straightCards.push(card);
    }
    
    if (straightCards.length === 5) {
        return straightCards;
    }
}

module.exports = getStraight;