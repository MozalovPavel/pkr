const _ = require('lodash');
const getFlush = require('./get-flush');
const getStraight = require('./get-straight');

function getStraightFlush(cards) {
    cards = _.cloneDeep(cards);
    cards = getFlush(cards);

    if (cards) {
        return getStraight(cards);
    }
}

const cards = [
	{
        suit: 'hearts',
        value: 2
    },
    {
        suit: 'hearts',
        value: 3
    },
    {
        suit: 'hearts',
        value: 5
    },
    {
        suit: 'hearts',
        value: 4
    },
    {
        suit: 'hearts',
        value: 14
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

module.exports = getStraightFlush;