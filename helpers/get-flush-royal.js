const _ = require('lodash');
const getStraightFlush = require('./helpers/get-straight-flush');

function getFlushRoyal(cards) {
    cards = _.cloneDeep(cards);
    cards = getStraightFlush(cards);

    if (cards && cards[0].value === 14) {
        return cards;
    }
}

const cards = [
	{
        suit: 'hearts',
        value: 14
    },
    {
        suit: 'hearts',
        value: 11
    },
    {
        suit: 'hearts',
        value: 13
    },
    {
        suit: 'hearts',
        value: 12
    },
    {
        suit: 'hearts',
        value: 10
    },
    {
        suit: 'clubs',
        value: 13
    },
    {
        suit: 'clubs',
        value: 12
    }
];

module.exports = getFlushRoyal;