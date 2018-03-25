const _ = require('lodash');

function getFlush(cards) {
    cards = _.cloneDeep(cards);

    let suitsCounts = {
        hearts: 0,
        diamonds: 0,
        clubs: 0,
        spades: 0
    };

    cards.forEach(card => {
        suitsCounts[card.suit]++;
    });

    let flashSuit = Object.keys(suitsCounts).find(key => {
        return suitsCounts[key] >= 5;
    });
    
    if (!flashSuit) {
        return false;
    }

    return cards
            .filter(card => card.suit === flashSuit)
            .sort((firstCard, secondCard) => {
                return secondCard.value - firstCard.value;
            })
            .slice(0, 5);
}

const cards = [
	{
        suit: 'clubs',
        value: 5
    },
    {
        suit: 'hearts',
        value: 10
    },
    {
        suit: 'hearts',
        value: 9
    },
    {
        suit: 'clubs',
        value: 5
    },
    {
        suit: 'hearts',
        value: 7
    },
    {
        suit: 'hearts',
        value: 14
    },
    {
        suit: 'hearts',
        value: 2
    }
];

module.exports = getFlush;