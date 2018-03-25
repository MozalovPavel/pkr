const _ = require('lodash');
const { getCardsCounters, getHighCounter } = require('./helpers/cards-counter');

function getFullHouse(cards) {
    cards = _.cloneDeep(cards);

    let counters = getCardsCounters(cards);

    let pairCounter = getHighCounter(counters, 2);
    let threesCounter = getHighCounter(counters, 3);

    if (pairCounter && threesCounter) {
        return cards.sort((firstCard, secondCard) => {
            var isPair = secondCard.value === pairCounter.value && firstCard.value !== threesCounter.value;
            var isThrees = secondCard.value === threesCounter.value;
            if (isThrees || isPair) {
                return 1;
            }
            
            return -1;
        })
        .slice(0, 5);
    }
}

const cards = [
	{
        suit: 'H',
        value: 14
    },
    {
        suit: 'H',
        value: 10
    },
    {
        suit: 'H',
        value: 10
    },
    {
        suit: 'H',
        value: 14
    },
    {
        suit: 'H',
        value: 4
    },
    {
        suit: 'C',
        value: 5
    },
    {
        suit: 'C',
        value: 14
    }
];

module.exports = getFullHouse;