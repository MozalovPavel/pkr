const _ = require('lodash');
const { getCardsCounters, getMaxCounter } = require('./helpers/cards-counter');

function getFourOfKind(cards) {
    cards = _.cloneDeep(cards);

    let counters = getCardsCounters(cards);
    let maxCounter = getMaxCounter(counters);

    if (maxCounter.count === 4) {
        return cards
            .sort((firstCard, secondCard) => {
                if (secondCard.value === maxCounter.value) {
                    return 1;
                }

                return secondCard.value - firstCard.value;
            });
    }
}

const cards = [
	{
        suit: 'H',
        value: 14
    },
    {
        suit: 'H',
        value: 11
    },
    {
        suit: 'H',
        value: 9
    },
    {
        suit: 'H',
        value: 4
    },
    {
        suit: 'H',
        value: 4
    },
    {
        suit: 'C',
        value: 4
    },
    {
        suit: 'C',
        value: 4
    }
];

module.exports = getFourOfKind;